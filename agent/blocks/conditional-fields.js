// 用法：先 <script src="blocks/conditional-fields.js"></script>，再调用 window.INITS['conditional-fields'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['conditional-fields'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const mode=q('[data-mode]'),address=q('[data-address]');const sync=()=>{const needed=mode.value==='courier';q('[data-address-label]').hidden=!needed;address.disabled=!needed;address.required=needed;address.removeAttribute('aria-invalid');say(needed?'请补充收件地址':'现场交付无需地址');};mode.onchange=sync;q('[data-check]').onclick=()=>{const invalid=address.required&&!address.value.trim();address.setAttribute('aria-invalid',String(invalid));say(invalid?'收件地址不能为空':'演示校验通过');if(invalid)address.focus();};sync();})(root, q, qa, say);
});
