// 用法：先 <script src="blocks/ratio-switch.js"></script>，再调用 window.INITS['ratio-switch'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['ratio-switch'] = (root => {
    const box = root.querySelector('[data-ratio3]'), label = root.querySelector('[data-rlabel3]');
    root.querySelectorAll('[data-r3]').forEach((b) => b.onclick = () => {
      box.style.aspectRatio = b.dataset.r3;
      label.textContent = b.textContent;
      root.querySelectorAll('[data-r3]').forEach((x) => x.classList.toggle('d-ratio-switch-on', x === b));
    });
  });
