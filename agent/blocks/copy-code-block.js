// 用法：先 <script src="blocks/copy-code-block.js"></script>，再调用 window.INITS['copy-code-block'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['copy-code-block'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-copy]').onclick=async()=>{const text=q('[data-code]').textContent;try{await navigator.clipboard.writeText(text);q('[data-fallback]').hidden=true;say('代码已复制，不含行号');}catch{q('[data-fallback]').hidden=false;q('[data-text]').value=text;q('[data-text]').focus();q('[data-text]').select();say('自动复制不可用，请复制已选中的代码');}};})(root, q, qa, say);
});
