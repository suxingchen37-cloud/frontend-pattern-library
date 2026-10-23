// 用法：先 <script src="blocks/sidenote-x.js"></script>，再调用 window.INITS['sidenote-x'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['sidenote-x'] = (root => {
    const btn = root.querySelector('[data-sn3]'), box = root.querySelector('[data-snbox]');
    btn.onclick = () => { box.hidden = !box.hidden; };
  });
