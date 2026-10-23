// C 阶段盘点：老 144 条里有多少字号 / 过渡时长 / 缓和曲线不在令牌表上。
// 只统计 transition 里的时长与曲线；@keyframes 和循环 animation 的时长不算——那些是循环节奏，不是状态切换。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data', 'assets', 'motion');
const FS = [9, 11, 13, 15, 21, 34, 56, 96];
const DUR = [120, 180, 280, 900];
const near = (v, list) => list.reduce((a, b) => (Math.abs(b - v) < Math.abs(a - v) ? b : a));

const font = {}, dur = {}, ease = {};
let fontHits = 0, durHits = 0, easeHits = 0;
for (const f of fs.readdirSync(DIR).filter(x => x.endsWith('.json') && !x.startsWith('_'))) {
  const a = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'));
  const css = a.css || '';
  for (const m of css.matchAll(/font-size\s*:\s*([\d.]+)px/g)) {
    const v = Number(m[1]);
    if (FS.includes(v)) continue;
    fontHits++;
    const k = v + '→' + near(v, FS);
    font[k] = (font[k] || 0) + 1;
  }
  for (const m of css.matchAll(/transition\s*:([^;}]+)/g)) {
    const body = m[1];
    for (const d of body.matchAll(/([\d.]+)m?s\b/g)) {
      const raw = d[0];
      const ms = raw.endsWith('ms') ? parseFloat(raw) : parseFloat(raw) * 1000;
      if (DUR.includes(ms)) continue;
      durHits++;
      const k = raw + '→' + near(ms, DUR) + 'ms';
      dur[k] = (dur[k] || 0) + 1;
    }
    for (const e of body.matchAll(/\b(ease-in-out|ease-out|ease-in|ease)\b/g)) {
      easeHits++;
      ease[e[1]] = (ease[e[1]] || 0) + 1;
    }
  }
}
const top = o => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, 14).map(([k, v]) => k + ' ×' + v).join('  ');
console.log('字号不在 7 档：' + fontHits + ' 处\n  ' + top(font));
console.log('过渡时长不在 120/180/280/900：' + durHits + ' 处\n  ' + top(dur));
console.log('过渡曲线用关键词：' + easeHits + ' 处\n  ' + top(ease));
