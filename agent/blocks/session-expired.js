// 用法：先 <script src="blocks/session-expired.js"></script>，再调用 window.INITS['session-expired'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['session-expired'] = (root => root.querySelector('[data-relogin3]').onclick = () => {
    root.querySelector('[data-secard]').hidden = true;
    root.querySelector('[data-semsg]').hidden = false;
  });
