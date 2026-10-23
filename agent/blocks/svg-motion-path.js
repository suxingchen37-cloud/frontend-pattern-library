// 用法：先 <script src="blocks/svg-motion-path.js"></script>，再调用 window.INITS['svg-motion-path'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['svg-motion-path'] = (root => {
    const box = root.querySelector('.d-mp'), btn = box.querySelector('.d-mp-btn');
    btn.onclick = () => {
      const paused = box.classList.toggle('is-paused');
      btn.textContent = paused ? '继续' : '暂停';
      btn.setAttribute('aria-pressed', String(paused));
    };
  });
