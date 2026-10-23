// 用法：先 <script src="blocks/undo-snackbar.js"></script>，再调用 window.INITS['undo-snackbar'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['undo-snackbar'] = (root => {
    const row = root.querySelector('[data-usrow]'), snack = root.querySelector('[data-ussnack]');
    let timer = null;
    root.querySelector('[data-del3]').onclick = () => {
      row.style.display = 'none'; snack.hidden = false;
      clearTimeout(timer); timer = setTimeout(() => { snack.hidden = true; }, 5000);
    };
    root.querySelector('[data-undo3]').onclick = () => {
      row.style.display = ''; snack.hidden = true; clearTimeout(timer);
    };
  });
