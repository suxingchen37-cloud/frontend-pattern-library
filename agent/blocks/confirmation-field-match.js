// 用法：先 <script src="blocks/confirmation-field-match.js"></script>，再调用 window.INITS['confirmation-field-match'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['confirmation-field-match'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const sync=()=>{const first=q('[data-first]'),second=q('[data-second]'),valid=first.value.length>0&&first.value===second.value;q('[data-confirm]').disabled=!valid;second.setAttribute('aria-invalid',String(Boolean(second.value)&&!valid));say(valid?'两次输入一致':second.value?'两次输入不一致':'请再次输入确认');};qa('input').forEach(el=>{el.autocomplete='new-password';el.oninput=sync;});q('[data-confirm]').onclick=()=>say('已通过本地一致性检查');sync();})(root, q, qa, say);
});
