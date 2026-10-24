// 用法：先 <script src="blocks/range-select-list.js"></script>，再调用 window.INITS['range-select-list'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['range-select-list'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const items=qa('[data-entry]');let anchor=null;const sync=()=>say('已选 '+items.filter(el=>el.checked).length+' 项');items.forEach((el,i)=>el.onclick=event=>{if(event.shiftKey&&anchor!==null){for(let n=Math.min(anchor,i);n<=Math.max(anchor,i);n++)items[n].checked=el.checked;}else anchor=i;sync();});q('[data-all]').onclick=()=>{items.forEach(el=>el.checked=true);anchor=null;sync();};q('[data-none]').onclick=()=>{items.forEach(el=>el.checked=false);anchor=null;sync();};sync();})(root, q, qa, say);
});
