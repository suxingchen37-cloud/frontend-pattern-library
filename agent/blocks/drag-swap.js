// 用法：先 <script src="blocks/drag-swap.js"></script>，再调用 window.INITS['drag-swap'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['drag-swap'] = (root => {
  const wrap = root.querySelector('.d-swap');
  if (!wrap || wrap.dataset.ready) return;
  wrap.dataset.ready = '1';
  const cards = [].slice.call(wrap.querySelectorAll('.d-swap-card'));
  const SLOT = [24, 172];
  const Y = 26;

  function place(el, i, animate) {
    el.dataset.slot = String(i);
    el.style.transition = animate ? 'transform .28s cubic-bezier(.34,1.56,.64,1)' : 'none';
    el.style.transform = 'translate(' + SLOT[i] + 'px,' + Y + 'px)';
  }
  cards.forEach(el => place(el, Number(el.dataset.slot), false));

  const other = el => cards.filter(c => c !== el)[0];
  let drag = null;

  function down(e) {
    if (drag) return;
    const el = e.currentTarget;
    e.preventDefault();
    el.focus({ preventScroll: true });
    el.setPointerCapture(e.pointerId);
    el.dataset.drag = '1';
    el.style.transition = 'none';
    el.style.zIndex = '3';
    drag = { el: el, from: Number(el.dataset.slot), x0: e.clientX, y0: e.clientY, over: false };
  }

  function move(e) {
    if (!drag) return;
    const el = drag.el;
    const dx = e.clientX - drag.x0;
    const dy = e.clientY - drag.y0;
    el.style.transform = 'translate(' + (SLOT[drag.from] + dx) + 'px,' + (Y + dy) + 'px)';
    const o = other(el);
    const oSlot = Number(o.dataset.slot);
    const ecx = SLOT[drag.from] + el.offsetWidth / 2 + dx;
    const ocx = SLOT[oSlot] + o.offsetWidth / 2;
    const over = Math.abs(ecx - ocx) < 58;
    if (over === drag.over) return;
    drag.over = over;
    if (over) o.dataset.yield = '1'; else delete o.dataset.yield;
    o.style.transition = 'transform .18s cubic-bezier(.34,1.56,.64,1)';
    // 让位 22px = 间隙的一半，再多目标卡就被推出画框
    o.style.transform = 'translate(' + (SLOT[oSlot] + (over ? (drag.from === 0 ? 22 : -22) : 0)) + 'px,' + Y + 'px)';
  }

  function up() {
    if (!drag) return;
    const el = drag.el;
    const from = drag.from;
    const o = other(el);
    const over = drag.over;
    drag = null;
    delete el.dataset.drag;
    delete o.dataset.yield;
    el.style.zIndex = '2';
    if (over) {
      place(el, from === 0 ? 1 : 0, true);
      place(o, from, true);
    } else {
      place(el, from, true);
      place(o, Number(o.dataset.slot), true);
    }
  }

  function key(e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    const el = e.currentTarget;
    const o = other(el);
    const from = Number(el.dataset.slot);
    delete o.dataset.yield;
    place(o, from, true);
    place(el, from === 0 ? 1 : 0, true);
  }

  cards.forEach(el => {
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('keydown', key);
  });
});
