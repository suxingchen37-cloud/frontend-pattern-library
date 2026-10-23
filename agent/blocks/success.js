// 用法：先 <script src="blocks/success.js"></script>，再调用 window.INITS['success'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['success'] = (root => {
    root.querySelector('[data-win]').onclick = () => {
      const box = root.querySelector('.d-win'); box.hidden = false;
      const svg = box.querySelector('svg'); svg.style.animation = 'none'; void svg.offsetWidth;
      svg.querySelector('path').style.animation = 'none'; void svg.offsetWidth; svg.querySelector('path').style.animation = '';
      setTimeout(() => box.hidden = true, 1200);
    };
  });
