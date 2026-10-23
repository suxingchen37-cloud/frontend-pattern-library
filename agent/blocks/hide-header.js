// 用法：先 <script src="blocks/hide-header.js"></script>，再调用 window.INITS['hide-header'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['hide-header'] = (root => {
    const bar = root.querySelector('[data-hhbar]'), box = root.querySelector('[data-hhscroll]');
    let last = 0;
    box.addEventListener('scroll', () => {
      const y = box.scrollTop;
      if (y > last + 2) bar.classList.add('up');
      else if (y < last - 2) bar.classList.remove('up');
      last = y;
    });
  });
