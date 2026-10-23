// 用法：先 <script src="blocks/zoom-view.js"></script>，再调用 window.INITS['zoom-view'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['zoom-view'] = (root => {
    const stage = root.querySelector('[data-zstage]'), art = root.querySelector('[data-zvart]');
    let scale = 1, x = 0, y = 0, down = false, sx = 0, sy = 0, ox = 0, oy = 0;
    const paint = () => { art.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + scale + ')'; stage.style.cursor = scale > 1 ? 'grab' : 'default'; };
    root.querySelectorAll('[data-zoom3]').forEach((b) => b.onclick = () => {
      scale = Number(b.dataset.zoom3); x = 0; y = 0; paint();
      root.querySelectorAll('[data-zoom3]').forEach((z) => z.classList.toggle('d-zoom-view-on', z === b));
    });
    stage.addEventListener('pointerdown', (e) => { if (scale <= 1) return; down = true; sx = e.clientX; sy = e.clientY; ox = x; oy = y; stage.setPointerCapture?.(e.pointerId); });
    stage.addEventListener('pointermove', (e) => { if (!down) return; x = ox + e.clientX - sx; y = oy + e.clientY - sy; paint(); });
    stage.addEventListener('pointerup', () => { down = false; });
    paint();
  });
