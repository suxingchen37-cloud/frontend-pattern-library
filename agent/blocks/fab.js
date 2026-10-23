// 用法：先 <script src="blocks/fab.js"></script>，再调用 window.INITS['fab'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['fab'] = (root => {
    const box = root.querySelector('.d-fab'), acts = box.querySelector('.d-fab-acts');
    box.querySelector('[data-fab]').onclick = () => { const open = !box.hasAttribute('data-open'); box.toggleAttribute('data-open', open); acts.hidden = !open; };
  });
