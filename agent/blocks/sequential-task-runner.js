// 用法：先 <script src="blocks/sequential-task-runner.js"></script>，再调用 window.INITS['sequential-task-runner'](root)；root 是承载该条 body 的那个元素。
window.INITS = window.INITS || {};
window.INITS['sequential-task-runner'] = (root => {
 const q = selector => root.querySelector(selector);
 const qa = selector => [...root.querySelectorAll(selector)];
 const say = text => { const out = q('[data-out]'); if (out) out.textContent = text; };
 ((root,q,qa,say)=>{let timer=null,index=0,running=false;const names=['检查名称','检查格式','生成清单'];const sync=()=>{q('[data-start]').disabled=running;q('[data-stop]').disabled=!running;};const next=()=>{if(!running)return;qa('[data-list] li')[index].textContent=names[index]+' · 完成';index++;say('已完成 '+index+' / 3 项');if(index===3){running=false;sync();return;}qa('[data-list] li')[index].textContent=names[index]+' · 进行中';timer=setTimeout(next,200);};q('[data-start]').onclick=()=>{index=0;running=true;qa('[data-list] li').forEach((el,i)=>el.textContent=names[i]+' · '+(i?'等待':'进行中'));sync();timer=setTimeout(next,200);say('队列运行中');};q('[data-stop]').onclick=()=>{clearTimeout(timer);running=false;qa('[data-list] li')[index].textContent=names[index]+' · 已停止';sync();say('已停止，保留 '+index+' 项完成结果');};sync();})(root, q, qa, say);
});
