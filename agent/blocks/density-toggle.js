// 用法：先 <script src="blocks/density-toggle.js"></script>，再调用 window.INITS['density-toggle'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['density-toggle'] = (root => {
    const table = root.querySelector('[data-dentable]');
    root.querySelectorAll('[data-dens3]').forEach((b) => b.onclick = () => {
      table.classList.toggle('compact', b.dataset.dens3 === 'compact');
      root.querySelectorAll('[data-dens3]').forEach((x) => x.classList.toggle('d-density-toggle-on', x === b));
    });
  });
