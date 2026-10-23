// 用法：先 <script src="blocks/theme-crossfade.js"></script>，再调用 window.INITS['theme-crossfade'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['theme-crossfade'] = (root => root.querySelector('[data-theme-fade]').onclick = () => {
    const go = () => document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme') === 'night' ? 'paper' : 'night');
    document.startViewTransition ? document.startViewTransition(go) : go();
  });
