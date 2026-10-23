// 用法：先 <script src="blocks/dropdown.js"></script>，再调用 window.INITS['dropdown'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['dropdown'] = (root => {
    const btn = root.querySelector('[data-menu]'), menu = root.querySelector('.d-menu');
    btn.onclick = e => { e.stopPropagation(); menu.hidden = !menu.hidden; };
    document.addEventListener('click', () => menu.hidden = true, { once: true });
  });
