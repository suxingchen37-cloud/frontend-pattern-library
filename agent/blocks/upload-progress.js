// 用法：先 <script src="blocks/upload-progress.js"></script>，再调用 window.INITS['upload-progress'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['upload-progress'] = (root => {
    const bar = root.querySelector('[data-upi3]'), n = root.querySelector('[data-upn3]'), pause = root.querySelector('[data-uppause3]');
    let pct = 0, paused = false;
    const timer = setInterval(() => {
      if (!root.isConnected) { clearInterval(timer); return; }
      if (paused || pct >= 100) return;
      pct = Math.min(100, pct + 3);
      bar.style.width = pct + '%'; n.textContent = pct + '%';
      if (pct >= 100) n.textContent = '完成';
    }, 130);
    pause.onclick = () => { paused = !paused; pause.textContent = paused ? '继续' : '暂停'; };
    root.querySelector('[data-upreset3]').onclick = () => { pct = 0; paused = false; pause.textContent = '暂停'; bar.style.width = '0'; n.textContent = '0%'; };
  });
