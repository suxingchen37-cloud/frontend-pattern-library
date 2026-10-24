// 用法：先 <script src="blocks/gated-review-navigation.js"></script>，再调用 window.INITS['gated-review-navigation'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['gated-review-navigation'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let stage='准备',reviewed=false;const sync=()=>{const ready=qa('[data-ready]').every(el=>el.checked);if(!ready){reviewed=false;stage='准备';}q('[data-review]').disabled=!ready;q('[data-deliver]').disabled=!ready||!reviewed;q('[data-stage]').textContent='当前阶段：'+stage;say(ready?'准备项已齐全':'请先完成两项准备确认');};qa('[data-ready]').forEach(el=>el.onchange=sync);q('[data-prepare]').onclick=()=>{stage='准备';sync();};q('[data-review]').onclick=()=>{reviewed=true;stage='审阅';sync();};q('[data-deliver]').onclick=()=>{stage='交付';sync();};sync();})(root, q, qa, say);
});
