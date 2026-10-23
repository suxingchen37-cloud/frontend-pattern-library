// 用法：先 <script src="blocks/sparkline-grid.js"></script>，再调用 window.INITS['sparkline-grid'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['sparkline-grid'] = (root => {
  const NS = 'http://www.w3.org/2000/svg';
  root.querySelectorAll('.d-sg2-s').forEach(svg => {
    const vals = (svg.dataset.v || '').split(',').map(Number).filter(v => !isNaN(v));
    if (!vals.length) return;
    svg.setAttribute('viewBox', '0 0 120 28');
    svg.setAttribute('preserveAspectRatio', 'none');
    const min = Math.min.apply(null, vals), max = Math.max.apply(null, vals);
    const span = max - min || 1;
    const d = vals.map((v, i) => (i ? 'L' : 'M') + (i * 120 / (vals.length - 1)).toFixed(1) + ' ' + (26 - (v - min) / span * 22).toFixed(1)).join(' ');
    const p = document.createElementNS(NS, 'path');
    p.setAttribute('class', 'd-sg2-line');
    p.setAttribute('d', d);
    svg.appendChild(p);
  });
});
