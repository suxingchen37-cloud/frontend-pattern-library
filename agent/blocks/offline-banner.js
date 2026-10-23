// 用法：先 <script src="blocks/offline-banner.js"></script>，再调用 window.INITS['offline-banner'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['offline-banner'] = (root => {
    const banner = root.querySelector('[data-banner3]');
    root.querySelector('[data-offline3]').onclick = () => { banner.hidden = false; };
    root.querySelector('[data-online3]').onclick = () => { banner.hidden = true; };
  });
