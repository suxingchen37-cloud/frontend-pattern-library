// 用法：先 <script src="blocks/modal-create-record.js"></script>，再调用 window.INITS['modal-create-record'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['modal-create-record'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const dialog=q('[data-dialog]');q('[data-open]').onclick=()=>{q('[data-name]').value='';q('[data-name]').removeAttribute('aria-invalid');dialog.showModal();q('[data-name]').focus();};q('[data-save]').onclick=()=>{const value=q('[data-name]').value.trim();if(!value){q('[data-name]').setAttribute('aria-invalid','true');q('[data-name]').focus();say('请输入镜头名称');return;}const li=document.createElement('li');li.textContent=value;q('[data-list]').append(li);dialog.close();say('记录已添加到本次演示');};q('[data-cancel]').onclick=()=>dialog.close();dialog.onclose=()=>q('[data-open]').focus();})(root, q, qa, say);
});
