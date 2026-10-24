// 用法：先 <script src="blocks/json-inspector.js"></script>，再调用 window.INITS['json-inspector'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['json-inspector'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{const render=(value,key,depth=0)=>{if(value&&typeof value==='object'&&depth<6){const details=document.createElement('details'),summary=document.createElement('summary');summary.textContent=key+' · '+(Array.isArray(value)?'数组':'对象')+' ('+Object.keys(value).length+')';details.append(summary);for(const [name,child] of Object.entries(value).slice(0,100))details.append(render(child,name,depth+1));return details;}const p=document.createElement('p');p.textContent=key+': '+JSON.stringify(value);return p;};const parse=()=>{try{const value=JSON.parse(q('[data-json]').value);q('[data-tree]').replaceChildren(render(value,'root'));say('解析成功，最多展开六层、每层显示前 100 项');}catch{say('JSON 格式错误，上一次结果已保留');}};q('[data-parse]').onclick=parse;q('[data-expand]').onclick=()=>qa('[data-tree] details').forEach(node=>node.open=true);q('[data-collapse]').onclick=()=>qa('[data-tree] details').forEach(node=>node.open=false);parse();})(root, q, qa, say);
});
