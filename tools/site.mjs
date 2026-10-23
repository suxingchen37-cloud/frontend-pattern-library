#!/usr/bin/env node
/**
 * node tools/site.mjs          把 data 里 source=v4 的新资产合成 lab-extra4.js，并同步站点计数
 * node tools/site.mjs --check  只校验磁盘是否与生成结果一致（不写盘）
 * 只读 data/assets/motion/*.json；只写 lab-extra4.js 与两处计数文本。
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.argv[1], '..', '..');
const DATA = path.join(ROOT, 'data');
const MOTION = path.join(DATA, 'assets', 'motion');
const CHECK = process.argv.includes('--check');

const rd = (p) => fs.readFileSync(p, 'utf8');
const cats = JSON.parse(rd(path.join(DATA, 'categories.json'))).order;
const catIdx = (c) => { const i = cats.indexOf(c); return i < 0 ? 999 : i; };

const files = fs.readdirSync(MOTION).filter(f => f.endsWith('.json') && !f.startsWith('_') && !f.startsWith('.'));
const all = files.map(f => JSON.parse(rd(path.join(MOTION, f))));
const v4 = all.filter(a => (a.source === 'v4' || a.source === 'v5')).sort((a, b) => catIdx(a.cat) - catIdx(b.cat) || a.id.localeCompare(b.id));

// ---- lab-extra4.js ----
const demos = v4.map(a => ({ id: a.id, cat: a.cat, t: a.t, en: a.en, d: a.d, body: a.body, css: a.css }));
const inits = v4.filter(a => a.init && String(a.init).trim());
let js = '/* 自动生成：node tools/site.mjs —— 不要手改。新资产来自 data/assets/motion/ 中 source=v4 的条目。 */\n';
js += 'window.DEMOS_EXTRA = (window.DEMOS_EXTRA || []).concat(' + JSON.stringify(demos, null, 0) + ');\n';
if (inits.length) {
  js += 'window.INITS_EXTRA = Object.assign(window.INITS_EXTRA || {}, {\n';
  for (const a of inits) js += '  ' + JSON.stringify(a.id) + ': ' + String(a.init).trim() + ',\n';
  js += '});\n';
}

// ---- 站点计数 ----
const total = all.length;
const catCount = new Set(all.map(a => a.cat)).size;
const extraTag = '<script src="lab-extra4.js?v=1"></script>';

function patchIndex(src) {
  let out = src.replace(/(<button data-tab="motion">动效与交互\s*(?:·\s*)?)\d+(<\/button>)/, `$1${total}$2`);
  const list = cats.filter(c => all.some(a => a.cat === c)).join('、');
  out = out.replace(/<p>\d+ 个可交互效果、\d+ 个分类：[^<]*<\/p>/, `<p>${total} 个可交互效果、${catCount} 个分类：${list}。</p>`);
  return out;
}
const recipeTag = '<script src="lab-recipe.js?v=1"></script>';
function patchLab(src) {
  let out = src;
  if (!out.includes('lab-extra4.js')) {
    const anchor = '<script src="lab-extra3.js?v=1"></script>';
    if (!out.includes(anchor)) throw new Error('motion-lab.html: 找不到 lab-extra3 脚本锚点');
    out = out.replace(anchor, anchor + '\n' + extraTag);
  } else {
    out = out.replace(/<script src="lab-extra4\.js\?v=\d+"><\/script>/, extraTag);
  }
  if (!out.includes('lab-recipe.js')) out = out.replace(extraTag, extraTag + '\n' + recipeTag);
  else out = out.replace(/<script src="lab-recipe\.js\?v=\d+"><\/script>/, recipeTag);
  return out;
}

const products = new Map();
products.set('lab-extra4.js', js);
products.set('index.html', patchIndex(rd(path.join(ROOT, 'index.html'))));
products.set('motion-lab.html', patchLab(rd(path.join(ROOT, 'motion-lab.html'))));

// ---- 写盘 / 校验 ----
let drift = 0;
for (const [name, content] of products) {
  const p = path.join(ROOT, name);
  const cur = fs.existsSync(p) ? rd(p) : null;
  if (cur === content) continue;
  if (CHECK) { drift++; console.error('✗ 漂移 ' + name); }
  else fs.writeFileSync(p, content, 'utf8');
}
if (CHECK) {
  if (drift) { console.error('✗ site --check 失败：' + drift + ' 个文件与生成结果不一致'); process.exit(1); }
  console.log('✓ site --check 通过：' + products.size + ' 个文件一致（新资产 ' + v4.length + ' 条，资产合计 ' + total + ' 条）');
} else {
  console.log('✓ 写出 ' + products.size + ' 个文件 | 新资产 ' + v4.length + ' 条 → 站点合计 ' + total + ' 条 / ' + catCount + ' 个分类');
}
