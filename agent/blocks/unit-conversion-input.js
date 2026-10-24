// 用法：先 <script src="blocks/unit-conversion-input.js"></script>，再调用 window.INITS['unit-conversion-input'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['unit-conversion-input'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const bind=(from,to,factor)=>{q(from).step='any';q(from).oninput=()=>{const text=q(from).value,n=Number(text);if(!text.trim()||!Number.isFinite(n)||n<0){q(to).value='';q(from).setAttribute('aria-invalid','true');say('请输入非负长度');return;}q(from).removeAttribute('aria-invalid');q(to).removeAttribute('aria-invalid');q(to).value=String(Math.round(n*factor*10000)/10000);say('已换算，最后编辑值保留');};};bind('[data-cm]','[data-inch]',1/2.54);bind('[data-inch]','[data-cm]',2.54);})(root, q, qa, say);
});
