// 用法：先 <script src="blocks/parallax.js"></script>，再调用 window.INITS['parallax'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['parallax'] = (root => {
    const z = root.querySelector('.d-par');
    z.addEventListener('pointermove', e => {
      const r = z.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5;
      z.querySelector('.d-parallax-l1').style.transform = `translateX(${x * 6}px)`;
      z.querySelector('.d-parallax-l2').style.transform = `translateX(${x * 14}px)`;
      z.querySelector('.d-parallax-l3').style.transform = `translateX(${x * 24}px)`;
    });
  });
