// 用法：先 <script src="blocks/flip-list.js"></script>，再调用 window.INITS['flip-list'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['flip-list'] = (root => root.querySelector('[data-shuffle]')?.addEventListener('click', () => {
    const box = root.querySelector('.d-flip'), items = [...box.children];
    const first = new Map(items.map(i => [i, i.getBoundingClientRect()]));
    items.sort(() => Math.random() - .5).forEach(i => box.appendChild(i));
    items.forEach(i => {
      const a = first.get(i), b = i.getBoundingClientRect();
      i.animate([{ transform: `translate(${a.left - b.left}px,${a.top - b.top}px)` }, { transform: 'none' }], { duration: 350, easing: 'cubic-bezier(.2,.75,.25,1)' });
    });
  }));
