// 用法：先 <script src="blocks/overscroll-bounce.js"></script>，再调用 window.INITS['overscroll-bounce'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['overscroll-bounce'] = (root => {
  const box = root.querySelector('.d-over');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const view = box.querySelector('.d-over-view');
  const list = box.querySelector('.d-over-list');
  const thumb = box.querySelector('.d-over-thumb');
  const hint = box.querySelector('.d-over-hint');
  const IDLE = '端点后每 1px 折成 0.3px';
  const LIMIT = 40;
  let max = 0, scroll = 0, stretch = 0, thumbH = 16, drag = null, settleT = 0;

  function measure() {
    max = Math.max(0, list.offsetHeight - view.clientHeight);
    const h = view.clientHeight;
    thumbH = Math.max(16, h * (h / Math.max(list.offsetHeight, 1)));
    thumb.style.height = thumbH.toFixed(1) + 'px';
  }
  function apply(raw, animate) {
    let s = raw, ex = 0;
    if (raw < 0) { s = 0; ex = raw * .3; }
    else if (raw > max) { s = max; ex = (raw - max) * .3; }
    ex = Math.max(-LIMIT, Math.min(LIMIT, ex));
    scroll = s; stretch = ex;
    list.style.transition = animate ? 'transform .28s cubic-bezier(.34,1.56,.64,1)' : 'none';
    list.style.transform = 'translateY(' + (-s - ex).toFixed(2) + 'px)';
    const top = max ? (s / max) * (view.clientHeight - thumbH) : 0;
    thumb.style.transform = 'translateY(' + top.toFixed(1) + 'px)';
    if (ex !== 0) {
      view.dataset.end = raw < 0 ? 't' : 'b';
      hint.textContent = '端点 · 拉伸 ' + Math.round(Math.abs(ex)) + 'px';
    } else {
      delete view.dataset.end;
      hint.textContent = IDLE;
    }
  }
  function down(e) {
    if (drag) return;
    e.preventDefault();
    view.focus({ preventScroll: true });
    view.setPointerCapture(e.pointerId);
    list.style.transition = 'none';
    view.dataset.drag = '1';
    drag = { y0: e.clientY, s0: scroll };
  }
  function move(e) {
    if (!drag) return;
    apply(drag.s0 - (e.clientY - drag.y0), false);
  }
  function up() {
    if (!drag) return;
    drag = null;
    delete view.dataset.drag;
    apply(scroll, true);
  }
  function wheel(e) {
    e.preventDefault();
    list.style.transition = 'none';
    apply(scroll + e.deltaY, false);
    clearTimeout(settleT);
    settleT = setTimeout(() => apply(scroll, true), 180);
  }
  function key(e) {
    const d = e.key === 'ArrowDown' ? 28 : e.key === 'ArrowUp' ? -28 : 0;
    if (!d) return;
    e.preventDefault();
    const atEnd = (d > 0 && scroll >= max) || (d < 0 && scroll <= 0);
    apply(atEnd ? scroll + d * 2 : scroll + d, true);
    if (atEnd) {
      clearTimeout(settleT);
      settleT = setTimeout(() => apply(scroll, true), 280);
    }
  }

  view.addEventListener('wheel', wheel, { passive: false });
  view.addEventListener('pointerdown', down);
  view.addEventListener('pointermove', move);
  view.addEventListener('pointerup', up);
  view.addEventListener('pointercancel', up);
  view.addEventListener('keydown', key);
  measure();
  apply(0, false);
});
