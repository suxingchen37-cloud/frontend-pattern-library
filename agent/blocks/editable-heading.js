// 用法：先 <script src="blocks/editable-heading.js"></script>，再调用 window.INITS['editable-heading'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['editable-heading'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const close=()=>{q('[data-editor]').hidden=true;q('[data-edit]').hidden=false;q('[data-edit]').focus();};const save=()=>{const text=q('[data-input]').value.trim();if(!text){q('[data-input]').setAttribute('aria-invalid','true');say('标题不能为空');return;}q('[data-title]').textContent=text;close();say('标题已更新到本次演示');};q('[data-edit]').onclick=()=>{q('[data-input]').value=q('[data-title]').textContent;q('[data-input]').removeAttribute('aria-invalid');q('[data-editor]').hidden=false;q('[data-edit]').hidden=true;q('[data-input]').focus();q('[data-input]').select();};q('[data-save]').onclick=save;q('[data-cancel]').onclick=()=>{close();say('已取消，原标题保留');};q('[data-input]').onkeydown=event=>{if(event.key==='Enter'){event.preventDefault();save();}if(event.key==='Escape'){event.preventDefault();close();say('已取消，原标题保留');}};})(root, q, qa, say);
});
