// 用法：先 <script src="blocks/pinch-zoom-tile.js"></script>，再调用 window.INITS['pinch-zoom-tile'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['pinch-zoom-tile'] = (root => {
  const box = root.querySelector('.d-zoom');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const frame = box.querySelector('.d-zoom-frame');
  const tile = box.querySelector('.d-zoom-tile');
  const num = box.querySelector('.d-zoom-num');
  const hint = box.querySelector('.d-zoom-hint');
  const MIN = 1, MAX = 2.4;
  const IDLE = '1.00–2.40 之间 · 越界按 0.25 折算';
  let scale = 1, settleT = 0, pinch = null;
  const ptrs = new Map();

  function shown(s) {
    if (s > MAX) return MAX + (s - MAX) * .25;
    if (s < MIN) return MIN - (MIN - s) * .25;
    return s;
  }
  function render(s) {
    scale = s;
    const v = shown(s);
    tile.style.transform = 'scale(' + v.toFixed(3) + ')';
    num.textContent = v.toFixed(2) + '×';
    if (s > MAX || s < MIN) box.dataset.edge = s > MAX ? 'max' : 'min';
    else delete box.dataset.edge;
  }
  function settle() {
    clearTimeout(settleT);
    settleT = 0;
    tile.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
    render(Math.max(MIN, Math.min(MAX, scale)));
    hint.textContent = IDLE;
  }
  function later() {
    clearTimeout(settleT);
    settleT = setTimeout(settle, 180);
  }
  function wheel(e) {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    tile.style.transition = 'none';
    render(scale * Math.exp(-e.deltaY * .0022));
    hint.textContent = '缩放中 · ' + shown(scale).toFixed(2) + '×';
    later();
  }
  function pdown(e) {
    tile.setPointerCapture(e.pointerId);
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    tile.style.transition = 'none';
    if (ptrs.size === 2) {
      const a = Array.from(ptrs.values());
      pinch = { d: Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y), s: scale };
      hint.textContent = '双指张开或收拢';
    }
  }
  function pmove(e) {
    if (!ptrs.has(e.pointerId)) return;
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (!pinch || ptrs.size !== 2) return;
    const a = Array.from(ptrs.values());
    const d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y);
    if (pinch.d > 8) render(pinch.s * (d / pinch.d));
  }
  function pup(e) {
    ptrs.delete(e.pointerId);
    if (ptrs.size < 2) pinch = null;
    if (ptrs.size === 0) settle();
  }
  function key(e) {
    if (e.key === '0') {
      e.preventDefault();
      tile.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
      render(1);
      hint.textContent = IDLE;
      return;
    }
    const step = e.key === 'ArrowUp' || e.key === '+' || e.key === '=' ? .2 : e.key === 'ArrowDown' || e.key === '-' ? -.2 : 0;
    if (!step) return;
    e.preventDefault();
    tile.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
    render(Math.max(MIN, Math.min(MAX, scale + step)));
    hint.textContent = '方向键每档 0.20× · 0 复位';
  }

  frame.addEventListener('wheel', wheel, { passive: false });
  tile.addEventListener('pointerdown', pdown);
  tile.addEventListener('pointermove', pmove);
  tile.addEventListener('pointerup', pup);
  tile.addEventListener('pointercancel', pup);
  tile.addEventListener('keydown', key);
  render(1);
});
