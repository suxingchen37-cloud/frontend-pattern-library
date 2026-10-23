#!/usr/bin/env node
/**
 * node tools/verify.mjs
 * 三方一致性自检：源数据(data/) ↔ AI 产物(agent/ + llms.txt) ↔ 站点(lab-extra4.js + 两个 HTML)
 * 只读，不写盘。任一项不一致 → 退出码 1。
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.argv[1], '..', '..');
const rd = (p) => fs.readFileSync(p, 'utf8');
const fails = [];
const ok = (msg) => console.log('  ok   ' + msg);
const bad = (msg) => { fails.push(msg); console.log('  FAIL ' + msg); };

// 1. 源数据
const dir = path.join(ROOT, 'data/assets/motion');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json') && !f.startsWith('_') && !f.startsWith('.'));
const assets = files.map(f => ({ f, a: JSON.parse(rd(path.join(dir, f))) }));
const ids = assets.map(x => x.a.id);
const idSet = new Set(ids);
assets.length === files.length ? ok('源数据 ' + assets.length + ' 条') : bad('条数不符');
if (idSet.size !== ids.length) bad('源数据 id 有重复');
for (const x of assets) if (x.f !== x.a.id + '.json') bad('文件名与 id 不一致: ' + x.f);
const v4 = assets.filter(x => x.a.source === 'v4' || x.a.source === 'v5').map(x => x.a.id);
const withInit = assets.filter(x => x.a.init && String(x.a.init).trim()).map(x => x.a.id);

// 2. AI 产物
const idx = JSON.parse(rd(path.join(ROOT, 'agent/index.json')));
idx.count === assets.length ? ok('agent/index.json ' + idx.count + ' 条') : bad('index.count=' + idx.count + ' ≠ ' + assets.length);
const idxIds = new Set(idx.items.map(i => i.id));
idxIds.size === idSet.size && [...idSet].every(i => idxIds.has(i)) ? ok('索引 id 与源数据一致') : bad('索引 id 与源数据不一致');

const cnt = (d, ext) => fs.readdirSync(path.join(ROOT, d)).filter(f => f.endsWith(ext)).length;
const pv = cnt('agent/preview', '.html'), bh = cnt('agent/blocks', '.html'), bc = cnt('agent/blocks', '.css'), bj = cnt('agent/blocks', '.js');
pv === assets.length ? ok('preview ' + pv + ' 个') : bad('preview ' + pv + ' ≠ ' + assets.length);
bh === assets.length ? ok('blocks html ' + bh + ' 个') : bad('blocks html ' + bh + ' ≠ ' + assets.length);
bc === assets.length ? ok('blocks css ' + bc + ' 个') : bad('blocks css ' + bc + ' ≠ ' + assets.length);
bj === withInit.length ? ok('blocks js ' + bj + ' 个（= 带交互条数）') : bad('blocks js ' + bj + ' ≠ ' + withInit.length);

// 3. 站点
function sliceArray(s, from) {
  let depth = 0, inStr = null, esc = false;
  for (let i = from; i < s.length; i++) {
    const c = s[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"') { inStr = c; continue; }
    if (c === '[') depth++;
    else if (c === ']') { depth--; if (!depth) return s.slice(from, i + 1); }
  }
  return null;
}
const extraSrc = rd(path.join(ROOT, 'lab-extra4.js'));
const ci = extraSrc.indexOf('.concat(');
const lit = ci >= 0 ? sliceArray(extraSrc, extraSrc.indexOf('[', ci)) : null;
if (!lit) bad('lab-extra4.js 结构无法解析');
else {
  let arr = null;
  try { arr = JSON.parse(lit); } catch (e) { bad('lab-extra4.js JSON 解析失败: ' + e.message.slice(0, 80)); }
  if (arr) {
    const set = new Set(arr.map(x => x.id));
    arr.length === v4.length && v4.every(i => set.has(i)) ? ok('lab-extra4.js ' + arr.length + ' 条 = 新增资产') : bad('lab-extra4.js ' + arr.length + ' ≠ v4 ' + v4.length);
  }
}
const lab = rd(path.join(ROOT, 'motion-lab.html'));
lab.includes('lab-extra4.js') ? ok('motion-lab.html 已引用 lab-extra4.js') : bad('motion-lab.html 未引用 lab-extra4.js');
const legacyBlock = lab.slice(lab.indexOf('const DEMOS = ['), lab.indexOf('];\nDEMOS.push'));
const countIds = (s) => (s.match(/\{id:'/g) || []).length;
let legacy = countIds(legacyBlock);
for (const f of ['lab-more.js', 'lab-extra2.js', 'lab-extra3.js']) {
  try { legacy += countIds(rd(path.join(ROOT, f))); } catch { bad('缺少老资产来源文件: ' + f); }
}
legacy === assets.length - v4.length ? ok('站点内联 ' + legacy + ' 条 = 老资产') : bad('站点内联 ' + legacy + ' ≠ 老资产 ' + (assets.length - v4.length));
const idxHtml = rd(path.join(ROOT, 'index.html'));
const navNum = +(idxHtml.match(/动效与交互\s*(?:·\s*)?(\d+)/) || [])[1];
navNum === assets.length ? ok('index.html 导航计数 ' + navNum) : bad('index.html 导航计数 ' + navNum + ' ≠ ' + assets.length);
const leadNum = +(idxHtml.match(/(\d+) 个可交互效果/) || [])[1];
leadNum === assets.length ? ok('index.html 首页文案 ' + leadNum) : bad('index.html 首页文案 ' + leadNum + ' ≠ ' + assets.length);

// 4. llms.txt 与数据一致
const llms = rd(path.join(ROOT, 'llms.txt'));
llms.includes(assets.length + ' 条') ? ok('llms.txt 条数一致') : bad('llms.txt 条数与数据不一致');

console.log('');
if (fails.length) { console.log('✗ ' + fails.length + ' 项不一致'); process.exit(1); }
console.log('✓ 三方一致：源数据 ' + assets.length + ' 条（老 ' + legacy + ' + 新 ' + v4.length + '）');
