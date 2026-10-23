// 用法：先 <script src="blocks/svg-clip-reveal.js"></script>，再调用 window.INITS['svg-clip-reveal'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['svg-clip-reveal'] = (root => {
    const box = root.querySelector('.d-cr'), art = box.querySelector('.d-cr-art'), cut = box.querySelector('.d-cr-cut'), btn = box.querySelector('.d-cr-btn');
    let corner = '100% 100%';
    const open = () => {
      cut.style.transformOrigin = corner;
      box.classList.remove('is-open');
      void art.getBoundingClientRect();
      box.classList.add('is-open');
    };
    art.onclick = e => {
      const r = art.getBoundingClientRect();
      corner = ((e.clientX - r.left) / r.width > .5 ? '100% ' : '0% ') + ((e.clientY - r.top) / r.height > .5 ? '100%' : '0%');
      open();
    };
    btn.onclick = open;
    open();
  });
