// 用法：先 <script src="blocks/checklist-progress.js"></script>，再调用 window.INITS['checklist-progress'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['checklist-progress'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const sync=()=>{const items=qa('[data-item]'),done=items.filter(item=>item.checked).length;q('[data-progress]').max=items.length;q('[data-progress]').value=done;say('已完成 '+done+' / '+items.length);};qa('[data-item]').forEach(item=>item.onchange=sync);q('[data-reset]').onclick=()=>{qa('[data-item]').forEach(item=>item.checked=false);sync();};sync();})(root, q, qa, say);
});
