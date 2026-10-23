// 用法：先 <script src="blocks/inertia.js"></script>，再调用 window.INITS['inertia'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['inertia'] = (root => {
    const box = root.querySelector('.d-inert'), track = box.querySelector('.d-inertia-track');
    let x = 0, v = 0, x0 = 0, down = false, raf = null;
    const max = () => Math.min(0, box.clientWidth - track.scrollWidth);
    const apply = () => { track.style.transform = `translateX(${x}px)`; };
    box.addEventListener('pointerdown', e => { down = true; x0 = e.clientX; v = 0; cancelAnimationFrame(raf); });
    box.addEventListener('pointermove', e => { if (!down) return; const nx = Math.max(max(), Math.min(0, x + (e.clientX - x0))); v = nx - x; x = nx; x0 = e.clientX; apply(); });
    box.addEventListener('pointerup', () => {
      down = false;
      const glide = () => { v *= .94; x = Math.max(max(), Math.min(0, x + v)); apply(); if (Math.abs(v) > .4) raf = requestAnimationFrame(glide); };
      glide();
    });
  });
