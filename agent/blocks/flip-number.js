// 用法：先 <script src="blocks/flip-number.js"></script>，再调用 window.INITS['flip-number'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['flip-number'] = (root => {
    const digits = [...root.querySelectorAll('.d-flipnum i')];
    root.querySelector('[data-flipn]').onclick = () => {
      const n = String((Number(digits.map(d => d.textContent).join('')) + 1) % 1000).padStart(3, '0');
      digits.forEach((d, i) => { if (d.textContent !== n[i]) { d.textContent = n[i]; d.classList.remove('flip'); void d.offsetWidth; d.classList.add('flip'); } });
    };
  });
