// 用法：先 <script src="blocks/stepper.js"></script>，再调用 window.INITS['stepper'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['stepper'] = (root => {
    const steps = [...root.querySelectorAll('.d-step i')]; let i = 0;
    root.querySelector('[data-next]').onclick = () => {
      if (i < steps.length) steps[i].classList.remove('d-stepper-now');
      if (i > 0) steps[i - 1].classList.add('done');
      i = (i + 1) % (steps.length + 1);
      if (i < steps.length) steps[i].classList.add('d-stepper-now');
    };
  });
