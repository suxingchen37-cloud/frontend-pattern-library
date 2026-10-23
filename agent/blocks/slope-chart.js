// 用法：先 <script src="blocks/slope-chart.js"></script>，再调用 window.INITS['slope-chart'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['slope-chart'] = (root => {
  const svg = root.querySelector('.d-sl-svg');
  if (!svg) return;
  const rows = [['响应', 62, 74], ['稳定', 71, 68], ['成本', 44, 58], ['覆盖', 80, 76], ['维护', 55, 61]];
  const W = 320, H = 180, LX = 96, RX = 236;
  const vals = rows.flatMap(r => [r[1], r[2]]);
  const min = Math.min.apply(null, vals) - 6, max = Math.max.apply(null, vals) + 6;
  const y = v => 26 + (H - 52) * (1 - (v - min) / (max - min));
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  svg.appendChild(mk('line', { class: 'd-sl-axis', x1: LX, y1: 20, x2: LX, y2: H - 20, stroke: 'var(--line)' }));
  svg.appendChild(mk('line', { class: 'd-sl-axis', x1: RX, y1: 20, x2: RX, y2: H - 20, stroke: 'var(--line)' }));
  ['去年', '今年'].forEach((t, i) => { const el = mk('text', { class: 'd-sl-label', x: i ? RX : LX, y: 14, 'text-anchor': 'middle' }); el.textContent = t; svg.appendChild(el); });
  rows.forEach(r => {
    const [name, a, b] = r;
    const up = b >= a;
    const cls = up ? 'd-sl-up' : 'd-sl-down';
    svg.appendChild(mk('line', { class: 'd-sl-line ' + cls, x1: LX + 4, y1: y(a).toFixed(1), x2: RX - 4, y2: y(b).toFixed(1) }));
    [[LX, a], [RX, b]].forEach(p => {
      svg.appendChild(mk('circle', { class: 'd-sl-dot ' + cls, cx: p[0], cy: y(p[1]).toFixed(1), r: 3 }));
    });
    const l = mk('text', { class: 'd-sl-name', x: LX - 10, y: y(a) + 3, 'text-anchor': 'end' });
    l.textContent = name; svg.appendChild(l);
    const v = mk('text', { class: 'd-sl-val', x: RX + 8, y: y(b) + 3 });
    v.textContent = String(b); svg.appendChild(v);
  });
});
