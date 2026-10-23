// 图表类 第一批 6 条。几何全在 init 里手算，不引任何图表库。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data', 'assets', 'motion');
const A = [];

const AXIS = '.d-cx-axis{stroke:var(--line);stroke-width:1}\n.d-cx-label{fill:var(--faint);font-family:var(--font-mono);font-size:7px;letter-spacing:.06em}\n';

/* 1 折线趋势 */
A.push({
  id: 'line-chart', cat: '图表', t: '折线趋势', en: 'line chart',
  d: '12 个月只留 4 个横轴标签：每月都标，字会挤成一片，反而看不出趋势。悬停时十字线吸附到最近的点而不是跟着鼠标飘——读数要落在真实数据上，落在两点之间就是假数据。线用 1.5px，网格 1px 且压到很淡：图是主角，不是网格。',
  body: '<div class="d-lc"><svg class="d-lc-svg" viewBox="0 0 320 170" role="img" aria-label="月度访问量折线图，共 12 个月"></svg><p class="d-lc-note">悬停看每月读数</p></div>',
  css: '.d-lc{position:relative;width:100%;max-width:340px}\n.d-lc-svg{display:block;width:100%;height:auto;overflow:visible}\n' + AXIS +
    '.d-lc-line{fill:none;stroke:var(--ink);stroke-width:1.5;stroke-linejoin:round;stroke-linecap:round}\n.d-lc-dot{fill:var(--paper);stroke:var(--ink);stroke-width:1.5;opacity:0}\n.d-lc-dot.on{opacity:1}\n.d-lc-cross{stroke:var(--line);stroke-width:1;stroke-dasharray:2 3;opacity:0}\n.d-lc-cross.on{opacity:1}\n.d-lc-val{fill:var(--ink);font-size:11px;font-weight:650}\n.d-lc-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}',
  init: "root => {\n  const svg = root.querySelector('.d-lc-svg');\n  if (!svg) return;\n  const data = [32, 41, 38, 52, 47, 61, 58, 72, 68, 79, 88, 96];\n  const months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];\n  const W = 320, H = 170, L = 26, R = 8, T = 18, B = 26;\n  const max = 100, min = 0;\n  const x = i => L + i * (W - L - R) / (data.length - 1);\n  const y = v => T + (H - T - B) * (1 - (v - min) / (max - min));\n  const NS = 'http://www.w3.org/2000/svg';\n  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };\n  for (let g = 0; g <= 4; g++) {\n    const gy = T + (H - T - B) * g / 4;\n    svg.appendChild(mk('line', { class: 'd-cx-axis', x1: L, y1: gy, x2: W - R, y2: gy }));\n    const t = mk('text', { class: 'd-cx-label', x: 0, y: gy + 2.5 });\n    t.textContent = String(100 - g * 25);\n    svg.appendChild(t);\n  }\n  const d = data.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');\n  svg.appendChild(mk('path', { class: 'd-lc-line', d: d }));\n  months.forEach((m, i) => { if (i % 3 !== 0) return; const t = mk('text', { class: 'd-cx-label', x: x(i), y: H - 8, 'text-anchor': 'middle' }); t.textContent = m; svg.appendChild(t); });\n  const cross = mk('line', { class: 'd-lc-cross', x1: 0, y1: T, x2: 0, y2: H - B });\n  svg.appendChild(cross);\n  const dots = data.map((v, i) => { const c = mk('circle', { class: 'd-lc-dot', cx: x(i), cy: y(v), r: 3.5 }); svg.appendChild(c); return c; });\n  const val = mk('text', { class: 'd-lc-val', x: 0, y: 0 });\n  svg.appendChild(val);\n  const move = e => {\n    const box = svg.getBoundingClientRect();\n    const px = (e.clientX - box.left) / box.width * W;\n    let idx = Math.round((px - L) / ((W - L - R) / (data.length - 1)));\n    idx = Math.max(0, Math.min(data.length - 1, idx));\n    dots.forEach((c, i) => c.classList.toggle('on', i === idx));\n    cross.classList.add('on');\n    cross.setAttribute('x1', x(idx)); cross.setAttribute('x2', x(idx));\n    val.textContent = months[idx] + ' · ' + data[idx];\n    val.setAttribute('x', Math.min(W - 60, Math.max(L, x(idx) - 22)));\n    val.setAttribute('y', Math.max(12, y(data[idx]) - 8));\n  };\n  svg.addEventListener('pointermove', move);\n  svg.addEventListener('pointerleave', () => { dots.forEach(c => c.classList.remove('on')); cross.classList.remove('on'); val.textContent = ''; });\n}",
  motion: '机械', tags: ['折线', '趋势', '悬停', '图表'],
});

/* 2 堆叠面积 */
A.push({
  id: 'area-stack', cat: '图表', t: '堆叠面积', en: 'stacked area',
  d: '三条叠起来看的是「总共多少、各占多少」，不是三条各自的高低——单看某一条的起伏会误读，因为它底下的面积也在动。三层只用一档墨加两种油墨，靠明度分开；再加第三种颜色，读者就开始数颜色而不是看总量。',
  body: '<div class="d-as"><svg class="d-as-svg" viewBox="0 0 320 170" role="img" aria-label="三层构成随时间变化的堆叠面积图"></svg><p class="d-as-note">三层构成 · 看总量也看占比</p></div>',
  css: '.d-as{width:100%;max-width:340px}\n.d-as-svg{display:block;width:100%;height:auto;overflow:visible}\n' + AXIS +
    '.d-as-s1{fill:var(--ink)}\n.d-as-s2{fill:var(--ink-vermilion)}\n.d-as-s3{fill:var(--ink-yellow)}\n.d-as-s1,.d-as-s2,.d-as-s3{opacity:.85}\n.d-as-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}',
  init: "root => {\n  const svg = root.querySelector('.d-as-svg');\n  if (!svg) return;\n  const series = [\n    [18, 22, 20, 26, 24, 30, 28, 34],\n    [10, 12, 16, 14, 18, 19, 22, 24],\n    [6, 8, 7, 11, 10, 13, 12, 15]\n  ];\n  const W = 320, H = 170, L = 26, R = 8, T = 16, B = 26;\n  const n = series[0].length;\n  const max = 80;\n  const x = i => L + i * (W - L - R) / (n - 1);\n  const y = v => T + (H - T - B) * (1 - v / max);\n  const NS = 'http://www.w3.org/2000/svg';\n  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };\n  for (let g = 0; g <= 4; g++) {\n    const gy = T + (H - T - B) * g / 4;\n    svg.appendChild(mk('line', { class: 'd-cx-axis', x1: L, y1: gy, x2: W - R, y2: gy }));\n    const t = mk('text', { class: 'd-cx-label', x: 0, y: gy + 2.5 });\n    t.textContent = String(max - g * (max / 4));\n    svg.appendChild(t);\n  }\n  const base = new Array(n).fill(0);\n  series.forEach((s, si) => {\n    const top = base.map((b, i) => b + s[i]);\n    const up = top.map((v, i) => x(i).toFixed(1) + ' ' + y(v).toFixed(1));\n    const down = base.map((v, i) => x(i).toFixed(1) + ' ' + y(v).toFixed(1)).reverse();\n    const d = 'M' + up.join(' L') + ' L' + down.join(' L') + ' Z';\n    svg.appendChild(mk('path', { class: 'd-as-s' + (si + 1), d: d }));\n    for (let i = 0; i < n; i++) base[i] = top[i];\n  });\n  ['1月','3月','5月','7月'].forEach((m, k) => { const i = k * 2; const t = mk('text', { class: 'd-cx-label', x: x(i), y: H - 8, 'text-anchor': 'middle' }); t.textContent = m; svg.appendChild(t); });\n}",
  motion: '印刷', tags: ['面积', '堆叠', '构成', '图表'],
});

/* 3 分组柱 */
A.push({
  id: 'bar-grouped', cat: '图表', t: '分组柱', en: 'grouped bars',
  d: '两根柱之间留 4px、组与组之间留 18px：间距就是分组信号，两组一样宽反而分不出谁跟谁比。基線从 0 起，不给「截断轴」——截断能让差距看着翻倍，那是骗人。悬停整组变色，是为了让你比较一组里的两根，而不是单根。',
  body: '<div class="d-bg2"><svg class="d-bg2-svg" viewBox="0 0 320 170" role="img" aria-label="四组对比柱状图，每组两根"></svg><p class="d-bg2-note">深浅两根：今年 / 去年</p></div>',
  css: '.d-bg2{width:100%;max-width:340px}\n.d-bg2-svg{display:block;width:100%;height:auto;overflow:visible}\n' + AXIS +
    '.d-bg2-a{fill:var(--ink)}\n.d-bg2-b{fill:color-mix(in srgb,var(--ink) 28%,var(--paper))}\n.d-bg2-g{cursor:default}\n.d-bg2-g .d-bg2-a,.d-bg2-g .d-bg2-b{transition:opacity 160ms var(--ease-print)}\n.d-bg2-svg:hover .d-bg2-g{opacity:.45}\n.d-bg2-svg .d-bg2-g:hover{opacity:1}\n.d-bg2-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}',
  init: "root => {\n  const svg = root.querySelector('.d-bg2-svg');\n  if (!svg) return;\n  const groups = [['一季度', 42, 31], ['二季度', 58, 47], ['三季度', 51, 39], ['四季度', 72, 55]];\n  const W = 320, H = 170, L = 26, R = 10, T = 14, B = 26;\n  const max = 80;\n  const plotW = W - L - R, plotH = H - T - B;\n  const gw = plotW / groups.length;\n  const bw = 16, gap = 4;\n  const y = v => T + plotH * (1 - v / max);\n  const NS = 'http://www.w3.org/2000/svg';\n  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };\n  for (let g = 0; g <= 4; g++) {\n    const gy = T + plotH * g / 4;\n    svg.appendChild(mk('line', { class: 'd-cx-axis', x1: L, y1: gy, x2: W - R, y2: gy }));\n    const t = mk('text', { class: 'd-cx-label', x: 0, y: gy + 2.5 });\n    t.textContent = String(max - g * 20);\n    svg.appendChild(t);\n  }\n  groups.forEach((gr, i) => {\n    const g = mk('g', { class: 'd-bg2-g' });\n    const cx = L + gw * i + gw / 2;\n    const x0 = cx - (bw * 2 + gap) / 2;\n    g.appendChild(mk('rect', { class: 'd-bg2-a', x: x0, y: y(gr[1]), width: bw, height: y(0) - y(gr[1]) }));\n    g.appendChild(mk('rect', { class: 'd-bg2-b', x: x0 + bw + gap, y: y(gr[2]), width: bw, height: y(0) - y(gr[2]) }));\n    const t = mk('text', { class: 'd-cx-label', x: cx, y: H - 8, 'text-anchor': 'middle' });\n    t.textContent = gr[0];\n    g.appendChild(t);\n    svg.appendChild(g);\n  });\n}",
  motion: '印刷', tags: ['柱状', '对比', '分组', '图表'],
});

/* 4 散点 */
A.push({
  id: 'scatter-plot', cat: '图表', t: '散点相关', en: 'scatter plot',
  d: '四十六个点里只标一个离群点：全标等于没标，人会先去读标注而不是先看形状。点用 2px 实心、不加描边，叠在一起还能看出密度；加描边就把密度糊成一团。横纵轴范围从 0 起，因为这两个量没有负值，硬拉开只会让相关性看着更强。',
  body: '<div class="d-sp2"><svg class="d-sp2-svg" viewBox="0 0 320 170" role="img" aria-label="两组数据的散点图，标出一个离群点"></svg><p class="d-sp2-note">点越靠右上，两个量一起涨</p></div>',
  css: '.d-sp2{width:100%;max-width:340px}\n.d-sp2-svg{display:block;width:100%;height:auto;overflow:visible}\n' + AXIS +
    '.d-sp2-dot{fill:var(--ink);opacity:.55}\n.d-sp2-out{fill:var(--ink-vermilion);opacity:1}\n.d-sp2-tag{fill:var(--ink-vermilion);font-family:var(--font-mono);font-size:7px;letter-spacing:.04em}\n.d-sp2-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}',
  init: "root => {\n  const svg = root.querySelector('.d-sp2-svg');\n  if (!svg) return;\n  const W = 320, H = 170, L = 26, R = 10, T = 14, B = 26;\n  const NS = 'http://www.w3.org/2000/svg';\n  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };\n  for (let g = 0; g <= 4; g++) {\n    const gy = T + (H - T - B) * g / 4;\n    svg.appendChild(mk('line', { class: 'd-cx-axis', x1: L, y1: gy, x2: W - R, y2: gy }));\n    const t = mk('text', { class: 'd-cx-label', x: 0, y: gy + 2.5 });\n    t.textContent = String(100 - g * 25);\n    svg.appendChild(t);\n  }\n  let seed = 7;\n  const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };\n  for (let i = 0; i < 45; i++) {\n    const a = 12 + rnd() * 62;\n    const b = a * .6 + (rnd() - .5) * 26 + 8;\n    const cx = L + (W - L - R) * a / 100;\n    const cy = T + (H - T - B) * (1 - Math.max(2, Math.min(98, b)) / 100);\n    svg.appendChild(mk('circle', { class: 'd-sp2-dot', cx: cx.toFixed(1), cy: cy.toFixed(1), r: 2 }));\n  }\n  const ox = L + (W - L - R) * .86, oy = T + (H - T - B) * .16;\n  svg.appendChild(mk('circle', { class: 'd-sp2-out', cx: ox, cy: oy, r: 2.6 }));\n  const t = mk('text', { class: 'd-sp2-tag', x: ox - 46, y: oy - 7 });\n  t.textContent = '离群 · 单次 12m';\n  svg.appendChild(t);\n}",
  motion: '无动效', tags: ['散点', '相关', '离群', '图表'],
});

/* 5 迷你趋势网格 */
A.push({
  id: 'sparkline-grid', cat: '图表', t: '迷你趋势', en: 'sparkline grid',
  d: '表格里的趋势不该占一整个图表位：一条 28px 高的线，只画形状不画轴，配一个涨跌数字就够了。线不填充、端点不留圆点——在 28px 里加任何装饰都会盖住形状本身。数值涨用墨、跌用朱，别用红绿：这套纸色里没有交通灯。',
  body: '<div class="d-sg2"><div class="d-sg2-row"><span class="d-sg2-k">访问</span><svg class="d-sg2-s" data-v="12,18,15,22,26,24,31"></svg><b class="d-sg2-up">+18%</b></div><div class="d-sg2-row"><span class="d-sg2-k">注册</span><svg class="d-sg2-s" data-v="9,11,10,12,11,10,9"></svg><b class="d-sg2-down">−6%</b></div><div class="d-sg2-row"><span class="d-sg2-k">留存</span><svg class="d-sg2-s" data-v="20,19,21,22,24,23,27"></svg><b class="d-sg2-up">+9%</b></div></div>',
  css: '.d-sg2{width:100%;max-width:340px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden}\n.d-sg2-row{display:grid;grid-template-columns:52px 1fr 48px;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid var(--line)}\n.d-sg2-row:last-child{border-bottom:0}\n.d-sg2-k{font-size:12px;color:var(--muted)}\n.d-sg2-s{display:block;width:100%;height:28px;overflow:visible}\n.d-sg2-line{fill:none;stroke:var(--ink);stroke-width:1.5;stroke-linejoin:round;stroke-linecap:round}\n.d-sg2-b{font-family:var(--font-mono);font-size:11px;text-align:right}\n.d-sg2-up{color:var(--ink)}\n.d-sg2-down{color:var(--ink-vermilion)}',
  init: "root => {\n  const NS = 'http://www.w3.org/2000/svg';\n  root.querySelectorAll('.d-sg2-s').forEach(svg => {\n    const vals = (svg.dataset.v || '').split(',').map(Number).filter(v => !isNaN(v));\n    if (!vals.length) return;\n    svg.setAttribute('viewBox', '0 0 120 28');\n    svg.setAttribute('preserveAspectRatio', 'none');\n    const min = Math.min.apply(null, vals), max = Math.max.apply(null, vals);\n    const span = max - min || 1;\n    const d = vals.map((v, i) => (i ? 'L' : 'M') + (i * 120 / (vals.length - 1)).toFixed(1) + ' ' + (26 - (v - min) / span * 22).toFixed(1)).join(' ');\n    const p = document.createElementNS(NS, 'path');\n    p.setAttribute('class', 'd-sg2-line');\n    p.setAttribute('d', d);\n    svg.appendChild(p);\n  });\n}",
  motion: '无动效', tags: ['迷你图', '表格', '趋势', '图表'],
});

/* 6 环形进度 */
A.push({
  id: 'donut-progress', cat: '图表', t: '环形进度', en: 'donut progress',
  d: '环只画一个数：68% 这种单一指标适合环，是因为环天然对应「一圈里占了多少」。多指标别用多个环并排，人比不出两个环的面积差；换成条形更准。缺口从 12 点方向开始，顺时针走，跟表盘一致。',
  body: '<div class="d-dp2"><svg class="d-dp2-svg" viewBox="0 0 120 120" role="img" aria-label="完成度 68% 的环形进度"><circle class="d-dp2-bg" cx="60" cy="60" r="46"></circle><circle class="d-dp2-fg" cx="60" cy="60" r="46"></circle><text class="d-dp2-num" x="60" y="62" text-anchor="middle">68%</text><text class="d-dp2-cap" x="60" y="78" text-anchor="middle">本月完成</text></svg><p class="d-dp2-note">环只给一个数</p></div>',
  css: '.d-dp2{display:flex;flex-direction:column;align-items:center;gap:4px;width:100%;max-width:340px}\n.d-dp2-svg{display:block;width:132px;height:132px}\n.d-dp2-bg{fill:none;stroke:var(--line);stroke-width:8}\n.d-dp2-fg{fill:none;stroke:var(--ink);stroke-width:8;stroke-linecap:round;transform:rotate(-90deg);transform-origin:60px 60px;stroke-dasharray:0 1000;transition:stroke-dasharray 620ms var(--ease-print)}\n.d-dp2-num{fill:var(--ink);font-size:21px;font-weight:650;letter-spacing:-.02em}\n.d-dp2-cap{fill:var(--faint);font-family:var(--font-mono);font-size:7px;letter-spacing:.08em}\n.d-dp2-note{margin:0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}',
  init: "root => {\n  const fg = root.querySelector('.d-dp2-fg');\n  if (!fg) return;\n  const pct = 68, r = 46, C = 2 * Math.PI * r;\n  const set = () => { fg.setAttribute('stroke-dasharray', (C * pct / 100).toFixed(1) + ' ' + C.toFixed(1)); };\n  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { set(); return; }\n  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { set(); io.disconnect(); } }), { threshold: .4 });\n  io.observe(root.querySelector('.d-dp2-svg') || fg);\n}",
  motion: '机械', tags: ['环', '进度', '单指标', '图表'],
});

const PREFIX = { 'line-chart': 'lc', 'area-stack': 'as', 'bar-grouped': 'bg2', 'scatter-plot': 'sp2' };
for (const a of A) { const p = PREFIX[a.id]; if (p) { a.css = a.css.split('d-cx-axis').join('d-' + p + '-axis').split('d-cx-label').join('d-' + p + '-label'); a.init = String(a.init).split('d-cx-axis').join('d-' + p + '-axis').split('d-cx-label').join('d-' + p + '-label'); } }
for (const a of A) fs.writeFileSync(path.join(DIR, a.id + '.json'), JSON.stringify(a, null, 2) + '\n', 'utf8');
console.log('写入 ' + A.length + ' 条：' + A.map(a => a.id).join(', '));
