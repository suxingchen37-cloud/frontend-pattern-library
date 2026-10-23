// 用法：先 <script src="blocks/dropzone.js"></script>，再调用 window.INITS['dropzone'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['dropzone'] = (root => {
    const z = root.querySelector('.d-drop'), note = root.querySelector('[data-dropnote]');
    ['dragenter', 'dragover'].forEach(t => z.addEventListener(t, e => { e.preventDefault(); z.classList.add('over'); }));
    ['dragleave', 'drop'].forEach(t => z.addEventListener(t, e => { e.preventDefault(); z.classList.remove('over'); }));
    z.addEventListener('drop', e => { const f = e.dataTransfer?.files?.[0]; if (note) note.textContent = f ? '收到：' + f.name + '（演示不落盘）' : ''; });
  });
