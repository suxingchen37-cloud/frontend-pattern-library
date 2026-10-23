#!/usr/bin/env node
/**
 * tools/fix-22.mjs —— 清「有害写法与坏引用」：transition:all 8 条、行内 style 9 条、空 css 1 条。
 * 原则：只改写法，不改观感。transition 的时长/曲线一个都不动，只把 all 换成这条真正会变的属性；
 * 行内 style 里属于「数据」的（波形高度、热力深浅）换成自定义属性，属于「样式」的收进 css。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'data', 'assets', 'motion');
const APPLY = process.argv.includes('--apply');

const ops = [];
const T = (id, from, to, where = 'css') => ops.push({ id, where, from, to });
const ADD = (id, css) => ops.push({ id, where: 'cssAppend', css });

/* ---- 1. transition:all → 显式属性（时长曲线原样保留） ---- */
T('chips', 'transition:all .16s', 'transition:background-color .16s,color .16s,border-color .16s');
T('drop-target', 'transition:all .16s', 'transition:border-color .16s,background-color .16s,color .16s');
T('dropzone', 'transition:all .16s', 'transition:border-color .16s,background-color .16s,color .16s');
T('float-label', 'transition:all .16s var(--ease)', 'transition:top .16s var(--ease),font-size .16s var(--ease),color .16s var(--ease)');
T('morph-button', 'transition:all .28s var(--ease)', 'transition:opacity .28s var(--ease),transform .28s var(--ease)');
T('reveal-scroll', 'transition:all .5s var(--ease)', 'transition:opacity .5s var(--ease),transform .5s var(--ease)');
T('segmented', 'transition:all .26s var(--ease)', 'transition:left .26s var(--ease),width .26s var(--ease)');
T('tabs-pill', 'transition:all .26s var(--ease)', 'transition:left .26s var(--ease),width .26s var(--ease)');

/* ---- 2. 行内 style：样式收进 css ---- */
T('confirm', '<p style="margin:0 0 8px;font-size:11.5px;color:var(--muted)">', '<p class="d-note">', 'body');
ADD('confirm', '.d-cf .d-note{margin:0 0 8px;font-size:11.5px;color:var(--muted)}');
T('popover', '<p style="margin:2px 0 0;font-size:11px;color:var(--muted)">', '<p class="d-note">', 'body');
ADD('popover', '.d-pop .d-note{margin:2px 0 0;font-size:11px;color:var(--muted)}');
T('sheet', '<p style="font-size:11px;color:var(--muted);margin:6px 0 0">', '<p class="d-note">', 'body');
ADD('sheet', '.d-sheet .d-note{font-size:11px;color:var(--muted);margin:6px 0 0}');
T('progress-scroll', '<p style="height:400px;margin:0;font-size:11px;color:var(--faint)">', '<p class="d-fill">', 'body');
ADD('progress-scroll', '.d-prog .d-fill{height:400px;margin:0;font-size:11px;color:var(--faint)}');

/* ---- 3. 行内 style：数据改成自定义属性，样式属性写进 css ---- */
T('audio-wave', '.wave3 i{flex:1;', '.wave3 i{height:var(--h);flex:1;');
T('heatmap', '.d-heat i{width:10px;', '.d-heat i{opacity:var(--o);width:10px;');

const cache = new Map();
const read = (id) => {
  if (!cache.has(id)) cache.set(id, JSON.parse(fs.readFileSync(path.join(DIR, id + '.json'), 'utf8')));
  return cache.get(id);
};
const log = [];
for (const op of ops) {
  const a = read(op.id);
  const field = op.where === 'cssAppend' ? 'css' : op.where;
  const cur = a[field] || '';
  if (op.where === 'cssAppend') {
    if (cur.includes(op.css)) { log.push('跳过（已存在） ' + op.id); continue; }
    a.css = cur.replace(/\s*$/, '\n') + op.css;
    log.push('+' + op.id + ' 追加 css 1 条');
    continue;
  }
  const n = cur.split(op.from).length - 1;
  if (!n) { log.push('✗ ' + op.id + ' 没找到要替换的原文：' + op.from.slice(0, 46)); continue; }
  a[field] = cur.split(op.from).join(op.to);
  log.push('· ' + op.id + ' ' + field + ' ×' + n);
}
/* 数据类行内 style 的逐元素改写（正则，值不固定） */
for (const [id, re, tpl] of [
  ['audio-wave', /style="height:(\d+%)"/g, '--h:$1'],
  ['heatmap', /style="opacity:([0-9.]+)"/g, '--o:$1'],
]) {
  const a = read(id);
  const before = a.body;
  a.body = before.replace(re, 'style="' + tpl + '"');
  log.push('· ' + id + ' body 行内数据 ×' + (before.match(re) || []).length);
}
/* masonry-x：6 个色块的高度/颜色整体收进 css 的 nth-child */
{
  const a = read('masonry-x');
  const cells = [...a.body.matchAll(/<div style="height:(\d+)px;background:([^;"]+)(;border:1px solid var\(--line\))?"><\/div>/g)]
    .map((m, i) => '.d-ms3 div:nth-child(' + (i + 1) + '){height:' + m[1] + 'px;background:' + m[2] + (m[3] ? ';border:1px solid var(--line)' : ';border:1px solid transparent') + '}');
  if (cells.length !== 6) log.push('✗ masonry-x 只匹配到 ' + cells.length + ' 个色块，跳过');
  else {
    a.body = a.body.replace(/<div style="[^"]*"><\/div>/g, '<div></div>');
    a.css = a.css.replace(/\s*$/, '\n') + cells.join('\n') + '\n';
    log.push('· masonry-x 6 个色块收进 nth-child');
  }
}
/* theme-crossfade：纯行为资产，css 本来就没有——不编内容凑字数，改由校验规则放行 */

if (!APPLY) { console.log('（--plan，未写盘）\n' + log.join('\n')); process.exit(0); }
for (const [id, a] of cache) fs.writeFileSync(path.join(DIR, id + '.json'), JSON.stringify(a, null, 2) + '\n', 'utf8');
console.log(log.join('\n'));
console.log('\n✓ 已写 ' + cache.size + ' 个 JSON');
