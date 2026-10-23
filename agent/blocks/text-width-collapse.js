// 用法：先 <script src="blocks/text-width-collapse.js"></script>，再调用 window.INITS['text-width-collapse'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['text-width-collapse'] = (root => {
  const box = root.querySelector('.d-width-collapse');
  if (!box || box.dataset.dwc) return;
  box.dataset.dwc = '1';
  const meta = box.querySelector('.d-wc-meta');
  const set = wide => {
    box.classList.toggle('is-wide', wide);
    box.setAttribute('aria-pressed', wide ? 'true' : 'false');
    meta.textContent = wide ? 'wdth 118' : 'wdth 75';
  };
  const toggle = () => set(!box.classList.contains('is-wide'));
  box._dwcT = setTimeout(() => set(true), 280);
  box.addEventListener('click', toggle);
  box.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
});
