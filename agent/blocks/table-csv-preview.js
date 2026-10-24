// 用法：先 <script src="blocks/table-csv-preview.js"></script>，再调用 window.INITS['table-csv-preview'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['table-csv-preview'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{q('[data-export]').onclick=()=>{const cell=value=>{let text=String(value);if(/^[=+@-]/.test(text))text="'"+text;return '"'+text.replaceAll('"','""')+'"';};q('[data-csv]').value=qa('tr').map(row=>[...row.cells].map(td=>cell(td.textContent)).join(',')).join('\r\n');q('[data-preview]').hidden=false;say('已生成表头和 '+qa('tbody tr').length+' 行数据，可检查后手动复制');};})(root, q, qa, say);
});
