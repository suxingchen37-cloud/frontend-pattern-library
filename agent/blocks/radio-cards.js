// 用法：先 <script src="blocks/radio-cards.js"></script>，再调用 window.INITS['radio-cards'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['radio-cards'] = (root => {
    const opts = [...root.querySelectorAll('[data-rc3]')];
    const pick = (el) => opts.forEach((o) => o.setAttribute('aria-checked', String(o === el)));
    opts.forEach((o) => {
      o.onclick = () => pick(o);
      o.addEventListener('keydown', (e) => {
        if (!['ArrowDown', 'ArrowUp'].includes(e.key)) return;
        e.preventDefault();
        const i = opts.indexOf(o);
        const next = opts[(i + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length];
        pick(next); next.focus();
      });
    });
  });
