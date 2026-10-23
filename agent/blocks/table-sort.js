// 用法：先 <script src="blocks/table-sort.js"></script>，再调用 window.INITS['table-sort'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-sort'] = (root => {
    const tbody = root.querySelector('tbody');
    root.querySelectorAll('[data-sort3]').forEach((th) => th.onclick = () => {
      const col = Number(th.dataset.sort3);
      const rows = [...tbody.rows];
      const asc = th.dataset.asc !== '1';
      th.dataset.asc = asc ? '1' : '0';
      rows.sort((a, b) => {
        const x = a.cells[col].textContent.trim(), y = b.cells[col].textContent.trim();
        const nx = Number(x), ny = Number(y);
        const cmp = !isNaN(nx) && !isNaN(ny) ? nx - ny : x.localeCompare(y, 'zh');
        return asc ? cmp : -cmp;
      });
      rows.forEach((r) => tbody.appendChild(r));
      root.querySelectorAll('[data-sort3] span').forEach((s) => s.textContent = '↕');
      th.querySelector('span').textContent = asc ? '↑' : '↓';
    });
  });
