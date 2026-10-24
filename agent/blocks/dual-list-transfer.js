// 用法：先 <script src="blocks/dual-list-transfer.js"></script>，再调用 window.INITS['dual-list-transfer'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['dual-list-transfer'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const left=q('[data-available]'),right=q('[data-chosen]');const sync=()=>{q('[data-in]').disabled=!left.selectedOptions.length;q('[data-outward]').disabled=!right.selectedOptions.length;};const move=(from,to)=>{const chosen=[...from.selectedOptions];chosen.forEach(option=>{option.selected=false;to.append(option);});sync();say('已移动 '+chosen.length+' 项；已选共 '+right.options.length+' 项');};left.onchange=right.onchange=sync;q('[data-in]').onclick=()=>move(left,right);q('[data-outward]').onclick=()=>move(right,left);sync();})(root, q, qa, say);
});
