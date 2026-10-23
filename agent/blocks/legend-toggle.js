// 用法：先 <script src="blocks/legend-toggle.js"></script>，再调用 window.INITS['legend-toggle'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['legend-toggle'] = (root => {
  const svg = root.querySelector('.d-lt2-svg');
  const btns = [...root.querySelectorAll('[data-k]')];
  if (!svg || !btns.length) return;
  const series = [[30, 38, 35, 48, 44, 57, 62], [12, 15, 14, 19, 22, 21, 26], [4, 5, 7, 6, 9, 11, 13]];
  const W = 320, H = 170, L = 26, R = 8, T = 14, B = 26;
  const n = series[0].length, max = 70;
  const x = i => L + i * (W - L - R) / (n - 1);
  const y = v => T + (H - T - B) * (1 - v / max);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 3; g++) svg.appendChild(mk('line', { class: 'd-lt2-axis', x1: L, y1: T + (H - T - B) * g / 3, x2: W - R, y2: T + (H - T - B) * g / 3 }));
  const paths = series.map((s, si) => {
    const d = s.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');
    const p = mk('path', { class: 'd-lt2-line d-lt2-s' + si, d: d });
    svg.appendChild(p);
    return p;
  });
  btns.forEach(b => {
    b.onclick = () => {
      const on = b.getAttribute('aria-pressed') === 'true';
      b.setAttribute('aria-pressed', on ? 'false' : 'true');
      paths[Number(b.dataset.k)].classList.toggle('d-lt2-off', on);
    };
  });
});
