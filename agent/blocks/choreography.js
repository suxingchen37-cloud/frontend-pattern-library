// 用法：先 <script src="blocks/choreography.js"></script>，再调用 window.INITS['choreography'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['choreography'] = (root => {
    root.querySelector('[data-chor]').onclick = () => {
      const p = root.querySelector('.d-chor'); p.hidden = !p.hidden;
      if (!p.hidden) p.querySelectorAll('b,p,button').forEach(el => { el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; });
    };
  });
