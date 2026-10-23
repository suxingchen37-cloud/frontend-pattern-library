#!/usr/bin/env node
/**
 * tools/fix-scale.mjs —— C 阶段：把老批次的字号 / 过渡时长 / 过渡曲线收进令牌表。
 * 三条规则，都只动「状态切换」相关的声明：
 *   1) font-size → 7 档里最近的一档，正好居中的取小的那个（缩小不会撑破布局，放大可能换行）
 *   2) transition 里的时长 → 120/180/280/900 最近的一档；@keyframes 与循环 animation 不动（那是节奏不是切换）
 *   3) transition 里的 ease / ease-in / ease-out / ease-in-out → 按这条的运动语言取物理弹簧或印刷曲线
 * 用法：node tools/fix-scale.mjs --plan | --apply
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data', 'assets', 'motion');
const APPLY = process.argv.includes('--apply');
const FS_STEPS = [9, 11, 13, 15, 21, 34, 56, 96];
const DUR_STEPS = [120, 180, 280, 900];
const nearDown = (v, list) => list.reduce((best, s) => {
  const db = Math.abs(v - best), ds = Math.abs(v - s);
  if (ds < db) return s;
  if (ds === db) return Math.min(best, s);
  return best;
}, list[0]);

const rows = [];
const touched = [];
for (const f of fs.readdirSync(DIR).filter(x => x.endsWith('.json') && !x.startsWith('_'))) {
  const p = path.join(DIR, f);
  const a = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (a.source === 'v4') continue; // C 只回炉老批次；新资产本来就是按令牌写的
  let css = a.css || '';
  const before = css;
  let nFont = 0, nDur = 0, nEase = 0;

  css = css.replace(/font-size\s*:\s*([\d.]+)px/g, (whole, raw) => {
    const v = Number(raw);
    if (FS_STEPS.includes(v)) return whole;
    nFont++;
    return 'font-size:' + nearDown(v, FS_STEPS) + 'px';
  });

  const easeFor = a.motion === '物理' ? 'var(--ease-spring)' : a.motion === '机械' ? 'linear' : 'var(--ease)';

  css = css.replace(/transition\s*:([^;}]+)/g, (whole, body) => {
    let out = body.replace(/(^|[\s,])([\d.]+)(ms|s)\b/g, (w, pre, num, unit) => {
      const ms = unit === 'ms' ? Number(num) : Number(num) * 1000;
      if (DUR_STEPS.includes(ms)) return w;
      nDur++;
      return pre + nearDown(ms, DUR_STEPS) + 'ms';
    });
    out = out.replace(/\b(ease-in-out|ease-out|ease-in|ease)\b/g, () => { nEase++; return easeFor; });
    return 'transition:' + out;
  });

  if (css !== before) {
    a.css = css;
    touched.push({ p, a });
    rows.push('· ' + a.id.padEnd(22) + '字号 ' + nFont + ' · 时长 ' + nDur + ' · 曲线 ' + nEase);
  }
}
console.log(rows.join('\n'));
const totals = rows.reduce((s, r) => s, 0);
console.log('\n涉及 ' + touched.length + ' 条资产');
if (!APPLY) { console.log('（--plan，未写盘）'); process.exit(0); }
for (const { p, a } of touched) fs.writeFileSync(p, JSON.stringify(a, null, 2) + '\n', 'utf8');
console.log('✓ 已写 ' + touched.length + ' 个 JSON');
