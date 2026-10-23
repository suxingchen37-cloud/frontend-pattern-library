// 用法：先 <script src="blocks/optimistic.js"></script>，再调用 window.INITS['optimistic'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['optimistic'] = (root => root.querySelector('[data-opt]')?.addEventListener('click', () => {
    const box = root.querySelector('.d-opt'); const m = document.createElement('div'); m.className = 'd-optimistic-m d-optimistic-mine';
    m.innerHTML = '临时消息 <em>发送中…</em>'; box.appendChild(m);
    setTimeout(() => { const em = m.querySelector('em'); em.textContent = '已送达'; }, 1200);
  }));
