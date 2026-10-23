// 用法：先 <script src="blocks/chart-small-multiples.js"></script>，再调用 window.INITS['chart-small-multiples'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['chart-small-multiples'] = (root => {
  const NS = 'http://www.w3.org/2000/svg';
  const groups = [...root.querySelectorAll('.d-sm3 svg')];
  const all = groups.map(g => (g.dataset.v || '').split(',').map(Number));
  const flat = all.flat();
  const min = Math.min.apply(null, flat), max = Math.max.apply(null, flat);
  const span = max - min || 1;
  groups.forEach((svg, gi) => {
    const vals = all[gi];
    svg.setAttribute('viewBox', '0 0 100 34');
    svg.setAttribute('preserveAspectRatio', 'none');
    const d = vals.map((v, i) => (i ? 'L' : 'M') + (i * 100 / (vals.length - 1)).toFixed(1) + ' ' + (31 - (v - min) / span * 27).toFixed(1)).join(' ');
    const p = document.createElementNS(NS, 'path');
    p.setAttribute('class', 'd-sm3-line');
    p.setAttribute('d', d);
    svg.appendChild(p);
  });
});
