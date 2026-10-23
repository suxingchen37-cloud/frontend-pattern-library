#!/usr/bin/env node
/**
 * tools/emit.mjs —— 反向生成：data/assets/motion/*.json + data/order.json → 人看侧的 4 个源文件。
 *
 * 为什么需要它：extract.mjs 是「JS → JSON」的一次性导入器，它会无条件把 motion 写成空串。
 * 老 144 条的元数据（motion / tags）只活在 JSON 里，所以 JSON 必须是真源，
 * 人看的页面反过来由 JSON 生成。跑过 emit 之后不要再跑 extract，除非你确定要丢元数据。
 *
 * 用法：
 *   node tools/emit.mjs --snapshot   从现有 4 个文件抓 id 顺序，写 data/order.json（一次性）
 *   node tools/emit.mjs              按 JSON + order 重写 4 个文件，写完自动回读核对
 *   node tools/emit.mjs --check      只比对磁盘与生成结果，不写盘；有差异退出码 1
 *
 * 只管 source 为 inline / lab-more / lab-extra2 / lab-extra3 的条目；
 * source=v4 的那批仍由 tools/site.mjs 生成 lab-extra4.js。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { findLiteral, runLiteral, runFile } from './literal.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const MOTION = path.join(ROOT, 'data', 'assets', 'motion');
const ORDER = path.join(ROOT, 'data', 'order.json');
const TICK = String.fromCharCode(96);

const SOURCES = [
  { key: 'inline', file: 'motion-lab.html' },
  { key: 'lab-more', file: 'lab-more.js' },
  { key: 'lab-extra2', file: 'lab-extra2.js' },
  { key: 'lab-extra3', file: 'lab-extra3.js' },
];
const KEYS = SOURCES.map(s => s.key);

const rd = (p) => fs.readFileSync(p, 'utf8');
const argv = process.argv.slice(2);
const SNAP = argv.includes('--snapshot');
const CHECK = argv.includes('--check');

function loadAssets() {
  const files = fs.readdirSync(MOTION).filter(f => f.endsWith('.json') && !f.startsWith('_') && !f.startsWith('.'));
  return files.map(f => JSON.parse(rd(path.join(MOTION, f))));
}

/* ---------- 读取现有 4 个文件里的 id 顺序 ---------- */
function readOrderFromDisk() {
  const out = {};
  for (const s of SOURCES) {
    const src = rd(path.join(ROOT, s.file));
    let demos;
    if (s.key === 'inline') {
      demos = runLiteral(findLiteral(src, 'const DEMOS = ', '[').literal, s.file + '#DEMOS');
    } else {
      demos = runFile(src, s.file).DEMOS_EXTRA;
    }
    if (!Array.isArray(demos)) throw new Error(s.file + ': DEMOS 不是数组');
    out[s.key] = demos.map(d => d.id);
  }
  return out;
}

/* ---------- 字面量 ---------- */
function tpl(str, where) {
  if (typeof str !== 'string') throw new Error(where + ' 不是字符串');
  if (!str.includes(TICK) && !str.includes('$' + '{') && !str.includes('\\')) return TICK + str + TICK;
  return JSON.stringify(str); // 极少数含反引号/插值/反斜杠的内容退回双引号字面量
}
function item(a) {
  return '{id:' + "'" + a.id + "'" +
    ',cat:' + JSON.stringify(a.cat) +
    ',t:' + JSON.stringify(a.t) +
    ',en:' + JSON.stringify(a.en) +
    ',d:' + JSON.stringify(a.d) +
    ',body:' + tpl(a.body, a.id + '.body') +
    ',css:' + tpl(a.css, a.id + '.css') + '}';
}
function initBlock(entries, wrap) {
  if (!entries.length) return '';
  const head = wrap === 'inline' ? 'const INITS = {\n' : 'window.INITS_EXTRA = Object.assign(window.INITS_EXTRA || {}, {\n';
  const tail = wrap === 'inline' ? '\n};' : '\n});';
  const body = entries.map(([id, fn]) => '  ' + JSON.stringify(id) + ': ' + String(fn).trim() + ',').join('\n');
  return head + body + tail + '\n';
}
function demoBlock(items, wrap) {
  const head = wrap === 'inline' ? 'const DEMOS = [\n' : 'window.DEMOS_EXTRA = (window.DEMOS_EXTRA || []).concat([\n';
  const tail = wrap === 'inline' ? '\n];' : '\n]);';
  return head + items.map(item).join(',\n') + tail;
}

/* ---------- 生成 ---------- */
function build(all, order) {
  const out = new Map();
  for (const s of SOURCES) {
    const ids = order[s.key] || [];
    const list = ids.map(id => all.find(a => a.id === id)).filter(Boolean);
    const missing = ids.filter(id => !all.find(a => a.id === id));
    const extra = all.filter(a => a.source === s.key && !ids.includes(a.id)).map(a => a.id);
    if (missing.length) throw new Error(s.key + ': order 里的 id 在 data 里不存在 → ' + missing.join(', '));
    if (extra.length) throw new Error(s.key + ': data 里有 order 没登记的条目 → ' + extra.join(', ') + '（先跑 --snapshot 或手工补 order）');
    if (list.some(a => a.source !== s.key)) throw new Error(s.key + ': order 与 source 字段不一致');
    const inits = list.filter(a => a.init && String(a.init).trim()).map(a => [a.id, a.init]);
    if (s.key === 'inline') {
      const src = rd(path.join(ROOT, s.file));
      const d = findLiteral(src, 'const DEMOS = ', '[');
      const lit = demoBlock(list, 'inline').slice('const DEMOS = '.length).replace(/;+$/, ''); // 分号在区域外，别重复追加
      let next = src.slice(0, d.open) + lit + src.slice(d.close + 1);
      const i2 = findLiteral(next, 'const INITS = ', '{');
      const initsLit = '{\n' + inits.map(([id, fn]) => '  ' + JSON.stringify(id) + ': ' + String(fn).trim() + ',').join('\n') + '\n}';
      next = next.slice(0, i2.open) + initsLit + next.slice(i2.close + 1);
      out.set(s.file, next);
    } else {
      let js = '/* 自动生成：node tools/emit.mjs —— 不要手改。真源是 data/assets/motion/*.json 中 source=' + s.key + ' 的条目。 */\n';
      js += '/* DEMOS_EXTRA 会被主脚本并入 DEMOS；INITS_EXTRA 并入对应的交互初始化。 */\n';
      js += demoBlock(list, 'extra') + '\n';
      js += initBlock(inits, 'extra');
      out.set(s.file, js);
    }
  }
  return out;
}

/* ---------- 回读核对 ---------- */
function verify(all) {
  const bad = [];
  let n = 0;
  for (const s of SOURCES) {
    const src = rd(path.join(ROOT, s.file));
    let demos, inits;
    if (s.key === 'inline') {
      demos = runLiteral(findLiteral(src, 'const DEMOS = ', '[').literal, 'DEMOS');
      inits = runLiteral(findLiteral(src, 'const INITS = ', '{').literal, 'INITS');
    } else {
      const w = runFile(src, s.file);
      demos = w.DEMOS_EXTRA; inits = w.INITS_EXTRA || {};
    }
    for (const a of all.filter(x => x.source === s.key)) {
      const d = demos.find(x => x.id === a.id);
      if (!d) { bad.push(a.id + ' 在产物里找不到'); continue; }
      for (const f of ['cat', 't', 'en', 'd', 'body', 'css']) {
        n++;
        if (d[f] !== a[f]) bad.push(a.id + '.' + f + ' 与 JSON 不一致');
      }
      n++;
      const got = typeof d.init === 'function' ? String(d.init) : typeof inits[a.id] === 'function' ? String(inits[a.id]) : null;
      const want = a.init && String(a.init).trim() ? String(a.init).trim() : null;
      const norm = (v) => v === null ? null : String(v).replace(/\s+/g, ' ').trim();
      if (norm(got) !== norm(want)) bad.push(a.id + '.init 与 JSON 不一致');
    }
    if (demos.length !== all.filter(x => x.source === s.key).length) bad.push(s.key + ' 条数不对：产物 ' + demos.length);
  }
  return { bad, n };
}

/* ---------- main ---------- */
const all = loadAssets();
if (SNAP) {
  const order = { version: 1, note: '人看侧每个文件里的 id 顺序。emit.mjs 按它生成；新增老批次条目时要同步登记，否则 emit 报错。', generatedBy: 'tools/emit.mjs --snapshot' };
  Object.assign(order, readOrderFromDisk());
  fs.writeFileSync(ORDER, JSON.stringify(order, null, 2) + '\n', 'utf8');
  console.log('✓ data/order.json 已写入：' + KEYS.map(k => k + ' ' + order[k].length).join(' / '));
  process.exit(0);
}
if (!fs.existsSync(ORDER)) { console.error('✗ 缺 data/order.json，先跑 node tools/emit.mjs --snapshot'); process.exit(1); }
const order = JSON.parse(rd(ORDER));
const products = build(all, order);

let drift = 0;
for (const [name, content] of products) {
  const p = path.join(ROOT, name);
  if (rd(p) === content) continue;
  drift++;
  if (CHECK) console.error('✗ 漂移 ' + name);
  else fs.writeFileSync(p, content, 'utf8');
}
if (CHECK && drift) { console.error('✗ emit --check 失败：' + drift + ' 个文件与生成结果不一致'); process.exit(1); }

const { bad, n } = verify(all);
const old = all.filter(a => KEYS.includes(a.source)).length;
if (bad.length) {
  console.error('✗ 回读核对失败（' + bad.length + ' 处）：');
  bad.slice(0, 20).forEach(b => console.error('  ✗ ' + b));
  process.exit(1);
}
console.log('✓ ' + (CHECK ? 'emit --check 通过' : '写出 ' + products.size + ' 个文件') +
  ' | 老批次 ' + old + ' 条由 JSON 生成，回读逐字段核对 ' + n + ' 项全部一致');
