// 用法：先 <script src="blocks/heatmap-calendar.js"></script>，再调用 window.INITS['heatmap-calendar'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['heatmap-calendar'] = (root => {
  const svg = root.querySelector('.d-hc-svg');
  if (!svg) return;
  const weeks = 20, days = 7, cell = 14, gap = 2;
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  const shades = ['color-mix(in srgb,var(--ink) 6%,var(--paper))', 'color-mix(in srgb,var(--ink) 18%,var(--paper))', 'color-mix(in srgb,var(--ink) 34%,var(--paper))', 'color-mix(in srgb,var(--ink) 58%,var(--paper))', 'var(--ink)'];
  let seed = 11;
  const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  const days7 = ['一', '三', '五', '日'];
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      const r = rnd();
      const v = d === 5 || d === 6 ? (r > .55 ? 1 : 0) : r > .82 ? 4 : r > .62 ? 3 : r > .38 ? 2 : r > .16 ? 1 : 0;
      const rect = mk('rect', { class: 'd-hc-cell', x: 22 + w * (cell + gap), y: 6 + d * (cell + gap), width: cell, height: cell, rx: 2, fill: shades[v] });
      svg.appendChild(rect);
    }
  }
  days7.forEach((label, k) => {
    const t = mk('text', { class: 'd-hc-t', x: 16, y: 6 + k * 4 * (cell + gap) + cell - 3, 'text-anchor': 'end', fill: 'var(--faint)', 'font-size': '7', 'font-family': 'var(--font-mono)' });
    t.textContent = label;
    svg.appendChild(t);
  });
});
