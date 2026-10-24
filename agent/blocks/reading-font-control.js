// 用法：先 <script src="blocks/reading-font-control.js"></script>，再调用 window.INITS['reading-font-control'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['reading-font-control'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const field=q('[data-size]');const apply=()=>{q('[data-article]').style.setProperty('--reader-size',field.value+'px');say('正文字号 '+field.value+'px');};field.oninput=apply;q('[data-reset]').onclick=()=>{field.value='16';apply();};apply();})(root, q, qa, say);
});
