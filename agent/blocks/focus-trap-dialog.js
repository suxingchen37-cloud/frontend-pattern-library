// 用法：先 <script src="blocks/focus-trap-dialog.js"></script>，再调用 window.INITS['focus-trap-dialog'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['focus-trap-dialog'] = (root => {
  const stage = root.querySelector('.d-ftd');
  if (!stage || stage.dataset.ftd) return;
  stage.dataset.ftd = '1';
  const openBtn = stage.querySelector('.d-ftd-open');
  const box = stage.querySelector('.d-ftd-box');
  const scrim = stage.querySelector('.d-ftd-scrim');
  const caret = stage.querySelector('.d-ftd-caret');
  const opts = Array.from(stage.querySelectorAll('.d-ftd-opt'));
  const mark = el => {
    const i = opts.indexOf(el);
    opts.forEach(o => o.classList.toggle('is-on', o === el));
    caret.style.setProperty('--i', String(i < 0 ? 0 : i));
  };
  const open = () => {
    stage.classList.add('is-open');
    box.hidden = false;
    scrim.hidden = false;
    opts[0].focus();
    mark(opts[0]);
  };
  const close = () => {
    stage.classList.remove('is-open');
    box.hidden = true;
    scrim.hidden = true;
    openBtn.focus();
  };
  openBtn.addEventListener('click', open);
  scrim.addEventListener('click', close);
  opts.forEach(o => {
    o.addEventListener('focus', () => mark(o));
    o.addEventListener('click', close);
  });
  box.addEventListener('keydown', e => {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab' || opts.length < 2) return;
    const first = opts[0], last = opts[opts.length - 1];
    if (e.shiftKey && stage.contains(document.activeElement) && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
});
