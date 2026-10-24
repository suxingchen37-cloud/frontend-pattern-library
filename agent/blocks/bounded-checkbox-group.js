// 用法：先 <script src="blocks/bounded-checkbox-group.js"></script>，再调用 window.INITS['bounded-checkbox-group'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['bounded-checkbox-group'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const items=qa('[data-choice]');const sync=()=>{const count=items.filter(el=>el.checked).length;items.forEach(el=>el.disabled=count>=2&&!el.checked);say('已选 '+count+' / 2 项');};items.forEach(el=>el.onchange=sync);q('[data-reset]').onclick=()=>{items.forEach(el=>el.checked=false);sync();};sync();})(root, q, qa, say);
});
