// 用法：先 <script src="blocks/shared-element.js"></script>，再调用 window.INITS['shared-element'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['shared-element'] = (root => {
    const box = root.querySelector('.d-se'), list = box.querySelector('.d-shared-element-se-list'), det = box.querySelector('.d-shared-element-se-detail');
    const go = () => { list.hidden = !list.hidden; det.hidden = !det.hidden; };
    box.querySelector('[data-se]').onclick = () => document.startViewTransition ? document.startViewTransition(go) : go();
    box.querySelector('[data-seback]').onclick = () => document.startViewTransition ? document.startViewTransition(go) : go();
  });
