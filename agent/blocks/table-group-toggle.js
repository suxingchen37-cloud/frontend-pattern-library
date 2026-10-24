// 用法：先 <script src="blocks/table-group-toggle.js"></script>，再调用 window.INITS['table-group-toggle'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-group-toggle'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{qa('[data-group]').forEach(button=>button.onclick=()=>{const expanded=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(expanded));qa('[data-in]').filter(row=>row.dataset.in===button.dataset.group).forEach(row=>row.hidden=!expanded);say(button.textContent+(expanded?'已展开':'已收起'));});})(root, q, qa, say);
});
