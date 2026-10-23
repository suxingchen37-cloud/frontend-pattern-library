// 用法：先 <script src="blocks/tooltip-follow.js"></script>，再调用 window.INITS['tooltip-follow'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['tooltip-follow'] = (root => {
    const tip = root.querySelector('.d-tip'), zone = root.querySelector('.d-tipzone');
    zone.addEventListener('pointermove', e => {
      const r = zone.getBoundingClientRect(); tip.hidden = false;
      tip.style.left = (e.clientX - r.left) + 'px'; tip.style.top = (e.clientY - r.top) + 'px';
    });
    zone.addEventListener('pointerleave', () => tip.hidden = true);
  });
