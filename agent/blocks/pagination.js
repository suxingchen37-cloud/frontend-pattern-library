// 用法：先 <script src="blocks/pagination.js"></script>，再调用 window.INITS['pagination'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['pagination'] = (root => {
    const btns = [...root.querySelectorAll('.d-page button')];
    btns.forEach(b => b.onclick = () => { if (/^\d+$/.test(b.textContent)) { btns.forEach(x => x.classList.toggle('d-pagination-on', x === b)); } });
  });
