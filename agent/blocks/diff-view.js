// 用法：先 <script src="blocks/diff-view.js"></script>，再调用 window.INITS['diff-view'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['diff-view'] = (root => root.querySelector('[data-fold]').onclick = e => {
    const more = root.querySelector('.d-diff-view-more'); more.hidden = !more.hidden;
    e.target.textContent = more.hidden ? '展开其余 8 行' : '收起';
  });
