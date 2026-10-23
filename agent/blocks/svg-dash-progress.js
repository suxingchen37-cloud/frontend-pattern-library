// 用法：先 <script src="blocks/svg-dash-progress.js"></script>，再调用 window.INITS['svg-dash-progress'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['svg-dash-progress'] = (root => {
    const ring = root.querySelector('.d-dp-ring'), bar = ring.querySelector('.d-dp-bar'), num = ring.querySelector('.d-dp-num');
    const btn = root.querySelector('.d-dp-btn');
    const L = bar.getTotalLength();
    bar.style.strokeDasharray = L + ' ' + L;
    const DUR = 900;
    const tick = now => {
      if (!ring._t0) ring._t0 = now;
      const p = Math.min(1, (now - ring._t0) / DUR);
      bar.style.strokeDashoffset = String(L * (1 - p));
      const v = Math.round(p * 100);
      num.textContent = v + '%';
      ring.setAttribute('aria-valuenow', String(v));
      if (p < 1) ring._raf = requestAnimationFrame(tick);
    };
    const run = () => { cancelAnimationFrame(ring._raf); ring._t0 = 0; ring._raf = requestAnimationFrame(tick); };
    btn.onclick = run;
    run();
  });
