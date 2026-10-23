// 用法：先 <script src="blocks/swipe-delete.js"></script>，再调用 window.INITS['swipe-delete'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['swipe-delete'] = (root => {
    const row = root.querySelector('.d-swipe .d-swipe-delete-row'); let x0 = 0, dx = 0, open = false;
    row.addEventListener('pointerdown', e => { x0 = e.clientX; row.style.transition = 'none'; });
    row.addEventListener('pointermove', e => { if (!x0) return; dx = Math.min(0, Math.max(-70, e.clientX - x0 + (open ? -64 : 0))); row.style.transform = `translateX(${dx}px)`; });
    row.addEventListener('pointerup', () => { open = dx < -40; row.style.transition = ''; row.style.transform = `translateX(${open ? -64 : 0}px)`; x0 = 0; dx = 0; });
  });
