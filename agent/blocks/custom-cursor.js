// 用法：先 <script src="blocks/custom-cursor.js"></script>，再调用 window.INITS['custom-cursor'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['custom-cursor'] = (root => {
    const z = root.querySelector('.d-cur'), dot = document.createElement('span'); dot.className = 'dot'; dot.style.opacity = 0; z.appendChild(dot);
    z.addEventListener('pointermove', e => { const r = z.getBoundingClientRect(); dot.style.opacity = 1; dot.style.left = (e.clientX - r.left) + 'px'; dot.style.top = (e.clientY - r.top) + 'px'; });
    z.addEventListener('pointerleave', () => dot.style.opacity = 0);
    z.addEventListener('pointerdown', () => { dot.style.width = dot.style.height = '22px'; });
    z.addEventListener('pointerup', () => { dot.style.width = dot.style.height = '12px'; });
  });
