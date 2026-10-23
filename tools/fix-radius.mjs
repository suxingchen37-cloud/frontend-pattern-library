#!/usr/bin/env node
/**
 * tools/fix-radius.mjs —— 把圆角收进 tokens 的档位（table 0 / tag 2 / control 6 / card 10 / pill 999）。
 * 映射按「元素本来是哪一档」走，不按数值就近：
 *   3 / 4 → 2（小标签、细条）  5 / 7 → 6（控件）  8 / 9 / 12 / 16 → 10（卡片、面板）  99 → 999（胶囊，视觉不变）
 * 百分比圆角（50% 圆点/头像）不动——那是形状不是圆角档。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'data', 'assets', 'motion');
const APPLY = process.argv.includes('--apply');
const MAP = { 3: 2, 4: 2, 5: 6, 7: 6, 8: 10, 9: 10, 12: 10, 16: 10, 99: 999 };

const log = [];
const touched = [];
for (const f of fs.readdirSync(DIR).filter(x => x.endsWith('.json') && !x.startsWith('_'))) {
  const p = path.join(DIR, f);
  const a = JSON.parse(fs.readFileSync(p, 'utf8'));
  let n = 0;
  const detail = [];
  a.css = (a.css || '').replace(/border-radius\s*:\s*([^;}\n]+)/g, (whole, val) => {
    if (/var\(|calc\(/.test(val)) return whole;
    const out = val.replace(/(\d*\.?\d+)px/g, (px, num) => {
      const k = Number(num);
      if (!(k in MAP)) return px;
      n++;
      detail.push(k + '→' + MAP[k]);
      return MAP[k] + 'px';
    });
    return 'border-radius:' + out;
  });
  if (!n) continue;
  touched.push({ p, a });
  log.push('· ' + a.id.padEnd(20) + n + ' 处  ' + [...new Set(detail)].join(' '));
}
console.log(log.join('\n'));
console.log('\n共 ' + touched.length + ' 条资产、' + log.reduce((s, l) => s + (Number(l.match(/(\d+) 处/) || [])[1] || 0), 0) + ' 处圆角');
if (!APPLY) { console.log('（--plan，未写盘）'); process.exit(0); }
for (const { p, a } of touched) fs.writeFileSync(p, JSON.stringify(a, null, 2) + '\n', 'utf8');
console.log('✓ 已写 ' + touched.length + ' 个 JSON');
