// 用法：先 <script src="blocks/pinch-map.js"></script>，再调用 window.INITS['pinch-map'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['pinch-map'] = (root => {
  const box = root.querySelector('[data-map]');
  const layer = root.querySelector('[data-layer]');
  const label = layer && layer.querySelector('[data-scale]');
  if (!box || !layer) return;
  let scale = 1, x = 0, y = 0;
  const pts = new Map();
  let pinch = null, pan = null;
  const clamp = () => {
    const minX = box.clientWidth * (1 - scale), minY = box.clientHeight * (1 - scale);
    x = Math.max(minX, Math.min(0, x));
    y = Math.max(minY, Math.min(0, y));
    layer.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) scale(' + scale.toFixed(3) + ')';
    if (label) label.textContent = scale.toFixed(1) + '×';
  };
  const zoomAt = (cx, cy, factor) => {
    const next = Math.max(1, Math.min(3, scale * factor));
    const k = next / scale;
    x = cx - (cx - x) * k;
    y = cy - (cy - y) * k;
    scale = next;
  };
  const span = () => {
    const v = [...pts.values()];
    return { d: Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y), cx: (v[0].x + v[1].x) / 2, cy: (v[0].y + v[1].y) / 2 };
  };
  box.addEventListener('pointerdown', e => {
    box.setPointerCapture(e.pointerId);
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 2) {
      const s = span(), r = box.getBoundingClientRect();
      pinch = { d: s.d, cx: s.cx - r.left, cy: s.cy - r.top };
    } else if (pts.size === 1) {
      pan = { x: e.clientX, y: e.clientY, px: x, py: y };
    }
  });
  box.addEventListener('pointermove', e => {
    if (!pts.has(e.pointerId)) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 2 && pinch) {
      const s = span(), r = box.getBoundingClientRect();
      const factor = s.d / Math.max(1, pinch.d);
      zoomAt(s.cx - r.left, s.cy - r.top, factor);
      x += (s.cx - r.left) - pinch.cx;
      y += (s.cy - r.top) - pinch.cy;
      pinch = { d: s.d, cx: s.cx - r.left, cy: s.cy - r.top };
      clamp();
    } else if (pan && scale > 1) {
      x = pan.px + (e.clientX - pan.x);
      y = pan.py + (e.clientY - pan.y);
      clamp();
    }
  });
  const release = e => {
    pts.delete(e.pointerId);
    if (pts.size < 2) pinch = null;
    if (pts.size === 0) pan = null;
    else if (pts.size === 1) { const p = [...pts.values()][0]; pan = { x: p.x, y: p.y, px: x, py: y }; }
  };
  box.addEventListener('pointerup', release);
  box.addEventListener('pointercancel', release);
  box.addEventListener('wheel', e => {
    if (!e.ctrlKey) return;
    e.preventDefault();
    const r = box.getBoundingClientRect();
    zoomAt(e.clientX - r.left, e.clientY - r.top, e.deltaY < 0 ? 1.15 : 0.87);
    clamp();
  }, { passive: false });
  box.addEventListener('dblclick', e => {
    const r = box.getBoundingClientRect();
    if (scale > 1.5) { scale = 1; x = 0; y = 0; clamp(); }
    else { zoomAt(e.clientX - r.left, e.clientY - r.top, 2); clamp(); }
  });
  clamp();
});
