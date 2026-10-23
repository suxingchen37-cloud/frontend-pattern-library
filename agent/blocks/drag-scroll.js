// 用法：先 <script src="blocks/drag-scroll.js"></script>，再调用 window.INITS['drag-scroll'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['drag-scroll'] = (root => {
    const el = root.querySelector('.d-drag'); let down = false, x0 = 0, l0 = 0;
    el.addEventListener('pointerdown', e => { down = true; x0 = e.clientX; l0 = el.scrollLeft; el.style.cursor = 'grabbing'; });
    el.addEventListener('pointermove', e => { if (down) el.scrollLeft = l0 - (e.clientX - x0); });
    el.addEventListener('pointerup', () => { down = false; el.style.cursor = 'grab'; });
    el.addEventListener('pointerleave', () => { down = false; el.style.cursor = 'grab'; });
  });
