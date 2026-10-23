// 用法：先 <script src="blocks/text-scramble.js"></script>，再调用 window.INITS['text-scramble'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['text-scramble'] = (root => {
  const box = root.querySelector('.d-scramble');
  if (!box || box.dataset.dsc) return;
  box.dataset.dsc = '1';
  const out = box.querySelector('.d-sc-text');
  const pool = '0123456789ABCDEF#%&+*=<>/';
  const text = '正在生成页面';
  const play = () => {
    clearInterval(box._dscT);
    let step = 0;
    const paint = () => {
      let html = '';
      for (let i = 0; i < text.length; i++) {
        const ch = i < step ? text[i] : pool[Math.floor(Math.random() * pool.length)];
        html += '<span class="d-sc-ch' + (i < step ? ' is-fixed' : '') + '">' + ch + '</span>';
      }
      out.innerHTML = html;
    };
    paint();
    box._dscT = setInterval(() => {
      step += 1;
      paint();
      if (step >= text.length) { clearInterval(box._dscT); box._dscT = 0; }
    }, 120);
  };
  play();
  box.addEventListener('pointerdown', play);
  box.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); } });
});
