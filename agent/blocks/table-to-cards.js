// 用法：先 <script src="blocks/table-to-cards.js"></script>，再调用 window.INITS['table-to-cards'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-to-cards'] = (root => {
    const box = root.querySelector('[data-tc3]'), btn = root.querySelector('[data-tcnarrow3]');
    btn.onclick = () => {
      const narrow = box.classList.toggle('narrow');
      btn.textContent = narrow ? '还原表格' : '模拟窄屏';
    };
  });
