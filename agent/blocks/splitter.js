// 用法：先 <script src="blocks/splitter.js"></script>，再调用 window.INITS['splitter'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['splitter'] = (root => {
    const g = root.querySelector('.d-split .d-splitter-g'), l = root.querySelector('.d-split .d-splitter-l'), box = root.querySelector('.d-split');
    let down = false;
    g.addEventListener('pointerdown', () => down = true);
    window.addEventListener('pointerup', () => down = false);
    window.addEventListener('pointermove', e => {
      if (!down) return; const r = box.getBoundingClientRect();
      const pct = Math.max(18, Math.min(82, ((e.clientX - r.left) / r.width) * 100));
      l.style.width = pct + '%';
    });
    g.addEventListener('dblclick', () => l.style.width = '38%');
  });
