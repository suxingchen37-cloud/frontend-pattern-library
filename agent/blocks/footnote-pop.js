// 用法：先 <script src="blocks/footnote-pop.js"></script>，再调用 window.INITS['footnote-pop'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['footnote-pop'] = (root => {
    const btn = root.querySelector('[data-fnref]'), pop = root.querySelector('[data-fnpop]');
    btn.onclick = () => { pop.hidden = !pop.hidden; };
  });
