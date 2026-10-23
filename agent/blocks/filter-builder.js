// 用法：先 <script src="blocks/filter-builder.js"></script>，再调用 window.INITS['filter-builder'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['filter-builder'] = (root => {
    const rows = [...root.querySelectorAll('[data-status3]')];
    root.querySelectorAll('[data-f3]').forEach((b) => b.onclick = () => {
      root.querySelectorAll('[data-f3]').forEach((x) => x.classList.toggle('d-filter-builder-on', x === b));
      const want = b.dataset.f3;
      rows.forEach((r) => { r.hidden = want !== '全部' && r.dataset.status3 !== want; });
    });
  });
