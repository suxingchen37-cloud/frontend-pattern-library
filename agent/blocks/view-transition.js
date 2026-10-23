// 用法：先 <script src="blocks/view-transition.js"></script>，再调用 window.INITS['view-transition'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['view-transition'] = (root => root.querySelector('[data-vt]')?.addEventListener('click', () => {
    const pane = root.querySelector('.d-view-transition-pane');
    const go = () => { const detail = pane.textContent === '列表'; pane.textContent = detail ? '详情' : '列表'; pane.style.background = detail ? 'var(--lime)' : 'var(--paper)'; };
    document.startViewTransition ? document.startViewTransition(go) : go();
  }));
