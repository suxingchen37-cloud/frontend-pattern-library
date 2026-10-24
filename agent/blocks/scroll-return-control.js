// 用法：先 <script src="blocks/scroll-return-control.js"></script>，再调用 window.INITS['scroll-return-control'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['scroll-return-control'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const area=q('[data-scroll]'),button=q('[data-top]');const sync=()=>{button.disabled=area.scrollTop<=8;button.textContent=button.disabled?'已在顶部':'返回顶部';};area.onscroll=sync;button.onclick=()=>{area.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});area.focus({preventScroll:true});say('返回清单顶部');};sync();})(root, q, qa, say);
});
