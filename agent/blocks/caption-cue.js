// 用法：先 <script src="blocks/caption-cue.js"></script>，再调用 window.INITS['caption-cue'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['caption-cue'] = (root => {
  var line = root.querySelector('[data-line]');
  var idx = root.querySelector('[data-idx]');
  var next = root.querySelector('[data-next]');
  if (!line || !next) return;
  var cues = ['场记，第 3 场第 2 次。', '机位 B，五十毫米，反光板在右侧收一格。', '这条要过，但别过太早。', '好，这条过了，收工。'];
  var i = 0, timer = 0;
  var show = function () {
    clearTimeout(timer);
    line.textContent = cues[i];
    if (idx) idx.textContent = '0' + (i + 1) + ' / 04';
    timer = setTimeout(function () { i = (i + 1) % cues.length; show(); }, Math.max(1200, cues[i].length * 200));
  };
  next.addEventListener('click', function () { i = (i + 1) % cues.length; show(); });
  show();
});
