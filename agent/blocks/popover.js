// 用法：先 <script src="blocks/popover.js"></script>，再调用 window.INITS['popover'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['popover'] = (root => {
    const btn = root.querySelector('[data-pop2]'), pop = root.querySelector('.d-pop');
    btn.onclick = e => { e.stopPropagation(); pop.hidden = !pop.hidden; };
    document.addEventListener('click', () => pop.hidden = true, { once: true });
  });
