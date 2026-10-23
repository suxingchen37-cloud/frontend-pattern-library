// 用法：先 <script src="blocks/orbit-chart.js"></script>，再调用 window.INITS['orbit-chart'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['orbit-chart'] = (root => {
  const stage = root.querySelector('.d-oc-stage');
  if (!stage) return;
  const scene = stage.querySelector('.d-oc-scene');
  if (!scene) return;
  let rz = -40, rx = 58, drag = null, vx = 0, vy = 0, raf = 0, live = false;
  const apply = () => { scene.style.transform = 'rotateX(' + rx.toFixed(2) + 'deg) rotateZ(' + rz.toFixed(2) + 'deg) translateZ(-18px)'; };
  const tick = () => {
    if (!live) return;
    if (!drag) { rz += vx; rx += vy; vx *= 0.93; vy *= 0.93; if (Math.abs(vx) < 0.01) vx = 0; if (Math.abs(vy) < 0.01) vy = 0; rx = Math.max(30, Math.min(76, rx)); apply(); }
    if (drag || vx || vy) raf = requestAnimationFrame(tick); else live = false;
  };
  const start = () => { if (!live) { live = true; raf = requestAnimationFrame(tick); } };
  stage.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY }; stage.classList.add('d-oc-drag'); stage.setPointerCapture(e.pointerId); vx = vy = 0; });
  stage.addEventListener('pointermove', e => {
    if (!drag) return;
    rz += (e.clientX - drag.x) * 0.4;
    rx = Math.max(30, Math.min(76, rx - (e.clientY - drag.y) * 0.25));
    vx = (e.clientX - drag.x) * 0.06; vy = -(e.clientY - drag.y) * 0.04;
    drag = { x: e.clientX, y: e.clientY };
    apply(); start();
  });
  const release = () => { drag = null; stage.classList.remove('d-oc-drag'); start(); };
  stage.addEventListener('pointerup', release);
  stage.addEventListener('pointercancel', release);
  apply();
});
