// 用法：先 <script src="blocks/step-status.js"></script>，再调用 window.INITS['step-status'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['step-status'] = (root => {
    const steps = [...root.querySelectorAll('[data-sssteps] span')], msg = root.querySelector('[data-ssmsg3]');
    let idx = 1, err = false;
    const paint = () => {
      steps.forEach((s, i) => {
        s.className = '';
        if (i < idx) s.classList.add('d-step-status-done3');
        else if (i === idx) s.classList.add(err ? 'err3' : 'd-step-status-live3');
      });
      msg.textContent = err ? '构建失败 · 可以重试这一步' : idx >= steps.length ? '全部完成 · 已发布' : '正在' + steps[idx].textContent.split(' ')[1] + '…';
    };
    root.querySelector('[data-nextstep3]').onclick = () => {
      if (err) { err = false; paint(); return; }
      idx = Math.min(steps.length, idx + 1); paint();
    };
    root.querySelector('[data-failstep3]').onclick = () => { err = true; paint(); };
    paint();
  });
