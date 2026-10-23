// 用法：先 <script src="blocks/depth-parallax.js"></script>，再调用 window.INITS['depth-parallax'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['depth-parallax'] = (root => {
  const box = root.querySelector('.d-dp');
  if (!box) return;
  const scene = box.querySelector('.d-dp-scene');
  let kx = 0, ky = 0;
  const apply = () => { scene.style.transform = 'rotateX(' + ky.toFixed(2) + 'deg) rotateY(' + kx.toFixed(2) + 'deg)'; };
  box.onpointermove = e => {
    const r = box.getBoundingClientRect();
    kx = ((e.clientX - r.left) / r.width - .5) * 22;
    ky = -((e.clientY - r.top) / r.height - .5) * 18;
    scene.style.transition = 'none';
    apply();
  };
  box.onpointerleave = () => {
    kx = 0; ky = 0;
    scene.style.transition = 'transform 280ms cubic-bezier(.34,1.56,.64,1)';
    apply();
  };
  const step = { ArrowLeft: [-3, 0], ArrowRight: [3, 0], ArrowUp: [0, -3], ArrowDown: [0, 3] };
  box.onkeydown = e => {
    const s = step[e.key];
    if (!s) return;
    e.preventDefault();
    kx = Math.max(-11, Math.min(11, kx + s[0]));
    ky = Math.max(-9, Math.min(9, ky + s[1]));
    scene.style.transition = 'transform 280ms cubic-bezier(.34,1.56,.64,1)';
    apply();
  };
});
