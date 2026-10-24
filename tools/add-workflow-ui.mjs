// Practical UI batch: fifty independent, framework-free patterns.
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

import { button as b, field as f, area as a, select as s, checks as c } from './workflow-helpers.mjs';
const row = html => '<div class="d-row">'+html+'</div>';
const result = '<div data-result></div>';
function asset(id, cat, title, description, body, run, css='') {
  add(id,cat,title,id.replaceAll('-',' '),description,body,css,run,[cat,title,'交互','本地演示']);
}

asset('repeatable-contact-fields','表单','可增删的联系人字段','为重复字段生成独立标签，删除后将焦点移回相邻可用操作；至少保留一行。',
  '<div data-list></div>'+b('add','添加联系人'),
  (root,q,qa,say)=>{let serial=0;const append=()=>{const line=document.createElement('div');line.className='d-row';const label=document.createElement('label'),input=document.createElement('input'),remove=document.createElement('button');label.textContent='联系人 '+(++serial);input.type='text';label.append(input);remove.type='button';remove.textContent='删除联系人 '+serial;remove.onclick=()=>{const next=line.nextElementSibling||line.previousElementSibling;line.remove();sync();(next?.querySelector('input')||q('[data-add]')).focus();say('联系人已删除');};line.append(label,remove);q('[data-list]').append(line);sync();return input;};const sync=()=>qa('[data-list] button').forEach(el=>el.disabled=qa('[data-list] input').length===1);q('[data-add]').onclick=()=>{append().focus();say('已新增联系人');};append();});

asset('allocation-total-form','表单','总额约束分配表单','多字段共同受总额约束，超额时指出差额并阻止确认；小数先转整数分计算。',
  '<p>本地预算分配，总额 100 元。</p>'+f('one','制作费用','60','number')+f('two','交付费用','40','number')+b('confirm','确认分配'),
  (root,q,qa,say)=>{const validate=()=>{const values=[q('[data-one]'),q('[data-two]')];const valid=values.every(el=>el.value.trim()!==''&&Number.isFinite(Number(el.value))&&Number(el.value)>=0);const sum=values.reduce((n,el)=>n+Math.round(Number(el.value)*100),0);q('[data-confirm]').disabled=!valid||sum!==10000;say(!valid?'请输入非负金额':sum===10000?'已完整分配 100 元':sum>10000?'超出 '+((sum-10000)/100).toFixed(2)+' 元':'剩余 '+((10000-sum)/100).toFixed(2)+' 元');};qa('input').forEach(el=>{el.step='.01';el.oninput=validate;});q('[data-confirm]').onclick=()=>say('分配已在本次演示确认');validate();});

asset('confirmation-field-match','表单','双字段一致性校验','两次输入逐字符一致才允许继续；不修改用户原始输入，空值不视为确认。',
  f('first','新口令','','password')+f('second','再次输入','','password')+b('confirm','确认口令'),
  (root,q,qa,say)=>{const sync=()=>{const first=q('[data-first]'),second=q('[data-second]'),valid=first.value.length>0&&first.value===second.value;q('[data-confirm]').disabled=!valid;second.setAttribute('aria-invalid',String(Boolean(second.value)&&!valid));say(valid?'两次输入一致':second.value?'两次输入不一致':'请再次输入确认');};qa('input').forEach(el=>{el.autocomplete='new-password';el.oninput=sync;});q('[data-confirm]').onclick=()=>say('已通过本地一致性检查');sync();});

asset('bounded-checkbox-group','表单','有数量限制的复选组','最多选择两项，达到上限时禁用未选项；取消一项后恢复可选，不丢失已选结果。',
  c('choice',['字幕','封面','配音','审片'])+b('reset','清空选择'),
  (root,q,qa,say)=>{const items=qa('[data-choice]');const sync=()=>{const count=items.filter(el=>el.checked).length;items.forEach(el=>el.disabled=count>=2&&!el.checked);say('已选 '+count+' / 2 项');};items.forEach(el=>el.onchange=sync);q('[data-reset]').onclick=()=>{items.forEach(el=>el.checked=false);sync();};sync();});

asset('unit-conversion-input','表单','双向单位换算输入','厘米与英寸以最后编辑的字段为准，保留其输入；无效输入清空对应换算结果。',
  f('cm','厘米','2.54','number')+f('inch','英寸','1','number'),
  (root,q,qa,say)=>{const bind=(from,to,factor)=>{q(from).step='any';q(from).oninput=()=>{const text=q(from).value,n=Number(text);if(!text.trim()||!Number.isFinite(n)||n<0){q(to).value='';q(from).setAttribute('aria-invalid','true');say('请输入非负长度');return;}q(from).removeAttribute('aria-invalid');q(to).removeAttribute('aria-invalid');q(to).value=String(Math.round(n*factor*10000)/10000);say('已换算，最后编辑值保留');};};bind('[data-cm]','[data-inch]',1/2.54);bind('[data-inch]','[data-cm]',2.54);});

asset('dual-list-transfer','列表','双列表移入移出','分别选择候选与已选项目后移动，保持项目唯一；按钮根据实际选中项启用。',
  '<label>候选项目<select data-available multiple size="3"><option value="a">门口</option><option value="b">走廊</option><option value="c">窗边</option></select></label>'+b('in','移入已选')+'<label>已选项目<select data-chosen multiple size="3"></select></label>'+b('outward','移回候选'),
  (root,q,qa,say)=>{const left=q('[data-available]'),right=q('[data-chosen]');const sync=()=>{q('[data-in]').disabled=!left.selectedOptions.length;q('[data-outward]').disabled=!right.selectedOptions.length;};const move=(from,to)=>{const chosen=[...from.selectedOptions];chosen.forEach(option=>{option.selected=false;to.append(option);});sync();say('已移动 '+chosen.length+' 项；已选共 '+right.options.length+' 项');};left.onchange=right.onchange=sync;q('[data-in]').onclick=()=>move(left,right);q('[data-outward]').onclick=()=>move(right,left);sync();});

asset('list-priority-position','列表','按目标位置调整顺序','输入目标位置后移动指定项目，位置越界时拒绝操作，避免只能拖动才能排序。',
  '<ol data-list><li>门口</li><li>走廊</li><li>窗边</li></ol>'+s('item','移动项目',[['门口','门口'],['走廊','走廊'],['窗边','窗边']])+f('position','目标位置','1','number')+b('move','移动到此位置'),
  (root,q,qa,say)=>{q('[data-position]').min='1';q('[data-position]').max='3';q('[data-move]').onclick=()=>{const n=Number(q('[data-position]').value),list=q('[data-list]');if(!Number.isInteger(n)||n<1||n>list.children.length){say('目标位置应为 1 至 3');return;}const item=[...list.children].find(el=>el.textContent===q('[data-item]').value);item.remove();list.insertBefore(item,list.children[n-1]||null);say('已移到第 '+n+' 位');};});

asset('list-deduplicate-preview','列表','逐行去重预览','去除空行与首尾空白，保留首次出现的顺序；预览不覆盖输入，按纯文本显示。',
  a('input','每行一项','门口\n走廊\n门口\n窗边')+b('dedupe','预览去重结果')+'<ol data-result></ol>',
  (root,q,qa,say)=>{q('[data-dedupe]').onclick=()=>{const lines=q('[data-input]').value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean),unique=[...new Set(lines)];q('[data-result]').replaceChildren(...unique.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));say('保留 '+unique.length+' 项，去除重复 '+(lines.length-unique.length)+' 项');};});

asset('archive-filter-list','列表','归档与恢复列表','归档项目保留在本地列表中，可筛选查看并恢复；不执行永久删除。',
  s('view','显示范围',[['active','未归档'],['archived','已归档'],['all','全部']])+'<ul data-list></ul>',
  (root,q,qa,say)=>{const items=[{name:'门口',archived:false},{name:'走廊',archived:false}];const draw=()=>{q('[data-list]').replaceChildren();for(const item of items){if(q('[data-view]').value!=='all'&&(q('[data-view]').value==='archived')!==item.archived)continue;const li=document.createElement('li'),button=document.createElement('button');li.append(document.createTextNode(item.name+' '));button.type='button';button.textContent=(item.archived?'恢复 ':'归档 ')+item.name;button.onclick=()=>{item.archived=!item.archived;draw();q('[data-view]').focus();say(item.name+(item.archived?'已归档':'已恢复'));};li.append(button);q('[data-list]').append(li);}if(!q('[data-list]').children.length)say('当前范围没有项目');};q('[data-view]').onchange=draw;draw();});

asset('range-select-list','列表','Shift 连续范围选择','点击设定锚点，Shift 点击选中连续区间；同时提供全选和清空，触屏也可完成操作。',
  c('entry',['门口','走廊','窗边','楼梯','庭院'])+row(b('all','全选')+b('none','清空')),
  (root,q,qa,say)=>{const items=qa('[data-entry]');let anchor=null;const sync=()=>say('已选 '+items.filter(el=>el.checked).length+' 项');items.forEach((el,i)=>el.onclick=event=>{if(event.shiftKey&&anchor!==null){for(let n=Math.min(anchor,i);n<=Math.max(anchor,i);n++)items[n].checked=el.checked;}else anchor=i;sync();});q('[data-all]').onclick=()=>{items.forEach(el=>el.checked=true);anchor=null;sync();};q('[data-none]').onclick=()=>{items.forEach(el=>el.checked=false);anchor=null;sync();};sync();});
const table = '<div class="d-scroll"><table><caption>本地样例镜头</caption><thead><tr><th scope="col">镜头</th><th scope="col">时长</th><th scope="col">状态</th></tr></thead><tbody><tr><th scope="row">门口</th><td>12</td><td>待拍</td></tr><tr><th scope="row">走廊</th><td>18</td><td>完成</td></tr><tr><th scope="row">窗边</th><td>8</td><td>待拍</td></tr></tbody></table></div>';
asset('table-row-compare','表格','两行字段对照','选择两个不同记录，对齐字段并用文字指出差异；同一记录不能作为对照双方。',
  s('left','记录一',[['门口','门口'],['走廊','走廊'],['窗边','窗边']])+s('right','记录二',[['走廊','走廊'],['窗边','窗边'],['门口','门口']])+result,
  (root,q,qa,say)=>{const data={'门口':[12,'待拍'],'走廊':[18,'完成'],'窗边':[8,'待拍']};const draw=()=>{const left=q('[data-left]').value,right=q('[data-right]').value;q('[data-result]').replaceChildren();if(left===right){say('请选择两个不同记录');return;}['时长','状态'].forEach((name,i)=>{const p=document.createElement('p');p.textContent=name+'：'+left+' '+data[left][i]+' / '+right+' '+data[right][i]+' · '+(data[left][i]===data[right][i]?'相同':'不同');q('[data-result]').append(p);});say('已对照两个记录');};qa('select').forEach(el=>el.onchange=draw);draw();});
asset('table-visible-totals','表格','按可见行汇总','筛选与合计共用当前可见记录，空结果的合计明确为零，不混入隐藏行。',
  s('status','镜头状态',[['all','全部'],['待拍','待拍'],['完成','完成'],['取消','取消']])+table,
  (root,q,qa,say)=>{const draw=()=>{let count=0,total=0;qa('tbody tr').forEach(tr=>{tr.hidden=q('[data-status]').value!=='all'&&tr.cells[2].textContent!==q('[data-status]').value;if(!tr.hidden){count++;total+=Number(tr.cells[1].textContent);}});say('可见 '+count+' 条，时长合计 '+total+' 秒');};q('[data-status]').onchange=draw;draw();});
asset('table-transpose-view','表格','行列转置查看','将同一份数据在横向记录与纵向字段间切换，转置后仍保留表头语义。',
  b('transpose','切换行列')+'<div class="d-scroll" data-result></div>',
  (root,q,qa,say)=>{const rows=[['字段','门口','走廊'],['时长','12 秒','18 秒'],['状态','待拍','完成']];let transposed=false;const draw=()=>{const values=transposed?rows[0].map((_,i)=>rows.map(row=>row[i])):rows;const table=document.createElement('table'),caption=document.createElement('caption');caption.textContent='同一份镜头数据';table.append(caption);values.forEach((row,i)=>{const tr=document.createElement('tr');row.forEach((text,j)=>{const cell=document.createElement(i===0||j===0?'th':'td');if(i===0||j===0)cell.scope=i===0?'col':'row';cell.textContent=text;tr.append(cell);});table.append(tr);});q('[data-result]').replaceChildren(table);q('[data-transpose]').setAttribute('aria-pressed',String(transposed));say(transposed?'每行一条记录':'每行一个字段');};q('[data-transpose]').onclick=()=>{transposed=!transposed;draw();};draw();});
asset('table-row-validation','表格','逐行数据检查','检查编号重复与时长范围，按行输出具体原因；修改后重新检查即可恢复通过状态。',
  '<p>每行：编号,时长（1–120 秒）。</p>'+a('rows','记录','SC01,12\nSC02,18\nSC02,0')+b('check','检查所有行')+'<ol data-result></ol>',
  (root,q,qa,say)=>{q('[data-check]').onclick=()=>{const seen=new Set(),lines=q('[data-rows]').value.split(/\r?\n/).filter(line=>line.trim());let errors=0;q('[data-result]').replaceChildren(...lines.map((line,i)=>{const fields=line.split(',').map(s=>s.trim()),id=fields[0],duration=Number(fields[1]),reasons=[];if(fields.length!==2)reasons.push('需要两列');if(!id)reasons.push('缺少编号');if(seen.has(id))reasons.push('编号重复');seen.add(id);if(!fields[1]||!Number.isFinite(duration)||duration<1||duration>120)reasons.push('时长须为 1–120 秒');if(reasons.length)errors++;const li=document.createElement('li');li.textContent='第 '+(i+1)+' 行：'+(reasons.join('；')||'通过');return li;}));say(lines.length?'检查 '+lines.length+' 行，'+errors+' 行有问题':'没有可检查的记录');};});
asset('table-reconcile-keys','表格','按编号核对两个清单','集合核对只比较非空完整编号，区分共同项和单边缺失，不靠行号猜测对应关系。',
  a('left','计划编号','SC01\nSC02\nSC03')+a('right','交付编号','SC02\nSC03\nSC04')+b('compare','核对清单')+result,
  (root,q,qa,say)=>{q('[data-compare]').onclick=()=>{const read=selector=>new Set(q(selector).value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean)),left=read('[data-left]'),right=read('[data-right]');q('[data-result]').replaceChildren();[['共同项',[...left].filter(id=>right.has(id))],['仅计划中',[...left].filter(id=>!right.has(id))],['仅交付中',[...right].filter(id=>!left.has(id))]].forEach(([label,ids])=>{const p=document.createElement('p');p.textContent=label+'：'+(ids.join('、')||'无');q('[data-result]').append(p);});say('已按唯一编号完成本地核对');};});

const dialogCSS='$ROOT dialog{max-width:min(400px,calc(100vw - 32px));max-height:85vh;overflow:auto;border:1px solid var(--line);background:var(--paper);color:var(--ink);padding:16px}$ROOT dialog::backdrop{background:rgb(0 0 0 / .35)}';
asset('modal-create-record','浮层','对话框创建记录','原生模态对话框在提交前检查名称，取消不写入，关闭后焦点回到创建按钮。',
  b('open','新建镜头')+'<ul data-list></ul><dialog data-dialog aria-label="新建镜头">'+f('name','镜头名称')+row(b('save','添加记录')+b('cancel','取消'))+'</dialog>',
  (root,q,qa,say)=>{const dialog=q('[data-dialog]');q('[data-open]').onclick=()=>{q('[data-name]').value='';q('[data-name]').removeAttribute('aria-invalid');dialog.showModal();q('[data-name]').focus();};q('[data-save]').onclick=()=>{const value=q('[data-name]').value.trim();if(!value){q('[data-name]').setAttribute('aria-invalid','true');q('[data-name]').focus();say('请输入镜头名称');return;}const li=document.createElement('li');li.textContent=value;q('[data-list]').append(li);dialog.close();say('记录已添加到本次演示');};q('[data-cancel]').onclick=()=>dialog.close();dialog.onclose=()=>q('[data-open]').focus();},dialogCSS);
asset('dialog-filter-draft','浮层','先编辑再应用筛选','对话框维护临时条件，应用才改变结果；取消和 Escape 均丢弃临时修改。',
  b('open','设置筛选')+'<p data-applied>当前筛选：全部</p><dialog data-dialog aria-label="编辑筛选">'+s('draft','状态',[['全部','全部'],['待拍','待拍'],['完成','完成']])+row(b('apply','应用筛选')+b('cancel','取消'))+'</dialog>',
  (root,q,qa,say)=>{let applied='全部';const dialog=q('[data-dialog]');q('[data-open]').onclick=()=>{q('[data-draft]').value=applied;dialog.showModal();};q('[data-apply]').onclick=()=>{applied=q('[data-draft]').value;q('[data-applied]').textContent='当前筛选：'+applied;dialog.close();say('筛选已应用');};q('[data-cancel]').onclick=()=>dialog.close();dialog.onclose=()=>q('[data-open]').focus();},dialogCSS);
asset('nested-dialog-focus-return','浮层','嵌套对话框焦点返回','子层关闭回到父层触发按钮，父层关闭回到外部入口，使用浏览器原生模态栈。',
  b('open','打开项目设置')+'<dialog data-parent aria-label="项目设置"><h3>项目设置</h3>'+b('child-open','查看字段说明')+b('parent-close','完成设置')+'</dialog><dialog data-child aria-label="字段说明"><p>名称只保存在本次演示中。</p>'+b('child-close','返回设置')+'</dialog>',
  (root,q,qa,say)=>{const parent=q('[data-parent]'),child=q('[data-child]');q('[data-open]').onclick=()=>parent.showModal();q('[data-child-open]').onclick=()=>child.showModal();q('[data-child-close]').onclick=()=>child.close();q('[data-parent-close]').onclick=()=>parent.close();child.onclose=()=>q('[data-child-open]').focus();parent.onclose=()=>{q('[data-open]').focus();say('设置对话框已关闭');};},dialogCSS);
asset('exclusive-help-disclosures','浮层','互斥帮助展开组','展开一条帮助会收起其他条目，所有条目也可全部收起；原生 summary 支持键盘。',
  ['命名规则','交付格式','版本记录'].map((t,i)=>'<details data-help><summary>'+t+'</summary><p>'+['用内容说明镜头，不用空泛口号。','按接收方实际要求选择格式。','每次交付记录已确认的修改。'][i]+'</p></details>').join(''),
  (root,q,qa,say)=>{qa('[data-help]').forEach(item=>item.addEventListener('toggle',()=>{if(item.open){qa('[data-help]').forEach(other=>{if(other!==item)other.open=false;});say(item.querySelector('summary').textContent+'已展开');}}));});
asset('dialog-decision-result','浮层','带返回值的决策对话框','明确区分保留、另存和取消三种结果，Escape 归为取消，不把关闭误当作确认。',
  b('open','处理同名文件')+'<dialog data-dialog aria-label="同名文件处理"><p>演示目录中已有同名文件，如何处理？</p>'+row(b('keep','保留原文件')+b('copy','另存副本')+b('cancel','取消操作'))+'</dialog>',
  (root,q,qa,say)=>{const dialog=q('[data-dialog]');q('[data-open]').onclick=()=>{dialog.returnValue='cancel';dialog.showModal();};[['keep','keep'],['copy','copy'],['cancel','cancel']].forEach(([key,value])=>q('[data-'+key+']').onclick=()=>dialog.close(value));dialog.oncancel=()=>dialog.returnValue='cancel';dialog.onclose=()=>{say({'keep':'结果：保留原文件','copy':'结果：另存副本','cancel':'结果：取消操作'}[dialog.returnValue]||'结果：取消操作');q('[data-open]').focus();};},dialogCSS);
asset('search-paged-results','导航','搜索结果分页','搜索改变时回到第一页，空结果隐藏分页；页数来自实际匹配数量。',
  f('search','搜索项目')+'<ol data-result></ol>'+row(b('prev','上一页')+'<span data-page></span>'+b('next','下一页')),
  (root,q,qa,say)=>{const items=['门口主镜头','走廊主镜头','窗边主镜头','门口补拍','走廊补拍','窗边补拍','楼梯转场'];let page=0;const draw=()=>{const found=items.filter(text=>text.includes(q('[data-search]').value.trim())),pages=Math.ceil(found.length/3);page=Math.max(0,Math.min(page,pages-1));q('[data-result]').replaceChildren(...found.slice(page*3,page*3+3).map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));q('[data-page]').textContent=pages?(page+1)+' / '+pages:'0 / 0';q('[data-prev]').disabled=!page;q('[data-next]').disabled=!pages||page>=pages-1;say(found.length?'共 '+found.length+' 条结果':'没有匹配结果');};q('[data-search]').oninput=()=>{page=0;draw();};q('[data-prev]').onclick=()=>{page--;draw();};q('[data-next]').onclick=()=>{page++;draw();};draw();});
asset('editable-path-breadcrumb','导航','可编辑路径面包屑','路径按层级拆分为可返回的按钮，编辑路径可跳转；所有动作仅改变本地路径。',
  '<nav data-path aria-label="演示路径"></nav>'+f('input','输入本地路径','项目/第一集/素材')+b('go','前往路径'),
  (root,q,qa,say)=>{let parts=[];const draw=()=>{q('[data-path]').replaceChildren();const home=document.createElement('button');home.type='button';home.textContent='根目录';home.onclick=()=>{parts=[];draw();};q('[data-path]').append(home);parts.forEach((part,i)=>{q('[data-path]').append(document.createTextNode(' / '));const button=document.createElement('button');button.type='button';button.textContent=part;if(i===parts.length-1)button.setAttribute('aria-current','location');button.onclick=()=>{parts=parts.slice(0,i+1);draw();};q('[data-path]').append(button);});q('[data-input]').value=parts.join('/');say('当前：/'+parts.join('/'));};q('[data-go]').onclick=()=>{parts=q('[data-input]').value.split('/').map(s=>s.trim()).filter(Boolean).slice(0,12);draw();};q('[data-go]').click();});
asset('gated-review-navigation','导航','有前置条件的审阅导航','只有确认准备项才能进入下一阶段，回退后保留选择；条件取消会同步关闭后续入口。',
  c('ready',['已核对原稿','已核对素材'])+row(b('prepare','准备')+b('review','审阅')+b('deliver','交付'))+'<p data-stage>当前阶段：准备</p>',
  (root,q,qa,say)=>{let stage='准备',reviewed=false;const sync=()=>{const ready=qa('[data-ready]').every(el=>el.checked);if(!ready){reviewed=false;stage='准备';}q('[data-review]').disabled=!ready;q('[data-deliver]').disabled=!ready||!reviewed;q('[data-stage]').textContent='当前阶段：'+stage;say(ready?'准备项已齐全':'请先完成两项准备确认');};qa('[data-ready]').forEach(el=>el.onchange=sync);q('[data-prepare]').onclick=()=>{stage='准备';sync();};q('[data-review]').onclick=()=>{reviewed=true;stage='审阅';sync();};q('[data-deliver]').onclick=()=>{stage='交付';sync();};sync();});
asset('hash-section-router','导航','片段地址驱动视图','三个视图共用明确的片段前缀，刷新时读取片段；浏览器前进后退同步当前视图。',
  row(b('overview','概览')+b('assets','素材')+b('delivery','交付'))+'<p data-view></p>',
  (root,q,qa,say)=>{const views={overview:'项目概览',assets:'素材目录',delivery:'交付说明'};const draw=()=>{const key=location.hash.replace('#workflow-route-',''),current=Object.hasOwn(views,key)?key:'overview';q('[data-view]').textContent=views[current];Object.keys(views).forEach(name=>q('[data-'+name+']').setAttribute('aria-pressed',String(name===current)));say('当前视图：'+views[current]);};Object.keys(views).forEach(key=>q('[data-'+key+']').onclick=()=>{location.hash='workflow-route-'+key;draw();});window.addEventListener('hashchange',draw);draw();});
asset('recent-destinations-list','导航','最近访问去重导航','最近访问记录置顶并去重，限定本次会话最多三项；清空不会改变当前页面。',
  row(b('door','门口')+b('hall','走廊')+b('window','窗边')+b('yard','庭院'))+'<p data-current>尚未访问</p><ol data-result></ol>'+b('clear','清空最近记录'),
  (root,q,qa,say)=>{let recent=[];const visit=name=>{recent=[name,...recent.filter(item=>item!==name)].slice(0,3);q('[data-current]').textContent='当前：'+name;draw();};const draw=()=>{q('[data-result]').replaceChildren(...recent.map(name=>{const li=document.createElement('li'),button=document.createElement('button');button.type='button';button.textContent='重新访问 '+name;button.onclick=()=>visit(name);li.append(button);return li;}));q('[data-clear]').disabled=!recent.length;say('最近访问 '+recent.length+' 项');};[['door','门口'],['hall','走廊'],['window','窗边'],['yard','庭院']].forEach(([key,name])=>q('[data-'+key+']').onclick=()=>visit(name));q('[data-clear]').onclick=()=>{recent=[];draw();};draw();});

asset('safe-markdown-subset','内容','安全的轻量文本预览','只识别标题、列表和普通段落，输入中的 HTML 按文本显示，不执行标签或脚本。',
  a('input','轻量文本','# 镜头说明\n- 门口\n- 走廊\n保持动作连续。')+b('preview','更新预览')+result,
  (root,q,qa,say)=>{const draw=()=>{const fragment=document.createDocumentFragment();let list=null;for(const line of q('[data-input]').value.split(/\r?\n/)){if(line.startsWith('- ')){if(!list){list=document.createElement('ul');fragment.append(list);}const li=document.createElement('li');li.textContent=line.slice(2);list.append(li);}else{list=null;if(!line.trim())continue;const el=document.createElement(line.startsWith('# ')?'h3':'p');el.textContent=line.startsWith('# ')?line.slice(2):line;fragment.append(el);}}q('[data-result]').replaceChildren(fragment);say('已更新纯文本预览，仅支持一级标题和列表');};q('[data-preview]').onclick=draw;draw();});
asset('word-frequency-counter','内容','词频与字数统计','统计非空白字符和以空格分隔的词频，明确中文分词边界；大小写归一后排序。',
  a('input','待统计文本','shot door shot hall door shot')+b('count','统计文本')+'<ol data-result></ol>',
  (root,q,qa,say)=>{q('[data-count]').onclick=()=>{const text=q('[data-input]').value,words=text.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu)||[],counts=new Map();words.forEach(word=>counts.set(word,(counts.get(word)||0)+1));const sorted=[...counts].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));q('[data-result]').replaceChildren(...sorted.slice(0,20).map(([word,count])=>{const li=document.createElement('li');li.textContent=word+'：'+count;return li;}));say('非空白字符 '+[...text.replace(/\s/g,'')].length+'；词段 '+words.length+'；中文连续文字视为一个词段');};});
asset('line-position-diff','内容','逐行位置差异核对','按相同行号比较两份文本，区分缺失与修改；不把它冒充自动对齐的最小编辑差异算法。',
  a('before','修改前','门口\n走廊\n窗边')+a('after','修改后','门口\n走廊补拍')+b('compare','按行号核对')+'<ol data-result></ol>',
  (root,q,qa,say)=>{q('[data-compare]').onclick=()=>{const left=q('[data-before]').value.split('\n'),right=q('[data-after]').value.split('\n');let changed=0;q('[data-result]').replaceChildren(...Array.from({length:Math.max(left.length,right.length)},(_,i)=>{const same=left[i]===right[i];if(!same)changed++;const li=document.createElement('li');li.textContent=same?'相同：'+left[i]:'原：'+(left[i]===undefined?'[缺少此行]':left[i])+' → 新：'+(right[i]===undefined?'[缺少此行]':right[i]);return li;}));say(changed+' 个行号的内容不同');};});
asset('text-case-transform','内容','文本大小写与空白转换','转换结果单独展示，原文保留；折叠空白和大小写模式分别选择，支持空输入。',
  a('input','原始文本','  Scene ONE   Door  ')+s('mode','转换方式',[['lower','全部小写'],['upper','全部大写'],['spaces','折叠空白']])+b('convert','生成结果')+a('result','转换结果'),
  (root,q,qa,say)=>{q('[data-result]').readOnly=true;q('[data-convert]').onclick=()=>{const text=q('[data-input]').value,mode=q('[data-mode]').value;q('[data-result]').value=mode==='upper'?text.toLocaleUpperCase():mode==='lower'?text.toLocaleLowerCase():text.trim().replace(/\s+/g,' ');say(text?'转换完成，原文保留':'原文为空，结果已清空');};});
asset('content-version-preview','内容','历史版本只读预览','历史版本与当前草稿分开显示，预览不会覆盖正在编辑的内容；恢复需要明确点击。',
  a('draft','当前草稿','门口镜头，补充人物停顿。')+s('version','历史版本',[['v1','版本 1'],['v2','版本 2']])+'<p data-preview></p>'+b('restore','用所选版本替换草稿'),
  (root,q,qa,say)=>{const versions={v1:'门口镜头。',v2:'门口镜头，先交代空间。'};const draw=()=>{q('[data-preview]').textContent='只读预览：'+versions[q('[data-version]').value];};q('[data-version]').onchange=draw;q('[data-restore]').onclick=()=>{q('[data-draft]').value=versions[q('[data-version]').value];say('所选历史版本已恢复到本次演示草稿');};draw();});
asset('notification-inbox-state','反馈','未读通知收件箱','未读数量从实际通知计算，支持逐条已读和全部已读；演示通知不代表真实业务消息。',
  '<p>本地样例通知</p><ul data-list></ul>'+b('all','全部标为已读'),
  (root,q,qa,say)=>{const items=[{text:'样例素材已就绪',read:false},{text:'样例审阅待处理',read:false}];const draw=()=>{q('[data-list]').replaceChildren(...items.map(item=>{const li=document.createElement('li'),button=document.createElement('button');li.append(document.createTextNode(item.text+' · '+(item.read?'已读':'未读')+' '));button.type='button';button.textContent='标为已读：'+item.text;button.disabled=item.read;button.onclick=()=>{item.read=true;draw();q('[data-all]').focus();};li.append(button);return li;}));const count=items.filter(item=>!item.read).length;q('[data-all]').disabled=!count;say('未读 '+count+' 条');};q('[data-all]').onclick=()=>{items.forEach(item=>item.read=true);draw();};draw();});
asset('dependency-check-runner','反馈','按依赖检查任务','后续检查依赖前序条件，区分失败和因依赖未满足而跳过；修改条件后可重新运行。',
  c('condition',['已提供原稿','已提供素材','已提供交付要求'])+b('run','运行本地检查')+'<ol data-result></ol>',
  (root,q,qa,say)=>{q('[data-run]').onclick=()=>{let allowed=true,passed=0;q('[data-result]').replaceChildren(...qa('[data-condition]').map((el,i)=>{const li=document.createElement('li'),state=!allowed?'跳过：前序条件未满足':el.checked?'通过':'失败：缺少条件';if(allowed&&el.checked)passed++;if(!el.checked)allowed=false;li.textContent=['原稿检查','素材检查','交付检查'][i]+' · '+state;return li;}));say('通过 '+passed+' / 3 项；仅为本地条件演示');};});
asset('sequential-task-runner','反馈','串行任务与中途停止','每次只执行一个演示任务，停止会保留已完成项；重跑从头开始并禁止重复启动。',
  '<p>本地定时演示，不上传文件。</p>'+row(b('start','运行演示队列')+b('stop','停止队列'))+'<ol data-list><li>检查名称 · 等待</li><li>检查格式 · 等待</li><li>生成清单 · 等待</li></ol>',
  (root,q,qa,say)=>{let timer=null,index=0,running=false;const names=['检查名称','检查格式','生成清单'];const sync=()=>{q('[data-start]').disabled=running;q('[data-stop]').disabled=!running;};const next=()=>{if(!running)return;qa('[data-list] li')[index].textContent=names[index]+' · 完成';index++;say('已完成 '+index+' / 3 项');if(index===3){running=false;sync();return;}qa('[data-list] li')[index].textContent=names[index]+' · 进行中';timer=setTimeout(next,200);};q('[data-start]').onclick=()=>{index=0;running=true;qa('[data-list] li').forEach((el,i)=>el.textContent=names[i]+' · '+(i?'等待':'进行中'));sync();timer=setTimeout(next,200);say('队列运行中');};q('[data-stop]').onclick=()=>{clearTimeout(timer);running=false;qa('[data-list] li')[index].textContent=names[index]+' · 已停止';sync();say('已停止，保留 '+index+' 项完成结果');};sync();});
asset('dirty-field-summary','反馈','已修改字段摘要','按字段与最近确认值比较，列出实际修改项；恢复或确认后重新建立当前基线。',
  f('title','项目名称','门口镜头')+f('owner','负责人','演示人员')+row(b('save','确认本地修改')+b('reset','恢复基线'))+'<ul data-result></ul>',
  (root,q,qa,say)=>{let baseline={title:q('[data-title]').value,owner:q('[data-owner]').value};const draw=()=>{const changed=Object.keys(baseline).filter(key=>q('[data-'+key+']').value!==baseline[key]);q('[data-result]').replaceChildren(...changed.map(key=>{const li=document.createElement('li');li.textContent=key==='title'?'项目名称已修改':'负责人已修改';return li;}));q('[data-save]').disabled=q('[data-reset]').disabled=!changed.length;say(changed.length?'有 '+changed.length+' 个字段未确认':'没有未确认修改');};qa('input').forEach(el=>el.oninput=draw);q('[data-save]').onclick=()=>{Object.keys(baseline).forEach(key=>baseline[key]=q('[data-'+key+']').value);draw();};q('[data-reset]').onclick=()=>{Object.keys(baseline).forEach(key=>q('[data-'+key+']').value=baseline[key]);draw();};draw();});
asset('approval-state-flow','反馈','审阅审批状态流','状态决定可用操作，草稿提交后才可批准或退回；所有操作仅改变演示状态。',
  '<p data-state></p>'+row(b('submit','提交审阅')+b('approve','批准')+b('revise','退回修改')+b('reset','重置演示')),
  (root,q,qa,say)=>{let state='draft';const draw=()=>{q('[data-state]').textContent='本地状态：'+{draft:'草稿',review:'待审阅',approved:'已批准'}[state];q('[data-submit]').disabled=state!=='draft';q('[data-approve]').disabled=q('[data-revise]').disabled=state!=='review';say('可用操作已按当前状态更新');};q('[data-submit]').onclick=()=>{state='review';draw();};q('[data-approve]').onclick=()=>{state='approved';draw();};q('[data-revise]').onclick=()=>{state='draft';draw();};q('[data-reset]').onclick=()=>{state='draft';draw();};draw();});

asset('numeric-series-summary','数据','数列基础统计','逗号或换行分隔有限数字，拒绝无效项；计数、合计、均值和中位数来自输入数列。',
  a('input','样例数列','12,18,8,14')+b('calculate','计算统计')+result,
  (root,q,qa,say)=>{q('[data-calculate]').onclick=()=>{const parts=q('[data-input]').value.split(/[,，\s]+/).filter(Boolean),values=parts.map(Number);if(!values.length||values.some(n=>!Number.isFinite(n))){q('[data-result]').textContent='';say('请输入至少一个有限数字');return;}const sorted=[...values].sort((a,b)=>a-b),sum=values.reduce((a,b)=>a+b,0),middle=Math.floor(values.length/2),median=values.length%2?sorted[middle]:(sorted[middle-1]+sorted[middle])/2;if(!Number.isFinite(sum)||!Number.isFinite(median)){q('[data-result]').textContent='';say('数值超出可计算范围，请缩小输入数值');return;}q('[data-result]').textContent='数量 '+values.length+'；合计 '+Number(sum.toFixed(6))+'；均值 '+Number((sum/values.length).toFixed(6))+'；中位数 '+median;say('统计完成');};});
asset('unit-price-comparison','数据','单位成本比较','按价格除以数量比较样例方案，数量必须大于零；显示输入假设，不构成真实报价。',
  '<p>样例比较：两方案单位须相同。</p>'+f('price-a','方案 A 价格','30','number')+f('count-a','方案 A 数量','3','number')+f('price-b','方案 B 价格','48','number')+f('count-b','方案 B 数量','6','number')+b('compare','比较单位成本'),
  (root,q,qa,say)=>{q('[data-compare]').onclick=()=>{const inputs=qa('input'),values=inputs.map(el=>Number(el.value));if(inputs.some(el=>!el.value.trim())||values.some(n=>!Number.isFinite(n))||values[0]<0||values[2]<0||values[1]<=0||values[3]<=0){say('价格须非负，数量须大于零');return;}const one=values[0]/values[1],two=values[2]/values[3];if(!Number.isFinite(one)||!Number.isFinite(two)){say('结果超出可计算范围，请调整价格或数量');return;}say('A '+one.toFixed(2)+' / 单位；B '+two.toFixed(2)+' / 单位；'+(one===two?'单位成本相同':one<two?'A 较低':'B 较低'));};});
asset('weighted-score-calculator','数据','自定义权重评分','评分与权重均由用户输入，权重无需凑满 100，但总权重必须为正；结果展示计算依据。',
  f('score-a','指标 A 分数（0–100）','80','number')+f('weight-a','指标 A 权重','3','number')+f('score-b','指标 B 分数（0–100）','60','number')+f('weight-b','指标 B 权重','1','number')+b('calculate','计算加权分'),
  (root,q,qa,say)=>{q('[data-calculate]').onclick=()=>{const inputs=qa('input'),v=inputs.map(el=>Number(el.value));if(inputs.some(el=>!el.value.trim())||v.some(n=>!Number.isFinite(n)||n<0)||v[0]>100||v[2]>100||v[1]+v[3]===0){say('分数应为 0–100，权重非负且合计大于零');return;}const numerator=v[0]*v[1]+v[2]*v[3],weight=v[1]+v[3];if(!Number.isFinite(numerator)||!Number.isFinite(weight)){say('权重超出可计算范围，请缩小权重数值');return;}say('加权分 '+(numerator/weight).toFixed(2)+'；总权重 '+weight);};});
asset('duration-list-sum','数据','多段时长累计','按 分:秒 累加多段时长，秒数必须小于 60；总时长支持超过一小时。',
  a('input','每行一段（分:秒）','01:20\n02:45\n00:55')+b('sum','累计时长'),
  (root,q,qa,say)=>{q('[data-sum]').onclick=()=>{const lines=q('[data-input]').value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);if(!lines.length||lines.some(line=>!/^\d{1,5}:[0-5]\d$/.test(line))){say('每行须为 分:秒，秒数为 00–59');return;}const total=lines.reduce((sum,line)=>{const [m,s]=line.split(':').map(Number);return sum+m*60+s;},0);say('总计 '+Math.floor(total/3600)+':'+String(Math.floor(total/60)%60).padStart(2,'0')+':'+String(total%60).padStart(2,'0')+'（'+total+' 秒）');};});
asset('calendar-day-distance','数据','日历日期间隔','按 UTC 日历日计算日期差，避免夏令时造成少一天；不包含结束日，可切换包含首尾。',
  f('start','开始日期','2026-10-25','date')+f('end','结束日期','2026-10-28','date')+'<label><input data-inclusive type="checkbox"> 包含首尾两日</label>'+b('calculate','计算相隔天数'),
  (root,q,qa,say)=>{q('[data-calculate]').onclick=()=>{const read=selector=>{const value=q(selector).value;if(!/^\d{4}-\d\d-\d\d$/.test(value))return NaN;const date=new Date(value+'T00:00:00Z');return Number.isFinite(+date)&&date.toISOString().slice(0,10)===value?+date:NaN;};const start=read('[data-start]'),end=read('[data-end]');if(!Number.isFinite(start)||!Number.isFinite(end)||end<start){say('请输入有效日期，结束日期不能早于开始日期');return;}say('间隔 '+((end-start)/86400000+(q('[data-inclusive]').checked?1:0))+' 天'+(q('[data-inclusive]').checked?'（包含首尾）':'（不包含结束日）'));};});
asset('caption-offset-adjuster','媒体','字幕整体偏移预览','每行以 秒数|字幕 录入，统一加减偏移；任何结果早于零则整批拒绝，不改原文。',
  a('input','字幕时间与文本','1.5|门口\n4|走廊')+f('offset','偏移秒数','0.5','number')+b('apply','预览时间偏移')+'<ol data-result></ol>',
  (root,q,qa,say)=>{q('[data-offset]').step='.1';q('[data-apply]').onclick=()=>{const lines=q('[data-input]').value.split(/\r?\n/).filter(line=>line.trim()),offset=Number(q('[data-offset]').value),items=lines.map(line=>{const split=line.indexOf('|');return {time:split<0?NaN:Number(line.slice(0,split)),raw:split<0?'':line.slice(0,split).trim(),text:line.slice(split+1)};});if(!q('[data-offset]').value.trim()||!Number.isFinite(offset)||!items.length||items.some(item=>!item.raw||!Number.isFinite(item.time)||item.time<0||item.time+offset<0)){q('[data-result]').replaceChildren();say('时间或偏移无效；偏移后不能早于零');return;}q('[data-result]').replaceChildren(...items.map(item=>{const li=document.createElement('li');li.textContent=(item.time+offset).toFixed(3)+' 秒 | '+item.text;return li;}));say('已预览 '+items.length+' 条字幕；原始时间保留');};});
asset('timestamp-seconds-converter','媒体','时间戳与秒数转换','小时可超过两位，分钟秒数须小于 60；保留到毫秒，明确换算格式。',
  f('stamp','时间戳（时:分:秒）','00:01:02.500')+b('to-seconds','换算为秒')+f('seconds','总秒数','62.5','number')+b('to-stamp','换算为时间戳'),
  (root,q,qa,say)=>{q('[data-seconds]').step='.001';q('[data-to-seconds]').onclick=()=>{const match=/^(\d{1,5}):([0-5]\d):([0-5]\d(?:\.\d{1,3})?)$/.exec(q('[data-stamp]').value.trim());if(!match){say('时间戳须为 时:分:秒，可带三位小数');return;}q('[data-seconds]').value=String(Number(match[1])*3600+Number(match[2])*60+Number(match[3]));say('时间戳已换算为秒');};q('[data-to-stamp]').onclick=()=>{const n=Number(q('[data-seconds]').value);if(!q('[data-seconds]').value.trim()||!Number.isFinite(n)||n<0||n>359999999){say('请输入 0–359999999 之间的秒数');return;}const ms=Math.round(n*1000),whole=Math.floor(ms/1000);q('[data-stamp]').value=String(Math.floor(whole/3600)).padStart(2,'0')+':'+String(Math.floor(whole/60)%60).padStart(2,'0')+':'+String(whole%60).padStart(2,'0')+'.'+String(ms%1000).padStart(3,'0');say('秒数已换算为时间戳');};});
asset('image-fit-dimensions','媒体','容器适配尺寸计算','从素材与容器尺寸计算 contain 或 cover 的实际缩放结果和裁切量，不依赖外部图片。',
  f('source-w','素材宽度','1920','number')+f('source-h','素材高度','1080','number')+f('target-w','容器宽度','300','number')+f('target-h','容器高度','300','number')+s('mode','适配方式',[['contain','完整显示 contain'],['cover','填满 cover']])+b('calculate','计算适配尺寸'),
  (root,q,qa,say)=>{q('[data-calculate]').onclick=()=>{const inputs=qa('input'),v=inputs.map(el=>Number(el.value));if(inputs.some(el=>!el.value.trim())||v.some(n=>!Number.isFinite(n)||n<=0||n>100000)){say('尺寸须为 0–100000 范围内的正数');return;}const ratios=[v[2]/v[0],v[3]/v[1]],scale=q('[data-mode]').value==='cover'?Math.max(...ratios):Math.min(...ratios),w=v[0]*scale,h=v[1]*scale;say('显示尺寸 '+w.toFixed(2)+' × '+h.toFixed(2)+'；水平裁切 '+Math.max(0,w-v[2]).toFixed(2)+'；垂直裁切 '+Math.max(0,h-v[3]).toFixed(2)+' 像素（两侧合计）');};});
asset('aspect-ratio-reducer','媒体','尺寸约分为画幅比例','用最大公约数约分整数尺寸，同时计算目标宽度对应高度；不强制任何画幅。',
  f('width','原始宽度','1920','number')+f('height','原始高度','1080','number')+f('target','目标宽度','1280','number')+b('calculate','计算比例与高度'),
  (root,q,qa,say)=>{q('[data-calculate]').onclick=()=>{const inputs=qa('input'),v=inputs.map(el=>Number(el.value));if(inputs.some(el=>!el.value.trim())||v.some(n=>!Number.isSafeInteger(n)||n<=0||n>1000000)){say('请输入不超过 1000000 的正整数');return;}let x=v[0],y=v[1];while(y){[x,y]=[y,x%y];}say('比例 '+(v[0]/x)+':'+(v[1]/x)+'；目标高度 '+Number((v[2]*v[1]/v[0]).toFixed(3)));};});
asset('caption-cue-editor','媒体','带重叠检查的字幕条目','新增字幕检查起止时间和区间重叠，按开始时间排序；逐条移除不影响其他字幕。',
  f('start','开始秒数','0','number')+f('end','结束秒数','2','number')+f('text','字幕内容','门口镜头')+b('add','添加字幕')+'<ol data-list></ol>',
  (root,q,qa,say)=>{let items=[],serial=0;qa('input[type=number]').forEach(el=>el.step='.1');const draw=()=>{q('[data-list]').replaceChildren(...items.map(item=>{const li=document.createElement('li'),button=document.createElement('button');li.append(document.createTextNode(item.start+'–'+item.end+' 秒：'+item.text+' '));button.type='button';button.textContent='移除字幕 '+item.id;button.onclick=()=>{items=items.filter(row=>row!==item);draw();q('[data-add]').focus();say('字幕已移除；剩余 '+items.length+' 条');};li.append(button);return li;}));};q('[data-add]').onclick=()=>{const start=Number(q('[data-start]').value),end=Number(q('[data-end]').value),text=q('[data-text]').value.trim();if(!q('[data-start]').value.trim()||!q('[data-end]').value.trim()||!Number.isFinite(start)||!Number.isFinite(end)||start<0||end<=start||!text){say('请填写字幕，结束时间须大于非负开始时间');return;}if(items.some(item=>start<item.end&&end>item.start)){say('时间与已有字幕重叠，请调整');return;}items.push({start,end,text,id:++serial});items.sort((a,b)=>a.start-b.start);draw();say('已添加；当前 '+items.length+' 条字幕');};});

asset('reading-text-spacing','无障碍','阅读字距与行距控制','分别调整字距和行距以检查阅读适配，恢复按钮回到示例值；不规定项目字体或排版。',
  '<label>行距<input data-line type="range" min="1" max="2.5" step="0.1" value="1.5"></label><label>字距<input data-letter type="range" min="0" max="0.2" step="0.01" value="0"></label>'+b('reset','恢复示例间距')+'<p data-text>门口镜头先交代空间。人物从走廊进入，停顿后再看向窗边，阅读调整时文字应保持可见。</p>',
  (root,q,qa,say)=>{const draw=()=>{q('[data-text]').style.lineHeight=q('[data-line]').value;q('[data-text]').style.letterSpacing=q('[data-letter]').value+'em';say('行距 '+q('[data-line]').value+'；字距 '+q('[data-letter]').value+'em');};qa('input').forEach(el=>el.oninput=draw);q('[data-reset]').onclick=()=>{q('[data-line]').value='1.5';q('[data-letter]').value='0';draw();};draw();});
asset('scoped-shortcut-manager','无障碍','可关闭的局部快捷键','快捷键仅在组件获得焦点时使用，文本输入时不拦截；可以关闭快捷键并始终使用按钮。',
  '<label><input data-enabled type="checkbox" checked> 启用局部 Alt+J / Alt+K</label><p>将焦点移到下面按钮，用 Alt+J 下一项、Alt+K 上一项。</p>'+f('note','备注（输入时不处理快捷键）')+row(b('prev','上一项')+b('next','下一项'))+'<p data-current></p>',
  (root,q,qa,say)=>{const items=['门口','走廊','窗边'];let index=0;const draw=()=>{q('[data-current]').textContent='当前：'+items[index];q('[data-prev]').disabled=index===0;q('[data-next]').disabled=index===items.length-1;};const move=step=>{index=Math.max(0,Math.min(items.length-1,index+step));draw();say('当前第 '+(index+1)+' 项');};q('[data-prev]').onclick=()=>move(-1);q('[data-next]').onclick=()=>move(1);root.addEventListener('keydown',event=>{if(!q('[data-enabled]').checked||!event.altKey||event.ctrlKey||event.metaKey||event.shiftKey||event.target.matches('input,textarea,select,[contenteditable]'))return;const key=event.key.toLowerCase();if(key==='j'||key==='k'){event.preventDefault();move(key==='j'?1:-1);}});draw();});
asset('roving-toolbar-controls','无障碍','跳过禁用项的键盘工具栏','工具栏单一 Tab 入口，左右方向键和 Home/End 移动焦点，禁用操作自动跳过。',
  '<label><input data-disable type="checkbox"> 暂时禁用居中</label><div data-toolbar role="toolbar" aria-label="演示对齐方式">'+b('left','左对齐')+b('center','居中')+b('right','右对齐')+'</div>',
  (root,q,qa,say)=>{const buttons=qa('[data-toolbar] button');let active=buttons[0];const sync=()=>{q('[data-center]').disabled=q('[data-disable]').checked;if(active.disabled)active=buttons[0];buttons.forEach(el=>el.tabIndex=el===active?0:-1);};buttons.forEach(button=>{button.onfocus=()=>{active=button;sync();};button.onclick=()=>{buttons.forEach(el=>el.setAttribute('aria-pressed',String(el===button)));say('已选择'+button.textContent);};});q('[data-disable]').onchange=sync;q('[data-toolbar]').onkeydown=event=>{const enabled=buttons.filter(el=>!el.disabled),i=enabled.indexOf(document.activeElement);let next;if(event.key==='ArrowRight')next=enabled[(i+1)%enabled.length];if(event.key==='ArrowLeft')next=enabled[(i-1+enabled.length)%enabled.length];if(event.key==='Home')next=enabled[0];if(event.key==='End')next=enabled.at(-1);if(next){event.preventDefault();active=next;sync();next.focus();}};sync();});
asset('linked-field-description','无障碍','按需关联字段说明','展开说明时通过 aria-describedby 关联输入，收起后移除关联；每个实例生成独立标识。',
  f('name','镜头编号')+b('help','显示填写说明')+'<p data-helptext hidden>使用项目内唯一编号，例如 SC-001；这里不检查真实编号是否已存在。</p>',
  (root,q,qa,say)=>{const help=q('[data-helptext]'),input=q('[data-name]'),button=q('[data-help]');help.id='workflow-description-'+Math.random().toString(36).slice(2);button.setAttribute('aria-controls',help.id);button.setAttribute('aria-expanded','false');button.onclick=()=>{help.hidden=!help.hidden;button.setAttribute('aria-expanded',String(!help.hidden));button.textContent=help.hidden?'显示填写说明':'收起填写说明';if(help.hidden)input.removeAttribute('aria-describedby');else input.setAttribute('aria-describedby',help.id);say(help.hidden?'填写说明已收起':'填写说明已关联到输入字段');};});
asset('delete-item-focus-recovery','无障碍','移除项目后的焦点恢复','移除按钮所在项目后优先聚焦下一项，其次上一项；清空后焦点回到添加入口。',
  '<ul data-list></ul>'+b('add','添加演示项目'),
  (root,q,qa,say)=>{let serial=2,items=[{id:1,name:'门口'},{id:2,name:'走廊'}];const draw=()=>{q('[data-list]').replaceChildren(...items.map((item,i)=>{const li=document.createElement('li'),button=document.createElement('button');li.append(document.createTextNode(item.name+' '));button.type='button';button.textContent='移除 '+item.name;button.onclick=()=>{items.splice(i,1);draw();const buttons=qa('[data-list] button');(buttons[Math.min(i,buttons.length-1)]||q('[data-add]')).focus();say('已移除 '+item.name+'；剩余 '+items.length+' 项');};li.append(button);return li;}));};q('[data-add]').onclick=()=>{items.push({id:++serial,name:'演示项目 '+serial});draw();qa('[data-list] button').at(-1).focus();say('已添加演示项目');};draw();});

export function writeBatch(directory=path.resolve(fileURLToPath(import.meta.url),'..','..','data','assets','motion')) {
  if(ASSETS.length!==50||new Set(ASSETS.map(asset=>asset.id)).size!==50)throw new Error('Expected fifty unique assets');
  for(const item of ASSETS){const file=path.join(directory,item.id+'.json');if(fs.existsSync(file)&&fs.readFileSync(file,'utf8')!==JSON.stringify(item,null,2)+'\n')throw new Error('Refusing to overwrite an existing asset: '+item.id);}
  for(const item of ASSETS)fs.writeFileSync(path.join(directory,item.id+'.json'),JSON.stringify(item,null,2)+'\n','utf8');
  console.log('Wrote '+ASSETS.length+' workflow UI assets.');
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))writeBatch();
