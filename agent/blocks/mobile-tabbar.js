// 用法：先 <script src="blocks/mobile-tabbar.js"></script>，再调用 window.INITS['mobile-tabbar'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['mobile-tabbar'] = (root => {
    const screen = root.querySelector('[data-mbscreen]');
    root.querySelectorAll('[data-mb3]').forEach((b) => b.onclick = () => {
      screen.textContent = b.dataset.mb3;
      root.querySelectorAll('[data-mb3]').forEach((x) => x.classList.toggle('d-mobile-tabbar-on', x === b));
    });
  });
