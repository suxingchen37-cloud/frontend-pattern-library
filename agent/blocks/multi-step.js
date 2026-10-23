// 用法：先 <script src="blocks/multi-step.js"></script>，再调用 window.INITS['multi-step'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['multi-step'] = (root => {
    const strip = root.querySelector('.d-multi-step-strip'), panes = [...root.querySelectorAll('.d-multi-step-pane')], back = root.querySelector('[data-msback]'), next = root.querySelector('[data-msnext]');
    let i = 0;
    const apply = () => { strip.style.transform = `translateX(-${i * 100}%)`; back.disabled = i === 0; next.textContent = i === panes.length - 1 ? '完成' : '下一步'; };
    next.onclick = () => { const inp = panes[i].querySelector('input'); if (inp && !inp.value.trim()) { inp.style.borderColor = '#c4553a'; inp.focus(); return; } inp && (inp.style.borderColor = ''); if (i < panes.length - 1) { i++; apply(); } else next.textContent = '已提交'; };
    back.onclick = () => { if (i > 0) { i--; apply(); } };
    apply();
  });
