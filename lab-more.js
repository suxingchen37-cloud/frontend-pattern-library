/* 自动生成：node tools/emit.mjs —— 不要手改。真源是 data/assets/motion/*.json 中 source=lab-more 的条目。 */
/* DEMOS_EXTRA 会被主脚本并入 DEMOS；INITS_EXTRA 并入对应的交互初始化。 */
window.DEMOS_EXTRA = (window.DEMOS_EXTRA || []).concat([
{id:'float-label',cat:"表单",t:"浮动标签",en:"floating label",d:"聚焦或有内容时标签缩小上浮，省一行高度、又不会丢失上下文。",body:`
  <label class="d-fl"><input type="text" placeholder=" "><span>项目名称</span></label>`,css:`.d-fl{position:relative;display:block;width:200px}
.d-fl input{width:100%;padding:16px 12px 8px;border:1px solid var(--line);border-radius:10px;background:transparent;color:inherit;font:inherit;font-size:13px;outline:none}
.d-fl span{position:absolute;left:12px;top:13px;font-size:11px;color:var(--faint);pointer-events:none;transition:top 180ms var(--ease),font-size 180ms var(--ease),color 180ms var(--ease)}
.d-fl input:focus{border-color:var(--ink)}
.d-fl input:focus+span,.d-fl input:not(:placeholder-shown)+span{top:5px;font-size:9px;color:var(--muted)}`},
{id:'otp',cat:"表单",t:"验证码分格",en:"OTP input",d:"4–6 格自动跳位，退格回退；粘贴整串能自动分配。",body:`<div class="d-otp"><input maxlength="1"><input maxlength="1"><input maxlength="1"><input maxlength="1"></div>`,css:`.d-otp{display:flex;gap:8px}
.d-otp input{width:38px;height:44px;text-align:center;font-size:15px;border:1px solid var(--line);border-radius:10px;background:transparent;color:inherit;outline:none}
.d-otp input:focus{border-color:var(--ink)}`},
{id:'tag-input',cat:"表单",t:"标签输入",en:"tag input",d:"回车加一个标签，退格删最后一个；比下拉多选快。",body:`<div class="d-tags"><span class="d-tag-input-chip">交付<i>×</i></span><input placeholder="输入后回车"></div>`,css:`.d-tags{display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding:8px 10px;border:1px solid var(--line);border-radius:10px;min-width:220px}
.d-tags input{border:0;background:transparent;color:inherit;font:inherit;font-size:11px;outline:none;flex:1;min-width:90px}
.d-tags .d-tag-input-chip{display:inline-flex;gap:6px;align-items:center;padding:3px 8px;border-radius:999px;background:color-mix(in srgb,var(--ink) 8%,transparent);font-size:11px}
.d-tags .d-tag-input-chip i{font-style:normal;cursor:pointer;opacity:.6}`},
{id:'segmented',cat:"表单",t:"分段选择",en:"segmented control",d:"2–4 个互斥选项，滑块跟随；比 radio 更省地方。",body:`<div class="d-seg" data-v="0"><i class="d-segmented-pill"></i><button>全部</button><button>进行中</button><button>已完成</button></div>`,css:`.d-seg{position:relative;display:inline-flex;padding:3px;border-radius:10px;background:color-mix(in srgb,var(--ink) 7%,transparent)}
.d-seg button{position:relative;z-index:1;border:0;background:transparent;color:var(--ink);font:inherit;font-size:11px;padding:6px 12px;cursor:pointer}
.d-seg .d-segmented-pill{position:absolute;top:3px;left:3px;height:calc(100% - 6px);border-radius:10px;background:var(--paper);box-shadow:0 1px 3px #0002;transition:left 280ms var(--ease),width 280ms var(--ease)}`},
{id:'strength',cat:"表单",t:"密码强度",en:"password strength",d:"边输边告诉用户差在哪；比事后报错体验好。",body:`<input class="d-pw" type="password" placeholder="输入密码"><div class="d-bars3"><i></i><i></i><i></i></div><span class="d-hint" data-hint></span>`,css:`.d-pw{width:200px;padding:8px 10px;border:1px solid var(--line);border-radius:10px;background:transparent;color:inherit;font:inherit;font-size:11px;outline:none}
.d-bars3{display:flex;gap:5px;width:200px;margin-top:8px}
.d-bars3 i{height:4px;flex:1;border-radius:2px;background:color-mix(in srgb,var(--ink) 12%,transparent);transition:background 180ms}
.d-hint{font-size:11px;color:var(--faint)}
`},
{id:'rating',cat:"表单",t:"星级评分",en:"star rating",d:"悬停预览、点击定值；常用于反馈与质量打分。",body:`<div class="d-rate"><button>★</button><button>★</button><button>★</button><button>★</button><button>★</button></div><span class="d-hint" data-score>未评</span>`,css:`.d-rate{display:flex;gap:2px}
.d-rate button{border:0;background:transparent;font-size:21px;line-height:1;color:color-mix(in srgb,var(--ink) 18%,transparent);cursor:pointer;transition:transform .12s,color .12s}
.d-rate button.on{color:#f2c14e}
.d-rate button:hover{transform:scale(1.12)}
.d-hint{font-size:11px;color:var(--faint)}
`},
{id:'dropzone',cat:"表单",t:"拖拽上传区",en:"dropzone",d:"整体高亮 + 松手提示；本组件库里附件暂不可用，这类交互可以留给「服务端执行」的文件操作。",body:`<div class="d-drop">把文件拖到这里<input type="file" hidden></div><span class="d-hint" data-dropnote></span>`,css:`.d-drop{display:grid;place-items:center;width:220px;height:74px;border:1.5px dashed var(--line);border-radius:10px;font-size:11px;color:var(--muted);transition:border-color 180ms,background-color 180ms,color 180ms}
.d-drop.over{border-color:var(--ink);background:color-mix(in srgb,var(--lime) 22%,transparent);color:var(--ink)}
.d-hint{font-size:11px;color:var(--faint)}
`},
{id:'tabs-pill',cat:"导航",t:"滑动页签",en:"sliding tabs",d:"选中态是一块跟着走的底；比换色更有\"位置感\"。",body:`<div class="d-tabs" data-v="0"><i class="d-tabs-pill-pill"></i><button>概览</button><button>成员</button><button>设置</button></div>`,css:`.d-tabs{position:relative;display:flex;gap:2px;border-bottom:1px solid var(--line);padding:0 4px}
.d-tabs button{position:relative;z-index:1;border:0;background:transparent;color:var(--muted);font:inherit;font-size:11px;padding:9px 12px;cursor:pointer}
.d-tabs button.on{color:var(--ink)}
.d-tabs .d-tabs-pill-pill{position:absolute;bottom:-1px;height:2px;background:var(--ink);transition:left 280ms var(--ease),width 280ms var(--ease)}`},
{id:'breadcrumb',cat:"导航",t:"面包屑折叠",en:"collapsed breadcrumb",d:"层级深时把中间收成「…」，悬停展开；标题栏里最常用。",body:`<div class="d-crumb"><b>工作台</b><span>/</span><span class="d-breadcrumb-more" hidden>… 中间两级</span><span>/</span><b>协作者</b></div>`,css:`.d-crumb{display:flex;gap:6px;align-items:center;font-size:11px;color:var(--muted)}
.d-crumb b{color:var(--ink);font-weight:600}
.d-crumb .d-breadcrumb-more{color:var(--faint);font-size:11px}`},
{id:'palette',cat:"导航",t:"命令面板",en:"command palette",d:"Ctrl/⌘+K 唤起，按\"要做什么\"搜；比记菜单路径快。",body:`<button class="d-btn" data-pal>打开命令面板</button><div class="d-pal" hidden><input placeholder="搜：新建 / 导出 / 设置"><div class="d-palette-list"></div></div>`,css:`.d-pal{position:absolute;inset:auto;left:50%;top:12px;transform:translateX(-50%);width:260px;background:var(--paper);border:1px solid var(--line);border-radius:10px;box-shadow:0 18px 40px #20241e22;padding:8px;z-index:5}
.d-pal input{width:100%;border:0;border-bottom:1px solid var(--line);background:transparent;color:inherit;font:inherit;font-size:11px;padding:6px;outline:none}
.d-pal .d-palette-list{margin-top:6px;display:flex;flex-direction:column}
.d-pal .d-palette-list span{padding:6px 8px;border-radius:6px;font-size:11px;color:var(--muted)}
.d-pal .d-palette-list span.sel{background:color-mix(in srgb,var(--ink) 8%,transparent);color:var(--ink)}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`},
{id:'pagination',cat:"导航",t:"分页器",en:"pagination",d:"列表很长时的兜底；首末页与当前页永远可见。",body:`<div class="d-page"><button>‹</button><button class="d-pagination-on">1</button><button>2</button><button>3</button><span>…</span><button>12</button><button>›</button></div>`,css:`.d-page{display:flex;gap:4px;align-items:center}
.d-page button{min-width:28px;height:28px;border:1px solid var(--line);border-radius:10px;background:transparent;color:inherit;font:inherit;font-size:11px;cursor:pointer}
.d-page button.d-pagination-on{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.d-page span{color:var(--faint);font-size:11px}`},
{id:'stepper',cat:"导航",t:"步骤条",en:"stepper",d:"多步流程显式告诉用户\"还有几步\"；比一长条表单友好。",body:`<div class="d-step"><i class="d-stepper-now">1</i><em></em><i>2</i><em></em><i>3</i></div><button class="d-btn" data-next>下一步</button>`,css:`.d-step{display:flex;align-items:center;gap:8px}
.d-step i{width:24px;height:24px;border-radius:999px;display:grid;place-items:center;font-style:normal;font-size:11px;border:1px solid var(--line);color:var(--faint)}
.d-step i.d-stepper-now{border-color:var(--ink);color:var(--ink);background:var(--lime)}
.d-step i.done{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.d-step em{width:26px;height:1px;background:var(--line)}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`},
{id:'dropdown',cat:"浮层",t:"下拉菜单",en:"dropdown menu",d:"点开出现、点外部关闭、Esc 关闭；菜单项支持危险色。",body:`<button class="d-btn" data-menu>更多 ▾</button><div class="d-menu" hidden><span>重命名</span><span>复制链接</span><span class="d-dropdown-danger">删除</span></div>`,css:`.d-menu{position:absolute;top:44px;left:0;min-width:130px;background:var(--paper);border:1px solid var(--line);border-radius:10px;box-shadow:0 14px 30px #20241e1f;padding:5px;z-index:6}
.d-menu span{display:block;padding:6px 9px;border-radius:6px;font-size:11px;cursor:pointer}
.d-menu span:hover{background:color-mix(in srgb,var(--ink) 7%,transparent)}
.d-menu .d-dropdown-danger{color:#a4442c}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`},
{id:'popover',cat:"浮层",t:"气泡浮层",en:"popover",d:"带小箭头、指哪说哪；比 tooltip 能装更多内容。",body:`<button class="d-btn" data-pop2>显示说明</button><div class="d-pop" hidden><b>本季度目标</b><p class="d-note">月底前上线新版首页。</p></div>`,css:`.d-pop{position:absolute;top:46px;left:10px;width:190px;background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:10px 12px;box-shadow:0 14px 30px #20241e1f;font-size:11px;z-index:6}
.d-pop:before{content:"";position:absolute;top:-5px;left:18px;width:8px;height:8px;background:var(--paper);border-left:1px solid var(--line);border-top:1px solid var(--line);transform:rotate(45deg)}
.d-pop .d-note{margin:2px 0 0;font-size:11px;color:var(--muted)}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`},
{id:'ctxmenu',cat:"浮层",t:"右键菜单",en:"context menu",d:"对着对象右键，动作就有上下文；桌面端高频。",body:`<div class="d-ctxzone">在这块里点右键</div><div class="d-ctx" hidden><span>重命名</span><span>移到…</span><span class="d-ctxmenu-danger">删除</span></div>`,css:`.d-ctxzone{width:200px;height:70px;border:1px dashed var(--line);border-radius:10px;display:grid;place-items:center;font-size:11px;color:var(--faint)}
.d-ctx{position:absolute;min-width:120px;background:var(--paper);border:1px solid var(--line);border-radius:10px;box-shadow:0 14px 30px #20241e1f;padding:5px;z-index:7}
.d-ctx span{display:block;padding:6px 9px;border-radius:6px;font-size:11px;cursor:pointer}
.d-ctx .d-ctxmenu-danger{color:#a4442c}`},
{id:'sheet',cat:"浮层",t:"底部抽屉",en:"bottom sheet",d:"手机上比居中弹窗更好用；支持下拉关闭。",body:`<button class="d-btn" data-sheet>打开底部抽屉</button><div class="d-sheetwrap" hidden><div class="d-sheet-scrim"></div><div class="d-sheet-sheet"><i class="d-sheet-grip"></i><b>选择操作</b><p class="d-note">这里是抽屉内容，点遮罩或下拉关闭。</p></div></div>`,css:`.d-sheetwrap{position:absolute;inset:0;z-index:8}
.d-sheetwrap .d-sheet-scrim{position:absolute;inset:0;background:#1c2a1466}
.d-sheet{position:absolute;left:0;right:0;bottom:0;background:var(--paper);border-radius:10px 10px 0 0;padding:10px 16px 18px;box-shadow:0 -12px 30px #20241e22;animation:d-sheet-up .28s var(--ease)}
.d-sheet .d-sheet-grip{display:block;width:34px;height:4px;border-radius:999px;background:color-mix(in srgb,var(--ink) 18%,transparent);margin:0 auto 10px}
@keyframes d-sheet-up{from{transform:translateY(100%)}to{transform:none}}
.d-sheet .d-note{font-size:11px;color:var(--muted);margin:6px 0 0}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`},
{id:'confirm',cat:"浮层",t:"输入确认删除",en:"type-to-confirm",d:"不可逆操作要求手打关键词，防误触；比\"再点一次\"更稳。",body:`<div class="d-cf"><p class="d-note">输入 <b>DELETE</b> 才能删除「素材库」</p><input placeholder="DELETE"><button class="d-btn" disabled>删除</button></div>`,css:`.d-cf{width:230px}
.d-cf input{width:100%;padding:7px 9px;border:1px solid var(--line);border-radius:10px;background:transparent;color:inherit;font:inherit;font-size:11px;outline:none;margin-bottom:8px}
.d-cf .d-btn[disabled]{opacity:.45;cursor:not-allowed}
.d-cf .d-note{margin:0 0 8px;font-size:11px;color:var(--muted)}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`},
{id:'swipe-delete',cat:"列表",t:"左滑删除",en:"swipe to delete",d:"移动端列表的高频手势；要有\"再滑一下\"的阈值，不能一碰就删。",body:`<div class="d-swipe"><div class="d-swipe-delete-row"><span>项目讨论组</span><em>左滑我</em></div><button class="d-swipe-delete-del">删除</button></div>`,css:`.d-swipe{position:relative;width:230px;overflow:hidden;border-radius:10px}
.d-swipe .d-swipe-delete-row{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:center;padding:11px 12px;background:var(--paper);border:1px solid var(--line);border-radius:10px;transition:transform 180ms var(--ease-spring);cursor:grab}
.d-swipe .d-swipe-delete-row em{font-style:normal;font-size:9px;color:var(--faint)}
.d-swipe .d-swipe-delete-del{position:absolute;right:0;top:0;bottom:0;width:64px;border:0;background:#c4553a;color:#fff;font-size:11px;cursor:pointer}`},
{id:'drag-reorder',cat:"列表",t:"拖拽排序",en:"drag reorder",d:"按住拖动换顺序；任务卡、看板列必备。",body:`<div class="d-dl"><div draggable="true">① 收集</div><div draggable="true">② 整理</div><div draggable="true">③ 上线</div></div>`,css:`.d-dl{width:220px;display:flex;flex-direction:column;gap:6px}
.d-dl div{padding:9px 11px;border:1px solid var(--line);border-radius:10px;background:var(--paper);font-size:11px;cursor:grab}
.d-dl div.dragging{opacity:.4}`},
{id:'multiselect',cat:"列表",t:"多选操作条",en:"multi-select toolbar",d:"选中若干项后浮出一条操作栏；批量处理的核心。",body:`<div class="d-ms"><label><input type="checkbox">A</label><label><input type="checkbox">B</label><label><input type="checkbox">C</label><div class="d-multiselect-bar" hidden>已选 <b>0</b> · 指派 · 归档</div></div>`,css:`.d-ms{display:flex;flex-direction:column;gap:5px;width:200px;position:relative;padding-bottom:34px}
.d-ms label{display:flex;gap:8px;align-items:center;font-size:11px;color:var(--muted)}
.d-ms .d-multiselect-bar{position:absolute;bottom:0;left:0;right:0;padding:7px 10px;border-radius:10px;background:var(--ink);color:var(--paper);font-size:11px}
.d-ms .d-multiselect-bar b{color:var(--lime)}`},
{id:'chips',cat:"列表",t:"筛选标签",en:"filter chips",d:"一排可点标签，带选中态与计数；比下拉直观。",body:`<div class="d-chips"><button class="d-chips-on">全部</button><button>交付</button><button>日程</button><button>费用</button></div>`,css:`.d-chips{display:flex;gap:6px;flex-wrap:wrap}
.d-chips button{padding:5px 11px;border-radius:999px;border:1px solid var(--line);background:transparent;color:var(--muted);font:inherit;font-size:11px;cursor:pointer;transition:background-color 180ms,color 180ms,border-color 180ms}
.d-chips button.d-chips-on{background:var(--ink);color:var(--paper);border-color:var(--ink)}`},
{id:'avatar-stack',cat:"列表",t:"头像叠 + 在线点",en:"avatar stack + presence",d:"多人协作一眼看清有谁、谁在；超过 4 个用 +N。",body:`<div class="d-av"><i>总<span></span></i><i>私<span></span></i><i>验<span></span></i><i class="d-avatar-stack-more">+3</i></div>`,css:`.d-av{display:flex}
.d-av i{width:30px;height:30px;border-radius:999px;display:grid;place-items:center;font-style:normal;font-size:11px;background:color-mix(in srgb,var(--ink) 10%,transparent);border:2px solid var(--paper);margin-left:-8px;position:relative}
.d-av i:first-child{margin-left:0}
.d-av i span{position:absolute;right:-1px;bottom:-1px;width:8px;height:8px;border-radius:999px;background:var(--mint);border:1.5px solid var(--paper)}
.d-av .d-avatar-stack-more{background:var(--ink);color:var(--paper)}`},
{id:'sticky-table',cat:"列表",t:"粘性表头",en:"sticky table header",d:"长表格滚动时表头不动；数据核对场景必备。",body:`<div class="d-tbl"><table><thead><tr><th>项目</th><th>金额</th></tr></thead><tbody><tr><td>第 1 笔</td><td>¥ 128</td></tr><tr><td>第 2 笔</td><td>¥ 256</td></tr><tr><td>第 3 笔</td><td>¥ 384</td></tr><tr><td>第 4 笔</td><td>¥ 512</td></tr><tr><td>第 5 笔</td><td>¥ 640</td></tr><tr><td>第 6 笔</td><td>¥ 768</td></tr><tr><td>第 7 笔</td><td>¥ 896</td></tr><tr><td>第 8 笔</td><td>¥ 1024</td></tr></tbody></table></div>`,css:`.d-tbl{width:220px;height:120px;overflow:auto;border:1px solid var(--line);border-radius:10px}
.d-tbl table{width:100%;border-collapse:collapse;font-size:11px}
.d-tbl th{position:sticky;top:0;background:var(--paper);text-align:left;padding:7px 9px;border-bottom:1px solid var(--line);font-weight:600}
.d-tbl td{padding:6px 9px;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent);color:var(--muted)}`},
{id:'stat-spark',cat:"数据",t:"指标卡 + 迷你折线",en:"stat card + sparkline",d:"一个数 + 一条趋势线，比纯数字有信息量。",body:`<div class="d-stat"><span>本周产出</span><b>18</b><svg viewBox="0 0 80 24"><polyline points="0,18 12,14 24,16 36,8 48,10 60,4 72,6 80,2"/></svg></div>`,css:`.d-stat{width:150px;padding:12px;border:1px solid var(--line);border-radius:10px;background:var(--paper);display:flex;flex-direction:column;gap:2px}
.d-stat span{font-size:9px;color:var(--faint)}
.d-stat b{font-size:21px;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d-stat svg{width:100%;height:24px;margin-top:4px}
.d-stat polyline{fill:none;stroke:var(--ink);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}`},
{id:'donut',cat:"数据",t:"环形占比",en:"donut chart",d:"一眼看构成；中心放总数，别放图例。",body:`<div class="d-donut"><i></i><b>68%</b></div>`,css:`.d-donut{position:relative;width:86px;height:86px;border-radius:999px;display:grid;place-items:center;background:conic-gradient(var(--lime) 0 68%,color-mix(in srgb,var(--ink) 10%,transparent) 0)}
.d-donut i{position:absolute;inset:11px;border-radius:999px;background:var(--paper)}
.d-donut b{position:relative;font-size:13px;letter-spacing:-.02em}`},
{id:'gauge',cat:"数据",t:"半圆仪表",en:"gauge",d:"范围型指标（完成度/健康度）比柱状更直观。",body:`<svg class="d-gauge" viewBox="0 0 100 56"><path d="M10 50a40 40 0 0 1 80 0" class="d-gauge-track"/><path d="M10 50a40 40 0 0 1 80 0" class="d-gauge-val"/></svg>`,css:`.d-gauge{width:120px}
.d-gauge path{fill:none;stroke-width:9;stroke-linecap:round}
.d-gauge .d-gauge-track{stroke:color-mix(in srgb,var(--ink) 10%,transparent)}
.d-gauge .d-gauge-val{stroke:var(--lime);stroke-dasharray:126;stroke-dashoffset:38}`},
{id:'heatmap',cat:"数据",t:"热力格",en:"heatmap",d:"密度型数据（每天活跃/提交量）；颜色要单调递进。",body:`<div class="d-heat"><i style="--o:0.1"></i><i style="--o:0.47"></i><i style="--o:0.84"></i><i style="--o:0.31"></i><i style="--o:0.68"></i><i style="--o:0.15"></i><i style="--o:0.52"></i><i style="--o:0.89"></i><i style="--o:0.36"></i><i style="--o:0.73"></i><i style="--o:0.2"></i><i style="--o:0.57"></i><i style="--o:0.94"></i><i style="--o:0.41"></i><i style="--o:0.78"></i><i style="--o:0.25"></i><i style="--o:0.62"></i><i style="--o:0.99"></i><i style="--o:0.46"></i><i style="--o:0.83"></i><i style="--o:0.3"></i><i style="--o:0.67"></i><i style="--o:0.14"></i><i style="--o:0.51"></i><i style="--o:0.88"></i><i style="--o:0.35"></i><i style="--o:0.72"></i><i style="--o:0.19"></i><i style="--o:0.56"></i><i style="--o:0.93"></i><i style="--o:0.4"></i><i style="--o:0.77"></i><i style="--o:0.24"></i><i style="--o:0.61"></i><i style="--o:0.98"></i><i style="--o:0.45"></i><i style="--o:0.82"></i><i style="--o:0.29"></i><i style="--o:0.66"></i><i style="--o:0.13"></i><i style="--o:0.5"></i><i style="--o:0.87"></i><i style="--o:0.34"></i><i style="--o:0.71"></i><i style="--o:0.18"></i><i style="--o:0.55"></i><i style="--o:0.92"></i><i style="--o:0.39"></i><i style="--o:0.76"></i><i style="--o:0.23"></i><i style="--o:0.6"></i><i style="--o:0.97"></i><i style="--o:0.44"></i><i style="--o:0.81"></i><i style="--o:0.28"></i><i style="--o:0.65"></i><i style="--o:0.12"></i><i style="--o:0.49"></i><i style="--o:0.86"></i><i style="--o:0.33"></i><i style="--o:0.7"></i><i style="--o:0.17"></i><i style="--o:0.54"></i><i style="--o:0.91"></i><i style="--o:0.38"></i><i style="--o:0.75"></i><i style="--o:0.22"></i><i style="--o:0.59"></i><i style="--o:0.96"></i><i style="--o:0.43"></i><i style="--o:0.8"></i><i style="--o:0.27"></i><i style="--o:0.64"></i><i style="--o:0.11"></i><i style="--o:0.48"></i><i style="--o:0.85"></i><i style="--o:0.32"></i><i style="--o:0.69"></i><i style="--o:0.16"></i><i style="--o:0.53"></i><i style="--o:0.9"></i><i style="--o:0.37"></i><i style="--o:0.74"></i><i style="--o:0.21"></i></div>`,css:`.d-heat{display:grid;grid-template-columns:repeat(12,10px);gap:3px}
.d-heat i{opacity:var(--o);width:10px;height:10px;border-radius:2px;background:var(--ink)}`},
{id:'timeline',cat:"数据",t:"竖向时间线",en:"timeline",d:"按时间讲过程；适合\"这件事怎么一步步走到今天\"。",body:`<div class="d-tl"><div><b>10:02 立项</b><p>创建「官网改版」</p></div><div><b>10:05 初稿</b><p>把第一版设计交给评审</p></div></div>`,css:`.d-tl{position:relative;padding-left:16px;display:flex;flex-direction:column;gap:12px}
.d-tl:before{content:"";position:absolute;left:4px;top:4px;bottom:4px;width:1px;background:var(--line)}
.d-tl div{position:relative}
.d-tl div:before{content:"";position:absolute;left:-16px;top:4px;width:7px;height:7px;border-radius:999px;background:var(--ink)}
.d-tl b{font-size:11px}.d-tl p{margin:2px 0 0;font-size:11px;color:var(--muted)}`},
{id:'inline-valid',cat:"反馈",t:"行内校验",en:"inline validation",d:"边填边提示，错误贴在字段上；不要等提交才报。",body:`<label class="d-iv"><input placeholder="邮箱"><span data-msg></span></label>`,css:`.d-iv{display:flex;flex-direction:column;gap:4px;width:200px}
.d-iv input{padding:8px 10px;border:1px solid var(--line);border-radius:10px;background:transparent;color:inherit;font:inherit;font-size:11px;outline:none}
.d-iv input.bad{border-color:#c4553a}
.d-iv span{font-size:11px;color:#a4442c;min-height:14px}`},
{id:'success',cat:"反馈",t:"成功勾 + 礼花",en:"success draw + confetti",d:"完成不可逆动作时给一次正反馈；只放一次。",body:`<button class="d-btn d-btn-primary" data-win>完成一次验收</button><div class="d-win" hidden><svg viewBox="0 0 24 24"><path d="M4 12.5l5 5 11-11"/></svg></div>`,css:`.d-win{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none}
.d-win svg{width:44px;height:44px}
.d-win path{fill:none;stroke:var(--lime);stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:30;stroke-dashoffset:30;animation:d-success-draw .5s var(--ease) forwards}
@keyframes d-success-draw{to{stroke-dashoffset:0}}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
.d-btn.d-btn-primary{background:var(--ink);color:var(--paper);border-color:var(--ink)}
`},
{id:'error-retry',cat:"反馈",t:"错误卡 + 重试",en:"error state with retry",d:"失败要给出\"为什么 + 怎么办\"；只写\"出错了\"等于没说。",body:`<div class="d-err"><b>连不上服务端</b><p>接口 502，网关没有响应。</p><button class="d-btn" data-retry>重试</button></div>`,css:`.d-err{width:220px;padding:12px;border:1px solid #e4c3b8;border-radius:10px;background:#fdf3ef}
.d-err b{font-size:11px;color:#7a2b18}
.d-err p{margin:3px 0 9px;font-size:11px;color:#a4442c;line-height:1.7}
.d-btn{font:inherit;font-size:13px;padding:8px 16px;border-radius:10px;border:1px solid var(--line);background:var(--paper);color:var(--ink);cursor:pointer;transition:transform 180ms var(--ease),background-color 180ms,color 180ms,border-color 180ms}
.d-btn:hover{box-shadow:0 6px 18px #20241e14}
.d-btn:active{transform:scale(.97)}
`}
]);
window.INITS_EXTRA = Object.assign(window.INITS_EXTRA || {}, {
  "otp": root => {
    const inputs = [...root.querySelectorAll('input')];
    inputs.forEach((inp, i) => {
      inp.addEventListener('input', () => { inp.value = inp.value.replace(/\D/g, '').slice(0, 1); if (inp.value && inputs[i + 1]) inputs[i + 1].focus(); });
      inp.addEventListener('keydown', e => { if (e.key === 'Backspace' && !inp.value && inputs[i - 1]) inputs[i - 1].focus(); });
      inp.addEventListener('paste', e => { const t = (e.clipboardData?.getData('text') || '').replace(/\D/g, ''); if (t) { e.preventDefault(); inputs.forEach((x, k) => x.value = t[k] || ''); inputs[Math.min(t.length, inputs.length - 1)].focus(); } });
    });
  },
  "tag-input": root => {
    const box = root.querySelector('.d-tags'); const inp = box.querySelector('input');
    const add = v => { const chip = document.createElement('span'); chip.className = 'd-tag-input-chip'; chip.appendChild(document.createTextNode(v)); const x = document.createElement('i'); x.textContent = '×'; x.onclick = () => chip.remove(); chip.appendChild(x); box.insertBefore(chip, inp); };
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter' && inp.value.trim()) { add(inp.value.trim()); inp.value = ''; e.preventDefault(); }
      if (e.key === 'Backspace' && !inp.value) box.querySelector('.d-tag-input-chip:last-of-type')?.remove();
    });
  },
  "segmented": root => {
    const seg = root.querySelector('.d-seg'), pill = seg.querySelector('.d-segmented-pill'), btns = [...seg.querySelectorAll('button')];
    const move = i => { const b = btns[i], r = b.getBoundingClientRect(), pr = seg.getBoundingClientRect(); pill.style.left = (r.left - pr.left) + 'px'; pill.style.width = r.width + 'px'; btns.forEach((x, k) => x.style.color = k === i ? 'var(--ink)' : 'var(--muted)'); };
    btns.forEach((b, i) => b.onclick = () => move(i)); setTimeout(() => move(0), 30);
  },
  "strength": root => {
    const inp = root.querySelector('.d-pw'), bars = [...root.querySelectorAll('.d-bars3 i')], hint = root.querySelector('[data-hint]');
    inp.addEventListener('input', () => {
      const v = inp.value; let s = 0;
      if (v.length >= 8) s++; if (/[A-Z]/.test(v) && /[a-z]/.test(v)) s++; if (/\d/.test(v) || /[^\w]/.test(v)) s++;
      const tones = ['#c4553a', '#d6a94a', '#5c8a3a'];
      bars.forEach((b, i) => b.style.background = i < s ? tones[s - 1] : 'color-mix(in srgb,var(--ink) 12%,transparent)');
      hint.textContent = v ? ['太弱', '一般', '够用', '很强'][s] || '很强' : '';
    });
  },
  "rating": root => {
    const btns = [...root.querySelectorAll('.d-rate button')], out = root.querySelector('[data-score]');
    const paint = n => btns.forEach((b, i) => b.classList.toggle('on', i < n));
    btns.forEach((b, i) => { b.onmouseenter = () => paint(i + 1); b.onmouseleave = () => paint(+root.dataset.v || 0); b.onclick = () => { root.dataset.v = i + 1; paint(i + 1); out.textContent = (i + 1) + ' 星'; }; });
  },
  "dropzone": root => {
    const z = root.querySelector('.d-drop'), note = root.querySelector('[data-dropnote]');
    ['dragenter', 'dragover'].forEach(t => z.addEventListener(t, e => { e.preventDefault(); z.classList.add('over'); }));
    ['dragleave', 'drop'].forEach(t => z.addEventListener(t, e => { e.preventDefault(); z.classList.remove('over'); }));
    z.addEventListener('drop', e => { const f = e.dataTransfer?.files?.[0]; if (note) note.textContent = f ? '收到：' + f.name + '（演示不落盘）' : ''; });
  },
  "tabs-pill": root => {
    const box = root.querySelector('.d-tabs'), pill = box.querySelector('.d-tabs-pill-pill'), btns = [...box.querySelectorAll('button')];
    const move = i => { const b = btns[i], r = b.getBoundingClientRect(), pr = box.getBoundingClientRect(); pill.style.left = (r.left - pr.left) + 'px'; pill.style.width = r.width + 'px'; btns.forEach((x, k) => x.classList.toggle('on', k === i)); };
    btns.forEach((b, i) => b.onclick = () => move(i)); setTimeout(() => move(0), 30);
  },
  "palette": root => {
    const btn = root.querySelector('[data-pal]'), pal = root.querySelector('.d-pal'), inp = pal.querySelector('input'), list = pal.querySelector('.d-palette-list');
    const items = ['新建项目', '导出资源', '打开设置', '切换主题', '搜索页面'];
    const render = () => { list.innerHTML = items.filter(x => !inp.value || x.includes(inp.value)).map((x, i) => `<span class="${i === 0 ? 'sel' : ''}">${x}</span>`).join(''); };
    btn.onclick = () => { pal.hidden = !pal.hidden; if (!pal.hidden) { inp.value = ''; render(); inp.focus(); } };
    inp.oninput = render;
    inp.onkeydown = e => { if (e.key === 'Escape') pal.hidden = true; };
  },
  "pagination": root => {
    const btns = [...root.querySelectorAll('.d-page button')];
    btns.forEach(b => b.onclick = () => { if (/^\d+$/.test(b.textContent)) { btns.forEach(x => x.classList.toggle('d-pagination-on', x === b)); } });
  },
  "stepper": root => {
    const steps = [...root.querySelectorAll('.d-step i')]; let i = 0;
    root.querySelector('[data-next]').onclick = () => {
      if (i < steps.length) steps[i].classList.remove('d-stepper-now');
      if (i > 0) steps[i - 1].classList.add('done');
      i = (i + 1) % (steps.length + 1);
      if (i < steps.length) steps[i].classList.add('d-stepper-now');
    };
  },
  "dropdown": root => {
    const btn = root.querySelector('[data-menu]'), menu = root.querySelector('.d-menu');
    btn.onclick = e => { e.stopPropagation(); menu.hidden = !menu.hidden; };
    document.addEventListener('click', () => menu.hidden = true, { once: true });
  },
  "popover": root => {
    const btn = root.querySelector('[data-pop2]'), pop = root.querySelector('.d-pop');
    btn.onclick = e => { e.stopPropagation(); pop.hidden = !pop.hidden; };
    document.addEventListener('click', () => pop.hidden = true, { once: true });
  },
  "ctxmenu": root => {
    const zone = root.querySelector('.d-ctxzone'), menu = root.querySelector('.d-ctx');
    zone.oncontextmenu = e => { e.preventDefault(); const r = zone.getBoundingClientRect(); menu.hidden = false; menu.style.left = (e.clientX - r.left) + 'px'; menu.style.top = (e.clientY - r.top) + 'px'; };
    document.addEventListener('click', () => menu.hidden = true);
  },
  "sheet": root => {
    const btn = root.querySelector('[data-sheet]'), wrap = root.querySelector('.d-sheetwrap');
    btn.onclick = () => wrap.hidden = false;
    wrap.querySelector('.d-sheet-scrim').onclick = () => wrap.hidden = true;
  },
  "confirm": root => {
    const inp = root.querySelector('.d-cf input'), btn = root.querySelector('.d-cf .d-btn');
    inp.oninput = () => { btn.disabled = inp.value !== 'DELETE'; };
  },
  "swipe-delete": root => {
    const row = root.querySelector('.d-swipe .d-swipe-delete-row'); let x0 = 0, dx = 0, open = false;
    row.addEventListener('pointerdown', e => { x0 = e.clientX; row.style.transition = 'none'; });
    row.addEventListener('pointermove', e => { if (!x0) return; dx = Math.min(0, Math.max(-70, e.clientX - x0 + (open ? -64 : 0))); row.style.transform = `translateX(${dx}px)`; });
    row.addEventListener('pointerup', () => { open = dx < -40; row.style.transition = ''; row.style.transform = `translateX(${open ? -64 : 0}px)`; x0 = 0; dx = 0; });
  },
  "drag-reorder": root => {
    const list = root.querySelector('.d-dl'); let dragging = null;
    list.querySelectorAll('div').forEach(el => {
      el.addEventListener('dragstart', () => { dragging = el; el.classList.add('dragging'); });
      el.addEventListener('dragend', () => { el.classList.remove('dragging'); dragging = null; });
      el.addEventListener('dragover', e => { e.preventDefault(); if (!dragging || dragging === el) return; const r = el.getBoundingClientRect(); list.insertBefore(dragging, (e.clientY - r.top) > r.height / 2 ? el.nextSibling : el); });
    });
  },
  "multiselect": root => {
    const box = root.querySelector('.d-ms'), bar = box.querySelector('.d-multiselect-bar'), n = bar.querySelector('b');
    box.querySelectorAll('input').forEach(i => i.onchange = () => { const c = [...box.querySelectorAll('input')].filter(x => x.checked).length; bar.hidden = !c; n.textContent = c; });
  },
  "inline-valid": root => {
    const inp = root.querySelector('.d-iv input'), msg = root.querySelector('[data-msg]');
    inp.oninput = () => { const bad = inp.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(inp.value); inp.classList.toggle('bad', !!bad); msg.textContent = bad ? '缺一个正确的邮箱格式' : ''; };
  },
  "success": root => {
    root.querySelector('[data-win]').onclick = () => {
      const box = root.querySelector('.d-win'); box.hidden = false;
      const svg = box.querySelector('svg'); svg.style.animation = 'none'; void svg.offsetWidth;
      svg.querySelector('path').style.animation = 'none'; void svg.offsetWidth; svg.querySelector('path').style.animation = '';
      setTimeout(() => box.hidden = true, 1200);
    };
  },
  "error-retry": root => {
    const btn = root.querySelector('[data-retry]');
    btn.onclick = () => { btn.textContent = '重试中…'; setTimeout(() => btn.textContent = '还是不通 · 重试', 900); };
  },
});
