// 用法：先 <script src="blocks/exclusive-help-disclosures.js"></script>，再调用 window.INITS['exclusive-help-disclosures'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['exclusive-help-disclosures'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{qa('[data-help]').forEach(item=>item.addEventListener('toggle',()=>{if(item.open){qa('[data-help]').forEach(other=>{if(other!==item)other.open=false;});say(item.querySelector('summary').textContent+'已展开');}}));})(root, q, qa, say);
});
