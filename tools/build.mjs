#!/usr/bin/env node
/**
 * tools/build.mjs —— 把「一条一文件」的资产 JSON 生成为 AI 可直接取用的产物。
 *
 * 用法：
 *   node tools/build.mjs                      生成 agent/** 与 llms.txt
 *   node tools/build.mjs --check              只在内存里重算并与磁盘逐文件比对，不写盘；有漂移则退出码 1
 *   node tools/build.mjs --data tools/fixtures --out tools/fixtures/out   用 fixture 自测
 *   node tools/build.mjs --strict             把 WARN 也当失败（给上游数据加闸）
 *   node tools/build.mjs --verbose            逐条打印 WARN，而不是按规则折叠
 *
 * 数据根目录（--data / 环境变量 MOCKS_DATA_DIR，默认 ./data）：
 *   <data>/assets/motion/*.json   资产，一条一文件；以 _ 或 . 开头的文件跳过
 *   <data>/tokens.json            令牌表，缺省时回落到 <repo>/data/tokens.json
 *   <data>/categories.json        分类登记，缺省时回落到 <repo>/data/categories.json
 *
 * 产物根目录（--out / 环境变量 MOCKS_OUT_DIR，默认仓库根）：
 *   agent/index.json                        全部资产的索引（一行一条 item）
 *   agent/blocks/<id>.html | .css | .js     body / css / init 原文
 *   agent/preview/<id>.html                 单条独立预览页（tokens 已注入 :root，双击即看，?theme=night）
 *   llms.txt                                给 AI 的入口（<=120 行）
 *
 * 校验分两级：
 *   ERR  读不到 / JSON 解析失败 / 缺必填字段 / 字段类型错 / id 与文件名不一致 /
 *        cat 未登记 / id 重复 / body 为空 / init 语法错 / css 里漏出 </style>。
 *        —— 这类直接退出码 1，且一个文件都不写（宁可不产出，也不产出坏产物）。
 *   WARN 质量契约：class 前缀、@keyframes 前缀、transition:all、说明空话、
 *        引用了 tokens 里没有的变量、motion 为空、css 为空（产物仍可用）。
 *        —— 默认只折叠打印、不影响退出码；--strict 时升级为失败。
 *
 * 确定性：不写时间戳、不用随机数、排序稳定、行尾统一 \n、文件末尾恰好一个换行。
 * 同一份输入永远产出同一份字节，所以 --check 才有意义。
 */

import { readFile, writeFile, mkdir, readdir, unlink, stat } from 'node:fs/promises';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { guideProducts } from './guides.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..');
const NL = '\n';

const SCHEMA_VERSION = 1;
const LLMS_MAX_LINES = 120;
const REQUIRED_FIELDS = ['id', 'cat', 't', 'en', 'd', 'body', 'css', 'init'];
const SOURCES = ['inline', 'lab-more', 'lab-extra2', 'lab-extra3', 'v4', 'v5'];
const MOTIONS = ['机械', '物理', '印刷', '无动效'];
const BANNED_WORDS = ['赋能', '一键', '无缝', '极致', '沉浸', '丝滑', '焕新'];
const DUR_LABELS = { feedback: '反馈', move: '位移', reveal: '揭示', ambient: '环境' };
const INK_LABELS = { vermilion: '朱', indigo: '靛', yellow: '黄' };

const errors = [];
const warnings = [];

function rel(p) {
  const r = path.relative(REPO, p);
  return (r ? r : '.').replace(/\\/g, '/');
}
function err(where, msg) { errors.push({ where: where, msg: msg }); }
function warn(where, rule, detail) { warnings.push({ where: where, rule: rule, detail: detail || '' }); }

/* ─────────────────────────── 参数 ─────────────────────────── */

function usageError(msg) {
  process.stderr.write('参数错误：' + msg + NL + NL + '用法：node tools/build.mjs [--check] [--strict] [--verbose] [--data <dir>] [--out <dir>]' + NL);
  process.exit(2);
}

function parseArgs(argv) {
  const o = { check: false, strict: false, verbose: false, data: null, out: null, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--check') o.check = true;
    else if (a === '--strict') o.strict = true;
    else if (a === '--verbose') o.verbose = true;
    else if (a === '--help' || a === '-h') o.help = true;
    else if (a === '--data' || a === '--out') {
      const v = argv[++i];
      if (!v || v.slice(0, 2) === '--') usageError(a + ' 需要一个目录');
      o[a.slice(2)] = v;
    } else if (a.slice(0, 7) === '--data=') o.data = a.slice(7);
    else if (a.slice(0, 6) === '--out=') o.out = a.slice(6);
    else usageError('未知参数 ' + a);
  }
  return o;
}

/* ─────────────────────────── 小工具 ─────────────────────────── */

const byString = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

function kebab(key) {
  return String(key).replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/** 行尾统一成 \n，并保证末尾恰好一个换行。 */
function oneText(s) {
  return String(s).replace(/\r\n?/g, '\n').replace(/\n+$/, '') + '\n';
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function existsFile(p) {
  try { return (await stat(p)).isFile(); } catch { return false; }
}

async function readJson(file, label) {
  let raw;
  try {
    raw = await readFile(file, 'utf8');
  } catch (e) {
    err(label, '读取失败：' + (e.code || e.message));
    return null;
  }
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);
  try {
    return JSON.parse(raw);
  } catch (e) {
    err(label, 'JSON 解析失败：' + e.message);
    return null;
  }
}

async function listFiles(dir, base) {
  let ents;
  try {
    ents = await readdir(dir, { withFileTypes: true });
  } catch (e) {
    if (e.code === 'ENOENT') return [];
    throw e;
  }
  const out = [];
  for (const e of ents.slice().sort((x, y) => byString(x.name, y.name))) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await listFiles(p, base)));
    else if (e.isFile()) out.push(path.relative(base, p).split(path.sep).join('/'));
  }
  return out;
}

/* ─────────────────────────── 令牌表 ─────────────────────────── */

function need(tk, dotted, label) {
  let v = tk;
  for (const k of dotted.split('.')) {
    v = v && typeof v === 'object' ? v[k] : undefined;
    if (v === undefined) break;
  }
  if (v === undefined || v === null || v === '') {
    err('data/tokens.json', '缺少 ' + dotted + '（' + label + '），产物无法生成');
    return null;
  }
  return v;
}

/** 预览页的 :root 变量块：只从 tokens.json 取值，一个数字都不手抄。 */
function tokenVarBlock(tk) {
  // 这套值是展示默认值：只为让预览页/单条资产能渲染，不是推荐风格。
  // 正式项目按内容与品牌需要覆盖；变量名是兼容接口，不代表风格约束。
  const L = [];
  const put = (name, value, note) => {
    if (value === null || value === undefined) return;
    L.push('  ' + name + ':' + value + ';' + (note ? ' /* ' + note + ' */' : ''));
  };
  const group = (title) => L.push('  /* ' + title + ' */');

  group('纸与墨');
  put('--bg', need(tk, 'palette.paper.bg', '纸/底色'));
  put('--paper', need(tk, 'palette.paper.panel', '纸/面板'));
  put('--ink', need(tk, 'palette.ink.main', '主墨'));
  put('--muted', need(tk, 'palette.ink.muted', '次级墨'));
  put('--faint', need(tk, 'palette.ink.faint', '弱墨'));
  put('--line', need(tk, 'palette.ink.line', '描边'));

  group('油墨与标记笔');
  for (const k of Object.keys(tk.palette.inks || {})) {
    if (k === 'policy' || typeof tk.palette.inks[k] !== 'string') continue;
    put('--ink-' + kebab(k), tk.palette.inks[k], INK_LABELS[k]);
  }
  put('--marker-hi', need(tk, 'palette.marker.hi', '荧光标记'));
  put('--ok', need(tk, 'palette.status.ok', '状态·成功'));
  put('--warn', need(tk, 'palette.status.warn', '状态·警示'));

  group('字号（px）');
  for (const n of need(tk, 'type.scale', '字号阶')) put('--fs-' + n, n + 'px');

  group('行高与字距');
  for (const k of Object.keys(need(tk, 'type.lineHeight', '行高'))) put('--lh-' + kebab(k), tk.type.lineHeight[k]);
  for (const k of Object.keys(need(tk, 'type.tracking', '字距'))) put('--tracking-' + kebab(k), tk.type.tracking[k], k === 'monoLabel' ? '等宽小标签' : null);

  group('字体');
  const fam = need(tk, 'type.families', '字族');
  for (const k of Object.keys(fam)) {
    const v = String(fam[k]);
    if (/[\u4e00-\u9fa5]/.test(v) || /\s/.test(v) && v.indexOf(',') === -1) {
      L.push('  /* --font-' + kebab(k) + ' 未生成：tokens.json 里是「' + v + '」，不是字体栈 */');
      continue;
    }
    put('--font-' + kebab(k), v);
  }

  group('间距（px）');
  for (const n of need(tk, 'space.scale', '间距阶')) put('--sp-' + n, n + 'px');

  group('圆角（px）');
  for (const k of Object.keys(need(tk, 'radius', '圆角表'))) {
    if (k === 'policy') continue;
    put('--radius-' + kebab(k), tk.radius[k] + 'px');
  }

  group('时长（ms）');
  for (const k of Object.keys(need(tk, 'duration', '时长表'))) {
    if (k === 'policy') continue;
    put('--dur-' + kebab(k), tk.duration[k] + 'ms');
  }

  group('曲线');
  for (const k of Object.keys(need(tk, 'easing', '曲线表'))) {
    const e = tk.easing[k];
    if (!e || typeof e !== 'object') continue;
    const full = String(e.value);
    const first = full.split('|')[0].trim();
    put('--ease-' + kebab(k), first, full.indexOf('|') === -1 ? String(e.name) : 'tokens: ' + full);
  }

  group('阴影与描边');
  for (const k of Object.keys(need(tk, 'shadow', '阴影表'))) {
    if (k === 'policy') continue;
    put('--shadow-' + kebab(k), tk.shadow[k]);
  }
  for (const k of Object.keys(need(tk, 'border', '描边表'))) {
    if (k === 'policy') continue;
    put('--border-' + kebab(k), tk.border[k]);
  }

  group('兼容别名：老资产 css 里的短名，值仍然是 tokens 里的同一个值');
  put('--sans', 'var(--font-sans)');
  put('--serif', 'var(--font-serif)');
  put('--mono', 'var(--font-mono)');
  put('--lime', 'var(--marker-hi)');
  put('--coral', 'var(--ink-vermilion)');
  put('--blue', 'var(--ink-indigo)');
  put('--mint', 'color-mix(in srgb,var(--ink) 14%,var(--paper))');
  put('--lime-soft', 'color-mix(in srgb,var(--ink) 8%,var(--paper))');
  put('--lav', 'color-mix(in srgb,var(--ink-indigo) 14%,var(--paper))');
  put('--ease', 'var(--ease-print)');
  put('--ease-out', 'var(--ease-print)');
  put('--ease-spring', 'var(--ease-physical)');
  put('--r', 'var(--radius-card)');
  put('--sp', 'var(--sp-4)');

  const night = [
    '  --bg:' + need(tk, 'palette.night.bg', '夜间底色') + ';',
    '  --paper:' + need(tk, 'palette.night.panel', '夜间面板') + ';',
    '  --ink:' + need(tk, 'palette.inkNight.main', '夜间主墨') + ';',
    '  --muted:' + need(tk, 'palette.inkNight.muted', '夜间次级墨') + ';',
    '  --faint:' + need(tk, 'palette.inkNight.faint', '夜间弱墨') + ';',
    '  --line:' + need(tk, 'palette.inkNight.line', '夜间描边') + ';',
    '  --ok:' + need(tk, 'palette.status.okNight', '夜间状态·成功') + ';',
    '  --warn:' + need(tk, 'palette.status.warnNight', '夜间状态·警示') + ';'
  ];

  return [':root{'].concat(L, ['}', '[data-theme="night"]{'], night, ['}']).join(NL);
}

/** 预览页里 --x 变量名集合，用来兜出 css 引用了不存在的变量。 */
function tokenVarNames(tk) {
  const names = new Set();
  const block = tokenVarBlock(tk);
  const m = block.match(/--[A-Za-z0-9-]+(?=:)/g) || [];
  for (const n of m) names.add(n);
  return names;
}

/* ─────────────────────────── 资产校验 ─────────────────────────── */

function styleWarnings(a, label, rules) {
  const css = a.css;
  const uniq = (xs) => [...new Set(xs)].sort(byString);

  if (/transition:\s*all\b/i.test(css)) warn(label, '质量：transition:all', '会把无关属性一起动画');
  if (/#c-|#pv-/.test(css)) warn(label, 'css 手写了 #c- / #pv- 前缀', '渲染层会自动加，写了会套两层');

  const words = BANNED_WORDS.filter((f) => String(a.d).indexOf(f) !== -1);
  if (words.length) warn(label, 'd 里有禁用词', words.join(' / '));

  const kfBad = [];
  for (const decl of css.match(/@(?:-webkit-)?keyframes\s+([A-Za-z0-9_-]+)/g) || []) {
    const name = decl.replace(/^@(?:-webkit-)?keyframes\s+/, '');
    if (name.indexOf('d-' + a.id) !== 0) kfBad.push(name);
  }
  if (kfBad.length) warn(label, '@keyframes 缺本条 id 前缀', 'd-' + a.id + '-* ← ' + uniq(kfBad).join(' / '));

  const badCls = [];
  for (const attr of a.body.match(/class\s*=\s*(?:"([^"]*)"|'([^']*)')/g) || []) {
    const val = attr.replace(/^class\s*=\s*["']?/, '').replace(/["']$/, '');
    for (const token of val.split(/\s+/)) if (token && token.indexOf('d-') !== 0) badCls.push(token);
  }
  if (badCls.length) warn(label, 'body 里的 class 不是 d- 前缀', uniq(badCls).join(' / '));
  // 行内 style 只允许「数据」——即清一色 --自定义属性（波形高度、热力深浅这类逐元素取值）；
  // 任何样式属性（height/color/margin…）都必须收进 css。
  const badStyle = [];
  for (const m of a.body.matchAll(/\sstyle\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
    const decls = (m[1] ?? m[2] ?? '').split(';').map(s => s.trim()).filter(Boolean);
    if (decls.some(d => !d.startsWith('--'))) badStyle.push(...decls);
  }
  if (badStyle.length) warn(label, 'body 里有行内 style（只允许 --自定义属性）', uniq(badStyle).join(' / '));

  const defined = new Set();
  for (const decl of css.match(/--[A-Za-z0-9-]+\s*:/g) || []) defined.add(decl.replace(/\s*:$/, ''));
  for (const decl of a.body.match(/--[A-Za-z0-9-]+\s*:/g) || []) defined.add(decl.replace(/\s*:$/, ''));
  const unknown = new Set();
  for (const match of css.matchAll(/var\(\s*(--[A-Za-z0-9-]+)\s*([,)])/g)) {
    const name = match[1];
    if (match[2] !== ',' && !rules.varNames.has(name) && !defined.has(name)) unknown.add(name);
  }
  if (unknown.size) warn(label, 'css 引用了 tokens 里没有的变量', [...unknown].sort(byString).join(' / ') + '（preview 里取不到值）');
}

function validateAsset(raw, file, rules) {
  const label = rel(file);
  let ok = true;
  const bad = (m) => { ok = false; err(label, m); };

  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) { bad('顶层必须是 JSON 对象'); return null; }

  for (const f of REQUIRED_FIELDS) {
    if (!(f in raw)) bad('缺必填字段 ' + f);
  }

  const a = {
    id: typeof raw.id === 'string' ? raw.id.trim() : null,
    cat: typeof raw.cat === 'string' ? raw.cat : null,
    t: typeof raw.t === 'string' ? raw.t : null,
    en: typeof raw.en === 'string' ? raw.en : null,
    d: typeof raw.d === 'string' ? raw.d : null,
    body: typeof raw.body === 'string' ? raw.body : null,
    css: typeof raw.css === 'string' ? raw.css : null,
    init: null,
    source: raw.source,
    motion: typeof raw.motion === 'string' ? raw.motion : '',
    tags: Array.isArray(raw.tags) ? raw.tags : [],
    file: label,
    dir: path.dirname(file)
  };

  const stem = path.basename(file, '.json');
  if (a.id === null) bad('id 必须是字符串');
  else if (a.id !== stem) bad('id「' + a.id + '」与文件名「' + stem + '.json」不一致');
  if (a.id !== null && !/^[a-z0-9-]+$/.test(a.id)) bad('id 只能用 [a-z0-9-]（kebab-case）');
  if (a.id !== null && rules.ids.has(a.id)) bad('id「' + a.id + '」重复出现');
  else if (a.id !== null) rules.ids.add(a.id);

  if (a.cat === null) bad('cat 必须是字符串');
  else if (!rules.cats.has(a.cat)) bad('cat「' + a.cat + '」不在 data/categories.json 的登记里');

  for (const k of ['t', 'en', 'd']) {
    if (typeof raw[k] !== 'string' || raw[k].trim() === '') bad(k + ' 必须是非空字符串');
  }
  if (typeof raw.body !== 'string' || raw.body.trim() === '') bad('body 必须是非空字符串');
  if (typeof raw.css !== 'string') bad('css 必须是字符串');
  else if (raw.css.trim() === '' && !(typeof raw.init === 'string' && raw.init.trim())) {
    warn(label, 'css 为空', '既没有样式也没有 init，产物 blocks/<id>.css 会是空文件');
  }
  if (typeof raw.css === 'string' && raw.css.indexOf('</style') !== -1) bad('css 里出现 </style，会截断 preview 的样式块');

  if (raw.source === undefined) bad('缺少必填字段 source');
  else if (SOURCES.indexOf(raw.source) === -1) bad('source「' + raw.source + '」不在允许值 ' + SOURCES.join(' / ') + ' 里');

  if (raw.motion !== undefined && raw.motion !== null && raw.motion !== '') {
    if (MOTIONS.indexOf(raw.motion) === -1) bad('motion「' + raw.motion + '」必须是 ' + MOTIONS.join(' / '));
  } else {
    warn(label, 'motion 为空', '每条都要标：机械 / 物理 / 印刷；这条本身不含动画时标「无动效」');
  }

  if (raw.tags !== undefined) {
    if (!Array.isArray(raw.tags) || raw.tags.some((x) => typeof x !== 'string')) bad('tags 必须是字符串数组');
    else if (raw.tags.length < 2 || raw.tags.length > 5) warn(label, 'tags 数量不在 2–5', raw.tags.length + ' 个');
  }

  if (raw.init === null || raw.init === undefined) {
    a.init = null;
  } else if (typeof raw.init !== 'string') {
    bad('init 必须是字符串或 null');
  } else {
    const src = raw.init.replace(/[\s;]+$/, '');
    if (!src) bad('init 是空字符串；无交互请填 null');
    else {
      try {
        new Function('return (' + src + NL + ');');
      } catch (e) {
        bad('init 语法错误：' + e.message);
      }
      if (src.indexOf('</script') !== -1) bad('init 里出现 </script，会截断 preview 的脚本块');
      if (!/^\s*(async\s+)?(function\b|\(?[\w$,\s]*\)?\s*=>)/.test(src)) {
        warn(label, 'init 形态可疑', '看着不是 root => {...} / function (root) {...}');
      }
      a.init = src;
    }
  }

  if (!ok) return null;
  if (a.body !== null) a.body = oneText(a.body).replace(/\n$/, '');
  if (a.css !== null) a.css = oneText(a.css).replace(/\n$/, '');
  styleWarnings(a, label, rules);
  return a;
}

async function loadAssets(assetsDir, rules) {
  let ents;
  try {
    ents = await readdir(assetsDir, { withFileTypes: true });
  } catch (e) {
    err(rel(assetsDir), '读取资产目录失败：' + (e.code || e.message));
    return [];
  }
  const files = [];
  let skipped = 0;
  for (const e of ents.slice().sort((x, y) => byString(x.name, y.name))) {
    if (e.name.charAt(0) === '_' || e.name.charAt(0) === '.') { skipped++; continue; }
    if (!e.isFile()) continue;
    if (path.extname(e.name) !== '.json') continue;
    files.push(path.join(assetsDir, e.name));
  }
  const out = [];
  for (const f of files) {
    const raw = await readJson(f, rel(f));
    if (raw === null) continue;
    const a = validateAsset(raw, f, rules);
    if (a) out.push(a);
  }
  return out;
}

/* ─────────────────────────── 产物 ─────────────────────────── */

function filesObj(a) {
  const f = { html: 'blocks/' + a.id + '.html', css: 'blocks/' + a.id + '.css' };
  if (a.init !== null) f.js = 'blocks/' + a.id + '.js';
  return f;
}

function indexJson(assets, tokensVersion, cats, counts) {
  const L = [];
  L.push('{');
  L.push('  "schema": ' + SCHEMA_VERSION + ',');
  L.push('  "tokensVersion": ' + JSON.stringify(tokensVersion) + ',');
  L.push('  "tokensCss": "tokens.css",');
  L.push('  "count": ' + assets.length + ',');
  if (cats.length === 0) {
    L.push('  "categories": [],');
  } else {
    L.push('  "categories": [');
    cats.forEach((c, i) => {
      L.push('    { "name": ' + JSON.stringify(c) + ', "count": ' + (counts.get(c) || 0) + ' }' + (i === cats.length - 1 ? '' : ','));
    });
    L.push('  ],');
  }
  if (assets.length === 0) {
    L.push('  "items": []');
  } else {
    L.push('  "items": [');
    assets.forEach((a, i) => {
      const item = {
        id: a.id, cat: a.cat, t: a.t, en: a.en, d: a.d,
        motion: a.motion || '', tags: a.tags, hasInit: a.init !== null,
        files: filesObj(a)
      };
      L.push('    ' + JSON.stringify(item) + (i === assets.length - 1 ? '' : ','));
    });
    L.push('  ]');
  }
  L.push('}');
  return L.join(NL) + NL;
}

function jsBlock(a) {
  return [
    '// 用法：先 <script src="blocks/' + a.id + '.js"></script>，再调用 window.INITS[\'' + a.id + '\'](root)；root 是承载该条 body 的那个元素。',
    'window.INITS = window.INITS || {};',
    'window.INITS[\'' + a.id + '\'] = (' + a.init + ');'
  ].join(NL) + NL;
}

const PREVIEW_CHROME = [
  '*{box-sizing:border-box}',
  'html,body{margin:0;padding:0}',
  'body{background:var(--bg);color:var(--ink);font-family:var(--font-sans);font-size:var(--fs-15);line-height:var(--lh-body);-webkit-font-smoothing:antialiased}',
  '.pv-bar{display:flex;flex-wrap:wrap;align-items:center;gap:var(--sp-8);padding:var(--sp-8) var(--sp-16);border-bottom:1px solid var(--line);background:var(--paper);font-size:var(--fs-11);color:var(--muted)}',
  '.pv-bar b{font-size:var(--fs-13);font-weight:650;color:var(--ink)}',
  '.pv-bar code{font-family:var(--font-mono);font-size:var(--fs-11);color:var(--faint)}',
  '.pv-bar .pv-grow{flex:1}',
  '.pv-bar button{font:inherit;font-size:var(--fs-11);padding:var(--sp-4) var(--sp-8);border:1px solid var(--line);border-radius:var(--radius-control);background:transparent;color:var(--ink);cursor:pointer}',
  '.pv-bar button:hover{border-color:var(--ink)}',
  '.pv-stage{min-height:70vh;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:var(--sp-12);padding:var(--sp-40) var(--sp-24)}',
  '.pv-note{max-width:64ch;margin:0 auto;padding:0 var(--sp-24) var(--sp-40);color:var(--muted);font-size:var(--fs-11);line-height:var(--lh-note)}'
].join(NL);

function previewHtml(a, tk) {
  const id = JSON.stringify(a.id);
  const bar = [
    '<div class="pv-bar">',
    '  <code>' + escapeHtml(a.id) + '</code>',
    '  <b>' + escapeHtml(a.t) + '</b>',
    '  <span>' + escapeHtml(a.en) + '</span>',
    '  <span>分类 ' + escapeHtml(a.cat) + '</span>',
    '  <span>运动 ' + escapeHtml(a.motion || '未填') + '</span>',
    '  <span class="pv-grow"></span>',
    '  <button type="button" id="pv-toggle">切换夜间</button>',
    '</div>'
  ].join(NL);

  const script = [
    '<script>',
    "(function () {",
    "  var root = document.getElementById('pv-stage');",
    '  root.dataset.item = ' + id + ';',
    a.init !== null
      ? [
          '  window.INITS = window.INITS || {};',
          '  window.INITS[' + id + '] = (' + a.init + ');',
          '  window.INITS[' + id + '](root);'
        ].join(NL)
      : '  /* 本条没有 init（纯 CSS） */',
    "  document.getElementById('pv-toggle').addEventListener('click', function () {",
    "    var d = document.documentElement;",
    "    d.dataset.theme = d.dataset.theme === 'night' ? 'paper' : 'night';",
    '  });',
    '})();',
    '</script>'
  ].join(NL);

  return [
    '<!doctype html>',
    '<html lang="zh-CN" data-theme="paper">',
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width,initial-scale=1">',
    '<title>' + escapeHtml(a.t) + ' · ' + escapeHtml(a.id) + ' · 预览</title>',
    '<script>document.documentElement.dataset.theme = (location.search || "").indexOf("theme=night") !== -1 ? "night" : "paper";</script>',
    '<style>',
    tokenVarBlock(tk),
    PREVIEW_CHROME,
    '/* ——— 本条 css（原样注入，单页里不需要作用域） ——— */',
    a.css,
    '</style>',
    '</head>',
    '<body>',
    bar,
    '<div class="pv-stage" id="pv-stage">',
    a.body,
    '</div>',
    '<p class="pv-note">' + escapeHtml(a.d) + '</p>',
    script,
    '</body>',
    '</html>'
  ].join(NL) + NL;
}

function llmsTxt(tk, assets, cats, counts, dataRoot) {
  const rulesPath = path.join(dataRoot || path.join(REPO, 'data'), 'rules.md');
  let tpl;
  try { tpl = readFileSync(rulesPath, 'utf8'); }
  catch (e) { throw new Error('缺少 ' + path.relative(REPO, rulesPath) + '（llms.txt 的正文源；字段占位符见 data/schema.md）'); }

  const list = (obj) => Object.keys(obj).filter((k) => k !== 'policy');
  const values = {
    assetCount: String(assets.length),
    catCount: String(cats.length),
    tokensVersion: tk.version,
    catList: cats.join(' → '),
    fsList: need(tk, 'type.scale', '字号阶').join(' / '),
    spList: need(tk, 'space.scale', '间距阶').join(' / '),
    radiusList: list(tk.radius).map((k) => k + ' ' + tk.radius[k]).join('、'),
    durList: list(tk.duration).map((k) => (DUR_LABELS[k] || k) + ' ' + tk.duration[k] + 'ms').join('、'),
    easeList: Object.keys(tk.easing).map((k) => { const e = tk.easing[k]; return e.name + ' ' + e.value + '（' + e.use + '）'; }).join('；'),
    inkList: list(tk.palette.inks).map((k) => tk.palette.inks[k] + ' ' + (INK_LABELS[k] || k)).join('、'),
    statusList: list(tk.palette.status).map((k) => '--' + k + ' ' + tk.palette.status[k]).join('、'),
    shadowList: list(tk.shadow).map((k) => k + ' ' + tk.shadow[k]).join('；'),
    borderList: list(tk.border).map((k) => tk.border[k]).join(' / '),
    lhBody: String(tk.type.lineHeight.body),
    lhNote: String(tk.type.lineHeight.note),
    lhDisplay: String(tk.type.lineHeight.display),
    trDisplay: tk.type.tracking.display,
    trBody: tk.type.tracking.body,
    trMono: tk.type.tracking.monoLabel,
    paperBg: tk.palette.paper.bg,
    paperPanel: tk.palette.paper.panel,
    nightBg: tk.palette.night.bg,
    nightPanel: tk.palette.night.panel,
    inkMain: tk.palette.ink.main,
    inkMuted: tk.palette.ink.muted,
    inkFaint: tk.palette.ink.faint,
    inkLine: tk.palette.ink.line,
    inkNightMain: tk.palette.inkNight.main,
    inkNightMuted: tk.palette.inkNight.muted,
    inkNightFaint: tk.palette.inkNight.faint,
    inkNightLine: tk.palette.inkNight.line,
    inkPolicy: tk.palette.inks.policy,
    markerHi: tk.palette.marker.hi,
    markerPolicy: tk.palette.marker.policy,
    shadowPolicy: tk.shadow.policy,
    borderPolicy: tk.border.policy,
    spacePolicy: tk.space.policy,
    radiusPolicy: tk.radius.policy,
    durationPolicy: tk.duration.policy,
    durAmbient: String(tk.duration.ambient),
    retiredLav: ('palette.retired' in tk ? String(tk.palette.retired.lav).split(' ')[0] : '#c4b6ff'),
    varList: [...new Set([...tokenVarBlock(tk).matchAll(/(--[a-z0-9-]+)\s*:/g)].map((m) => m[1]))].join(' · '),
    bannedWords: BANNED_WORDS.join(' / ')
  };

  let out = tpl.replace(/\{\{#emptyAssets\}\}([\s\S]*?)\{\{\/emptyAssets\}\}\n?/g, (m, inner) => (assets.length === 0 ? inner : ''));
  out = out.replace(/\{\{(\w+)\}\}/g, (m, k) => {
    if (!(k in values)) throw new Error('data/rules.md 里有未知占位符 {{' + k + '}}');
    return values[k];
  });
  return out.endsWith(NL) ? out : out + NL;
}

function buildProducts(ctx) {
  const { tk, assets, cats, counts, dataRoot } = ctx;
  const products = new Map();
  for (const [file, text] of guideProducts(dataRoot)) products.set(file, text);
  products.set('agent/index.json', indexJson(assets, tk.version, cats, counts));
  // 变量契约：单条 blocks/*.css 直接拿出来也能跑（不依赖预览页注入的 :root）
  products.set('agent/tokens.css', '/* 仅供预览的默认值；正式项目可全部重定义，不构成风格规范。 */' + NL + tokenVarBlock(tk) + NL);
  for (const a of assets) {
    products.set('agent/blocks/' + a.id + '.html', oneText(a.body));
    products.set('agent/blocks/' + a.id + '.css', oneText(a.css));
    if (a.init !== null) products.set('agent/blocks/' + a.id + '.js', jsBlock(a));
    products.set('agent/preview/' + a.id + '.html', previewHtml(a, tk));
  }
  // 排版手册与版式骨架：原样搬运，不做模板渲染
  try {
    const typo = readFileSync(path.join(dataRoot, 'typography.md'), 'utf8');
    products.set('agent/typography.md', typo.endsWith(NL) ? typo : typo + NL);
  } catch (e) { /* 没有排版手册就跳过，不影响构建 */ }
  const layoutsDir = path.join(dataRoot, 'layouts');
  if (existsSync(layoutsDir)) {
    const list = [];
    for (const f of readdirSync(layoutsDir).filter((x) => x.endsWith('.json')).sort()) {
      const L = JSON.parse(readFileSync(path.join(layoutsDir, f), 'utf8'));
      list.push({ id: L.id, name: L.name });
      const md = [
        '# ' + L.name + '（' + L.id + '）',
        '',
        '> 可修改的局部结构参考；不是整页模板，也不是必须选择的有限列表。尺寸、字体和动效不约束消费方风格。',
        '',
        '- 栅格：' + L.grid,
        '- 行宽/字号：' + L.measure,
        '- 层级：' + L.hierarchy,
        '- 留白节奏：' + L.rhythm,
        '- 可选内容关系（按需求取舍、重排，不是页面顺序）：' + (L.blocks || []).join('；'),
        '- 动效性格：' + L.motion,
        '- 别这么干：' + L.avoid,
        ''
      ].join(NL);
      products.set('agent/layouts/' + L.id + '.md', md);
    }
    products.set('agent/layouts/index.json', JSON.stringify({ count: list.length, layouts: list }, null, 2) + NL);
  }
  const llms = llmsTxt(tk, assets, cats, counts, dataRoot);
  products.set('llms.txt', llms);
  return products;
}

/* ─────────────────────────── 写盘 / 比对 ─────────────────────────── */

function firstLineDiff(want, got) {
  const a = want.split(NL), b = got.split(NL);
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) return { line: i + 1, want: a[i], got: b[i] };
  }
  return null;
}

function clip(s) {
  const t = String(s === undefined ? '<无此行>' : s);
  return t.length > 120 ? t.slice(0, 117) + '...' : t;
}

async function writeAll(outRoot, products) {
  await mkdir(path.join(outRoot, 'agent', 'blocks'), { recursive: true });
  await mkdir(path.join(outRoot, 'agent', 'preview'), { recursive: true });
  const paths = [...products.keys()].sort(byString);
  for (const p of paths) {
    const abs = path.join(outRoot, p);
    await mkdir(path.dirname(abs), { recursive: true });
    await writeFile(abs, products.get(p), 'utf8');
  }
  // 清掉构建不再产出的旧文件（只限 agent/ 目录，避免误删别人的东西）
  const disk = await listFiles(path.join(outRoot, 'agent'), path.join(outRoot, 'agent'));
  const removed = [];
  for (const p of disk) {
    const key = 'agent/' + p;
    if (!products.has(key)) {
      await unlink(path.join(outRoot, key));
      removed.push(key);
    }
  }
  return { written: paths, removed: removed.sort(byString) };
}

async function checkAll(outRoot, products) {
  const problems = [];
  const keys = [...products.keys()].sort(byString);
  for (const key of keys) {
    const abs = path.join(outRoot, key);
    let got = null;
    try { got = await readFile(abs, 'utf8'); } catch { got = null; }
    if (got === null) { problems.push({ kind: 'missing', key: key }); continue; }
    if (got !== products.get(key)) {
      problems.push({ kind: 'diff', key: key, diff: firstLineDiff(products.get(key), got) });
    }
  }
  const disk = await listFiles(path.join(outRoot, 'agent'), path.join(outRoot, 'agent'));
  for (const p of disk) {
    const key = 'agent/' + p;
    if (!products.has(key)) problems.push({ kind: 'extra', key: key });
  }
  return problems.sort((x, y) => byString(x.key, y.key));
}

/* ─────────────────────────── 主流程 ─────────────────────────── */

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    process.stdout.write('用法：node tools/build.mjs [--check] [--strict] [--verbose] [--data <dir>] [--out <dir>]' + NL);
    return 0;
  }

  const dataRoot = path.resolve(REPO, args.data || process.env.MOCKS_DATA_DIR || 'data');
  const outRoot = path.resolve(REPO, args.out || process.env.MOCKS_OUT_DIR || '.');

  const firstOf = async (cands) => {
    for (const c of cands) if (await existsFile(c)) return c;
    return null;
  };
  const tokensPath = await firstOf([path.join(dataRoot, 'tokens.json'), path.join(REPO, 'data', 'tokens.json')]);
  const catsPath = await firstOf([path.join(dataRoot, 'categories.json'), path.join(REPO, 'data', 'categories.json')]);
  if (!tokensPath) { err('data/tokens.json', '找不到令牌表，无法生成'); }
  if (!catsPath) { err('data/categories.json', '找不到分类登记，无法生成'); }

  const tk = tokensPath ? await readJson(tokensPath, 'data/tokens.json') : null;
  const catsRaw = catsPath ? await readJson(catsPath, 'data/categories.json') : null;

  let cats = [];
  if (catsRaw) {
    const order = catsRaw.order;
    if (!Array.isArray(order) || order.length === 0) err('data/categories.json', 'order 必须是非空数组');
    else {
      for (const c of order) {
        if (typeof c !== 'string' || !c.trim()) { err('data/categories.json', 'order 里有非字符串项'); continue; }
        if (cats.indexOf(c) !== -1) { err('data/categories.json', 'order 里分类「' + c + '」重复'); continue; }
        cats.push(c);
      }
    }
  }

  // 令牌表结构不全就不往下走，否则生成出来的产物缺变量
  const tkOk = tk && typeof tk === 'object' && typeof tk.version === 'string';
  if (tk && !tkOk) err('data/tokens.json', '缺少 version 字段');

  const rules = {
    ids: new Set(),
    cats: new Set(cats),
    varNames: tkOk ? tokenVarNames(tk) : new Set()
  };

  const assets = tkOk
    ? await loadAssets(path.join(dataRoot, 'assets', 'motion'), rules)
    : [];

  // 稳定排序：先按 categories.json 的顺序，再按 id 字典序
  const catIndex = new Map(cats.map((c, i) => [c, i]));
  assets.sort((a, b) => {
    const ca = catIndex.has(a.cat) ? catIndex.get(a.cat) : 999;
    const cb = catIndex.has(b.cat) ? catIndex.get(b.cat) : 999;
    return ca !== cb ? ca - cb : byString(a.id, b.id);
  });

  const counts = new Map(cats.map((c) => [c, 0]));
  for (const a of assets) counts.set(a.cat, (counts.get(a.cat) || 0) + 1);

  // 报告：先按文件路径、再按内容排序，保证输出稳定
  errors.sort((x, y) => byString(x.where, y.where) || byString(x.msg, y.msg));
  warnings.sort((x, y) => byString(x.where, y.where) || byString(x.rule, y.rule) || byString(x.detail, y.detail));

  const fatal = errors.length > 0 || (args.strict && warnings.length > 0);
  const sortWarn = (a, b) => byString(a.where, b.where) || byString(a.rule, b.rule) || byString(a.detail, b.detail);
  const printWarn = (verbose) => {
    if (!warnings.length) return;
    if (verbose) {
      for (const w of warnings.slice().sort(sortWarn)) {
        process.stderr.write('WARN  ' + w.where + ': ' + w.rule + (w.detail ? '（' + w.detail + '）' : '') + NL);
      }
      return;
    }
    const groups = new Map();
    for (const w of warnings) {
      if (!groups.has(w.rule)) groups.set(w.rule, { count: 0, files: new Set() });
      const g = groups.get(w.rule);
      g.count++;
      g.files.add(w.where);
    }
    for (const rule of [...groups.keys()].sort(byString)) {
      const g = groups.get(rule);
      const files = [...g.files].sort(byString);
      const ex = files.slice(0, 3).join('、') + (files.length > 3 ? ' 等 ' + files.length + ' 个文件' : '');
      process.stderr.write('WARN  [' + g.count + '] ' + rule + ' —— ' + ex + NL);
    }
  };
  const printDiag = () => {
    printWarn(args.verbose);
    for (const e of errors) process.stderr.write('ERR   ' + e.where + ': ' + e.msg + NL);
    if (warnings.length && !args.verbose) {
      process.stderr.write('· 提示：加 --verbose 看逐条 WARN；WARN 不影响退出码，--strict 才会失败。' + NL);
    }
  };

  if (tkOk && cats.length > 0 && !fatal) {
    const products = buildProducts({ tk, assets, cats, counts, dataRoot });
    const llmsLines = products.get('llms.txt').replace(/\n$/, '').split(NL).length;
    if (llmsLines > LLMS_MAX_LINES) {
      errors.push({ where: 'llms.txt', msg: '行数 ' + llmsLines + ' 超过上限 ' + LLMS_MAX_LINES });
    }
    printDiag();
    if (errors.length > 0) {
      process.stderr.write(NL + '✗ 构建失败：' + errors.length + ' 个错误，未写盘。' + NL);
      process.exitCode = 1;
      return;
    }
    if (args.check) {
      const problems = await checkAll(outRoot, products);
      if (problems.length === 0) {
        process.stdout.write('✓ --check 通过：' + products.size + ' 个产物与磁盘一致（无缺失、无多余、无漂移）' + NL);
        return;
      }
      process.stderr.write('✗ --check 失败：' + problems.length + ' 处差异' + NL);
      for (const p of problems) {
        if (p.kind === 'missing') process.stderr.write('  - 缺失  ' + p.key + NL);
        else if (p.kind === 'extra') process.stderr.write('  - 多余  ' + p.key + '（构建不会产出这个文件）' + NL);
        else {
          process.stderr.write('  - 漂移  ' + p.key + '（第 ' + p.diff.line + ' 行起不同）' + NL);
          process.stderr.write('        期望: ' + clip(p.diff.want) + NL);
          process.stderr.write('        实际: ' + clip(p.diff.got) + NL);
        }
      }
      process.stderr.write('  修法：跑 node tools/build.mjs 重新生成；改过的产物不要手修。' + NL);
      process.exitCode = 1;
      return;
    }
    const res = await writeAll(outRoot, products);
    const relOut = path.relative(REPO, outRoot);
    const where = relOut ? relOut.split(path.sep).join('/') + '/' : '仓库根';
    process.stdout.write('✓ 读入 ' + assets.length + ' 条资产、' + cats.length + ' 个分类（令牌表 v' + tk.version + '）' + NL);
    process.stdout.write('✓ 写出 ' + res.written.length + ' 个产物 → ' + where + '（' + res.written.slice(0, 2).join('、') + (res.written.length > 2 ? ' … ' : '') + '）' + NL);
    if (res.removed.length) process.stdout.write('· 清掉 ' + res.removed.length + ' 个过期产物：' + res.removed.join('、') + NL);
    if (warnings.length) process.stdout.write('· ' + warnings.length + ' 条 WARN（不影响退出码；--strict 时会失败）' + NL);
    return;
  }

  printDiag();
  if (errors.length === 0 && warnings.length > 0) {
    process.stderr.write(NL + '✗ 构建失败：--strict 把 ' + warnings.length + ' 条 WARN 当成了错误，未写盘。' + NL);
  } else {
    process.stderr.write(NL + '✗ 构建失败：' + (errors.length || 1) + ' 个错误，未写盘。' + NL);
  }
  process.exitCode = 1;
}

main().catch((e) => {
  process.stderr.write('✗ 构建脚本异常：' + (e && e.stack ? e.stack : e) + NL);
  process.exitCode = 1;
});
