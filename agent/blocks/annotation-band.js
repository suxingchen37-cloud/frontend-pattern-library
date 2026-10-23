// 用法：先 <script src="blocks/annotation-band.js"></script>，再调用 window.INITS['annotation-band'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['annotation-band'] = (root => {
  const svg = root.querySelector('.d-ab-svg');
  if (!svg) return;
  const W = 320, H = 180, L = 26, R = 10, T = 16, B = 28;
  const plotW = W - L - R, plotH = H - T - B;
  const pts = [34, 41, 39, 46, 44, 51, 49, 56, 54, 60, 58, 63, 61, 66];
  const max = 80;
  const x = i => L + i * plotW / (pts.length - 1);
  const y = v => T + plotH * (1 - v / max);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    svg.appendChild(mk('line', { class: 'd-ab-axis', x1: L, y1: T + plotH * g / 4, x2: W - R, y2: T + plotH * g / 4 }));
    const t = mk('text', { class: 'd-ab-label', x: 0, y: T + plotH * g / 4 + 2.5 });
    t.textContent = String(max - g * 20); svg.appendChild(t);
  }
  svg.appendChild(mk('rect', { class: 'd-ab-band', x: L, y: y(58).toFixed(1), width: plotW, height: (y(48) - y(58)).toFixed(1) }));
  const d = pts.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');
  svg.appendChild(mk('path', { class: 'd-ab-line', d: d }));
  [[3, '改版上线'], [9, '换了供应商']].forEach(m => {
    svg.appendChild(mk('line', { class: 'd-ab-mark', x1: x(m[0]).toFixed(1), y1: T, x2: x(m[0]).toFixed(1), y2: H - B }));
    const t = mk('text', { class: 'd-ab-tag', x: x(m[0]) + 4, y: T + 8 });
    t.textContent = m[1];
    svg.appendChild(t);
  });
});
