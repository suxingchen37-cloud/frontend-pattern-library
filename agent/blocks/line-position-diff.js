// 用法：先 <script src="blocks/line-position-diff.js"></script>，再调用 window.INITS['line-position-diff'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['line-position-diff'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-compare]').onclick=()=>{const left=q('[data-before]').value.split('\n'),right=q('[data-after]').value.split('\n');let changed=0;q('[data-result]').replaceChildren(...Array.from({length:Math.max(left.length,right.length)},(_,i)=>{const same=left[i]===right[i];if(!same)changed++;const li=document.createElement('li');li.textContent=same?'相同：'+left[i]:'原：'+(left[i]===undefined?'[缺少此行]':left[i])+' → 新：'+(right[i]===undefined?'[缺少此行]':right[i]);return li;}));say(changed+' 个行号的内容不同');};})(root, q, qa, say);
});
