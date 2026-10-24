// 用法：先 <script src="blocks/date-range-validation.js"></script>，再调用 window.INITS['date-range-validation'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['date-range-validation'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const start=q('[data-start]'),end=q('[data-end]');const check=()=>{end.min=start.value;const bad=!start.value||!end.value||end.value<start.value;end.setAttribute('aria-invalid',String(bad));say(bad?'请填写日期，结束日期不能早于开始日期':start.value+' 至 '+end.value);};start.oninput=check;end.oninput=check;check();})(root, q, qa, say);
});
