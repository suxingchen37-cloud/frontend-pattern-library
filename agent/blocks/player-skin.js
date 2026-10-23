// 用法：先 <script src="blocks/player-skin.js"></script>，再调用 window.INITS['player-skin'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['player-skin'] = (root => {
    const btn = root.querySelector('[data-play3]'), track = root.querySelector('[data-pltrack]'), time = root.querySelector('[data-pltime]'), mark = root.querySelector('[data-plmark]');
    let t = 0, playing = false, timer = null;
    const total = 24;
    const paint = () => {
      const m = Math.floor(t / 60), s = Math.floor(t % 60);
      time.textContent = m + ':' + String(s).padStart(2, '0') + ' / 0:' + total;
      track.style.width = (t / total * 100) + '%';
      btn.textContent = playing ? 'II' : '▶';
      mark.textContent = playing ? 'Ⅱ' : '▶';
    };
    const stop = () => { playing = false; clearInterval(timer); paint(); };
    btn.onclick = () => {
      if (t >= total) t = 0;
      playing = !playing;
      clearInterval(timer);
      if (playing) timer = setInterval(() => {
        if (!root.isConnected) { clearInterval(timer); return; }
        t = Math.min(total, t + 0.5); paint();
        if (t >= total) stop();
      }, 500);
      paint();
    };
    paint();
  });
