// 用法：先 <script src="blocks/col-resize.js"></script>，再调用 window.INITS['col-resize'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['col-resize'] = (root => {
    root.querySelectorAll('[data-rz]').forEach((handle) => {
      const th = handle.parentElement;
      handle.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        const x0 = e.clientX, w0 = th.offsetWidth;
        const move = (ev) => { th.style.width = Math.max(60, w0 + ev.clientX - x0) + 'px'; };
        const up = () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); };
        window.addEventListener('pointermove', move); window.addEventListener('pointerup', up);
      });
      handle.addEventListener('dblclick', () => { th.style.width = ''; });
    });
  });
