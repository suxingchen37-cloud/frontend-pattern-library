#!/usr/bin/env node
/**
 * tools/fix-classes3.mjs —— 再补一遍：init 里「复合选择器字符串」中的类名。
 * 第二轮只处理了整串等于 '.类名' 的情况，漏掉 '.d-split .g' 这种带父级前缀的写法，
 * 结果 splitter 一类资产在页面上直接报 null。
 * 这次只改真正传给 querySelector / querySelectorAll / closest / matches 的参数，
 * 以及 init 里拼 HTML 的 class="..." —— 不碰 obj.items 这类属性访问。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'data', 'assets', 'motion');
const APPLY = process.argv.includes('--apply');
const PRIM = { 'demo-btn': 'd-btn', 'primary': 'd-btn-primary', 'hint': 'd-hint' };
const esc = (s) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

const log = [];
const touched = [];
for (const f of fs.readdirSync(DIR).filter(x => x.endsWith('.json') && !x.startsWith('_'))) {
  const p = path.join(DIR, f);
  const a = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (!a.init) continue;
  const body = new Set();
  for (const m of a.body.matchAll(/class\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) for (const t of (m[1] ?? m[2] ?? '').split(/\s+/)) if (t) body.add(t);
  const map = new Map();
  for (const c of body) { const pre = 'd-' + a.id + '-'; if (c.startsWith(pre)) map.set(c.slice(pre.length), c); }
  for (const [o, t] of Object.entries(PRIM)) if (body.has(t)) map.set(o, t);
  const olds = [...map.keys()].sort((x, y) => y.length - x.length);
  const fixSel = (sel) => sel.replace(new RegExp('\\.(' + olds.map(esc).join('|') + ')(?![\\w-])', 'g'), (w, n) => '.' + map.get(n));

  let hits = [];
  let out = a.init.replace(/(querySelector(?:All)?|closest|matches)\(\s*(['"])([^'"]*)\2\s*\)/g, (whole, fn, q, sel) => {
    const fixed = fixSel(sel);
    if (fixed !== sel) hits.push(fn + '(' + sel + ')→' + fixed);
    return fn + '(' + q + fixed + q + ')';
  });
  out = out.replace(/(class\s*=\s*["'])([^"']*)(["'])/g, (whole, head, val, tail) => {
    const toks = val.split(/\s+/).map(t => (map.has(t) ? (hits.push('class="' + val + '"→' + map.get(t)), map.get(t)) : t));
    return head + toks.join(' ') + tail;
  });
  if (!hits.length) continue;
  a.init = out;
  touched.push({ p, a });
  log.push('· ' + a.id.padEnd(20) + [...new Set(hits)].join('  '));
}
console.log(log.join('\n'));
console.log('\n补了 ' + touched.length + ' 条');
if (!APPLY) { console.log('（--plan，未写盘）'); process.exit(0); }
for (const { p, a } of touched) fs.writeFileSync(p, JSON.stringify(a, null, 2) + '\n', 'utf8');
console.log('✓ 已写 ' + touched.length + ' 个 JSON');
