// 用法：先 <script src="blocks/allocation-total-form.js"></script>，再调用 window.INITS['allocation-total-form'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['allocation-total-form'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const validate=()=>{const values=[q('[data-one]'),q('[data-two]')];const valid=values.every(el=>el.value.trim()!==''&&Number.isFinite(Number(el.value))&&Number(el.value)>=0);const sum=values.reduce((n,el)=>n+Math.round(Number(el.value)*100),0);q('[data-confirm]').disabled=!valid||sum!==10000;say(!valid?'请输入非负金额':sum===10000?'已完整分配 100 元':sum>10000?'超出 '+((sum-10000)/100).toFixed(2)+' 元':'剩余 '+((10000-sum)/100).toFixed(2)+' 元');};qa('input').forEach(el=>{el.step='.01';el.oninput=validate;});q('[data-confirm]').onclick=()=>say('分配已在本次演示确认');validate();})(root, q, qa, say);
});
