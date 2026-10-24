// 用法：先 <script src="blocks/validation-summary.js"></script>，再调用 window.INITS['validation-summary'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['validation-summary'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-form]').onsubmit=event=>{event.preventDefault();const errors=[];for(const [selector,message] of [['[data-name]','填写项目名称'],['[data-email]','填写有效邮箱']]){const field=q(selector),bad=!field.value.trim()||!field.validity.valid;field.setAttribute('aria-invalid',String(bad));if(bad)errors.push({field,message});}q('[data-errors]').replaceChildren(...errors.map(({field,message})=>{const li=document.createElement('li'),button=document.createElement('button');button.type='button';button.textContent=message;button.onclick=()=>field.focus();li.append(button);return li;}));q('[data-summary]').hidden=!errors.length;if(errors.length)q('[data-summary]').focus();say(errors.length?errors.length+' 项需要修正':'演示校验通过，可提交');};})(root, q, qa, say);
});
