// 用法：先 <script src="blocks/ctxmenu.js"></script>，再调用 window.INITS['ctxmenu'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['ctxmenu'] = (root => {
    const zone = root.querySelector('.d-ctxzone'), menu = root.querySelector('.d-ctx');
    zone.oncontextmenu = e => { e.preventDefault(); const r = zone.getBoundingClientRect(); menu.hidden = false; menu.style.left = (e.clientX - r.left) + 'px'; menu.style.top = (e.clientY - r.top) + 'px'; };
    document.addEventListener('click', () => menu.hidden = true);
  });
