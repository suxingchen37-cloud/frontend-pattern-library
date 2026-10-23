// 用法：先 <script src="blocks/hotspots.js"></script>，再调用 window.INITS['hotspots'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['hotspots'] = (root => {
    const tip = root.querySelector('[data-hottip]');
    root.querySelectorAll('[data-hot3]').forEach((b) => b.onclick = () => {
      const same = !tip.hidden && tip.dataset.owner === b.dataset.hot3;
      tip.hidden = same;
      tip.dataset.owner = b.dataset.hot3;
      tip.textContent = b.dataset.hot3;
    });
  });
