// 用法：先 <script src="blocks/drag-reorder.js"></script>，再调用 window.INITS['drag-reorder'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['drag-reorder'] = (root => {
    const list = root.querySelector('.d-dl'); let dragging = null;
    list.querySelectorAll('div').forEach(el => {
      el.addEventListener('dragstart', () => { dragging = el; el.classList.add('dragging'); });
      el.addEventListener('dragend', () => { el.classList.remove('dragging'); dragging = null; });
      el.addEventListener('dragover', e => { e.preventDefault(); if (!dragging || dragging === el) return; const r = el.getBoundingClientRect(); list.insertBefore(dragging, (e.clientY - r.top) > r.height / 2 ? el.nextSibling : el); });
    });
  });
