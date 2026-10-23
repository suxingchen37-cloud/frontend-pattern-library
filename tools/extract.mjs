#!/usr/bin/env node
/**
 * tools/extract.mjs —— 把 4 个源头里的动效资产抽取成「一条一文件」的 JSON。
 *
 * 源头：
 *   motion-lab.html  const DEMOS = [ ... ];  const INITS = { ... };
 *   lab-more.js / lab-extra2.js / lab-extra3.js
 *                    window.DEMOS_EXTRA / window.INITS_EXTRA
 *
 * 输出：
 *   data/assets/motion/<id>.json        （JSON.stringify(obj, null, 2) + "\n"）
 *   data/_extract-report.json
 *
 * 用法：
 *   node tools/extract.mjs            抽取并写盘
 *   node tools/extract.mjs --dry-run  只统计，不写盘
 *   node tools/extract.mjs --verify   抽取后逐条核对 body/css 与源码原文逐字节一致
 *   node tools/extract.mjs --prune    顺带删除 motion 目录里不属于本次抽取的旧 json（默认只报告）
 *
 * 保真：body / css / init 一律取源文件里「求值后的真实值」——
 * 数组与对象字面量用 node:vm 求值，不做任何 trim / 重排 / 格式化。
 */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const OUT_DIR = path.join(ROOT, 'data', 'assets', 'motion');
const REPORT_PATH = path.join(ROOT, 'data', '_extract-report.json');

const SOURCE_FILES = [
  { key: 'inline', file: 'motion-lab.html' },
  { key: 'lab-more', file: 'lab-more.js' },
  { key: 'lab-extra2', file: 'lab-extra2.js' },
  { key: 'lab-extra3', file: 'lab-extra3.js' },
];

const REQUIRED = ['id', 'cat', 't', 'en', 'd', 'body', 'css', 'init', 'source', 'motion'];

/* ------------------------------------------------------------------ *
 * 1. 括号配平扫描器：跳过字符串 / 模板字符串 / 注释 / 正则字面量
 * ------------------------------------------------------------------ */

function skipString(src, i) {
  const q = src[i];
  i += 1;
  while (i < src.length) {
    const c = src[i];
    if (c === '\\') { i += 2; continue; }
    if (c === q) return i + 1;
    i += 1;
  }
  throw new Error('unterminated string at ' + i);
}

function skipTemplate(src, i) {
  // src[i] === 反引号
  i += 1;
  while (i < src.length) {
    const c = src[i];
    if (c === '\\') { i += 2; continue; }
    if (c === '`') return i + 1;
    if (c === '$' && src[i + 1] === '{') {
      const end = matchBracket(src, i + 1);
      i = end + 1;
      continue;
    }
    i += 1;
  }
  throw new Error('unterminated template literal at ' + i);
}

function skipRegex(src, i) {
  i += 1; // 跳过开头的 /
  let inClass = false;
  while (i < src.length) {
    const c = src[i];
    if (c === '\\') { i += 2; continue; }
    if (c === '\n') throw new Error('unterminated regex at ' + i);
    if (c === '[') { inClass = true; i += 1; continue; }
    if (c === ']') { inClass = false; i += 1; continue; }
    if (c === '/' && !inClass) {
      i += 1;
      while (i < src.length && /[a-z]/i.test(src[i])) i += 1; // flags
      return i;
    }
    i += 1;
  }
  throw new Error('unterminated regex at ' + i);
}

const REGEX_PREV = new Set(['(', '[', '{', ',', ';', ':', '=', '!', '&', '|', '?', '+', '-', '*', '%', '^', '~', '<', '>', null]);
const PAIRS = { '(': ')', '[': ']', '{': '}' };

/** 从 openIdx（必须是 ( [ { 之一）出发，返回与之配平的闭括号下标。 */
function matchBracket(src, openIdx) {
  if (!PAIRS[src[openIdx]]) throw new Error('not an opening bracket at ' + openIdx);
  const stack = [src[openIdx]];
  let i = openIdx + 1;
  let prev = null; // 上一个「有效」字符，用于判断 / 是除号还是正则
  while (i < src.length) {
    const c = src[i];
    const n = src[i + 1];
    if (c === '/' && n === '/') {
      const nl = src.indexOf('\n', i);
      i = nl < 0 ? src.length : nl;
      continue;
    }
    if (c === '/' && n === '*') {
      const e = src.indexOf('*/', i + 2);
      i = e < 0 ? src.length : e + 2;
      continue;
    }
    if (c === '/' && REGEX_PREV.has(prev)) { i = skipRegex(src, i); prev = 'a'; continue; }
    if (c === "'" || c === '"') { i = skipString(src, i); prev = 'a'; continue; }
    if (c === '`') { i = skipTemplate(src, i); prev = 'a'; continue; }
    if (PAIRS[c]) { stack.push(c); prev = c; i += 1; continue; }
    if (c === ')' || c === ']' || c === '}') {
      const top = stack[stack.length - 1];
      if (PAIRS[top] !== c) throw new Error('bracket mismatch: ' + top + ' closed by ' + c + ' at ' + i);
      stack.pop();
      if (stack.length === 0) return i;
      prev = c;
      i += 1;
      continue;
    }
    if (!/\s/.test(c)) prev = /[A-Za-z0-9_$]/.test(c) ? 'a' : c;
    i += 1;
  }
  throw new Error('unbalanced literal: reached EOF with stack ' + stack.join(''));
}

/** 定位 anchor 之后第一个 openCh 字面量，返回其边界（含括号）。 */
function findLiteral(src, anchor, openCh) {
  const at = src.indexOf(anchor);
  if (at < 0) throw new Error('anchor not found: ' + anchor);
  let i = at + anchor.length;
  while (i < src.length && /\s/.test(src[i])) i += 1;
  if (src[i] !== openCh) throw new Error('expected ' + openCh + ' after anchor ' + anchor + ' at ' + i);
  const end = matchBracket(src, i);
  return { open: i, close: end, literal: src.slice(i, end + 1) };
}

/* ------------------------------------------------------------------ *
 * 2. 从四个源头取值
 * ------------------------------------------------------------------ */

function readSource(file) {
  const abs = path.join(ROOT, file);
  const buf = fs.readFileSync(abs);
  return { src: buf.toString('utf8'), bytes: buf.length, bom: buf.length >= 3 && buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf };
}

function runLiteral(literal, label) {
  try {
    return vm.runInNewContext('(' + literal + ')', {}, { filename: label });
  } catch (err) {
    throw new Error('vm 求值失败（' + label + '）: ' + err.message);
  }
}

function loadInline() {
  const { src, bytes, bom } = readSource('motion-lab.html');
  const demosLit = findLiteral(src, 'const DEMOS = ', '[');
  const initsLit = findLiteral(src, 'const INITS = ', '{');
  const demos = runLiteral(demosLit.literal, 'motion-lab.html#DEMOS');
  const inits = runLiteral(initsLit.literal, 'motion-lab.html#INITS');
  if (!Array.isArray(demos)) throw new Error('inline DEMOS 不是数组');
  return {
    key: 'inline', file: 'motion-lab.html', src, bytes, bom,
    regionStart: demosLit.open, regionEnd: demosLit.close,
    demos, inits,
    shape: 'DEMOS[' + demos.length + '] / INITS{' + Object.keys(inits).length + '}',
  };
}

function loadJs(key, file) {
  const { src, bytes, bom } = readSource(file);
  const windowObj = {};
  const quiet = () => {};
  const sandbox = { window: windowObj, console: { log: quiet, warn: quiet, error: quiet, info: quiet, debug: quiet } };
  sandbox.self = windowObj;
  const ctx = vm.createContext(sandbox);
  try {
    vm.runInContext(src, ctx, { filename: file });
  } catch (err) {
    throw new Error('vm 执行失败（' + file + '）: ' + err.message);
  }
  const demos = windowObj.DEMOS_EXTRA;
  if (!Array.isArray(demos)) throw new Error(file + ' 执行后 window.DEMOS_EXTRA 不是数组');
  const inits = windowObj.INITS_EXTRA || {};
  const arrAt = src.indexOf('concat([');
  const regionStart = arrAt >= 0 ? src.indexOf('[', arrAt) : src.indexOf('= [') + 2;
  return {
    key, file, src, bytes, bom,
    regionStart, regionEnd: matchBracket(src, regionStart),
    demos, inits,
    shape: 'DEMOS_EXTRA[' + demos.length + '] / INITS_EXTRA{' + Object.keys(inits).length + '}',
  };
}

/* ------------------------------------------------------------------ *
 * 3. 归一化 + 写盘
 * ------------------------------------------------------------------ */

function toAsset(demo, source, inits, problems) {
  const id = demo && demo.id;
  let init = null;
  if (typeof demo.init === 'function') init = String(demo.init);
  else if (typeof inits[id] === 'function') init = String(inits[id]);
  else if (inits[id] !== undefined) problems.push({ id, issue: 'INITS 里的 ' + id + ' 不是函数（' + typeof inits[id] + '），按 null 处理' });

  const asset = {
    id,
    cat: demo.cat,
    t: demo.t,
    en: demo.en,
    d: demo.d,
    body: demo.body,
    css: demo.css,
    init,
    source,
    motion: '',
  };
  if (Array.isArray(demo.tags)) asset.tags = demo.tags.slice();

  for (const f of REQUIRED) {
    if (!(f in asset)) problems.push({ id, issue: '缺少字段 ' + f });
  }
  for (const f of ['id', 'cat', 't', 'en', 'd', 'body', 'css']) {
    const v = asset[f];
    if (typeof v !== 'string') problems.push({ id, issue: '字段 ' + f + ' 不是字符串（' + typeof v + '）' });
    else if (v.length === 0) problems.push({ id, issue: '字段 ' + f + ' 为空' });
  }
  if (typeof id !== 'string' || !/^[a-z0-9-]+$/.test(id || '')) {
    problems.push({ id, issue: 'id 不是 [a-z0-9-] 的 kebab-case' });
  }
  const known = ['id', 'cat', 't', 'en', 'd', 'body', 'css', 'init', 'tags', 'motion'];
  const extra = Object.keys(demo).filter((k) => !known.includes(k));
  if (extra.length) problems.push({ id, issue: '源里有未纳入契约的字段: ' + extra.join(', ') });
  return asset;
}

/* ------------------------------------------------------------------ *
 * 4. --verify：body / css 与源文件原文逐字节对照
 * ------------------------------------------------------------------ */

function sha(s) {
  return crypto.createHash('sha256').update(s, 'utf8').digest('hex').slice(0, 16);
}

function rawField(src, regionStart, regionEnd, id, field) {
  const markers = ["id:'" + id + "'", 'id:"' + id + '"'];
  let at = -1;
  for (const m of markers) {
    const p = src.indexOf(m, regionStart);
    if (p >= 0 && p < regionEnd && (at < 0 || p < at)) at = p;
  }
  if (at < 0) return { found: false, reason: '源里找不到 id:' + id };
  const fIdx = src.indexOf(field + ':', at);
  if (fIdx < 0 || fIdx >= regionEnd) return { found: false, reason: '找不到 ' + field + ':' };
  let i = fIdx + field.length + 1;
  while (i < src.length && /\s/.test(src[i])) i += 1;
  const q = src[i];
  if (q !== '`' && q !== "'" && q !== '"') return { found: false, reason: field + ' 不是字面量' };
  const end = q === '`' ? skipTemplate(src, i) : skipString(src, i);
  return { found: true, raw: src.slice(i + 1, end - 1), quote: q, start: i, end };
}

/** 把模板字面量内容切成「静态片段」：丢掉 ${ ... } 插值部分（插值里的嵌套模板也一起跳过）。 */
function splitTemplateChunks(raw) {
  const chunks = [];
  let cur = '';
  let i = 0;
  while (i < raw.length) {
    const c = raw[i];
    if (c === '\\') { cur += raw.slice(i, i + 2); i += 2; continue; }
    if (c === '$' && raw[i + 1] === '{') {
      chunks.push(cur);
      cur = '';
      const end = matchBracket(raw, i + 1);
      i = end + 1;
      continue;
    }
    cur += c;
    i += 1;
  }
  chunks.push(cur);
  return chunks.filter((x) => x.length > 0);
}

function verify(sources, assets) {
  const lines = [];
  const failures = [];
  const interpolated = [];
  let compared = 0;
  let exact = 0;
  for (const s of sources) {
    for (const a of assets.filter((x) => x.source === s.key)) {
      for (const field of ['body', 'css']) {
        const r = rawField(s.src, s.regionStart, s.regionEnd, a.id, field);
        if (!r.found) { failures.push({ id: a.id, field, reason: r.reason }); continue; }
        compared += 1;
        if (r.raw === a[field]) { exact += 1; continue; }
        if (r.raw.includes('$' + '{')) {
          // 源文件这一条本身就是模板插值（运行时拼字符串），值 != 原文属正常：
          // 改为核对「静态片段是否按顺序原样出现在值里」，仍可证明没有改字。
          const chunks = splitTemplateChunks(r.raw);
          let cursor = 0;
          let ok = true;
          const missing = [];
          for (const ch of chunks) {
            const at = a[field].indexOf(ch, cursor);
            if (at < 0) { ok = false; missing.push(ch.slice(0, 60)); break; }
            cursor = at + ch.length;
          }
          if (ok) { interpolated.push({ id: a.id, field, chunks: chunks.length }); continue; }
          failures.push({ id: a.id, field, reason: '模板插值但静态片段没按顺序原样出现', missing });
          continue;
        }
        if (r.raw.includes('\\')) {
          failures.push({ id: a.id, field, reason: '原文含反斜杠转义（原文 != 值属正常，但需人工确认）', rawBytes: Buffer.byteLength(r.raw, 'utf8'), jsonBytes: Buffer.byteLength(a[field], 'utf8'), rawSha: sha(r.raw), jsonSha: sha(a[field]) });
          continue;
        }
        failures.push({
          id: a.id, field,
          reason: '与源文件原文不一致',
          jsonBytes: Buffer.byteLength(a[field], 'utf8'),
          rawBytes: Buffer.byteLength(r.raw, 'utf8'),
          jsonSha: sha(a[field]),
          rawSha: sha(r.raw),
        });
      }
    }
  }
  lines.push('逐字节对照 ' + compared + ' 组（每条 body+css）：完全一致 ' + exact + ' 组；模板插值 ' + interpolated.length + ' 组（按静态片段顺序校验通过）；真不一致 ' + failures.length + ' 组');
  if (interpolated.length) lines.push('模板插值（源文件用 ${...} 拼字符串，值 != 原文属正常）：' + JSON.stringify(interpolated));
  for (const f of failures) lines.push('  ✗ ' + JSON.stringify(f));
  return { lines, compareCount: compared, failures, interpolated };
}

function spot(sources, assets, sourceKey, id) {
  const s = sources.find((x) => x.key === sourceKey);
  const a = assets.find((x) => x.id === id);
  const out = [];
  for (const field of ['body', 'css']) {
    const r = rawField(s.src, s.regionStart, s.regionEnd, id, field);
    const same = r.found && r.raw === a[field];
    out.push('  ' + field + ': json ' + Buffer.byteLength(a[field], 'utf8') + 'B sha ' + sha(a[field]) +
      ' / 源 ' + (r.found ? Buffer.byteLength(r.raw, 'utf8') + 'B sha ' + sha(r.raw) : '未找到') +
      (same ? '  ✓ 逐字节一致' : '  ✗ 不一致'));
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * 5. main
 * ------------------------------------------------------------------ */

function main() {
  const argv = process.argv.slice(2);
  const dry = argv.includes('--dry-run');
  const doVerify = argv.includes('--verify');
  const prune = argv.includes('--prune');

  const sources = SOURCE_FILES.map((s) => (s.key === 'inline' ? loadInline() : loadJs(s.key, s.file)));

  const problems = [];
  const assets = [];
  const seen = new Map();
  const duplicateIds = [];
  for (const s of sources) {
    for (const demo of s.demos) {
      const a = toAsset(demo, s.key, s.inits, problems);
      if (seen.has(a.id)) duplicateIds.push({ id: a.id, first: seen.get(a.id), again: s.key });
      else seen.set(a.id, s.key);
      assets.push(a);
    }
  }

  const bySource = {};
  const byCat = {};
  for (const s of sources) bySource[s.key] = 0;
  for (const a of assets) {
    bySource[a.source] = (bySource[a.source] || 0) + 1;
    byCat[a.cat] = (byCat[a.cat] || 0) + 1;
  }

  const orphanInits = [];
  const initsDeclared = {};
  for (const s of sources) {
    const ids = new Set(s.demos.map((d) => d.id));
    const keys = Object.keys(s.inits);
    initsDeclared[s.key] = keys.length;
    for (const k of keys) if (!ids.has(k)) orphanInits.push({ source: s.key, id: k });
  }
  const initCount = assets.filter((a) => typeof a.init === 'string' && a.init.length > 0).length;

  const report = {
    version: 1,
    generatedBy: 'tools/extract.mjs',
    note: '本文件是抽取报告，不是资产；data/ 下下划线开头的文件在 build 时应跳过。',
    total: assets.length,
    bySource,
    byCat,
    duplicateIds,
    initCount,
    initsDeclared,
    orphanInits,
    missingFields: problems,
    skipped: {
      rule: 'data/assets/motion 下文件名以 _ 开头的 *.json 不是资产（构建期临时/说明文件），build 与校验时必须跳过。',
      inMotionDir: [],
    },
    staleFiles: [],
    sources: sources.map((s) => ({ source: s.key, file: s.file, bytes: s.bytes, bom: s.bom, demos: s.demos.length, inits: Object.keys(s.inits).length, region: [s.regionStart, s.regionEnd], shape: s.shape })),
  };

  let existing = [];
  try { existing = fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.json')); } catch { existing = []; }
  const wanted = new Set(assets.map((a) => a.id + '.json'));
  for (const f of existing) {
    if (wanted.has(f)) continue;
    if (f.startsWith('_')) { report.skipped.inMotionDir.push(f); continue; }
    report.staleFiles.push('data/assets/motion/' + f);
  }

  console.log('源文件：');
  for (const s of sources) {
    console.log('  ' + s.key.padEnd(11) + s.file.padEnd(18) + String(s.demos.length).padStart(4) + ' 条  ' + s.shape + '  (' + s.bytes + ' bytes, BOM=' + s.bom + ')');
  }
  console.log('合计 ' + assets.length + ' 条；重复 id ' + duplicateIds.length + ' 个；带 init ' + initCount + ' 条；孤儿 init ' + orphanInits.length + ' 个；字段问题 ' + problems.length + ' 条');
  console.log('按 source: ' + JSON.stringify(bySource));
  console.log('按 cat(' + Object.keys(byCat).length + ' 类): ' + JSON.stringify(byCat));
  if (duplicateIds.length) console.log('重复 id: ' + JSON.stringify(duplicateIds));
  if (orphanInits.length) console.log('孤儿 init: ' + JSON.stringify(orphanInits));
  if (problems.length) console.log('字段问题: ' + JSON.stringify(problems, null, 2));
  if (report.staleFiles.length) console.log('目录里多余的旧文件（未被本人删除，加 --prune 可删）: ' + JSON.stringify(report.staleFiles));

  if (dry) { console.log('\n--dry-run：未写盘。'); return; }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const a of assets) {
    fs.writeFileSync(path.join(OUT_DIR, a.id + '.json'), JSON.stringify(a, null, 2) + '\n', 'utf8');
  }
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2) + '\n', 'utf8');
  console.log('\n已写入 ' + assets.length + ' 个文件 → data/assets/motion/');
  console.log('已写入报告 → data/_extract-report.json');

  if (prune && report.staleFiles.length) {
    for (const rel of report.staleFiles) {
      fs.unlinkSync(path.join(ROOT, rel));
      console.log('已删除多余文件: ' + rel);
    }
  }

  if (doVerify) {
    console.log('\n=== 逐字节核对：body / css 对源文件原文 ===');
    const v = verify(sources, assets);
    for (const l of v.lines) console.log(l);
    if (v.failures.length) process.exitCode = 1;
    console.log('\n=== 抽样 1/3 内联 · fade-stagger ===');
    for (const l of spot(sources, assets, 'inline', 'fade-stagger')) console.log(l);
    console.log('=== 抽样 2/3 lab-more · otp ===');
    for (const l of spot(sources, assets, 'lab-more', 'otp')) console.log(l);
    console.log('=== 抽样 3/3 lab-extra3 · drop-cap ===');
    for (const l of spot(sources, assets, 'lab-extra3', 'drop-cap')) console.log(l);
    console.log('\n=== init 抽样 ===');
    for (const id of ['otp', 'tag-input']) {
      const a = assets.find((x) => x.id === id);
      if (!a) { console.log('  ' + id + ': 不存在'); continue; }
      const first = a.init ? a.init.split('\n')[0].trim() : '(null)';
      console.log('  ' + id + ': ' + (a.init ? a.init.length + ' 字符，首行「' + first + '」尾字符「' + a.init.slice(-1) + '」' : '无 init'));
    }
  }
}

main();