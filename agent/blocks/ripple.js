// 用法：先 <script src="blocks/ripple.js"></script>，再调用 window.INITS['ripple'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['ripple'] = (root => root.querySelector('.d-rip')?.addEventListener('click', e => {
    const b = e.currentTarget, r = b.getBoundingClientRect();
    const w = document.createElement('span'); w.className = 'd-ripple-wave';
    const size = Math.max(r.width, r.height); w.style.width = w.style.height = size + 'px';
    w.style.left = (e.clientX - r.left - size / 2) + 'px'; w.style.top = (e.clientY - r.top - size / 2) + 'px';
    b.appendChild(w); setTimeout(() => w.remove(), 620);
  }));
