// 用法：先 <script src="blocks/column-flow.js"></script>，再调用 window.INITS['column-flow'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['column-flow'] = (root => {
    const box = root.querySelector('[data-cf3] p');
    root.querySelectorAll('[data-col3]').forEach((b) => b.onclick = () => {
      box.style.columnCount = b.dataset.col3;
      root.querySelectorAll('[data-col3]').forEach((x) => x.classList.toggle('d-column-flow-on', x === b));
    });
  });
