// 用法：先 <script src="blocks/pop-spring.js"></script>，再调用 window.INITS['pop-spring'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['pop-spring'] = (root => root.querySelector('[data-pop]')?.addEventListener('click', () => {
    const b = root.querySelector('[data-badge]'); b.hidden = false; b.classList.remove('on'); void b.offsetWidth; b.classList.add('on');
    setTimeout(() => { b.hidden = true; }, 1600);
  }));
