// 用法：先 <script src="blocks/histogram.js"></script>，再调用 window.INITS['histogram'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['histogram'] = (root => {
  const svg = root.querySelector('.d-hg-svg');
  if (!svg) return;
  const bins = [2, 5, 9, 16, 24, 31, 27, 19, 12, 7, 5, 2, 1, 0];
  const W = 320, H = 170, L = 26, R = 10, T = 14, B = 26;
  const plotW = W - L - R, plotH = H - T - B;
  const max = 32, bw = plotW / bins.length;
  const y = v => T + plotH * (1 - v / max);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    const gy = T + plotH * g / 4;
    svg.appendChild(mk('line', { class: 'd-hg-axis', x1: L, y1: gy, x2: W - R, y2: gy }));
    const t = mk('text', { class: 'd-hg-label', x: 0, y: gy + 2.5 });
    t.textContent = String(max - g * 8);
    svg.appendChild(t);
  }
  const peak = bins.indexOf(Math.max.apply(null, bins));
  bins.forEach((v, i) => {
    if (!v) return;
    svg.appendChild(mk('rect', { class: 'd-hg-bar' + (i === peak ? ' hi' : ''), x: (L + i * bw).toFixed(1), y: y(v).toFixed(1), width: Math.ceil(bw) + 0.5, height: (y(0) - y(v)).toFixed(1) }));
  });
  const mean = 5.4;
  const mx = L + plotW * mean / bins.length;
  svg.appendChild(mk('line', { class: 'd-hg-mean', x1: mx, y1: T, x2: mx, y2: H - B }));
  ['−2', '0', '+2', '+4', '+6'].forEach((lab, k) => { const t = mk('text', { class: 'd-hg-label', x: L + plotW * (k * 3.5) / bins.length, y: H - 8 }); t.textContent = lab; svg.appendChild(t); });
});
