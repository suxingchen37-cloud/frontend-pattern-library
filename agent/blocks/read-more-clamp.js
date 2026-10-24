// 用法：先 <script src="blocks/read-more-clamp.js"></script>，再调用 window.INITS['read-more-clamp'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['read-more-clamp'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-toggle]').onclick=()=>{const expanded=q('[data-toggle]').getAttribute('aria-expanded')!=='true';q('[data-toggle]').setAttribute('aria-expanded',String(expanded));q('[data-text]').dataset.expanded=String(expanded);q('[data-toggle]').textContent=expanded?'收起全文':'展开全文';say(expanded?'全文已展开':'已收回摘要');};})(root, q, qa, say);
});
