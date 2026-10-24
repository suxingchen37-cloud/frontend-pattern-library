// 用法：先 <script src="blocks/batched-status-announcer.js"></script>，再调用 window.INITS['batched-status-announcer'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['batched-status-announcer'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let total=0;const complete=count=>{total+=count;q('[data-total]').textContent=String(total);say('本次完成 '+count+' 项，累计 '+total+' 项');};q('[data-one]').onclick=()=>complete(1);q('[data-batch]').onclick=()=>complete(20);q('[data-reset]').onclick=()=>{total=0;q('[data-total]').textContent='0';say('演示计数已复位');};})(root, q, qa, say);
});
