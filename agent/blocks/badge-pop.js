// 用法：先 <script src="blocks/badge-pop.js"></script>，再调用 window.INITS['badge-pop'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['badge-pop'] = (root => root.querySelector('[data-badge2]')?.addEventListener('click', () => {
    const b = root.querySelector('.d-badge2 b'); b.textContent = String(Number(b.textContent || 0) + 1);
    b.classList.remove('on'); void b.offsetWidth; b.classList.add('on');
  }));
