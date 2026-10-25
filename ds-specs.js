/* 外观与参数均为可修改的示例；rule/dont 用于判断内容和交互问题，不规定消费方风格。 */
/* 设计系统图鉴 · 50 条规格小样 */
window.DS_SPECS = [
/* ---------- 令牌 5 ---------- */
{id:'color-ramp',group:'令牌',t:'语义色阶',en:'semantic colors',rule:'语义变量便于维护和换主题；可按项目需要重定义全部颜色，也可使用有明确用途的局部值。',dont:'颜色缺少含义或对比不足，导致同一状态在不同位置被误读。',
body:`<div class="s-ramp"><span style="background:var(--ok)">ok</span><span style="background:var(--amber)">warn</span><span style="background:var(--coral)">danger</span><span style="background:var(--blue)">info</span><span style="background:var(--muted)">neutral</span></div>`,
css:`.s-ramp{display:flex;gap:4px;width:100%}
.s-ramp span{flex:1;height:34px;border-radius:5px;color:#141a10;font:8px/34px var(--mono);text-align:center;letter-spacing:.04em}`},

{id:'border-levels',group:'令牌',t:'边框层级',en:'border levels',rule:'分隔、包裹和强调可用边框、留白、阴影等表达，是否分档取决于内容关系。',dont:'所有元素被同等强调，读者难以识别分组。',
body:`<div class="s-bl"><div style="border-color:var(--line)">subtle</div><div style="border-color:var(--faint)">default</div><div style="border-color:var(--ink)">strong</div></div>`,
css:`.s-bl{display:flex;flex-direction:column;gap:6px;width:100%}
.s-bl div{border:1px solid;border-radius:4px;padding:5px 8px;font:8.5px var(--mono);color:var(--muted)}`},

{id:'elevation',group:'令牌',t:'阴影层级',en:'elevation',rule:'阴影可表达层级、材质或交互反馈；按场景选用，也可完全不用。',dont:'阴影遮挡文字或让无关内容比主要任务更显眼。',
body:`<div class="s-el"><div style="box-shadow:var(--sh1)">sh1</div><div style="box-shadow:var(--sh2)">sh2</div><div style="box-shadow:var(--sh3)">sh3</div></div>`,
css:`.s-el{display:flex;gap:8px;width:100%}
.s-el div{flex:1;height:48px;display:grid;place-items:center;background:var(--paper);border:1px solid var(--line);border-radius:6px;font:8.5px var(--mono);color:var(--muted)}`},

{id:'motion-tokens',group:'令牌',t:'动效时长',en:'duration tokens',rule:'时长与曲线根据距离、状态和用户任务决定；本例参数可调整，并尊重减少动效偏好。',dont:'为了统一数值而让快速反馈变慢，或用持续动画抢走注意力。',
body:`<div class="s-mt"><div><i style="--d:120ms"></i><span>120 反馈</span></div><div><i style="--d:180ms"></i><span>180 抽屉</span></div><div><i style="--d:320ms"></i><span>320 转场</span></div></div>`,
css:`.s-mt{display:flex;flex-direction:column;gap:7px;width:100%}
.s-mt div{display:flex;align-items:center;gap:8px}
.s-mt i{width:44px;height:5px;border-radius:99px;background:var(--line);position:relative}
.s-mt i:after{content:"";position:absolute;left:0;top:-3px;width:11px;height:11px;border-radius:50%;background:var(--ink);animation:s-slide 1.8s var(--ease) infinite alternate;animation-duration:var(--d)}
.s-mt span{font:8.5px var(--mono);color:var(--faint)}
@keyframes s-slide{to{left:33px}}
@media(prefers-reduced-motion:reduce){.s-mt i:after{animation:none;left:16px}}`},

{id:'focus-ring',group:'令牌',t:'焦点环',en:'focus ring',rule:'焦点提示清楚可见且不被裁切；可使用原生或自定义外观，尺寸、颜色和形状按项目决定。',dont:'去掉焦点后没有其他提示，键盘用户无法知道当前操作位置。',
body:`<button class="s-fr">键盘聚焦到我会看到环</button>`,
css:`.s-fr{font-size:10.5px;padding:7px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);cursor:pointer}
.s-fr:focus-visible{outline:2px solid var(--blue);outline-offset:3px}`},

/* ---------- 按钮 5 ---------- */
{id:'button-sizes',group:'按钮',t:'按钮尺寸',en:'button sizes',rule:'按钮尺寸按文字、操作密度与输入方式决定，不限定档数或固定高度。',dont:'为凑尺寸档位而裁切文案，或把常用操作做得难以点击。',
body:`<div class="s-bs"><button class="s-sm">小 28</button><button class="s-md">中 34</button><button class="s-lg">大 40</button></div>`,
css:`.s-bs{display:flex;align-items:center;gap:7px}
.s-bs button{border:1px solid var(--ink);border-radius:999px;background:var(--ink);color:var(--paper);cursor:pointer}
.s-bs .s-sm{font-size:9.5px;padding:5px 10px}
.s-bs .s-md{font-size:11px;padding:7px 14px}
.s-bs .s-lg{font-size:12px;padding:10px 18px}`},

{id:'icon-button',group:'按钮',t:'图标按钮',en:'icon button',rule:'无可见文字的按钮需要可理解的无障碍名称，并在目标设备上检查点击与聚焦是否容易。',dont:'图标缺少名称或触达区域过小，用户无法判断和执行动作。',
body:`<div class="s-ib"><button aria-label="复制">⧉</button><button aria-label="更多">⋯</button><button aria-label="关闭">×</button></div>`,
css:`.s-ib{display:flex;gap:6px}
.s-ib button{width:30px;height:30px;border:1px solid var(--line);border-radius:7px;background:var(--paper);font-size:13px;cursor:pointer;color:var(--ink)}
.s-ib button:hover{background:var(--bg)}`},

{id:'button-group',group:'按钮',t:'按钮组',en:'button group',rule:'一组互斥选项合成一个控件；选中态只出现一次。',dont:'用三个独立按钮表达单选。',
body:`<div class="s-bg" role="group" aria-label="视图"><button data-v3="0" aria-pressed="true">列表</button><button data-v3="1" aria-pressed="false">网格</button><button data-v3="2" aria-pressed="false">紧凑</button></div><p class="s-out" data-vout>当前：列表</p>`,
css:`.s-bg{display:inline-flex;border:1px solid var(--line);border-radius:7px;overflow:hidden}
.s-bg button{border:0;background:var(--paper);font-size:10px;padding:6px 10px;cursor:pointer;color:var(--muted)}
.s-bg button+button{border-left:1px solid var(--line)}
.s-bg button[aria-pressed=true]{background:var(--ink);color:var(--paper)}
.s-out{margin:6px 0 0;font:8.5px var(--mono);color:var(--faint)}`,
init:(card)=>{const out=card.querySelector('[data-vout]');card.querySelectorAll('[data-v3]').forEach(b=>b.onclick=()=>{card.querySelectorAll('[data-v3]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));out.textContent='当前：'+b.textContent;});}},

{id:'danger-button',group:'按钮',t:'危险按钮',en:'danger action',rule:'危险操作应写清后果并提供适合的确认或恢复路径；颜色、填充与位置由任务决定。',dont:'把不可逆后果隐藏在含糊文案或不易发现的状态里。',
body:`<div class="s-db"><button class="s-ghost">取消</button><button class="s-danger">删除这条记录</button></div><p class="s-dn">删除后可在 5 秒内撤销。</p>`,
css:`.s-db{display:flex;gap:6px}
.s-db button{font-size:9.5px;padding:6px 11px;border-radius:6px;cursor:pointer;white-space:nowrap}
.s-ghost{border:1px solid var(--line);background:var(--paper);color:var(--ink)}
.s-danger{border:1px solid var(--coral);background:transparent;color:var(--warn)}
.s-dn{margin:6px 0 0;font:8.5px var(--mono);color:var(--faint)}`},

{id:'loading-button',group:'按钮',t:'加载按钮',en:'loading button',rule:'等待时给出可理解的状态并按任务防止重复提交；反馈形式可为文字、进度或其他适合的表达。',dont:'用户无法判断请求是否已发出，反复点击导致重复执行。',
body:`<button class="s-lb" data-lb>发布<span class="s-sp" hidden></span></button>`,
css:`.s-lb{font-size:10px;padding:7px 13px;border:1px solid var(--ink);border-radius:999px;background:var(--ink);color:var(--paper);cursor:pointer;display:inline-flex;align-items:center;gap:6px}
.s-lb[disabled]{opacity:.75;cursor:wait}
.s-sp{width:9px;height:9px;border:1.5px solid currentColor;border-top-color:transparent;border-radius:50%;animation:s-spin .7s linear infinite}
@keyframes s-spin{to{transform:rotate(360deg)}}`,
init:(card)=>{const b=card.querySelector('[data-lb]');b.onclick=()=>{if(b.disabled)return;b.disabled=true;const sp=b.querySelector('.s-sp');sp.hidden=false;b.firstChild.textContent='发布中';setTimeout(()=>{b.disabled=false;sp.hidden=true;b.firstChild.textContent='发布';},1200);};}},

/* ---------- 表单 6 ---------- */
{id:'input-states',group:'表单',t:'输入状态',en:'input states',rule:'覆盖输入实际需要的默认、焦点、错误与不可用等状态，出错时说明原因和修正方式。',dont:'只靠边框变红表示错误。',
body:`<div class="s-is"><input placeholder="默认"><input class="on" value="聚焦"><input class="err" value="格式不对"><span class="s-ierr">错误态要附一句：缺少域名</span><input disabled value="禁用"></div>`,
css:`.s-is{display:flex;flex-direction:column;gap:5px;width:100%}
.s-is input{width:100%;padding:6px 8px;border:1px solid var(--line);border-radius:5px;background:var(--paper);font-size:9.5px;outline:none}
.s-is .on{border-color:var(--ink)}
.s-is .err{border-color:var(--coral)}
.s-is input[disabled]{opacity:.5}
.s-ierr{font-size:8px;color:var(--warn);margin-top:-2px}`},

{id:'select-spec',group:'表单',t:'选择器',en:'select',rule:'明确当前选择或尚未选择；是否添加搜索取决于选项长度、数量和查找成本。',dont:'以空白掩盖当前状态，让用户误以为已经完成选择。',
body:`<label class="s-sel"><span>栏目</span><select><option>请选择</option><option>街道</option><option>字体</option><option>物件</option><option>手艺</option></select></label>`,
css:`.s-sel{display:flex;flex-direction:column;gap:3px;font-size:9px;color:var(--faint);width:150px}
.s-sel select{font-size:10px;padding:6px 8px;border:1px solid var(--line);border-radius:5px;background:var(--paper);color:var(--ink)}`},

{id:'checkbox-spec',group:'表单',t:'复选框',en:'checkbox',rule:'多选要有明确标签；全选与半选是两种状态。',dont:'用开关代替多选。',
body:`<div class="s-cb"><label><input type="checkbox" checked> 已选</label><label><input type="checkbox"> 未选</label><label><input type="checkbox" data-cbind> 半选</label></div>`,
css:`.s-cb{display:flex;flex-direction:column;gap:4px;font-size:10px;color:var(--muted)}
.s-cb input{accent-color:var(--ink);margin-right:5px}`,
init:(card)=>{const i=card.querySelector('[data-cbind]');if(i)i.indeterminate=true;}},

{id:'radio-spec',group:'表单',t:'单选框',en:'radio',rule:'一组单选只允许一个选中；默认选中要有理由。',dont:'一组里出现两个选中。',
body:`<div class="s-rd"><label><input type="radio" name="s-radio"> 次日达</label><label><input type="radio" name="s-radio" checked> 当日达</label><label><input type="radio" name="s-radio"> 自提</label></div>`,
css:`.s-rd{display:flex;flex-direction:column;gap:4px;font-size:10px;color:var(--muted)}
.s-rd input{accent-color:var(--ink);margin-right:5px}`},

{id:'switch-spec',group:'表单',t:'开关',en:'switch',rule:'开关改变立即生效；需要“保存”的动作别用开关。',dont:'把开关当复选框，攒着一起提交。',
body:`<div class="s-sw"><button role="switch" aria-checked="true" data-sw>铃声</button><button role="switch" aria-checked="false" data-sw>震动</button></div>`,
css:`.s-sw{display:flex;flex-direction:column;gap:6px}
.s-sw button{display:flex;align-items:center;justify-content:space-between;width:140px;border:0;background:transparent;font-size:10px;color:var(--muted);cursor:pointer}
.s-sw button:after{content:"";width:26px;height:15px;border-radius:99px;background:var(--line);position:relative;transition:background .15s}
.s-sw button[aria-checked=true]:after{background:var(--ink);box-shadow:inset -11px 0 0 var(--paper)}`,
init:(card)=>{card.querySelectorAll('[data-sw]').forEach(b=>b.onclick=()=>b.setAttribute('aria-checked',String(b.getAttribute('aria-checked')!=='true')));}},

{id:'textarea-count',group:'表单',t:'文本域计数',en:'textarea count',rule:'存在真实长度限制时说明上限，临近或超出时给出可执行提示。',dont:'没有业务限制也强加字数配额，或只变色不解释问题。',
body:`<textarea class="s-ta" data-ta2 maxlength="80" placeholder="写一句推荐…"></textarea><div class="s-tc"><span data-tn>0</span>/80</div>`,
css:`.s-ta{width:100%;height:58px;padding:7px 9px;border:1px solid var(--line);border-radius:5px;background:var(--paper);font-size:10px;resize:none;outline:none}
.s-ta:focus{border-color:var(--ink)}
.s-tc{font:8.5px var(--mono);color:var(--faint);text-align:right;margin-top:3px}`,
init:(card)=>{const ta=card.querySelector('[data-ta2]'),n=card.querySelector('[data-tn]');ta.oninput=()=>{n.textContent=ta.value.length;n.style.color=ta.value.length>64?'var(--warn)':'';};}},

/* ---------- 反馈 5 ---------- */
{id:'alert-spec',group:'反馈',t:'提示条',en:'inline alert',rule:'提示结构、长度和动作数量按当前信息与任务决定，用户能够理解发生了什么。',dont:'把无关公告塞进操作反馈，盖住真正需要处理的问题。',
body:`<div class="s-al"><div class="ok">已保存 · 版本 07</div><div class="wa">有 2 条待审批</div><div class="er">同步失败 · 稍后重试</div></div>`,
css:`.s-al{display:flex;flex-direction:column;gap:4px;width:100%}
.s-al div{font-size:9.5px;padding:5px 8px;border-radius:4px;border-left:2px solid}
.s-al .ok{background:var(--lime-soft);border-color:var(--ok);color:var(--ink)}
.s-al .wa{background:color-mix(in srgb,var(--amber) 14%,transparent);border-color:var(--amber)}
.s-al .er{background:color-mix(in srgb,var(--coral) 12%,transparent);border-color:var(--coral)}`},

{id:'toast-spec',group:'反馈',t:'Toast',en:'toast',rule:'短暂提示用于无需确认的反馈，停留时间按内容和可访问性需要决定；重要结果需能重新找到。',dont:'把必须阅读或确认的信息放在无法恢复的自动消失提示中。',
body:`<button class="s-tb" data-tst>保存</button><div class="s-toast" data-tsto hidden>已保存 · 刚刚</div>`,
css:`.s-tb{font-size:9.5px;padding:5px 10px;border:1px solid var(--line);border-radius:5px;background:var(--paper);cursor:pointer}
.s-toast{margin-top:7px;background:var(--ink);color:var(--paper);font-size:9.5px;padding:5px 9px;border-radius:5px;display:inline-block}`,
init:(card)=>{const t=card.querySelector('[data-tsto]');card.querySelector('[data-tst]').onclick=()=>{t.hidden=false;clearTimeout(t._t);t._t=setTimeout(()=>t.hidden=true,2600);};}},

{id:'badge-spec',group:'反馈',t:'徽章',en:'badge',rule:'徽章可简洁表达数量或状态；是否截断数字、使用短词由信息精度和可用空间决定。',dont:'省略后丢失关键数量，或只靠颜色表达状态。',
body:`<div class="s-bd"><span class="dot">3</span><span class="dot big">99+</span><span class="pill">待审批</span><span class="pill ok">已完成</span></div>`,
css:`.s-bd{display:flex;align-items:center;gap:7px;flex-wrap:wrap}
.s-bd .dot{min-width:17px;height:17px;padding:0 4px;border-radius:99px;background:var(--coral);color:#2a120c;font:8.5px/17px var(--mono);text-align:center}
.s-bd .pill{font:8.5px var(--mono);border:1px solid var(--line);border-radius:99px;padding:2px 7px;color:var(--muted)}
.s-bd .ok{border-color:var(--ok);color:var(--ok)}`},

{id:'progress-spec',group:'反馈',t:'进度条',en:'progress',rule:'进度表达应对应真实可知状态，不确定时明确说明等待，不伪造百分比。',dont:'加载尚未完成却给出没有依据的精确进度。',
body:`<div class="s-pg"><div class="row"><span>确定 62%</span><i><b style="width:62%"></b></i></div><div class="row"><span>不确定</span><i class="ind"><b></b></i></div></div>`,
css:`.s-pg{display:flex;flex-direction:column;gap:8px;width:100%;font-size:8.5px;color:var(--faint)}
.s-pg .row{display:flex;align-items:center;gap:7px}
.s-pg i{flex:1;height:5px;border-radius:99px;background:var(--line);overflow:hidden}
.s-pg b{display:block;height:100%;background:var(--ink)}
.s-pg .ind b{width:36%;animation:s-ind 1.2s var(--ease) infinite}
@keyframes s-ind{from{transform:translateX(-100%)}to{transform:translateX(300%)}}
@media(prefers-reduced-motion:reduce){.s-pg .ind b{animation:none;width:60%}}`},

{id:'skeleton-spec',group:'反馈',t:'骨架屏',en:'skeleton',rule:'骨架形状要接近真实内容；别用一块灰色矩形糊弄。',dont:'骨架高度和最终内容差一倍。',
body:`<div class="s-sk"><i class="av"></i><div><i class="l1"></i><i class="l2"></i></div></div>`,
css:`.s-sk{display:flex;gap:8px;align-items:center;width:100%}
.s-sk i{display:block;background:var(--line);border-radius:4px;animation:s-sh 1.2s linear infinite}
.s-sk .av{width:30px;height:30px;border-radius:50%}
.s-sk div{flex:1;display:flex;flex-direction:column;gap:5px}
.s-sk .l1{height:8px;width:70%}
.s-sk .l2{height:8px;width:45%}
@keyframes s-sh{50%{opacity:.45}}
@media(prefers-reduced-motion:reduce){.s-sk i{animation:none}}`},

/* ---------- 导航 5 ---------- */
{id:'breadcrumb-spec',group:'导航',t:'面包屑',en:'breadcrumb',rule:'路径帮助用户理解层级和返回位置；是否折叠按屏宽与路径长度决定。',dont:'折叠后无法识别当前位置，也没有展开完整路径的方式。',
body:`<div class="s-bc"><a href="#">首页</a><span>/</span><span>往期</span><span>/</span><b>第 07 期</b></div>`,
css:`.s-bc{display:flex;gap:6px;align-items:center;font-size:9.5px;color:var(--muted)}
.s-bc a{text-decoration:none;color:var(--faint)}
.s-bc b{color:var(--ink);font-weight:600}`},

{id:'pagination-spec',group:'导航',t:'分页',en:'pagination',rule:'当前页永远可见；首尾页给入口，中间用省略号。',dont:'只给“上一页/下一页”，不告诉我在第几页。',
body:`<div class="s-pn"><button>‹</button><button aria-current="page">2</button><button>3</button><button>4</button><span>…</span><button>12</button><button>›</button></div>`,
css:`.s-pn{display:flex;align-items:center;gap:3px;font-size:9.5px}
.s-pn button{width:22px;height:22px;border:1px solid var(--line);border-radius:5px;background:var(--paper);color:var(--muted);cursor:pointer}
.s-pn button[aria-current=page]{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.s-pn span{color:var(--faint);padding:0 2px}`,
init:(card)=>{const bs=[...card.querySelectorAll('.s-pn button')];bs.forEach(b=>b.onclick=()=>{const t=b.textContent;if(t==='‹'||t==='›')return;bs.forEach(x=>x.removeAttribute('aria-current'));b.setAttribute('aria-current','page');});}},

{id:'tabs-spec',group:'导航',t:'页签',en:'tabs',rule:'页签切换内容，不跳页；键盘左右键也要能切。',dont:'用页签做多步表单的步骤。',
body:`<div class="s-tabs" role="tablist"><button role="tab" aria-selected="true" data-tab3="0">本期</button><button role="tab" aria-selected="false" data-tab3="1">往期</button></div><div class="s-panel" data-tabpanel>本期 6 篇文章</div>`,
css:`.s-tabs{display:flex;gap:2px;border-bottom:1px solid var(--line)}
.s-tabs button{border:0;background:transparent;font-size:10px;padding:5px 9px;color:var(--muted);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-1px}
.s-tabs button[aria-selected=true]{color:var(--ink);border-color:var(--ink)}
.s-panel{margin-top:7px;font-size:9.5px;color:var(--muted)}`,
init:(card)=>{const bs=[...card.querySelectorAll('[data-tab3]')],p=card.querySelector('[data-tabpanel]');bs.forEach(b=>b.onclick=()=>{bs.forEach(x=>x.setAttribute('aria-selected',String(x===b)));p.textContent=b.textContent==='本期'?'本期 6 篇文章':'往期 12 篇文章';});}},

{id:'stepper-spec',group:'导航',t:'步骤条',en:'stepper',rule:'当前、完成、未开始三态；失败时只标失败那一步。',dont:'所有步骤都打勾，却还没提交。',
body:`<div class="s-stp"><span class="done">1 检查</span><span class="live">2 构建</span><span>3 发布</span></div>`,
css:`.s-stp{display:flex;gap:3px;width:100%}
.s-stp span{flex:1;text-align:center;font-size:8.5px;padding:4px 2px;border:1px solid var(--line);border-radius:4px;color:var(--faint)}
.s-stp .done{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.s-stp .live{border-color:var(--ink);color:var(--ink);background:var(--lime-soft)}`},

{id:'sidenav-spec',group:'导航',t:'侧栏导航',en:'side nav',rule:'当前项与分组应容易识别；图标、底色、字重或其他提示按信息需要选用。',dont:'只靠难以辨认的颜色区分当前项，或图标与名称不对应。',
body:`<div class="s-sn"><div class="h">本期</div><a class="on" href="#">封面</a><a href="#">文章</a><a href="#">编辑室</a><div class="h">归档</div><a href="#">往期</a><a href="#">关于</a></div>`,
css:`.s-sn{width:120px;display:flex;flex-direction:column;gap:1px;font-size:9.5px}
.s-sn a{text-decoration:none;color:var(--muted);padding:4px 7px;border-radius:4px}
.s-sn a.on{background:var(--lime-soft);color:var(--ink);font-weight:600}
.s-sn .h{font:8px var(--mono);color:var(--faint);letter-spacing:.08em;margin:6px 0 2px}`},

/* ---------- 数据 5 ---------- */
{id:'table-spec',group:'数据',t:'表格规格',en:'table',rule:'表头、数据与操作按实际字段建立层级，数字对齐和行密度服务比较与阅读。',dont:'固定行高裁切真实内容，或字段标签与单元格含义不清。',
body:`<table class="s-tbl"><thead><tr><th>页面</th><th>首屏</th><th>结论</th></tr></thead><tbody><tr><td>首页</td><td>1.2s</td><td>通过</td></tr><tr><td>列表</td><td>2.4s</td><td>退回</td></tr></tbody></table>`,
css:`.s-tbl{width:100%;border-collapse:collapse;font-size:9.5px}
.s-tbl th{font:8px var(--mono);color:var(--faint);text-align:left;padding:4px 6px;border-bottom:1px solid var(--line)}
.s-tbl td{padding:4px 6px;border-bottom:1px solid var(--line);color:var(--muted)}
.s-tbl td:nth-child(2){text-align:right;font-family:var(--mono)}`},

{id:'metric-spec',group:'数据',t:'指标卡',en:'metric card',rule:'一个数配一句解释；变化用方向 + 数值，不只靠颜色。',dont:'把四个不相关的数字塞进一张卡。',
body:`<div class="s-mc"><span>本周阅读</span><b>1,284</b><em>↑ 12% · 较上周</em></div>`,
css:`.s-mc{display:flex;flex-direction:column;gap:1px;width:120px;border-left:2px solid var(--ink);padding-left:9px}
.s-mc span{font:8.5px var(--mono);color:var(--faint)}
.s-mc b{font-size:22px;letter-spacing:-.03em;line-height:1.1}
.s-mc em{font-style:normal;font:8.5px var(--mono);color:var(--ok)}`},

{id:'list-row-spec',group:'数据',t:'列表行',en:'list row',rule:'主信息、辅助信息与操作按用户查找任务组织，字段数量和位置按内容决定。',dont:'为套固定行式而隐藏必要信息，或让次要操作打断阅读顺序。',
body:`<div class="s-lr"><span class="av">林</span><div><b>一条街的招牌</b><span>街道 · 12 分钟</span></div><button>读</button></div>`,
css:`.s-lr{display:flex;align-items:center;gap:7px;width:100%;border-bottom:1px solid var(--line);padding-bottom:6px}
.s-lr .av{width:24px;height:24px;border-radius:50%;background:var(--bg);display:grid;place-items:center;font-size:9px;color:var(--muted)}
.s-lr div{display:flex;flex-direction:column;min-width:0}
.s-lr b{font-size:10px}
.s-lr span{font:8px var(--mono);color:var(--faint)}
.s-lr button{margin-left:auto;font-size:8.5px;border:1px solid var(--line);background:var(--paper);border-radius:4px;padding:2px 7px;cursor:pointer}`},

{id:'kv-spec',group:'数据',t:'键值对',en:'key value',rule:'字段名与值清楚对应，按内容长度选择同行、换行或表格。',dont:'长值被截断且无法查看，或换行后不知它属于哪个字段。',
body:`<div class="s-kv"><div><span>作者</span><b>林一舟</b></div><div><span>栏目</span><b>街道</b></div><div><span>阅读</span><b>12 分钟</b></div></div>`,
css:`.s-kv{width:100%;display:flex;flex-direction:column;gap:3px}
.s-kv div{display:flex;justify-content:space-between;gap:8px;font-size:9.5px;border-bottom:1px solid var(--line);padding-bottom:3px}
.s-kv span{color:var(--faint);font:8.5px var(--mono)}
.s-kv b{font-weight:500;color:var(--ink)}`},

{id:'tree-spec',group:'数据',t:'树形',en:'tree',rule:'层级与展开关系应可辨识；缩进、图标等表现按内容与空间调整。',dont:'给没有子项的节点标注可展开，或展开后失去层级关系。',
body:`<div class="s-tr"><button data-tr aria-expanded="true">▾ 第 07 期</button><div><button data-tr aria-expanded="false">▸ 街道</button><div hidden><p>招牌</p><p>路灯</p></div><p>字体</p></div></div>`,
css:`.s-tr{width:150px;font-size:9.5px}
.s-tr button{border:0;background:transparent;font:inherit;color:var(--muted);cursor:pointer;padding:2px 0;display:block}
.s-tr p{margin:1px 0 1px 14px;color:var(--faint);font-size:9px}`,
init:(card)=>{card.querySelectorAll('[data-tr]').forEach(b=>b.onclick=()=>{const open=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!open));b.textContent=(open?'▸ ':'▾ ')+b.textContent.slice(2);const box=b.nextElementSibling;if(box)box.hidden=open;});}},

/* ---------- 浮层 5 ---------- */
{id:'tooltip-spec',group:'浮层',t:'Tooltip',en:'tooltip',rule:'只补充一句说明，不承载操作；hover 和 focus 都能出现。',dont:'Tooltip 里放链接或按钮。',
body:`<div class="s-tt"><button data-tt aria-describedby="s-tt-tip">ⓘ</button><span id="s-tt-tip" role="tooltip">复制本文链接</span></div>`,
css:`.s-tt{position:relative;display:inline-block}
.s-tt button{width:22px;height:22px;border-radius:50%;border:1px solid var(--line);background:var(--paper);font-size:10px;cursor:pointer}
.s-tt span{position:absolute;left:50%;bottom:28px;transform:translateX(-50%);background:var(--ink);color:var(--paper);font-size:8.5px;padding:3px 7px;border-radius:4px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s}
.s-tt button:hover+span,.s-tt button:focus-visible+span{opacity:1}`},

{id:'popover-spec',group:'浮层',t:'Popover',en:'popover',rule:'浮层提供与当前操作相关的补充内容，提供清楚的关闭与焦点路径；长度按任务决定。',dont:'浮层越出屏幕、遮住目标，或只能靠鼠标关闭。',
body:`<div class="s-pop"><button data-pp aria-expanded="false">筛选</button><div class="box" data-ppbox hidden><b>按栏目</b><p>街道 · 字体 · 物件 · 手艺</p></div></div>`,
css:`.s-pop{position:relative}
.s-pop>button{font-size:9.5px;border:1px solid var(--line);background:var(--paper);border-radius:5px;padding:4px 9px;cursor:pointer}
.s-pop .box{position:absolute;left:0;top:30px;width:150px;border:1px solid var(--line);border-radius:6px;background:var(--paper);padding:8px;box-shadow:0 8px 18px #20241e14;z-index:2}
.s-pop b{font-size:9.5px}
.s-pop p{margin:3px 0 0;font-size:8.5px;color:var(--faint)}`,
init:(card)=>{const b=card.querySelector('[data-pp]'),box=card.querySelector('[data-ppbox]');b.onclick=()=>{box.hidden=!box.hidden;b.setAttribute('aria-expanded',String(!box.hidden));};card.addEventListener('keydown',e=>{if(e.key==='Escape'){box.hidden=true;b.setAttribute('aria-expanded','false');}});}},

{id:'menu-spec',group:'浮层',t:'下拉菜单',en:'menu',rule:'菜单顺序、分组与图标按任务频率和后果设计，危险动作写清含义。',dont:'顺序不稳定或动作命名含糊，导致误操作。',
body:`<div class="s-mm2"><button data-mm2 aria-expanded="false">更多 ▾</button><div class="box" data-mm2box hidden><button>重命名</button><button>复制链接</button><button class="danger">删除</button></div></div>`,
css:`.s-mm2{position:relative}
.s-mm2>button{font-size:9.5px;border:1px solid var(--line);background:var(--paper);border-radius:5px;padding:4px 9px;cursor:pointer}
.s-mm2 .box{position:absolute;left:0;top:30px;width:110px;border:1px solid var(--line);border-radius:6px;background:var(--paper);box-shadow:0 8px 18px #20241e14;padding:4px;z-index:2}
.s-mm2 .box button{display:block;width:100%;text-align:left;border:0;background:transparent;font-size:9px;padding:5px 7px;border-radius:4px;cursor:pointer;color:var(--muted)}
.s-mm2 .box button:hover{background:var(--bg)}
.s-mm2 .danger{color:var(--warn)}`,
init:(card)=>{const b=card.querySelector('[data-mm2]'),box=card.querySelector('[data-mm2box]');b.onclick=()=>{box.hidden=!box.hidden;b.setAttribute('aria-expanded',String(!box.hidden));};}},

{id:'dialog-spec',group:'浮层',t:'对话框',en:'dialog',rule:'打开后焦点进入，关闭后回到触发位置；需要嵌套时维护每一层的返回与关闭顺序。',dont:'焦点逃到遮罩后面，或关闭子层后丢失父层上下文。',
body:`<button class="s-do" data-do>打开对话框</button><div class="ov" data-dov hidden><div class="dlg" role="dialog" aria-modal="true"><b>删除这一期？</b><p>删除后文章会进入回收站，30 天内可恢复。</p><div><button data-dclose>取消</button><button class="danger">删除</button></div></div></div>`,
css:`.s-do{font-size:9.5px;border:1px solid var(--line);background:var(--paper);border-radius:5px;padding:4px 9px;cursor:pointer}
.ov{position:absolute;inset:0;background:#20241e55;display:grid;place-items:center;border-radius:8px}
.dlg{background:var(--paper);border-radius:8px;padding:12px;width:190px;box-shadow:0 16px 30px #20241e33}
.dlg b{font-size:10.5px}
.dlg p{margin:4px 0 9px;font-size:8.5px;color:var(--muted);line-height:1.6}
.dlg div{display:flex;gap:5px;justify-content:flex-end}
.dlg button{font-size:8.5px;border:1px solid var(--line);background:var(--paper);border-radius:4px;padding:3px 8px;cursor:pointer}
.dlg .danger{color:var(--warn);border-color:var(--coral)}`,
init:(card)=>{const ov=card.querySelector('[data-dov]'),open=card.querySelector('[data-do]');open.onclick=()=>{ov.hidden=false;ov.querySelector('[data-dclose]').focus();};ov.querySelector('[data-dclose]').onclick=()=>{ov.hidden=true;open.focus();};}},

{id:'drawer-spec',group:'浮层',t:'抽屉',en:'drawer',rule:'抽屉在处理局部任务时保留上下文；进入方向、尺寸和布局按设备与内容调整。',dont:'挤压或遮挡主要任务，用户找不到退出方式。',
body:`<button class="s-dr" data-dr>打开详情</button><div class="dbox" data-drbox hidden><b>第 07 期</b><p>6 篇文章 · 10.12 出刊</p><button data-drclose>关闭</button></div>`,
css:`.s-dr{font-size:9.5px;border:1px solid var(--line);background:var(--paper);border-radius:5px;padding:4px 9px;cursor:pointer}
.dbox{position:absolute;right:0;top:0;bottom:0;width:120px;background:var(--paper);border-left:1px solid var(--line);padding:10px;box-shadow:-8px 0 18px #20241e18;z-index:2}
.dbox b{font-size:10px}.dbox p{margin:4px 0 10px;font-size:8.5px;color:var(--faint)}
.dbox button{font-size:8.5px;border:1px solid var(--line);background:transparent;border-radius:4px;padding:2px 6px;cursor:pointer}`,
init:(card)=>{const b=card.querySelector('[data-dr]'),box=card.querySelector('[data-drbox]');b.onclick=()=>{box.hidden=false;};box.querySelector('[data-drclose]').onclick=()=>{box.hidden=true;b.focus();};}},

/* ---------- 布局 4 ---------- */
{id:'grid-spec',group:'布局',t:'栅格',en:'grid',rule:'按内容关系分配行列和跨区，不限定列数、间距倍数或固定栅格。',dont:'为了填满预设格子而虚构模块，或在窄屏保留无法阅读的列宽。',
body:`<div class="s-gr"><i style="grid-column:span 4">4</i><i style="grid-column:span 8">8</i><i style="grid-column:span 6">6</i><i style="grid-column:span 6">6</i></div>`,
css:`.s-gr{display:grid;grid-template-columns:repeat(12,1fr);gap:3px;width:100%}
.s-gr i{height:18px;background:var(--lime-soft);border:1px solid var(--line);border-radius:3px;font:8px/18px var(--mono);text-align:center;color:var(--faint);font-style:normal}`},

{id:'container-spec',group:'布局',t:'容器宽度',en:'container',rule:'容器宽度结合内容长度、设备、语言和阅读任务决定，可固定、流动或混合。',dont:'行宽让长文难以跟读，或容器限制导致控件与文字溢出。',
body:`<div class="s-ct"><div style="width:42%">正文 640</div><div style="width:68%">页面 960</div><div style="width:92%">宽屏 1200</div></div>`,
css:`.s-ct{display:flex;flex-direction:column;gap:4px;width:100%;font:8px var(--mono);color:var(--faint)}
.s-ct div{border:1px dashed var(--line);border-radius:3px;padding:3px 6px;background:var(--paper)}`},

{id:'spacing-spec',group:'布局',t:'间距节奏',en:'spacing scale',rule:'间距表达分组与主次；尺度和档数由当前项目决定，不限定数值或倍数。',dont:'间距使关联内容分离，或无关内容挤在一起。',
body:`<div class="s-sp"><i style="--w:4px">4</i><i style="--w:8px">8</i><i style="--w:12px">12</i><i style="--w:16px">16</i><i style="--w:24px">24</i><i style="--w:32px">32</i></div>`,
css:`.s-sp{display:flex;flex-direction:column;gap:3px;width:100%;font:8px var(--mono);color:var(--faint)}
.s-sp i{display:flex;align-items:center;gap:5px;font-style:normal}
.s-sp i:before{content:"";width:var(--w);height:4px;background:var(--ink);border-radius:2px}`},

{id:'sticky-spec',group:'布局',t:'粘性区域',en:'sticky',rule:'粘性头在滚动时留出上下文；不要挡住焦点。',dont:'粘性元素盖住正文。',
body:`<div class="s-stc"><div class="hd">栏目导航</div><div class="bd"><p>往下滚。</p><p>标题会停住。</p><p>但不会盖住正文。</p><p>再往下。</p><p>到底。</p></div></div>`,
css:`.s-stc{width:140px;height:110px;overflow:auto;border:1px solid var(--line);border-radius:6px;background:var(--paper)}
.s-stc .hd{position:sticky;top:0;background:var(--ink);color:var(--paper);font:8px var(--mono);padding:5px 7px;z-index:1}
.s-stc .bd{padding:7px;font-size:9px;color:var(--muted);line-height:1.7}
.s-stc p{margin:0 0 4px}`},

/* ---------- 状态 5 ---------- */
{id:'states-matrix',group:'状态',t:'状态矩阵',en:'state matrix',rule:'按组件实际行为覆盖必要的默认、操作、焦点、等待和不可用状态，不要求固定状态数量。',dont:'只展示外观，实际操作时缺少结果、失败或焦点提示。',
body:`<div class="s-sm2"><button>默认</button><button class="h">悬停</button><button class="a">按下</button><button class="f">焦点</button><button disabled>禁用</button></div>`,
css:`.s-sm2{display:flex;flex-wrap:wrap;gap:4px}
.s-sm2 button{font-size:8.5px;padding:4px 8px;border:1px solid var(--line);border-radius:5px;background:var(--paper);cursor:pointer}
.s-sm2 .h{background:var(--bg)}
.s-sm2 .a{transform:scale(.97);background:var(--bg)}
.s-sm2 .f{outline:2px solid var(--blue);outline-offset:2px}
.s-sm2 button[disabled]{opacity:.42;cursor:not-allowed}`},

{id:'disabled-spec',group:'状态',t:'禁用态',en:'disabled',rule:'不可用操作需说明当前状态与原因；是否保留入口由任务决定。',dont:'入口消失或灰到无法阅读，用户无法理解如何继续。',
body:`<div class="s-dis"><button disabled>发布</button><input disabled value="只读内容"><p>发布前需要先选栏目。</p></div>`,
css:`.s-dis{display:flex;flex-direction:column;gap:5px;width:100%;font-size:9px}
.s-dis button{padding:4px 9px;border:1px solid var(--line);border-radius:5px;background:var(--bg);color:var(--faint);align-self:start}
.s-dis input{padding:4px 7px;border:1px solid var(--line);border-radius:4px;background:var(--bg);color:var(--faint);font-size:9px}
.s-dis p{margin:0;color:var(--faint);font-size:8.5px}`},

{id:'error-spec',group:'状态',t:'错误态',en:'error state',rule:'说清什么没成功、为什么、下一步做什么。',dont:'只写“操作失败”。',
body:`<label class="s-er2">邮箱<input value="name@"><span>缺少域名，比如 name@example.com</span></label>`,
css:`.s-er2{display:flex;flex-direction:column;gap:3px;width:100%;font-size:9px;color:var(--faint)}
.s-er2 input{padding:5px 7px;border:1px solid var(--coral);border-radius:4px;background:var(--paper);font-size:9.5px;outline:none}
.s-er2 span{color:var(--warn);font-size:8.5px}`},

{id:'readonly-spec',group:'状态',t:'只读态',en:'readonly',rule:'只读不是禁用：内容可选中、可复制，只是不能改。',dont:'用禁用样式把只读内容变灰。',
body:`<label class="s-ro">房间名称<input readonly value="官网改版"></label>`,
css:`.s-ro{display:flex;flex-direction:column;gap:3px;width:100%;font-size:9px;color:var(--faint)}
.s-ro input{padding:5px 7px;border:1px solid var(--line);border-radius:4px;background:var(--paper);color:var(--ink);font-size:9.5px}`},

{id:'empty-state-spec',group:'状态',t:'空态',en:'empty state',rule:'说明当前为什么没有内容，并按任务提供下一步；可以使用插画、文字或其他适合形式。',dont:'把空结果当故障，或用无关宣传替代恢复路径。',
body:`<div class="s-es2"><b>还没有收藏</b><p>读到喜欢的文章，点右上角的书签。</p><button>去本期看看</button></div>`,
css:`.s-es2{text-align:center;padding:8px}
.s-es2 b{font-size:10px}
.s-es2 p{margin:3px 0 7px;font-size:8.5px;color:var(--faint);line-height:1.6}
.s-es2 button{font-size:8.5px;border:1px solid var(--line);background:var(--paper);border-radius:99px;padding:3px 9px;cursor:pointer}`},

/* ---------- 无障碍 5 ---------- */
{id:'keyboard-spec',group:'无障碍',t:'键盘焦点',en:'keyboard focus',rule:'Tab 顺序跟着视觉顺序；焦点环不能被裁掉。',dont:'用 outline:none 去掉焦点。',
body:`<div class="s-kb"><button>第一个</button><button>第二个</button><button>第三个</button></div><p class="s-kn">按 Tab 走一遍</p>`,
css:`.s-kb{display:flex;gap:5px}
.s-kb button{font-size:9px;padding:4px 8px;border:1px solid var(--line);border-radius:5px;background:var(--paper);cursor:pointer}
.s-kb button:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
.s-kn{margin:7px 0 0;font:8px var(--mono);color:var(--faint)}`},

{id:'skip-spec',group:'无障碍',t:'跳过导航',en:'skip link',rule:'键盘用户按 Tab 时第一个出现；直达正文。',dont:'把它藏到只能用鼠标点。',
body:`<a class="s-sk2" href="#" data-sk2>跳到正文</a><div class="s-box2">导航 · 本期 · 往期</div><div class="s-body2" data-sk2t tabindex="-1">正文从这里开始。</div>`,
css:`.s-sk2{position:absolute;left:-999px;top:2px;background:var(--ink);color:var(--paper);font-size:8.5px;padding:3px 7px;border-radius:4px;z-index:2}
.s-sk2:focus{left:4px}
.s-box2{font:8px var(--mono);color:var(--faint);border-bottom:1px solid var(--line);padding-bottom:5px;margin-bottom:6px}
.s-body2{font-size:9.5px;color:var(--muted);padding:5px;border-radius:4px;outline:none}
.s-body2.flash{background:var(--lime);color:#141a10}`,
init:(card)=>{const a=card.querySelector('[data-sk2]'),t=card.querySelector('[data-sk2t]');a.onclick=(e)=>{e.preventDefault();t.focus();t.classList.add('flash');setTimeout(()=>t.classList.remove('flash'),900);};}},

{id:'aria-spec',group:'无障碍',t:'ARIA 标签',en:'aria label',rule:'没有可见文字的控件需要可理解的无障碍名称，可用 aria-label、aria-labelledby 等适合方式。',dont:'名称只写按钮或图标，无法说明将执行什么动作。',
body:`<div class="s-ar"><button aria-label="复制本文链接">⧉</button><span>accessible name = 复制本文链接</span></div>`,
css:`.s-ar{display:flex;align-items:center;gap:8px}
.s-ar button{width:28px;height:28px;border:1px solid var(--line);border-radius:6px;background:var(--paper);cursor:pointer;font-size:12px}
.s-ar span{font:8px var(--mono);color:var(--faint)}`},

{id:'contrast-spec',group:'无障碍',t:'对比度',en:'contrast',rule:'根据目标可访问性要求实测文字、控件与焦点对比度；配色由项目决定。',dont:'文字或状态提示融入背景，无法识别主要信息。',
body:`<div class="s-co"><p style="color:var(--ink)">正文 15.1:1</p><p style="color:var(--muted)">次要 4.5:1</p><p style="color:var(--faint)">极淡 2.6:1</p></div>`,
css:`.s-co{width:100%;font-size:10px;line-height:1.9}
.s-co p{margin:0}
.s-co p:last-child{text-decoration:line-through;text-decoration-color:var(--coral)}`},

{id:'reduced-motion-spec',group:'无障碍',t:'减少动效',en:'reduced motion',rule:'尊重系统减少动效偏好，减少或替换可能造成不适的运动，同时保留状态信息。',dont:'状态只通过动画表达，减少动画后无法理解结果。',
body:`<div class="s-rm2"><i></i><span data-rm2>检查系统设置…</span></div>`,
css:`.s-rm2{display:flex;align-items:center;gap:8px;font-size:9px;color:var(--muted)}
.s-rm2 i{width:26px;height:26px;border-radius:7px;background:var(--lime);animation:s-flip 1.4s var(--ease) infinite}
@keyframes s-flip{50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){.s-rm2 i{animation:none;background:var(--lime-soft);border:1px solid var(--lime)}}`,
init:(card)=>{const span=card.querySelector('[data-rm2]'),mq=matchMedia('(prefers-reduced-motion: reduce)');const set=()=>span.textContent=mq.matches?'系统已开启：动画停止，颜色仍在':'系统未开启：动画运行';set();mq.addEventListener?.('change',set);}}
];
