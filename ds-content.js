/* 外观与参数均为可修改的示例；rule/dont 用于判断内容和交互问题，不规定消费方风格。 */
/* 内容呈现图鉴 · 50 条可点小样 */
window.DS_CONTENT = [
/* ---------- 文本 8 ---------- */
{id:'headings',group:'文本',t:'标题层级',en:'headings',rule:'一页只用一个一级标题；二级以下按内容层级递减。',
body:`<div class="k-h"><h1>缓坡</h1><h2>本期文章</h2><h3>一条街的招牌</h3><h4>01 从一块手写招牌说起</h4></div>`,
css:`.k-h{width:100%}
.k-h h1{margin:0 0 4px;font:700 24px/1.15 var(--serif);letter-spacing:-.02em}
.k-h h2{margin:0 0 4px;font:700 17px/1.2 var(--serif)}
.k-h h3{margin:0 0 3px;font:650 13px/1.3 var(--sans)}
.k-h h4{margin:0;font:10px var(--mono);color:var(--faint);letter-spacing:.08em}`},

{id:'paragraph-rhythm',group:'文本',t:'段落节奏',en:'paragraph rhythm',rule:'行宽、行距和段距按语言、字号、设备与内容长度调整，以实际阅读验证。',
body:`<div class="k-p"><p>排版不是把字放上去，而是决定阅读从哪里开始。标题是入口，首段是台阶。</p><p>台阶太高，人就不上去了。</p></div>`,
css:`.k-p{width:100%;max-width:34ch}
.k-p p{margin:0 0 12px;font:13px/1.95 var(--sans);color:var(--muted)}
.k-p p:last-child{margin:0}`},

{id:'ul-spec2',group:'文本',t:'无序列表',en:'unordered list',rule:'并列内容使用列表或适合的结构，项目写法服务内容；是否分组按查找成本决定。',
body:`<ul class="k-ul"><li>招牌的字距</li><li>价签的写法</li><li>椅子的修补</li></ul>`,
css:`.k-ul{margin:0;padding:0 0 0 15px;font-size:11px;line-height:1.9;color:var(--muted)}
.k-ul li::marker{color:var(--faint)}`},

{id:'ol-spec2',group:'文本',t:'有序列表',en:'ordered list',rule:'步骤用有序列表；序号和动作要能一一对应。',
body:`<ol class="k-ol"><li>先看墙有多高</li><li>再看人从哪边来</li><li>最后才定字</li></ol>`,
css:`.k-ol{margin:0;padding:0 0 0 16px;font-size:11px;line-height:1.9;color:var(--muted)}
.k-ol li::marker{font-family:var(--mono);font-size:9px;color:var(--faint)}`},

{id:'dl-spec2',group:'文本',t:'定义列表',en:'definition list',rule:'术语与解释保持可辨识的对应关系，标点和布局按内容需要决定。',
body:`<dl class="k-dl"><dt>字距</dt><dd>两个字之间的距离，远看时决定笔画能不能分开。</dd><dt>行长</dt><dd>一行文字的长度，太宽会丢行。</dd></dl>`,
css:`.k-dl{margin:0;font-size:10.5px;line-height:1.75;color:var(--muted);width:100%}
.k-dl dt{font-weight:600;color:var(--ink);margin-top:5px}
.k-dl dt:first-child{margin-top:0}
.k-dl dd{margin:0;padding-left:8px;border-left:1px solid var(--line)}`},

{id:'quote-spec2',group:'文本',t:'引用',en:'blockquote',rule:'引用保留原话并提供可识别的出处，出处位置按阅读和溯源需要决定。',
body:`<figure class="k-q"><blockquote>招牌不是贴上去的，是长在墙上的。</blockquote><figcaption>老周 · 刻字匠</figcaption></figure>`,
css:`.k-q{margin:0;width:100%}
.k-q blockquote{margin:0;padding-left:12px;border-left:2px solid var(--ink);font:15px/1.7 var(--serif)}
.k-q figcaption{margin-top:5px;padding-left:14px;font:8.5px var(--mono);color:var(--faint)}`},

{id:'callout-spec2',group:'文本',t:'提示块',en:'callout',rule:'需要提示的信息应容易发现，数量、长度和容器根据真实重要性决定。',
body:`<div class="k-co"><div class="i">可以这样理解</div><div class="w">注意：这次改动会影响旧链接</div><div class="s">已保存，可以关闭</div></div>`,
css:`.k-co{display:flex;flex-direction:column;gap:4px;width:100%}
.k-co div{font-size:9.5px;line-height:1.6;padding:5px 8px;border-radius:4px;border-left:2px solid}
.k-co .i{background:var(--bg);border-color:var(--blue);color:var(--muted)}
.k-co .w{background:color-mix(in srgb,var(--amber) 14%,transparent);border-color:var(--amber);color:var(--ink)}
.k-co .s{background:var(--lime-soft);border-color:var(--lime);color:var(--ink)}`},

{id:'term-spec2',group:'文本',t:'术语与缩写',en:'term & abbr',rule:'不熟悉的术语或缩写提供解释入口，表现形式按内容与交互需要决定。',
body:`<p class="k-term">字号、<abbr title="字与字之间的距离">字距</abbr>、行长——三个数字决定一段话能不能读下去。</p>`,
css:`.k-term{margin:0;width:100%;font-size:11px;line-height:1.9;color:var(--muted)}
.k-term abbr{text-decoration:underline dotted;text-underline-offset:3px;cursor:help;color:var(--ink)}`},

/* ---------- 数据 8 ---------- */
{id:'data-table',group:'数据',t:'数据表',en:'data table',rule:'字段含义与数据对应，按数据类型选择对齐和密度，以便比较和阅读。',
body:`<table class="k-dt"><caption>第 07 期阅读数据</caption><thead><tr><th>文章</th><th>阅读</th><th>完成率</th></tr></thead><tbody><tr><td>招牌</td><td>1,284</td><td>68%</td></tr><tr><td>价签</td><td>936</td><td>74%</td></tr></tbody></table>`,
css:`.k-dt{width:100%;border-collapse:collapse;font-size:9.5px}
.k-dt caption{caption-side:top;text-align:left;font:8.5px var(--mono);color:var(--faint);margin-bottom:4px}
.k-dt th{text-align:left;font:8px var(--mono);color:var(--faint);padding:4px 6px;border-bottom:1px solid var(--line)}
.k-dt td{padding:4px 6px;border-bottom:1px solid var(--line);color:var(--muted)}
.k-dt td+td,.k-dt th+th{text-align:right;font-family:var(--mono)}`},

{id:'compare-table',group:'数据',t:'对比表',en:'comparison table',rule:'两列对比用同一行描述同一件事；差异用词，不只靠颜色。',
body:`<table class="k-ct"><thead><tr><th>普通聊天框</th><th>缓坡</th></tr></thead><tbody><tr><td>一次回答一个问题</td><td>一篇长文只讲一件事</td></tr><tr><td>说完就结束</td><td>读完可回到目录</td></tr></tbody></table>`,
css:`.k-ct{width:100%;border-collapse:collapse;font-size:9px}
.k-ct th{font:8px var(--mono);text-align:left;padding:4px 6px;border-bottom:1px solid var(--line);color:var(--faint)}
.k-ct th:last-child{color:var(--ink)}
.k-ct td{padding:4px 6px;border-bottom:1px solid var(--line);color:var(--faint)}
.k-ct td:last-child{color:var(--muted);background:color-mix(in srgb,var(--lime) 8%,transparent)}`},

{id:'kv-card',group:'数据',t:'键值卡',en:'key value card',rule:'字段名与值清楚对应，颜色、字重和排布由项目决定，长内容仍可完整查看。',
body:`<div class="k-kv"><div><span>期数</span><b>07</b></div><div><span>出刊</span><b>2026.10.12</b></div><div><span>文章</span><b>6 篇</b></div><div><span>栏目</span><b>4 个</b></div></div>`,
css:`.k-kv{width:100%;border:1px solid var(--line);border-radius:6px;overflow:hidden}
.k-kv div{display:flex;justify-content:space-between;padding:5px 8px;border-top:1px solid var(--line);font-size:9px}
.k-kv div:first-child{border-top:0}
.k-kv span{color:var(--faint);font:8px var(--mono)}
.k-kv b{font-weight:500}`},

{id:'metric-row',group:'数据',t:'指标行',en:'metric row',rule:'指标提供理解所需的口径、单位、来源或时间范围；没有依据的变化与数字不补造。',
body:`<div class="k-mr"><div><span>阅读</span><b>1,284</b><em>↑12%</em></div><div><span>收藏</span><b>96</b><em>↑4%</em></div><div><span>读完</span><b>68%</b><em>↓2%</em></div></div>`,
css:`.k-mr{display:flex;gap:10px;width:100%}
.k-mr div{flex:1;display:flex;flex-direction:column;gap:1px;border-left:2px solid var(--line);padding-left:6px}
.k-mr span{font:8px var(--mono);color:var(--faint)}
.k-mr b{font-size:15px;line-height:1.1}
.k-mr em{font-style:normal;font:8px var(--mono);color:var(--ok)}`},

{id:'timeline-content',group:'数据',t:'时间线',en:'timeline',rule:'时间顺序与分组依据应清楚，每条内容按实际事件组织。',
body:`<div class="k-tl"><div><time>10.12</time><p>第 07 期出刊</p></div><div><time>10.08</time><p>完成三校</p></div><div><time>09.30</time><p>定稿</p></div></div>`,
css:`.k-tl{position:relative;padding-left:12px;width:100%}
.k-tl:before{content:"";position:absolute;left:3px;top:4px;bottom:4px;width:1px;background:var(--line)}
.k-tl div{position:relative;margin-bottom:7px;font-size:9px}
.k-tl div:before{content:"";position:absolute;left:-12px;top:4px;width:6px;height:6px;border-radius:50%;background:var(--ink)}
.k-tl time{font:8px var(--mono);color:var(--faint)}
.k-tl p{margin:0;color:var(--muted)}`},

{id:'steps-content',group:'数据',t:'步骤',en:'steps',rule:'步骤标题用动词；已完成和当前步要能区分。',
body:`<div class="k-st"><div class="done"><b>01 收集</b><p>把零散想法整理成清单。</p></div><div class="live"><b>02 拆解</b><p>按优先级拆成可执行步骤。</p></div><div><b>03 验收</b><p>逐项核对后确认交付。</p></div></div>`,
css:`.k-st{display:flex;flex-direction:column;gap:3px;width:100%;font-size:9px}
.k-st div{border-left:2px solid var(--line);padding:2px 0 2px 8px;color:var(--faint)}
.k-st b{font-size:9.5px;color:var(--muted)}
.k-st p{margin:0;font-size:8.5px}
.k-st .done{border-color:var(--ink)}
.k-st .done b{color:var(--ink)}
.k-st .live{border-color:var(--lime);background:var(--lime-soft)}
.k-st .live b{color:var(--ink)}`},

{id:'tree-content',group:'数据',t:'内容树',en:'content tree',rule:'按真实关系组织层级，需要时折叠或分段导航，不限定层数。',
body:`<div class="k-tree"><b>第 07 期</b><div>街道<p>招牌 / 路灯</p></div><div>字体<p>字距 / 菜单</p></div><div>物件<p>价签 / 椅子</p></div></div>`,
css:`.k-tree{width:100%;font-size:9px;color:var(--muted)}
.k-tree b{display:block;font-size:9.5px;color:var(--ink);margin-bottom:3px}
.k-tree div{padding-left:10px;border-left:1px solid var(--line);margin-bottom:2px}
.k-tree p{margin:0;color:var(--faint);font-size:8.5px}`},

{id:'status-labels',group:'数据',t:'状态标签',en:'status labels',rule:'用文字或其他非颜色提示说明状态，颜色数量由业务状态决定。',
body:`<div class="k-sl"><span class="ok">已发布</span><span class="w">待审批</span><span class="e">失败</span><span>草稿</span></div>`,
css:`.k-sl{display:flex;gap:4px;flex-wrap:wrap}
.k-sl span{font:8.5px var(--mono);border:1px solid var(--line);border-radius:99px;padding:2px 8px;color:var(--muted)}
.k-sl .ok{color:var(--ok);border-color:var(--ok)}
.k-sl .w{color:var(--warn);border-color:var(--amber)}
.k-sl .e{color:var(--warn);border-color:var(--coral)}`},

/* ---------- 媒体 7 ---------- */
{id:'figure-caption',group:'媒体',t:'图片与图注',en:'figure & caption',rule:'图注写“这是什么”，不写“如图所示”。',
body:`<figure class="k-fig"><div class="art" aria-hidden="true"><i></i><i></i><i></i></div><figcaption>图 1：一条街的三种门头，宽度相同，字距不同。</figcaption></figure>`,
css:`.k-fig{margin:0;width:100%}
.k-fig .art{height:70px;background:var(--bg);border:1px solid var(--line);position:relative;overflow:hidden}
.k-fig .art i{position:absolute;left:10%;right:10%;height:12%;background:var(--ink);top:20%}
.k-fig .art i:nth-child(2){top:45%;background:var(--coral);left:20%}
.k-fig .art i:nth-child(3){top:70%;background:var(--lime);left:30%;right:30%}
.k-fig figcaption{margin-top:4px;font:8.5px var(--mono);color:var(--faint);line-height:1.6}`},

{id:'gallery-content',group:'媒体',t:'画廊',en:'gallery',rule:'缩略图先看整体，点开看单张；Esc 关闭。',
body:`<div class="k-gal"><div class="row"><button data-galc="0" aria-label="看第 1 张"></button><button data-galc="1" aria-label="看第 2 张"></button><button data-galc="2" aria-label="看第 3 张"></button></div><div class="big" data-galbig>点一张缩略图</div></div>`,
css:`.k-gal{width:100%}
.k-gal .row{display:grid;grid-template-columns:repeat(3,1fr);gap:4px}
.k-gal .row button{height:34px;border:1px solid var(--line);border-radius:4px;background:var(--bg);cursor:pointer;position:relative;overflow:hidden}
.k-gal .row button:nth-child(1){background:linear-gradient(135deg,var(--lime),var(--bg))}
.k-gal .row button:nth-child(2){background:linear-gradient(135deg,var(--coral),var(--bg))}
.k-gal .row button:nth-child(3){background:linear-gradient(135deg,var(--mint),var(--bg))}
.k-gal .big{margin-top:4px;height:42px;display:grid;place-items:center;background:var(--paper);border:1px solid var(--line);border-radius:4px;font:8.5px var(--mono);color:var(--faint)}`,
init:(card)=>{const big=card.querySelector('[data-galbig]');card.querySelectorAll('[data-galc]').forEach(b=>b.onclick=()=>{big.textContent='第 '+(Number(b.dataset.galc)+1)+' 张 · 点缩略图切换';});}},

{id:'video-card',group:'媒体',t:'视频卡',en:'video card',rule:'提供识别与控制播放所需的信息，封面、时长及布局按场景决定；不突然自动出声。',
body:`<div class="k-vid"><div class="poster" data-vposter><span>4:32</span><button data-vplay aria-label="播放">▶</button><div class="bars" hidden><i></i><i></i><i></i><i></i></div></div><p>修表摊的抽屉 · 短片</p></div>`,
css:`.k-vid{width:100%}
.k-vid .poster{height:72px;background:var(--ink);border-radius:5px;position:relative;display:grid;place-items:center;overflow:hidden}
.k-vid .poster span{position:absolute;right:6px;bottom:5px;font:8px var(--mono);color:var(--paper)}
.k-vid .poster button{width:24px;height:24px;border-radius:50%;border:1px solid var(--paper);background:transparent;color:var(--paper);font-size:8px;cursor:pointer;z-index:2}
.k-vid .bars{display:flex;gap:2px;align-items:flex-end;height:26px;position:absolute;bottom:8px;left:8px}
.k-vid .bars i{width:3px;background:var(--lime);height:30%;animation:k-vb .6s ease-in-out infinite alternate}
.k-vid .bars i:nth-child(2){height:70%;animation-delay:.1s}
.k-vid .bars i:nth-child(3){height:50%;animation-delay:.2s}
.k-vid .bars i:nth-child(4){height:90%;animation-delay:.3s}
@keyframes k-vb{to{height:10%}}
.k-vid p{margin:4px 0 0;font-size:9px;color:var(--muted)}`,
init:(card)=>{const b=card.querySelector('[data-vplay]'),bars=card.querySelector('.bars');b.onclick=()=>{const playing=bars.hidden;bars.hidden=!playing;b.textContent=playing?'Ⅱ':'▶';};}},

{id:'audio-bar',group:'媒体',t:'音频条',en:'audio bar',rule:'播放、进度和时间按空间与任务布局，用户始终能控制音频，避免自动出声。',
body:`<div class="k-au"><button data-aub aria-label="播放">▶</button><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span data-aut>0:00</span></div>`,
css:`.k-au{display:flex;align-items:center;gap:7px;width:100%}
.k-au button{width:22px;height:22px;border-radius:50%;border:1px solid var(--line);background:var(--paper);font-size:8px;cursor:pointer}
.k-au .wave{flex:1;display:flex;align-items:center;gap:2px;height:18px}
.k-au .wave i{flex:1;height:30%;background:var(--line);border-radius:2px}
.k-au.playing .wave i{background:var(--ink);animation:k-aw .8s ease-in-out infinite alternate}
.k-au.playing .wave i:nth-child(3n){animation-duration:.6s}
@keyframes k-aw{from{height:20%}to{height:90%}}
.k-au span{font:8px var(--mono);color:var(--faint)}`,
init:(card)=>{const box=card.querySelector('.k-au'),b=card.querySelector('[data-aub]'),t=card.querySelector('[data-aut]');let s=0,timer=null;b.onclick=()=>{const on=!box.classList.contains('playing');box.classList.toggle('playing',on);b.textContent=on?'Ⅱ':'▶';if(on){timer=setInterval(()=>{if(!box.isConnected){clearInterval(timer);return;}s++;t.textContent='0:'+String(s%60).padStart(2,'0');},1000);}else clearInterval(timer);};}},

{id:'attachment-card',group:'媒体',t:'附件卡',en:'attachment',rule:'提供识别附件与决定操作所需的信息，是否预览、下载或组合展示按任务决定。',
body:`<div class="k-att"><span class="ic">PDF</span><div><b>第 07 期印刷版.pdf</b><span>2.4 MB · 2026.10.12</span></div><button>下载</button></div>`,
css:`.k-att{display:flex;align-items:center;gap:7px;width:100%;border:1px solid var(--line);border-radius:6px;padding:6px 8px}
.k-att .ic{width:24px;height:28px;border:1px solid var(--line);border-radius:3px;display:grid;place-items:center;font:7px var(--mono);color:var(--faint);background:var(--bg)}
.k-att div{display:flex;flex-direction:column;min-width:0}
.k-att b{font-size:9px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.k-att span{font:7.5px var(--mono);color:var(--faint)}
.k-att button{margin-left:auto;font-size:8px;border:1px solid var(--line);background:var(--paper);border-radius:4px;padding:2px 6px;cursor:pointer}`},

{id:'embed-card',group:'媒体',t:'嵌入卡',en:'embed card',rule:'链接说明目标内容与来源，选择嵌入或跳转时保留清楚的导航与可访问性。',
body:`<a class="k-em" href="#" onclick="return false"><span>slope.example</span><b>一条街的招牌，是怎么变丑的</b><p>从老周的刻字铺到统一底板。</p></a>`,
css:`.k-em{display:block;width:100%;border:1px solid var(--line);border-radius:6px;padding:7px 9px;text-decoration:none;color:inherit;background:var(--paper)}
.k-em span{font:7.5px var(--mono);color:var(--faint);text-transform:uppercase;letter-spacing:.08em}
.k-em b{display:block;font-size:9.5px;margin:2px 0 1px}
.k-em p{margin:0;font-size:8.5px;color:var(--muted)}`},

{id:'avatar-group',group:'媒体',t:'头像组',en:'avatar group',rule:'按实际人数、识别需求和空间决定展示数量，溢出信息应能访问，头像不挤压变形。',
body:`<div class="k-ag"><span>林</span><span>周</span><span>陈</span><span>许</span><b>+8</b></div>`,
css:`.k-ag{display:flex;align-items:center}
.k-ag span{width:24px;height:24px;border-radius:50%;background:var(--bg);border:2px solid var(--paper);display:grid;place-items:center;font-size:8.5px;color:var(--muted);margin-left:-6px}
.k-ag span:first-child{margin-left:0}
.k-ag b{margin-left:4px;font:8px var(--mono);color:var(--faint)}`},

/* ---------- 引用 6 ---------- */
{id:'footnote-content',group:'引用',t:'脚注',en:'footnote',rule:'正文不打断，点数字看注释；一条脚注只回答一个问题。',
body:`<p class="k-fn">字符间距不应小于字高的十分之一<button data-kfn>1</button>，这是一条经验值。</p><p class="k-fnp" data-kfnp hidden>公共标识可读性研究中的经验值；实际仍要按观看距离调整。</p>`,
css:`.k-fn{margin:0;width:100%;font-size:10.5px;line-height:1.9;color:var(--muted)}
.k-fn button{font:7.5px var(--mono);border:0;background:var(--lime-soft);color:var(--ink);border-radius:3px;padding:0 3px;vertical-align:super;cursor:pointer}
.k-fnp{margin:5px 0 0;border-top:1px solid var(--line);padding-top:4px;font-size:8.5px;color:var(--faint);line-height:1.6}`,
init:(card)=>{const b=card.querySelector('[data-kfn]'),p=card.querySelector('[data-kfnp]');b.onclick=()=>{p.hidden=!p.hidden;};}},

{id:'sidenote-content',group:'引用',t:'边注',en:'sidenote',rule:'边注放在外侧，不打断正文；手机收进正文。',
body:`<div class="k-sn"><p>字高 38 厘米，是在街对面能看清笔画的最小值。</p><aside>旁注：同一块底板，字距从 2cm 放到 5cm，远看反而更清楚。</aside></div>`,
css:`.k-sn{width:100%;display:flex;flex-direction:column;gap:5px;font-size:10px;line-height:1.8;color:var(--muted)}
.k-sn p{margin:0}
.k-sn aside{font-size:8.5px;color:var(--faint);border-left:2px solid var(--line);padding-left:7px;line-height:1.6}`},

{id:'references',group:'引用',t:'参考文献',en:'references',rule:'编号与正文对应；作者、标题、日期齐全。',
body:`<ol class="k-ref"><li>林一舟. 一条街的招牌. 缓坡, 2026-10-12.</li><li>周见. 城南五金街访谈记录. 2026-08-21.</li></ol>`,
css:`.k-ref{margin:0;padding-left:15px;font-size:8.5px;line-height:1.7;color:var(--muted)}
.k-ref li::marker{font-family:var(--mono);font-size:7.5px;color:var(--faint)}`},

{id:'source-card',group:'引用',t:'来源卡',en:'source card',rule:'来源要能点回原文；写明日期，避免过期信息。',
body:`<div class="k-src"><span>来源</span><b>市街道门头设置导则（2019）</b><p>第 3.2 条 · 底板尺寸与字距建议</p></div>`,
css:`.k-src{width:100%;border-left:2px solid var(--ink);padding-left:8px}
.k-src span{font:7.5px var(--mono);color:var(--faint);letter-spacing:.08em}
.k-src b{display:block;font-size:9.5px;margin:1px 0}
.k-src p{margin:0;font-size:8.5px;color:var(--muted)}`},

{id:'changelog',group:'引用',t:'更新记录',en:'changelog',rule:'版本、日期、改了什么；不要只写“优化体验”。',
body:`<div class="k-cl"><div><b>v07</b><time>10.12</time><p>新增街道栏目，调整目录。</p></div><div><b>v06</b><time>08.30</time><p>修正三处事实错误。</p></div></div>`,
css:`.k-cl{width:100%;font-size:8.5px}
.k-cl div{display:grid;grid-template-columns:34px 40px 1fr;gap:4px;padding:4px 0;border-bottom:1px solid var(--line);color:var(--muted)}
.k-cl b{font:8px var(--mono);color:var(--ink)}
.k-cl time{font:7.5px var(--mono);color:var(--faint)}
.k-cl p{margin:0}`},

{id:'share-card',group:'引用',t:'分享卡',en:'share card',rule:'分享渠道与动作数量按任务决定；复制或分享后提供真实结果反馈。',
body:`<div class="k-sh"><b>一条街的招牌，是怎么变丑的</b><span>slope.example/07/sign</span><button data-kshare>复制链接</button></div>`,
css:`.k-sh{width:100%;border:1px solid var(--line);border-radius:6px;padding:8px}
.k-sh b{display:block;font-size:9.5px}
.k-sh span{display:block;font:7.5px var(--mono);color:var(--faint);margin:2px 0 6px}
.k-sh button{font-size:8px;border:1px solid var(--line);background:var(--paper);border-radius:4px;padding:3px 8px;cursor:pointer}`,
init:(card)=>{const b=card.querySelector('[data-kshare]');b.onclick=async()=>{try{await navigator.clipboard.writeText(location.href);}catch{}const old=b.textContent;b.textContent='已复制';setTimeout(()=>b.textContent=old,1200);};}},

/* ---------- 长文 7 ---------- */
{id:'dropcap-content',group:'长文',t:'首字下沉',en:'drop cap',rule:'首字下沉是可选的排版表现，使用时检查换行、阅读顺序与不同语言显示。',
body:`<p class="k-dc">排版不是把字放上去，而是决定阅读从哪里开始。首字下沉是最老的一种“请从这里读”。</p>`,
css:`.k-dc{width:100%;margin:0;font:10.5px/1.9 var(--sans);color:var(--muted);text-align:justify}
.k-dc:first-letter{float:left;font-size:34px;line-height:.82;padding:2px 7px 0 0;font-weight:700;color:var(--ink)}`},

{id:'pullquote-content',group:'长文',t:'引文',en:'pull quote',rule:'引文是从正文里拎出来的一句；不要加引号再加引号。',
body:`<figure class="k-pq"><blockquote>慢一点，才看得见。</blockquote><figcaption>编辑室 · 第 07 期</figcaption></figure>`,
css:`.k-pq{margin:0;width:100%;border-left:2px solid var(--ink);padding-left:10px}
.k-pq blockquote{margin:0;font:15px/1.7 var(--serif)}
.k-pq figcaption{margin-top:3px;font:8px var(--mono);color:var(--faint)}`},

{id:'columns-content',group:'长文',t:'分栏',en:'columns',rule:'按行宽、内容连续性与屏幕空间决定栏数和栏距，也可以保持单栏。',
body:`<div class="k-cols" data-kcols><p>分栏不是把内容切碎，而是让长文在宽屏上有一个合适的行长。一行四十五到七十五个字，读起来最省力；再宽，眼睛回行会丢。</p></div><button class="k-cbtn" data-kcolbtn>切成 1 栏</button>`,
css:`.k-cols{width:100%;height:74px;overflow:hidden;column-count:2;column-gap:14px;font-size:9.5px;line-height:1.75;color:var(--muted)}
.k-cols p{margin:0}
.k-cbtn{margin-top:4px;font-size:8px;border:1px solid var(--line);background:var(--paper);border-radius:4px;padding:2px 7px;cursor:pointer}`,
init:(card)=>{const c=card.querySelector('[data-kcols]'),b=card.querySelector('[data-kcolbtn]');b.onclick=()=>{const one=c.style.columnCount==='1';c.style.columnCount=one?'2':'1';b.textContent=one?'切成 1 栏':'切成 2 栏';};}},

{id:'toc-content',group:'长文',t:'目录',en:'table of contents',rule:'目录根据真实章节与导航需要选择层级，当前节可辨识且支持跳转。',
body:`<div class="k-toc"><a href="#" data-kt="0" class="on">01 起点</a><a href="#" data-kt="1">02 字距</a><a href="#" data-kt="2">03 留白</a></div><div class="k-tocbox" data-ktbox>01 起点：先决定阅读从哪里开始。</div>`,
css:`.k-toc{display:flex;flex-direction:column;gap:1px;font-size:9px;margin-bottom:5px}
.k-toc a{text-decoration:none;color:var(--muted);padding:2px 0 2px 7px;border-left:1px solid var(--line)}
.k-toc a.on{color:var(--ink);border-color:var(--ink);font-weight:600}
.k-tocbox{font-size:9px;color:var(--faint);border-top:1px solid var(--line);padding-top:5px}`,
init:(card)=>{const box=card.querySelector('[data-ktbox]');const texts=['01 起点：先决定阅读从哪里开始。','02 字距：远看时，眼睛需要空隙把笔画分开。','03 留白：让重要的东西有地方站。'];card.querySelectorAll('[data-kt]').forEach(a=>a.onclick=(e)=>{e.preventDefault();card.querySelectorAll('[data-kt]').forEach(x=>x.classList.toggle('on',x===a));box.textContent=texts[Number(a.dataset.kt)];});}},

{id:'reading-progress-content',group:'长文',t:'阅读进度',en:'reading progress',rule:'按阅读任务决定是否显示进度和百分比，进度与实际位置一致且不妨碍内容。',
body:`<div class="k-rp"><i data-krpb></i></div><div class="k-rps" data-krps><p>往下滚。</p><p>线会走。</p><p>它不是装饰，是在回答“还剩多少”。</p><p>到这里就走完了。</p></div>`,
css:`.k-rp{height:2px;background:var(--line);width:100%;margin-bottom:3px}
.k-rp i{display:block;height:100%;width:0;background:var(--ink)}
.k-rps{height:44px;overflow:auto;font-size:8.5px;line-height:1.7;color:var(--faint)}
.k-rps p{margin:0 0 3px}`,
init:(card)=>{const s=card.querySelector('[data-krps]'),b=card.querySelector('[data-krpb]');s.onscroll=()=>{b.style.width=Math.min(100,s.scrollTop/Math.max(1,s.scrollHeight-s.clientHeight)*100)+'%';};}},

{id:'print-style',group:'长文',t:'打印样式',en:'print styles',rule:'打印保留用户需要的正文、来源与操作结果，按纸面用途调整导航、色彩和装饰。',
body:`<div class="k-pr" data-kpr><b>打印预览</b><p>导航、分享、相关阅读在打印时隐藏；正文、图注、来源保留。</p></div><button class="k-cbtn" data-kprbtn>切换预览</button>`,
css:`.k-pr{width:100%;border:1px solid var(--line);border-radius:5px;padding:7px;font-size:9px;color:var(--muted)}
.k-pr b{display:block;font-size:9.5px;color:var(--ink)}
.k-pr p{margin:3px 0 0;line-height:1.6}
.k-pr.print{background:#fff;color:#111;box-shadow:none}
.k-pr.print .no-print{display:none}
.k-cbtn{margin-top:4px;font-size:8px;border:1px solid var(--line);background:var(--paper);border-radius:4px;padding:2px 7px;cursor:pointer}`,
init:(card)=>{const p=card.querySelector('[data-kpr]'),b=card.querySelector('[data-kprbtn]');b.onclick=()=>{p.classList.toggle('print');b.textContent=p.classList.contains('print')?'退出预览':'切换预览';};}},

{id:'translation',group:'长文',t:'多语言',en:'translation',rule:'原文与译文并排或切换；不要机器翻译后不标注。',
body:`<div class="k-tr"><p data-ktrorig>Slow down, and you begin to see.</p><p data-ktrtr hidden>慢一点，才看得见。</p><button data-ktrbtn>看译文</button></div>`,
css:`.k-tr{width:100%}
.k-tr p{margin:0 0 5px;font:11px/1.7 var(--serif);color:var(--ink)}
.k-tr p[hidden]{display:none}
.k-tr button{font-size:8px;border:1px solid var(--line);background:var(--paper);border-radius:4px;padding:2px 7px;cursor:pointer}`,
init:(card)=>{const o=card.querySelector('[data-ktrorig]'),t=card.querySelector('[data-ktrtr]'),b=card.querySelector('[data-ktrbtn]');b.onclick=()=>{const show=o.hidden;o.hidden=!show;t.hidden=show;b.textContent=show?'看译文':'看原文';};}},

/* ---------- 代码 5 ---------- */
{id:'inline-code',group:'代码',t:'行内代码',en:'inline code',rule:'行内代码只放命令、变量、文件名；不要放整句。',
body:`<p class="k-ic2">运行 <code>node serve.mjs</code> 后，打开 <code>127.0.0.1:8801</code>。</p>`,
css:`.k-ic2{margin:0;width:100%;font-size:10px;line-height:1.9;color:var(--muted)}
.k-ic2 code{font:9px var(--mono);background:var(--bg);border:1px solid var(--line);border-radius:3px;padding:1px 4px;color:var(--ink)}`},

{id:'code-block',group:'代码',t:'代码块',en:'code block',rule:'代码的说明、复制与换行方式按阅读任务决定，保留原始内容，长行可访问。',
body:`<div class="k-cb"><div class="bar"><b>serve.mjs</b><button data-kcopy>复制</button></div><pre>http.createServer((req, res) =&gt; {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(data);
}).listen(8801);</pre></div>`,
css:`.k-cb{width:100%;border:1px solid var(--line);border-radius:5px;overflow:hidden;background:var(--bg)}
.k-cb .bar{display:flex;justify-content:space-between;align-items:center;padding:3px 7px;border-bottom:1px solid var(--line);font:7.5px var(--mono);color:var(--faint)}
.k-cb .bar button{font-size:7.5px;border:1px solid var(--line);background:var(--paper);border-radius:3px;padding:1px 5px;cursor:pointer}
.k-cb pre{margin:0;padding:7px;overflow-x:auto;font:8px/1.6 var(--mono);color:var(--ink);white-space:pre}`,
init:(card)=>{const b=card.querySelector('[data-kcopy]'),pre=card.querySelector('pre');b.onclick=async()=>{try{await navigator.clipboard.writeText(pre.textContent);}catch{}b.textContent='已复制';setTimeout(()=>b.textContent='复制',1200);};}},

{id:'terminal',group:'代码',t:'终端',en:'terminal',rule:'命令与输出容易区分，不只依赖颜色；长输出可滚动、展开或检索。',
body:`<div class="k-tm"><div><i>$</i> node serve.mjs</div><div class="o">frontend pattern library on http://127.0.0.1:8801/</div><div><i>$</i> <span class="cur"></span></div></div>`,
css:`.k-tm{width:100%;background:var(--ink);color:var(--paper);border-radius:5px;padding:7px;font:8px/1.7 var(--mono)}
.k-tm i{color:var(--lime);font-style:normal;margin-right:3px}
.k-tm .o{color:var(--faint);padding-left:7px}
.k-tm .cur{display:inline-block;width:5px;height:9px;background:var(--lime);animation:k-cur 1s step-end infinite}
@keyframes k-cur{50%{opacity:0}}`},

{id:'diff-content',group:'代码',t:'差异',en:'diff',rule:'用符号、文字或结构区分增删与上下文，颜色和折叠方式按项目决定。',
body:`<div class="k-df"><div class="c">  "dependencies": {</div><div class="d">-   "vite": "^5.0.0",</div><div class="a">+   "vite": "^6.1.0",</div><div class="c">  }</div></div>`,
css:`.k-df{width:100%;border:1px solid var(--line);border-radius:4px;overflow:hidden;font:7.5px/1.7 var(--mono);background:var(--paper)}
.k-df div{padding:1px 6px;white-space:pre}
.k-df .c{color:var(--faint)}
.k-df .d{background:color-mix(in srgb,var(--coral) 14%,transparent);color:var(--warn)}
.k-df .a{background:var(--lime-soft);color:var(--ok)}`},

{id:'filetree',group:'代码',t:'文件树',en:'file tree',rule:'目录与文件的结构应可辨识，顺序、缩进与图标按查找任务决定。',
body:`<div class="k-ft"><div>site/</div><div class="i">index.html</div><div class="i">article.html</div><div class="i">site.css</div><div>archive/</div><div class="i">2026.html</div></div>`,
css:`.k-ft{width:100%;font:8px/1.8 var(--mono);color:var(--muted)}
.k-ft div{padding-left:0;color:var(--ink)}
.k-ft .i{padding-left:12px;color:var(--faint)}
.k-ft .i:before{content:"· ";color:var(--line)}`},

/* ---------- 交互内容 5 ---------- */
{id:'accordion-content',group:'交互内容',t:'折叠详情',en:'accordion',rule:'标题帮助预判内容，按比较与阅读任务决定是否允许多项同时展开。',
body:`<div class="k-ac2"><button data-kac aria-expanded="false">这件事要花多久？</button><p data-kacp hidden>大约十分钟，取决于模型响应速度。</p><button data-kac aria-expanded="false">会动我的文件吗？</button><p data-kacp hidden>不会；每次动手前都会先问你。</p></div>`,
css:`.k-ac2{width:100%;font-size:9px}
.k-ac2>button{display:block;width:100%;text-align:left;border:0;border-top:1px solid var(--line);background:transparent;font-size:9.5px;padding:5px 0;cursor:pointer;color:var(--ink)}
.k-ac2>button:after{content:"+";float:right;color:var(--faint);font-family:var(--mono)}
.k-ac2>button[aria-expanded=true]:after{content:"−"}
.k-ac2 p{margin:0 0 4px;color:var(--faint);line-height:1.7}`,
init:(card)=>{const bs=[...card.querySelectorAll('[data-kac]')];bs.forEach(b=>b.onclick=()=>{const open=b.getAttribute('aria-expanded')==='true';bs.forEach(x=>{x.setAttribute('aria-expanded','false');x.nextElementSibling.hidden=true;});if(!open){b.setAttribute('aria-expanded','true');b.nextElementSibling.hidden=false;}});}},

{id:'expandable-card',group:'交互内容',t:'展开全文',en:'expandable card',rule:'折叠时保留识别内容所需的信息，摘要长度按内容决定；展开后不丢失阅读位置。',
body:`<div class="k-ex"><p data-kex>招牌不是贴上去的，是长在墙上的。老周刻了三十四年招牌，他的铺子在城南一条卖五金的小街上。<span data-kmore hidden>门口堆着铝板、亚克力和一桶用了一半的稀释剂。他说，现在的门头，不让我们自己写字了。</span></p><button data-kexbtn>展开全文</button></div>`,
css:`.k-ex{width:100%;font-size:9.5px;line-height:1.75;color:var(--muted)}
.k-ex p{margin:0 0 4px}
.k-ex button{font-size:8px;border:1px solid var(--line);background:var(--paper);border-radius:4px;padding:2px 7px;cursor:pointer}`,
init:(card)=>{const more=card.querySelector('[data-kmore]'),b=card.querySelector('[data-kexbtn]');b.onclick=()=>{const open=!more.hidden;more.hidden=open;b.textContent=open?'展开全文':'收起';};}},

{id:'quote-carousel',group:'交互内容',t:'引用轮播',en:'quote carousel',rule:'一次一句；给页码和手动切换，不自动播。',
body:`<div class="k-qc"><blockquote data-kq>慢一点，才看得见。</blockquote><div><button data-kqp>‹</button><span data-kqn>1 / 3</span><button data-kqn2>›</button></div><cite data-kqc>编辑室</cite></div>`,
css:`.k-qc{width:100%;text-align:center}
.k-qc blockquote{margin:0;font:14px/1.6 var(--serif);min-height:44px;display:grid;place-items:center}
.k-qc div{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:4px}
.k-qc button{width:18px;height:18px;border:1px solid var(--line);background:var(--paper);border-radius:50%;font-size:9px;cursor:pointer;line-height:1}
.k-qc span{font:8px var(--mono);color:var(--faint)}
.k-qc cite{display:block;font:8px var(--mono);color:var(--faint);font-style:normal;margin-top:4px}`,
init:(card)=>{const qs=['慢一点，才看得见。','招牌不是贴上去的，是长在墙上的。','把字排松一点，空气就进来了。'];const cs=['编辑室','老周','陈默'];let i=0;const q=card.querySelector('[data-kq]'),n=card.querySelector('[data-kqn]'),c=card.querySelector('[data-kqc]');const paint=()=>{q.textContent=qs[i];c.textContent=cs[i];n.textContent=(i+1)+' / 3';};card.querySelector('[data-kqp]').onclick=()=>{i=(i+2)%3;paint();};card.querySelector('[data-kqn2]').onclick=()=>{i=(i+1)%3;paint();};paint();}},

{id:'filter-list',group:'交互内容',t:'可筛选列表',en:'filterable list',rule:'筛选条件可见；结果数量跟着变。',
body:`<div class="k-fl"><div class="chips"><button data-kf="全部" class="on">全部</button><button data-kf="街道">街道</button><button data-kf="字体">字体</button></div><div data-kflist><p data-kfi="街道">招牌 · 街道</p><p data-kfi="字体">字距 · 字体</p><p data-kfi="街道">路灯 · 街道</p></div><span data-kfn>3 条</span></div>`,
css:`.k-fl{width:100%;font-size:9px}
.k-fl .chips{display:flex;gap:4px;margin-bottom:5px}
.k-fl .chips button{font-size:8px;border:1px solid var(--line);background:var(--paper);border-radius:99px;padding:2px 7px;cursor:pointer;color:var(--muted)}
.k-fl .chips button.on{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.k-fl p{margin:0;padding:3px 0;border-bottom:1px solid var(--line);color:var(--muted)}
.k-fl span{display:block;margin-top:4px;font:7.5px var(--mono);color:var(--faint)}`,
init:(card)=>{const items=[...card.querySelectorAll('[data-kfi]')],n=card.querySelector('[data-kfn]');card.querySelectorAll('[data-kf]').forEach(b=>b.onclick=()=>{card.querySelectorAll('[data-kf]').forEach(x=>x.classList.toggle('on',x===b));let c=0;items.forEach(it=>{const show=b.dataset.kf==='全部'||it.dataset.kfi===b.dataset.kf;it.hidden=!show;if(show)c++;});n.textContent=c+' 条';});}},

{id:'search-highlight',group:'交互内容',t:'搜索高亮',en:'search highlight',rule:'高亮命中词，同时给结果数；没有结果给建议。',
body:`<input class="k-shi" data-kshi placeholder="搜：字距"><p class="k-sht" data-ksht>字距不是越紧越省空间。远看时，眼睛需要空隙把笔画分开。</p><span class="k-shn" data-kshn>输入关键词</span>`,
css:`.k-shi{width:100%;padding:4px 7px;border:1px solid var(--line);border-radius:4px;background:var(--paper);font-size:9px;outline:none;margin-bottom:4px}
.k-shi:focus{border-color:var(--ink)}
.k-sht{margin:0;font-size:9px;line-height:1.7;color:var(--muted)}
.k-sht mark{background:var(--lime);color:#141a10;padding:0 1px}
.k-shn{display:block;margin-top:3px;font:7.5px var(--mono);color:var(--faint)}`,
init:(card)=>{const input=card.querySelector('[data-kshi]'),p=card.querySelector('[data-ksht]'),n=card.querySelector('[data-kshn]');const text=p.textContent;input.oninput=()=>{const q=input.value.trim();p.textContent=text;n.textContent=q?'':'输入关键词';if(!q)return;const re=new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'g');let count=0;p.innerHTML=text.replace(re,(m)=>{count++;return '<mark>'+m+'</mark>';});n.textContent=count?'命中 '+count+' 处':'没有命中，试试「字距」';};}},

/* ---------- 内容结构 4 ---------- */
{id:'article-head',group:'内容结构',t:'文章头',en:'article header',rule:'文章头提供识别内容所需的标题与相关信息，栏目、提要、作者和时间按实际情况选用。',
body:`<div class="k-ah"><span>街道 / 第 07 期</span><h3>一条街的招牌，是怎么变丑的</h3><p>从老周的刻字铺到统一底板，招牌丢掉的不是风格，是分寸。</p><em>林一舟 · 12 分钟 · 2026.10.12</em></div>`,
css:`.k-ah{width:100%}
.k-ah span{font:7.5px var(--mono);color:var(--faint);letter-spacing:.08em}
.k-ah h3{margin:3px 0 4px;font:700 17px/1.2 var(--serif)}
.k-ah p{margin:0 0 4px;font-size:8.5px;line-height:1.6;color:var(--muted)}
.k-ah em{font:7.5px var(--mono);color:var(--faint);font-style:normal}`},

{id:'toc-page',group:'内容结构',t:'目录页',en:'index page',rule:'按用户查找方式组织索引，标题与补充信息按内容选用。',
body:`<div class="k-tp"><div><b>01</b><span>一条街的招牌，是怎么变丑的</span></div><div><b>02</b><span>菜市场里的价签，比海报诚实</span></div><div><b>03</b><span>一把用旧的椅子，会记住人的坐姿</span></div></div>`,
css:`.k-tp{width:100%;border-top:1px solid var(--line)}
.k-tp div{display:flex;gap:8px;padding:5px 0;border-bottom:1px solid var(--line);font-size:9px;color:var(--muted)}
.k-tp b{font:7.5px var(--mono);color:var(--faint);flex:0 0 16px}`},

{id:'related-content',group:'内容结构',t:'相关阅读',en:'related links',rule:'推荐内容应有真实关联，数量与说明按阅读任务决定，不虚构推荐依据。',
body:`<div class="k-rl"><span>相关阅读</span><a href="#">招牌的字距，远看才重要</a><a href="#">统一门头之后的三年</a><a href="#">老周的刻字铺</a></div>`,
css:`.k-rl{width:100%;display:flex;flex-direction:column;gap:3px;font-size:9px}
.k-rl span{font:7.5px var(--mono);color:var(--faint);letter-spacing:.08em;margin-bottom:2px}
.k-rl a{color:var(--muted);text-decoration:none;border-bottom:1px solid var(--line);padding-bottom:2px}
.k-rl a:hover{color:var(--ink);border-color:var(--ink)}`},

{id:'empty-content',group:'内容结构',t:'空内容',en:'empty content',rule:'说明没有内容的原因，并按任务提供恢复或继续路径，表现形式自由。',
body:`<div class="k-ec"><b>这一期还没有文章</b><p>编辑室正在路上。先去往期看看。</p><button>打开往期</button></div>`,
css:`.k-ec{width:100%;text-align:center;padding:10px;border:1px dashed var(--line);border-radius:6px}
.k-ec b{font-size:10px}
.k-ec p{margin:3px 0 7px;font-size:8.5px;color:var(--faint)}
.k-ec button{font-size:8.5px;border:1px solid var(--line);background:var(--paper);border-radius:99px;padding:3px 9px;cursor:pointer}`}
];
