// 用法：先 <script src="blocks/range-dual.js"></script>，再调用 window.INITS['range-dual'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['range-dual'] = (root => {
    const a = root.querySelector('[data-rmin]'), b = root.querySelector('[data-rmax]');
    const lo = root.querySelector('[data-rdmin]'), hi = root.querySelector('[data-rdmax]');
    const sync = () => {
      let x = Number(a.value), y = Number(b.value);
      if (x > y - 50) { if (document.activeElement === a) x = y - 50; else y = x + 50; }
      if (y > 1000) { y = 1000; x = Math.min(x, 950); }
      if (x < 0) { x = 0; y = Math.max(y, 50); }
      a.value = x; b.value = y;
      lo.textContent = '¥' + x; hi.textContent = '¥' + y;
    };
    a.addEventListener('input', sync); b.addEventListener('input', sync); sync();
  });
