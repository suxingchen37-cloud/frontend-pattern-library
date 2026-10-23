#!/usr/bin/env node
/**
 * tools/fix-motion.mjs —— 给老批次补 motion（机械 / 物理 / 印刷 / 无动效）。
 * 判据来自这条资产自己写的曲线与交互方式，不靠名字猜：
 *   物理 = spring 曲线 cubic-bezier(.34,1.56,.64,1) / --ease-spring / 拖拽·指针·手势驱动
 *   机械 = linear / steps() / 定时推进（加载、计数、进度）
 *   印刷 = cubic-bezier(.2,.75,.25,1) / --ease / 淡入淡出·位移揭示·排印
 *   无动效 = 这条样板本身不含任何动画（表格、面包屑、404 这类），只是形状与状态摆在那儿
 * 「无动效」描述的是现状，不是限制——要动随时加，按上面三族挑一种加就行。
 * 用法： node tools/fix-motion.mjs --plan     只出表，不写盘
 *        node tools/fix-motion.mjs --apply    写 JSON（只填 motion 为空的）
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'data', 'assets', 'motion');
const APPLY = process.argv.includes('--apply');

const PHYS = /cubic-bezier\(\s*\.34\s*,\s*1\.56|var\(--ease-spring\)/;
const MECH = /steps\(|linear(?![a-z-])/;
const PRINT = /cubic-bezier\(\s*\.2\s*,\s*\.75|var\(--ease\)(?!-)/;
// 「有没有动」只看真会动的东西：过渡、动画、关键帧、逐帧循环、滚动吸附。
// 光写个 opacity / transform 当摆设不算动（heatmap 就是被这条误判过的）。
const MOVES = /transition\s*:\s*[^;\s]|animation\s*:|@keyframes|requestAnimationFrame|setInterval|scroll-snap-type/;

/* 机器判完再人工过一遍的：写清为什么和默认判据不一样 */
const OVERRIDE = {
  'audio-wave': ['机械', '循环摆动的波形，是仪器不是揭示'],
  'heatmap': ['无动效', '只有静态深浅，没有任何过渡'],
  'infinite-scroll': ['机械', '滚动到尽头补数据，节奏由数据到达决定'],
  'parallax': ['物理', '跟指针走的位移'],
  'rating': ['物理', '手指点选、星星跟手感'],
  'read-progress-x': ['机械', '进度条按滚动位置线性推进'],
  'scrolly': ['物理', '滚动吸附到整屏，有惯性落点'],
  'strength': ['机械', '仪表条按强度逐格点亮'],
  'table-sort': ['印刷', '表头箭头翻向与行序重排，是版面变化'],
  'chips': ['印刷', '选中只换墨色，没有位移'],
  'bento-grid': ['印刷', '格子换尺寸，不弹跳'],
  'ratio-switch': ['印刷', '版式随比例切换，缓入缓出'],
  'count-up': ['机械', '数字按步数往上蹦，是仪表读数不是揭示'],
  'skeleton': ['机械', '骨架屏的扫光是匀速循环'],
  'snap-carousel': ['物理', '滚动吸附有落点，跟手'],
};

const CAT_DEFAULT = {
  加载: '机械', 数据: '机械', 表单: '物理', 拖拽: '物理', 手势: '物理', 微交互: '物理',
  光标: '物理', 列表: '印刷', 长文: '印刷', 排印: '印刷', 内容: '印刷', 媒体: '印刷',
  入场: '印刷', 过渡: '印刷', 浮层: '物理', 反馈: '物理', 导航: '印刷', 布局: '印刷',
  无障碍: '机械', 滚动: '印刷', 状态页: '印刷',
};

const rows = [];
for (const f of fs.readdirSync(DIR).filter(x => x.endsWith('.json') && !x.startsWith('_'))) {
  const p = path.join(DIR, f);
  const a = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (a.motion) continue;
  if (OVERRIDE[a.id]) { rows.push({ a, pick: OVERRIDE[a.id][0], why: '人工覆写：' + OVERRIDE[a.id][1], p }); continue; }
  const css = a.css || '', init = a.init || '';
  if (!MOVES.test(css + init)) { rows.push({ a, pick: '无动效', why: '这条本身不含动画', p }); continue; }
  const phys = PHYS.test(css) || /onpointermove|addEventListener\(['"]pointerdown|touchmove|wheel|dragover|onmove/i.test(init);
  const mech = MECH.test(css) || /setInterval|requestAnimationFrame/i.test(init);
  const print = PRINT.test(css);
  const votes = [];
  if (phys) votes.push('物理');
  if (print) votes.push('印刷');
  if (mech) votes.push('机械');
  let pick, why;
  if (votes.length === 1) { pick = votes[0]; why = '单一曲线'; }
  else if (votes.length > 1) { pick = phys ? '物理' : print ? '印刷' : '机械'; why = '混用 ' + votes.join('+') + ' → 取 ' + pick; }
  else { pick = CAT_DEFAULT[a.cat] || '印刷'; why = '有运动但没写曲线，按分类 ' + a.cat; }
  if (OVERRIDE[a.id]) { pick = OVERRIDE[a.id][0]; why = '人工覆写：' + OVERRIDE[a.id][1]; }
  rows.push({ a, pick, why, p });
}
const c = {};
rows.forEach(r => c[r.pick] = (c[r.pick] || 0) + 1);
console.log((APPLY ? '已写入 ' : '待写入 ') + rows.length + ' 条 → ' + JSON.stringify(c));
const need = rows.filter(r => r.why.includes('混用') || r.why.includes('按分类'));
console.log('需要你过目的（混用曲线 / 没写曲线只能按分类）' + need.length + ' 条：');
need.forEach(r => console.log('  ' + r.pick.padEnd(4) + r.a.id.padEnd(22) + r.a.cat.padEnd(6) + r.why));
if (!APPLY) { console.log('\n（--plan：未写盘）'); process.exit(0); }
for (const r of rows) { r.a.motion = r.pick; fs.writeFileSync(r.p, JSON.stringify(r.a, null, 2) + '\n', 'utf8'); }
console.log('\n✓ 已写 ' + rows.length + ' 个 JSON');
