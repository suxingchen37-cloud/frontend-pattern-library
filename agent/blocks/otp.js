// 用法：先 <script src="blocks/otp.js"></script>，再调用 window.INITS['otp'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['otp'] = (root => {
    const inputs = [...root.querySelectorAll('input')];
    inputs.forEach((inp, i) => {
      inp.addEventListener('input', () => { inp.value = inp.value.replace(/\D/g, '').slice(0, 1); if (inp.value && inputs[i + 1]) inputs[i + 1].focus(); });
      inp.addEventListener('keydown', e => { if (e.key === 'Backspace' && !inp.value && inputs[i - 1]) inputs[i - 1].focus(); });
      inp.addEventListener('paste', e => { const t = (e.clipboardData?.getData('text') || '').replace(/\D/g, ''); if (t) { e.preventDefault(); inputs.forEach((x, k) => x.value = t[k] || ''); inputs[Math.min(t.length, inputs.length - 1)].focus(); } });
    });
  });
