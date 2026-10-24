// 用法：先 <script src="blocks/dirty-field-summary.js"></script>，再调用 window.INITS['dirty-field-summary'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['dirty-field-summary'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let baseline={title:q('[data-title]').value,owner:q('[data-owner]').value};const draw=()=>{const changed=Object.keys(baseline).filter(key=>q('[data-'+key+']').value!==baseline[key]);q('[data-result]').replaceChildren(...changed.map(key=>{const li=document.createElement('li');li.textContent=key==='title'?'项目名称已修改':'负责人已修改';return li;}));q('[data-save]').disabled=q('[data-reset]').disabled=!changed.length;say(changed.length?'有 '+changed.length+' 个字段未确认':'没有未确认修改');};qa('input').forEach(el=>el.oninput=draw);q('[data-save]').onclick=()=>{Object.keys(baseline).forEach(key=>baseline[key]=q('[data-'+key+']').value);draw();};q('[data-reset]').onclick=()=>{Object.keys(baseline).forEach(key=>q('[data-'+key+']').value=baseline[key]);draw();};draw();})(root, q, qa, say);
});
