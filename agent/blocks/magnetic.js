// 用法：先 <script src="blocks/magnetic.js"></script>，再调用 window.INITS['magnetic'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['magnetic'] = (root => {
    const b = root.querySelector('.d-mag');
    root.addEventListener('pointermove', e => {
      const r = b.getBoundingClientRect();
      const dx = Math.max(-14, Math.min(14, (e.clientX - (r.left + r.width / 2)) * .18));
      const dy = Math.max(-14, Math.min(14, (e.clientY - (r.top + r.height / 2)) * .18));
      b.style.transform = `translate(${dx}px,${dy}px)`;
    });
    root.addEventListener('pointerleave', () => b.style.transform = '');
  });
