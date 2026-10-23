// 用法：先 <script src="blocks/gesture-hint.js"></script>，再调用 window.INITS['gesture-hint'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['gesture-hint'] = (root => {
  var hand = root.querySelector('[data-hand]');
  var again = root.querySelector('[data-again]');
  if (!hand) return;
  var play = function () { hand.classList.remove('on'); void hand.offsetWidth; hand.classList.add('on'); };
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) play();
  if (again) again.addEventListener('click', play);
  hand.addEventListener('animationend', function () { hand.classList.remove('on'); });
});
