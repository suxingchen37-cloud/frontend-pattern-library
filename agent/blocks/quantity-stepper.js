// 用法：先 <script src="blocks/quantity-stepper.js"></script>，再调用 window.INITS['quantity-stepper'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['quantity-stepper'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const field=q('[data-value]');const sync=()=>{let n=Number(field.value);if(!Number.isFinite(n))n=0;n=Math.min(10,Math.max(0,Math.round(n*2)/2));field.value=String(n);q('[data-minus]').disabled=n<=0;q('[data-plus]').disabled=n>=10;say(n+' 小时');};q('[data-minus]').onclick=()=>{field.stepDown();sync();};q('[data-plus]').onclick=()=>{field.stepUp();sync();};field.onchange=sync;sync();})(root, q, qa, say);
});
