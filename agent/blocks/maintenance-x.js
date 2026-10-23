// 用法：先 <script src="blocks/maintenance-x.js"></script>，再调用 window.INITS['maintenance-x'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['maintenance-x'] = (root => {
    const sec = root.querySelector('[data-mtsec]'), prog = root.querySelector('[data-mtprog]'), btn = root.querySelector('[data-mtskip]');
    let left = 10;
    const paint = () => {
      sec.textContent = left;
      prog.style.width = ((10 - left) * 10) + '%';
      if (left === 0) { root.querySelector('b').textContent = '已恢复'; root.querySelector('p').textContent = '可以继续了。'; btn.disabled = true; }
    };
    const timer = setInterval(() => { left = Math.max(0, left - 1); paint(); if (!left) clearInterval(timer); }, 1000);
    btn.onclick = () => { left = 0; paint(); clearInterval(timer); };
    paint();
  });
