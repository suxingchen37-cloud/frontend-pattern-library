// 用法：先 <script src="blocks/approval-state-flow.js"></script>，再调用 window.INITS['approval-state-flow'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['approval-state-flow'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let state='draft';const draw=()=>{q('[data-state]').textContent='本地状态：'+{draft:'草稿',review:'待审阅',approved:'已批准'}[state];q('[data-submit]').disabled=state!=='draft';q('[data-approve]').disabled=q('[data-revise]').disabled=state!=='review';say('可用操作已按当前状态更新');};q('[data-submit]').onclick=()=>{state='review';draw();};q('[data-approve]').onclick=()=>{state='approved';draw();};q('[data-revise]').onclick=()=>{state='draft';draw();};q('[data-reset]').onclick=()=>{state='draft';draw();};draw();})(root, q, qa, say);
});
