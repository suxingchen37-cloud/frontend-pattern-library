// 用法：先 <script src="blocks/svg-noise-grain.js"></script>，再调用 window.INITS['svg-noise-grain'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['svg-noise-grain'] = (root => {
    const box = root.querySelector('.d-ng'), btn = box.querySelector('.d-ng-btn');
    const turb = box.querySelector('feTurbulence');
    let fine = true;
    const apply = () => {
      turb.setAttribute('baseFrequency', fine ? '0.9' : '0.35');
      btn.textContent = fine ? '网点 细' : '网点 粗';
      btn.setAttribute('aria-pressed', String(!fine));
    };
    btn.onclick = () => { fine = !fine; apply(); };
    apply();
  });
