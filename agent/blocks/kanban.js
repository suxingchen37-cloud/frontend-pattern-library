// 用法：先 <script src="blocks/kanban.js"></script>，再调用 window.INITS['kanban'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['kanban'] = (root => {
    root.querySelectorAll('.d-kanban-kcard').forEach(c => c.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', c.textContent)));
    root.querySelectorAll('.d-kanban-col').forEach(col => {
      col.addEventListener('dragover', e => { e.preventDefault(); col.classList.add('over'); });
      col.addEventListener('dragleave', () => col.classList.remove('over'));
      col.addEventListener('drop', e => {
        e.preventDefault(); col.classList.remove('over');
        const card = document.createElement('div'); card.className = 'd-kanban-kcard'; card.draggable = true; card.textContent = e.dataTransfer.getData('text/plain');
        col.appendChild(card);
      });
    });
  });
