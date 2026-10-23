// 用法：先 <script src="blocks/svg-blob-morph.js"></script>，再调用 window.INITS['svg-blob-morph'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['svg-blob-morph'] = (root => {
    const box = root.querySelector('.d-bm'), shape = box.querySelector('.d-bm-shape'), btn = box.querySelector('.d-bm-btn');
    const N = 8, R = 38, CX = 60, CY = 60, DUR = 900;
    const A = [1, .8, .96, .82, 1, .84, .98, .8];
    const B = [.82, .98, .84, 1, .8, .96, .8, 1];
    const ease = t => {
      const x1 = .34, y1 = 1.56, x2 = .64, y2 = 1;
      const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
      const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
      let u = t;
      for (let i = 0; i < 5; i++) {
        const x = ((ax * u + bx) * u + cx) * u - t;
        const dx = (3 * ax * u + 2 * bx) * u + cx;
        if (Math.abs(x) < 1e-4 || !dx) break;
        u -= x / dx;
      }
      u = Math.max(0, Math.min(1, u));
      return ((ay * u + by) * u + cy) * u;
    };
    const mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
    const draw = k => {
      const pts = [];
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2 - Math.PI / 2;
        const r = Math.min(R * 1.14, R * (A[i] + (B[i] - A[i]) * k));
        pts.push([CX + Math.cos(a) * r, CY + Math.sin(a) * r]);
      }
      const m0 = mid(pts[N - 1], pts[0]);
      let d = 'M' + m0[0].toFixed(1) + ' ' + m0[1].toFixed(1);
      for (let i = 0; i < N; i++) {
        const m = mid(pts[i], pts[(i + 1) % N]);
        d += 'Q' + pts[i][0].toFixed(1) + ' ' + pts[i][1].toFixed(1) + ' ' + m[0].toFixed(1) + ' ' + m[1].toFixed(1);
      }
      return d + 'Z';
    };
    shape.setAttribute('d', draw(0));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      btn.disabled = true;
      btn.textContent = '已停';
      btn.setAttribute('aria-pressed', 'false');
      return;
    }
    let raf = 0, t0 = 0, off = 0;
    const step = now => {
      if (!t0) t0 = now - off;
      const p = ((now - t0) / DUR) % 2;
      shape.setAttribute('d', draw(ease(p < 1 ? p : 2 - p)));
      raf = box._raf = requestAnimationFrame(step);
    };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; box._raf = 0; };
    btn.onclick = () => {
      if (raf) {
        off = (performance.now() - t0) % (DUR * 2); stop();
        btn.textContent = '走'; btn.setAttribute('aria-pressed', 'false');
      } else {
        t0 = 0; step(performance.now());
        btn.textContent = '停'; btn.setAttribute('aria-pressed', 'true');
      }
    };
    cancelAnimationFrame(box._raf);
    step(performance.now());
  });
