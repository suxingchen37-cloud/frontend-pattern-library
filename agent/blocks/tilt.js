// 用法：先 <script src="blocks/tilt.js"></script>，再调用 window.INITS['tilt'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['tilt'] = (root => {
    const c = root.querySelector('.d-tilt');
    c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      c.style.transform = `perspective(600px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
    });
    c.addEventListener('pointerleave', () => c.style.transform = '');
  });
