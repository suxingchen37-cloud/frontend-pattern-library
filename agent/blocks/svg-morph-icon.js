// 用法：先 <script src="blocks/svg-morph-icon.js"></script>，再调用 window.INITS['svg-morph-icon'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['svg-morph-icon'] = (root => {
    const btn = root.querySelector('.d-mi-btn');
    btn.onclick = () => {
      const down = btn.classList.toggle('is-down');
      btn.setAttribute('aria-pressed', String(down));
    };
  });
