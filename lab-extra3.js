/* 自动生成：node tools/emit.mjs —— 不要手改。真源是 data/assets/motion/*.json 中 source=lab-extra3 的条目。 */
/* DEMOS_EXTRA 会被主脚本并入 DEMOS；INITS_EXTRA 并入对应的交互初始化。 */
window.DEMOS_EXTRA = (window.DEMOS_EXTRA || []).concat([
{id:'drop-cap',cat:"长文",t:"首字下沉",en:"drop cap",d:"长文开头把第一个字放大，视线有了明确起点；比加粗整段安静。",body:`<p class="d-dc3">排版不是把字放上去，而是决定阅读从哪里开始。首字下沉是最老的一种“请从这里读”。</p>`,css:`.d-dc3{max-width:300px;margin:0;font-size:13px;line-height:1.95;text-align:justify}
.d-dc3:first-letter{float:left;font-size:56px;line-height:.82;padding:3px 9px 0 0;font-weight:700}`},
{id:'pull-quote-x',cat:"长文",t:"引文浮出",en:"pull quote",d:"把一句重要的话从正文里拎出来，左边一条线，读者会自然停一下。",body:`<figure class="d-pq3"><blockquote>慢一点，才看得见。</blockquote><figcaption>—— 编辑室，第 07 期</figcaption></figure>`,css:`.d-pq3{margin:0;max-width:280px;border-left:2px solid var(--ink);padding:2px 0 2px 16px}
.d-pq3 blockquote{margin:0;font-family:var(--serif);font-size:21px;line-height:1.7}
.d-pq3 figcaption{margin-top:6px;font:10px var(--mono);color:var(--faint)}`},
{id:'footnote-pop',cat:"长文",t:"脚注浮层",en:"footnote popover",d:"正文不打断，点右上角的小数字才出现注释；适合引用和来源。",body:`<p class="d-fn3">字符间距不应小于字高的十分之一<button class="d-footnote-pop-ref3" type="button" data-fnref aria-label="查看注释">1</button>，这是一条在街道上验证过的经验值。</p><div class="d-footnote-pop-pop3" data-fnpop hidden>公共标识可读性研究中的经验值；实际仍要按观看距离调整。</div>`,css:`.d-fn3{max-width:280px;margin:0;font-size:13px;line-height:1.9}
.d-footnote-pop-ref3{font:9px var(--mono);border:0;background:var(--lime-soft);color:var(--ink);border-radius:2px;padding:0 4px;cursor:pointer;vertical-align:super;margin-left:2px}
.d-footnote-pop-pop3{margin-top:10px;max-width:280px;border-top:1px solid var(--line);padding-top:8px;font-size:11px;line-height:1.7;color:var(--muted)}`},
{id:'read-progress-x',cat:"长文",t:"阅读进度",en:"reading progress",d:"长文里的一条细线，告诉读者还剩多少；比百分比数字安静。",body:`<div class="d-rp3"><div class="d-read-progress-x-rpbar3"><i data-rpi></i></div><div class="d-read-progress-x-rpscroll3" data-rpscroll><p>滚动这段文字，上面的线会走。它不是装饰，是在回答“还剩多少”。</p><p>读长文最怕的不是长，是不知道尽头。进度条把不可见的距离变成可见的长度，人就会愿意继续。</p><p>注意它只做一件事：给位置。不加百分比，不加动效，不抢正文。</p><p>到这里应该走完了。如果你的手指还在滚，说明这段文字够长。</p></div><span class="d-read-progress-x-rphint3">在框内滚动</span></div>`,css:`.d-rp3{width:270px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden}
.d-read-progress-x-rpbar3{height:2px;background:var(--line)}
.d-read-progress-x-rpbar3 i{display:block;height:100%;width:0;background:var(--ink)}
.d-read-progress-x-rpscroll3{height:104px;overflow:auto;padding:10px 12px;font-size:11px;line-height:1.8;color:var(--muted)}
.d-read-progress-x-rpscroll3 p{margin:0 0 8px}
.d-read-progress-x-rphint3{display:block;padding:6px 12px;border-top:1px solid var(--line);font:9px var(--mono);color:var(--faint)}`},
{id:'toc-follow',cat:"长文",t:"目录跟随",en:"toc follow",d:"左边目录，右边正文；滚到哪一节，目录就亮哪一条。长文导航的基本功。",body:`<div class="d-tf3"><div class="d-toc-follow-tfnav3"><button type="button" data-goto3="0" class="d-toc-follow-on">01 起点</button><button type="button" data-goto3="1">02 字距</button><button type="button" data-goto3="2">03 留白</button></div><div class="d-toc-follow-tfscroll3" data-tfscroll><section data-sec3><b>01 起点</b><p>先决定阅读从哪里开始。标题是入口，首段是台阶。</p><p>台阶太高，人就不上去了。</p></section><section data-sec3><b>02 字距</b><p>字距不是越紧越省空间。远看时，眼睛需要空隙把笔画分开。</p><p>同一块底板，字距从 2 厘米放到 5 厘米，十五米外反而更清楚。</p></section><section data-sec3><b>03 留白</b><p>留白不是空着，是让重要的东西有地方站。</p><p>把字排松一点，空气就进来了。</p></section></div></div>`,css:`.d-tf3{display:flex;width:280px;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--paper);height:128px}
.d-toc-follow-tfnav3{width:88px;border-right:1px solid var(--line);padding:6px;display:flex;flex-direction:column;gap:2px;background:var(--bg)}
.d-toc-follow-tfnav3 button{text-align:left;font-size:9px;padding:4px 6px;border:0;border-radius:2px;background:transparent;color:var(--muted);cursor:pointer}
.d-toc-follow-tfnav3 button.d-toc-follow-on{background:var(--paper);color:var(--ink);font-weight:600}
.d-toc-follow-tfscroll3{flex:1;overflow:auto;padding:8px 10px;font-size:11px;line-height:1.7;color:var(--muted)}
.d-toc-follow-tfscroll3 section{min-height:84px}
.d-toc-follow-tfscroll3 b{display:block;color:var(--ink);font-size:11px;margin-bottom:2px}
.d-toc-follow-tfscroll3 p{margin:0 0 4px}`},
{id:'reading-time',cat:"长文",t:"阅读时长",en:"reading time",d:"按字数估一个阅读时间；先告诉读者要花多久，比催他“快读”有用。",body:`<textarea class="d-rt3" data-rt placeholder="粘贴一段文字…">把字排松一点，空气就进来了。行距、字距、段距，三个最容易被忽略的数字。</textarea><div class="d-reading-time-rtout3"><b data-rn>0</b> 字 · 约 <b data-rm>0</b> 分钟</div>`,css:`.d-rt3{width:260px;height:72px;padding:8px 10px;border:1px solid var(--line);border-radius:6px;background:var(--paper);resize:none;font-size:11px;line-height:1.7;outline:none}
.d-rt3:focus{border-color:var(--ink)}
.d-reading-time-rtout3{font:10px var(--mono);color:var(--faint);letter-spacing:.04em}
.d-reading-time-rtout3 b{color:var(--ink);font-weight:600}`},
{id:'sidenote-x',cat:"长文",t:"边注",en:"sidenote",d:"正文提到一个数字，旁边给一条不打断阅读的边注；手机上收进正文。",body:`<div class="d-sn3"><p>老周说，字高 <button type="button" class="d-sidenote-x-snmark3" data-sn3>38 厘米</button> 是他量出来的，不是算出来的。</p><aside class="d-sidenote-x-snbox3" data-snbox hidden>字高 38cm，是站在街对面能看清笔画的最小值；字距留 4cm，远看才不糊。</aside></div>`,css:`.d-sn3{width:270px;font-size:11px;line-height:1.9;position:relative}
.d-sn3 p{margin:0}
.d-sidenote-x-snmark3{border:0;border-bottom:1px dashed var(--ink);background:var(--lime-soft);color:var(--ink);font:inherit;cursor:pointer;padding:0 2px}
.d-sidenote-x-snbox3{margin-top:8px;border-top:1px solid var(--line);padding-top:7px;font-size:11px;line-height:1.7;color:var(--muted)}`},
{id:'text-wrap',cat:"长文",t:"文字绕图",en:"shape-outside",d:"让文字绕着图形走；排版不必永远是方块，轮廓也能被行盒认识。",body:`<div class="d-tw3"><span class="d-text-wrap-shape3" aria-hidden="true"></span><p>文字绕着图形走。CSS 的 shape-outside 让行盒认识圆、多边形甚至图片的轮廓，长文就不必永远是一块方块。</p></div>`,css:`.d-tw3{width:280px;font-size:11px;line-height:1.8;color:var(--muted);overflow:hidden}
.d-tw3 .d-text-wrap-shape3{float:left;width:64px;height:64px;border-radius:50%;background:var(--lime);margin:2px 12px 4px 0;shape-outside:circle(50%)}
.d-tw3 p{margin:0}`},
{id:'column-flow',cat:"长文",t:"分栏切换",en:"column flow",d:"宽屏分两栏，窄屏回一栏；一行四十五到七十五个字，读起来最省力。",body:`<div class="d-cf3" data-cf3><p>分栏不是把内容切碎，而是让长文在宽屏上有一个合适的行长。一行四十五到七十五个字，读起来最省力；再宽，眼睛回行会丢。窄屏就回到一栏，别硬分。</p></div><div class="d-column-flow-cfbtns3"><button type="button" data-col3="1">1 栏</button><button type="button" data-col3="2" class="d-column-flow-on">2 栏</button><button type="button" data-col3="3">3 栏</button></div>`,css:`.d-cf3{width:280px;height:110px;overflow:hidden}
.d-cf3 p{margin:0;font-size:11px;line-height:1.75;color:var(--muted);column-count:2;column-gap:14px}
.d-column-flow-cfbtns3{display:flex;gap:4px}
.d-column-flow-cfbtns3 button{font-size:9px;border:1px solid var(--line);background:var(--paper);color:var(--muted);border-radius:2px;padding:2px 7px;cursor:pointer}
.d-column-flow-cfbtns3 button.d-column-flow-on{background:var(--ink);color:var(--paper);border-color:var(--ink)}`},
{id:'text-annotate',cat:"长文",t:"划词标记",en:"text annotate",d:"选中一句话，浮出「标记」；给长文加荧光笔，不改原文。",body:`<div class="d-an3"><p data-antext>选中这句话里的任意几个字，会浮出一个「标记」按钮；点它，选中的文字就被划上荧光笔。</p><div class="d-text-annotate-antip3" data-antip hidden><button type="button" data-anmark>标记</button></div></div>`,css:`.d-an3{width:280px;font-size:11px;line-height:1.9;position:relative}
.d-an3 p{margin:0;user-select:text}
.d-an3 mark{background:var(--lime);color:#141a10;padding:0 2px}
.d-text-annotate-antip3{position:absolute;right:0;bottom:-8px;z-index:2}
.d-text-annotate-antip3 button{font:9.5px var(--mono);border:1px solid var(--ink);background:var(--ink);color:var(--paper);border-radius:2px;padding:3px 8px;cursor:pointer}`},
{id:'table-sort',cat:"表格",t:"表头排序",en:"sortable table",d:"点表头排序，箭头表示方向；表格的第一层交互，比再画一个筛选器有用。",body:`<table class="d-ts3"><thead><tr><th data-sort3="0">文章 <span>↕</span></th><th data-sort3="1">分钟 <span>↕</span></th></tr></thead><tbody><tr><td>招牌</td><td>12</td></tr><tr><td>价签</td><td>6</td></tr><tr><td>椅子</td><td>8</td></tr><tr><td>站牌</td><td>9</td></tr></tbody></table>`,css:`.d-ts3{width:250px;border-collapse:collapse;font-size:11px}
.d-ts3 th{font:9px var(--mono);letter-spacing:.06em;color:var(--faint);text-align:left;padding:6px 8px;border-bottom:1px solid var(--line);cursor:pointer;user-select:none}
.d-ts3 th span{opacity:.5}
.d-ts3 td{padding:6px 8px;border-bottom:1px solid var(--line);color:var(--muted)}
.d-ts3 td:last-child{text-align:right;font-family:var(--mono)}
.d-ts3 th:last-child{text-align:right}`},
{id:'col-pin',cat:"表格",t:"固定首列",en:"pinned column",d:"横向滚动时把首列钉住；表格宽过屏幕，读者仍然知道自己在看谁。",body:`<div class="d-cp3" tabindex="0" aria-label="横向滚动的表格"><table><thead><tr><th>文章</th><th>日期</th><th>栏目</th><th>阅读</th><th>期数</th></tr></thead><tbody><tr><td>招牌</td><td>10.12</td><td>街道</td><td>12 分钟</td><td>07</td></tr><tr><td>价签</td><td>10.12</td><td>物件</td><td>6 分钟</td><td>07</td></tr><tr><td>椅子</td><td>10.12</td><td>手艺</td><td>8 分钟</td><td>07</td></tr></tbody></table></div>`,css:`.d-cp3{width:260px;overflow-x:auto;border:1px solid var(--line);border-radius:6px;background:var(--paper)}
.d-cp3 table{min-width:380px;border-collapse:collapse;font-size:11px}
.d-cp3 th,.d-cp3 td{text-align:left;padding:6px 9px;border-bottom:1px solid var(--line);white-space:nowrap;color:var(--muted)}
.d-cp3 th{font:9px var(--mono);color:var(--faint);background:var(--bg)}
.d-cp3 th:first-child,.d-cp3 td:first-child{position:sticky;left:0;background:var(--paper);z-index:1;box-shadow:1px 0 0 var(--line)}
.d-cp3 th:first-child{background:var(--bg)}`},
{id:'inline-edit',cat:"表格",t:"行内编辑",en:"inline edit",d:"点单元格直接改，回车保存；比开一个弹窗快，也比弹窗不容易迷路。",body:`<table class="d-ie3"><tbody><tr><td data-edit3="招牌">红烧牛肉面</td><td>¥18</td></tr><tr><td data-edit3="价签">手写价签</td><td>¥6</td></tr><tr><td data-edit3="椅子">旧木椅</td><td>¥120</td></tr></tbody></table><p class="d-inline-edit-iehint3">点第一列改名字，回车保存</p>`,css:`.d-ie3{width:240px;border-collapse:collapse;font-size:11px}
.d-ie3 td{padding:6px 8px;border-bottom:1px solid var(--line);color:var(--muted)}
.d-ie3 td[data-edit3]{color:var(--ink);cursor:text}
.d-ie3 td[data-edit3]:hover{background:var(--bg)}
.d-ie3 input{width:100%;border:1px solid var(--ink);border-radius:2px;background:var(--paper);font:inherit;padding:2px 4px;outline:none}
.d-inline-edit-iehint3{margin:6px 0 0;font:9px var(--mono);color:var(--faint)}`},
{id:'virtual-list',cat:"表格",t:"虚拟滚动",en:"virtual list",d:"一千行只渲染看得见的十几行；长表格不卡，滚动条高度还是对的。",body:`<div class="d-vl3" data-vl tabindex="0" aria-label="一千行虚拟列表"><div class="d-virtual-list-vlspacer3" data-vlspacer></div><div class="d-virtual-list-vlrows3" data-vlrows></div></div>`,css:`.d-vl3{width:220px;height:126px;overflow:auto;border:1px solid var(--line);border-radius:6px;position:relative;background:var(--paper)}
.d-virtual-list-vlspacer3{width:1px}
.d-virtual-list-vlrows3{position:absolute;left:0;right:0;top:0;will-change:transform}
.d-virtual-list-vlrows3 div{height:21px;display:flex;align-items:center;padding:0 9px;border-bottom:1px solid var(--line);font-size:9px;color:var(--muted)}`},
{id:'col-resize',cat:"表格",t:"拖拽列宽",en:"column resize",d:"拖表头边缘改列宽，双击回到默认；数据表最容易被忽略的基本功。",body:`<table class="d-rz3"><thead><tr><th>文章<span class="d-col-resize-rz3" data-rz></span></th><th>栏目<span class="d-col-resize-rz3" data-rz></span></th></tr></thead><tbody><tr><td>一条街的招牌</td><td>街道</td></tr><tr><td>菜市场价签</td><td>物件</td></tr></tbody></table><p class="d-col-resize-rzhint3">拖表头右侧；双击复位</p>`,css:`.d-rz3{width:260px;table-layout:fixed;border-collapse:collapse;font-size:11px}
.d-rz3 th{position:relative;text-align:left;padding:6px 9px;border-bottom:1px solid var(--line);font:9px var(--mono);color:var(--faint);overflow:hidden}
.d-rz3 td{padding:6px 9px;border-bottom:1px solid var(--line);color:var(--muted);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.d-col-resize-rz3{position:absolute;right:-3px;top:0;bottom:0;width:7px;cursor:col-resize}
.d-col-resize-rz3:hover{background:var(--line)}
.d-col-resize-rzhint3{margin:6px 0 0;font:9px var(--mono);color:var(--faint)}`},
{id:'row-select',cat:"表格",t:"行选择与批量条",en:"row selection",d:"勾选若干行，底部浮出批量操作；选中数量和动作永远一起出现。",body:`<table class="d-rs3"><thead><tr><th><input type="checkbox" data-all3 aria-label="全选"></th><th>任务</th><th>状态</th></tr></thead><tbody><tr><td><input type="checkbox" data-row3 aria-label="选择构建"></td><td>构建</td><td>完成</td></tr><tr><td><input type="checkbox" data-row3 aria-label="选择截图"></td><td>截图</td><td>进行中</td></tr><tr><td><input type="checkbox" data-row3 aria-label="选择回归"></td><td>回归</td><td>待审批</td></tr></tbody></table><div class="d-row-select-rsbar3" data-rsbar hidden>已选 <b data-rsn>0</b> · 标记完成</div>`,css:`.d-rs3{width:240px;border-collapse:collapse;font-size:11px}
.d-rs3 th,.d-rs3 td{text-align:left;padding:5px 7px;border-bottom:1px solid var(--line);color:var(--muted)}
.d-rs3 th{font:9px var(--mono);color:var(--faint)}
.d-row-select-rsbar3{margin-top:6px;background:var(--ink);color:var(--paper);font-size:9px;padding:5px 9px;border-radius:6px}
.d-row-select-rsbar3 b{font-family:var(--mono)}`},
{id:'filter-builder',cat:"表格",t:"状态筛选",en:"status filter",d:"先按状态收窄，再读列表；筛选按钮上带数量，眼睛不用来回数。",body:`<div class="d-fb3"><div class="d-filter-builder-fbtabs3"><button type="button" data-f3="全部" class="d-filter-builder-on">全部 3</button><button type="button" data-f3="待审批">待审批 1</button><button type="button" data-f3="失败">失败 1</button></div><div class="d-filter-builder-fbrows3"><div data-status3="待审批">审批 · 构建</div><div data-status3="失败">失败 · 截图</div><div data-status3="完成">完成 · 回归</div></div></div>`,css:`.d-fb3{width:250px}
.d-filter-builder-fbtabs3{display:flex;gap:4px;margin-bottom:6px;flex-wrap:wrap}
.d-filter-builder-fbtabs3 button{font-size:9px;border:1px solid var(--line);background:var(--paper);color:var(--muted);border-radius:999px;padding:2px 8px;cursor:pointer}
.d-filter-builder-fbtabs3 button.d-filter-builder-on{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.d-filter-builder-fbrows3 div{font-size:11px;padding:6px 8px;border-bottom:1px solid var(--line);color:var(--muted)}
.d-filter-builder-fbrows3 div[hidden]{display:none}`},
{id:'density-toggle',cat:"表格",t:"密度切换",en:"density toggle",d:"舒适和紧凑两档，行高和字号一起变；让用户按屏幕和任务自己选。",body:`<div class="d-dt3"><div class="d-density-toggle-dtbtns3"><button type="button" data-dens3="cozy" class="d-density-toggle-on">舒适</button><button type="button" data-dens3="compact">紧凑</button></div><table data-dentable><tbody><tr><td>构建</td><td>完成</td></tr><tr><td>截图</td><td>进行中</td></tr><tr><td>回归</td><td>待审批</td></tr><tr><td>发布</td><td>排队</td></tr></tbody></table></div>`,css:`.d-dt3{width:230px}
.d-density-toggle-dtbtns3{display:flex;gap:4px;margin-bottom:6px}
.d-density-toggle-dtbtns3 button{font-size:9px;border:1px solid var(--line);background:var(--paper);color:var(--muted);border-radius:2px;padding:2px 7px;cursor:pointer}
.d-density-toggle-dtbtns3 button.d-density-toggle-on{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.d-dt3 table{width:100%;border-collapse:collapse;font-size:11px}
.d-dt3 td{padding:9px 8px;border-bottom:1px solid var(--line);color:var(--muted)}
.d-dt3 table.compact td{padding:4px 8px;font-size:9px}`},
{id:'page-404',cat:"状态页",t:"404 页",en:"404 page",d:"找不到页面时，先承认，再给一个能走的方向；不要放一个巨大的插画然后没有出口。",body:`<div class="d-p404"><b>404</b><p>这页可能被移动了，或者从来没存在过。</p><button type="button" data-back3>回到本期</button><em data-backmsg3></em></div>`,css:`.d-p404{width:250px;text-align:center;padding:10px}
.d-p404 b{display:block;font-family:var(--serif);font-size:56px;line-height:1;letter-spacing:-.04em}
.d-p404 p{margin:8px 0 12px;font-size:11px;color:var(--muted);line-height:1.7}
.d-p404 button{font-size:11px;border:1px solid var(--ink);background:var(--ink);color:var(--paper);border-radius:999px;padding:6px 12px;cursor:pointer}
.d-p404 em{display:block;margin-top:8px;font:9px var(--mono);color:var(--faint);font-style:normal}`},
{id:'offline-banner',cat:"状态页",t:"离线横幅",en:"offline banner",d:"断网时顶上出现一条，说明改动会留在本地；恢复后自己消失。",body:`<div class="d-ob3"><div class="d-offline-banner-banner3" data-banner3 hidden>离线了 · 改动先保存在本机 <button type="button" data-online3>重连</button></div><div class="d-offline-banner-content3">页面内容照常可读。</div><button type="button" class="d-offline-banner-obbtn3" data-offline3>模拟断网</button></div>`,css:`.d-ob3{width:260px}
.d-offline-banner-banner3{background:var(--ink);color:var(--paper);font-size:9px;padding:6px 9px;border-radius:6px;display:flex;align-items:center;gap:6px;margin-bottom:6px}
.d-offline-banner-banner3 button{margin-left:auto;font:9px var(--mono);background:transparent;color:var(--lime);border:1px solid var(--lime);border-radius:2px;padding:1px 5px;cursor:pointer}
.d-offline-banner-content3{border:1px dashed var(--line);border-radius:6px;padding:18px 10px;text-align:center;font-size:11px;color:var(--muted)}
.d-offline-banner-obbtn3{font-size:9px;border:1px solid var(--line);background:var(--paper);color:var(--muted);border-radius:2px;padding:3px 8px;cursor:pointer}`},
{id:'page-403',cat:"状态页",t:"无权限页",en:"403 page",d:"说清楚为什么打不开、谁能开；给一个申请入口，而不是一句“禁止访问”。",body:`<div class="d-p403"><span class="d-page-403-lock3" aria-hidden="true"></span><b>没有权限</b><p>这个房间只对项目成员开放。</p><button type="button" data-req3>申请权限</button><em data-reqmsg3></em></div>`,css:`.d-p403{width:240px;text-align:center;padding:8px}
.d-page-403-lock3{display:block;width:26px;height:19px;border:2px solid var(--ink);border-radius:2px;margin:0 auto 10px;position:relative}
.d-page-403-lock3:before{content:"";position:absolute;left:5px;top:-11px;width:12px;height:12px;border:2px solid var(--ink);border-bottom:0;border-radius:10px 10px 0 0}
.d-p403 b{font-size:13px}
.d-p403 p{margin:4px 0 10px;font-size:11px;color:var(--muted)}
.d-p403 button{font-size:9px;border:1px solid var(--line);background:var(--paper);border-radius:999px;padding:5px 11px;cursor:pointer}
.d-p403 em{display:block;margin-top:7px;font:9px var(--mono);color:var(--faint);font-style:normal}`},
{id:'session-expired',cat:"状态页",t:"会话过期",en:"session expired",d:"过期不是错误，是提醒；保留现场，重新登录后回到原地。",body:`<div class="d-se3"><div class="d-session-expired-secard3" data-secard><b>会话已过期</b><p>为了安全，重新登录后才能继续。</p><button type="button" data-relogin3>重新登录</button></div><p class="d-session-expired-semsg3" data-semsg hidden>已重新登录 · 回到刚才的位置</p></div>`,css:`.d-se3{width:230px}
.d-session-expired-secard3{border:1px solid var(--line);border-left:3px solid var(--coral);border-radius:6px;padding:10px 12px;background:var(--bg)}
.d-session-expired-secard3 b{font-size:11px}
.d-session-expired-secard3 p{margin:3px 0 8px;font-size:9px;color:var(--muted)}
.d-session-expired-secard3 button{font-size:9px;border:1px solid var(--ink);background:var(--ink);color:var(--paper);border-radius:999px;padding:4px 9px;cursor:pointer}
.d-session-expired-semsg3{margin:8px 0 0;font:9.5px var(--mono);color:var(--ok)}`},
{id:'empty-search',cat:"状态页",t:"搜索无结果",en:"empty search",d:"没有结果时给三条能点的建议；空态不是句号，是下一步。",body:`<div class="d-es3"><input data-es3 type="search" placeholder="搜房间或成员" aria-label="搜索"><div class="d-empty-search-esres3" data-esres><b>没有找到</b><p>试试这几个：</p><div class="d-empty-search-essug3"><button type="button" data-sug3>官网</button><button type="button" data-sug3>素材</button><button type="button" data-sug3>周报</button></div></div></div>`,css:`.d-es3{width:250px}
.d-es3 input{width:100%;padding:7px 10px;border:1px solid var(--line);border-radius:999px;background:var(--paper);font-size:11px;outline:none}
.d-es3 input:focus{border-color:var(--ink)}
.d-empty-search-esres3{margin-top:8px;text-align:center;padding:12px 8px;border:1px dashed var(--line);border-radius:6px}
.d-empty-search-esres3 b{font-size:11px}
.d-empty-search-esres3 p{margin:3px 0 8px;font-size:9px;color:var(--faint)}
.d-empty-search-essug3{display:flex;gap:4px;justify-content:center}
.d-empty-search-essug3 button{font-size:9px;border:1px solid var(--line);background:var(--paper);border-radius:999px;padding:2px 8px;cursor:pointer}
.d-empty-search-esres3.ok{border-style:solid;color:var(--ink)}`},
{id:'error-retry-x',cat:"状态页",t:"失败与重试",en:"error retry",d:"失败时说清楚“什么没有发生”，再给一个重试；不要只写“出错了”。",body:`<div class="d-er3"><div class="d-error-retry-x-erbox3" data-erbox><b>接口 502</b><p>网关没有响应，任务没有执行。</p><button type="button" data-retry3>重试</button></div></div>`,css:`.d-er3{width:230px}
.d-error-retry-x-erbox3{border:1px solid var(--line);border-left:3px solid var(--coral);border-radius:6px;padding:10px 12px;background:var(--bg)}
.d-error-retry-x-erbox3 b{font-size:11px}
.d-error-retry-x-erbox3 p{margin:3px 0 8px;font-size:9px;color:var(--muted);line-height:1.6}
.d-error-retry-x-erbox3 button{font-size:9px;border:1px solid var(--line);background:var(--paper);border-radius:999px;padding:4px 9px;cursor:pointer}
.d-error-retry-x-erbox3.ok{border-left-color:var(--ok)}
.d-error-retry-x-erbox3.ok button{border-color:var(--ok);color:var(--ok)}`},
{id:'maintenance-x',cat:"状态页",t:"维护倒计时",en:"maintenance",d:"维护页给一个可见的等待；有进度和出口，比“请稍后”有诚意。",body:`<div class="d-mt3"><b>维护中</b><p>预计 <span data-mtsec>10</span> 秒后恢复。</p><div class="d-maintenance-x-mtprog3"><i data-mtprog></i></div><button type="button" data-mtskip>提前恢复</button></div>`,css:`.d-mt3{width:220px;text-align:center;border:1px solid var(--line);border-radius:10px;padding:14px;background:var(--paper)}
.d-mt3 b{font-size:11px}
.d-mt3 p{margin:4px 0 9px;font-size:9px;color:var(--muted)}
.d-maintenance-x-mtprog3{height:4px;background:var(--line);border-radius:999px;overflow:hidden;margin-bottom:9px}
.d-maintenance-x-mtprog3 i{display:block;height:100%;width:0;background:var(--ink);transition:width 280ms linear}
.d-mt3 button{font-size:9px;border:1px solid var(--line);background:var(--paper);border-radius:999px;padding:4px 9px;cursor:pointer}`},
{id:'success-next',cat:"状态页",t:"成功与下一步",en:"success next steps",d:"成功页不只打勾，还告诉人接下来能做什么；否则用户会停在原地。",body:`<div class="d-sx3"><span class="d-success-next-sxcheck3" aria-hidden="true">✓</span><b>发布完成</b><p>版本已上线，接下来可以：</p><div class="d-success-next-sxacts3"><button type="button" data-next3>查看监控</button><button type="button" data-next3>分享链接</button><button type="button" data-next3>再发一版</button></div><em data-nextmsg3></em></div>`,css:`.d-sx3{width:240px;text-align:center}
.d-success-next-sxcheck3{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--lime);color:#141a10;margin:0 auto 8px;font-size:13px}
.d-sx3 b{font-size:13px}
.d-sx3 p{margin:3px 0 9px;font-size:9px;color:var(--muted)}
.d-success-next-sxacts3{display:flex;gap:4px;justify-content:center;flex-wrap:wrap}
.d-success-next-sxacts3 button{font-size:9px;border:1px solid var(--line);background:var(--paper);border-radius:999px;padding:3px 8px;cursor:pointer}
.d-sx3 em{display:block;margin-top:8px;font:9px var(--mono);color:var(--faint);font-style:normal}`},
{id:'before-after',cat:"媒体",t:"前后对比滑杆",en:"before / after",d:"一根滑杆把改版前后叠在一起；比两张图并排更容易看出差别。",body:`<div class="d-ba3"><div class="d-before-after-after3"><span>改版后</span></div><div class="d-before-after-before3" data-before3><span>改版前</span></div><input type="range" min="0" max="100" value="55" data-ba3 aria-label="前后对比"></div>`,css:`.d-ba3{position:relative;width:270px;height:120px;border-radius:10px;overflow:hidden;border:1px solid var(--line)}
.d-before-after-after3,.d-before-after-before3{position:absolute;inset:0;display:flex;align-items:flex-end;padding:8px}
.d-before-after-after3{background:linear-gradient(90deg,var(--lime),#c7ec9a)}
.d-before-after-before3{background:var(--ink);color:var(--paper);overflow:hidden;width:55%}
.d-before-after-after3 span,.d-before-after-before3 span{font:9px var(--mono);letter-spacing:.1em;white-space:nowrap}
.d-before-after-before3 span{position:absolute;left:8px;bottom:8px}
.d-ba3 input{position:absolute;left:8px;right:8px;bottom:6px;width:calc(100% - 16px);accent-color:var(--ink);z-index:2}`},
{id:'player-skin',cat:"媒体",t:"播放器皮肤",en:"player skin",d:"播放、暂停、进度和时间；视频控件也可以不长得像系统默认。",body:`<div class="d-pl3"><div class="d-player-skin-plstage3"><span class="d-player-skin-plmark3" data-plmark>Ⅱ</span></div><div class="d-player-skin-plctrl3"><button type="button" data-play3 aria-label="播放">▶</button><div class="d-player-skin-pltrack3"><i data-pltrack></i></div><time data-pltime>0:00 / 0:24</time></div></div>`,css:`.d-pl3{width:260px;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--paper)}
.d-player-skin-plstage3{height:104px;background:var(--ink);position:relative;display:grid;place-items:center;overflow:hidden}
.d-player-skin-plstage3:before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(115deg,transparent 0 22px,#ffffff0d 22px 23px)}
.d-player-skin-plmark3{position:relative;color:var(--lime);font:10px var(--mono);letter-spacing:.14em}
.d-player-skin-plctrl3{display:flex;align-items:center;gap:8px;padding:7px 9px}
.d-player-skin-plctrl3 button{width:22px;height:22px;border:1px solid var(--line);border-radius:50%;background:var(--paper);font-size:9px;cursor:pointer}
.d-player-skin-pltrack3{flex:1;height:3px;background:var(--line);border-radius:999px;overflow:hidden}
.d-player-skin-pltrack3 i{display:block;height:100%;width:0;background:var(--ink)}
.d-player-skin-plctrl3 time{font:8.5px var(--mono);color:var(--faint);white-space:nowrap}`},
{id:'audio-wave',cat:"媒体",t:"音频波形",en:"audio waveform",d:"播放时波形动，暂停时停；没有真实音频，也能表达“正在响”。",body:`<div class="d-aw3"><div class="d-audio-wave-wave3" data-wave3><i style="--h:24%"></i><i style="--h:56%"></i><i style="--h:38%"></i><i style="--h:76%"></i><i style="--h:46%"></i><i style="--h:88%"></i><i style="--h:60%"></i><i style="--h:32%"></i><i style="--h:70%"></i><i style="--h:48%"></i><i style="--h:82%"></i><i style="--h:36%"></i><i style="--h:64%"></i><i style="--h:28%"></i><i style="--h:54%"></i><i style="--h:72%"></i></div><button type="button" data-aw3>播放</button></div>`,css:`.d-aw3{width:240px}
.d-audio-wave-wave3{display:flex;align-items:center;gap:3px;height:52px;margin-bottom:8px}
.d-audio-wave-wave3 i{height:var(--h);flex:1;background:var(--ink);border-radius:2px;transform-origin:center;opacity:.35}
.d-audio-wave-wave3.on i{opacity:1;animation:d-audio-wave-kf .8s ease-in-out infinite alternate}
.d-audio-wave-wave3.on i:nth-child(3n){animation-duration:.62s}
.d-audio-wave-wave3.on i:nth-child(4n){animation-duration:.94s}
@keyframes d-audio-wave-kf{from{transform:scaleY(.45)}to{transform:scaleY(1.4)}}
@media(prefers-reduced-motion:reduce){.d-audio-wave-wave3.on i{animation:none}}
.d-aw3 button{font-size:9px;border:1px solid var(--line);background:var(--paper);border-radius:999px;padding:3px 10px;cursor:pointer}`},
{id:'masonry-x',cat:"媒体",t:"瀑布流",en:"masonry",d:"列高不齐的卡片墙；适合图片、笔记、灵感板，不适合需要逐行对齐的数据。",body:`<div class="d-ms3"><div></div><div></div><div></div><div></div><div></div><div></div></div>`,css:`.d-ms3{width:280px;columns:3;column-gap:8px}
.d-ms3 div{break-inside:avoid;margin-bottom:8px;border-radius:6px}
.d-ms3 div:nth-child(1){height:54px;background:var(--ink);border:1px solid transparent}
.d-ms3 div:nth-child(2){height:76px;background:var(--lime);border:1px solid transparent}
.d-ms3 div:nth-child(3){height:44px;background:var(--coral);border:1px solid transparent}
.d-ms3 div:nth-child(4){height:62px;background:var(--mint);border:1px solid transparent}
.d-ms3 div:nth-child(5){height:50px;background:var(--bg);border:1px solid var(--line)}
.d-ms3 div:nth-child(6){height:70px;background:var(--lime-soft);border:1px solid var(--line)}
`},
{id:'zoom-view',cat:"媒体",t:"缩放与拖看",en:"zoom & pan",d:"点倍率放大，按住拖动看细节；比直接打开原图更适合核对画面。",body:`<div class="d-zv3"><div class="d-zoom-view-zvstage3" data-zstage><div class="d-zoom-view-zvart3" data-zvart></div></div><div class="d-zoom-view-zvbtns3"><button type="button" data-zoom3="1" class="d-zoom-view-on">1×</button><button type="button" data-zoom3="2">2×</button><button type="button" data-zoom3="3">3×</button></div></div>`,css:`.d-zv3{width:240px}
.d-zoom-view-zvstage3{height:110px;overflow:hidden;border:1px solid var(--line);border-radius:6px;position:relative;cursor:grab;background:var(--bg)}
.d-zoom-view-zvart3{position:absolute;inset:0;background:repeating-linear-gradient(45deg,var(--lime) 0 12px,var(--paper) 12px 24px);transition:transform 180ms var(--ease-spring)}
.d-zoom-view-zvbtns3{display:flex;gap:4px;margin-top:6px}
.d-zoom-view-zvbtns3 button{font-size:9px;border:1px solid var(--line);background:var(--paper);border-radius:2px;padding:2px 7px;cursor:pointer}
.d-zoom-view-zvbtns3 button.d-zoom-view-on{background:var(--ink);color:var(--paper);border-color:var(--ink)}`},
{id:'lazy-media',cat:"媒体",t:"懒加载占位",en:"lazy media",d:"没进视口先占位，进来再加载；列表再长，首屏也不会被拖慢。",body:`<div class="d-lz3" data-lz><div class="d-lazy-media-lzrow3" data-lzrow><i></i><span>占位</span></div><div class="d-lazy-media-lzrow3" data-lzrow><i></i><span>占位</span></div><div class="d-lazy-media-lzrow3" data-lzrow><i></i><span>占位</span></div><div class="d-lazy-media-lzrow3" data-lzrow><i></i><span>占位</span></div><div class="d-lazy-media-lzrow3" data-lzrow><i></i><span>占位</span></div></div>`,css:`.d-lz3{width:230px;height:120px;overflow:auto;border:1px solid var(--line);border-radius:6px;padding:6px}
.d-lazy-media-lzrow3{display:flex;align-items:center;gap:8px;height:52px;margin-bottom:6px;padding:0 8px;border-radius:6px;background:var(--bg);color:var(--faint);font:9px var(--mono)}
.d-lazy-media-lzrow3 i{width:38px;height:38px;border-radius:2px;background:var(--line);animation:d-lazy-media-shimmer 1.2s linear infinite}
.d-lazy-media-lzrow3.loaded{background:var(--lime-soft);color:var(--ink)}
.d-lazy-media-lzrow3.loaded i{background:var(--lime);animation:none}
@keyframes d-lazy-media-shimmer{50%{opacity:.45}}
@media(prefers-reduced-motion:reduce){.d-lazy-media-lzrow3 i{animation:none}}`},
{id:'ratio-switch',cat:"媒体",t:"比例容器",en:"aspect-ratio",d:"同一块内容在 1:1、16:9、4:5 之间切换；先定比例，再谈裁切。",body:`<div class="d-rsz3"><div class="d-ratio-switch-rzbox3" data-ratio3><span data-rlabel3>16:9</span></div><div class="d-ratio-switch-rzbtns3"><button type="button" data-r3="1/1">1:1</button><button type="button" data-r3="16/9" class="d-ratio-switch-on">16:9</button><button type="button" data-r3="4/5">4:5</button></div></div>`,css:`.d-rsz3{width:200px}
.d-ratio-switch-rzbox3{aspect-ratio:16/9;border:1px solid var(--line);border-radius:6px;background:repeating-linear-gradient(90deg,var(--bg) 0 18px,var(--paper) 18px 36px);display:grid;place-items:center;transition:aspect-ratio 180ms}
.d-ratio-switch-rzbox3 span{font:9px var(--mono);color:var(--faint);background:var(--paper);padding:1px 5px;border-radius:2px}
.d-ratio-switch-rzbtns3{display:flex;gap:4px;margin-top:6px}
.d-ratio-switch-rzbtns3 button{font-size:9px;border:1px solid var(--line);background:var(--paper);border-radius:2px;padding:2px 7px;cursor:pointer}
.d-ratio-switch-rzbtns3 button.d-ratio-switch-on{background:var(--ink);color:var(--paper);border-color:var(--ink)}`},
{id:'hotspots',cat:"媒体",t:"图片热点",en:"hotspots",d:"在图上点一个小点看说明；适合产品图、平面图和教学图。",body:`<div class="d-hs3"><button type="button" class="d-hotspots-hot3" style="--x:24%;--y:32%" data-hot3="招牌底板 1.2m × 0.6m，深绿底白字。">+</button><button type="button" class="d-hotspots-hot3" style="--x:62%;--y:24%" data-hot3="字高 38cm，街对面能看清笔画。">+</button><button type="button" class="d-hotspots-hot3" style="--x:52%;--y:70%" data-hot3="字距 4cm，远看才不糊。">+</button><div class="d-hotspots-hottip3" data-hottip hidden></div></div>`,css:`.d-hs3{width:260px;height:130px;border:1px solid var(--line);border-radius:10px;position:relative;background:repeating-linear-gradient(0deg,var(--bg) 0 20px,var(--paper) 20px 40px);overflow:hidden}
.d-hotspots-hot3{position:absolute;left:var(--x);top:var(--y);width:16px;height:16px;border-radius:50%;border:1px solid var(--ink);background:var(--lime);color:#141a10;font:10px/1 var(--mono);cursor:pointer;padding:0}
.d-hotspots-hottip3{position:absolute;left:10px;right:10px;bottom:9px;background:var(--ink);color:var(--paper);font-size:9px;line-height:1.6;padding:6px 8px;border-radius:6px}`},
{id:'range-dual',cat:"表单",t:"双端范围",en:"dual range",d:"最低和最高一起选；两端不能交叉，数值实时写出来。",body:`<div class="d-rd3"><div class="d-range-dual-rdvals3"><b data-rdmin>¥200</b><span>—</span><b data-rdmax>¥800</b></div><div class="d-range-dual-rdtrack3"><input type="range" min="0" max="1000" step="50" value="200" data-rmin aria-label="最低价"><input type="range" min="0" max="1000" step="50" value="800" data-rmax aria-label="最高价"></div></div>`,css:`.d-rd3{width:240px}
.d-range-dual-rdvals3{display:flex;gap:6px;align-items:baseline;font:10px var(--mono);color:var(--faint);margin-bottom:6px}
.d-range-dual-rdvals3 b{font-size:13px;color:var(--ink);font-family:var(--sans)}
.d-range-dual-rdtrack3{position:relative;height:24px}
.d-range-dual-rdtrack3 input{position:absolute;left:0;width:100%;top:4px;accent-color:var(--ink);margin:0}`},
{id:'date-pick',cat:"表单",t:"日期选择",en:"date picker",d:"一个月一张网格，前后翻月；选中的日期要一直看得见。",body:`<div class="d-dp3"><div class="d-date-pick-dphead3"><button type="button" data-prev3 aria-label="上个月">‹</button><b data-month3>2026.10</b><button type="button" data-next3 aria-label="下个月">›</button></div><div class="d-date-pick-dpgrid3" data-grid3></div><p class="d-date-pick-dppick3" data-pick3>未选择日期</p></div>`,css:`.d-dp3{width:200px;border:1px solid var(--line);border-radius:10px;padding:9px;background:var(--paper)}
.d-date-pick-dphead3{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}
.d-date-pick-dphead3 b{font:10px var(--mono);color:var(--ink)}
.d-date-pick-dphead3 button{width:18px;height:18px;border:1px solid var(--line);border-radius:2px;background:var(--paper);font-size:9px;cursor:pointer;line-height:1}
.d-date-pick-dpgrid3{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}
.d-date-pick-dpgrid3 span{text-align:center;font:8px var(--mono);color:var(--faint);padding:2px 0}
.d-date-pick-dpgrid3 button{aspect-ratio:1;border:0;background:transparent;font-size:9px;color:var(--muted);border-radius:2px;cursor:pointer}
.d-date-pick-dpgrid3 button:hover{background:var(--bg)}
.d-date-pick-dpgrid3 button.on{background:var(--ink);color:var(--paper)}
.d-date-pick-dppick3{margin:7px 0 0;font:9px var(--mono);color:var(--faint)}`},
{id:'autocomplete-x',cat:"表单",t:"联想输入",en:"autocomplete",d:"边输边给候选，点到就填上；列表最多四条，别把屏幕占满。",body:`<div class="d-ac3"><input type="text" data-ac3 placeholder="输入城市" aria-label="城市"><div class="d-autocomplete-x-aclist3" data-aclist hidden></div></div>`,css:`.d-ac3{width:210px;position:relative}
.d-ac3 input{width:100%;padding:7px 10px;border:1px solid var(--line);border-radius:6px;background:var(--paper);font-size:11px;outline:none}
.d-ac3 input:focus{border-color:var(--ink)}
.d-autocomplete-x-aclist3{position:absolute;left:0;right:0;top:34px;border:1px solid var(--line);border-radius:6px;background:var(--paper);overflow:hidden;box-shadow:0 8px 18px #20241e14;z-index:3}
.d-autocomplete-x-aclist3 button{display:block;width:100%;text-align:left;border:0;background:transparent;font-size:11px;padding:6px 10px;cursor:pointer;color:var(--muted)}
.d-autocomplete-x-aclist3 button:hover{background:var(--bg);color:var(--ink)}`},
{id:'char-count',cat:"表单",t:"字数统计",en:"character count",d:"写的时候就知道还剩多少；接近上限再提醒，不要一开始就红。",body:`<textarea class="d-cc3" data-cc3 maxlength="60" placeholder="写一句本期推荐…"></textarea><div class="d-char-count-ccount3"><span data-ccn3>0</span>/60 <em data-ccwarn3 hidden>快满了</em></div>`,css:`.d-cc3{width:250px;height:64px;padding:8px 10px;border:1px solid var(--line);border-radius:6px;background:var(--paper);font-size:11px;line-height:1.7;resize:none;outline:none}
.d-cc3:focus{border-color:var(--ink)}
.d-char-count-ccount3{font:9px var(--mono);color:var(--faint);margin-top:4px}
.d-char-count-ccount3 em{font-style:normal;color:var(--warn);margin-left:6px}`},
{id:'currency-input',cat:"表单",t:"金额格式化",en:"currency input",d:"输入时自动加千分位；存的是数字，显示的是人能一眼读懂的金额。",body:`<label class="d-cu3"><span>金额</span><div class="d-currency-input-cuwrap3"><i>¥</i><input data-cu3 inputmode="numeric" placeholder="0" aria-label="金额"></div></label>`,css:`.d-cu3{width:200px;font-size:9px;color:var(--faint);display:grid;gap:4px}
.d-currency-input-cuwrap3{display:flex;align-items:center;gap:6px;border:1px solid var(--line);border-radius:6px;background:var(--paper);padding:6px 9px}
.d-currency-input-cuwrap3:focus-within{border-color:var(--ink)}
.d-currency-input-cuwrap3 i{font-style:normal;font:11px var(--mono);color:var(--faint)}
.d-currency-input-cuwrap3 input{border:0;background:transparent;outline:none;font-size:13px;width:100%;font-family:var(--mono)}`},
{id:'radio-cards',cat:"表单",t:"卡片单选",en:"radio cards",d:"把单选项做成卡片，选项自带说明；比一排小圆点更容易扫读。",body:`<div class="d-rc3" role="radiogroup" aria-label="配送方式"><button type="button" role="radio" aria-checked="true" data-rc3><b>次日达</b><small>免费</small></button><button type="button" role="radio" aria-checked="false" data-rc3><b>当日达</b><small>+12 元</small></button><button type="button" role="radio" aria-checked="false" data-rc3><b>到店自提</b><small>减 3 元</small></button></div>`,css:`.d-rc3{display:flex;flex-direction:column;gap:5px;width:210px}
.d-rc3 button{display:flex;justify-content:space-between;align-items:center;text-align:left;border:1px solid var(--line);border-radius:6px;background:var(--paper);padding:7px 9px;cursor:pointer;font-size:11px;color:var(--muted)}
.d-rc3 button small{font:9px var(--mono);color:var(--faint)}
.d-rc3 button[aria-checked=true]{border-color:var(--ink);background:var(--lime-soft);color:var(--ink)}
.d-rc3 button[aria-checked=true] small{color:var(--ink)}`},
{id:'mega-menu',cat:"导航",t:"大菜单",en:"mega menu",d:"一个入口展开多列；分类多但层级浅的产品，比层层点开的下拉快。",body:`<div class="d-mm3"><button type="button" data-mm3 aria-expanded="false">栏目 ▾</button><div class="d-mega-menu-mmpanel3" data-mmpanel hidden><div><b>街道</b><a href="#" data-mmclose>招牌</a><a href="#" data-mmclose>路灯</a></div><div><b>字体</b><a href="#" data-mmclose>字距</a><a href="#" data-mmclose>菜单</a></div><div><b>手艺</b><a href="#" data-mmclose>椅子</a><a href="#" data-mmclose>抽屉</a></div></div></div>`,css:`.d-mm3{width:260px;position:relative}
.d-mm3>button{font-size:11px;border:1px solid var(--line);background:var(--paper);border-radius:6px;padding:5px 10px;cursor:pointer}
.d-mega-menu-mmpanel3{position:absolute;left:0;top:32px;right:0;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:12px;border:1px solid var(--line);border-radius:10px;background:var(--paper);box-shadow:0 12px 26px #20241e18;z-index:3}
.d-mega-menu-mmpanel3 b{display:block;font:9px var(--mono);color:var(--faint);margin-bottom:4px}
.d-mega-menu-mmpanel3 a{display:block;font-size:9px;color:var(--muted);padding:2px 0}
.d-mega-menu-mmpanel3 a:hover{color:var(--ink)}`},
{id:'hide-header',cat:"导航",t:"滚动隐藏顶栏",en:"hide on scroll",d:"往下读时收起顶栏，往上滑再出来；给正文让位置，但不拿走导航。",body:`<div class="d-hh3"><div class="d-hide-header-hhbar3" data-hhbar>顶栏 · 缓坡</div><div class="d-hide-header-hhscroll3" data-hhscroll><p>往下滚，顶栏会收起。</p><p>往上滚，它再出来。</p><p>这样读长文时，屏幕能多一点。</p><p>但导航没有消失。</p><p>只是暂时让开。</p><p>继续往下。</p><p>再往下。</p><p>试试往回滚一点。</p></div></div>`,css:`.d-hh3{width:230px;height:124px;border:1px solid var(--line);border-radius:6px;overflow:hidden;position:relative;background:var(--paper)}
.d-hide-header-hhbar3{height:26px;display:flex;align-items:center;padding:0 9px;background:var(--ink);color:var(--paper);font:9px var(--mono);letter-spacing:.06em;transition:transform 180ms var(--ease)}
.d-hide-header-hhbar3.up{transform:translateY(-100%)}
.d-hide-header-hhscroll3{height:98px;overflow:auto;padding:7px 10px;font-size:9px;line-height:1.8;color:var(--muted)}
.d-hide-header-hhscroll3 p{margin:0 0 5px}`},
{id:'mobile-tabbar',cat:"导航",t:"底部标签栏",en:"mobile tabbar",d:"手机上把四个主入口放到底部；拇指够得着，比汉堡菜单快一步。",body:`<div class="d-mb3"><div class="d-mobile-tabbar-mbscreen3" data-mbscreen>本期</div><div class="d-mobile-tabbar-mbtabs3"><button type="button" data-mb3="本期" class="d-mobile-tabbar-on">本期</button><button type="button" data-mb3="往期">往期</button><button type="button" data-mb3="收藏">收藏</button><button type="button" data-mb3="我的">我的</button></div></div>`,css:`.d-mb3{width:178px;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--paper);box-shadow:0 8px 20px #20241e12}
.d-mobile-tabbar-mbscreen3{height:100px;display:grid;place-items:center;font-family:var(--serif);font-size:15px;background:var(--bg)}
.d-mobile-tabbar-mbtabs3{display:flex;border-top:1px solid var(--line)}
.d-mobile-tabbar-mbtabs3 button{flex:1;border:0;background:transparent;font-size:9px;color:var(--faint);padding:6px 0;cursor:pointer}
.d-mobile-tabbar-mbtabs3 button.d-mobile-tabbar-on{color:var(--ink);font-weight:600}`},
{id:'skip-target',cat:"导航",t:"跳到正文",en:"skip link",d:"键盘用户按 Tab 时最先出现的链接；跳过导航，直达正文。",body:`<div class="d-st3"><a class="d-skip-target-skip3" href="#" data-skip3>跳到正文</a><div class="d-skip-target-sthead3">导航 · 本期 · 往期 · 关于</div><div class="d-skip-target-sttarget3" data-target3 tabindex="-1">正文从这里开始。这个链接平时藏起来，按 Tab 才出现。</div></div>`,css:`.d-st3{width:250px;border:1px solid var(--line);border-radius:6px;padding:8px;position:relative;background:var(--paper)}
.d-skip-target-skip3{position:absolute;left:-999px;top:4px;background:var(--ink);color:var(--paper);font-size:9px;padding:4px 8px;border-radius:2px;z-index:2}
.d-skip-target-skip3:focus{left:6px}
.d-skip-target-sthead3{font:9px var(--mono);color:var(--faint);padding:4px 0 8px;border-bottom:1px solid var(--line);margin-bottom:8px}
.d-skip-target-sttarget3{font-size:11px;color:var(--muted);line-height:1.7;padding:6px;border-radius:2px;outline:none}
.d-skip-target-sttarget3.flash{background:var(--lime);color:#141a10}`},
{id:'undo-snackbar',cat:"反馈",t:"撤销提示",en:"undo snackbar",d:"删了先别问，给五秒撤销；比“确定要删除吗”少一次打断。",body:`<div class="d-us3"><div class="d-undo-snackbar-usrow3" data-usrow><span>本期草稿 · 第 07 期</span><button type="button" data-del3>删除</button></div><div class="d-undo-snackbar-ussnack3" data-ussnack hidden>已删除 <button type="button" data-undo3>撤销</button></div></div>`,css:`.d-us3{width:240px}
.d-undo-snackbar-usrow3{display:flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--line);border-radius:6px;padding:7px 9px;font-size:11px;color:var(--muted)}
.d-undo-snackbar-usrow3 button{font-size:9px;border:1px solid var(--line);background:var(--paper);border-radius:2px;padding:2px 6px;cursor:pointer}
.d-undo-snackbar-ussnack3{margin-top:6px;background:var(--ink);color:var(--paper);font-size:9px;padding:5px 9px;border-radius:6px;display:flex;align-items:center;gap:8px}
.d-undo-snackbar-ussnack3 button{margin-left:auto;background:transparent;border:1px solid var(--paper);color:var(--paper);font-size:9px;padding:1px 6px;border-radius:2px;cursor:pointer}`},
{id:'autosave-x',cat:"反馈",t:"自动保存状态",en:"autosave",d:"写完停一下就保存，状态从“未保存”变成“已保存”；不用一个保存按钮。",body:`<textarea class="d-as3" data-as3 placeholder="随手写一点…"></textarea><div class="d-autosave-x-asstatus3" data-asstatus>未保存</div>`,css:`.d-as3{width:240px;height:64px;padding:8px 10px;border:1px solid var(--line);border-radius:6px;background:var(--paper);font-size:11px;line-height:1.7;resize:none;outline:none}
.d-as3:focus{border-color:var(--ink)}
.d-autosave-x-asstatus3{font:9px var(--mono);color:var(--faint);margin-top:4px}`},
{id:'upload-progress',cat:"反馈",t:"上传进度",en:"upload progress",d:"进度、暂停、重来都在一个位置；失败之前先让人能停。",body:`<div class="d-up3"><div class="d-upload-progress-upfile3"><span>封面.jpg</span><b data-upn3>0%</b></div><div class="d-upload-progress-upbar3"><i data-upi3></i></div><div class="d-upload-progress-upacts3"><button type="button" data-uppause3>暂停</button><button type="button" data-upreset3>重来</button></div></div>`,css:`.d-up3{width:220px}
.d-upload-progress-upfile3{display:flex;justify-content:space-between;font-size:9px;color:var(--muted);margin-bottom:4px}
.d-upload-progress-upfile3 b{font-family:var(--mono);font-weight:500;color:var(--ink)}
.d-upload-progress-upbar3{height:5px;background:var(--line);border-radius:999px;overflow:hidden}
.d-upload-progress-upbar3 i{display:block;height:100%;width:0;background:var(--ink);transition:width .12s linear}
.d-upload-progress-upacts3{display:flex;gap:4px;margin-top:6px}
.d-upload-progress-upacts3 button{font-size:9px;border:1px solid var(--line);background:var(--paper);border-radius:2px;padding:2px 7px;cursor:pointer}`},
{id:'step-status',cat:"反馈",t:"步骤状态",en:"step status",d:"每一步有等待、进行、完成、失败；失败后能重试，不用从头再来。",body:`<div class="d-ss3"><div class="d-step-status-sssteps3" data-sssteps><span class="d-step-status-done3">1 检查</span><span class="d-step-status-live3">2 构建</span><span>3 发布</span></div><p class="d-step-status-ssmsg3" data-ssmsg3>正在构建…</p><div class="d-step-status-ssacts3"><button type="button" data-nextstep3>下一步</button><button type="button" data-failstep3>模拟失败</button></div></div>`,css:`.d-ss3{width:240px}
.d-step-status-sssteps3{display:flex;gap:4px;margin-bottom:7px}
.d-step-status-sssteps3 span{flex:1;font-size:9px;text-align:center;padding:4px 2px;border:1px solid var(--line);border-radius:2px;color:var(--faint)}
.d-step-status-sssteps3 span.d-step-status-live3{border-color:var(--ink);color:var(--ink);background:var(--lime-soft)}
.d-step-status-sssteps3 span.d-step-status-done3{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.d-step-status-sssteps3 span.err3{border-color:var(--coral);color:var(--warn);background:color-mix(in srgb,var(--coral) 10%,transparent)}
.d-step-status-ssmsg3{margin:0 0 7px;font:9.5px var(--mono);color:var(--muted)}
.d-step-status-ssacts3{display:flex;gap:4px}
.d-step-status-ssacts3 button{font-size:9px;border:1px solid var(--line);background:var(--paper);border-radius:2px;padding:2px 7px;cursor:pointer}`},
{id:'bento-grid',cat:"布局",t:"便当格",en:"bento grid",d:"大小不一的格子拼成一屏；重点用面积表达，不用再加一个“重点”标签。",body:`<div class="d-bg3"><div class="d-bento-grid-bgbig3"><b>本期封面</b><span>慢一点，才看得见</span></div><div><b>6 篇</b><span>文章</span></div><div><b>4 个</b><span>栏目</span></div><div class="d-bento-grid-bgwide3"><b>10.12</b><span>出刊</span></div></div>`,css:`.d-bg3{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:60px 60px 44px;gap:5px;width:250px}
.d-bg3>div{border:1px solid var(--line);border-radius:6px;padding:7px 8px;background:var(--paper);display:flex;flex-direction:column;justify-content:flex-end;transition:background 120ms}
.d-bg3>div:hover{background:var(--bg)}
.d-bg3 b{font-size:11px}
.d-bg3 span{font:8.5px var(--mono);color:var(--faint)}
.d-bento-grid-bgbig3{grid-row:1/3;background:var(--lime-soft);border-color:var(--ink)}
.d-bento-grid-bgbig3 b{font-family:var(--serif);font-size:15px}
.d-bento-grid-bgwide3{grid-column:1/3;flex-direction:row;justify-content:space-between;align-items:center}`},
{id:'table-to-cards',cat:"布局",t:"表格转卡片",en:"table → cards",d:"窄屏时表格变成一张张卡；不是缩小表格，是换一种读法。",body:`<div class="d-tc3" data-tc3><table><thead><tr><th>文章</th><th>栏目</th><th>时长</th></tr></thead><tbody><tr><td data-label="文章">一条街的招牌</td><td data-label="栏目">街道</td><td data-label="时长">12 分钟</td></tr><tr><td data-label="文章">菜市场价签</td><td data-label="栏目">物件</td><td data-label="时长">6 分钟</td></tr></tbody></table></div><button type="button" class="d-table-to-cards-tcnarrow3" data-tcnarrow3>模拟窄屏</button>`,css:`.d-tc3{width:250px;border:1px solid var(--line);border-radius:6px;overflow:hidden;background:var(--paper)}
.d-tc3 table{width:100%;border-collapse:collapse;font-size:11px}
.d-tc3 th,.d-tc3 td{text-align:left;padding:6px 8px;border-bottom:1px solid var(--line);color:var(--muted)}
.d-tc3 th{font:8.5px var(--mono);color:var(--faint);background:var(--bg)}
.d-tc3.narrow table,.d-tc3.narrow tbody,.d-tc3.narrow tr,.d-tc3.narrow td{display:block;width:100%}
.d-tc3.narrow thead{display:none}
.d-tc3.narrow tr{border-bottom:1px solid var(--line);padding:4px 0}
.d-tc3.narrow td{border:0;padding:3px 9px;display:flex;justify-content:space-between;gap:8px}
.d-tc3.narrow td:before{content:attr(data-label);font:8.5px var(--mono);color:var(--faint)}
.d-table-to-cards-tcnarrow3{font-size:9px;border:1px solid var(--line);background:var(--paper);border-radius:2px;padding:2px 7px;cursor:pointer;margin-top:5px}`}
]);
window.INITS_EXTRA = Object.assign(window.INITS_EXTRA || {}, {
  "footnote-pop": root => {
    const btn = root.querySelector('[data-fnref]'), pop = root.querySelector('[data-fnpop]');
    btn.onclick = () => { pop.hidden = !pop.hidden; };
  },
  "read-progress-x": root => {
    const box = root.querySelector('[data-rpscroll]'), bar = root.querySelector('[data-rpi]');
    box.addEventListener('scroll', () => {
      const pct = box.scrollTop / Math.max(1, box.scrollHeight - box.clientHeight);
      bar.style.width = Math.min(100, pct * 100) + '%';
    });
  },
  "toc-follow": root => {
    const box = root.querySelector('[data-tfscroll]');
    const btns = [...root.querySelectorAll('[data-goto3]')];
    const secs = [...root.querySelectorAll('[data-sec3]')];
    const sync = () => {
      let idx = 0;
      secs.forEach((s, i) => { if (s.offsetTop - box.scrollTop <= 12) idx = i; });
      btns.forEach((b, i) => b.classList.toggle('d-toc-follow-on', i === idx));
    };
    btns.forEach((b) => b.onclick = () => { secs[Number(b.dataset.goto3)].scrollIntoView({ block: 'start', behavior: 'smooth' }); });
    box.addEventListener('scroll', sync); sync();
  },
  "reading-time": root => {
    const ta = root.querySelector('[data-rt]'), n = root.querySelector('[data-rn]'), m = root.querySelector('[data-rm]');
    const run = () => { const len = ta.value.replace(/\s/g, '').length; n.textContent = len; m.textContent = len ? Math.max(1, Math.round(len / 350)) : 0; };
    ta.addEventListener('input', run); run();
  },
  "sidenote-x": root => {
    const btn = root.querySelector('[data-sn3]'), box = root.querySelector('[data-snbox]');
    btn.onclick = () => { box.hidden = !box.hidden; };
  },
  "column-flow": root => {
    const box = root.querySelector('[data-cf3] p');
    root.querySelectorAll('[data-col3]').forEach((b) => b.onclick = () => {
      box.style.columnCount = b.dataset.col3;
      root.querySelectorAll('[data-col3]').forEach((x) => x.classList.toggle('d-column-flow-on', x === b));
    });
  },
  "text-annotate": root => {
    const text = root.querySelector('[data-antext]'), tip = root.querySelector('[data-antip]');
    let range = null;
    text.addEventListener('mouseup', () => {
      const sel = root.ownerDocument.getSelection();
      if (!sel || sel.isCollapsed || !text.contains(sel.anchorNode)) { tip.hidden = true; return; }
      range = sel.getRangeAt(0).cloneRange();
      tip.hidden = false;
    });
    root.querySelector('[data-anmark]').onclick = () => {
      if (!range) return;
      const mark = root.ownerDocument.createElement('mark');
      try { mark.appendChild(range.extractContents()); range.insertNode(mark); } catch { }
      root.ownerDocument.getSelection()?.removeAllRanges();
      tip.hidden = true;
    };
  },
  "table-sort": root => {
    const tbody = root.querySelector('tbody');
    root.querySelectorAll('[data-sort3]').forEach((th) => th.onclick = () => {
      const col = Number(th.dataset.sort3);
      const rows = [...tbody.rows];
      const asc = th.dataset.asc !== '1';
      th.dataset.asc = asc ? '1' : '0';
      rows.sort((a, b) => {
        const x = a.cells[col].textContent.trim(), y = b.cells[col].textContent.trim();
        const nx = Number(x), ny = Number(y);
        const cmp = !isNaN(nx) && !isNaN(ny) ? nx - ny : x.localeCompare(y, 'zh');
        return asc ? cmp : -cmp;
      });
      rows.forEach((r) => tbody.appendChild(r));
      root.querySelectorAll('[data-sort3] span').forEach((s) => s.textContent = '↕');
      th.querySelector('span').textContent = asc ? '↑' : '↓';
    });
  },
  "inline-edit": root => {
    root.querySelectorAll('[data-edit3]').forEach((td) => td.onclick = () => {
      if (td.querySelector('input')) return;
      const old = td.textContent;
      const inp = root.ownerDocument.createElement('input');
      inp.value = old; td.textContent = ''; td.appendChild(inp); inp.focus(); inp.select();
      const save = () => { td.textContent = inp.value.trim() || old; };
      inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { save(); } if (e.key === 'Escape') { td.textContent = old; } });
      inp.addEventListener('blur', save);
    });
  },
  "virtual-list": root => {
    const box = root.querySelector('[data-vl]'), spacer = root.querySelector('[data-vlspacer]'), rows = root.querySelector('[data-vlrows]');
    const total = 1000, h = 21, view = 8;
    spacer.style.height = total * h + 'px';
    const paint = () => {
      const start = Math.max(0, Math.floor(box.scrollTop / h) - 1);
      rows.style.transform = 'translateY(' + start * h + 'px)';
      rows.innerHTML = Array.from({ length: view + 2 }, (_, i) => '<div>第 ' + (start + i + 1) + ' 行 · 数据</div>').join('');
    };
    box.addEventListener('scroll', paint); paint();
  },
  "col-resize": root => {
    root.querySelectorAll('[data-rz]').forEach((handle) => {
      const th = handle.parentElement;
      handle.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        const x0 = e.clientX, w0 = th.offsetWidth;
        const move = (ev) => { th.style.width = Math.max(60, w0 + ev.clientX - x0) + 'px'; };
        const up = () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); };
        window.addEventListener('pointermove', move); window.addEventListener('pointerup', up);
      });
      handle.addEventListener('dblclick', () => { th.style.width = ''; });
    });
  },
  "row-select": root => {
    const all = root.querySelector('[data-all3]'), rows = [...root.querySelectorAll('[data-row3]')], bar = root.querySelector('[data-rsbar]'), n = root.querySelector('[data-rsn]');
    const sync = () => {
      const picked = rows.filter((r) => r.checked).length;
      n.textContent = picked;
      bar.hidden = picked === 0;
      all.checked = picked === rows.length;
      all.indeterminate = picked > 0 && picked < rows.length;
    };
    rows.forEach((r) => r.addEventListener('change', sync));
    all.addEventListener('change', () => { rows.forEach((r) => r.checked = all.checked); sync(); });
    sync();
  },
  "filter-builder": root => {
    const rows = [...root.querySelectorAll('[data-status3]')];
    root.querySelectorAll('[data-f3]').forEach((b) => b.onclick = () => {
      root.querySelectorAll('[data-f3]').forEach((x) => x.classList.toggle('d-filter-builder-on', x === b));
      const want = b.dataset.f3;
      rows.forEach((r) => { r.hidden = want !== '全部' && r.dataset.status3 !== want; });
    });
  },
  "density-toggle": root => {
    const table = root.querySelector('[data-dentable]');
    root.querySelectorAll('[data-dens3]').forEach((b) => b.onclick = () => {
      table.classList.toggle('compact', b.dataset.dens3 === 'compact');
      root.querySelectorAll('[data-dens3]').forEach((x) => x.classList.toggle('d-density-toggle-on', x === b));
    });
  },
  "page-404": root => root.querySelector('[data-back3]').onclick = (e) => {
    e.target.textContent = '已回到本期（演示）';
    root.querySelector('[data-backmsg3]').textContent = '这里本该跳转，演示里只改按钮。';
  },
  "offline-banner": root => {
    const banner = root.querySelector('[data-banner3]');
    root.querySelector('[data-offline3]').onclick = () => { banner.hidden = false; };
    root.querySelector('[data-online3]').onclick = () => { banner.hidden = true; };
  },
  "page-403": root => root.querySelector('[data-req3]').onclick = (e) => {
    e.target.disabled = true; e.target.textContent = '申请已发出';
    root.querySelector('[data-reqmsg3]').textContent = '等管理员批准后，入口会自动出现。';
  },
  "session-expired": root => root.querySelector('[data-relogin3]').onclick = () => {
    root.querySelector('[data-secard]').hidden = true;
    root.querySelector('[data-semsg]').hidden = false;
  },
  "empty-search": root => {
    const input = root.querySelector('[data-es3]'), box = root.querySelector('[data-esres]');
    const showEmpty = () => {
      box.className = 'd-empty-search-esres3';
      box.innerHTML = '<b>没有找到</b><p>试试这几个：</p><div class="d-empty-search-essug3"><button type="button" data-sug3>官网</button><button type="button" data-sug3>素材</button><button type="button" data-sug3>周报</button></div>';
      bind();
    };
    const showHit = (word) => {
      box.className = 'esres3 ok';
      box.innerHTML = '<b>找到 1 个结果：「' + word + '」</b><p>演示里只有一个结果。</p>';
    };
    const bind = () => box.querySelectorAll('[data-sug3]').forEach((b) => b.onclick = () => { input.value = b.textContent; showHit(b.textContent); });
    input.addEventListener('input', () => { if (input.value.trim()) showEmpty(); });
    bind();
  },
  "error-retry-x": root => root.querySelector('[data-retry3]').onclick = (e) => {
    const box = root.querySelector('[data-erbox]'), btn = e.target;
    btn.disabled = true; btn.textContent = '重试中…';
    root.querySelector('p').textContent = '正在重新连接网关…';
    setTimeout(() => {
      box.classList.add('ok');
      root.querySelector('b').textContent = '已恢复';
      root.querySelector('p').textContent = '数据回来了，任务继续。';
      btn.textContent = '完成'; btn.disabled = true;
    }, 900);
  },
  "maintenance-x": root => {
    const sec = root.querySelector('[data-mtsec]'), prog = root.querySelector('[data-mtprog]'), btn = root.querySelector('[data-mtskip]');
    let left = 10;
    const paint = () => {
      sec.textContent = left;
      prog.style.width = ((10 - left) * 10) + '%';
      if (left === 0) { root.querySelector('b').textContent = '已恢复'; root.querySelector('p').textContent = '可以继续了。'; btn.disabled = true; }
    };
    const timer = setInterval(() => { left = Math.max(0, left - 1); paint(); if (!left) clearInterval(timer); }, 1000);
    btn.onclick = () => { left = 0; paint(); clearInterval(timer); };
    paint();
  },
  "success-next": root => {
    const msg = root.querySelector('[data-nextmsg3]');
    root.querySelectorAll('[data-next3]').forEach((b) => b.onclick = () => { msg.textContent = '演示：这里会打开「' + b.textContent + '」'; });
  },
  "before-after": root => {
    const input = root.querySelector('[data-ba3]'), before = root.querySelector('[data-before3]');
    const set = () => { before.style.width = input.value + '%'; };
    input.addEventListener('input', set); set();
  },
  "player-skin": root => {
    const btn = root.querySelector('[data-play3]'), track = root.querySelector('[data-pltrack]'), time = root.querySelector('[data-pltime]'), mark = root.querySelector('[data-plmark]');
    let t = 0, playing = false, timer = null;
    const total = 24;
    const paint = () => {
      const m = Math.floor(t / 60), s = Math.floor(t % 60);
      time.textContent = m + ':' + String(s).padStart(2, '0') + ' / 0:' + total;
      track.style.width = (t / total * 100) + '%';
      btn.textContent = playing ? 'II' : '▶';
      mark.textContent = playing ? 'Ⅱ' : '▶';
    };
    const stop = () => { playing = false; clearInterval(timer); paint(); };
    btn.onclick = () => {
      if (t >= total) t = 0;
      playing = !playing;
      clearInterval(timer);
      if (playing) timer = setInterval(() => {
        if (!root.isConnected) { clearInterval(timer); return; }
        t = Math.min(total, t + 0.5); paint();
        if (t >= total) stop();
      }, 500);
      paint();
    };
    paint();
  },
  "audio-wave": root => {
    const wave = root.querySelector('[data-wave3]'), btn = root.querySelector('[data-aw3]');
    btn.onclick = () => { const on = wave.classList.toggle('on'); btn.textContent = on ? '暂停' : '播放'; };
  },
  "zoom-view": root => {
    const stage = root.querySelector('[data-zstage]'), art = root.querySelector('[data-zvart]');
    let scale = 1, x = 0, y = 0, down = false, sx = 0, sy = 0, ox = 0, oy = 0;
    const paint = () => { art.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + scale + ')'; stage.style.cursor = scale > 1 ? 'grab' : 'default'; };
    root.querySelectorAll('[data-zoom3]').forEach((b) => b.onclick = () => {
      scale = Number(b.dataset.zoom3); x = 0; y = 0; paint();
      root.querySelectorAll('[data-zoom3]').forEach((z) => z.classList.toggle('d-zoom-view-on', z === b));
    });
    stage.addEventListener('pointerdown', (e) => { if (scale <= 1) return; down = true; sx = e.clientX; sy = e.clientY; ox = x; oy = y; stage.setPointerCapture?.(e.pointerId); });
    stage.addEventListener('pointermove', (e) => { if (!down) return; x = ox + e.clientX - sx; y = oy + e.clientY - sy; paint(); });
    stage.addEventListener('pointerup', () => { down = false; });
    paint();
  },
  "lazy-media": root => {
    const box = root.querySelector('[data-lz]');
    const rows = [...root.querySelectorAll('[data-lzrow]')];
    const load = (row) => {
      setTimeout(() => {
        if (!row.isConnected) return;
        row.classList.add('loaded');
        row.querySelector('span').textContent = '已加载';
      }, 350);
    };
    if (!('IntersectionObserver' in window)) { rows.forEach(load); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting || e.target.dataset.done) return;
      e.target.dataset.done = '1'; load(e.target); io.unobserve(e.target);
    }), { root: box, rootMargin: '20px' });
    rows.forEach((r) => io.observe(r));
  },
  "ratio-switch": root => {
    const box = root.querySelector('[data-ratio3]'), label = root.querySelector('[data-rlabel3]');
    root.querySelectorAll('[data-r3]').forEach((b) => b.onclick = () => {
      box.style.aspectRatio = b.dataset.r3;
      label.textContent = b.textContent;
      root.querySelectorAll('[data-r3]').forEach((x) => x.classList.toggle('d-ratio-switch-on', x === b));
    });
  },
  "hotspots": root => {
    const tip = root.querySelector('[data-hottip]');
    root.querySelectorAll('[data-hot3]').forEach((b) => b.onclick = () => {
      const same = !tip.hidden && tip.dataset.owner === b.dataset.hot3;
      tip.hidden = same;
      tip.dataset.owner = b.dataset.hot3;
      tip.textContent = b.dataset.hot3;
    });
  },
  "range-dual": root => {
    const a = root.querySelector('[data-rmin]'), b = root.querySelector('[data-rmax]');
    const lo = root.querySelector('[data-rdmin]'), hi = root.querySelector('[data-rdmax]');
    const sync = () => {
      let x = Number(a.value), y = Number(b.value);
      if (x > y - 50) { if (document.activeElement === a) x = y - 50; else y = x + 50; }
      if (y > 1000) { y = 1000; x = Math.min(x, 950); }
      if (x < 0) { x = 0; y = Math.max(y, 50); }
      a.value = x; b.value = y;
      lo.textContent = '¥' + x; hi.textContent = '¥' + y;
    };
    a.addEventListener('input', sync); b.addEventListener('input', sync); sync();
  },
  "date-pick": root => {
    const grid = root.querySelector('[data-grid3]'), head = root.querySelector('[data-month3]'), pick = root.querySelector('[data-pick3]');
    let y = 2026, m = 9, selected = '';
    const render = () => {
      head.textContent = y + '.' + String(m + 1).padStart(2, '0');
      const first = new Date(y, m, 1).getDay();
      const days = new Date(y, m + 1, 0).getDate();
      let html = ['日', '一', '二', '三', '四', '五', '六'].map((d) => '<span>' + d + '</span>').join('');
      for (let i = 0; i < first; i++) html += '<span></span>';
      for (let d = 1; d <= days; d++) {
        const key = y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
        html += '<button type="button" data-day3="' + key + '" class="' + (selected === key ? 'on' : '') + '">' + d + '</button>';
      }
      grid.innerHTML = html;
      grid.querySelectorAll('[data-day3]').forEach((b) => b.onclick = () => {
        selected = b.dataset.day3; pick.textContent = '已选 ' + selected; render();
      });
    };
    root.querySelector('[data-prev3]').onclick = () => { m--; if (m < 0) { m = 11; y--; } render(); };
    root.querySelector('[data-next3]').onclick = () => { m++; if (m > 11) { m = 0; y++; } render(); };
    render();
  },
  "autocomplete-x": root => {
    const input = root.querySelector('[data-ac3]'), list = root.querySelector('[data-aclist]');
    const data = ['北京', '上海', '杭州', '成都', '广州', '深圳', '南京', '武汉'];
    const render = () => {
      const q = input.value.trim();
      if (!q) { list.hidden = true; return; }
      const hits = data.filter((x) => x.includes(q)).slice(0, 4);
      if (!hits.length) { list.hidden = true; return; }
      list.innerHTML = hits.map((x) => '<button type="button" data-item3="' + x + '">' + x + '</button>').join('');
      list.hidden = false;
      list.querySelectorAll('[data-item3]').forEach((b) => b.onmousedown = (e) => {
        e.preventDefault(); input.value = b.dataset.item3; list.hidden = true;
      });
    };
    input.addEventListener('input', render);
    input.addEventListener('keydown', (e) => { if (e.key === 'Escape') list.hidden = true; });
  },
  "char-count": root => {
    const ta = root.querySelector('[data-cc3]'), n = root.querySelector('[data-ccn3]'), warn = root.querySelector('[data-ccwarn3]');
    const sync = () => { n.textContent = ta.value.length; warn.hidden = ta.value.length <= 50; };
    ta.addEventListener('input', sync); sync();
  },
  "currency-input": root => {
    const input = root.querySelector('[data-cu3]');
    input.addEventListener('input', () => {
      const digits = input.value.replace(/[^\d]/g, '').slice(0, 9);
      input.value = digits ? Number(digits).toLocaleString('en-US') : '';
    });
  },
  "radio-cards": root => {
    const opts = [...root.querySelectorAll('[data-rc3]')];
    const pick = (el) => opts.forEach((o) => o.setAttribute('aria-checked', String(o === el)));
    opts.forEach((o) => {
      o.onclick = () => pick(o);
      o.addEventListener('keydown', (e) => {
        if (!['ArrowDown', 'ArrowUp'].includes(e.key)) return;
        e.preventDefault();
        const i = opts.indexOf(o);
        const next = opts[(i + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length];
        pick(next); next.focus();
      });
    });
  },
  "mega-menu": root => {
    const btn = root.querySelector('[data-mm3]'), panel = root.querySelector('[data-mmpanel]');
    const close = () => { panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
    btn.onclick = () => { panel.hidden = !panel.hidden; btn.setAttribute('aria-expanded', String(!panel.hidden)); };
    root.querySelectorAll('[data-mmclose]').forEach((a) => a.onclick = (e) => { e.preventDefault(); close(); });
    root.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  },
  "hide-header": root => {
    const bar = root.querySelector('[data-hhbar]'), box = root.querySelector('[data-hhscroll]');
    let last = 0;
    box.addEventListener('scroll', () => {
      const y = box.scrollTop;
      if (y > last + 2) bar.classList.add('up');
      else if (y < last - 2) bar.classList.remove('up');
      last = y;
    });
  },
  "mobile-tabbar": root => {
    const screen = root.querySelector('[data-mbscreen]');
    root.querySelectorAll('[data-mb3]').forEach((b) => b.onclick = () => {
      screen.textContent = b.dataset.mb3;
      root.querySelectorAll('[data-mb3]').forEach((x) => x.classList.toggle('d-mobile-tabbar-on', x === b));
    });
  },
  "skip-target": root => {
    const link = root.querySelector('[data-skip3]'), target = root.querySelector('[data-target3]');
    link.onclick = (e) => {
      e.preventDefault();
      target.focus();
      target.classList.add('flash');
      setTimeout(() => target.classList.remove('flash'), 900);
    };
  },
  "undo-snackbar": root => {
    const row = root.querySelector('[data-usrow]'), snack = root.querySelector('[data-ussnack]');
    let timer = null;
    root.querySelector('[data-del3]').onclick = () => {
      row.style.display = 'none'; snack.hidden = false;
      clearTimeout(timer); timer = setTimeout(() => { snack.hidden = true; }, 5000);
    };
    root.querySelector('[data-undo3]').onclick = () => {
      row.style.display = ''; snack.hidden = true; clearTimeout(timer);
    };
  },
  "autosave-x": root => {
    const ta = root.querySelector('[data-as3]'), status = root.querySelector('[data-asstatus]');
    let timer = null;
    ta.addEventListener('input', () => {
      status.textContent = '未保存';
      clearTimeout(timer);
      timer = setTimeout(() => {
        status.textContent = '保存中…';
        timer = setTimeout(() => {
          if (!root.isConnected) return;
          const d = new Date();
          status.textContent = '已保存 · ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
        }, 650);
      }, 500);
    });
  },
  "upload-progress": root => {
    const bar = root.querySelector('[data-upi3]'), n = root.querySelector('[data-upn3]'), pause = root.querySelector('[data-uppause3]');
    let pct = 0, paused = false;
    const timer = setInterval(() => {
      if (!root.isConnected) { clearInterval(timer); return; }
      if (paused || pct >= 100) return;
      pct = Math.min(100, pct + 3);
      bar.style.width = pct + '%'; n.textContent = pct + '%';
      if (pct >= 100) n.textContent = '完成';
    }, 130);
    pause.onclick = () => { paused = !paused; pause.textContent = paused ? '继续' : '暂停'; };
    root.querySelector('[data-upreset3]').onclick = () => { pct = 0; paused = false; pause.textContent = '暂停'; bar.style.width = '0'; n.textContent = '0%'; };
  },
  "step-status": root => {
    const steps = [...root.querySelectorAll('[data-sssteps] span')], msg = root.querySelector('[data-ssmsg3]');
    let idx = 1, err = false;
    const paint = () => {
      steps.forEach((s, i) => {
        s.className = '';
        if (i < idx) s.classList.add('d-step-status-done3');
        else if (i === idx) s.classList.add(err ? 'err3' : 'd-step-status-live3');
      });
      msg.textContent = err ? '构建失败 · 可以重试这一步' : idx >= steps.length ? '全部完成 · 已发布' : '正在' + steps[idx].textContent.split(' ')[1] + '…';
    };
    root.querySelector('[data-nextstep3]').onclick = () => {
      if (err) { err = false; paint(); return; }
      idx = Math.min(steps.length, idx + 1); paint();
    };
    root.querySelector('[data-failstep3]').onclick = () => { err = true; paint(); };
    paint();
  },
  "table-to-cards": root => {
    const box = root.querySelector('[data-tc3]'), btn = root.querySelector('[data-tcnarrow3]');
    btn.onclick = () => {
      const narrow = box.classList.toggle('narrow');
      btn.textContent = narrow ? '还原表格' : '模拟窄屏';
    };
  },
});
