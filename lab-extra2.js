/* 自动生成：node tools/emit.mjs —— 不要手改。真源是 data/assets/motion/*.json 中 source=lab-extra2 的条目。 */
/* DEMOS_EXTRA 会被主脚本并入 DEMOS；INITS_EXTRA 并入对应的交互初始化。 */
window.DEMOS_EXTRA = (window.DEMOS_EXTRA || []).concat([
{id:'shared-element',cat:"过渡",t:"共享元素转场",en:"shared element",d:"同一张卡从列表\"长\"进详情；靠 view-transition-name 让浏览器接管首末位。",body:`
  <div class="d-se"><div class="d-shared-element-se-list"><button class="d-shared-element-se-card" data-se>项目卡</button></div><div class="d-shared-element-se-detail" hidden><h4>项目卡</h4><p>这就是共享元素：卡片的位置与尺寸由浏览器补间。</p><button class="d-btn" data-seback>返回</button></div></div>`,css:`.d-se{width:230px;min-height:110px}
.d-shared-element-se-card{width:100%;padding:12px;border-radius:10px;border:1px solid var(--line);background:var(--paper);font:inherit;font-size:11px;cursor:pointer;view-transition-name:se-card}
.d-shared-element-se-detail{padding:12px;border-radius:10px;border:1px solid var(--line);background:var(--paper)}
.d-shared-element-se-detail h4{margin:0 0 4px;font-size:13px;view-transition-name:se-card}
.d-shared-element-se-detail p{margin:0 0 8px;font-size:11px;color:var(--muted)}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`},
{id:'morph-button',cat:"过渡",t:"容器变形",en:"morph button → input",d:"按钮被点后原地变成输入框；宽度、圆角、内边距一起过渡，不是闪现。",body:`
  <div class="d-morph"><input class="d-morph-button-morph-input" placeholder="输入任务名，回车确认"><button class="d-btn d-btn-primary d-morph-button-morph-btn">＋ 新建任务</button></div>`,css:`.d-morph{position:relative;width:220px;height:36px}
.d-morph .d-morph-button-morph-input,.d-morph .d-morph-button-morph-btn{position:absolute;inset:0;width:100%;height:36px;font:inherit;font-size:11px;border-radius:10px;transition:opacity .28s var(--ease),transform .28s var(--ease)}
.d-morph .d-morph-button-morph-input{padding:0 10px;border:1px solid var(--line);background:var(--paper);color:inherit;opacity:0;transform:scaleX(.6);transform-origin:left}
.d-morph[data-open] .d-morph-button-morph-input{opacity:1;transform:none}
.d-morph[data-open] .d-morph-button-morph-btn{opacity:0;transform:scaleX(.6);pointer-events:none}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
.d-btn.d-btn-primary{background:var(--ink);color:var(--paper);border-color:var(--ink)}
`},
{id:'choreography',cat:"入场",t:"错峰编排",en:"choreography",d:"一个面板打开时，标题先、正文后、按钮最后；顺序对了才显得\"有秩序\"。",body:`
  <button class="d-btn" data-chor>打开面板</button><div class="d-chor" hidden><b>成员设置</b><p>这里是说明文字。</p><button class="d-btn">保存</button></div>`,css:`.d-chor{position:absolute;top:44px;left:20px;width:190px;padding:12px;border-radius:10px;border:1px solid var(--line);background:var(--paper);box-shadow:0 12px 28px #20241e18}
.d-chor b,.d-chor p,.d-chor button{display:block;opacity:0;transform:translateY(6px);animation:d-choreography-chor-in .32s var(--ease) forwards}
.d-chor p{margin:4px 0 10px;font-size:11px;color:var(--muted)}
.d-chor b{animation-delay:0ms}.d-chor p{animation-delay:60ms}.d-chor button{animation-delay:120ms}
@keyframes d-choreography-chor-in{to{opacity:1;transform:none}}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`},
{id:'enter-exit',cat:"入场",t:"进出场配对",en:"enter/exit pair",d:"进的曲线要弹、出的曲线要快；同一条曲线进出就会\"黏\"。",body:`
  <div class="d-ee"></div><button class="d-btn" data-ee>加一条 / 删一条</button>`,css:`.d-ee{display:flex;flex-direction:column;gap:6px;width:150px;min-height:60px}
.d-ee i{height:22px;border-radius:6px;background:color-mix(in srgb,var(--ink) 10%,transparent);animation:d-enter-exit-ee-in .34s var(--ease-spring)}
.d-ee i.leaving{animation:d-enter-exit-ee-out .2s var(--ease) forwards}
@keyframes d-enter-exit-ee-in{from{opacity:0;transform:translateY(8px) scale(.96)}to{opacity:1;transform:none}}
@keyframes d-enter-exit-ee-out{to{opacity:0;transform:translateX(12px) scale(.96)}}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease-spring),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`},
{id:'scrolly',cat:"滚动",t:"滚动叙事",en:"scrollytelling",d:"滚到第几屏就点亮第几步；适合讲\"这件事怎么发生的\"。",body:`
  <div class="d-scrolly"><div class="d-scrolly-steps"><b data-s="0" class="d-scrolly-on">① 收集</b><b data-s="1">② 拆解</b><b data-s="2">③ 验收</b></div><div class="d-scrolly-panes"><div>把零散想法整理成一份清单。</div><div>按优先级拆成可执行的步骤。</div><div>逐项核对后确认交付。</div></div></div>`,css:`.d-scrolly{display:flex;gap:12px;width:100%}
.d-scrolly .d-scrolly-steps{display:flex;flex-direction:column;gap:8px;font-size:11px;color:var(--faint)}
.d-scrolly .d-scrolly-steps b.d-scrolly-on{color:var(--ink)}
.d-scrolly .d-scrolly-panes{flex:1;height:110px;overflow:auto;scroll-snap-type:y mandatory;border-left:1px solid var(--line);padding-left:12px}
.d-scrolly .d-scrolly-panes div{height:110px;scroll-snap-align:start;font-size:11px;color:var(--muted);display:flex;align-items:center}`},
{id:'sticky-stack',cat:"滚动",t:"粘性堆叠",en:"sticky stack",d:"卡片一张张叠上来（sticky + top 递增），列表有层级感。",body:`
  <div class="d-stack2"><div>卡 1</div><div>卡 2</div><div>卡 3</div></div>`,css:`.d-stack2{height:130px;overflow:auto;display:flex;flex-direction:column;gap:50px;padding:4px}
.d-stack2 div{position:sticky;top:4px;padding:14px;border-radius:10px;border:1px solid var(--line);background:var(--paper);font-size:11px;box-shadow:0 6px 16px #20241e10}
.d-stack2 div:nth-child(2){top:14px}.d-stack2 div:nth-child(3){top:24px}`},
{id:'snap-carousel',cat:"滚动",t:"吸附轮播",en:"scroll-snap",d:"一屏一卡、停得准；比 JS 轮播轻，触屏手感天然好。",body:`
  <div class="d-snap"><i>01</i><i>02</i><i>03</i><i>04</i></div>`,css:`.d-snap{display:flex;gap:10px;width:100%;overflow:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding-bottom:4px}
.d-snap i{flex:0 0 78%;height:70px;scroll-snap-align:center;border-radius:10px;display:grid;place-items:center;background:var(--paper);border:1px solid var(--line);font-style:normal;font-size:11px;color:var(--muted)}`},
{id:'pull-refresh',cat:"手势",t:"下拉刷新",en:"pull to refresh",d:"下拉出现进度弧，松手回弹；移动端高频。",body:`
  <div class="d-pull"><i class="d-pull-refresh-spin"></i><div class="d-pull-refresh-list">↓ 往下拖</div></div>`,css:`.d-pull{position:relative;width:200px;height:100px;overflow:hidden;border:1px solid var(--line);border-radius:10px;background:var(--paper)}
.d-pull .d-pull-refresh-list{position:absolute;inset:0;display:grid;place-items:center;font-size:11px;color:var(--faint);transition:transform 180ms var(--ease-spring)}
.d-pull .d-pull-refresh-spin{position:absolute;left:50%;top:6px;width:16px;height:16px;margin-left:-8px;border:2px solid var(--line);border-top-color:var(--ink);border-radius:999px;opacity:0;transform:rotate(0)}
.d-pull[data-pull] .d-pull-refresh-spin{opacity:1}
.d-pull.loading .d-pull-refresh-spin{animation:d-pull-refresh-spin2 .8s linear infinite}
@keyframes d-pull-refresh-spin2{to{transform:rotate(360deg)}}`},
{id:'drop-target',cat:"手势",t:"拖到目标区",en:"drop target",d:"拖卡进某一列时，目标列高亮并出现占位影子。",body:`
  <div class="d-dz"><button class="d-drop-target-dz-card" draggable="true">任务卡</button><div class="d-drop-target-dz-col">拖进这里</div></div>`,css:`.d-dz{display:flex;gap:12px;align-items:center}
.d-drop-target-dz-card{padding:10px 12px;border-radius:10px;border:1px solid var(--line);background:var(--paper);font:inherit;font-size:11px;cursor:grab}
.d-drop-target-dz-col{width:110px;height:70px;border:1.5px dashed var(--line);border-radius:10px;display:grid;place-items:center;font-size:11px;color:var(--faint);transition:border-color 180ms,background-color 180ms,color 180ms}
.d-drop-target-dz-col.over{border-color:var(--ink);background:color-mix(in srgb,var(--lime) 20%,transparent);color:var(--ink)}`},
{id:'flip-number',cat:"数据",t:"数字翻牌",en:"flip number",d:"数字变化时上下翻，而不是整体替换；计数、时钟有\"机械感\"。",body:`<div class="d-flipnum"><i>0</i><i>8</i><i>4</i></div><button class="d-btn" data-flipn>+1</button>`,css:`.d-flipnum{display:flex;gap:4px;font-variant-numeric:tabular-nums}
.d-flipnum i{width:26px;height:36px;display:grid;place-items:center;border-radius:6px;background:var(--paper);border:1px solid var(--line);font-style:normal;font-size:15px;font-weight:650;overflow:hidden}
.d-flipnum i.flip{animation:d-flip-number-kf .42s var(--ease)}
@keyframes d-flip-number-kf{0%{transform:rotateX(0)}50%{transform:rotateX(90deg)}100%{transform:rotateX(0)}}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`},
{id:'sweep-glow',cat:"加载",t:"边框流光",en:"border sweep",d:"AI 生成中/保存中的轻提示；一圈光沿着边框走，不闪屏。",body:`<div class="d-glow">正在生成…</div>`,css:`.d-glow{position:relative;padding:14px 18px;border-radius:10px;background:var(--paper);font-size:11px;color:var(--muted);overflow:hidden}
.d-glow:before{content:"";position:absolute;inset:0;border-radius:10px;padding:1px;background:linear-gradient(90deg,transparent,var(--lime),transparent);background-size:200% 100%;animation:d-sweep-glow-sweep2 1.8s linear infinite;-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}
@keyframes d-sweep-glow-sweep2{to{background-position:-200% 0}}`},
{id:'inertia',cat:"手势",t:"拖拽惯性",en:"inertia drag",d:"松手后按速度继续滑一小段再停；列表、轮播的\"重\"感。",body:`<div class="d-inert"><div class="d-inertia-track"><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i></div></div>`,css:`.d-inert{width:220px;overflow:hidden;border:1px solid var(--line);border-radius:10px;cursor:grab}
.d-inert .d-inertia-track{display:flex;gap:8px;padding:8px;will-change:transform}
.d-inert i{flex:0 0 60px;height:60px;border-radius:10px;display:grid;place-items:center;background:color-mix(in srgb,var(--ink) 6%,transparent);font-style:normal;font-size:11px;color:var(--muted)}`},
{id:'four-states',cat:"加载",t:"四态转场",en:"empty / loading / error / success",d:"同一个容器里换内容，容器不跳；这是\"稳\"的来源。",body:`<div class="d-four"><div class="d-four-states-box" data-st="empty">还没有数据</div></div><div class="d-four-states-rows"><button class="d-btn" data-st4="loading">加载</button><button class="d-btn" data-st4="error">出错</button><button class="d-btn" data-st4="success">成功</button><button class="d-btn" data-st4="empty">空</button></div>`,css:`.d-four{width:200px;height:64px;display:grid;place-items:center;border:1px dashed var(--line);border-radius:10px}
.d-four .d-four-states-box{font-size:11px;color:var(--muted);animation:d-four-states-fade .2s var(--ease)}
.d-four .d-four-states-box[data-st=loading]{color:var(--faint)}
.d-four .d-four-states-box[data-st=error]{color:#a4442c}
.d-four .d-four-states-box[data-st=success]{color:#3f6b2a}
@keyframes d-four-states-fade{from{opacity:.4}to{opacity:1}}
.d-four-states-rows{display:flex;gap:5px;flex-wrap:wrap;margin-top:8px}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`},
{id:'theme-crossfade',cat:"过渡",t:"主题过渡",en:"theme crossfade",d:"换深浅色时整页平滑过渡；用 View Transitions + 一次性覆盖。",body:`<button class="d-btn" data-theme-fade>切一次主题</button>`,css:`
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`},
{id:'motion-scale',cat:"无障碍",t:"动效强度档",en:"motion scale",d:"关 / 克制 / 标准 三档，用户自己选；比\"全有或全无\"好。",body:`<input type="range" min="0" max="2" step="1" value="2" class="d-scale"><span class="d-hint" data-scalenote>标准</span><div class="d-scaledot"></div>`,css:`.d-scale{width:120px}
.d-scaledot{width:26px;height:26px;border-radius:10px;background:var(--lime);animation:d-motion-scale-hop 1.2s var(--ease) infinite}
@keyframes d-motion-scale-hop{50%{transform:translateY(-8px)}}
.d-hint{font-size:11px;color:var(--faint)}
`},
{id:'sidebar-collapse',cat:"布局",t:"侧栏折叠",en:"collapsible sidebar",d:"图标条 ↔ 文字栏，宽度过渡 + 文字淡出；折叠后仍能点。",body:`
  <div class="d-sb" data-open><div class="d-sidebar-collapse-rail2"><button data-sb>☰</button><span>对</span><span>伙</span><span>记</span></div><div class="d-sidebar-collapse-panel2">标签栏<br><small>文字在这里淡出</small></div></div>`,css:`.d-sb{display:flex;height:100px;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--paper)}
.d-sb .d-sidebar-collapse-rail2{width:48px;flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:6px;padding:6px 0;background:color-mix(in srgb,var(--ink) 6%,transparent);font-size:11px;color:var(--muted);transition:width 280ms var(--ease)}
.d-sb .d-sidebar-collapse-panel2{flex:1;min-width:0;padding:8px 10px;font-size:11px;color:var(--muted);opacity:1;transition:opacity 180ms}
.d-sb:not([data-open]) .d-sidebar-collapse-panel2{opacity:0}
.d-sb .d-sidebar-collapse-rail2 button{border:0;background:transparent;cursor:pointer;font:inherit;color:inherit}`},
{id:'image-viewer',cat:"内容",t:"图片查看器",en:"image viewer",d:"缩略图点开大图，可缩放、左右翻、Esc 关；聊天里贴截图必备。",body:`
  <div class="d-iv2"><button class="d-image-viewer-iv-thumb" data-iv="1">图 1</button><button class="d-image-viewer-iv-thumb" data-iv="2">图 2</button><button class="d-image-viewer-iv-thumb" data-iv="3">图 3</button><div class="d-image-viewer-iv-box" hidden><div class="d-image-viewer-iv-img">图 <b>1</b></div><div class="d-image-viewer-iv-bar"><button data-ivprev>‹</button><span data-ivn>1 / 3</span><button data-ivnext>›</button><button data-ivclose>关闭</button></div></div></div>`,css:`.d-iv2{display:flex;gap:8px;flex-wrap:wrap;position:relative}
.d-image-viewer-iv-thumb{width:64px;height:46px;border-radius:10px;border:1px solid var(--line);background:background:#e7eedd;background-image:repeating-linear-gradient(135deg,#dfe8d2 0 8px,#e9f0df 8px 16px);font:inherit;font-size:9px;color:#122016;cursor:zoom-in}
.d-image-viewer-iv-box{position:absolute;left:0;top:52px;width:220px;padding:8px;border-radius:10px;border:1px solid var(--line);background:var(--paper);box-shadow:0 14px 30px #20241e20;z-index:4}
.d-image-viewer-iv-img{height:110px;border-radius:10px;background:background:#e7eedd;background-image:repeating-linear-gradient(135deg,#dfe8d2 0 8px,#e9f0df 8px 16px);display:grid;place-items:center;font-size:11px;color:#122016}
.d-image-viewer-iv-bar{display:flex;align-items:center;gap:8px;margin-top:6px;font-size:11px;color:var(--muted)}
.d-image-viewer-iv-bar button{border:1px solid var(--line);background:transparent;border-radius:6px;font:inherit;font-size:11px;padding:2px 7px;cursor:pointer;color:inherit}`},
{id:'diff-view',cat:"内容",t:"差异视图",en:"diff view",d:"红删绿增、上下文折叠；版本对比最需要。",body:`
  <div class="d-diff"><div class="d-diff-view-line d-diff-view-ctx">  "dependencies": {"react": "^19.0.0"},</div><div class="d-diff-view-line d-diff-view-del">- "vite": "^5.0.0",</div><div class="d-diff-view-line d-diff-view-add">+ "vite": "^6.1.0",</div><button class="d-diff-view-fold" data-fold>展开其余 8 行</button><div class="d-diff-view-more" hidden><div class="d-diff-view-line d-diff-view-ctx">  "files": [...]</div><div class="d-diff-view-line d-diff-view-add">+ "README.md"</div></div></div>`,css:`.d-diff{width:250px;font:12px ui-monospace,Consolas,monospace;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--paper)}
.d-diff .d-diff-view-line{padding:3px 9px;white-space:pre;overflow:hidden;text-overflow:ellipsis}
.d-diff .d-diff-view-add{background:#e4f3d8;color:#22421a}
.d-diff .d-diff-view-del{background:#fbe1da;color:#6d2415}
.d-diff .d-diff-view-ctx{color:var(--muted)}
.d-diff .d-diff-view-fold{border:0;border-top:1px solid var(--line);background:transparent;width:100%;font:11px inherit;padding:5px;color:var(--faint);cursor:pointer}`},
{id:'file-tree',cat:"内容",t:"文件树",en:"file tree",d:"展开/折叠、选中、显示大小；/browse 的数据就能直接喂它。",body:`
  <div class="d-tree"><div class="d-file-tree-node" data-open><b>▾ acme-web</b><div class="d-file-tree-kids"><div class="d-file-tree-node"><b>▸ lib</b></div><div class="d-file-tree-node d-file-tree-leaf d-file-tree-sel">index.js</div><div class="d-file-tree-node d-file-tree-leaf">client.js</div></div></div></div>`,css:`.d-tree{width:200px;font-size:11px}
.d-tree .d-file-tree-node{padding:3px 0}
.d-tree .d-file-tree-node b{font-weight:500;cursor:pointer;color:var(--muted)}
.d-tree .d-file-tree-kids{display:none;padding-left:14px}
.d-tree .d-file-tree-node[data-open]>.d-file-tree-kids{display:block}
.d-tree .d-file-tree-leaf{cursor:pointer;color:var(--muted);padding-left:14px}
.d-tree .d-file-tree-leaf.d-file-tree-sel{color:var(--ink);background:color-mix(in srgb,var(--lime) 35%,transparent);border-radius:6px}`},
{id:'multi-step',cat:"表单",t:"多步表单",en:"multi-step form",d:"步骤间横向滑动，校验不过不放行；比一长条输入友好。",body:`
  <div class="d-ms2"><div class="d-multi-step-strip"><div class="d-multi-step-pane d-multi-step-on">第一步：名字<input class="d-multi-step-ms-input" placeholder="必填"></div><div class="d-multi-step-pane">第二步：说明<input class="d-multi-step-ms-input" placeholder="可留空"></div></div><div class="d-multi-step-nav2"><button class="d-btn" data-msback disabled>上一步</button><button class="d-btn d-btn-primary" data-msnext>下一步</button></div></div>`,css:`.d-ms2{width:220px;overflow:hidden}
.d-ms2 .d-multi-step-strip{display:flex;transition:transform 280ms var(--ease)}
.d-ms2 .d-multi-step-pane{flex:0 0 100%;font-size:11px;color:var(--muted)}
.d-ms2 .d-multi-step-ms-input{display:block;width:100%;margin-top:6px;padding:6px 8px;border:1px solid var(--line);border-radius:6px;background:transparent;color:inherit;font:inherit;font-size:11px;outline:none}
.d-ms2 .d-multi-step-nav2{display:flex;gap:6px;margin-top:8px}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
.d-btn.d-btn-primary{background:var(--ink);color:var(--paper);border-color:var(--ink)}
`},
{id:'kanban',cat:"列表",t:"看板列",en:"kanban board",d:"列间拖卡、列头计数、列内滚动；任务流的骨架。",body:`
  <div class="d-kan"><div class="d-kanban-col" data-col="todo"><b>待办 <em>2</em></b><div class="d-kanban-kcard" draggable="true">需求</div><div class="d-kanban-kcard" draggable="true">设计</div></div><div class="d-kanban-col" data-col="doing"><b>进行中 <em>0</em></b></div></div>`,css:`.d-kan{display:flex;gap:10px;width:100%}
.d-kan .d-kanban-col{flex:1;min-height:110px;padding:8px;border-radius:10px;background:color-mix(in srgb,var(--ink) 4%,transparent);font-size:11px}
.d-kan .d-kanban-col b{display:flex;justify-content:space-between;font-weight:600;color:var(--muted);margin-bottom:6px}
.d-kan .d-kanban-col em{font-style:normal;color:var(--faint)}
.d-kan .d-kanban-kcard{padding:7px 9px;margin-bottom:6px;border-radius:6px;background:var(--paper);border:1px solid var(--line);cursor:grab;font-size:11px}
.d-kan .d-kanban-col.over{outline:1.5px dashed var(--ink)}`},
{id:'infinite-scroll',cat:"列表",t:"无限滚动",en:"infinite scroll",d:"底部哨兵进入视口就加载下一批；带\"正在加载\"细行，不要只有转圈。",body:`
  <div class="d-inf"><div class="d-infinite-scroll-items"><div>第 1 条</div><div>第 2 条</div><div>第 3 条</div><div>第 4 条</div><div>第 5 条</div><div>第 6 条</div></div><div class="d-infinite-scroll-sentinel">滚到底自动加载</div></div>`,css:`.d-inf{width:200px;height:110px;overflow:auto;border:1px solid var(--line);border-radius:10px;font-size:11px}
.d-inf .d-infinite-scroll-items div{padding:7px 10px;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent);color:var(--muted)}
.d-inf .d-infinite-scroll-sentinel{padding:8px;text-align:center;font-size:11px;color:var(--faint)}`},
{id:'sticky-group',cat:"列表",t:"分组吸顶",en:"sticky group headers",d:"按日期分组、组头吸顶；长消息流按天分开最清楚。",body:`
  <div class="d-grp"><div class="d-sticky-group-g"><b>今天</b><p>3 条消息</p><p>再来一条</p></div><div class="d-sticky-group-g"><b>昨天</b><p>2 条消息</p><p>更早一条</p></div></div>`,css:`.d-grp{width:210px;height:110px;overflow:auto;font-size:11px}
.d-grp .d-sticky-group-g b{position:sticky;top:0;display:block;padding:5px 8px;background:var(--bg);color:var(--faint);font-size:11px;letter-spacing:.06em}
.d-grp p{margin:0;padding:7px 8px;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent);color:var(--muted)}`},
{id:'row-expand',cat:"列表",t:"行内展开",en:"inline row expand",d:"点行在原地展开详情，不跳页；列表浏览不打断。",body:`
  <div class="d-rex"><button class="d-row-expand-row2" data-rex>项目讨论组 <span>▾</span></button><div class="d-row-expand-detail2">成员：4 人<br>最近更新：今天 · 3 次</div></div>`,css:`.d-rex{width:230px;font-size:11px}
.d-rex .d-row-expand-row2{width:100%;display:flex;justify-content:space-between;padding:9px 10px;border:1px solid var(--line);border-radius:10px;background:var(--paper);font:inherit;font-size:11px;cursor:pointer;color:inherit}
.d-rex .d-row-expand-detail2{max-height:0;overflow:hidden;font-size:11px;color:var(--muted);line-height:1.8;transition:max-height 280ms var(--ease)}
.d-rex[data-open] .d-row-expand-detail2{max-height:80px;padding-top:6px}`},
{id:'fab',cat:"导航",t:"悬浮操作钮",en:"floating action button",d:"主操作悬浮在右下，点开扇出次操作；移动端高频。",body:`
  <div class="d-fab"><div class="d-fab-acts" hidden><button>新建任务</button><button>邀请成员</button></div><button class="d-fab-fab" data-fab>＋</button></div>`,css:`.d-fab{position:relative;width:180px;height:120px}
.d-fab .d-fab-fab{position:absolute;right:8px;bottom:8px;width:40px;height:40px;border-radius:999px;border:0;background:var(--ink);color:var(--paper);font-size:15px;cursor:pointer;box-shadow:0 8px 20px #20241e26;transition:transform 180ms var(--ease)}
.d-fab[data-open] .d-fab-fab{transform:rotate(45deg)}
.d-fab .d-fab-acts{position:absolute;right:10px;bottom:56px;display:flex;flex-direction:column;gap:6px;align-items:flex-end}
.d-fab .d-fab-acts button{font:inherit;font-size:11px;padding:6px 10px;border-radius:10px;border:1px solid var(--line);background:var(--paper);cursor:pointer;color:inherit}`},
{id:'shortcut-sheet',cat:"导航",t:"快捷键面板",en:"shortcut sheet",d:"按 ? 弹出，分组列出；键盘流要有地方查。",body:`<button class="d-btn" data-ss>按 ? 或点我</button><div class="d-ss" hidden><b>通用</b><p><kbd>Ctrl K</kbd> 命令面板</p><p><kbd>Alt ↑↓</kbd> 切标签</p><b>输入</b><p><kbd>Enter</kbd> 发送</p><p><kbd>Esc</kbd> 关闭浮层</p></div>`,css:`.d-ss{position:absolute;top:40px;left:10px;width:210px;padding:10px 12px;border-radius:10px;border:1px solid var(--line);background:var(--paper);box-shadow:0 14px 30px #20241e1f;font-size:11px;z-index:5}
.d-ss b{display:block;font-size:9px;letter-spacing:.08em;color:var(--faint);margin:6px 0 3px}
.d-ss p{margin:0 0 3px;color:var(--muted)}
.d-ss kbd{font:10.5px ui-monospace,Consolas,monospace;border:1px solid var(--line);border-bottom-width:2px;border-radius:2px;padding:0 5px}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`},
{id:'empty-actions',cat:"反馈",t:"空态带动作",en:"empty state with action",d:"空态不只说\"没有\"，直接给下一步按钮。",body:`
  <div class="d-ea"><svg viewBox="0 0 96 64"><circle cx="48" cy="32" r="20" stroke="var(--line)" fill="none"/><text x="48" y="38" text-anchor="middle" font-size="18" fill="var(--faint)">✳</text></svg><b>还没有项目</b><p>新建一个，或从模板开始。</p><button class="d-btn d-btn-primary">新建项目</button></div>`,css:`.d-ea{width:220px;padding:14px;text-align:center;border:1px dashed var(--line);border-radius:10px}
.d-ea svg{width:80px;height:54px}
.d-ea b{display:block;font-size:13px;margin:2px 0}
.d-ea p{margin:0 0 10px;font-size:11px;color:var(--muted)}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
.d-btn.d-btn-primary{background:var(--ink);color:var(--paper);border-color:var(--ink)}
`},
{id:'skeleton-set',cat:"加载",t:"骨架三种",en:"skeleton variants",d:"列表 / 卡片 / 对话三种骨架，和真实内容同形状。",body:`
  <div class="d-sk3"><div class="d-skeleton-set-k-list"><i></i><i></i><i></i></div><div class="d-skeleton-set-k-card"><i class="d-skeleton-set-big"></i><i></i><i class="d-skeleton-set-short"></i></div><div class="d-skeleton-set-k-chat"><i></i><i class="d-skeleton-set-me"></i><i></i></div></div>`,css:`.d-sk3{display:flex;gap:10px;flex-wrap:wrap}
.d-sk3>div{display:flex;flex-direction:column;gap:6px;width:86px;padding:8px;border:1px solid var(--line);border-radius:10px}
.d-sk3 i{height:8px;border-radius:2px;background:linear-gradient(90deg,color-mix(in srgb,var(--ink) 7%,transparent),color-mix(in srgb,var(--ink) 15%,transparent),color-mix(in srgb,var(--ink) 7%,transparent));background-size:200% 100%;animation:d-skeleton-set-shim2 1.2s linear infinite}
.d-sk3 .d-skeleton-set-k-card .d-skeleton-set-big{height:26px}
.d-sk3 .d-skeleton-set-k-card .d-skeleton-set-short{width:60%}
.d-sk3 .d-skeleton-set-k-chat i{height:14px;width:70%}
.d-sk3 .d-skeleton-set-k-chat .d-skeleton-set-me{align-self:flex-end;background:color-mix(in srgb,var(--lime) 50%,transparent)}
@keyframes d-skeleton-set-shim2{to{background-position:-200% 0}}`}
]);
window.INITS_EXTRA = Object.assign(window.INITS_EXTRA || {}, {
  "shared-element": root => {
    const box = root.querySelector('.d-se'), list = box.querySelector('.d-shared-element-se-list'), det = box.querySelector('.d-shared-element-se-detail');
    const go = () => { list.hidden = !list.hidden; det.hidden = !det.hidden; };
    box.querySelector('[data-se]').onclick = () => document.startViewTransition ? document.startViewTransition(go) : go();
    box.querySelector('[data-seback]').onclick = () => document.startViewTransition ? document.startViewTransition(go) : go();
  },
  "morph-button": root => {
    const box = root.querySelector('.d-morph'), inp = box.querySelector('.d-morph-button-morph-input');
    box.querySelector('.d-morph-button-morph-btn').onclick = () => { box.setAttribute('data-open', ''); inp.focus(); };
    inp.onkeydown = e => { if (e.key === 'Escape' || e.key === 'Enter') box.removeAttribute('data-open'); };
  },
  "choreography": root => {
    root.querySelector('[data-chor]').onclick = () => {
      const p = root.querySelector('.d-chor'); p.hidden = !p.hidden;
      if (!p.hidden) p.querySelectorAll('b,p,button').forEach(el => { el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; });
    };
  },
  "enter-exit": root => root.querySelector('[data-ee]').onclick = () => {
    const box = root.querySelector('.d-ee');
    if (box.children.length >= 4) { const last = box.lastElementChild; last.classList.add('leaving'); setTimeout(() => last.remove(), 220); return; }
    const i = document.createElement('i'); box.appendChild(i);
  },
  "scrolly": root => {
    const panes = root.querySelector('.d-scrolly-panes'), steps = [...root.querySelectorAll('[data-s]')];
    panes.addEventListener('scroll', () => { const idx = Math.round(panes.scrollTop / 110); steps.forEach((s, i) => s.classList.toggle('d-scrolly-on', i === idx)); });
  },
  "pull-refresh": root => {
    const z = root.querySelector('.d-pull'), list = z.querySelector('.d-pull-refresh-list'); let y0 = 0;
    z.addEventListener('pointerdown', e => y0 = e.clientY);
    z.addEventListener('pointermove', e => {
      if (!y0) return; const dy = Math.max(0, Math.min(50, e.clientY - y0));
      if (dy > 6) { z.setAttribute('data-pull', ''); list.style.transform = `translateY(${dy * .5}px)`; }
    });
    z.addEventListener('pointerup', () => {
      if (z.hasAttribute('data-pull')) { z.classList.add('loading'); list.textContent = '刷新中…'; setTimeout(() => { z.classList.remove('loading'); z.removeAttribute('data-pull'); list.style.transform = ''; list.textContent = '↓ 往下拖'; }, 1000); }
      y0 = 0;
    });
  },
  "drop-target": root => {
    const col = root.querySelector('.d-drop-target-dz-col'), card = root.querySelector('.d-drop-target-dz-card');
    card.addEventListener('dragend', () => col.classList.remove('over'));
    col.addEventListener('dragover', e => { e.preventDefault(); col.classList.add('over'); });
    col.addEventListener('dragleave', () => col.classList.remove('over'));
    col.addEventListener('drop', e => { e.preventDefault(); col.classList.remove('over'); col.textContent = '已放入 1 张'; });
  },
  "flip-number": root => {
    const digits = [...root.querySelectorAll('.d-flipnum i')];
    root.querySelector('[data-flipn]').onclick = () => {
      const n = String((Number(digits.map(d => d.textContent).join('')) + 1) % 1000).padStart(3, '0');
      digits.forEach((d, i) => { if (d.textContent !== n[i]) { d.textContent = n[i]; d.classList.remove('flip'); void d.offsetWidth; d.classList.add('flip'); } });
    };
  },
  "inertia": root => {
    const box = root.querySelector('.d-inert'), track = box.querySelector('.d-inertia-track');
    let x = 0, v = 0, x0 = 0, down = false, raf = null;
    const max = () => Math.min(0, box.clientWidth - track.scrollWidth);
    const apply = () => { track.style.transform = `translateX(${x}px)`; };
    box.addEventListener('pointerdown', e => { down = true; x0 = e.clientX; v = 0; cancelAnimationFrame(raf); });
    box.addEventListener('pointermove', e => { if (!down) return; const nx = Math.max(max(), Math.min(0, x + (e.clientX - x0))); v = nx - x; x = nx; x0 = e.clientX; apply(); });
    box.addEventListener('pointerup', () => {
      down = false;
      const glide = () => { v *= .94; x = Math.max(max(), Math.min(0, x + v)); apply(); if (Math.abs(v) > .4) raf = requestAnimationFrame(glide); };
      glide();
    });
  },
  "four-states": root => {
    const box = root.querySelector('.d-four .d-four-states-box');
    const map = { empty: '还没有数据', loading: '加载中…', error: '出错了 · 重试', success: '完成' };
    root.querySelectorAll('[data-st4]').forEach(b => b.onclick = () => { box.dataset.st = b.dataset.st4; box.textContent = map[b.dataset.st4]; box.style.animation = 'none'; void box.offsetWidth; box.style.animation = ''; });
  },
  "theme-crossfade": root => root.querySelector('[data-theme-fade]').onclick = () => {
    const go = () => document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme') === 'night' ? 'paper' : 'night');
    document.startViewTransition ? document.startViewTransition(go) : go();
  },
  "motion-scale": root => {
    const r = root.querySelector('.d-scale'), dot = root.querySelector('.d-scaledot'), note = root.querySelector('[data-scalenote]');
    const names = ['关', '克制', '标准'];
    const apply = () => { const v = +r.value; note.textContent = names[v]; dot.style.animation = v === 0 ? 'none' : v === 1 ? 'd-motion-scale-hop 2.4s var(--ease) infinite' : ''; };
    r.oninput = apply; apply();
  },
  "sidebar-collapse": root => root.querySelector('[data-sb]').onclick = () => root.querySelector('.d-sb').toggleAttribute('data-open'),
  "image-viewer": root => {
    const box = root.querySelector('.d-image-viewer-iv-box'), img = box.querySelector('.d-image-viewer-iv-img b'), n = box.querySelector('[data-ivn]');
    let cur = 1;
    const show = i => { cur = (i + 3 - 1) % 3 + 1; img.textContent = cur; n.textContent = cur + ' / 3'; box.hidden = false; };
    root.querySelectorAll('[data-iv]').forEach(b => b.onclick = () => show(+b.dataset.iv));
    box.querySelector('[data-ivprev]').onclick = () => show(cur - 1);
    box.querySelector('[data-ivnext]').onclick = () => show(cur + 1);
    box.querySelector('[data-ivclose]').onclick = () => box.hidden = true;
  },
  "diff-view": root => root.querySelector('[data-fold]').onclick = e => {
    const more = root.querySelector('.d-diff-view-more'); more.hidden = !more.hidden;
    e.target.textContent = more.hidden ? '展开其余 8 行' : '收起';
  },
  "file-tree": root => root.querySelectorAll('.d-tree .d-file-tree-node b').forEach(b => b.onclick = () => b.parentElement.toggleAttribute('data-open')),
  "multi-step": root => {
    const strip = root.querySelector('.d-multi-step-strip'), panes = [...root.querySelectorAll('.d-multi-step-pane')], back = root.querySelector('[data-msback]'), next = root.querySelector('[data-msnext]');
    let i = 0;
    const apply = () => { strip.style.transform = `translateX(-${i * 100}%)`; back.disabled = i === 0; next.textContent = i === panes.length - 1 ? '完成' : '下一步'; };
    next.onclick = () => { const inp = panes[i].querySelector('input'); if (inp && !inp.value.trim()) { inp.style.borderColor = '#c4553a'; inp.focus(); return; } inp && (inp.style.borderColor = ''); if (i < panes.length - 1) { i++; apply(); } else next.textContent = '已提交'; };
    back.onclick = () => { if (i > 0) { i--; apply(); } };
    apply();
  },
  "kanban": root => {
    root.querySelectorAll('.d-kanban-kcard').forEach(c => c.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', c.textContent)));
    root.querySelectorAll('.d-kanban-col').forEach(col => {
      col.addEventListener('dragover', e => { e.preventDefault(); col.classList.add('over'); });
      col.addEventListener('dragleave', () => col.classList.remove('over'));
      col.addEventListener('drop', e => {
        e.preventDefault(); col.classList.remove('over');
        const card = document.createElement('div'); card.className = 'd-kanban-kcard'; card.draggable = true; card.textContent = e.dataTransfer.getData('text/plain');
        col.appendChild(card);
      });
    });
  },
  "infinite-scroll": root => {
    const box = root.querySelector('.d-inf'), items = box.querySelector('.d-infinite-scroll-items'), sent = box.querySelector('.d-infinite-scroll-sentinel');
    let n = items.children.length, busy = false;
    box.addEventListener('scroll', () => {
      if (busy || box.scrollTop + box.clientHeight < box.scrollHeight - 30) return;
      busy = true; sent.textContent = '正在加载…';
      setTimeout(() => { for (let k = 0; k < 3; k++) { n++; const d = document.createElement('div'); d.textContent = '第 ' + n + ' 条'; items.appendChild(d); } sent.textContent = '滚到底自动加载'; busy = false; }, 700);
    });
  },
  "row-expand": root => root.querySelector('[data-rex]').onclick = e => e.currentTarget.parentElement.toggleAttribute('data-open'),
  "fab": root => {
    const box = root.querySelector('.d-fab'), acts = box.querySelector('.d-fab-acts');
    box.querySelector('[data-fab]').onclick = () => { const open = !box.hasAttribute('data-open'); box.toggleAttribute('data-open', open); acts.hidden = !open; };
  },
  "shortcut-sheet": root => {
    const box = root.querySelector('.d-ss');
    root.querySelector('[data-ss]').onclick = () => box.hidden = !box.hidden;
    const scope = root.closest('.card') || document; scope.addEventListener('keydown', e => { if (e.key === '?') { box.hidden = !box.hidden; } });
  },
});
