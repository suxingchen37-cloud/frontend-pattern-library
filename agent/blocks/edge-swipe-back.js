// 用法：先 <script src="blocks/edge-swipe-back.js"></script>，再调用 window.INITS['edge-swipe-back'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['edge-swipe-back'] = (root => {
  const box = root.querySelector('.d-back');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const page = box.querySelector('.d-back-page');
  const edge = box.querySelector('.d-back-edge');
  const fill = box.querySelector('.d-back-fill');
  const under = box.querySelector('.d-back-under');
  const hint = box.querySelector('.d-back-hint');
  const W = 260;
  const IDLE = '过 30% 才提交 · 30% 处有刻度';
  let x = 0, drag = null;

  function draw() {
    page.style.transform = 'translateX(' + x.toFixed(1) + 'px)';
    fill.style.width = Math.min(100, (x / W) * 100).toFixed(1) + '%';
  }
  function commit() {
    page.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
    x = W;
    draw();
    under.textContent = '已返回';
    hint.textContent = '已返回上一页 · 260px 一次走完';
    clearTimeout(box._t);
    box._t = setTimeout(() => {
      page.style.transition = 'none';
      x = 0;
      draw();
      under.textContent = '← 上一页';
      hint.textContent = IDLE;
    }, 280);
  }
  function reset() {
    page.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
    x = 0;
    draw();
    hint.textContent = IDLE;
  }
  function down(e) {
    if (drag) return;
    e.preventDefault();
    edge.focus({ preventScroll: true });
    edge.setPointerCapture(e.pointerId);
    page.style.transition = 'none';
    drag = { x0: e.clientX };
    x = 0;
    draw();
  }
  function move(e) {
    if (!drag) return;
    let dx = e.clientX - drag.x0;
    if (dx < 0) dx = dx * .2;
    x = Math.min(W, dx);
    draw();
    hint.textContent = x / W >= .3 ? '过 30% · 松手就返回' : '还差 ' + Math.round((.3 - x / W) * 100) + '% 才提交';
  }
  function up() {
    if (!drag) return;
    drag = null;
    if (x / W >= .3) commit(); else reset();
  }
  function key(e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); commit(); }
    else if (e.key === 'ArrowLeft' || e.key === 'Escape') { e.preventDefault(); reset(); }
  }

  edge.addEventListener('pointerdown', down);
  edge.addEventListener('pointermove', move);
  edge.addEventListener('pointerup', up);
  edge.addEventListener('pointercancel', up);
  edge.addEventListener('keydown', key);
  draw();
});
