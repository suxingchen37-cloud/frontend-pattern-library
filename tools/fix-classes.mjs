#!/usr/bin/env node
/**
 * tools/fix-classes.mjs —— 把 body 里不带 d- 前缀的 class 全部改成这条自己的名字。
 * 为什么要改：一条资产会被 AI 抄进它自己的页面，和别的资产同屏。`.on` / `.more` / `.demo-btn`
 * 这种通用名会互相踩；`.demo-btn` 更是只存在于本站的宿主样式里，抄走就是个没样式的裸按钮。
 *
 * 规则：
 *   通用件（demo-btn / primary / hint）→ 固定名 d-btn / d-btn-primary / d-hint，并把规范声明内联进这条 css；
 *   其余 → d-<id>-<原名>。
 * 三处同步改：body 的 class 属性、css 的 .选择器、init 里作为字符串出现的类名。
 * 元素选择器（a{}、div{}）不动——只改带点号的 class 选择器。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'data', 'assets', 'motion');
const APPLY = process.argv.includes('--apply');

const PRIMITIVE = {
  'demo-btn': ['d-btn', '.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform .16s var(--ease),background-color .16s,color .16s,border-color .16s}\n.d-btn:hover{box-shadow:0 6px 18px #20241e14}\n.d-btn:active{transform:scale(.97)}\n'],
  'primary': ['d-btn-primary', '.d-btn.d-btn-primary{background:var(--ink);color:var(--paper);border-color:var(--ink)}\n'],
  'hint': ['d-hint', '.d-hint{font-size:11px;color:var(--faint)}\n'],
};

const esc = (s) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
const bodyClasses = (body) => {
  const out = new Set();
  for (const m of body.matchAll(/class\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
    for (const t of (m[1] ?? m[2] ?? '').split(/\s+/)) if (t) out.add(t);
  }
  return [...out];
};

const log = [];
const touched = [];
for (const f of fs.readdirSync(DIR).filter(x => x.endsWith('.json') && !x.startsWith('_'))) {
  const p = path.join(DIR, f);
  const a = JSON.parse(fs.readFileSync(p, 'utf8'));
  const bad = bodyClasses(a.body).filter(c => !c.startsWith('d-'));
  if (!bad.length) continue;
  const plan = [];
  const added = [];
  for (const name of bad.sort()) {
    const prim = PRIMITIVE[name];
    let target = prim ? prim[0] : 'd-' + a.id + '-' + name;
    if (a.body.includes(target) || new RegExp('\\.' + esc(target) + '(?![\\w-])').test(a.css)) {
      target = 'd-' + a.id + '-' + name; // 这条自己已经占用了那个名字，退回带 id 的形式
    }
    /* body：只改 class 属性里的 token */
    a.body = a.body.replace(/class\s*=\s*(?:"([^"]*)"|'([^']*)')/g, (whole, d, s) => {
      const val = (d ?? s ?? '').split(/\s+/).map(t => (t === name ? target : t)).join(' ');
      return 'class="' + val + '"';
    });
    /* css：只改 .class 选择器 */
    const reCss = new RegExp('\\.' + esc(name) + '(?![\\w-])', 'g');
    const nCss = (a.css.match(reCss) || []).length;
    a.css = a.css.replace(reCss, '.' + target);
    /* init：只改作为完整字符串出现的类名（含多 token 的 class 串） */
    let nInit = 0;
    if (a.init) {
      a.init = a.init.replace(/(['"`])([^'"`]*)\1/g, (whole, q, inner) => {
        if (!inner.split(/[\s,]+/).includes(name)) return whole;
        nInit++;
        return q + inner.split(/(\s+|,)/).map(t => (t === name ? target : t)).join('') + q;
      });
    }
    plan.push(name + '→' + target + '(css ' + nCss + (nInit ? ',init ' + nInit : '') + ')');
    if (prim && !a.css.includes(prim[0] + '{') && !new RegExp('\\.' + esc(prim[0]) + '\\{').test(a.css)) {
      added.push(prim[1]);
    }
  }
  if (added.length) a.css = a.css.replace(/\s*$/, '\n') + [...new Set(added)].join('');
  touched.push({ p, a });
  log.push('· ' + a.id.padEnd(22) + plan.join(' ') + (added.length ? '  [内联通用件 ' + added.length + ' 段]' : ''));
}
console.log(log.join('\n'));
console.log('\n共 ' + touched.length + ' 条资产');
if (!APPLY) { console.log('（--plan，未写盘）'); process.exit(0); }
for (const { p, a } of touched) fs.writeFileSync(p, JSON.stringify(a, null, 2) + '\n', 'utf8');
console.log('✓ 已写 ' + touched.length + ' 个 JSON');
