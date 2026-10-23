// 用法：先 <script src="blocks/mega-menu.js"></script>，再调用 window.INITS['mega-menu'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['mega-menu'] = (root => {
    const btn = root.querySelector('[data-mm3]'), panel = root.querySelector('[data-mmpanel]');
    const close = () => { panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
    btn.onclick = () => { panel.hidden = !panel.hidden; btn.setAttribute('aria-expanded', String(!panel.hidden)); };
    root.querySelectorAll('[data-mmclose]').forEach((a) => a.onclick = (e) => { e.preventDefault(); close(); });
    root.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  });
