// 用法：先 <script src="blocks/sheet.js"></script>，再调用 window.INITS['sheet'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['sheet'] = (root => {
    const btn = root.querySelector('[data-sheet]'), wrap = root.querySelector('.d-sheetwrap');
    btn.onclick = () => wrap.hidden = false;
    wrap.querySelector('.d-sheet-scrim').onclick = () => wrap.hidden = true;
  });
