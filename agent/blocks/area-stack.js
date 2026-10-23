// 用法：先 <script src="blocks/area-stack.js"></script>，再调用 window.INITS['area-stack'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['area-stack'] = (root => {
  const svg = root.querySelector('.d-as-svg');
  if (!svg) return;
  const series = [
    [18, 22, 20, 26, 24, 30, 28, 34],
    [10, 12, 16, 14, 18, 19, 22, 24],
    [6, 8, 7, 11, 10, 13, 12, 15]
  ];
  const W = 320, H = 170, L = 26, R = 8, T = 16, B = 26;
  const n = series[0].length;
  const max = 80;
  const x = i => L + i * (W - L - R) / (n - 1);
  const y = v => T + (H - T - B) * (1 - v / max);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    const gy = T + (H - T - B) * g / 4;
    svg.appendChild(mk('line', { class: 'd-as-axis', x1: L, y1: gy, x2: W - R, y2: gy }));
    const t = mk('text', { class: 'd-as-label', x: 0, y: gy + 2.5 });
    t.textContent = String(max - g * (max / 4));
    svg.appendChild(t);
  }
  const base = new Array(n).fill(0);
  series.forEach((s, si) => {
    const top = base.map((b, i) => b + s[i]);
    const up = top.map((v, i) => x(i).toFixed(1) + ' ' + y(v).toFixed(1));
    const down = base.map((v, i) => x(i).toFixed(1) + ' ' + y(v).toFixed(1)).reverse();
    const d = 'M' + up.join(' L') + ' L' + down.join(' L') + ' Z';
    svg.appendChild(mk('path', { class: 'd-as-s' + (si + 1), d: d }));
    for (let i = 0; i < n; i++) base[i] = top[i];
  });
  ['1月','3月','5月','7月'].forEach((m, k) => { const i = k * 2; const t = mk('text', { class: 'd-as-label', x: x(i), y: H - 8, 'text-anchor': 'middle' }); t.textContent = m; svg.appendChild(t); });
});
