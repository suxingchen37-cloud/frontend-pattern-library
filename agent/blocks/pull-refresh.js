// 用法：先 <script src="blocks/pull-refresh.js"></script>，再调用 window.INITS['pull-refresh'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['pull-refresh'] = (root => {
    const z = root.querySelector('.d-pull'), list = z.querySelector('.d-pull-refresh-list'); let y0 = 0;
    z.addEventListener('pointerdown', e => y0 = e.clientY);
    z.addEventListener('pointermove', e => {
      if (!y0) return; const dy = Math.max(0, Math.min(50, e.clientY - y0));
      if (dy > 6) { z.setAttribute('data-pull', ''); list.style.transform = `translateY(${dy * .5}px)`; }
    });
    z.addEventListener('pointerup', () => {
      if (z.hasAttribute('data-pull')) { z.classList.add('loading'); list.textContent = '刷新中…'; setTimeout(() => { z.classList.remove('loading'); z.removeAttribute('data-pull'); list.style.transform = ''; list.textContent = '↓ 往下拖'; }, 1000); }
      y0 = 0;
    });
  });
