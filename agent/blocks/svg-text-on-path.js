// 用法：先 <script src="blocks/svg-text-on-path.js"></script>，再调用 window.INITS['svg-text-on-path'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['svg-text-on-path'] = (root => {
    const box = root.querySelector('.d-tp'), btn = box.querySelector('.d-tp-btn');
    btn.onclick = () => {
      const on = box.classList.toggle('is-guide');
      btn.textContent = on ? '收起参考线' : '显示参考线';
      btn.setAttribute('aria-pressed', String(on));
    };
  });
