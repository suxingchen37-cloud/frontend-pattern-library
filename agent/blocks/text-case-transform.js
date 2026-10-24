// 用法：先 <script src="blocks/text-case-transform.js"></script>，再调用 window.INITS['text-case-transform'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['text-case-transform'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-result]').readOnly=true;q('[data-convert]').onclick=()=>{const text=q('[data-input]').value,mode=q('[data-mode]').value;q('[data-result]').value=mode==='upper'?text.toLocaleUpperCase():mode==='lower'?text.toLocaleLowerCase():text.trim().replace(/\s+/g,' ');say(text?'转换完成，原文保留':'原文为空，结果已清空');};})(root, q, qa, say);
});
