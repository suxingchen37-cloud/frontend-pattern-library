// 用法：先 <script src="blocks/accordion.js"></script>，再调用 window.INITS['accordion'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['accordion'] = (root => root.querySelector('[data-acc]')?.addEventListener('click', e => {
    const box = e.currentTarget.parentElement; box.toggleAttribute('data-open');
    e.currentTarget.textContent = box.hasAttribute('data-open') ? '收起' : '展开详情';
  }));
