// 用法：先 <script src="blocks/radar-chart.js"></script>，再调用 window.INITS['radar-chart'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['radar-chart'] = (root => {
  const svg = root.querySelector('.d-rd-svg');
  if (!svg) return;
  const axes = ['稳定', '速度', '成本', '覆盖', '维护'];
  const cur = [.82, .64, .58, .9, .72];
  const prev = [.62, .7, .66, .54, .6];
  const cx = 120, cy = 96, R = 62;
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  const pt = (i, k) => { const a = -Math.PI / 2 + i * 2 * Math.PI / axes.length; return [cx + Math.cos(a) * R * k, cy + Math.sin(a) * R * k]; };
  [1, .66, .33].forEach(k => {
    const d = axes.map((_, i) => { const p = pt(i, k); return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' ') + ' Z';
    svg.appendChild(mk('path', { class: 'd-rd-grid', d: d }));
  });
  axes.forEach((name, i) => {
    const p = pt(i, 1);
    svg.appendChild(mk('line', { class: 'd-rd-spoke', x1: cx, y1: cy, x2: p[0].toFixed(1), y2: p[1].toFixed(1) }));
    const lp = pt(i, 1.16);
    const t = mk('text', { class: 'd-rd-lab', x: lp[0].toFixed(1), y: lp[1].toFixed(1), 'text-anchor': 'middle', 'dominant-baseline': 'middle' });
    t.textContent = name;
    svg.appendChild(t);
  });
  const poly = (vals, cls) => {
    const d = vals.map((v, i) => { const p = pt(i, v); return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' ') + ' Z';
    svg.appendChild(mk('path', { class: cls, d: d }));
  };
  poly(prev, 'd-rd-b');
  poly(cur, 'd-rd-a');
});
