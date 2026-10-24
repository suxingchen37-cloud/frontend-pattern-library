// 用法：先 <script src="blocks/clearable-input.js"></script>，再调用 window.INITS['clearable-input'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['clearable-input'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const input=q('[data-input]'),clear=q('[data-clear]');const sync=()=>{clear.disabled=!input.value;};input.oninput=sync;clear.onclick=()=>{input.value='';sync();input.focus();input.dispatchEvent(new Event('input',{bubbles:true}));say('输入已清空');};sync();})(root, q, qa, say);
});
