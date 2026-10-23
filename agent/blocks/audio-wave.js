// 用法：先 <script src="blocks/audio-wave.js"></script>，再调用 window.INITS['audio-wave'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['audio-wave'] = (root => {
    const wave = root.querySelector('[data-wave3]'), btn = root.querySelector('[data-aw3]');
    btn.onclick = () => { const on = wave.classList.toggle('on'); btn.textContent = on ? '暂停' : '播放'; };
  });
