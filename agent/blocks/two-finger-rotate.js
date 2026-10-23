// 用法：先 <script src="blocks/two-finger-rotate.js"></script>，再调用 window.INITS['two-finger-rotate'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['two-finger-rotate'] = (root => {
  const box = root.querySelector('.d-rot');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const card = box.querySelector('.d-rot-card');
  const num = box.querySelector('.d-rot-num');
  const hint = box.querySelector('.d-rot-hint');
  const IDLE = 'Shift + 拖 · 0° 基准';
  let rot = 0, drag = null;

  function render(v, animate) {
    rot = v;
    card.style.transition = animate ? 'transform .28s cubic-bezier(.34,1.56,.64,1)' : 'none';
    card.style.transform = 'rotate(' + v.toFixed(1) + 'deg)';
    num.textContent = Math.round(v) + '°';
    hint.textContent = Math.round(v) === 0 ? IDLE : '已转 ' + Math.round(v) + '° · 15° 一档 · Enter 归零';
  }
  function down(e) {
    if (!e.shiftKey || drag) return;
    e.preventDefault();
    card.focus({ preventScroll: true });
    const r = card.getBoundingClientRect();
    const c = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    drag = { c: c, a0: Math.atan2(e.clientY - c.y, e.clientX - c.x), r0: rot };
    card.setPointerCapture(e.pointerId);
    card.dataset.drag = '1';
    render(rot, false);
  }
  function move(e) {
    if (!drag) return;
    const a = Math.atan2(e.clientY - drag.c.y, e.clientX - drag.c.x);
    render(drag.r0 + (a - drag.a0) * 180 / Math.PI, false);
  }
  function up() {
    if (!drag) return;
    drag = null;
    delete card.dataset.drag;
    const snap = Math.round(rot / 15) * 15;
    render(Math.abs(rot - snap) < 6 ? snap : rot, true);
  }
  function key(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      render(0, true);
      return;
    }
    const d = e.key === 'ArrowLeft' ? -15 : e.key === 'ArrowRight' ? 15 : 0;
    if (!d) return;
    e.preventDefault();
    render(rot + d, true);
  }

  card.addEventListener('pointerdown', down);
  card.addEventListener('pointermove', move);
  card.addEventListener('pointerup', up);
  card.addEventListener('pointercancel', up);
  card.addEventListener('keydown', key);
  render(0, false);
});
