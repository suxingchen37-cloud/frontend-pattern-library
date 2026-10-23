// 用法：先 <script src="blocks/waterfall.js"></script>，再调用 window.INITS['waterfall'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['waterfall'] = (root => {
  const svg = root.querySelector('.d-wf-svg');
  if (!svg) return;
  const steps = [['期初', 120, 'total'], ['新增', 38, 'up'], ['流失', -27, 'down'], ['退款', -12, 'down'], ['期末', 119, 'total']];
  const W = 320, H = 170, L = 24, R = 8, T = 16, B = 28;
  const plotW = W - L - R, plotH = H - T - B;
  const max = 160, slot = plotW / steps.length, bw = 26;
  const y = v => T + plotH * (1 - v / max);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    const gy = T + plotH * g / 4;
    svg.appendChild(mk('line', { class: 'd-wf-axis', x1: L, y1: gy, x2: W - R, y2: gy }));
    const t = mk('text', { class: 'd-wf-label', x: 0, y: gy + 2.5 });
    t.textContent = String(max - g * 40);
    svg.appendChild(t);
  }
  let run = 0, prevTop = null;
  steps.forEach((s, i) => {
    const [name, val, kind] = s;
    const cx = L + slot * i + slot / 2;
    let from, to;
    if (kind === 'total') { from = 0; to = val; run = val; }
    else { from = run; to = run + val; run = to; }
    const y0 = y(from), y1 = y(to);
    const top = Math.min(y0, y1), h = Math.max(2, Math.abs(y1 - y0));
    svg.appendChild(mk('rect', { class: 'd-wf-bar ' + (kind === 'up' ? 'd-wf-up' : kind === 'down' ? 'd-wf-down' : ''), x: (cx - bw / 2).toFixed(1), y: top.toFixed(1), width: bw, height: h.toFixed(1) }));
    if (prevTop !== null) svg.appendChild(mk('line', { class: 'd-wf-link', x1: cx - slot / 2 - bw / 2, y1: prevTop.toFixed(1), x2: cx - bw / 2, y2: prevTop.toFixed(1) }));
    prevTop = kind === 'total' ? y(to) : y(to);
    const t = mk('text', { class: 'd-wf-label', x: cx, y: H - 10, 'text-anchor': 'middle' });
    t.textContent = name;
    svg.appendChild(t);
    const v = mk('text', { class: 'd-wf-val', x: cx, y: top - 4, 'text-anchor': 'middle' });
    v.textContent = kind === 'total' ? String(val) : (val > 0 ? '+' + val : String(val));
    svg.appendChild(v);
  });
});
