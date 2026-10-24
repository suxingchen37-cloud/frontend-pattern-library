// 用法：先 <script src="blocks/search-paged-results.js"></script>，再调用 window.INITS['search-paged-results'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['search-paged-results'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const items=['门口主镜头','走廊主镜头','窗边主镜头','门口补拍','走廊补拍','窗边补拍','楼梯转场'];let page=0;const draw=()=>{const found=items.filter(text=>text.includes(q('[data-search]').value.trim())),pages=Math.ceil(found.length/3);page=Math.max(0,Math.min(page,pages-1));q('[data-result]').replaceChildren(...found.slice(page*3,page*3+3).map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));q('[data-page]').textContent=pages?(page+1)+' / '+pages:'0 / 0';q('[data-prev]').disabled=!page;q('[data-next]').disabled=!pages||page>=pages-1;say(found.length?'共 '+found.length+' 条结果':'没有匹配结果');};q('[data-search]').oninput=()=>{page=0;draw();};q('[data-prev]').onclick=()=>{page--;draw();};q('[data-next]').onclick=()=>{page++;draw();};draw();})(root, q, qa, say);
});
