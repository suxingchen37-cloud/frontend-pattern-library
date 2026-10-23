// 用法：先 <script src="blocks/reveal-scroll.js"></script>，再调用 window.INITS['reveal-scroll'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['reveal-scroll'] = (root => {
    const io = new IntersectionObserver(es => es.forEach(x => x.isIntersecting && x.target.classList.add('on')), { root: root.querySelector('.d-scrollbox') });
    root.querySelectorAll('.d-rev').forEach(el => io.observe(el));
  });
