#!/usr/bin/env node
/**
 * node tools/annotate-motion.mjs [--apply] [--check]
 *
 * 给 motion 字段留空的资产补上「机械 / 物理 / 印刷」三选一。
 * 不给 --apply 时只打印建议，不写盘。--check 用于确认是否还有空的。
 *
 * 判定顺序（先看代码证据，再看分类兜底）：
 *   1. css 里出现 steps( 或 linear 且不是 linear-gradient  → 机械
 *   2. css 里出现 spring 曲线 (.34,1.56) / inertia / pointer 拖拽  → 物理
 *   3. css 里出现 clip-path / mask / stroke-dash / textPath / 遮罩  → 印刷
 *   4. category 兜底：数据·加载·表格·状态页 → 机械；拖拽·手势·光标·微交互·浮层 → 物理；其余 → 印刷
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.argv[1], '..', '..');
const DIR = path.join(ROOT, 'data', 'assets', 'motion');
const APPLY = process.argv.includes('--apply');
const CHECK = process.argv.includes('--check');

const MECH_CATS = new Set(['数据', '加载', '表格', '滚动驱动']);
const PHYS_CATS = new Set(['拖拽', '手势', '光标', '微交互', '浮层', '3D 与透视', '过渡', '反馈', '导航', '列表', '表单']);
const PRINT_CATS = new Set(['入场', '排印', '内容', '长文', '媒体', '布局', '状态页', '无障碍', 'SVG 与路径']);

function guess(a) {
  const css = String(a.css || '');
  const init = String(a.init || '');
  const all = css + '\n' + init;
  if (/steps\(/.test(css)) return ['机械', 'steps() 分段推进'];
  if (/[^a-z-]linear[^a-z-]/.test(css.replace(/linear-gradient/g, ''))) return ['机械', 'linear 匀速'];
  if (/\.34\s*,\s*1\.56/.test(css) || /spring|inertia/i.test(all)) return ['物理', '弹簧/惯性'];
  if (/pointer(move|down|enter)?|setPointerCapture|touch/.test(init)) return ['物理', '指针拖拽'];
  if (/clip-path|mask:|stroke-dash|textPath|clipPath/.test(css)) return ['印刷', '遮罩/描边'];
  if (MECH_CATS.has(a.cat)) return ['机械', '分类兜底：' + a.cat];
  if (PHYS_CATS.has(a.cat)) return ['物理', '分类兜底：' + a.cat];
  if (PRINT_CATS.has(a.cat)) return ['印刷', '分类兜底：' + a.cat];
  return ['印刷', '未分类兜底'];
}

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.json') && !f.startsWith('_') && !f.startsWith('.'));
const counts = {};
let empty = 0, changed = 0;
const plan = [];

for (const f of files) {
  const p = path.join(DIR, f);
  const a = JSON.parse(fs.readFileSync(p, 'utf8'));
  counts[a.motion || '(空)'] = (counts[a.motion || '(空)'] || 0) + 1;
  if (a.motion) continue;
  empty++;
  const [motion, why] = guess(a);
  plan.push({ id: a.id, cat: a.cat, motion, why });
  if (APPLY) {
    a.motion = motion;
    fs.writeFileSync(p, JSON.stringify(a, null, 2) + '\n', 'utf8');
    changed++;
  }
}

if (CHECK) {
  if (empty) { console.error('✗ 还有 ' + empty + ' 条 motion 为空'); process.exit(1); }
  console.log('✓ motion 全部已标注：' + JSON.stringify(counts));
  process.exit(0);
}

plan.slice(0, 12).forEach((p) => console.log('  ' + p.id.padEnd(26) + p.motion + '  ← ' + p.why));
if (plan.length > 12) console.log('  … 另有 ' + (plan.length - 12) + ' 条');
console.log('');
console.log('待标注 ' + empty + ' 条' + (APPLY ? '，已写入 ' + changed + ' 条' : '（加 --apply 写盘）'));
console.log('当前分布：' + JSON.stringify(counts));
