// 用法：先 <script src="blocks/row-select.js"></script>，再调用 window.INITS['row-select'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['row-select'] = (root => {
    const all = root.querySelector('[data-all3]'), rows = [...root.querySelectorAll('[data-row3]')], bar = root.querySelector('[data-rsbar]'), n = root.querySelector('[data-rsn]');
    const sync = () => {
      const picked = rows.filter((r) => r.checked).length;
      n.textContent = picked;
      bar.hidden = picked === 0;
      all.checked = picked === rows.length;
      all.indeterminate = picked > 0 && picked < rows.length;
    };
    rows.forEach((r) => r.addEventListener('change', sync));
    all.addEventListener('change', () => { rows.forEach((r) => r.checked = all.checked); sync(); });
    sync();
  });
