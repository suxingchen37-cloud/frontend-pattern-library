// 用法：先 <script src="blocks/page-404.js"></script>，再调用 window.INITS['page-404'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['page-404'] = (root => root.querySelector('[data-back3]').onclick = (e) => {
    e.target.textContent = '已回到本期（演示）';
    root.querySelector('[data-backmsg3]').textContent = '这里本该跳转，演示里只改按钮。';
  });
