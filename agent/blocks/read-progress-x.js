// 用法：先 <script src="blocks/read-progress-x.js"></script>，再调用 window.INITS['read-progress-x'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['read-progress-x'] = (root => {
    const box = root.querySelector('[data-rpscroll]'), bar = root.querySelector('[data-rpi]');
    box.addEventListener('scroll', () => {
      const pct = box.scrollTop / Math.max(1, box.scrollHeight - box.clientHeight);
      bar.style.width = Math.min(100, pct * 100) + '%';
    });
  });
