// 用法：先 <script src="blocks/toggle-spring.js"></script>，再调用 window.INITS['toggle-spring'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['toggle-spring'] = (root => root.querySelector('.d-sw')?.addEventListener('click', e => {
    const b = e.currentTarget; b.setAttribute('aria-checked', b.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
  }));
