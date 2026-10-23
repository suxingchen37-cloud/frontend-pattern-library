// 用法：先 <script src="blocks/line-chart.js"></script>，再调用 window.INITS['line-chart'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['line-chart'] = (root => {
  const svg = root.querySelector('.d-lc-svg');
  if (!svg) return;
  const data = [32, 41, 38, 52, 47, 61, 58, 72, 68, 79, 88, 96];
  const months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  const W = 320, H = 170, L = 26, R = 8, T = 18, B = 26;
  const max = 100, min = 0;
  const x = i => L + i * (W - L - R) / (data.length - 1);
  const y = v => T + (H - T - B) * (1 - (v - min) / (max - min));
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    const gy = T + (H - T - B) * g / 4;
    svg.appendChild(mk('line', { class: 'd-lc-axis', x1: L, y1: gy, x2: W - R, y2: gy }));
    const t = mk('text', { class: 'd-lc-label', x: 0, y: gy + 2.5 });
    t.textContent = String(100 - g * 25);
    svg.appendChild(t);
  }
  const d = data.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');
  svg.appendChild(mk('path', { class: 'd-lc-line', d: d }));
  months.forEach((m, i) => { if (i % 3 !== 0) return; const t = mk('text', { class: 'd-lc-label', x: x(i), y: H - 8, 'text-anchor': 'middle' }); t.textContent = m; svg.appendChild(t); });
  const cross = mk('line', { class: 'd-lc-cross', x1: 0, y1: T, x2: 0, y2: H - B });
  svg.appendChild(cross);
  const dots = data.map((v, i) => { const c = mk('circle', { class: 'd-lc-dot', cx: x(i), cy: y(v), r: 3.5 }); svg.appendChild(c); return c; });
  const val = mk('text', { class: 'd-lc-val', x: 0, y: 0 });
  svg.appendChild(val);
  const move = e => {
    const box = svg.getBoundingClientRect();
    const px = (e.clientX - box.left) / box.width * W;
    let idx = Math.round((px - L) / ((W - L - R) / (data.length - 1)));
    idx = Math.max(0, Math.min(data.length - 1, idx));
    dots.forEach((c, i) => c.classList.toggle('on', i === idx));
    cross.classList.add('on');
    cross.setAttribute('x1', x(idx)); cross.setAttribute('x2', x(idx));
    val.textContent = months[idx] + ' · ' + data[idx];
    val.setAttribute('x', Math.min(W - 60, Math.max(L, x(idx) - 22)));
    val.setAttribute('y', Math.max(12, y(data[idx]) - 8));
  };
  svg.addEventListener('pointermove', move);
  svg.addEventListener('pointerleave', () => { dots.forEach(c => c.classList.remove('on')); cross.classList.remove('on'); val.textContent = ''; });
});
