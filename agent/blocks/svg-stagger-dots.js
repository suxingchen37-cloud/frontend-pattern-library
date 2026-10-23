// 用法：先 <script src="blocks/svg-stagger-dots.js"></script>，再调用 window.INITS['svg-stagger-dots'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['svg-stagger-dots'] = (root => {
    const box = root.querySelector('.d-sd'), btn = box.querySelector('.d-sd-btn');
    btn.onclick = () => {
      const paused = box.classList.toggle('is-paused');
      btn.textContent = paused ? '继续' : '暂停';
      btn.setAttribute('aria-pressed', String(paused));
    };
  });
