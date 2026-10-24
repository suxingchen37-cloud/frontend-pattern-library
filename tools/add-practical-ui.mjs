// Practical UI batch: forty independent, framework-free patterns.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ASSETS = [];
function add(id, cat, t, en, d, body, css, run, tags) {
  const p = '.d-' + id;
  const base = `${p}{width:100%;max-width:430px;min-width:0;color:var(--ink);font:inherit;font-size:14px;line-height:1.5;overflow-wrap:anywhere}
${p} *,${p} *::before,${p} *::after{box-sizing:border-box}
${p} [hidden]{display:none!important}
${p} .d-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:8px 0}
${p} .d-note{display:block;margin:8px 0 0;color:var(--muted);font-size:12px;min-height:1.5em}
${p} label{display:block;margin:8px 0}
${p} input,${p} select,${p} textarea,${p} button{font:inherit;color:inherit;max-width:100%;min-width:0}
${p} input:not([type=checkbox]):not([type=radio]),${p} select,${p} textarea{width:100%;padding:8px;border:1px solid var(--line);border-radius:var(--radius-control);background:var(--paper)}
${p} button{padding:6px 10px;border:1px solid var(--line);border-radius:var(--radius-control);background:var(--paper);cursor:pointer}
${p} button:disabled{opacity:.5;cursor:default}
${p} :focus-visible{outline:2px solid var(--ink);outline-offset:3px}
${p} [aria-invalid=true]{border-color:var(--warn)!important}
${p} .d-scroll{max-width:100%;overflow:auto}
${p} table{width:100%;border-collapse:collapse;font-size:12px;text-align:left}
${p} th,${p} td{padding:7px;border-bottom:1px solid var(--line);vertical-align:top}
${p} caption{text-align:left;font-weight:600;margin-bottom:8px}
${p} progress{width:100%;accent-color:var(--ink)}
${p} pre{white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px}
${p} h3,${p} p{margin:8px 0}
${p} [aria-pressed=true],${p} [aria-selected=true]{border-color:var(--ink);font-weight:650}
${p} .d-grow{flex:1;min-width:100px}
${p} summary{cursor:pointer;padding:6px 0}
${p} ul,${p} ol{padding-left:24px}
`;
  ASSETS.push({ id, cat, t, en, d,
    body: `<section class="d-${id}" aria-label="${t}">${body}<output class="d-note" data-out role="status" aria-live="polite"></output></section>`,
    css: base + css.replaceAll('$ROOT', p),
    init: `root => {\n const q = selector => root.querySelector(selector);\n const qa = selector => [...root.querySelectorAll(selector)];\n const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };\n (${run.toString()})(root, q, qa, say);\n}`,
    source: 'v5', motion: '无动效', tags });
}

// Forms: preserve values, make dependencies and validation explicit.
add('password-visibility', '表单', '密码显隐', 'password visibility',
  '切换显隐时保留输入值和光标位置，按钮同时说明当前状态，避免重新输入或误判是否已隐藏。',
  '<label>演示密码<input data-password type="password" autocomplete="off" value="Example-42"></label><button type="button" data-toggle aria-pressed="false">显示密码</button>', '',
  (root, q, qa, say) => {
    const input=q('[data-password]'), button=q('[data-toggle]');
    button.onclick=()=>{const start=input.selectionStart,end=input.selectionEnd;const shown=input.type==='password';input.type=shown?'text':'password';button.textContent=shown?'隐藏密码':'显示密码';button.setAttribute('aria-pressed',String(shown));if(start!==null)input.setSelectionRange(start,end);say(shown?'密码当前可见':'密码已隐藏');};
  }, ['密码','显隐','输入']);

add('clearable-input', '表单', '可清空输入', 'clearable input',
  '清空动作只在有内容时可用，执行后将焦点交回输入框，便于连续重输而不改变键盘路径。',
  '<label>搜索素材<input data-input type="search" value="走廊夜景"></label><button type="button" data-clear>清空</button>', '',
  (root,q,qa,say)=>{const input=q('[data-input]'),clear=q('[data-clear]');const sync=()=>{clear.disabled=!input.value;};input.oninput=sync;clear.onclick=()=>{input.value='';sync();input.focus();input.dispatchEvent(new Event('input',{bubbles:true}));say('输入已清空');};sync();}, ['输入','清空','焦点']);

add('textarea-auto-grow', '表单', '文本框随内容增高', 'auto growing textarea',
  '短备注不占用大块空白，长内容逐步扩展到上限后才滚动，删除内容时也能回缩。',
  '<label>镜头备注<textarea data-text rows="2">演员停在门口，先看门牌，再推门。</textarea></label>',
  '$ROOT textarea{resize:vertical;max-height:220px;overflow:auto}',
  (root,q,qa,say)=>{const field=q('[data-text]');const resize=()=>{field.style.height='auto';field.style.height=Math.min(220,field.scrollHeight+2)+'px';};field.oninput=resize;resize();}, ['备注','文本框','自适应']);

add('conditional-fields', '表单', '条件字段', 'conditional required fields',
  '只有相关选项被选中时才展示并启用附加字段，隐藏字段不应继续参与校验或提交。',
  '<label>交付方式<select data-mode><option value="local">现场交付</option><option value="courier">快递交付</option></select></label><label data-address-label hidden>收件地址<input data-address disabled></label><button data-check type="button">检查交付信息</button>', '',
  (root,q,qa,say)=>{const mode=q('[data-mode]'),address=q('[data-address]');const sync=()=>{const needed=mode.value==='courier';q('[data-address-label]').hidden=!needed;address.disabled=!needed;address.required=needed;address.removeAttribute('aria-invalid');say(needed?'请补充收件地址':'现场交付无需地址');};mode.onchange=sync;q('[data-check]').onclick=()=>{const invalid=address.required&&!address.value.trim();address.setAttribute('aria-invalid',String(invalid));say(invalid?'收件地址不能为空':'演示校验通过');if(invalid)address.focus();};sync();}, ['条件','必填','表单']);

add('dependent-selects', '表单', '联动选项', 'dependent selects',
  '上级分类变化后重建下级选项并重置旧值，防止把不适用的导出格式带入下一步。',
  '<label>素材类型<select data-kind><option value="image">图片</option><option value="video">视频</option></select></label><label>导出格式<select data-format></select></label>', '',
  (root,q,qa,say)=>{const kinds={image:['PNG','JPEG','WebP'],video:['MP4','WebM']},kind=q('[data-kind]'),format=q('[data-format]');const rebuild=()=>{format.replaceChildren(...kinds[kind.value].map(value=>{const option=document.createElement('option');option.value=value;option.textContent=value;return option;}));say('可用格式已更新为 '+format.value);};kind.onchange=rebuild;format.onchange=()=>say('选择格式：'+format.value);rebuild();}, ['联动','选择','格式']);

add('quantity-stepper', '表单', '有边界的数量步进', 'bounded quantity stepper',
  '加减按钮与直接输入使用相同的边界和步长，到达边界时禁用对应按钮，避免显示无法提交的数量。',
  '<label>演示时长（小时）<input data-value type="number" min="0" max="10" step="0.5" value="1.5"></label><div class="d-row"><button type="button" data-minus aria-label="减少半小时">− 0.5</button><button type="button" data-plus aria-label="增加半小时">＋ 0.5</button></div>', '',
  (root,q,qa,say)=>{const field=q('[data-value]');const sync=()=>{let n=Number(field.value);if(!Number.isFinite(n))n=0;n=Math.min(10,Math.max(0,Math.round(n*2)/2));field.value=String(n);q('[data-minus]').disabled=n<=0;q('[data-plus]').disabled=n>=10;say(n+' 小时');};q('[data-minus]').onclick=()=>{field.stepDown();sync();};q('[data-plus]').onclick=()=>{field.stepUp();sync();};field.onchange=sync;sync();}, ['数量','边界','步进']);

add('date-range-validation', '表单', '起止日期校验', 'date range validation',
  '起止日期放在同一处判断，开始日期变化时同步结束日期下限，并明确指出顺序错误。',
  '<label>开始日期<input data-start type="date" value="2026-10-25" required></label><label>结束日期<input data-end type="date" value="2026-10-27" required></label>', '',
  (root,q,qa,say)=>{const start=q('[data-start]'),end=q('[data-end]');const check=()=>{end.min=start.value;const bad=!start.value||!end.value||end.value<start.value;end.setAttribute('aria-invalid',String(bad));say(bad?'请填写日期，结束日期不能早于开始日期':start.value+' 至 '+end.value);};start.oninput=check;end.oninput=check;check();}, ['日期','范围','校验']);

add('validation-summary', '表单', '可定位的错误摘要', 'focusable error summary',
  '多个字段同时出错时先给完整摘要，每条错误能把焦点送到对应字段，修正后保留其他输入。',
  '<form data-form novalidate><label>项目名称<input data-name required></label><label>通知邮箱<input data-email type="email" required></label><button type="submit">检查表单</button></form><div data-summary tabindex="-1" hidden><b>请处理以下字段</b><ul data-errors></ul></div>', '',
  (root,q,qa,say)=>{q('[data-form]').onsubmit=event=>{event.preventDefault();const errors=[];for(const [selector,message] of [['[data-name]','填写项目名称'],['[data-email]','填写有效邮箱']]){const field=q(selector),bad=!field.value.trim()||!field.validity.valid;field.setAttribute('aria-invalid',String(bad));if(bad)errors.push({field,message});}q('[data-errors]').replaceChildren(...errors.map(({field,message})=>{const li=document.createElement('li'),button=document.createElement('button');button.type='button';button.textContent=message;button.onclick=()=>field.focus();li.append(button);return li;}));q('[data-summary]').hidden=!errors.length;if(errors.length)q('[data-summary]').focus();say(errors.length?errors.length+' 项需要修正':'演示校验通过，可提交');};}, ['错误摘要','焦点','校验']);

// Tables: each module contains its own sample data and behavior.
const head='<thead><tr><th scope="col">镜头</th><th scope="col">状态</th><th scope="col">时长</th></tr></thead>';
const rows='<tbody><tr><td>门口</td><td>待拍</td><td>12</td></tr><tr><td>走廊</td><td>完成</td><td>18</td></tr><tr><td>窗边</td><td>待拍</td><td>8</td></tr><tr><td>楼梯</td><td>完成</td><td>15</td></tr></tbody>';
const table='<div class="d-scroll"><table><caption>样例镜头</caption>'+head+rows+'</table></div>';

add('table-column-toggle', '表格', '显示与隐藏列', 'column visibility',
  '允许暂时隐藏次要列，把比较空间留给当前任务；行数据保留，重新显示时不需要重新加载。',
  '<fieldset><legend>显示列</legend><label><input type="checkbox" data-column="1" checked> 状态</label><label><input type="checkbox" data-column="2" checked> 时长</label></fieldset>'+table, '',
  (root,q,qa,say)=>{qa('[data-column]').forEach(box=>box.onchange=()=>{qa('tr').forEach(row=>{row.children[Number(box.dataset.column)].hidden=!box.checked;});say('已显示 '+(1+qa('[data-column]:checked').length)+' 列');});}, ['列','显示','表格']);

add('table-global-search', '表格', '跨列表格搜索', 'global table search',
  '在同一次输入中匹配所有可见字段，保留表头并报告无结果，便于在短表里快速定位。',
  '<label>搜索镜头、状态或时长<input data-search type="search" placeholder="试试：待拍"></label>'+table, '',
  (root,q,qa,say)=>{const filter=()=>{const needle=q('[data-search]').value.trim().toLocaleLowerCase();let count=0;qa('tbody tr').forEach(row=>{row.hidden=!row.textContent.toLocaleLowerCase().includes(needle);if(!row.hidden)count++;});say(count?count+' 条匹配':'没有匹配项，请修改关键词');};q('[data-search]').oninput=filter;filter();}, ['搜索','表格','空结果']);

add('table-multi-sort', '表格', '双字段排序', 'two key table sorting',
  '先按工作状态归组，再按时长排序，让相同时长和相同状态的记录仍有可预测的顺序。',
  '<div class="d-row"><label class="d-grow">第一关键字<select data-primary><option value="1">状态</option><option value="2">时长</option><option value="0">镜头</option></select></label><label class="d-grow">第二关键字<select data-secondary><option value="2">时长</option><option value="0">镜头</option><option value="1">状态</option></select></label></div>'+table, '',
  (root,q,qa,say)=>{const original=qa('tbody tr');const compare=(a,b,index)=>index===2?Number(a.children[index].textContent)-Number(b.children[index].textContent):a.children[index].textContent.localeCompare(b.children[index].textContent,'zh-CN');const sort=()=>{const first=Number(q('[data-primary]').value),second=Number(q('[data-secondary]').value);q('tbody').replaceChildren(...original.slice().sort((a,b)=>compare(a,b,first)||compare(a,b,second)||original.indexOf(a)-original.indexOf(b)));say('已按所选关键字升序排列');};q('[data-primary]').onchange=sort;q('[data-secondary]').onchange=sort;sort();}, ['排序','多字段','表格']);

add('table-page-size', '表格', '分页与每页条数', 'table pagination size',
  '切换每页条数时回到第一页，并在边界禁用翻页，避免留在已经不存在的页码。',
  '<label>每页条数<select data-size><option>2</option><option>3</option><option>4</option></select></label>'+table+'<div class="d-row"><button type="button" data-prev>上一页</button><span data-page></span><button type="button" data-next>下一页</button></div>', '',
  (root,q,qa,say)=>{const records=qa('tbody tr');let page=0;const draw=()=>{const size=Number(q('[data-size]').value),pages=Math.ceil(records.length/size);page=Math.min(page,pages-1);records.forEach((row,index)=>row.hidden=index<page*size||index>=(page+1)*size);q('[data-prev]').disabled=page===0;q('[data-next]').disabled=page===pages-1;q('[data-page]').textContent=(page+1)+' / '+pages;say('共 '+records.length+' 条');};q('[data-prev]').onclick=()=>{page--;draw();};q('[data-next]').onclick=()=>{page++;draw();};q('[data-size]').onchange=()=>{page=0;draw();};draw();}, ['分页','条数','边界']);

add('table-cell-copy', '表格', '单元格复制', 'copy table cell',
  '只复制被点中的字段而不夹带整行内容；浏览器不能自动复制时展示可选中的原文。',
  '<table><caption>镜头编号</caption><tbody><tr><th scope="row">门口</th><td><button type="button" data-copy="SC-001">SC-001</button></td></tr><tr><th scope="row">走廊</th><td><button type="button" data-copy="SC-002">SC-002</button></td></tr></tbody></table><label data-fallback hidden>请手动复制<input data-manual readonly></label>', '',
  (root,q,qa,say)=>{qa('[data-copy]').forEach(button=>button.onclick=async()=>{try{await navigator.clipboard.writeText(button.dataset.copy);q('[data-fallback]').hidden=true;say('已复制 '+button.dataset.copy);}catch{q('[data-fallback]').hidden=false;q('[data-manual]').value=button.dataset.copy;q('[data-manual]').focus();q('[data-manual]').select();say('自动复制不可用，已选中编号');}});}, ['复制','单元格','降级']);

add('table-column-filters', '表格', '组合列筛选', 'combined column filters',
  '文本列与状态列共同缩小结果范围，清除操作同时复位所有条件，避免隐藏筛选继续生效。',
  '<label>镜头名包含<input data-name type="search"></label><label>工作状态<select data-status><option value="">全部状态</option><option>待拍</option><option>完成</option></select></label><button type="button" data-reset>清除条件</button>'+table, '',
  (root,q,qa,say)=>{const apply=()=>{let count=0;qa('tbody tr').forEach(row=>{const match=row.cells[0].textContent.includes(q('[data-name]').value)&&(!q('[data-status]').value||row.cells[1].textContent===q('[data-status]').value);row.hidden=!match;if(match)count++;});say(count+' 条匹配');};q('[data-name]').oninput=apply;q('[data-status]').onchange=apply;q('[data-reset]').onclick=()=>{q('[data-name]').value='';q('[data-status]').value='';apply();};apply();}, ['列筛选','组合','重置']);

add('table-group-toggle', '表格', '分组行折叠', 'collapsible row groups',
  '按拍摄区域折叠成组记录，组标题保留数量和展开状态，适合先浏览分组再查看明细。',
  '<table><caption>样例分区</caption><tbody><tr><th colspan="2"><button data-group="inside" type="button" aria-expanded="true">室内 · 2 条</button></th></tr><tr data-in="inside"><td>门口</td><td>待拍</td></tr><tr data-in="inside"><td>走廊</td><td>完成</td></tr><tr><th colspan="2"><button data-group="outside" type="button" aria-expanded="true">室外 · 1 条</button></th></tr><tr data-in="outside"><td>庭院</td><td>待拍</td></tr></tbody></table>', '',
  (root,q,qa,say)=>{qa('[data-group]').forEach(button=>button.onclick=()=>{const expanded=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(expanded));qa('[data-in]').filter(row=>row.dataset.in===button.dataset.group).forEach(row=>row.hidden=!expanded);say(button.textContent+(expanded?'已展开':'已收起'));});}, ['分组','折叠','明细']);

add('table-csv-preview', '表格', 'CSV 导出预览', 'CSV export preview',
  '导出前展示字段顺序与转义后的文本，逗号和引号不会拆错列，并对可能被表格执行的公式前缀作文本处理。',
  table+'<button type="button" data-export>生成 CSV 预览</button><label data-preview hidden>CSV 文本<textarea data-csv rows="5" readonly></textarea></label>', '',
  (root,q,qa,say)=>{q('[data-export]').onclick=()=>{const cell=value=>{let text=String(value);if(/^[=+@-]/.test(text))text="'"+text;return '"'+text.replaceAll('"','""')+'"';};q('[data-csv]').value=qa('tr').map(row=>[...row.cells].map(td=>cell(td.textContent)).join(',')).join('\r\n');q('[data-preview]').hidden=false;say('已生成表头和 '+qa('tbody tr').length+' 行数据，可检查后手动复制');};}, ['CSV','导出','转义']);

// Navigation: use native controls and preserve a predictable keyboard route.
add('tabs-keyboard-roving', '导航', '键盘页签', 'roving keyboard tabs',
  'Tab 只进入当前页签，方向键在同组切换并同步面板，避免每个页签都占一次 Tab。',
  '<div role="tablist" aria-label="项目视图" class="d-row"><button type="button" role="tab">概览</button><button type="button" role="tab">素材</button><button type="button" role="tab">交付</button></div><div role="tabpanel">项目目标与当前进度。</div><div role="tabpanel" hidden>图片、片段与声音素材。</div><div role="tabpanel" hidden>导出文件与交付清单。</div>', '',
  (root,q,qa,say)=>{const tabs=qa('[role=tab]'),panels=qa('[role=tabpanel]'),prefix='tabs-'+Math.random().toString(36).slice(2);const choose=(index,focus=false)=>{tabs.forEach((tab,i)=>{tab.id=prefix+'-'+i;tab.tabIndex=i===index?0:-1;tab.setAttribute('aria-selected',String(i===index));tab.setAttribute('aria-controls',prefix+'-panel-'+i);panels[i].id=prefix+'-panel-'+i;panels[i].setAttribute('aria-labelledby',tab.id);panels[i].tabIndex=0;panels[i].hidden=i!==index;});if(focus)tabs[index].focus();};tabs.forEach((tab,index)=>{tab.onclick=()=>choose(index);tab.onkeydown=event=>{let next=index;if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();choose(next,true);};});choose(0);}, ['页签','键盘','焦点']);

add('tree-keyboard-navigation', '导航', '键盘树导航', 'keyboard tree navigation',
  '折叠层级仍保留当前位置，方向键展开、回到父级和移动到可见节点，长目录不必逐项 Tab。',
  '<ul role="tree" aria-label="样例文件"><li role="none"><button type="button" role="treeitem" aria-expanded="false">素材</button><ul role="group" hidden><li role="none"><button type="button" role="treeitem">镜头 A.mp4</button></li><li role="none"><button type="button" role="treeitem">环境声.wav</button></li></ul></li><li role="none"><button type="button" role="treeitem">交付说明.md</button></li></ul>',
  '$ROOT [role=tree],$ROOT [role=group]{list-style:none;padding-left:16px}$ROOT [role=treeitem]{display:block;margin:4px 0}',
  (root,q,qa,say)=>{const items=qa('[role=treeitem]');const group=button=>button.parentElement.querySelector(':scope > [role=group]');const focus=button=>{items.forEach(item=>item.tabIndex=item===button?0:-1);button.focus();say(button.textContent);};items.forEach(button=>{button.tabIndex=-1;button.onclick=()=>{const child=group(button);if(child){child.hidden=!child.hidden;button.setAttribute('aria-expanded',String(!child.hidden));}focus(button);};button.onkeydown=event=>{const visible=items.filter(item=>!item.closest('[hidden]')),index=visible.indexOf(button),child=group(button);let target;if(event.key==='ArrowDown')target=visible[Math.min(index+1,visible.length-1)];else if(event.key==='ArrowUp')target=visible[Math.max(0,index-1)];else if(event.key==='Home')target=visible[0];else if(event.key==='End')target=visible.at(-1);else if(event.key==='ArrowRight'&&child){if(child.hidden){child.hidden=false;button.setAttribute('aria-expanded','true');}else target=child.querySelector('[role=treeitem]');}else if(event.key==='ArrowLeft'){if(child&&!child.hidden){child.hidden=true;button.setAttribute('aria-expanded','false');}else target=button.parentElement.parentElement.closest('li')?.querySelector(':scope > [role=treeitem]');}else return;event.preventDefault();if(target)focus(target);};});items[0].tabIndex=0;}, ['树','键盘','目录']);

add('navigation-history', '导航', '局部前进后退', 'local navigation history',
  '局部工具面板保留访问栈，后退后打开新位置会丢弃旧的前进分支，避免展示不存在的路径。',
  '<nav aria-label="样例位置" class="d-row"><button type="button" data-go="概览">概览</button><button type="button" data-go="素材">素材</button><button type="button" data-go="交付">交付</button></nav><div class="d-row"><button data-back type="button">后退</button><button data-forward type="button">前进</button></div><h3 data-current></h3>', '',
  (root,q,qa,say)=>{let history=['概览'],cursor=0;const draw=()=>{q('[data-current]').textContent=history[cursor];q('[data-back]').disabled=cursor===0;q('[data-forward]').disabled=cursor===history.length-1;say('访问位置 '+(cursor+1)+' / '+history.length);};qa('[data-go]').forEach(button=>button.onclick=()=>{if(history[cursor]===button.dataset.go)return;history=history.slice(0,cursor+1);history.push(button.dataset.go);cursor++;draw();});q('[data-back]').onclick=()=>{cursor--;draw();};q('[data-forward]').onclick=()=>{cursor++;draw();};draw();}, ['导航','历史','返回']);

add('nested-action-menu', '导航', '分层操作入口', 'nested action disclosure',
  '将同类但不常用的操作放在可展开层级里，保留原生键盘操作，不把所有动作挤成一排。',
  '<details><summary>项目操作</summary><button data-action="复制项目" type="button">复制项目</button><details><summary>导出格式</summary><div class="d-row"><button data-action="导出 JSON" type="button">JSON</button><button data-action="导出 Markdown" type="button">Markdown</button></div></details></details>', '',
  (root,q,qa,say)=>{qa('[data-action]').forEach(button=>button.onclick=()=>{say('已选择：'+button.dataset.action+'（演示，不下载文件）');qa('details').forEach(item=>item.open=false);q('summary').focus();});}, ['分层','操作','原生控件']);

add('filter-url-state', '导航', '筛选写入地址', 'shareable filter URL',
  '把当前筛选保存在地址参数中，复制地址或刷新后可以恢复相同视图，同时保留其他参数。',
  '<label>状态<select data-filter><option value="all">全部</option><option value="pending">待拍</option><option value="done">完成</option></select></label><ul><li data-status="pending">门口 · 待拍</li><li data-status="done">走廊 · 完成</li><li data-status="pending">窗边 · 待拍</li></ul><button data-reset type="button">清除地址中的筛选</button>', '',
  (root,q,qa,say)=>{const select=q('[data-filter]'),allowed=['all','pending','done'];const stored=new URL(location.href).searchParams.get('asset-status');select.value=allowed.includes(stored)?stored:'all';const draw=write=>{qa('[data-status]').forEach(item=>item.hidden=select.value!=='all'&&item.dataset.status!==select.value);if(write){const url=new URL(location.href);if(select.value==='all')url.searchParams.delete('asset-status');else url.searchParams.set('asset-status',select.value);try{history.replaceState(history.state,'',url);}catch{say('此预览地址不能写入参数；筛选仍可使用');return;}}say('当前：'+select.selectedOptions[0].textContent);};select.onchange=()=>draw(true);q('[data-reset]').onclick=()=>{select.value='all';draw(true);};draw(false);}, ['地址','筛选','恢复']);

add('scroll-return-control', '导航', '滚动后返回顶部', 'scroll return control',
  '只有离开顶部后才提供返回操作，按钮控制自己的滚动区域，并在减少动效模式下直接定位。',
  '<div data-scroll tabindex="0" aria-label="可滚动的样例清单" style="--demo-height:150px"><ol>'+Array.from({length:12},(_,i)=>'<li>镜头 '+(i+1)+' · 查看机位与备注</li>').join('')+'</ol></div><button data-top type="button" disabled>已在顶部</button>',
  '$ROOT [data-scroll]{max-height:var(--demo-height,150px);overflow:auto;border-block:1px solid var(--line)}$ROOT li{padding:8px 0}',
  (root,q,qa,say)=>{const area=q('[data-scroll]'),button=q('[data-top]');const sync=()=>{button.disabled=area.scrollTop<=8;button.textContent=button.disabled?'已在顶部':'返回顶部';};area.onscroll=sync;button.onclick=()=>{area.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});area.focus({preventScroll:true});say('返回清单顶部');};sync();}, ['滚动','返回顶部','减少动效']);

add('overflow-tab-scroll', '导航', '溢出页签滚动', 'overflowing tab navigation',
  '页签数量超过可用宽度时保留横向浏览和当前选中项，不通过缩小文字掩盖溢出。',
  '<nav class="d-row" aria-label="样例项目阶段"><button data-left type="button" aria-label="向前浏览阶段">‹</button><div data-strip>'+['立项','剧本','选角','勘景','排练','拍摄','剪辑','声音','交付'].map((t,i)=>'<button data-tab type="button" aria-pressed="'+(i===0)+'">'+t+'</button>').join('')+'</div><button data-right type="button" aria-label="向后浏览阶段">›</button></nav>',
  '$ROOT [data-strip]{display:flex;flex:1;min-width:0;gap:6px;overflow:auto;scrollbar-width:thin}$ROOT [data-tab]{flex:0 0 auto}',
  (root,q,qa,say)=>{const strip=q('[data-strip]');const sync=()=>{q('[data-left]').disabled=strip.scrollLeft<=1;q('[data-right]').disabled=strip.scrollLeft+strip.clientWidth>=strip.scrollWidth-1;};q('[data-left]').onclick=()=>strip.scrollBy({left:-160});q('[data-right]').onclick=()=>strip.scrollBy({left:160});strip.onscroll=sync;qa('[data-tab]').forEach(button=>button.onclick=()=>{qa('[data-tab]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));button.scrollIntoView({block:'nearest',inline:'nearest'});say('当前阶段：'+button.textContent);sync();});sync();if(typeof ResizeObserver!=='undefined'){const observer=new ResizeObserver(()=>{if(!root.isConnected)observer.disconnect();else sync();});observer.observe(strip);}}, ['页签','溢出','导航']);

add('unsaved-navigation-guard', '导航', '未保存离开确认', 'unsaved navigation guard',
  '只有草稿确实改变时才阻止切换，允许继续编辑或明确丢弃，并把焦点交回原位置。',
  '<label>草稿<textarea data-draft rows="2">门口镜头待补拍。</textarea></label><div class="d-row"><button data-save type="button">保存到本次演示</button><button data-leave type="button">切到素材视图</button></div><dialog data-dialog aria-label="未保存的草稿"><p>草稿尚未保存，是否丢弃修改？</p><div class="d-row"><button data-stay type="button" autofocus>继续编辑</button><button data-discard type="button">丢弃并离开</button></div></dialog>',
  '$ROOT dialog{max-width:min(360px,90vw);background:var(--paper);color:var(--ink);border:1px solid var(--line);border-radius:var(--radius-control);padding:16px}$ROOT dialog::backdrop{background:#0005}',
  (root,q,qa,say)=>{const draft=q('[data-draft]'),dialog=q('[data-dialog]');let saved=draft.value;const leave=()=>say('已切到素材视图（演示）');q('[data-save]').onclick=()=>{saved=draft.value;say('当前草稿已存入本次演示');};q('[data-leave]').onclick=()=>{if(draft.value===saved)leave();else dialog.showModal();};q('[data-stay]').onclick=()=>{dialog.close();draft.focus();};q('[data-discard]').onclick=()=>{draft.value=saved;dialog.close();leave();};}, ['草稿','离开确认','焦点']);

// Feedback: network and saving behaviors are explicit local simulations.
add('submit-state-button', '反馈', '防重复提交状态', 'submit state button',
  '提交期间锁定同一个动作，失败后可重试；演示不会发送请求或保存真实项目。',
  '<label><input data-fail type="checkbox"> 模拟请求失败</label><button data-submit type="button">模拟提交</button><span data-count class="d-note">已提交 0 次</span>', '',
  (root,q,qa,say)=>{let busy=false,count=0;const button=q('[data-submit]');button.onclick=()=>{if(busy)return;busy=true;const fail=q('[data-fail]').checked;button.disabled=true;button.setAttribute('aria-busy','true');button.textContent='正在提交…';count++;q('[data-count]').textContent='已提交 '+count+' 次';setTimeout(()=>{busy=false;if(!root.isConnected)return;button.disabled=false;button.removeAttribute('aria-busy');button.textContent=fail?'重试提交':'再次提交';say(fail?'模拟失败，内容未提交':'模拟提交成功');},500);};}, ['提交','重复请求','重试']);

add('retry-countdown', '反馈', '可取消的重试等待', 'cancelable retry countdown',
  '等待期间展示剩余时间并允许取消，防止用户反复点击产生多次重试。',
  '<p>本地演示：连接失败，等待后重试。</p><div class="d-row"><button data-start type="button">等待后重试</button><button data-cancel type="button" disabled>取消等待</button></div>', '',
  (root,q,qa,say)=>{let timer=0;const idle=()=>{clearInterval(timer);timer=0;q('[data-start]').disabled=false;q('[data-cancel]').disabled=true;};q('[data-start]').onclick=()=>{if(timer)return;let left=3;q('[data-start]').disabled=true;q('[data-cancel]').disabled=false;say(left+' 秒后模拟重试');timer=setInterval(()=>{if(!root.isConnected){idle();return;}left--;if(left<=0){idle();say('模拟重试完成');}else say(left+' 秒后模拟重试');},1000);};q('[data-cancel]').onclick=()=>{idle();say('等待已取消，不会继续重试');};}, ['重试','倒计时','取消']);

add('undo-redo-history', '反馈', '多步撤销与重做', 'undo redo history',
  '保留操作快照支持连续撤销；撤销后发生新编辑时清除旧的重做分支，避免恢复错误状态。',
  '<div class="d-row"><button data-add type="button">添加样例镜头</button><button data-undo type="button">撤销</button><button data-redo type="button">重做</button></div><ol data-list></ol>', '',
  (root,q,qa,say)=>{let states=[[]],cursor=0,next=1;const draw=()=>{q('[data-list]').replaceChildren(...states[cursor].map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));q('[data-undo]').disabled=cursor===0;q('[data-redo]').disabled=cursor===states.length-1;say('当前 '+states[cursor].length+' 个镜头');};q('[data-add]').onclick=()=>{const value=states[cursor].concat('样例镜头 '+next++);states=states.slice(0,cursor+1).concat([value]);cursor++;draw();};q('[data-undo]').onclick=()=>{cursor--;draw();};q('[data-redo]').onclick=()=>{cursor++;draw();};draw();}, ['撤销','重做','历史']);

add('offline-write-queue', '反馈', '离线写入队列', 'offline write queue',
  '把待发送与已送达分开计数，恢复连接后再处理队列，避免离线时误报保存成功。',
  '<p>本地队列演示，不连接服务器。</p><button data-network type="button">模拟离线</button><form data-form><label>备注<input data-text value="门口补拍" required></label><button type="submit">加入发送流程</button></form><ul data-queue></ul>', '',
  (root,q,qa,say)=>{let online=true,queued=[],delivered=0;const draw=()=>{q('[data-network]').textContent=online?'模拟离线':'恢复演示连接';q('[data-queue]').replaceChildren(...queued.map(text=>{const li=document.createElement('li');li.textContent='待发送：'+text;return li;}));say((online?'在线':'离线')+'；待发送 '+queued.length+'；演示送达 '+delivered);};q('[data-network]').onclick=()=>{online=!online;if(online){delivered+=queued.length;queued=[];}draw();};q('[data-form]').onsubmit=event=>{event.preventDefault();const text=q('[data-text]').value.trim();if(!text){say('备注不能为空');return;}if(online)delivered++;else queued.push(text);q('[data-text]').value='';draw();};draw();}, ['离线','队列','保存']);

add('connection-state-control', '反馈', '连接状态与重连', 'connection state control',
  '把断开、连接中和已连接明确区分，重连期间禁用重复操作；状态来自演示按钮而不冒充真实服务。',
  '<p data-state>演示连接：已连接</p><label><input data-fail type="checkbox"> 模拟重连失败</label><div class="d-row"><button data-disconnect type="button">模拟断线</button><button data-reconnect type="button" disabled>重新连接</button></div>', '',
  (root,q,qa,say)=>{let state='online';const draw=()=>{q('[data-state]').textContent='演示连接：'+({online:'已连接',offline:'已断开',connecting:'连接中'}[state]);q('[data-disconnect]').disabled=state!=='online';q('[data-reconnect]').disabled=state!=='offline';};q('[data-disconnect]').onclick=()=>{state='offline';draw();say('本地演示已断开');};q('[data-reconnect]').onclick=()=>{if(state!=='offline')return;const fail=q('[data-fail]').checked;state='connecting';draw();setTimeout(()=>{if(!root.isConnected)return;state=fail?'offline':'online';draw();say(fail?'模拟连接失败，可再次重试':'模拟连接已恢复');},450);};draw();}, ['连接','重连','状态']);

add('cancelable-task-progress', '反馈', '任务暂停与取消', 'cancelable task progress',
  '暂停保留进度，取消停止计时并清空进度，避免用户离开后仍收到完成提示。',
  '<p>本地进度演示，不执行上传。</p><progress data-progress max="100" value="0" aria-label="演示任务进度"></progress><div class="d-row"><button data-start type="button">开始</button><button data-pause type="button" disabled>暂停</button><button data-cancel type="button" disabled>取消</button></div>', '',
  (root,q,qa,say)=>{let state='idle',value=0,timer=0;const stop=()=>{clearInterval(timer);timer=0;};const draw=()=>{q('[data-progress]').value=value;q('[data-start]').disabled=state==='running'||state==='paused';q('[data-pause]').disabled=!['running','paused'].includes(state);q('[data-pause]').textContent=state==='paused'?'继续':'暂停';q('[data-cancel]').disabled=!['running','paused'].includes(state);say(({idle:'尚未开始',running:'进行中',paused:'已暂停',canceled:'已取消',done:'已完成'}[state])+' · '+value+'%');};const run=()=>{stop();state='running';timer=setInterval(()=>{if(!root.isConnected){stop();return;}value=Math.min(100,value+5);if(value===100){state='done';stop();}draw();},100);draw();};q('[data-start]').onclick=()=>{value=0;run();};q('[data-pause]').onclick=()=>{if(state==='running'){stop();state='paused';draw();}else if(state==='paused')run();};q('[data-cancel]').onclick=()=>{stop();state='canceled';value=0;draw();};draw();}, ['进度','暂停','取消']);

add('draft-conflict-resolution', '反馈', '草稿冲突选择', 'draft conflict resolution',
  '并列展示本地与远端版本，让用户明确选择保留哪份，解决前不把任意一方静默覆盖。',
  '<label>本地草稿<textarea data-local rows="2">门口镜头改到黄昏拍摄。</textarea></label><label>远端版本<textarea data-remote rows="2" readonly>门口镜头保留上午拍摄。</textarea></label><div class="d-row"><button data-keep="local" type="button">保留本地</button><button data-keep="remote" type="button">采用远端</button></div><p data-result>尚未选择版本（本地演示）</p>', '',
  (root,q,qa,say)=>{qa('[data-keep]').forEach(button=>button.onclick=()=>{const local=button.dataset.keep==='local';q('[data-result]').textContent='已选择：'+q(local?'[data-local]':'[data-remote]').value;qa('[data-keep]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));say(local?'本地草稿已被选中，未发送服务器':'远端版本已被选中，未发送服务器');});}, ['冲突','草稿','版本']);

add('batched-status-announcer', '反馈', '批量操作状态播报', 'batched status announcement',
  '批量处理后只播报一次汇总结果，避免读屏器被逐项通知淹没，同时保留可见的计数。',
  '<p>演示任务数量：<b data-total>0</b></p><div class="d-row"><button data-one type="button">模拟完成 1 项</button><button data-batch type="button">模拟完成 20 项</button><button data-reset type="button">复位</button></div>', '',
  (root,q,qa,say)=>{let total=0;const complete=count=>{total+=count;q('[data-total]').textContent=String(total);say('本次完成 '+count+' 项，累计 '+total+' 项');};q('[data-one]').onclick=()=>complete(1);q('[data-batch]').onclick=()=>complete(20);q('[data-reset]').onclick=()=>{total=0;q('[data-total]').textContent='0';say('演示计数已复位');};}, ['批量','播报','无障碍']);

// Content utilities: real text transformations, never evaluated user input.
add('code-line-highlight', '内容', '代码行定位', 'code line focus',
  '逐行定位时保留完整上下文，用文本和选中状态同时标识当前行，便于解释某一行的职责。',
  '<ol data-code><li><button type="button" data-line="1" aria-pressed="false"><code>const draft = readDraft();</code></button></li><li><button type="button" data-line="2" aria-pressed="false"><code>validate(draft);</code></button></li><li><button type="button" data-line="3" aria-pressed="false"><code>saveDraft(draft);</code></button></li></ol>',
  '$ROOT [data-line]{width:100%;text-align:left}$ROOT code{font-family:var(--font-mono);font-size:12px}',
  (root,q,qa,say)=>{qa('[data-line]').forEach(button=>button.onclick=()=>{qa('[data-line]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));say('当前定位第 '+button.dataset.line+' 行：'+button.textContent);});}, ['代码','行号','定位']);

add('copy-code-block', '内容', '代码复制与降级', 'copy code with fallback',
  '复制源文本而不是带编号的显示内容，自动复制不可用时提供可手动选中的完整代码。',
  '<pre><code data-code>&lt;button type="button"&gt;保存&lt;/button&gt;</code></pre><button data-copy type="button">复制代码</button><label data-fallback hidden>手动复制<textarea data-text rows="3" readonly></textarea></label>', '',
  (root,q,qa,say)=>{q('[data-copy]').onclick=async()=>{const text=q('[data-code]').textContent;try{await navigator.clipboard.writeText(text);q('[data-fallback]').hidden=true;say('代码已复制，不含行号');}catch{q('[data-fallback]').hidden=false;q('[data-text]').value=text;q('[data-text]').focus();q('[data-text]').select();say('自动复制不可用，请复制已选中的代码');}};}, ['代码','复制','降级']);

add('reading-font-control', '内容', '正文阅读字号', 'reading font control',
  '允许读者单独调整正文大小，控件和导航保持稳定；改动只作用于当前阅读区域。',
  '<label>正文字号<input data-size type="range" min="14" max="24" value="16" step="1"></label><button data-reset type="button">恢复示例字号</button><article data-article><p>走廊镜头需要先交代门的位置，再让人物进入画面。阅读时可调整字号，检查长文是否仍有清晰的行距和换行。</p></article>',
  '$ROOT article{font-size:var(--reader-size,16px);line-height:1.7}',
  (root,q,qa,say)=>{const field=q('[data-size]');const apply=()=>{q('[data-article]').style.setProperty('--reader-size',field.value+'px');say('正文字号 '+field.value+'px');};field.oninput=apply;q('[data-reset]').onclick=()=>{field.value='16';apply();};apply();}, ['阅读','字号','长文']);

add('read-more-clamp', '内容', '长摘要展开与收起', 'expandable clamped text',
  '先显示摘要开头，展开后保留原位置与按钮，读者可以检查全文再收回，不会丢失上下文。',
  '<p data-text data-expanded="false">'+('这段记录说明镜头的空间关系、人物目的以及动作发生的先后。每次修改都应保留已经确认的信息，避免因为删短摘要而误解原意。').repeat(4)+'</p><button data-toggle type="button" aria-expanded="false">展开全文</button>',
  '$ROOT [data-expanded=false]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}',
  (root,q,qa,say)=>{q('[data-toggle]').onclick=()=>{const expanded=q('[data-toggle]').getAttribute('aria-expanded')!=='true';q('[data-toggle]').setAttribute('aria-expanded',String(expanded));q('[data-text]').dataset.expanded=String(expanded);q('[data-toggle]').textContent=expanded?'收起全文':'展开全文';say(expanded?'全文已展开':'已收回摘要');};}, ['摘要','展开','长文']);

add('content-search-marks', '内容', '正文匹配与跳转', 'in content search marks',
  '在原文里标出所有匹配并提供前后跳转，搜索词按纯文本处理，不会作为正则或 HTML 执行。',
  '<label>查找正文<input data-search type="search" placeholder="试试：镜头"></label><div class="d-row"><button data-prev type="button">上一个</button><button data-next type="button">下一个</button></div><p data-content>门口镜头交代空间，走廊镜头承接移动。最后一个镜头停在窗边，让动作自然结束。</p>',
  '$ROOT mark{background:color-mix(in srgb,var(--ink) 12%,var(--paper));color:inherit}$ROOT mark[data-active=true]{outline:2px solid var(--ink)}',
  (root,q,qa,say)=>{const text=q('[data-content]').textContent;let marks=[],active=-1;const draw=()=>{marks.forEach((mark,i)=>mark.dataset.active=String(i===active));q('[data-prev]').disabled=!marks.length;q('[data-next]').disabled=!marks.length;say(marks.length?(active+1)+' / '+marks.length+' 处匹配':'没有匹配');};const search=()=>{const needle=q('[data-search]').value;q('[data-content]').replaceChildren();marks=[];active=-1;if(!needle){q('[data-content]').textContent=text;draw();return;}let position=0,index;while((index=text.toLocaleLowerCase().indexOf(needle.toLocaleLowerCase(),position))!==-1){q('[data-content]').append(document.createTextNode(text.slice(position,index)));const mark=document.createElement('mark');mark.textContent=text.slice(index,index+needle.length);mark.tabIndex=-1;marks.push(mark);q('[data-content]').append(mark);position=index+needle.length;}q('[data-content]').append(document.createTextNode(text.slice(position)));if(marks.length)active=0;draw();};const move=step=>{if(!marks.length)return;active=(active+step+marks.length)%marks.length;draw();marks[active].focus({preventScroll:true});marks[active].scrollIntoView({block:'nearest'});};q('[data-search]').oninput=search;q('[data-prev]').onclick=()=>move(-1);q('[data-next]').onclick=()=>move(1);search();}, ['正文','搜索','高亮']);

add('editable-heading', '内容', '标题就地编辑', 'editable heading',
  '编辑保留在标题原位，Enter 保存、Escape 取消；空标题不被接受，取消不会覆盖原文。',
  '<h3 data-title>门口镜头计划</h3><button data-edit type="button">编辑标题</button><div data-editor hidden><label>新标题<input data-input></label><div class="d-row"><button data-save type="button">保存标题</button><button data-cancel type="button">取消</button></div></div>', '',
  (root,q,qa,say)=>{const close=()=>{q('[data-editor]').hidden=true;q('[data-edit]').hidden=false;q('[data-edit]').focus();};const save=()=>{const text=q('[data-input]').value.trim();if(!text){q('[data-input]').setAttribute('aria-invalid','true');say('标题不能为空');return;}q('[data-title]').textContent=text;close();say('标题已更新到本次演示');};q('[data-edit]').onclick=()=>{q('[data-input]').value=q('[data-title]').textContent;q('[data-input]').removeAttribute('aria-invalid');q('[data-editor]').hidden=false;q('[data-edit]').hidden=true;q('[data-input]').focus();q('[data-input]').select();};q('[data-save]').onclick=save;q('[data-cancel]').onclick=()=>{close();say('已取消，原标题保留');};q('[data-input]').onkeydown=event=>{if(event.key==='Enter'){event.preventDefault();save();}if(event.key==='Escape'){event.preventDefault();close();say('已取消，原标题保留');}};}, ['标题','编辑','取消']);

add('checklist-progress', '内容', '清单完成进度', 'checklist completion progress',
  '进度直接来自实际勾选项，取消勾选会回退；显示完成数量而不靠颜色猜测。',
  '<fieldset><legend>交付前检查</legend>'+['确认文件名','核对字幕','检查声音','记录交付版本'].map(t=>'<label><input data-item type="checkbox"> '+t+'</label>').join('')+'</fieldset><progress data-progress max="4" value="0" aria-label="检查完成进度"></progress><button data-reset type="button">清除勾选</button>', '',
  (root,q,qa,say)=>{const sync=()=>{const items=qa('[data-item]'),done=items.filter(item=>item.checked).length;q('[data-progress]').max=items.length;q('[data-progress]').value=done;say('已完成 '+done+' / '+items.length);};qa('[data-item]').forEach(item=>item.onchange=sync);q('[data-reset]').onclick=()=>{qa('[data-item]').forEach(item=>item.checked=false);sync();};sync();}, ['清单','进度','检查']);

add('json-inspector', '内容', 'JSON 结构查看', 'JSON structure inspector',
  '将有效 JSON 按字段展开，解析失败时保留上一次结果；所有值按文本显示，不执行输入内容。',
  '<label>样例 JSON<textarea data-json rows="4">{"project":"门口镜头","shots":[{"id":1,"ready":true},{"id":2,"ready":false}]}</textarea></label><div class="d-row"><button data-parse type="button">查看结构</button><button data-expand type="button">展开全部</button><button data-collapse type="button">收起全部</button></div><div data-tree></div>',
  '$ROOT [data-tree]{border-top:1px solid var(--line);margin-top:8px}$ROOT [data-tree] details{padding-left:12px}$ROOT [data-tree] p{font-family:var(--font-mono);font-size:12px}',
  (root,q,qa,say)=>{const render=(value,key,depth=0)=>{if(value&&typeof value==='object'&&depth<6){const details=document.createElement('details'),summary=document.createElement('summary');summary.textContent=key+' · '+(Array.isArray(value)?'数组':'对象')+' ('+Object.keys(value).length+')';details.append(summary);for(const [name,child] of Object.entries(value).slice(0,100))details.append(render(child,name,depth+1));return details;}const p=document.createElement('p');p.textContent=key+': '+JSON.stringify(value);return p;};const parse=()=>{try{const value=JSON.parse(q('[data-json]').value);q('[data-tree]').replaceChildren(render(value,'root'));say('解析成功，最多展开六层、每层显示前 100 项');}catch{say('JSON 格式错误，上一次结果已保留');}};q('[data-parse]').onclick=parse;q('[data-expand]').onclick=()=>qa('[data-tree] details').forEach(node=>node.open=true);q('[data-collapse]').onclick=()=>qa('[data-tree] details').forEach(node=>node.open=false);parse();}, ['JSON','结构','解析']);

export function writeBatch(directory=path.resolve(fileURLToPath(import.meta.url),'..','..','data','assets','motion')) {
  if(ASSETS.length!==40||new Set(ASSETS.map(asset=>asset.id)).size!==40)throw new Error('Expected forty unique assets');
  for(const asset of ASSETS){const file=path.join(directory,asset.id+'.json');if(fs.existsSync(file)&&fs.readFileSync(file,'utf8')!==JSON.stringify(asset,null,2)+'\n')throw new Error('Refusing to overwrite an existing asset: '+asset.id);}
  for(const asset of ASSETS)fs.writeFileSync(path.join(directory,asset.id+'.json'),JSON.stringify(asset,null,2)+'\n','utf8');
  console.log('Wrote '+ASSETS.length+' practical UI assets.');
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))writeBatch();
