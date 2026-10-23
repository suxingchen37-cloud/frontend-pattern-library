// 用法：先 <script src="blocks/autocomplete-x.js"></script>，再调用 window.INITS['autocomplete-x'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['autocomplete-x'] = (root => {
    const input = root.querySelector('[data-ac3]'), list = root.querySelector('[data-aclist]');
    const data = ['北京', '上海', '杭州', '成都', '广州', '深圳', '南京', '武汉'];
    const render = () => {
      const q = input.value.trim();
      if (!q) { list.hidden = true; return; }
      const hits = data.filter((x) => x.includes(q)).slice(0, 4);
      if (!hits.length) { list.hidden = true; return; }
      list.innerHTML = hits.map((x) => '<button type="button" data-item3="' + x + '">' + x + '</button>').join('');
      list.hidden = false;
      list.querySelectorAll('[data-item3]').forEach((b) => b.onmousedown = (e) => {
        e.preventDefault(); input.value = b.dataset.item3; list.hidden = true;
      });
    };
    input.addEventListener('input', render);
    input.addEventListener('keydown', (e) => { if (e.key === 'Escape') list.hidden = true; });
  });
