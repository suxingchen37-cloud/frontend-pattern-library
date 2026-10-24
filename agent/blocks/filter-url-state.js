// 用法：先 <script src="blocks/filter-url-state.js"></script>，再调用 window.INITS['filter-url-state'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['filter-url-state'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const select=q('[data-filter]'),allowed=['all','pending','done'];const stored=new URL(location.href).searchParams.get('asset-status');select.value=allowed.includes(stored)?stored:'all';const draw=write=>{qa('[data-status]').forEach(item=>item.hidden=select.value!=='all'&&item.dataset.status!==select.value);if(write){const url=new URL(location.href);if(select.value==='all')url.searchParams.delete('asset-status');else url.searchParams.set('asset-status',select.value);try{history.replaceState(history.state,'',url);}catch{say('此预览地址不能写入参数；筛选仍可使用');return;}}say('当前：'+select.selectedOptions[0].textContent);};select.onchange=()=>draw(true);q('[data-reset]').onclick=()=>{select.value='all';draw(true);};draw(false);})(root, q, qa, say);
});
