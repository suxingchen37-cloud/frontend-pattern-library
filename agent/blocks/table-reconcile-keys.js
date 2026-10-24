// 用法：先 <script src="blocks/table-reconcile-keys.js"></script>，再调用 window.INITS['table-reconcile-keys'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-reconcile-keys'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-compare]').onclick=()=>{const read=selector=>new Set(q(selector).value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean)),left=read('[data-left]'),right=read('[data-right]');q('[data-result]').replaceChildren();[['共同项',[...left].filter(id=>right.has(id))],['仅计划中',[...left].filter(id=>!right.has(id))],['仅交付中',[...right].filter(id=>!left.has(id))]].forEach(([label,ids])=>{const p=document.createElement('p');p.textContent=label+'：'+(ids.join('、')||'无');q('[data-result]').append(p);});say('已按唯一编号完成本地核对');};})(root, q, qa, say);
});
