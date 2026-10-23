// 用法：先 <script src="blocks/virtual-list.js"></script>，再调用 window.INITS['virtual-list'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['virtual-list'] = (root => {
    const box = root.querySelector('[data-vl]'), spacer = root.querySelector('[data-vlspacer]'), rows = root.querySelector('[data-vlrows]');
    const total = 1000, h = 21, view = 8;
    spacer.style.height = total * h + 'px';
    const paint = () => {
      const start = Math.max(0, Math.floor(box.scrollTop / h) - 1);
      rows.style.transform = 'translateY(' + start * h + 'px)';
      rows.innerHTML = Array.from({ length: view + 2 }, (_, i) => '<div>第 ' + (start + i + 1) + ' 行 · 数据</div>').join('');
    };
    box.addEventListener('scroll', paint); paint();
  });
