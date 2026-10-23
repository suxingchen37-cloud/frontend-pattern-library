// 用法：先 <script src="blocks/contrast-toggle.js"></script>，再调用 window.INITS['contrast-toggle'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['contrast-toggle'] = (root => {
  const box = root.querySelector('.d-ct');
  if (!box || box.dataset.ct) return;
  box.dataset.ct = '1';
  const sw = box.querySelector('.d-ct-sw');
  const state = box.querySelector('.d-ct-state');
  const paint = on => {
    box.classList.toggle('is-hc', on);
    sw.classList.toggle('is-on', on);
    sw.setAttribute('aria-checked', String(on));
    state.textContent = on ? 'STATE · 高对比' : 'STATE · 正常';
  };
  sw.addEventListener('click', () => paint(sw.getAttribute('aria-checked') !== 'true'));
  paint(false);
});
