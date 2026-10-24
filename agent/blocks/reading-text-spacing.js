// 用法：先 <script src="blocks/reading-text-spacing.js"></script>，再调用 window.INITS['reading-text-spacing'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['reading-text-spacing'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const draw=()=>{q('[data-text]').style.lineHeight=q('[data-line]').value;q('[data-text]').style.letterSpacing=q('[data-letter]').value+'em';say('行距 '+q('[data-line]').value+'；字距 '+q('[data-letter]').value+'em');};qa('input').forEach(el=>el.oninput=draw);q('[data-reset]').onclick=()=>{q('[data-line]').value='1.5';q('[data-letter]').value='0';draw();};draw();})(root, q, qa, say);
});
