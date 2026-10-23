// 用法：先 <script src="blocks/enter-exit.js"></script>，再调用 window.INITS['enter-exit'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['enter-exit'] = (root => root.querySelector('[data-ee]').onclick = () => {
    const box = root.querySelector('.d-ee');
    if (box.children.length >= 4) { const last = box.lastElementChild; last.classList.add('leaving'); setTimeout(() => last.remove(), 220); return; }
    const i = document.createElement('i'); box.appendChild(i);
  });
