// 用法：先 <script src="blocks/drop-target.js"></script>，再调用 window.INITS['drop-target'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['drop-target'] = (root => {
    const col = root.querySelector('.d-drop-target-dz-col'), card = root.querySelector('.d-drop-target-dz-card');
    card.addEventListener('dragend', () => col.classList.remove('over'));
    col.addEventListener('dragover', e => { e.preventDefault(); col.classList.add('over'); });
    col.addEventListener('dragleave', () => col.classList.remove('over'));
    col.addEventListener('drop', e => { e.preventDefault(); col.classList.remove('over'); col.textContent = '已放入 1 张'; });
  });
