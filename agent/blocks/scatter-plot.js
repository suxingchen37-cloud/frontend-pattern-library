// 用法：先 <script src="blocks/scatter-plot.js"></script>，再调用 window.INITS['scatter-plot'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['scatter-plot'] = (root => {
  const svg = root.querySelector('.d-sp2-svg');
  if (!svg) return;
  const W = 320, H = 170, L = 26, R = 10, T = 14, B = 26;
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    const gy = T + (H - T - B) * g / 4;
    svg.appendChild(mk('line', { class: 'd-sp2-axis', x1: L, y1: gy, x2: W - R, y2: gy }));
    const t = mk('text', { class: 'd-sp2-label', x: 0, y: gy + 2.5 });
    t.textContent = String(100 - g * 25);
    svg.appendChild(t);
  }
  let seed = 7;
  const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  for (let i = 0; i < 45; i++) {
    const a = 12 + rnd() * 62;
    const b = a * .6 + (rnd() - .5) * 26 + 8;
    const cx = L + (W - L - R) * a / 100;
    const cy = T + (H - T - B) * (1 - Math.max(2, Math.min(98, b)) / 100);
    svg.appendChild(mk('circle', { class: 'd-sp2-dot', cx: cx.toFixed(1), cy: cy.toFixed(1), r: 2 }));
  }
  const ox = L + (W - L - R) * .86, oy = T + (H - T - B) * .16;
  svg.appendChild(mk('circle', { class: 'd-sp2-out', cx: ox, cy: oy, r: 2.6 }));
  const t = mk('text', { class: 'd-sp2-tag', x: ox - 46, y: oy - 7 });
  t.textContent = '离群 · 单次 12m';
  svg.appendChild(t);
});
