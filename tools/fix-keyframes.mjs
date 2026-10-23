#!/usr/bin/env node
/**
 * tools/fix-keyframes.mjs —— 给所有 @keyframes 名字补上本条 id 前缀。
 * 原因：卡片渲染时 @keyframes 是全局发出的，两条资产用同名关键帧会互相覆盖。
 * 改名同时替换 css 里的引用和 init 字符串里出现的同名关键帧。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'data', 'assets', 'motion');
const APPLY = process.argv.includes('--apply');

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.json') && !f.startsWith('_'));
const log = [];
const cache = new Map();
const read = (id) => { if (!cache.has(id)) cache.set(id, JSON.parse(fs.readFileSync(path.join(DIR, id + '.json'), 'utf8'))); return cache.get(id); };

/* 先把 hotspots 的逐元素坐标改成自定义属性（数据），位置本身写进 css */
{
  const a = read('hotspots');
  if (/style="left:/.test(a.css) || true) {
    const before = a.body;
    a.body = a.body.replace(/style="left:([\d.]+%);top:([\d.]+%)"/g, 'style="--x:$1;--y:$2"');
    if (before !== a.body) {
      a.css = a.css.replace('.hot3{position:absolute;', '.hot3{position:absolute;left:var(--x);top:var(--y);');
      log.push('· hotspots 坐标改 --x/--y，位置收进 css');
    }
  }
}

for (const f of files) {
  const a = read(f.replace(/\.json$/, ''));
  const names = [...new Set([...(a.css || '').matchAll(/@keyframes\s+([\w-]+)/g)].map(m => m[1]))];
  const bad = names.filter(n => !n.startsWith('d-' + a.id + '-'));
  if (!bad.length) continue;
  for (const n of bad) {
    let core = n.replace(/^d-/, '').replace(/^(x2|x3|k)-/, '');
    const toks = a.id.split('-');
    for (const t of toks) {
      if (core === t) { core = ''; break; }
      if (core.startsWith(t + '-')) core = core.slice(t.length + 1);
    }
    if (!core) core = 'kf';
    const neu = 'd-' + a.id + '-' + core;
    const re = new RegExp('(?<![\\w-])' + n.replace(/[-]/g, '\\-') + '(?![\\w-])', 'g');
    const inCss = (a.css.match(re) || []).length;
    const inInit = a.init ? (a.init.match(re) || []).length : 0;
    const inBody = (a.body.match(re) || []).length;
    if (inCss < 1) { log.push('✗ ' + a.id + ' 关键帧 ' + n + ' 没找到引用，跳过'); continue; }
    a.css = a.css.replace(re, neu);
    if (inBody) a.body = a.body.replace(re, neu); // 关键帧名同时是 class 名，body 必须一起改
    if (a.init && inInit) a.init = a.init.replace(re, neu);
    log.push('· ' + a.id + ' ' + n + ' → ' + neu + '（css ' + inCss + ' 处' + (inBody ? '，body ' + inBody + ' 处' : '') + (inInit ? '，init ' + inInit + ' 处' : '') + '）');
  }
}
console.log(log.join('\n'));
console.log('\n共 ' + log.filter(l => l.startsWith('·')).length + ' 处改名，' + log.filter(l => l.startsWith('✗')).length + ' 处跳过');
if (!APPLY) { console.log('（--plan，未写盘）'); process.exit(0); }
for (const [id, a] of cache) fs.writeFileSync(path.join(DIR, id + '.json'), JSON.stringify(a, null, 2) + '\n', 'utf8');
console.log('✓ 已写 ' + cache.size + ' 个 JSON');
