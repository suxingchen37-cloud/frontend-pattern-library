// 用法：先 <script src="blocks/text-annotate.js"></script>，再调用 window.INITS['text-annotate'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['text-annotate'] = (root => {
    const text = root.querySelector('[data-antext]'), tip = root.querySelector('[data-antip]');
    let range = null;
    text.addEventListener('mouseup', () => {
      const sel = root.ownerDocument.getSelection();
      if (!sel || sel.isCollapsed || !text.contains(sel.anchorNode)) { tip.hidden = true; return; }
      range = sel.getRangeAt(0).cloneRange();
      tip.hidden = false;
    });
    root.querySelector('[data-anmark]').onclick = () => {
      if (!range) return;
      const mark = root.ownerDocument.createElement('mark');
      try { mark.appendChild(range.extractContents()); range.insertNode(mark); } catch { }
      root.ownerDocument.getSelection()?.removeAllRanges();
      tip.hidden = true;
    };
  });
