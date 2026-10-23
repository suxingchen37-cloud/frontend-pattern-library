// 用法：先 <script src="blocks/motion-scale.js"></script>，再调用 window.INITS['motion-scale'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['motion-scale'] = (root => {
    const r = root.querySelector('.d-scale'), dot = root.querySelector('.d-scaledot'), note = root.querySelector('[data-scalenote]');
    const names = ['关', '克制', '标准'];
    const apply = () => { const v = +r.value; note.textContent = names[v]; dot.style.animation = v === 0 ? 'none' : v === 1 ? 'd-motion-scale-hop 2.4s var(--ease) infinite' : ''; };
    r.oninput = apply; apply();
  });
