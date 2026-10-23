// 用法：先 <script src="blocks/media-skeleton.js"></script>，再调用 window.INITS['media-skeleton'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['media-skeleton'] = (root => {
  var frame = root.querySelector('[data-frame]');
  var done = root.querySelector('[data-done]');
  var state = root.querySelector('[data-state]');
  if (!frame || !done) return;
  var timer = setTimeout(function () { frame.classList.add('slow'); }, 2000);
  done.addEventListener('click', function () {
    clearTimeout(timer);
    var isDone = frame.classList.toggle('done');
    frame.classList.remove('slow');
    if (state) state.textContent = isDone ? '已载入' : '骨架显示中';
    done.textContent = isDone ? '重新加载' : '模拟加载完成';
    var hint = frame.querySelector('span');
    if (hint) hint.textContent = isDone ? '16:9 · 00:42' : '载入中';
  });
});
