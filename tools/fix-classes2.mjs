#!/usr/bin/env node
/**
 * tools/fix-classes2.mjs —— 补上一遍：init 里以「选择器字符串」出现的类名（'.hint'、'.pill'）
 * 第一轮只改了完整等于类名的字符串（classList.add('on') 那种），漏了 querySelector('.on') 这种。
 * 现象：20 条资产的交互直接报 null。
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
  /* 反推第一轮改名表：body 里的 d-<id>-X 说明原来叫 X；通用件说明原来叫 demo-btn/primary/hint */
  const map = new Map();
  for (const c of body) {
    const pre = 'd-' + a.id + '-';
    if (c.startsWith(pre)) map.set(c.slice(pre.length), c);
  }
  for (const [oldName, target] of Object.entries(PRIM)) if (body.has(target)) map.set(oldName, target);
  /* init 里可能出现的旧类名：选择器 '.X' 与 HTML 串里的 class="X ..." */
  const oldNames = [...map.keys()].sort((x, y) => y.length - x.length);
  let out = a.init, hits = [];
  for (const name of oldNames) {
    const target = map.get(name);
    const reSel = new RegExp('([\'"`])\\.' + esc(name) + '(?![\\w-])\\1', 'g');
    const n1 = (out.match(reSel) || []).length;
    out = out.replace(reSel, (w, q) => q + '.' + target + q);
    /* init 里拼 HTML 的情况：<i class="name ..."> */
    const reAttr = new RegExp('(class\\s*=\\s*[\'"])([^\'"]*)', 'g');
    let n2 = 0;
    out = out.replace(reAttr, (w, head, val) => {
      const toks = val.split(/\s+/);
      if (!toks.includes(name)) return w;
      n2++;
      return head + toks.map(t => (t === name ? target : t)).join(' ');
    });
    if (n1 || n2) hits.push(name + '→' + target + (n1 ? '(选择器 ' + n1 + ')' : '') + (n2 ? '(HTML 串 ' + n2 + ')' : ''));
  }
  if (!hits.length) continue;
  a.init = out;
  touched.push({ p, a });
  log.push('· ' + a.id.padEnd(20) + hits.join(' '));
}
console.log(log.join('\n'));
console.log('\n补了 ' + touched.length + ' 条');
if (!APPLY) { console.log('（--plan，未写盘）'); process.exit(0); }
for (const { p, a } of touched) fs.writeFileSync(p, JSON.stringify(a, null, 2) + '\n', 'utf8');
console.log('✓ 已写 ' + touched.length + ' 个 JSON');
