// 用法：先 <script src="blocks/skip-target.js"></script>，再调用 window.INITS['skip-target'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['skip-target'] = (root => {
    const link = root.querySelector('[data-skip3]'), target = root.querySelector('[data-target3]');
    link.onclick = (e) => {
      e.preventDefault();
      target.focus();
      target.classList.add('flash');
      setTimeout(() => target.classList.remove('flash'), 900);
    };
  });
