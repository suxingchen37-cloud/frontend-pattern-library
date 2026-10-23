// 用法：先 <script src="blocks/isometric-stack.js"></script>，再调用 window.INITS['isometric-stack'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['isometric-stack'] = (root => {
  const stage = root.querySelector('.d-iso-stage');
  const btn = stage && stage.querySelector('.d-iso-btn');
  if (!stage || !btn) return;
  btn.onclick = () => {
    const on = stage.classList.toggle('d-iso-open');
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.textContent = on ? '合上图层' : '抽出图层';
  };
});
