// 用法：先 <script src="blocks/content-version-preview.js"></script>，再调用 window.INITS['content-version-preview'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['content-version-preview'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const versions={v1:'门口镜头。',v2:'门口镜头，先交代空间。'};const draw=()=>{q('[data-preview]').textContent='只读预览：'+versions[q('[data-version]').value];};q('[data-version]').onchange=draw;q('[data-restore]').onclick=()=>{q('[data-draft]').value=versions[q('[data-version]').value];say('所选历史版本已恢复到本次演示草稿');};draw();})(root, q, qa, say);
});
