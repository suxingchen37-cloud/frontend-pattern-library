// 用法：先 <script src="blocks/inline-edit.js"></script>，再调用 window.INITS['inline-edit'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['inline-edit'] = (root => {
    root.querySelectorAll('[data-edit3]').forEach((td) => td.onclick = () => {
      if (td.querySelector('input')) return;
      const old = td.textContent;
      const inp = root.ownerDocument.createElement('input');
      inp.value = old; td.textContent = ''; td.appendChild(inp); inp.focus(); inp.select();
      const save = () => { td.textContent = inp.value.trim() || old; };
      inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { save(); } if (e.key === 'Escape') { td.textContent = old; } });
      inp.addEventListener('blur', save);
    });
  });
