// 用法：先 <script src="blocks/strength.js"></script>，再调用 window.INITS['strength'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['strength'] = (root => {
    const inp = root.querySelector('.d-pw'), bars = [...root.querySelectorAll('.d-bars3 i')], hint = root.querySelector('[data-hint]');
    inp.addEventListener('input', () => {
      const v = inp.value; let s = 0;
      if (v.length >= 8) s++; if (/[A-Z]/.test(v) && /[a-z]/.test(v)) s++; if (/\d/.test(v) || /[^\w]/.test(v)) s++;
      const tones = ['#c4553a', '#d6a94a', '#5c8a3a'];
      bars.forEach((b, i) => b.style.background = i < s ? tones[s - 1] : 'color-mix(in srgb,var(--ink) 12%,transparent)');
      hint.textContent = v ? ['太弱', '一般', '够用', '很强'][s] || '很强' : '';
    });
  });
