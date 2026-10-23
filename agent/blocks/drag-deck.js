// 用法：先 <script src="blocks/drag-deck.js"></script>，再调用 window.INITS['drag-deck'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['drag-deck'] = (root => {
  const deck = root.querySelector('.d-deck');
  if (!deck || deck.dataset.ready) return;
  deck.dataset.ready = '1';
  const cards = [].slice.call(deck.querySelectorAll('.d-deck-card'));
  const hint = deck.querySelector('.d-deck-hint');
  const IDLE = '甩出速度 > 0.5px/ms 直接飞走';

  // 从上到下的顺序，order[0] 才是可拖的那张
  const order = cards.slice().sort((a, b) => Number(a.dataset.depth) - Number(b.dataset.depth));

  // 每深一层：下移 7px、缩 4.5%、再带一点固定斜角，才像一叠纸
  const base = i => 'translateY(' + i * 7 + 'px) rotate(' + (i === 1 ? -1.4 : i === 2 ? 1.8 : 0) + 'deg) scale(' + (1 - i * .045) + ')';

  function paint(animate) {
    order.forEach((el, i) => {
      el.dataset.depth = String(i);
      el.style.zIndex = String(10 - i);
      el.style.transition = animate ? 'transform .28s cubic-bezier(.34,1.56,.64,1)' : 'none';
      el.style.transform = base(i);
    });
  }

  let drag = null;

  function down(e) {
    const el = e.currentTarget;
    if (el !== order[0]) return;
    e.preventDefault();
    el.focus({ preventScroll: true });
    el.setPointerCapture(e.pointerId);
    el.dataset.drag = '1';
    el.style.transition = 'none';
    drag = { el: el, x0: e.clientX, y0: e.clientY, x: e.clientX, dx: 0, v: 0, t: performance.now() };
  }

  function move(e) {
    if (!drag) return;
    const now = performance.now();
    const dt = now - drag.t;
    if (dt > 0) drag.v = drag.v * .6 + ((e.clientX - drag.x) / dt) * .4;
    drag.x = e.clientX;
    drag.t = now;
    drag.dx = e.clientX - drag.x0;
    const dy = e.clientY - drag.y0;
    const rot = Math.max(-14, Math.min(14, drag.dx * .06));
    drag.el.style.transform = 'translate(' + drag.dx + 'px,' + Math.max(-8, Math.min(8, dy * .22)) + 'px) rotate(' + rot + 'deg)';
    hint.textContent = Math.abs(drag.v) > .5 ? '松手 → 飞走' : '松手 → 回弹';
  }

  function release(dir) {
    const d = drag;
    drag = null;
    if (!d) return;
    const el = d.el;
    delete el.dataset.drag;
    const fly = dir || (Math.abs(d.dx) > 78 || Math.abs(d.v) > .5 ? (d.dx || d.v) > 0 ? 1 : -1 : 0);
    if (!fly) {
      el.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
      el.style.transform = base(0);
      hint.textContent = IDLE;
      return;
    }
    el.style.transition = 'transform .18s cubic-bezier(.34,1.56,.64,1)';
    el.style.transform = 'translate(' + fly * 340 + 'px,0px) rotate(' + fly * 16 + 'deg)';
    hint.textContent = fly > 0 ? '飞走 → 下一张' : '← 飞走 · 下一张';
    setTimeout(() => {
      order.push(order.shift());
      el.style.transition = 'none';
      el.style.transform = base(2);
      order.forEach((c, i) => {
        c.dataset.depth = String(i);
        c.style.zIndex = String(10 - i);
        if (c !== el) {
          c.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
          c.style.transform = base(i);
        }
      });
      hint.textContent = IDLE;
    }, 180);
  }

  function key(e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    if (drag) return;
    drag = { el: order[0], x0: 0, y0: 0, x: 0, dx: 0, v: 0, t: performance.now() };
    release(e.key === 'ArrowRight' ? 1 : -1);
  }

  cards.forEach(el => {
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', () => release(0));
    el.addEventListener('pointercancel', () => release(0));
    el.addEventListener('keydown', key);
  });
  paint(false);
});
