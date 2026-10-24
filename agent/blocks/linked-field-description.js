// 用法：先 <script src="blocks/linked-field-description.js"></script>，再调用 window.INITS['linked-field-description'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['linked-field-description'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const help=q('[data-helptext]'),input=q('[data-name]'),button=q('[data-help]');help.id='workflow-description-'+Math.random().toString(36).slice(2);button.setAttribute('aria-controls',help.id);button.setAttribute('aria-expanded','false');button.onclick=()=>{help.hidden=!help.hidden;button.setAttribute('aria-expanded',String(!help.hidden));button.textContent=help.hidden?'显示填写说明':'收起填写说明';if(help.hidden)input.removeAttribute('aria-describedby');else input.setAttribute('aria-describedby',help.id);say(help.hidden?'填写说明已收起':'填写说明已关联到输入字段');};})(root, q, qa, say);
});
