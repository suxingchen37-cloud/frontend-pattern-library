// 用法：先 <script src="blocks/reduced-motion.js"></script>，再调用 window.INITS['reduced-motion'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['reduced-motion'] = (root => {
    const note = root.querySelector('[data-rmnote]');
    const mq = matchMedia('(prefers-reduced-motion: reduce)');
    const set = () => note.textContent = mq.matches ? '系统：已开启「减少动态效果」→ 动画关闭' : '系统：未开启 → 动画运行';
    set(); mq.addEventListener?.('change', set);
  });
