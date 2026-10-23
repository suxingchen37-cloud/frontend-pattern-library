// 用法：先 <script src="blocks/bar-grouped.js"></script>，再调用 window.INITS['bar-grouped'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['bar-grouped'] = (root => {
  const svg = root.querySelector('.d-bg2-svg');
  if (!svg) return;
  const groups = [['一季度', 42, 31], ['二季度', 58, 47], ['三季度', 51, 39], ['四季度', 72, 55]];
  const W = 320, H = 170, L = 26, R = 10, T = 14, B = 26;
  const max = 80;
  const plotW = W - L - R, plotH = H - T - B;
  const gw = plotW / groups.length;
  const bw = 16, gap = 4;
  const y = v => T + plotH * (1 - v / max);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    const gy = T + plotH * g / 4;
    svg.appendChild(mk('line', { class: 'd-bg2-axis', x1: L, y1: gy, x2: W - R, y2: gy }));
    const t = mk('text', { class: 'd-bg2-label', x: 0, y: gy + 2.5 });
    t.textContent = String(max - g * 20);
    svg.appendChild(t);
  }
  groups.forEach((gr, i) => {
    const g = mk('g', { class: 'd-bg2-g' });
    const cx = L + gw * i + gw / 2;
    const x0 = cx - (bw * 2 + gap) / 2;
    g.appendChild(mk('rect', { class: 'd-bg2-a', x: x0, y: y(gr[1]), width: bw, height: y(0) - y(gr[1]) }));
    g.appendChild(mk('rect', { class: 'd-bg2-b', x: x0 + bw + gap, y: y(gr[2]), width: bw, height: y(0) - y(gr[2]) }));
    const t = mk('text', { class: 'd-bg2-label', x: cx, y: H - 8, 'text-anchor': 'middle' });
    t.textContent = gr[0];
    g.appendChild(t);
    svg.appendChild(g);
  });
});
