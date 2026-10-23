// 用法：先 <script src="blocks/blur-in.js"></script>，再调用 window.INITS['blur-in'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['blur-in'] = (root => root.querySelector('[data-replay]')?.addEventListener('click', () => {
    const el = root.querySelector('.d-blur-in-kf'); el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '';
  }));
