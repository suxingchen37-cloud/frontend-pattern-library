// Browser acceptance cases. The local harness supplies a frame and the batch IDs.
window.runPracticalAssetQA = async function (ids, base, frame, reportProgress) {
  const results=[];
  const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
  const check=(value,message)=>{if(!value)throw new Error(message);};
  async function exercise(id,doc,win) {
    const q=selector=>doc.querySelector('.d-'+id+' '+selector);
    const all=selector=>[...doc.querySelectorAll('.d-'+id+' '+selector)];
    const click=selector=>{const element=q(selector);check(element,'missing '+selector);element.click();return element;};
    const set=(selector,value,event='input')=>{const element=q(selector);check(element,'missing '+selector);element.value=value;element.dispatchEvent(new win.Event(event,{bubbles:true}));return element;};
    const key=(element,value)=>element.dispatchEvent(new win.KeyboardEvent('keydown',{key:value,bubbles:true,cancelable:true}));
    const out=()=>q('[data-out]').textContent;
    switch(id) {
      case 'password-visibility': {
        const field=q('[data-password]');field.focus();field.setSelectionRange(2,5);click('[data-toggle]');check(field.type==='text'&&field.selectionStart===2&&field.selectionEnd===5,'visibility loses selection');click('[data-toggle]');check(field.type==='password'&&field.value==='Example-42','password round trip');break;
      }
      case 'clearable-input':click('[data-clear]');check(q('[data-input]').value===''&&q('[data-clear]').disabled&&doc.activeElement===q('[data-input]'),'clear/focus');set('[data-input]','新词');check(!q('[data-clear]').disabled,'clear must re-enable');break;
      case 'textarea-auto-grow': {
        const before=q('[data-text]').getBoundingClientRect().height;set('[data-text]',Array(16).fill('一行较长的镜头备注').join('\n'));check(q('[data-text]').getBoundingClientRect().height>before,'textarea must grow');set('[data-text]','短');check(q('[data-text]').getBoundingClientRect().height<220,'textarea must shrink');break;
      }
      case 'conditional-fields':set('[data-mode]','courier','change');check(q('[data-address]').required&&!q('[data-address]').disabled,'dependent field enabled');click('[data-check]');check(q('[data-address]').getAttribute('aria-invalid')==='true','missing required address');set('[data-mode]','local','change');check(q('[data-address]').disabled&&!q('[data-address]').required,'hidden field still required');break;
      case 'dependent-selects':set('[data-kind]','video','change');check(all('[data-format] option').map(x=>x.value).join(',')==='MP4,WebM','dependent options');set('[data-kind]','image','change');check(q('[data-format]').value==='PNG','dependent value must reset');break;
      case 'quantity-stepper':set('[data-value]','10','change');check(q('[data-plus]').disabled,'upper bound');click('[data-minus]');check(q('[data-value]').value==='9.5','half-step');set('[data-value]','-9','change');check(q('[data-minus]').disabled&&q('[data-value]').value==='0','lower bound');break;
      case 'date-range-validation':set('[data-end]','2026-10-20');check(q('[data-end]').getAttribute('aria-invalid')==='true','invalid date order');set('[data-end]','2026-10-28');check(q('[data-end]').getAttribute('aria-invalid')==='false','valid date order');break;
      case 'validation-summary':click('button[type=submit]');check(all('[data-errors] li').length===2,'summary count');click('[data-errors] button');check(doc.activeElement===q('[data-name]'),'summary field focus');set('[data-name]','测试项目');set('[data-email]','test@example.com');click('button[type=submit]');check(q('[data-summary]').hidden&&out().includes('通过'),'corrected form');break;
      case 'table-column-toggle':click('[data-column="1"]');check(all('tr').every(row=>row.children[1].hidden),'column hide');click('[data-column="1"]');check(all('tr').every(row=>!row.children[1].hidden),'column show');break;
      case 'table-global-search':set('[data-search]','待拍');check(all('tbody tr').filter(row=>!row.hidden).length===2,'table matches');set('[data-search]','不存在');check(all('tbody tr').every(row=>row.hidden)&&out().includes('没有匹配'),'empty search');break;
      case 'table-multi-sort':set('[data-primary]','2','change');check(all('tbody tr').map(row=>Number(row.cells[2].textContent)).join(',')==='8,12,15,18','numeric sort');break;
      case 'table-page-size':click('[data-next]');check(q('[data-next]').disabled&&q('[data-page]').textContent==='2 / 2','page boundary');set('[data-size]','4','change');check(q('[data-page]').textContent==='1 / 1'&&q('[data-prev]').disabled,'page reset');break;
      case 'table-cell-copy': {
        const clipboard=win.navigator.clipboard,original=clipboard?.writeText;
        try{if(clipboard)clipboard.writeText=()=>Promise.reject(new Error('test unavailable'));click('[data-copy]');await pause(0);check(!q('[data-fallback]').hidden&&q('[data-manual]').value==='SC-001','manual clipboard fallback');}finally{if(clipboard)clipboard.writeText=original;}break;
      }
      case 'table-column-filters':set('[data-status]','待拍','change');set('[data-name]','门');check(all('tbody tr').filter(row=>!row.hidden).length===1,'combined filters');click('[data-reset]');check(all('tbody tr').every(row=>!row.hidden),'reset filters');break;
      case 'table-group-toggle':click('[data-group="inside"]');check(all('[data-in="inside"]').every(row=>row.hidden),'collapse group');check(!q('[data-in="outside"]').hidden,'other group changed');click('[data-group="inside"]');check(all('[data-in="inside"]').every(row=>!row.hidden),'expand group');break;
      case 'table-csv-preview':q('tbody tr td').textContent='=SUM(1,2)';click('[data-export]');check(q('[data-csv]').value.includes('"\'=SUM(1,2)"')&&!q('[data-preview]').hidden,'CSV formula protection and quoting');break;
      case 'tabs-keyboard-roving': {
        const tabs=all('[role=tab]');tabs[0].focus();key(tabs[0],'ArrowRight');check(doc.activeElement===tabs[1]&&tabs[1].getAttribute('aria-selected')==='true','right arrow');key(tabs[1],'End');check(doc.activeElement===tabs[2]&&!all('[role=tabpanel]')[2].hidden,'end tab');check(tabs.filter(tab=>tab.tabIndex===0).length===1,'roving tab stop');break;
      }
      case 'tree-keyboard-navigation': {
        const items=all('[role=treeitem]');items[0].focus();key(items[0],'ArrowRight');check(items[0].getAttribute('aria-expanded')==='true','expand tree');key(items[0],'ArrowDown');check(doc.activeElement===items[1],'next visible item');key(items[1],'ArrowLeft');check(doc.activeElement===items[0],'parent focus');break;
      }
      case 'navigation-history':click('[data-go="素材"]');click('[data-go="交付"]');click('[data-back]');check(q('[data-current]').textContent==='素材','back');click('[data-go="概览"]');check(q('[data-forward]').disabled,'new branch discards redo');break;
      case 'nested-action-menu':all('details').forEach(node=>node.open=true);click('[data-action="导出 JSON"]');check(all('details').every(node=>!node.open)&&out().includes('导出 JSON'),'menu selection closes');check(doc.activeElement===q('summary'),'menu focus return');break;
      case 'filter-url-state':set('[data-filter]','pending','change');check(new URL(win.location.href).searchParams.get('asset-status')==='pending','URL state');check(all('[data-status]').filter(node=>!node.hidden).length===2,'filter render');click('[data-reset]');check(!new URL(win.location.href).searchParams.has('asset-status'),'URL reset');break;
      case 'scroll-return-control':q('[data-scroll]').scrollTop=150;q('[data-scroll]').dispatchEvent(new win.Event('scroll'));check(!q('[data-top]').disabled,'scroll control state');click('[data-top]');await pause(400);check(q('[data-scroll]').scrollTop<2,'scroll return');break;
      case 'overflow-tab-scroll':all('[data-tab]').at(-1).click();await pause(30);check(all('[data-tab]').at(-1).getAttribute('aria-pressed')==='true'&&q('[data-strip]').scrollLeft>0,'overflow selection visible');break;
      case 'unsaved-navigation-guard':set('[data-draft]','修改过的草稿');click('[data-leave]');check(q('[data-dialog]').open,'dirty guard');click('[data-stay]');check(!q('[data-dialog]').open&&doc.activeElement===q('[data-draft]'),'stay retains focus');click('[data-leave]');click('[data-discard]');check(!q('[data-dialog]').open&&q('[data-draft]').value==='门口镜头待补拍。','discard resets');break;
      case 'submit-state-button':click('[data-submit]');click('[data-submit]');check(q('[data-submit]').disabled&&q('[data-count]').textContent==='已提交 1 次','duplicate submission');await pause(550);check(!q('[data-submit]').disabled&&out().includes('成功'),'submit success');q('[data-fail]').checked=true;click('[data-submit]');await pause(550);check(out().includes('失败')&&!q('[data-submit]').disabled,'failure retry');break;
      case 'retry-countdown':click('[data-start]');check(q('[data-start]').disabled&&!q('[data-cancel]').disabled,'retry waiting');click('[data-cancel]');check(!q('[data-start]').disabled&&out().includes('取消'),'cancel retry');break;
      case 'undo-redo-history':click('[data-add]');click('[data-add]');click('[data-undo]');check(all('[data-list] li').length===1,'undo');click('[data-redo]');check(all('[data-list] li').length===2,'redo');click('[data-undo]');click('[data-add]');check(q('[data-redo]').disabled,'redo branch discarded');break;
      case 'offline-write-queue':click('[data-network]');click('button[type=submit]');check(all('[data-queue] li').length===1&&out().includes('送达 0'),'offline not delivered');click('[data-network]');check(all('[data-queue] li').length===0&&out().includes('送达 1'),'queue flush');break;
      case 'connection-state-control':click('[data-disconnect]');q('[data-fail]').checked=true;click('[data-reconnect]');check(q('[data-reconnect]').disabled,'connecting guard');await pause(500);check(out().includes('失败')&&!q('[data-reconnect]').disabled,'retry after connection failure');q('[data-fail]').checked=false;click('[data-reconnect]');await pause(500);check(out().includes('恢复'),'connection recovery');break;
      case 'cancelable-task-progress':click('[data-start]');await pause(240);click('[data-pause]');const value=q('[data-progress]').value;await pause(150);check(value>0&&q('[data-progress]').value===value,'paused progress');click('[data-pause]');click('[data-cancel]');await pause(120);check(q('[data-progress]').value===0&&out().includes('取消'),'canceled timer');break;
      case 'draft-conflict-resolution':click('[data-keep="remote"]');check(q('[data-result]').textContent.includes('上午'),'remote choice');click('[data-keep="local"]');check(q('[data-result]').textContent.includes('黄昏'),'local choice');break;
      case 'batched-status-announcer':click('[data-batch]');check(q('[data-total]').textContent==='20'&&out().includes('本次完成 20 项'),'batch announcement');click('[data-reset]');check(q('[data-total]').textContent==='0','batch reset');break;
      case 'code-line-highlight':click('[data-line="2"]');check(q('[data-line="2"]').getAttribute('aria-pressed')==='true'&&out().includes('第 2 行'),'code focus');break;
      case 'copy-code-block': {
        const clipboard=win.navigator.clipboard,original=clipboard?.writeText;
        try{if(clipboard)clipboard.writeText=()=>Promise.reject(new Error('test unavailable'));click('[data-copy]');await pause(0);check(q('[data-text]').value==='<button type="button">保存</button>'&&!q('[data-fallback]').hidden,'code clipboard fallback');}finally{if(clipboard)clipboard.writeText=original;}break;
      }
      case 'reading-font-control':set('[data-size]','24');check(win.getComputedStyle(q('[data-article]')).fontSize==='24px','reading font size');click('[data-reset]');check(win.getComputedStyle(q('[data-article]')).fontSize==='16px','font reset');break;
      case 'read-more-clamp':click('[data-toggle]');check(q('[data-toggle]').getAttribute('aria-expanded')==='true'&&q('[data-text]').dataset.expanded==='true','expand text');click('[data-toggle]');check(q('[data-text]').dataset.expanded==='false','collapse text');break;
      case 'content-search-marks':set('[data-search]','镜头');check(all('mark').length===3,'content matches');click('[data-next]');check(all('mark')[1].dataset.active==='true'&&doc.activeElement===all('mark')[1],'next text match');set('[data-search]','<img>');check(all('mark').length===0&&all('[data-content] img').length===0,'search interpreted as text');break;
      case 'editable-heading':click('[data-edit]');set('[data-input]','');click('[data-save]');check(!q('[data-editor]').hidden&&q('[data-input]').getAttribute('aria-invalid')==='true','empty title guard');set('[data-input]','新标题');key(q('[data-input]'),'Escape');check(q('[data-title]').textContent==='门口镜头计划','cancel title');click('[data-edit]');set('[data-input]','新标题');key(q('[data-input]'),'Enter');check(q('[data-title]').textContent==='新标题'&&q('[data-editor]').hidden,'save title');break;
      case 'checklist-progress':click('[data-item]');check(q('[data-progress]').value===1&&out().includes('1 / 4'),'checklist count');click('[data-reset]');check(q('[data-progress]').value===0,'checklist reset');break;
      case 'json-inspector':click('[data-expand]');const previous=q('[data-tree]').textContent;set('[data-json]','invalid JSON');click('[data-parse]');check(q('[data-tree]').textContent===previous&&out().includes('错误'),'invalid JSON preserves view');set('[data-json]','{"x":"<img src=x>"}');click('[data-parse]');check(all('[data-tree] img').length===0&&q('[data-tree]').textContent.includes('<img src=x>'),'JSON values interpreted as text');break;
      default:throw new Error('Missing browser acceptance case for '+id);
    }
  }

  for(const width of [375,768,1280])for(const theme of ['paper','night'])for(const id of ids) {
    const result={id,width,theme};
    try {
      frame.style.width=width+'px';frame.style.height='850px';
      await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(new Error('preview load timeout')),10000);frame.onload=()=>{clearTimeout(timer);resolve();};frame.src=base+'agent/preview/'+id+'.html?theme='+theme;});
      const win=frame.contentWindow,doc=frame.contentDocument;
      await new Promise(resolve=>win.requestAnimationFrame(()=>win.requestAnimationFrame(resolve)));
      check(doc.querySelector('.d-'+id),'missing asset root');
      check(doc.documentElement.dataset.theme===theme,'theme not applied');
      check(doc.documentElement.scrollWidth<=win.innerWidth+1,'horizontal page overflow');
      const names=element=>element.getAttribute('aria-label')||element.textContent.trim()||[...(element.labels||[])].map(label=>label.textContent).join('').trim();
      const controls=[...doc.querySelector('.d-'+id).querySelectorAll('button,input,select,textarea,summary')];
      check(controls.every(element=>names(element)),'unnamed control');
      await exercise(id,doc,win);
      check(!(win.__qaErrors||[]).length,'runtime error: '+JSON.stringify(win.__qaErrors));
      check(doc.documentElement.scrollWidth<=win.innerWidth+1,'horizontal overflow after interaction');
      result.ok=true;
    }catch(error){result.ok=false;result.error=error.message;}
    results.push(result);
    if(reportProgress)reportProgress({completed:results.length,total:ids.length*6,failed:results.filter(item=>!item.ok).length});
  }
  return results;
};
