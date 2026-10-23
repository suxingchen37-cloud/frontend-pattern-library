// 用法：先 <script src="blocks/shortcut-sheet.js"></script>，再调用 window.INITS['shortcut-sheet'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['shortcut-sheet'] = (root => {
    const box = root.querySelector('.d-ss');
    root.querySelector('[data-ss]').onclick = () => box.hidden = !box.hidden;
    const scope = root.closest('.card') || document; scope.addEventListener('keydown', e => { if (e.key === '?') { box.hidden = !box.hidden; } });
  });
