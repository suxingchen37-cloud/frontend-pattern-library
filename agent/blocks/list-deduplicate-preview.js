// 用法：先 <script src="blocks/list-deduplicate-preview.js"></script>，再调用 window.INITS['list-deduplicate-preview'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['list-deduplicate-preview'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-dedupe]').onclick=()=>{const lines=q('[data-input]').value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean),unique=[...new Set(lines)];q('[data-result]').replaceChildren(...unique.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));say('保留 '+unique.length+' 项，去除重复 '+(lines.length-unique.length)+' 项');};})(root, q, qa, say);
});
