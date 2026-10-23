// 用法：先 <script src="blocks/skeleton.js"></script>，再调用 window.INITS['skeleton'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['skeleton'] = (root => root.querySelector('[data-swap]')?.addEventListener('click', () => {
    const box = root.querySelector('.d-sk');
    box.innerHTML = '<i style="background:var(--lime);animation:none;height:14px"></i><i style="background:color-mix(in srgb,var(--ink) 20%,transparent);animation:none"></i><i style="background:color-mix(in srgb,var(--ink) 12%,transparent);animation:none"></i>';
  }));
