// 用法：先 <script src="blocks/unsaved-navigation-guard.js"></script>，再调用 window.INITS['unsaved-navigation-guard'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['unsaved-navigation-guard'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const draft=q('[data-draft]'),dialog=q('[data-dialog]');let saved=draft.value;const leave=()=>say('已切到素材视图（演示）');q('[data-save]').onclick=()=>{saved=draft.value;say('当前草稿已存入本次演示');};q('[data-leave]').onclick=()=>{if(draft.value===saved)leave();else dialog.showModal();};q('[data-stay]').onclick=()=>{dialog.close();draft.focus();};q('[data-discard]').onclick=()=>{draft.value=saved;dialog.close();leave();};})(root, q, qa, say);
});
