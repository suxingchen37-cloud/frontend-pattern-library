// 用法：先 <script src="blocks/volume-popover.js"></script>，再调用 window.INITS['volume-popover'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['volume-popover'] = (root => {
  var pop = root.querySelector('[data-pop]');
  var btn = root.querySelector('[data-btn]');
  var slider = root.querySelector('[data-slider]');
  var fill = root.querySelector('[data-fill]');
  var knob = root.querySelector('[data-knob]');
  var val = root.querySelector('[data-val]');
  if (!pop || !btn || !slider || !fill) return;
  var v = .7, last = .7, drag = false;
  var paint = function () {
    fill.style.height = (v * 100).toFixed(0) + '%';
    if (knob) knob.style.bottom = (v * 100).toFixed(0) + '%';
    if (val) val.textContent = String(Math.round(v * 100));
    btn.textContent = v === 0 ? '静音' : '音量 ' + Math.round(v * 100);
  };
  btn.addEventListener('click', function () {
    if (v === 0) { v = last || .7; paint(); pop.hidden = true; btn.setAttribute('aria-expanded', 'false'); return; }
    pop.hidden = !pop.hidden;
    btn.setAttribute('aria-expanded', pop.hidden ? 'false' : 'true');
  });
  var set = function (e) { var r = slider.getBoundingClientRect(); v = Math.max(0, Math.min(1, 1 - (e.clientY - r.top) / r.height)); if (v > 0) last = v; paint(); };
  slider.addEventListener('pointerdown', function (e) { drag = true; slider.setPointerCapture(e.pointerId); set(e); });
  slider.addEventListener('pointermove', function (e) { if (drag) set(e); });
  var end = function () { drag = false; };
  slider.addEventListener('pointerup', end);
  slider.addEventListener('pointercancel', end);
  paint();
});
