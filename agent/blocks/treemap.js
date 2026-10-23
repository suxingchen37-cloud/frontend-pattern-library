// 用法：先 <script src="blocks/treemap.js"></script>，再调用 window.INITS['treemap'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['treemap'] = (root => {
  const svg = root.querySelector('.d-tm-svg');
  if (!svg) return;
  const items = [['搜索', 42], ['直接', 23], ['社交', 15], ['邮件', 9], ['联盟', 6], ['其它', 5]];
  const total = items.reduce((s, x) => s + x[1], 0);
  const W = 320, H = 170;
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  const shades = ['var(--ink)', 'color-mix(in srgb,var(--ink) 78%,var(--paper))', 'color-mix(in srgb,var(--ink) 60%,var(--paper))', 'var(--ink-indigo)', 'color-mix(in srgb,var(--ink) 42%,var(--paper))', 'color-mix(in srgb,var(--ink) 30%,var(--paper))'];
  const rects = [];
  (function split(list, x, y, w, h, vertical) {
    if (!list.length) return;
    if (list.length === 1) { rects.push({ item: list[0], x: x, y: y, w: w, h: h }); return; }
    const sum = list.reduce((s, i) => s + i[1], 0);
    let acc = 0, cut = 1;
    for (let i = 0; i < list.length; i++) { const next = acc + list[i][1]; if (next >= sum / 2) { cut = i + 1; break; } acc = next; }
    const a = list.slice(0, cut), b = list.slice(cut);
    const sa = a.reduce((s, i) => s + i[1], 0);
    const frac = sa / sum;
    if (vertical) { split(a, x, y, w * frac, h, false); split(b, x + w * frac, y, w * (1 - frac), h, false); }
    else { split(a, x, y, w, h * frac, true); split(b, x, y + h * frac, w, h * (1 - frac), true); }
  })(items, 0, 0, W, H, true);
  const order = new Map(items.map((it, i) => [it[0], i]));
  rects.forEach(r => {
    const [name, val] = r.item;
    const idx = order.get(name);
    svg.appendChild(mk('rect', { class: 'd-tm-cell', x: r.x.toFixed(1), y: r.y.toFixed(1), width: r.w.toFixed(1), height: r.h.toFixed(1), fill: shades[idx % shades.length] }));
    if (r.w < 52 || r.h < 30) return;
    const t = mk('text', { class: 'd-tm-text', x: r.x + 8, y: r.y + 18 });
    t.textContent = name;
    svg.appendChild(t);
    const v = mk('text', { class: 'd-tm-val', x: r.x + 8, y: r.y + 30 });
    v.textContent = Math.round(val / total * 100) + '%';
    svg.appendChild(v);
  });
});
