// 用法：先 <script src="blocks/waveform-trim.js"></script>，再调用 window.INITS['waveform-trim'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['waveform-trim'] = (root => {
  var box = root.querySelector('[data-box]');
  var wave = root.querySelector('[data-wave]');
  var sel = root.querySelector('[data-sel]');
  var len = root.querySelector('[data-len]');
  if (!box || !wave || !sel) return;
  var i = 0;
  while (i < 48) { var b = document.createElement('i'); b.style.height = (12 + Math.abs(Math.sin(i * 1.7)) * 70).toFixed(0) + '%'; wave.appendChild(b); i++; }
  var a = .14, b = .62, drag = null, startX = 0, a0 = 0, b0 = 0;
  var dur = 6.2;
  var paint = function () {
    sel.style.setProperty('--a', (a * 100).toFixed(2) + '%');
    sel.style.setProperty('--b', (b * 100).toFixed(2) + '%');
    if (len) len.textContent = ((b - a) * dur).toFixed(1) + 's';
  };
  var down = function (mode) { return function (e) { drag = mode; startX = e.clientX; a0 = a; b0 = b; sel.setPointerCapture(e.pointerId); e.stopPropagation(); }; };
  sel.addEventListener('pointerdown', down('move'));
  sel.querySelector('[data-hl]').addEventListener('pointerdown', down('l'));
  sel.querySelector('[data-hr]').addEventListener('pointerdown', down('r'));
  sel.addEventListener('pointermove', function (e) {
    if (!drag) return;
    var d = (e.clientX - startX) / box.clientWidth;
    if (drag === 'l') a = Math.max(0, Math.min(b - .08, a0 + d));
    else if (drag === 'r') b = Math.min(1, Math.max(a + .08, b0 + d));
    else { var w = b0 - a0; var na = Math.max(0, Math.min(1 - w, a0 + d)); a = na; b = na + w; }
    paint();
  });
  var end = function () { drag = null; };
  sel.addEventListener('pointerup', end);
  sel.addEventListener('pointercancel', end);
  paint();
});
