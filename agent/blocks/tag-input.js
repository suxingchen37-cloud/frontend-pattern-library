// 用法：先 <script src="blocks/tag-input.js"></script>，再调用 window.INITS['tag-input'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['tag-input'] = (root => {
    const box = root.querySelector('.d-tags'); const inp = box.querySelector('input');
    const add = v => { const chip = document.createElement('span'); chip.className = 'd-tag-input-chip'; chip.appendChild(document.createTextNode(v)); const x = document.createElement('i'); x.textContent = '×'; x.onclick = () => chip.remove(); chip.appendChild(x); box.insertBefore(chip, inp); };
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter' && inp.value.trim()) { add(inp.value.trim()); inp.value = ''; e.preventDefault(); }
      if (e.key === 'Backspace' && !inp.value) box.querySelector('.d-tag-input-chip:last-of-type')?.remove();
    });
  });
