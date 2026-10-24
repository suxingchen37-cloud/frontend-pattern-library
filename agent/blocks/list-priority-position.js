// 用法：先 <script src="blocks/list-priority-position.js"></script>，再调用 window.INITS['list-priority-position'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['list-priority-position'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-position]').min='1';q('[data-position]').max='3';q('[data-move]').onclick=()=>{const n=Number(q('[data-position]').value),list=q('[data-list]');if(!Number.isInteger(n)||n<1||n>list.children.length){say('目标位置应为 1 至 3');return;}const item=[...list.children].find(el=>el.textContent===q('[data-item]').value);item.remove();list.insertBefore(item,list.children[n-1]||null);say('已移到第 '+n+' 位');};})(root, q, qa, say);
});
