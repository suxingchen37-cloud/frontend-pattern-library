/* 自动生成：node tools/site.mjs —— 不要手改。新资产来自 data/assets/motion/ 中 source=v4 的条目。 */
window.DEMOS_EXTRA = (window.DEMOS_EXTRA || []).concat([{"id":"line-draw-title","cat":"入场","t":"标题描线","en":"line draw title","d":"线用 scaleX 而不是 width，宽度每帧都要重排，标题会跟着抖一下；280ms 走完再让副标题淡入，延迟正好等于线的时长，两者不在中间叠——读者先看到一条线把版面定住，再读出下面那行小字。记忆点：先画线，再说话。","body":"<div class=\"d-ldt\" tabindex=\"0\" role=\"group\" aria-label=\"标题描线：线从左画到右，再淡入副标题，点击或回车重播\"><h3 class=\"d-ldt-t\">排版的秩序</h3><span class=\"d-ldt-rule\" aria-hidden=\"true\"></span><p class=\"d-ldt-sub\">先排版心，再排标题</p></div>","css":".d-ldt{box-sizing:border-box;width:260px;max-width:100%;outline:none}\n.d-ldt-t{margin:0;font-family:var(--font-sans);font-size:var(--fs-21);font-weight:700;line-height:var(--lh-display);letter-spacing:var(--tracking-display);color:var(--ink)}\n.d-ldt-rule{display:block;height:1px;margin:8px 0;background:var(--ink);transform:scaleX(0);transform-origin:0 50%}\n.d-ldt-sub{margin:0;font-family:var(--font-sans);font-size:var(--fs-11);line-height:var(--lh-note);color:var(--muted);opacity:0}\n.d-ldt.is-run .d-ldt-rule{animation:d-line-draw-title-rule 280ms cubic-bezier(.2,.75,.25,1) both}\n.d-ldt.is-run .d-ldt-sub{animation:d-line-draw-title-sub 180ms cubic-bezier(.2,.75,.25,1) 280ms both}\n.d-ldt:focus-visible{outline:1px solid var(--ink);outline-offset:6px}\n@keyframes d-line-draw-title-rule{from{transform:scaleX(0)}to{transform:scaleX(1)}}\n@keyframes d-line-draw-title-sub{from{opacity:0}to{opacity:1}}"},{"id":"stagger-grid","cat":"入场","t":"网格错峰","en":"stagger grid","d":"3×3 按到中心的切比雪夫距离分三圈：0 / 120 / 280ms，第二圈的延迟等于第一圈的时长、第三圈又等于第二圈，队列首尾相接不重叠；中心先落位是因为视线本来就先落在正中，四角最后补齐，读者感到方格是从中间铺开的，而不是从左上角扫过来。记忆点：从中心炸开。","body":"<div class=\"d-sg\" tabindex=\"0\" role=\"group\" aria-label=\"网格错峰入场：中心先亮、四角最后，点击或回车重播\"><div class=\"d-sg-grid\"><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i></div></div>","css":".d-sg{width:200px;max-width:100%;height:150px;display:grid;place-items:center;outline:none}\n.d-sg-grid{display:grid;grid-template-columns:repeat(3,44px);grid-auto-rows:44px;gap:8px}\n.d-sg-cell{display:block;border:1px solid var(--line);border-radius:6px;background:var(--paper)}\n.d-sg-grid.is-run .d-sg-cell{animation:d-stagger-grid-pop 280ms cubic-bezier(.34,1.56,.64,1) both}\n.d-sg-grid.is-run .d-sg-cell:nth-child(2),.d-sg-grid.is-run .d-sg-cell:nth-child(4),.d-sg-grid.is-run .d-sg-cell:nth-child(6),.d-sg-grid.is-run .d-sg-cell:nth-child(8){animation-delay:120ms}\n.d-sg-grid.is-run .d-sg-cell:nth-child(1),.d-sg-grid.is-run .d-sg-cell:nth-child(3),.d-sg-grid.is-run .d-sg-cell:nth-child(7),.d-sg-grid.is-run .d-sg-cell:nth-child(9){animation-delay:280ms}\n.d-sg:focus-visible{outline:1px solid var(--ink);outline-offset:6px}\n@keyframes d-stagger-grid-pop{from{opacity:0;transform:translateY(6px) scale(.92)}to{opacity:1;transform:none}}"},{"id":"checkbox-draw","cat":"微交互","t":"勾选手绘","en":"checkbox draw","d":"勾是一条 pathLength=1 的描边，280ms 画完；再叠一条偏移 1px、四成透明的同形线当套印偏差——机器画的勾没有这层错位，而正是它让勾像手画的。","body":"<label class=\"d-checkbox-draw\"><input class=\"d-cd-input\" type=\"checkbox\" checked><span class=\"d-cd-box\"><svg class=\"d-cd-tick\" viewBox=\"0 0 22 22\" aria-hidden=\"true\" focusable=\"false\"><path class=\"d-cd-bleed\" pathLength=\"1\" d=\"M5 11.6 9.2 15.8 17.2 6.4\"></path><path class=\"d-cd-ink\" pathLength=\"1\" d=\"M5 11.6 9.2 15.8 17.2 6.4\"></path></svg></span><span class=\"d-cd-text\">排字已校对</span></label>","css":".d-checkbox-draw{position:relative;display:inline-flex;align-items:center;gap:var(--sp-8);font-family:var(--sans);outline:none;cursor:pointer}\n.d-cd-input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}\n.d-cd-box{position:relative;width:22px;height:22px;border:1px solid var(--line);border-radius:2px;background:var(--paper);box-shadow:inset 0 1px 0 #fff5}\n.d-checkbox-draw:hover .d-cd-box{border-color:var(--ink)}\n.d-cd-tick{position:absolute;inset:0;width:22px;height:22px;fill:none;stroke-linecap:square;stroke-linejoin:miter}\n.d-cd-ink,.d-cd-bleed{stroke:var(--ink);stroke-width:1;stroke-dasharray:1;stroke-dashoffset:1}\n.d-cd-bleed{opacity:.4;transform:translate(1px,1px)}\n.d-cd-input:checked + .d-cd-box .d-cd-ink{animation:d-checkbox-draw-ink 280ms cubic-bezier(.2,.75,.25,1) both}\n.d-cd-input:checked + .d-cd-box .d-cd-bleed{animation:d-checkbox-draw-bleed 280ms cubic-bezier(.2,.75,.25,1) 120ms both}\n.d-cd-input:focus-visible + .d-cd-box{outline:1px solid var(--ink);outline-offset:2px}\n.d-checkbox-draw .d-cd-text{font-size:var(--fs-13);color:var(--ink)}\n@keyframes d-checkbox-draw-ink{to{stroke-dashoffset:0}}\n@keyframes d-checkbox-draw-bleed{to{stroke-dashoffset:0}}"},{"id":"icon-morph-menu","cat":"微交互","t":"汉堡变叉","en":"hamburger morph","d":"三条 1px 线在 40px 按钮里留 6px 间距，比 4px 更接近字排的行距；中间那条先退 120ms（它没法参与 X），上下两条再用物理曲线 280ms 合拢——三条一起转会像图案翻转，不像折叠。","body":"<div class=\"d-icon-morph-menu\"><button class=\"d-im-btn\" type=\"button\" aria-expanded=\"false\" aria-label=\"打开菜单\"><i class=\"d-im-bar d-im-top\"></i><i class=\"d-im-bar d-im-mid\"></i><i class=\"d-im-bar d-im-bot\"></i></button><span class=\"d-im-label\">菜单</span></div>","css":".d-icon-morph-menu{display:inline-flex;align-items:center;gap:var(--sp-12);font-family:var(--sans);outline:none}\n.d-im-btn{position:relative;width:40px;height:40px;padding:0;border:1px solid var(--line);border-radius:6px;background:var(--paper);box-shadow:inset 0 1px 0 #fff5;cursor:pointer}\n.d-im-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-im-bar{position:absolute;left:10px;width:18px;height:1px;background:var(--ink);transform-origin:center;transition:transform 280ms cubic-bezier(.34,1.56,.64,1) 120ms,opacity 120ms linear}\n.d-im-top{top:13px}\n.d-im-mid{top:19px}\n.d-im-bot{top:25px}\n.d-im-btn[aria-expanded=true] .d-im-top{transform:translateY(6px) rotate(45deg)}\n.d-im-btn[aria-expanded=true] .d-im-mid{opacity:0;transform:scaleX(.4)}\n.d-im-btn[aria-expanded=true] .d-im-bot{transform:translateY(-6px) rotate(-45deg)}\n.d-im-label{font-size:var(--fs-11);letter-spacing:.08em;color:var(--muted);min-width:26px}"},{"id":"cursor-grid-light","cat":"光标","t":"光标点亮网格","en":"grid spotlight","d":"亮度按与光标的欧氏距离分三档（1 / 2.2 / 3.2 格），不用连续值：连续亮度在 180ms 里会糊成一片，分档才看得出一圈一圈；最近一圈不加延迟，加了就变成追着光标跑。","body":"<div class=\"d-grid-light\" tabindex=\"0\" role=\"group\" aria-label=\"光标点亮网格，方向键移动\"><div class=\"d-gl-grid\"></div><span class=\"d-gl-tip\">移动光标 / 方向键</span></div>","css":".d-grid-light{display:inline-flex;flex-direction:column;gap:var(--sp-8);font-family:var(--sans);outline:none;cursor:crosshair}\n.d-gl-grid{display:grid;grid-template-columns:repeat(12,22px);grid-auto-rows:22px;gap:1px;width:max-content;background:var(--line);border:1px solid var(--line)}\n.d-gl-cell{background:var(--paper);transition:background 180ms steps(6),opacity 180ms steps(6)}\n.d-gl-cell.is-l1{background:#c2402a}\n.d-gl-cell.is-l2{background:#c2402a;opacity:.5}\n.d-gl-cell.is-l3{background:#c2402a;opacity:.22}\n.d-gl-tip{font-family:var(--mono);font-size:var(--fs-9);letter-spacing:.08em;color:var(--faint)}\n.d-grid-light:focus-visible{outline:1px solid var(--ink);outline-offset:4px}"},{"id":"cursor-state-machine","cat":"光标","t":"光标状态机","en":"cursor states","d":"四种形态只改尺寸、圆角和一个描边色，尺寸用 steps(6) 跳着变——机械感来自「跳」而不是「滑」；放下后 900ms 的等待态是必须的，否则「正在处理」和「卡住」看起来一模一样。","body":"<div class=\"d-cursor-states\" tabindex=\"0\" role=\"group\" aria-label=\"光标状态机，方向键移动，空格抓取\"><i class=\"d-cs-cursor\" aria-hidden=\"true\"><b class=\"d-cs-shape\"></b></i><span class=\"d-cs-block\">拖我</span><em class=\"d-cs-tip\" aria-live=\"polite\">待机</em></div>","css":".d-cursor-states{position:relative;width:300px;max-width:100%;height:132px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden;font-family:var(--sans);outline:none;cursor:none;touch-action:none}\n.d-cursor-states:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-cs-cursor{position:absolute;left:0;top:0;width:0;height:0;pointer-events:none;opacity:0;transition:opacity 120ms linear}\n.d-cursor-states.is-live .d-cs-cursor{opacity:1}\n.d-cs-shape{position:absolute;left:0;top:0;display:block;width:8px;height:8px;margin:-4px 0 0 -4px;border:1px solid var(--muted);border-radius:999px;background:transparent;transition:width 120ms steps(6),height 120ms steps(6),margin 120ms steps(6),border-radius 120ms steps(6),border-color 120ms steps(6),background 120ms steps(6)}\n.d-cursor-states[data-s=hover] .d-cs-shape{width:16px;height:16px;margin:-8px 0 0 -8px;border-radius:2px;border-color:var(--ink)}\n.d-cursor-states[data-s=drag] .d-cs-shape{width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:2px;border-color:var(--ink);background:var(--ink)}\n.d-cursor-states[data-s=wait] .d-cs-shape{width:16px;height:16px;margin:-8px 0 0 -8px;border-radius:999px;border-color:var(--line);border-top-color:var(--ink);animation:d-cursor-state-machine-spin 900ms steps(6) infinite}\n.d-cs-block{position:absolute;left:28px;top:44px;display:grid;place-items:center;width:64px;height:42px;border:1px solid var(--line);border-radius:6px;background:var(--bg);font-size:var(--fs-11);color:var(--muted);box-shadow:inset 0 1px 0 #fff5;user-select:none}\n.d-cursor-states[data-s=drag] .d-cs-block{border-color:var(--ink);color:var(--ink)}\n.d-cs-tip{position:absolute;left:10px;bottom:8px;font-family:var(--mono);font-style:normal;font-size:var(--fs-9);letter-spacing:.08em;color:var(--faint)}\n@keyframes d-cursor-state-machine-spin{to{transform:rotate(360deg)}}"},{"id":"transition-wipe-diagonal","cat":"过渡","t":"斜切擦除","en":"diagonal wipe","d":"边界斜 20%（顶边比底边多走 20% 宽），斜边一有角度，眼睛先看到「被刮开」而不是「淡入」；新内容同时从 -10px 推到 0，才像被带过来。整版靛蓝是本批两处破格之一——擦除的边只有色差才看得见。","body":"<div class=\"d-wipe\" tabindex=\"0\" role=\"group\" aria-label=\"斜切擦除，回车重播\"><div class=\"d-wipe-a\"><span class=\"d-wipe-k\">旧版</span><span class=\"d-wipe-l\">排字顺序</span></div><div class=\"d-wipe-b\"><span class=\"d-wipe-k\">新版</span><span class=\"d-wipe-l\">阅读顺序</span></div></div>","css":".d-wipe{position:relative;width:296px;max-width:100%;height:132px;overflow:hidden;border:1px solid var(--line);border-radius:10px;font-family:var(--sans);outline:none;cursor:pointer}\n.d-wipe:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-wipe-a,.d-wipe-b{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;gap:2px;padding:var(--sp-12)}\n.d-wipe-a{background:var(--paper);color:var(--muted)}\n.d-wipe-b{background:#2b4b8f;color:var(--paper);clip-path:polygon(0 0,0 0,0 100%,0 100%)}\n.d-wipe-k{font-family:var(--mono);font-size:var(--fs-9);letter-spacing:.08em;opacity:.75}\n.d-wipe-l{font-size:var(--fs-21);font-weight:600;letter-spacing:-.02em}\n.d-wipe.is-on .d-wipe-b{animation:d-transition-wipe-diagonal-in 280ms cubic-bezier(.2,.75,.25,1) forwards}\n.d-wipe.is-on .d-wipe-b .d-wipe-l{animation:d-transition-wipe-diagonal-text 280ms cubic-bezier(.2,.75,.25,1) forwards}\n.d-wipe.is-out .d-wipe-b{animation:d-transition-wipe-diagonal-out 280ms cubic-bezier(.2,.75,.25,1) forwards}\n@keyframes d-transition-wipe-diagonal-in{from{clip-path:polygon(0 0,0 0,0 100%,0 100%)}to{clip-path:polygon(0 0,128% 0,108% 100%,0 100%)}}\n@keyframes d-transition-wipe-diagonal-out{from{clip-path:polygon(0 0,128% 0,108% 100%,0 100%)}to{clip-path:polygon(0 0,0 0,0 100%,0 100%)}}\n@keyframes d-transition-wipe-diagonal-text{from{transform:translateX(-10px)}to{transform:translateX(0)}}"},{"id":"drag-deck","cat":"拖拽","t":"卡片堆拖拽","en":"drag deck","d":"甩出用 0.5px/ms 当门槛：比它慢的时候人其实是在「把牌摆正」，此时飞走就像误触。卡片 56px 的序号不是排版爱好——卡面只有 104px 高，字号阶里只有 56 能一眼数出「还剩几张」，序号本身就是信息，所以这条整块破格一次。层间缩 4.5%、下移 7px、再给 1.8° 的固定斜角，堆叠才读成一叠纸而不是三张叠起来的界面卡。","body":"<div class=\"d-deck\">\n  <div class=\"d-deck-stack\">\n    <article class=\"d-deck-card\" data-depth=\"2\"><b>03</b><em>第三张</em></article>\n    <article class=\"d-deck-card\" data-depth=\"1\"><b>02</b><em>第二张</em></article>\n    <article class=\"d-deck-card\" data-depth=\"0\" tabindex=\"0\" role=\"button\" aria-label=\"第一张卡片，左右拖动或按左右方向键甩出\"><b>01</b><em>左右甩我</em></article>\n  </div>\n  <p class=\"d-deck-hint\">甩出速度 > 0.5px/ms 直接飞走</p>\n</div>","css":".d-deck{position:relative;width:260px;height:150px;display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--ink)}\n.d-deck-stack{position:relative;width:100%;height:118px}\n.d-deck-card{position:absolute;left:50%;top:0;width:190px;height:104px;margin-left:-95px;display:flex;flex-direction:column;justify-content:space-between;padding:8px 10px;background:var(--paper);border:1px solid var(--line);border-radius:10px;box-shadow:0 1px 0 var(--line);transform-origin:50% 80%;cursor:grab;touch-action:none;user-select:none;will-change:transform}\n.d-deck-card[data-depth=\"1\"],.d-deck-card[data-depth=\"2\"]{background:var(--bg)}\n.d-deck-card b{font-size:56px;line-height:1;letter-spacing:-.03em;font-weight:650}\n.d-deck-card em{font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:.08em;color:var(--faint)}\n.d-deck-card[data-drag]{cursor:grabbing;box-shadow:0 12px 24px -8px #20241e26}\n.d-deck-card:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-deck-hint{margin:0;font-family:var(--mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}"},{"id":"drag-ghost-follow","cat":"拖拽","t":"拖拽残影","en":"ghost trail","d":"残影每帧按 0.3 追指针：0.5 就变成钉在指针上、没有重量，0.15 会一直掉半个身位、像卡住了。原件压到 0.28 不透明度也有上下限——再高会和残影抢注意力，再低就看不出「它原来在哪」，而「原来在哪」正是这条要传达的信息。","body":"<div class=\"d-ghost\" role=\"group\" aria-label=\"拖拽残影\">\n  <div class=\"d-ghost-slot\">\n    <span class=\"d-ghost-frame\" aria-hidden=\"true\"></span>\n    <article class=\"d-ghost-card\" tabindex=\"0\" role=\"button\" aria-label=\"按住拖动，原件留残影\"><b>原件</b><em>拖我</em></article>\n    <article class=\"d-ghost-copy\" aria-hidden=\"true\"><b>原件</b><em>拖我</em></article>\n  </div>\n  <p class=\"d-ghost-hint\">残影每帧按 0.3 追指针</p>\n</div>","css":".d-ghost{position:relative;width:300px;height:150px;padding:16px;color:var(--ink)}\n.d-ghost-slot{position:relative;width:120px;height:80px}\n.d-ghost-frame{position:absolute;inset:0;border:1px dashed var(--line);border-radius:10px}\n.d-ghost-card,.d-ghost-copy{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;padding:8px 10px;background:var(--paper);border:1px solid var(--line);border-radius:10px}\n.d-ghost-card{box-shadow:0 1px 0 var(--line);cursor:grab;touch-action:none;user-select:none;transition:opacity .18s linear}\n.d-ghost-copy{border-color:var(--ink);box-shadow:0 12px 24px -8px #20241e26;opacity:0;pointer-events:none;will-change:transform}\n.d-ghost[data-drag=\"1\"] .d-ghost-card{opacity:.28;border-style:dashed;cursor:grabbing}\n.d-ghost-card b,.d-ghost-copy b{font-size:13px;font-weight:650}\n.d-ghost-card em,.d-ghost-copy em{font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:.08em;color:var(--faint)}\n.d-ghost-card:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-ghost-hint{position:absolute;left:16px;bottom:8px;margin:0;font-family:var(--mono);font-size:9px;color:var(--faint)}"},{"id":"drag-snap-grid","cat":"拖拽","t":"网格吸附","en":"snap grid","d":"吸附半径 26px 是照 48px 的格子算的：半格 24px 再加 2px 容错——半径只要小于半格，手指压着方块偏一格就永远吸不进去，人会觉得这功能坏了。对齐提示线只画 1px：它的作用是解释落点，不是参与构图，粗一格就把格子本身的秩序压掉了。格子松手用 280ms 落位，比 180ms 慢一点，落点才看得出是「归位」而不是被甩进去。","body":"<div class=\"d-snap\" role=\"group\" aria-label=\"网格吸附\">\n  <div class=\"d-snap-grid\">\n    <i class=\"d-snap-cell\"></i><i class=\"d-snap-cell\"></i><i class=\"d-snap-cell\"></i>\n    <i class=\"d-snap-cell\"></i><i class=\"d-snap-cell\"></i><i class=\"d-snap-cell\"></i>\n    <div class=\"d-snap-guide\" aria-hidden=\"true\"><i></i><i></i></div>\n  </div>\n  <div class=\"d-snap-tile\" tabindex=\"0\" role=\"button\" aria-label=\"拖动方块吸附到格子，方向键移动一格\"><b>1</b></div>\n  <p class=\"d-snap-hint\">离格心 26px 内松手就进去</p>\n</div>","css":".d-snap{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-snap-grid{position:absolute;left:12px;top:12px;display:grid;grid-template-columns:repeat(3,48px);grid-auto-rows:48px;gap:8px}\n.d-snap-cell{border:1px dashed var(--line);border-radius:6px}\n.d-snap-cell[data-hot]{border-style:solid;border-color:var(--ink);background:var(--bg)}\n.d-snap-guide{position:absolute;inset:0;opacity:0;pointer-events:none;transition:opacity .12s linear}\n.d-snap-guide[data-on]{opacity:1}\n.d-snap-guide i{position:absolute;background:var(--ink)}\n.d-snap-guide i:first-child{left:0;top:0;bottom:0;width:1px}\n.d-snap-guide i:last-child{top:0;left:0;right:0;height:1px}\n.d-snap-tile{position:absolute;left:0;top:0;width:40px;height:40px;display:grid;place-items:center;background:var(--paper);border:1px solid var(--ink);border-radius:6px;box-shadow:0 1px 0 var(--line);cursor:grab;touch-action:none;will-change:transform}\n.d-snap-tile b{font-family:var(--mono);font-size:13px;font-weight:500;color:#c2402a}\n.d-snap-tile[data-drag]{cursor:grabbing;box-shadow:0 12px 24px -8px #20241e26}\n.d-snap-tile:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-snap-hint{position:absolute;left:12px;bottom:4px;margin:0;font-family:var(--mono);font-size:9px;line-height:1.6;color:var(--faint)}"},{"id":"drag-swap","cat":"拖拽","t":"两卡互换","en":"drag to swap","d":"判定用「两张卡中心相距 58px 以内」而不是「碰到边缘」：手指会盖住接触点，按接触判定永远慢半拍，人会觉得没反应。目标卡只让 22px——正好是两卡间隙的一半，再多它就贴到画框边上，看着像目标卡先跑了；让位用 180ms、落位用 280ms，先让后落才有先后顺序。","body":"<div class=\"d-swap\" role=\"group\" aria-label=\"两张卡片，拖到另一张上互换\">\n  <div class=\"d-swap-slot\" data-slot=\"0\"></div>\n  <div class=\"d-swap-slot\" data-slot=\"1\"></div>\n  <article class=\"d-swap-card\" data-slot=\"0\" tabindex=\"0\" role=\"button\" aria-label=\"甲卡，拖到乙卡上互换\"><b>甲</b><em>01</em></article>\n  <article class=\"d-swap-card\" data-slot=\"1\" tabindex=\"0\" role=\"button\" aria-label=\"乙卡，拖到甲卡上互换\"><b>乙</b><em>02</em></article>\n  <p class=\"d-swap-hint\">拖到另一张上 · Enter 也能换</p>\n</div>","css":".d-swap{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-swap-slot{position:absolute;top:26px;left:24px;width:104px;height:78px;border:1px dashed var(--line);border-radius:10px}\n.d-swap-slot[data-slot=\"1\"]{left:172px}\n.d-swap-card{position:absolute;left:0;top:0;width:104px;height:78px;z-index:2;display:flex;flex-direction:column;justify-content:space-between;padding:8px 9px;background:var(--paper);border:1px solid var(--line);border-radius:10px;box-shadow:0 1px 0 var(--line);cursor:grab;touch-action:none;user-select:none;will-change:transform}\n.d-swap-card b{font-size:21px;line-height:1;font-weight:650}\n.d-swap-card em{font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:.08em;color:var(--faint)}\n.d-swap-card[data-drag]{cursor:grabbing;border-color:var(--ink);box-shadow:0 12px 24px -8px #20241e26}\n.d-swap-card[data-yield]{border-style:dashed}\n.d-swap-card:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-swap-hint{position:absolute;left:24px;bottom:8px;margin:0;font-family:var(--mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}"},{"id":"drag-threshold-hint","cat":"拖拽","t":"边界提示","en":"drag threshold","d":"越界后位移按 0.18 折算，是要把「拖不动」做成「拖得动但明显费劲」：折算到 0 就像卡死，到 0.3 又像还能拖出去。箭头要等你推过 6px 才亮——短促的抖手不该惊动提示，那 6px 就是「手抖」和「想出去」的分界。松手 280ms 弹回，比 180ms 多留一点被拉回去的感觉。","body":"<div class=\"d-bound\" role=\"group\" aria-label=\"拖到边界出现方向提示\">\n  <div class=\"d-bound-box\">\n    <i class=\"d-bound-arrow\" data-side=\"l\" aria-hidden=\"true\"></i>\n    <i class=\"d-bound-arrow\" data-side=\"r\" aria-hidden=\"true\"></i>\n    <i class=\"d-bound-arrow\" data-side=\"t\" aria-hidden=\"true\"></i>\n    <i class=\"d-bound-arrow\" data-side=\"b\" aria-hidden=\"true\"></i>\n    <div class=\"d-bound-knob\" tabindex=\"0\" role=\"button\" aria-label=\"拖动方块到边界，或用方向键\"><span>拖到边上</span></div>\n  </div>\n  <p class=\"d-bound-hint\">越界位移按 0.18 折算</p>\n</div>","css":".d-bound{position:relative;width:300px;height:150px;display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--ink)}\n.d-bound-box{position:relative;width:280px;height:120px;border:1px solid var(--line);border-radius:10px;background:var(--bg);overflow:hidden}\n.d-bound-arrow{position:absolute;width:6px;height:6px;border-top:1px solid var(--ink);border-right:1px solid var(--ink);opacity:0;transition:opacity .12s linear}\n.d-bound-arrow[data-side=\"l\"]{left:4px;top:50%;margin-top:-3px;transform:rotate(-135deg)}\n.d-bound-arrow[data-side=\"r\"]{right:4px;top:50%;margin-top:-3px;transform:rotate(45deg)}\n.d-bound-arrow[data-side=\"t\"]{top:4px;left:50%;margin-left:-3px;transform:rotate(-45deg)}\n.d-bound-arrow[data-side=\"b\"]{bottom:4px;left:50%;margin-left:-3px;transform:rotate(135deg)}\n.d-bound-box[data-push=\"l\"] .d-bound-arrow[data-side=\"l\"],.d-bound-box[data-push=\"r\"] .d-bound-arrow[data-side=\"r\"],.d-bound-box[data-push=\"t\"] .d-bound-arrow[data-side=\"t\"],.d-bound-box[data-push=\"b\"] .d-bound-arrow[data-side=\"b\"]{opacity:1}\n.d-bound-knob{position:absolute;left:8px;top:8px;width:88px;height:56px;display:grid;place-items:center;background:var(--paper);border:1px solid var(--ink);border-radius:6px;font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--muted);cursor:grab;touch-action:none;user-select:none;will-change:transform}\n.d-bound-knob[data-drag]{cursor:grabbing;box-shadow:0 12px 24px -8px #20241e26}\n.d-bound-knob:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-bound-hint{margin:0;font-family:var(--mono);font-size:9px;color:var(--faint)}"},{"id":"text-line-mask","cat":"排印","t":"逐行遮罩","en":"line mask","d":"行用 overflow:hidden 遮住、字上移 112%（多出的 12% 盖住字头，否则行顶会漏一条白缝），每行错 120ms——正好是一行中文读完的时间，像排字工一行行把字放上版。","body":"<div class=\"d-line-mask\" tabindex=\"0\" role=\"group\" aria-label=\"逐行遮罩，回车重播\"><span class=\"d-lm-row\"><i>把字排直</i></span><span class=\"d-lm-row\"><i>让行站队</i></span><span class=\"d-lm-row\"><i>再准它出现</i></span></div>","css":".d-line-mask{width:248px;max-width:100%;padding:4px 0;font-family:var(--sans);color:var(--ink);outline:none}\n.d-line-mask .d-lm-row{display:block;overflow:hidden;padding-bottom:1px}\n.d-line-mask .d-lm-row i{display:block;font-style:normal;font-size:var(--fs-21);font-weight:650;line-height:var(--lh-display);letter-spacing:-.03em;transform:translateY(112%);animation:d-text-line-mask-rise 280ms cubic-bezier(.2,.75,.25,1) both;animation-delay:calc(var(--i,0) * 120ms)}\n.d-line-mask .d-lm-row:nth-child(2){--i:1}\n.d-line-mask .d-lm-row:nth-child(3){--i:2}\n.d-line-mask.is-reset .d-lm-row i{animation:none}\n.d-line-mask:focus-visible{outline:1px solid var(--ink);outline-offset:6px}\n@keyframes d-text-line-mask-rise{to{transform:translateY(0)}}"},{"id":"text-scramble","cat":"排印","t":"乱码解码","en":"scramble","d":"乱码每 120ms 定住一位，未定的位换成同宽等宽字符，因为等宽决定换值时整行不抖；定型从左往右，读者才有「这句到底要说哪个字」的预期。","body":"<div class=\"d-scramble\" tabindex=\"0\" role=\"group\" aria-label=\"乱码解码，回车重播\"><span class=\"d-sc-text\">正在生成页面</span><i class=\"d-sc-caret\" aria-hidden=\"true\"></i></div>","css":".d-scramble{display:inline-flex;align-items:center;gap:2px;font-family:var(--mono);font-size:var(--fs-21);line-height:1;letter-spacing:.08em;color:var(--ink);outline:none;cursor:pointer}\n.d-scramble .d-sc-ch{font-variant-numeric:tabular-nums}\n.d-scramble .d-sc-ch:not(.is-fixed){color:var(--faint)}\n.d-scramble .d-sc-caret{display:inline-block;width:1px;height:var(--fs-21);background:var(--ink);animation:d-text-scramble-blink 900ms steps(6) infinite}\n.d-scramble:focus-visible{outline:1px solid var(--ink);outline-offset:6px}\n@keyframes d-text-scramble-blink{50%{opacity:0}}"},{"id":"text-strike-draw","cat":"排印","t":"删除线手绘","en":"strike draw","d":"线用 scaleX 从 0 拉到 1（不写 width，避免每帧重排把字挤动），两端各探出 2px、落在字高中线偏下 1px——手划删除线不会正好停在笔画边缘。","body":"<div class=\"d-strike-draw\" tabindex=\"0\" role=\"group\" aria-label=\"删除线手绘，回车重画\"><span class=\"d-sd-old\">原价 128</span><span class=\"d-sd-new\">现价 96</span></div>","css":".d-strike-draw{display:inline-flex;flex-direction:column;gap:2px;font-family:var(--sans);outline:none;cursor:pointer}\n.d-strike-draw .d-sd-old{position:relative;display:inline-block;font-size:var(--fs-21);font-weight:600;letter-spacing:-.01em;color:var(--muted)}\n.d-strike-draw .d-sd-old::after{content:\"\";position:absolute;left:-2px;right:-2px;top:calc(50% + 1px);height:1px;background:var(--ink);transform:scaleX(0);transform-origin:left center;animation:d-text-strike-draw-line 280ms cubic-bezier(.2,.75,.25,1) 120ms both}\n.d-strike-draw .d-sd-new{font-size:var(--fs-13);color:var(--ink);opacity:0;animation:d-text-strike-draw-new 120ms linear 280ms both}\n.d-strike-draw.is-reset .d-sd-old::after,.d-strike-draw.is-reset .d-sd-new{animation:none}\n.d-strike-draw:focus-visible{outline:1px solid var(--ink);outline-offset:6px}\n@keyframes d-text-strike-draw-line{to{transform:scaleX(1)}}\n@keyframes d-text-strike-draw-new{to{opacity:1}}"},{"id":"text-width-collapse","cat":"排印","t":"字宽压缩","en":"width collapse","d":"字宽只压到 .75、放到 1.18：超过 ±25% 读者先看到「变形」而不是「宽窄」；基线锚在左侧，缩放都往右长，字才不像被整体缩放。900ms 是唯一能看清中间态的时长——这是连续量，不是反馈。34px 是本条唯一的破格，字号阶里的展示档只为一句话用。","body":"<div class=\"d-width-collapse\" tabindex=\"0\" role=\"button\" aria-pressed=\"false\" aria-label=\"切换字宽\"><span class=\"d-wc-word\">可变字宽</span><span class=\"d-wc-meta\">wdth 75</span></div>","css":".d-width-collapse{display:inline-flex;flex-direction:column;gap:2px;width:max-content;max-width:100%;font-family:var(--sans);outline:none;cursor:pointer}\n.d-width-collapse .d-wc-word{display:inline-block;transform-origin:left center;font-size:var(--fs-34);font-weight:600;line-height:var(--lh-display);letter-spacing:-.03em;color:var(--ink);transform:scaleX(.75);transition:transform 900ms cubic-bezier(.2,.75,.25,1),letter-spacing 900ms cubic-bezier(.2,.75,.25,1)}\n.d-width-collapse .d-wc-meta{font-family:var(--mono);font-size:var(--fs-9);letter-spacing:.08em;color:var(--faint)}\n.d-width-collapse.is-wide .d-wc-word{transform:scaleX(1.18);letter-spacing:.02em}\n.d-width-collapse.is-wide .d-wc-meta{color:var(--muted)}\n.d-width-collapse:focus-visible{outline:1px solid var(--ink);outline-offset:6px}"},{"id":"contrast-toggle","cat":"无障碍","t":"高对比模式","en":"contrast toggle","d":"两态之间不做淡入淡出：拨杆用 steps(6) 走 120ms，一格一格换挡，像老印刷机的调墨杆——过渡会让人怀疑「是不是还在切」。真正只换三样：正文落到 --ink、描边从 --line 加深到 --ink、0 1px 0 的底边阴影清零；颜色一变立刻可读，不用等动画结束。","body":"<div class=\"d-ct\"><div class=\"d-ct-card\"><b class=\"d-ct-h\">第 04 期 · 排字房札记</b><p class=\"d-ct-p\">行距 1.7，字距 0，欠一档光就够读。</p><span class=\"d-ct-meta\">p.14 / 全文 2200 字</span></div><div class=\"d-ct-bar\"><button class=\"d-ct-sw\" type=\"button\" role=\"switch\" aria-checked=\"false\"><i class=\"d-ct-track\"><i class=\"d-ct-knob\" aria-hidden=\"true\"></i></i><span class=\"d-ct-opt\">高对比</span></button><span class=\"d-ct-state\">STATE · 正常</span></div></div>","css":".d-ct{width:300px;max-width:100%;height:150px;padding:12px;border:1px solid var(--line);border-radius:2px;background:var(--bg);font-family:var(--sans)}\n.d-ct-card{padding:7px 10px;border:1px solid var(--line);border-radius:2px;background:var(--paper);box-shadow:0 1px 0 var(--line)}\n.d-ct-h{display:block;font-size:11.5px;line-height:1.5;font-weight:650;color:var(--ink)}\n.d-ct-p{margin:4px 0 0;font-size:11px;line-height:1.6;color:var(--muted)}\n.d-ct-meta{display:block;margin-top:6px;font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}\n.d-ct-bar{display:flex;align-items:center;gap:10px;margin-top:10px}\n.d-ct-sw{display:inline-flex;align-items:center;gap:6px;padding:3px 8px 3px 4px;border:1px solid var(--line);border-radius:999px;background:var(--paper);cursor:pointer}\n.d-ct-sw:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-ct-track{display:block;width:32px;height:16px;padding:1px;border:1px solid var(--line);border-radius:999px;background:var(--bg)}\n.d-ct-knob{display:block;width:12px;height:12px;border-radius:999px;background:var(--faint);transform:translateX(0);transition:transform 120ms steps(6),background-color 120ms steps(6)}\n.d-ct-opt{font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--muted)}\n.d-ct-state{font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}\n.d-ct.is-hc{background:var(--paper)}\n.d-ct.is-hc .d-ct-card{box-shadow:none;border-color:var(--ink)}\n.d-ct.is-hc .d-ct-p{color:var(--ink)}\n.d-ct.is-hc .d-ct-meta{color:var(--muted)}\n.d-ct.is-hc .d-ct-track{border-color:var(--ink);background:var(--paper)}\n.d-ct.is-hc .d-ct-opt,.d-ct.is-hc .d-ct-state{color:var(--ink)}\n.d-ct.is-hc .d-ct-knob{transform:translateX(16px);background:var(--ink)}"},{"id":"focus-trap-dialog","cat":"无障碍","t":"焦点陷阱","en":"focus trap","d":"焦点不淡入：三个按钮下面那根 1px 游标用 120ms 的 steps(6) 一格格挪，像字车走位，读者能数出焦点在第几个；弹层本身也只用 120ms 六步从 6px 外落到位，不给缓动。Tab 到底回第一个、Esc 关掉并把焦点送回触发按钮——这两条缺一条，键盘用户就不敢在弹层里按回车。","body":"<div class=\"d-ftd\"><div class=\"d-ftd-page\"><p class=\"d-ftd-line\">改字号会重排整页，所以先问一句。</p><button class=\"d-ftd-open\" type=\"button\" aria-haspopup=\"dialog\">打开对话框</button></div><div class=\"d-ftd-scrim\" hidden></div><div class=\"d-ftd-box\" role=\"dialog\" aria-modal=\"true\" aria-label=\"套用字号确认\" hidden><b class=\"d-ftd-title\">套用这个字号？</b><div class=\"d-ftd-row\"><button class=\"d-ftd-opt\" type=\"button\">套用</button><button class=\"d-ftd-opt\" type=\"button\">先看</button><button class=\"d-ftd-opt\" type=\"button\">取消</button></div><i class=\"d-ftd-caret\" aria-hidden=\"true\"></i><span class=\"d-ftd-hint\">Tab 循环三点 · Esc 关</span></div></div>","css":".d-ftd{position:relative;width:300px;max-width:100%;height:150px;border:1px solid var(--line);border-radius:2px;background:var(--paper);overflow:hidden;font-family:var(--sans)}\n.d-ftd-page{padding:12px}\n.d-ftd-line{max-width:200px;margin:0 0 10px;font-size:11px;line-height:1.7;color:var(--muted)}\n.d-ftd-open{font-family:var(--mono);font-size:10px;letter-spacing:.08em;padding:5px 9px;border:1px solid var(--line);border-radius:2px;background:var(--paper);color:var(--ink);cursor:pointer;transition:border-color 120ms steps(6)}\n.d-ftd-open:hover{border-color:var(--ink)}\n.d-ftd-open:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-ftd-scrim{position:absolute;inset:0;background:var(--bg);opacity:.72}\n.d-ftd-box{position:absolute;left:14px;right:14px;top:16px;padding:10px 12px 12px;border:1px solid var(--ink);border-radius:2px;background:var(--paper);box-shadow:0 12px 24px -8px #20241e26}\n.d-ftd.is-open .d-ftd-box{animation:d-focus-trap-dialog-snap 120ms steps(6) both}\n@keyframes d-focus-trap-dialog-snap{from{transform:translateY(6px)}to{transform:translateY(0)}}\n.d-ftd-title{display:block;font-size:12px;line-height:1.5;font-weight:650;color:var(--ink)}\n.d-ftd-row{display:flex;gap:6px;margin-top:8px}\n.d-ftd-opt{width:52px;padding:4px 0;border:1px solid var(--line);border-radius:2px;background:var(--paper);font-family:var(--mono);font-size:10px;color:var(--muted);cursor:pointer;transition:border-color 120ms steps(6),color 120ms steps(6),background-color 120ms steps(6)}\n.d-ftd-opt.is-on{border-color:var(--ink);background:var(--bg);color:var(--ink)}\n.d-ftd-opt:focus-visible{outline:1px solid #2b4b8f;outline-offset:2px}\n.d-ftd-caret{--i:0;display:block;width:52px;height:1px;margin-top:4px;background:#2b4b8f;transform:translateX(calc(var(--i,0) * 58px));transition:transform 120ms steps(6)}\n.d-ftd-hint{display:block;margin-top:8px;font-family:var(--mono);font-size:9px;letter-spacing:.08em;color:var(--faint)}"},{"id":"skip-nav","cat":"无障碍","t":"跳到主内容","en":"skip link","d":"跳转条从版面外落下来只用 120ms 的 linear，一点不加缓动：它是「立刻能用」的东西，一被缓动就像还没加载完。落位停在 8px 而不贴顶，是让它的上下两条边都露出来——读者一眼看出这是压在页头上的浮条，不是新长出来的页头。焦点环只给正文不给跳转条，因为读者要确认的是「我到了」，不是「我按到了」。","body":"<div class=\"d-skn\"><a class=\"d-skn-link\" href=\"#\">跳到主内容</a><div class=\"d-skn-nav\"><span>导航</span><span>本期</span><span>往期</span><span>关于</span></div><div class=\"d-skn-body\"><p class=\"d-skn-lead\">跳转条平时藏在版面外，第一次 Tab 才落下来；回车之后焦点进正文。</p><main class=\"d-skn-main\" tabindex=\"-1\" aria-label=\"主内容\">主内容区 · 焦点落在这里</main><button class=\"d-skn-try\" type=\"button\">按一下＝第一次 Tab</button></div></div>","css":".d-skn{position:relative;width:300px;max-width:100%;height:150px;border:1px solid var(--line);border-radius:2px;background:var(--paper);overflow:hidden;font-family:var(--sans)}\n.d-skn-link{position:absolute;left:8px;top:-26px;z-index:2;display:block;padding:4px 8px;border:1px solid var(--ink);border-radius:2px;background:var(--ink);color:var(--paper);font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-decoration:none;transition:top 120ms linear}\n.d-skn-link:focus,.d-skn-link:focus-visible{top:8px;outline:1px solid var(--paper);outline-offset:2px}\n.d-skn-nav{display:flex;gap:8px;padding:6px 8px;border-bottom:1px solid var(--line);font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}\n.d-skn-body{padding:10px 8px 0}\n.d-skn-lead{margin:0 0 6px;font-size:10.5px;line-height:1.65;color:var(--muted)}\n.d-skn-main{padding:6px 8px;border-radius:2px;background:var(--bg);font-size:10px;line-height:1.6;color:var(--ink);outline:0;outline-offset:2px}\n.d-skn-main.is-hit{outline:1px solid var(--ink)}\n.d-skn-try{margin-top:8px;padding:3px 8px;border:1px solid var(--line);border-radius:2px;background:var(--paper);color:var(--faint);font-family:var(--mono);font-size:9px;letter-spacing:.06em;cursor:pointer;transition:border-color 120ms linear,color 120ms linear}\n.d-skn-try:hover{border-color:var(--ink);color:var(--ink)}\n.d-skn-try:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"toolbar-overflow","cat":"浮层","t":"工具栏溢出折叠","en":"toolbar overflow","d":"工具栏定宽 280px：再宽就轮不到折叠；展开时三项依次错 120ms、用 steps(6) 出现，是让人看清有哪三项，而不是一次糊上来。更多键上留着数字 3——折起来的东西要能数得清。","body":"<div class=\"d-toolbar-overflow\"><div class=\"d-to-bar\" role=\"toolbar\" aria-label=\"编辑器工具\"><button class=\"d-to-btn\" type=\"button\" aria-pressed=\"true\">粗</button><button class=\"d-to-btn\" type=\"button\" aria-pressed=\"false\">斜</button><button class=\"d-to-more\" type=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\">更多 <b>3</b></button></div><div class=\"d-to-menu\" role=\"menu\" hidden><button class=\"d-to-item\" type=\"button\" role=\"menuitem\">插入注脚</button><button class=\"d-to-item\" type=\"button\" role=\"menuitem\">导出 PDF</button><button class=\"d-to-item\" type=\"button\" role=\"menuitem\">版本历史</button></div></div>","css":".d-toolbar-overflow{position:relative;width:280px;max-width:100%;font-family:var(--sans)}\n.d-to-bar{display:flex;align-items:center;gap:2px;height:34px;padding:0 2px;border:1px solid var(--line);border-radius:6px;background:var(--paper)}\n.d-to-btn{height:24px;min-width:26px;padding:0 6px;border:0;border-radius:2px;background:transparent;color:var(--muted);font:inherit;font-size:var(--fs-11);cursor:pointer}\n.d-to-btn:hover{color:var(--ink)}\n.d-to-btn[aria-pressed=true]{color:var(--ink);background:var(--bg);box-shadow:inset 0 1px 0 #fff5}\n.d-to-btn:focus-visible,.d-to-more:focus-visible,.d-to-item:focus-visible{outline:1px solid var(--ink);outline-offset:1px}\n.d-to-more{display:inline-flex;align-items:center;gap:4px;margin-left:auto;height:24px;padding:0 8px;border:1px solid var(--line);border-radius:2px;background:transparent;color:var(--ink);font:inherit;font-size:var(--fs-11);cursor:pointer}\n.d-to-more b{font-family:var(--mono);font-weight:400;font-size:var(--fs-9);color:var(--faint)}\n.d-to-menu{position:absolute;right:0;top:38px;z-index:2;width:148px;padding:4px;border:1px solid var(--line);border-radius:6px;background:var(--paper);box-shadow:0 12px 24px -8px #20241e26}\n.d-to-menu[hidden]{display:none}\n.d-to-item{display:block;width:100%;height:28px;padding:0 8px;border:0;border-radius:2px;background:transparent;color:var(--ink);font:inherit;font-size:var(--fs-11);text-align:left;cursor:pointer;opacity:0;transform:translateY(-4px)}\n.d-to-item:hover{background:var(--bg)}\n.d-toolbar-overflow.is-open .d-to-item{animation:d-toolbar-overflow-item 180ms steps(6) forwards;animation-delay:calc(var(--i,0) * 120ms)}\n.d-to-item:nth-child(2){--i:1}\n.d-to-item:nth-child(3){--i:2}\n@keyframes d-toolbar-overflow-item{to{opacity:1;transform:none}}"},{"id":"edge-swipe-back","cat":"手势","t":"边缘右滑返回","en":"edge swipe","d":"30% 是「划到这里心里已经决定要走」的位置：低于它松手算误触，高于它手指已经到屏幕中间，再弹回就显得很突兀。判定只在左边缘 18px 内起手，否则页面里正常的横向拖动会被当成返回，这一条是整条手势能不能用的关键。进度用 1px 的尺子加一根刻度表示，人在拖的时候需要知道「还差多少」，而不是一个百分比数字。","body":"<div class=\"d-back\" role=\"group\" aria-label=\"边缘右滑返回\">\n  <div class=\"d-back-screen\">\n    <span class=\"d-back-under\">← 上一页</span>\n    <div class=\"d-back-edge\" tabindex=\"0\" role=\"button\" aria-label=\"从左边缘往右拖，或按右方向键返回\"><i class=\"d-back-grip\" aria-hidden=\"true\"></i></div>\n    <div class=\"d-back-page\">\n      <b>详情页</b>\n      <em>从左边缘往右拖</em>\n    </div>\n  </div>\n  <div class=\"d-back-ruler\" aria-hidden=\"true\"><i class=\"d-back-fill\"></i><span class=\"d-back-tick\"></span></div>\n  <p class=\"d-back-hint\">过 30% 才提交 · 30% 处有刻度</p>\n</div>","css":".d-back{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-back-screen{position:absolute;left:20px;top:14px;width:260px;height:104px;border:1px solid var(--line);border-radius:10px;background:var(--bg);overflow:hidden}\n.d-back-under{position:absolute;inset:0;display:grid;place-items:center;font-family:var(--mono);font-size:11px;letter-spacing:.08em;color:var(--faint)}\n.d-back-edge{position:absolute;left:0;top:0;bottom:0;width:18px;z-index:2;cursor:ew-resize;touch-action:none}\n.d-back-grip{position:absolute;left:7px;top:50%;width:1px;height:24px;margin-top:-12px;background:var(--line)}\n.d-back-edge:focus-visible{outline:1px solid var(--ink);outline-offset:-2px}\n.d-back-page{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;gap:4px;padding:10px 12px;background:var(--paper);border-left:1px solid var(--line);border-radius:10px;box-shadow:0 1px 0 var(--line);will-change:transform}\n.d-back-page b{font-size:13px;font-weight:650}\n.d-back-page em{font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}\n.d-back-ruler{position:absolute;left:20px;top:130px;width:260px;height:1px;background:var(--line)}\n.d-back-fill{position:absolute;left:0;top:0;width:0;height:1px;background:#c2402a}\n.d-back-tick{position:absolute;left:30%;top:-2px;width:1px;height:5px;background:var(--ink)}\n.d-back-hint{position:absolute;left:20px;top:136px;margin:0;font-family:var(--mono);font-size:9px;line-height:1.6;color:var(--faint)}"},{"id":"long-press-menu","cat":"手势","t":"长按菜单","en":"long press","d":"按 420ms：300ms 会被滑动起步的惯性误触，500ms 又像卡顿；比 iOS 的 400ms 多 20ms，是因为这里同时画一条走满才弹的进度线，线到 420ms 刚好走完，两条时间轴合得上。移动超过 8px 立刻取消——长按和拖动只能二选一，否则手指一抖两件事都做一半。整块主墨也是故意的：420ms 的停留需要一个实心面来承重，描边卡撑不住这个时长，本组只此一处大色块。","body":"<div class=\"d-press\" role=\"group\" aria-label=\"长按菜单\">\n  <div class=\"d-press-card\" tabindex=\"0\" role=\"button\" aria-haspopup=\"menu\" aria-expanded=\"false\">\n    <b>按住 420ms</b>\n    <em>移动超过 8px 即取消</em>\n    <i class=\"d-press-bar\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"d-press-menu\" role=\"menu\" aria-hidden=\"true\" aria-label=\"卡片操作\">\n    <button class=\"d-press-item\" type=\"button\" role=\"menuitem\" tabindex=\"-1\">重命名</button>\n    <button class=\"d-press-item\" type=\"button\" role=\"menuitem\" tabindex=\"-1\">复制链接</button>\n    <button class=\"d-press-item d-press-danger\" type=\"button\" role=\"menuitem\" tabindex=\"-1\">归档</button>\n  </div>\n  <p class=\"d-press-hint\">按住 420ms 或 Enter 呼出</p>\n</div>","css":".d-press{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-press-card{position:absolute;left:12px;top:16px;width:150px;height:96px;display:flex;flex-direction:column;justify-content:space-between;padding:10px;background:var(--ink);color:var(--bg);border:1px solid var(--ink);border-radius:10px;overflow:hidden;cursor:pointer;touch-action:none;user-select:none;transition:transform .12s linear}\n.d-press-card b{font-size:15px;line-height:1.2;font-weight:650}\n.d-press-card em{font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}\n.d-press-card[data-hold]{transform:scale(.985)}\n.d-press-card:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-press-bar{position:absolute;left:0;bottom:0;width:0;height:1px;background:#e8c34a}\n.d-press-menu{position:absolute;left:150px;top:26px;width:132px;display:flex;flex-direction:column;gap:1px;padding:4px;background:var(--paper);border:1px solid var(--ink);border-radius:6px;box-shadow:0 12px 24px -8px #20241e26;transform-origin:0 0;opacity:0;transform:translateX(-6px) scale(.96);pointer-events:none;transition:opacity .18s cubic-bezier(.34,1.56,.64,1),transform .18s cubic-bezier(.34,1.56,.64,1)}\n.d-press-menu[data-open]{opacity:1;transform:translateX(0) scale(1);pointer-events:auto}\n.d-press-item{border:0;background:transparent;color:var(--ink);font-family:inherit;font-size:11px;line-height:1.4;text-align:left;padding:6px 8px;border-radius:2px;cursor:pointer}\n.d-press-item:hover{background:var(--bg)}\n.d-press-item:focus-visible{outline:1px solid var(--ink);outline-offset:-1px}\n.d-press-danger{color:#c2402a}\n.d-press-hint{position:absolute;left:12px;bottom:6px;margin:0;font-family:var(--mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}"},{"id":"overscroll-bounce","cat":"手势","t":"过度滚动回弹","en":"overscroll bounce","d":"端点后的位移按 0.3 折算，并且封顶 40px：折算到 0.5 像列表从手里滑走，到 0.15 又几乎看不出被拉住；40px 是 116px 视窗里还能看见最后一行、又明显变形的临界，超过就只剩一条空白。回弹给 280ms 而不是 180ms，因为 180ms 会有一声「啪」的惊吓感，橡皮筋要慢一点才像有弹性。","body":"<div class=\"d-over\" role=\"group\" aria-label=\"过度滚动回弹\">\n  <div class=\"d-over-view\" tabindex=\"0\" role=\"group\" aria-label=\"滚动列表，到端点再拖会拉伸，方向键也行\">\n    <div class=\"d-over-list\">\n      <div class=\"d-over-row\"><b>01</b><span>校对</span></div>\n      <div class=\"d-over-row\"><b>02</b><span>付印</span></div>\n      <div class=\"d-over-row\"><b>03</b><span>折页</span></div>\n      <div class=\"d-over-row\"><b>04</b><span>装订</span></div>\n      <div class=\"d-over-row\"><b>05</b><span>裁切</span></div>\n      <div class=\"d-over-row\"><b>06</b><span>签样</span></div>\n    </div>\n  </div>\n  <div class=\"d-over-bar\" aria-hidden=\"true\"><i class=\"d-over-thumb\"></i></div>\n  <p class=\"d-over-hint\">端点后每 1px 折成 0.3px</p>\n</div>","css":".d-over{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-over-view{position:absolute;left:14px;top:12px;width:220px;height:112px;overflow:hidden;border:1px solid var(--line);border-radius:6px;background:var(--paper);cursor:grab;touch-action:none;user-select:none}\n.d-over-view[data-end=\"t\"]{border-top-color:var(--ink)}\n.d-over-view[data-end=\"b\"]{border-bottom-color:var(--ink)}\n.d-over-view:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-over-view[data-drag]{cursor:grabbing}\n.d-over-list{will-change:transform}\n.d-over-row{display:flex;align-items:center;gap:8px;height:34px;padding:0 10px;border-bottom:1px solid var(--line)}\n.d-over-row b{font-family:var(--mono);font-size:9px;font-weight:400;letter-spacing:.08em;color:var(--faint)}\n.d-over-row span{font-size:11px}\n.d-over-bar{position:absolute;left:246px;top:12px;width:1px;height:112px;background:var(--line)}\n.d-over-thumb{position:absolute;left:0;top:0;width:1px;background:var(--ink)}\n.d-over-hint{position:absolute;left:14px;bottom:8px;margin:0;font-family:var(--mono);font-size:9px;line-height:1.6;color:var(--faint)}"},{"id":"pinch-zoom-tile","cat":"手势","t":"捏合缩放","en":"pinch zoom","d":"上下限锁 1.00 和 2.40：1 是「刚到边」而不是随便定的下限，2.40 是这张 200px 的图放大后网点还认得出的极限。越界先按 0.25 折算再回弹，所以推到 3.00 也不会突然停住——突然停住人会以为手势坏了，而不是以为到底了。回弹 280ms 用带过冲的物理曲线，越界那一刻的「拽回来」才感觉得到。","body":"<div class=\"d-zoom\" role=\"group\" aria-label=\"捏合缩放\">\n  <div class=\"d-zoom-frame\">\n    <div class=\"d-zoom-tile\" tabindex=\"0\" role=\"group\" aria-label=\"Ctrl 加滚轮或双指缩放，方向键也行\">\n      <i class=\"d-zoom-v\" aria-hidden=\"true\"></i>\n      <i class=\"d-zoom-h\" aria-hidden=\"true\"></i>\n      <i class=\"d-zoom-dot\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n  <b class=\"d-zoom-num\">1.00×</b>\n  <p class=\"d-zoom-hint\">1.00–2.40 之间 · 越界按 0.25 折算</p>\n</div>","css":".d-zoom{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-zoom-frame{position:absolute;left:12px;top:14px;width:200px;height:112px;border:1px solid var(--line);border-radius:6px;background:var(--bg);overflow:hidden}\n.d-zoom-tile{position:absolute;inset:0;background:var(--paper);transform-origin:50% 50%;will-change:transform;cursor:zoom-in;touch-action:none}\n.d-zoom-v{position:absolute;left:66px;top:0;bottom:0;width:1px;background:var(--line)}\n.d-zoom-h{position:absolute;left:0;right:0;top:60%;height:1px;background:var(--line)}\n.d-zoom-dot{position:absolute;left:50%;top:50%;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:2px;background:#2b4b8f}\n.d-zoom-tile:focus-visible{outline:1px solid var(--ink);outline-offset:-3px}\n.d-zoom-num{position:absolute;left:228px;top:14px;font-family:var(--mono);font-size:13px;line-height:1.2;letter-spacing:.02em;color:var(--muted)}\n.d-zoom[data-edge] .d-zoom-num{color:var(--ink)}\n.d-zoom-hint{position:absolute;left:12px;bottom:6px;margin:0;font-family:var(--mono);font-size:9px;line-height:1.6;color:var(--faint)}"},{"id":"two-finger-rotate","cat":"手势","t":"双指旋转","en":"two-finger rotate","d":"角度按「指针相对卡心的夹角」算，不按横向位移：夹角等于真的两根手指在转，位移算法一转过头就会反向跳，人立刻知道是假的。松手时 6° 内吸到 15° 的刻度上——手很难停准，吸一下才有「卡进档位」的手感，而 15° 是排版里斜线最常用的档，再密就分不出区别。读数放卡外，是因为卡在转，字跟着转就没法看。","body":"<div class=\"d-rot\" role=\"group\" aria-label=\"双指旋转\">\n  <div class=\"d-rot-stage\">\n    <i class=\"d-rot-axis-h\" aria-hidden=\"true\"></i>\n    <i class=\"d-rot-axis-v\" aria-hidden=\"true\"></i>\n    <div class=\"d-rot-card\" tabindex=\"0\" role=\"button\" aria-label=\"按住 Shift 拖动旋转，或用左右方向键，Enter 归零\"><b>旋转</b><em>Shift + 拖</em></div>\n  </div>\n  <b class=\"d-rot-num\">0°</b>\n  <p class=\"d-rot-hint\">Shift + 拖 · 0° 基准</p>\n</div>","css":".d-rot{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-rot-stage{position:absolute;left:14px;top:16px;width:200px;height:112px;border:1px dashed var(--line);border-radius:6px}\n.d-rot-axis-h{position:absolute;left:0;right:0;top:50%;height:1px;background:var(--line)}\n.d-rot-axis-v{position:absolute;top:0;bottom:0;left:50%;width:1px;background:var(--line)}\n.d-rot-card{position:absolute;left:50%;top:50%;width:112px;height:72px;margin:-36px 0 0 -56px;display:flex;flex-direction:column;justify-content:space-between;padding:8px 10px;background:var(--paper);border:1px solid var(--ink);border-radius:6px;box-shadow:0 1px 0 var(--line);cursor:grab;touch-action:none;user-select:none;will-change:transform}\n.d-rot-card b{font-size:11px;font-weight:650;letter-spacing:.02em}\n.d-rot-card em{font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}\n.d-rot-card[data-drag]{cursor:grabbing;box-shadow:0 12px 24px -8px #20241e26}\n.d-rot-card:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-rot-num{position:absolute;right:14px;top:16px;font-family:var(--mono);font-size:21px;line-height:1.05;letter-spacing:-.02em;color:#2b4b8f}\n.d-rot-hint{position:absolute;left:14px;bottom:8px;margin:0;font-family:var(--mono);font-size:9px;line-height:1.6;color:var(--faint)}"},{"id":"caption-zoom","cat":"内容","t":"图注联动","en":"caption link","d":"图注列锁死 120px、不随字数伸缩，换行时右边缘不动，图注才不会把版面顶来顶去；上移只给 2px 配物理曲线的过冲，多 1px 像在跳，少 1px 看不出和热点是一对。热点用 --x/--y 百分比定位，换一张图不必重算坐标，这套联动才能直接搬走。","body":"<div class=\"d-cz\"><div class=\"d-cz-plate\"><i class=\"d-cz-rule d-cz-rule-a\"></i><i class=\"d-cz-rule d-cz-rule-b\"></i><i class=\"d-cz-rule d-cz-rule-c\"></i><button class=\"d-cz-dot\" type=\"button\" style=\"--x:16%;--y:18%\" aria-label=\"热点 1：招牌底板\"></button><button class=\"d-cz-dot\" type=\"button\" style=\"--x:62%;--y:40%\" aria-label=\"热点 2：字高\"></button><button class=\"d-cz-dot\" type=\"button\" style=\"--x:32%;--y:68%\" aria-label=\"热点 3：字距\"></button></div><ul class=\"d-cz-list\"><li class=\"d-cz-cap\">底板 1.2×0.6m</li><li class=\"d-cz-cap\">字高 38cm 可辨</li><li class=\"d-cz-cap\">字距 4cm 不糊</li></ul></div>","css":".d-cz{display:flex;gap:12px;width:300px;max-width:100%;font-family:var(--sans)}\n.d-cz-plate{position:relative;flex:0 0 156px;width:156px;height:118px;border:1px solid var(--line);border-radius:2px;background:var(--bg);overflow:hidden}\n.d-cz-rule{position:absolute;background:var(--line)}\n.d-cz-rule-a{left:0;right:0;top:38px;height:1px}\n.d-cz-rule-b{left:0;right:0;top:82px;height:1px}\n.d-cz-rule-c{top:0;bottom:0;left:96px;width:1px}\n.d-cz-dot{position:absolute;left:var(--x);top:var(--y);width:12px;height:12px;padding:0;border:1px solid var(--ink);border-radius:50%;background:var(--paper);cursor:pointer;transform:scale(1);transition:background-color 120ms linear,transform 180ms cubic-bezier(.34,1.56,.64,1)}\n.d-cz-dot.is-on{background:#c2402a;transform:scale(1.2)}\n.d-cz-dot:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-cz-list{flex:0 0 120px;width:120px;margin:0;padding:2px 0 0;list-style:none;display:flex;flex-direction:column;gap:7px}\n.d-cz-cap{display:block;font-size:10.5px;line-height:1.5;color:var(--faint);transform:translateY(0);transition:color 180ms cubic-bezier(.34,1.56,.64,1),transform 180ms cubic-bezier(.34,1.56,.64,1)}\n.d-cz-cap.is-hot{color:var(--ink);transform:translateY(-2px)}"},{"id":"quote-block","cat":"内容","t":"引段块","en":"quote block","d":"竖线只在左侧留 1px、不加粗，因为引文靠留白和字号分层，线一粗就变成警示条；出处压在 10px 等宽字上，比引文低两档，读者先读句子后读来源。「上下文」默认合起、展开走 280ms 印刷曲线，高度只放 44px——正好两行批注，再多这一块就压过原文。","body":"<figure class=\"d-qb\"><blockquote class=\"d-qb-text\">「留白不是空，是把话说慢一点。」</blockquote><figcaption class=\"d-qb-src\">—— 排字房札记 · 第 04 页</figcaption><div class=\"d-qb-more\"><p class=\"d-qb-ctx\">这句原本是一条页边旁批，写在字号表右侧；批注比正文大两号，隔着排版台也要看清。</p></div><button class=\"d-qb-btn\" type=\"button\" aria-expanded=\"false\">展开上下文</button></figure>","css":".d-qb{width:300px;max-width:100%;margin:0;padding:2px 0 2px 12px;border-left:1px solid var(--ink)}\n.d-qb-text{margin:0;font-family:var(--serif);font-size:14px;line-height:1.7;color:var(--ink)}\n.d-qb-src{margin-top:4px;font-family:var(--mono);font-size:10px;line-height:1.6;color:var(--faint)}\n.d-qb-more{max-height:0;overflow:hidden;transition:max-height 280ms cubic-bezier(.2,.75,.25,1)}\n.d-qb-ctx{margin:0;padding-top:6px;font-size:11px;line-height:1.65;color:var(--muted)}\n.d-qb.is-open .d-qb-more{max-height:44px}\n.d-qb-btn{margin-top:6px;font-family:var(--mono);font-size:10px;letter-spacing:.08em;padding:4px 8px;border:1px solid var(--line);border-radius:2px;background:var(--paper);color:var(--muted);cursor:pointer;transition:border-color 120ms cubic-bezier(.2,.75,.25,1),color 120ms cubic-bezier(.2,.75,.25,1)}\n.d-qb-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-qb-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"ribbon-note","cat":"内容","t":"旁注便签","en":"ribbon note","d":"便签歪 1.5° 是「贴上去而不是插进去」的最小可见角度，再多就像坏了；1px 硬边不改成软阴影，便签才留在纸面上而不浮起来。展开只放 54px、用 280ms 印刷曲线，因为旁注的职责是补一句话，写长就成了第二篇正文。","body":"<div class=\"d-rn\"><p class=\"d-rn-text\">正文往左让出一列，右边贴一张便签。<b>注释不打断句子</b>，读者愿意才展开。</p><aside class=\"d-rn-note\"><i class=\"d-rn-tab\"></i><button class=\"d-rn-btn\" type=\"button\" aria-expanded=\"false\">旁注 03 · 展开</button><div class=\"d-rn-more\"><p class=\"d-rn-ctx\">边注写短些：三行以内，读不完就不算旁注。</p></div></aside></div>","css":".d-rn{position:relative;width:300px;max-width:100%;height:150px;padding-top:4px;font-family:var(--sans)}\n.d-rn-text{width:158px;margin:0;font-size:11px;line-height:1.75;color:var(--muted)}\n.d-rn-text b{font-weight:650;color:var(--ink)}\n.d-rn-note{position:absolute;top:10px;right:2px;width:114px;padding:7px 9px 8px;border:1px solid var(--ink);border-radius:2px;background:var(--paper);transform:rotate(-1.5deg);box-shadow:0 1px 0 var(--line)}\n.d-rn-tab{display:block;height:1px;margin-bottom:6px;background:#e8c34a}\n.d-rn-btn{width:100%;padding:2px 0;border:0;border-bottom:1px solid var(--line);background:transparent;font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--ink);text-align:left;cursor:pointer}\n.d-rn-btn:focus-visible{outline:1px solid var(--ink);outline-offset:1px}\n.d-rn-more{max-height:0;overflow:hidden;transition:max-height 280ms cubic-bezier(.2,.75,.25,1)}\n.d-rn-ctx{margin:0;padding-top:5px;font-size:10px;line-height:1.6;color:var(--muted)}\n.d-rn.is-open .d-rn-more{max-height:58px}"},{"id":"svg-blob-morph","cat":"SVG 与路径","t":"有机形变","en":"blob morph","d":"八个极径按曲线插值再拼成 Q 路径，而不是给 d 做过渡——d 只有 Chromium 能补间；曲线在 1.56 那里过冲，半径会多鼓一点再回来，这才像一个会呼吸的墨点，等比缩放是死板的。半径上限压到 1.14 倍，过冲也不会蹭到边框。","body":"<div class=\"d-bm\"><svg class=\"d-bm-art\" viewBox=\"0 0 120 120\" aria-hidden=\"true\"><path class=\"d-bm-shape\" d=\"M60 27Q69 27 75 33Q82 39 80 47Q79 55 74 61Q69 68 62 71Q54 74 47 70Q40 66 38 59Q36 52 39 45Q42 37 49 32Q54 27 60 27Z\"/></svg><button class=\"d-bm-btn\" type=\"button\" aria-pressed=\"true\">停</button></div>","css":".d-bm{display:flex;align-items:center;gap:16px}\n.d-bm-art{width:120px;height:120px}\n.d-bm-shape{fill:#c2402a;stroke:var(--ink);stroke-width:1}\n.d-bm-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-bm-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-bm-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"svg-clip-reveal","cat":"SVG 与路径","t":"图形裁剪揭示","en":"svg clip reveal","d":"clipPath 里的 rect 必须设 transform-box:fill-box，否则 transform-origin 按 SVG 用户坐标算，揭示会从画布左上角漏出来，而不是从你点的那个角长出来。点哪儿就从哪个角开始——这是人翻纸样时的习惯。","body":"<div class=\"d-cr\"><svg class=\"d-cr-art\" viewBox=\"0 0 220 120\" aria-hidden=\"true\"><defs><clipPath id=\"d-svg-clip-reveal-win\" clipPathUnits=\"userSpaceOnUse\"><rect class=\"d-cr-cut\" x=\"0\" y=\"0\" width=\"220\" height=\"120\"/></clipPath></defs><g clip-path=\"url(#d-svg-clip-reveal-win)\"><rect class=\"d-cr-block\" x=\"20\" y=\"20\" width=\"180\" height=\"80\" rx=\"6\"/><circle class=\"d-cr-ring\" cx=\"186\" cy=\"34\" r=\"26\"/><path class=\"d-cr-rule\" d=\"M20 100H200\"/></g></svg><button class=\"d-cr-btn\" type=\"button\">再揭示</button></div>","css":".d-cr{display:flex;flex-direction:column;align-items:flex-start;gap:8px}\n.d-cr-art{display:block;width:220px;height:120px;cursor:pointer}\n.d-cr-block{fill:#2b4b8f}\n.d-cr-ring{fill:none;stroke:var(--ink);stroke-width:1}\n.d-cr-rule{stroke:var(--line);stroke-width:1}\n.d-cr-cut{transform-box:fill-box;transform-origin:100% 100%;transform:scale(1)}\n.d-cr.is-open .d-cr-cut{animation:d-svg-clip-reveal-open 900ms cubic-bezier(.2,.75,.25,1) both}\n@keyframes d-svg-clip-reveal-open{from{transform:scale(0)}to{transform:scale(1)}}\n.d-cr-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-cr-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-cr-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"svg-dash-progress","cat":"SVG 与路径","t":"圆环路径进度","en":"dash progress","d":"环和数字共用同一个 requestAnimationFrame 时钟，才不会出现环走到 78%、数字还停在 65% 的错位；周长用 getTotalLength() 现算而不是写死 126，换成椭圆或非圆路径也不用手改数字。","body":"<div class=\"d-dp\"><div class=\"d-dp-ring\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\"><svg class=\"d-dp-art\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><circle class=\"d-dp-track\" cx=\"24\" cy=\"24\" r=\"20\"/><circle class=\"d-dp-bar\" cx=\"24\" cy=\"24\" r=\"20\"/></svg><b class=\"d-dp-num\">0%</b></div><button class=\"d-dp-btn\" type=\"button\">重跑</button></div>","css":".d-dp{display:flex;align-items:center;gap:16px}\n.d-dp-ring{position:relative;display:grid;place-items:center;width:72px;height:72px}\n.d-dp-art{position:absolute;inset:0;width:72px;height:72px;transform:rotate(-90deg)}\n.d-dp-track,.d-dp-bar{fill:none;stroke-width:1}\n.d-dp-track{stroke:var(--line)}\n.d-dp-bar{stroke:#2b4b8f;stroke-dasharray:126;stroke-dashoffset:126}\n.d-dp-num{font-family:var(--font-mono);font-size:var(--fs-13);font-variant-numeric:tabular-nums;min-width:34px;text-align:center;color:var(--ink)}\n.d-dp-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-dp-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-dp-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"svg-draw-line","cat":"SVG 与路径","t":"描边生长","en":"stroke draw","d":"先用 2/4 的虚线铺一遍画稿，墨线再压着它走一趟——读者认的是「起稿→上墨」这个作画顺序，而不是一条线忽然出现；dasharray 取 271 是这条曲线的实长上取整，短一截就会在收笔处提前断掉。","body":"<div class=\"d-dl\"><svg class=\"d-dl-art\" viewBox=\"0 0 260 96\" aria-hidden=\"true\"><path class=\"d-dl-sketch\" d=\"M14 76C46 76 52 24 92 22C132 20 148 74 188 64C214 57 226 40 236 26\"/><path class=\"d-dl-ink\" d=\"M14 76C46 76 52 24 92 22C132 20 148 74 188 64C214 57 226 40 236 26\"/></svg><button class=\"d-dl-btn\" type=\"button\">重描一遍</button></div>","css":".d-dl{display:flex;flex-direction:column;align-items:flex-start;gap:8px;width:260px}\n.d-dl-art{display:block;width:260px;height:96px;overflow:visible}\n.d-dl-sketch,.d-dl-ink{fill:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round}\n.d-dl-sketch{stroke:var(--faint);stroke-dasharray:2 4}\n.d-dl-ink{stroke:var(--ink);stroke-dasharray:271;stroke-dashoffset:0}\n.d-dl.is-run .d-dl-ink{animation:d-svg-draw-line-ink 900ms cubic-bezier(.2,.75,.25,1) both}\n@keyframes d-svg-draw-line-ink{from{stroke-dashoffset:271}to{stroke-dashoffset:0}}\n.d-dl-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer;transition:border-color 120ms cubic-bezier(.2,.75,.25,1),color 120ms cubic-bezier(.2,.75,.25,1)}\n.d-dl-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-dl-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"svg-fill-wipe","cat":"SVG 与路径","t":"填充扫过","en":"fill wipe","d":"用一张会长高的白板当遮罩，而不是给 fill 做透明度过渡——fill 淡入一定会出现中间灰调，而刮墨落纸是硬边；板子以底边为原点，墨就从下往上被刮过去，露出边上那圈 1px 的印版线。","body":"<div class=\"d-fw\"><svg class=\"d-fw-art\" viewBox=\"0 0 220 120\" aria-hidden=\"true\"><defs><mask class=\"d-fw-mask\" id=\"d-svg-fill-wipe-m\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"220\" height=\"120\"><rect class=\"d-fw-blade\" x=\"22\" y=\"28\" width=\"176\" height=\"64\"/></mask></defs><path class=\"d-fw-ink\" d=\"M22 28H198V92H22Z\" mask=\"url(#d-svg-fill-wipe-m)\"/><circle class=\"d-fw-ring\" cx=\"198\" cy=\"28\" r=\"22\"/><path class=\"d-fw-line\" d=\"M22 28H198V92H22Z\"/></svg><button class=\"d-fw-btn\" type=\"button\">再刮一次</button></div>","css":".d-fw{display:flex;flex-direction:column;align-items:flex-start;gap:8px;width:220px}\n.d-fw-art{display:block;width:220px;height:120px;overflow:visible}\n.d-fw-mask{mask-type:alpha}\n.d-fw-blade{fill:var(--paper);transform-box:fill-box;transform-origin:50% 100%;transform:scaleY(0)}\n.d-fw-ink{fill:#c2402a}\n.d-fw-ring{fill:none;stroke:var(--ink);stroke-width:1}\n.d-fw-line{fill:none;stroke:var(--ink);stroke-width:1}\n.d-fw.is-wipe .d-fw-blade{animation:d-svg-fill-wipe-blade 900ms cubic-bezier(.2,.75,.25,1) both}\n@keyframes d-svg-fill-wipe-blade{from{transform:scaleY(0)}to{transform:scaleY(1)}}\n.d-fw-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-fw-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-fw-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"svg-morph-icon","cat":"SVG 与路径","t":"图标路径变形","en":"icon path morph","d":"两条箭头的 d 命令数与顺序完全一样，只有端点互换，所以交叉淡入的那一帧在空间里几乎重合，看不出是两个图形；命令数不同的图标硬切会在中途抖一下，这就是必须先对齐 d 结构的原因。","body":"<div class=\"d-mi\"><button class=\"d-mi-btn\" type=\"button\" aria-pressed=\"false\" aria-label=\"切换箭头方向\"><svg class=\"d-mi-art\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path class=\"d-mi-up\" d=\"M24 40V8M14 18L24 8L34 18\"/><path class=\"d-mi-down\" d=\"M24 8V40M14 30L24 40L34 30\"/></svg></button></div>","css":".d-mi-btn{display:grid;place-items:center;width:64px;height:64px;border:1px solid var(--line);border-radius:10px;background:var(--paper);cursor:pointer;transition:border-color 180ms cubic-bezier(.34,1.56,.64,1)}\n.d-mi-btn:hover{border-color:var(--ink)}\n.d-mi-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-mi-art{width:48px;height:48px}\n.d-mi-up,.d-mi-down{fill:none;stroke:#2b4b8f;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;transform-box:fill-box;transform-origin:50% 50%;transition:opacity 180ms cubic-bezier(.34,1.56,.64,1),transform 180ms cubic-bezier(.34,1.56,.64,1)}\n.d-mi-up{opacity:1;transform:scale(1)}\n.d-mi-down{opacity:0;transform:scale(.8)}\n.d-mi-btn.is-down .d-mi-up{opacity:0;transform:scale(.8)}\n.d-mi-btn.is-down .d-mi-down{opacity:1;transform:scale(1)}"},{"id":"svg-motion-path","cat":"SVG 与路径","t":"沿路径运动","en":"motion path","d":"圆点用 offset-path 沿弧长跑，中段曲率最大的地方也不会被拽快——写四组 translate 关键帧做不到匀速；offset-rotate 必须设 0deg 关掉自动朝向，否则点会自己跟着切线打转。","body":"<div class=\"d-mp\"><svg class=\"d-mp-art\" viewBox=\"0 0 260 112\" aria-hidden=\"true\"><path class=\"d-mp-curve\" d=\"M14 88C58 88 62 26 108 26S164 88 208 66 236 22 246 30\"/></svg><i class=\"d-mp-dot\"></i><button class=\"d-mp-btn\" type=\"button\" aria-pressed=\"false\">暂停</button></div>","css":".d-mp{position:relative;width:260px;height:112px}\n.d-mp-art{display:block;width:260px;height:112px}\n.d-mp-curve{fill:none;stroke:var(--line);stroke-width:1}\n.d-mp-dot{position:absolute;left:0;top:0;width:6px;height:6px;border-radius:999px;background:#c2402a;offset-path:path(\"M14 88C58 88 62 26 108 26S164 88 208 66 236 22 246 30\");offset-rotate:0deg;animation:d-svg-motion-path-run 900ms linear infinite}\n@keyframes d-svg-motion-path-run{from{offset-distance:0%}to{offset-distance:100%}}\n.d-mp.is-paused .d-mp-dot{animation-play-state:paused}\n.d-mp-btn{position:absolute;right:0;bottom:0;font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-mp-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-mp-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@media (prefers-reduced-motion: reduce){.d-mp-dot{animation:none;offset-distance:100%}}"},{"id":"svg-noise-grain","cat":"SVG 与路径","t":"颗粒质感","en":"noise grain","d":"颗粒层比色块大 6px 再用同形状的 clip 裁住，抖动只发生在这 6px 余量里，边缘才不会露白；alpha 从噪声的 .6R+.6G+.6B-.55 取，只有噪声高的地方落墨，看着才是撒点而不是蒙一层灰。整页最大的一块实色留在这里，因为它得当印刷样张。","body":"<div class=\"d-ng\"><svg class=\"d-ng-art\" viewBox=\"0 0 168 104\" aria-hidden=\"true\"><defs><clipPath id=\"d-svg-noise-grain-c\"><rect x=\"0\" y=\"0\" width=\"168\" height=\"104\"/></clipPath><filter id=\"d-svg-noise-grain-f\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" seed=\"7\" stitchTiles=\"stitch\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .6 .6 .6 0 -.55\"/></filter></defs><rect class=\"d-ng-block\" x=\"0\" y=\"0\" width=\"168\" height=\"104\"/><g class=\"d-ng-film\" clip-path=\"url(#d-svg-noise-grain-c)\"><rect class=\"d-ng-grain\" x=\"-6\" y=\"-6\" width=\"180\" height=\"116\" filter=\"url(#d-svg-noise-grain-f)\"/></g></svg><button class=\"d-ng-btn\" type=\"button\" aria-pressed=\"false\">网点 细</button></div>","css":".d-ng{display:flex;flex-direction:column;align-items:flex-start;gap:8px}\n.d-ng-art{display:block;width:168px;height:104px}\n.d-ng-block{fill:#e8c34a}\n.d-ng-film{animation:d-svg-noise-grain-jit 900ms steps(6) infinite}\n.d-ng-grain{opacity:.38;mix-blend-mode:multiply}\n@keyframes d-svg-noise-grain-jit{from{transform:translate(0,0)}to{transform:translate(6px,6px)}}\n.d-ng-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-ng-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-ng-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@media (prefers-reduced-motion: reduce){.d-ng-film{animation:none}}"},{"id":"svg-stagger-dots","cat":"SVG 与路径","t":"点阵依次点亮","en":"staggered dots","d":"六格、每格迟 120ms：最后一格在 600ms 亮起，赶在第一格 900ms 复亮之前把这一轮走完，再加一格就会和第一轮撞上，先后顺序就读不出来了。点用实心圆不用方，12px 的方块会被眼睛读成表格线。","body":"<div class=\"d-sd\"><div class=\"d-sd-grid\"><i class=\"d-sd-dot\"></i><i class=\"d-sd-dot\"></i><i class=\"d-sd-dot\"></i><i class=\"d-sd-dot\"></i><i class=\"d-sd-dot\"></i><i class=\"d-sd-dot\"></i></div><button class=\"d-sd-btn\" type=\"button\" aria-pressed=\"false\">暂停</button></div>","css":".d-sd{display:flex;align-items:center;gap:16px}\n.d-sd-grid{display:grid;grid-template-columns:repeat(3,12px);gap:16px}\n.d-sd-dot{--k:0;width:12px;height:12px;border-radius:999px;background:#2b4b8f;opacity:.22;animation:d-svg-stagger-dots-scan 900ms linear infinite;animation-delay:calc(120ms * var(--k))}\n.d-sd-dot:nth-child(2){--k:1}\n.d-sd-dot:nth-child(3){--k:2}\n.d-sd-dot:nth-child(4){--k:3}\n.d-sd-dot:nth-child(5){--k:4}\n.d-sd-dot:nth-child(6){--k:5}\n@keyframes d-svg-stagger-dots-scan{0%{opacity:.22}20%{opacity:1}55%{opacity:1}75%{opacity:.22}100%{opacity:.22}}\n.d-sd.is-paused .d-sd-dot{animation-play-state:paused}\n.d-sd-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-sd-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-sd-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@media (prefers-reduced-motion: reduce){.d-sd-dot{animation:none;opacity:1}}"},{"id":"svg-text-on-path","cat":"SVG 与路径","t":"文字沿弧线","en":"text on path","d":"startOffset 50% 配 text-anchor middle，字串的中点才落在弧顶；中文字面比西文高，dominant-baseline 设 middle 才能让弧线从字腰穿过去，不然整行会漂在弧线上方一截。21px 是本条唯一的大字号，因为弧形排字本来就该占版面。","body":"<div class=\"d-tp\"><svg class=\"d-tp-art\" viewBox=\"0 0 260 118\" aria-hidden=\"true\"><defs><path id=\"d-svg-text-on-path-arc\" d=\"M22 106Q130 8 238 106\"/></defs><use class=\"d-tp-guide\" href=\"#d-svg-text-on-path-arc\"/><text class=\"d-tp-txt\"><textPath class=\"d-tp-run\" href=\"#d-svg-text-on-path-arc\" startOffset=\"50%\" text-anchor=\"middle\">铅字排在弧上</textPath></text></svg><button class=\"d-tp-btn\" type=\"button\" aria-pressed=\"false\">显示参考线</button></div>","css":".d-tp{display:flex;flex-direction:column;align-items:flex-start;gap:8px}\n.d-tp-art{display:block;width:260px;height:118px;overflow:visible}\n.d-tp-guide{fill:none;stroke:var(--faint);stroke-width:1;stroke-dasharray:2 4;opacity:0;transition:opacity 280ms cubic-bezier(.2,.75,.25,1)}\n.d-tp.is-guide .d-tp-guide{opacity:1}\n.d-tp-txt{fill:var(--ink);font-family:var(--font-sans);font-size:21px;font-weight:600;letter-spacing:.06em;dominant-baseline:middle}\n.d-tp-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-tp-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-tp-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"card-flip-3d","cat":"3D 与透视","t":"卡片翻面","en":"card flip","d":"翻面用 280ms：180° 要让眼睛看清「转的是同一张卡」，再短只剩闪一下，900ms 又会两面叠在半途、分不清哪面是新的。参数表放背面，因为翻面这个动作已经说明是同一张卡的另一面，不必再换位置。","body":"<button type=\"button\" class=\"d-cf3d\" aria-pressed=\"false\" aria-label=\"卡片翻面：正面看名称，背面看参数\"><span class=\"d-cf3d-in\"><span class=\"d-cf3d-face\"><span class=\"d-cf3d-k\">规格 · spec</span><span class=\"d-cf3d-name\">卡片 A</span><span class=\"d-cf3d-note\">点一下，背面是参数表</span></span><span class=\"d-cf3d-face d-cf3d-back\"><span class=\"d-cf3d-row\"><span class=\"d-cf3d-k\">尺寸</span><span class=\"d-cf3d-v\">300 × 148</span></span><span class=\"d-cf3d-row\"><span class=\"d-cf3d-k\">圆角</span><span class=\"d-cf3d-v\">10</span></span><span class=\"d-cf3d-row\"><span class=\"d-cf3d-k\">翻面</span><span class=\"d-cf3d-v\">280ms</span></span></span></span></button>","css":".d-cf3d{position:relative;box-sizing:border-box;width:300px;max-width:100%;height:148px;padding:0;border:0;background:none;font:inherit;color:inherit;text-align:left;perspective:900px;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.d-cf3d-in{position:absolute;inset:0;display:block;transform-style:preserve-3d;transition:transform 280ms cubic-bezier(.34,1.56,.64,1)}\n.d-cf3d-on .d-cf3d-in{transform:rotateY(180deg)}\n.d-cf3d-face{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;gap:8px;padding:12px 16px;box-sizing:border-box;border:1px solid var(--line);border-radius:10px;background:var(--paper);box-shadow:inset 0 1px 0 #fff5;backface-visibility:hidden}\n.d-cf3d-back{transform:rotateY(180deg);gap:2px}\n.d-cf3d-k{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;color:var(--faint);text-transform:uppercase}\n.d-cf3d-name{font-size:21px;font-weight:650;letter-spacing:-.01em;color:var(--ink)}\n.d-cf3d-note{font-size:11px;color:var(--muted)}\n.d-cf3d-row{display:flex;justify-content:space-between;gap:8px;padding:2px 0;border-bottom:1px solid var(--line);font-size:11px}\n.d-cf3d-row:last-child{border-bottom:0}\n.d-cf3d-v{font-family:var(--font-mono);color:var(--ink)}\n.d-cf3d:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"carousel-coverflow","cat":"3D 与透视","t":"封面轮播","en":"coverflow","d":"侧过身 34° 是「明显侧着」又不至于把标题折到看不见的角度，两侧再缩到 .82、压到 72% 不透就分出了主次。中间那张铺满靛墨是本组唯一的大色块：轮播的活是挑出一张，只靠描边看不出谁被选中。","body":"<div class=\"d-cf\" role=\"group\" aria-label=\"封面轮播：点两侧的封面把它挪到中间\"><button type=\"button\" class=\"d-cf-item\" aria-current=\"false\"><span class=\"d-cf-n\">01</span><span class=\"d-cf-t\">纸样</span></button><button type=\"button\" class=\"d-cf-item\" aria-current=\"true\"><span class=\"d-cf-n\">02</span><span class=\"d-cf-t\">印版</span></button><button type=\"button\" class=\"d-cf-item\" aria-current=\"false\"><span class=\"d-cf-n\">03</span><span class=\"d-cf-t\">装订</span></button></div>","css":".d-cf{position:relative;width:300px;max-width:100%;height:150px;perspective:640px}\n.d-cf-item{position:absolute;top:8px;left:50%;width:132px;height:132px;margin-left:-66px;display:flex;flex-direction:column;justify-content:flex-end;gap:2px;padding:10px;box-sizing:border-box;border:1px solid var(--line);border-radius:10px;background:var(--paper);color:var(--ink);font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform 280ms cubic-bezier(.34,1.56,.64,1),opacity 280ms cubic-bezier(.34,1.56,.64,1),background-color 280ms cubic-bezier(.34,1.56,.64,1),border-color 280ms cubic-bezier(.34,1.56,.64,1),color 280ms cubic-bezier(.34,1.56,.64,1)}\n.d-cf-item[data-pos=\"0\"]{transform:translateX(0) rotateY(0) scale(1);z-index:3;background:#2b4b8f;border-color:#2b4b8f;color:var(--paper)}\n.d-cf-item[data-pos=\"-1\"]{transform:translateX(-88px) rotateY(34deg) scale(.82);z-index:2;opacity:.72}\n.d-cf-item[data-pos=\"1\"]{transform:translateX(88px) rotateY(-34deg) scale(.82);z-index:2;opacity:.72}\n.d-cf-item:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-cf-n{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;opacity:.7}\n.d-cf-t{font-size:15px}"},{"id":"cube-flip","cat":"3D 与透视","t":"立方体翻转","en":"cube flip","d":"90° 是面间夹角，多一度露缝、少一度会看到第二条面；两面必须同尺寸同圆角，否则转过去边缘对不齐，这是立方体最容易露馅的地方。B 面给 34px 大字压在朱墨块上：换面时最先被认出来的是整块颜色，不是小字。","body":"<button type=\"button\" class=\"d-cube\" aria-pressed=\"false\" aria-label=\"立方体翻转：A 面与 B 面互换\"><span class=\"d-cube-in\"><span class=\"d-cube-face d-cube-a\"><span class=\"d-cube-ch\">A</span><span class=\"d-cube-k\">正面</span></span><span class=\"d-cube-face d-cube-b\"><span class=\"d-cube-ch\">B</span><span class=\"d-cube-k\">底面</span></span></span></button>","css":".d-cube{position:relative;box-sizing:border-box;width:300px;max-width:100%;height:150px;padding:0;border:0;background:none;font:inherit;color:inherit;cursor:pointer;perspective:700px;-webkit-tap-highlight-color:transparent}\n.d-cube-in{position:absolute;left:50%;top:8px;width:124px;height:124px;margin-left:-62px;display:block;transform-style:preserve-3d;transition:transform 280ms cubic-bezier(.34,1.56,.64,1)}\n.d-cube-on .d-cube-in{transform:rotateX(90deg)}\n.d-cube-face{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;box-sizing:border-box;border:1px solid var(--line);border-radius:6px;background:var(--paper);backface-visibility:hidden}\n.d-cube-a{transform:translateZ(62px)}\n.d-cube-b{transform:rotateX(-90deg) translateZ(62px);background:#c2402a;border-color:#c2402a;color:var(--paper)}\n.d-cube-ch{font-size:34px;font-weight:700;line-height:1;letter-spacing:-.03em}\n.d-cube-k{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;opacity:.65}\n.d-cube:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"depth-parallax","cat":"3D 与透视","t":"分层视差","en":"depth parallax","d":"三层靠 translateZ 分景深，不手算每层位移：场景绕 Y 轴转 11° 时，近层在屏幕上走过的像素自然多于远层，跟真实透视一致。11° / 9° 是上限，再转背板边缘就会露出空边；方向键一次 3°，和鼠标手感同档。","body":"<div class=\"d-dp\" tabindex=\"0\" role=\"group\" aria-label=\"分层视差：鼠标移动或方向键转动景深\"><div class=\"d-dp-scene\"><span class=\"d-dp-plane d-dp-back\"></span><span class=\"d-dp-plane d-dp-mid\"><span class=\"d-dp-k\">景深三层</span></span><span class=\"d-dp-plane d-dp-front\"><span class=\"d-dp-v\">+60</span></span></div></div>","css":".d-dp{box-sizing:border-box;width:300px;max-width:100%;height:150px;border:1px solid var(--line);border-radius:10px;background:var(--bg);perspective:560px;overflow:hidden}\n.d-dp-scene{position:relative;width:100%;height:100%;transform-style:preserve-3d;will-change:transform}\n.d-dp-plane{position:absolute;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:6px}\n.d-dp-back{left:16px;top:16px;right:16px;bottom:16px;border:1px solid var(--line);background:var(--paper);transform:translateZ(-120px)}\n.d-dp-mid{left:64px;top:40px;width:172px;height:70px;border:1px solid var(--faint);background:var(--bg);transform:translateZ(-30px)}\n.d-dp-front{left:112px;top:56px;width:76px;height:38px;background:var(--ink);color:var(--bg);transform:translateZ(60px)}\n.d-dp-k{font-size:11px;letter-spacing:.08em;color:var(--muted)}\n.d-dp-v{font-family:var(--font-mono);font-size:11px}\n.d-dp:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"drawer-perspective","cat":"3D 与透视","t":"抽屉透视推出","en":"drawer perspective","d":"拉出用 translateZ 而不是 translateY：只有朝观察者推，边框才会出现轻微斜切，跟真抽屉抽出来一样；再叠 6° rotateX 让上沿先出来一点，超过 8° 就开始像在翻书。底层始终留一条 1px 缝，提醒下面还有东西。","body":"<div class=\"d-dw\"><div class=\"d-dw-under\"><span class=\"d-dw-k\">底层 · 发票 3 张</span></div><div class=\"d-dw-page\"><span class=\"d-dw-k\">本月</span><span class=\"d-dw-v\">报销单</span><span class=\"d-dw-n\">拉出后整页向观察者靠近</span></div><button type=\"button\" class=\"d-dw-handle\" aria-expanded=\"false\">拉出</button></div>","css":".d-dw{position:relative;box-sizing:border-box;width:300px;max-width:100%;height:150px;perspective:700px;perspective-origin:50% 40%}\n.d-dw-under{position:absolute;inset:0;display:flex;align-items:flex-start;padding:10px 16px;box-sizing:border-box;border:1px solid var(--line);border-radius:10px;background:var(--bg);color:var(--muted);font-size:11px}\n.d-dw-page{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;gap:2px;padding:12px 16px;box-sizing:border-box;border:1px solid var(--line);border-radius:10px;background:var(--paper);box-shadow:inset 0 1px 0 #fff5;transform-style:preserve-3d;transition:transform 280ms cubic-bezier(.34,1.56,.64,1)}\n.d-dw-on .d-dw-page{transform:translateZ(58px) translateY(-20px) rotateX(6deg)}\n.d-dw-k{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;color:var(--faint)}\n.d-dw-v{font-size:21px;font-weight:650;letter-spacing:-.01em;color:var(--ink)}\n.d-dw-n{font-size:11px;color:var(--muted)}\n.d-dw-handle{position:absolute;left:50%;bottom:-1px;z-index:2;height:22px;padding:0 12px;border:1px solid var(--line);border-radius:999px;background:var(--paper);color:var(--muted);font:inherit;font-size:11px;cursor:pointer;transform:translateX(-50%);-webkit-tap-highlight-color:transparent}\n.d-dw-on .d-dw-handle{color:var(--ink);border-color:var(--ink)}\n.d-dw-handle:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"layer-explode","cat":"3D 与透视","t":"分层爆炸图","en":"layer explode","d":"三层沿 Z 轴拉开 26px，是 1px 描边在 640px 透视下还能认出「这是三层」的最小间隙，再挤就糊成一张卡；指针进入某层时它抬到 64px、其余退到 -18px 并压到 45% 不透明度，读者先看清被抽出的那一层，再回头对它在原图里的位置。记忆点：抽屉式抽层。","body":"<div class=\"d-le\" role=\"group\" aria-label=\"分层爆炸图：悬停或聚焦任一层，该层抬起、其余后退\"><div class=\"d-le-deck\"><div class=\"d-le-plate\" tabindex=\"0\"><b class=\"d-le-no\">01</b><span class=\"d-le-name\">底板</span></div><div class=\"d-le-plate\" tabindex=\"0\"><b class=\"d-le-no\">02</b><span class=\"d-le-name\">图文层</span></div><div class=\"d-le-plate\" tabindex=\"0\"><b class=\"d-le-no\">03</b><span class=\"d-le-name\">标注层</span></div></div></div>","css":".d-le{box-sizing:border-box;width:260px;max-width:100%;height:150px;display:grid;place-items:center;perspective:640px}\n.d-le-deck{position:relative;width:196px;height:84px;transform-style:preserve-3d;transform:rotateX(18deg) rotateY(-14deg)}\n.d-le-plate{position:absolute;inset:0;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;padding:0 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--ink);transform:translateZ(var(--z,0px));transition:transform 280ms cubic-bezier(.34,1.56,.64,1),opacity 180ms cubic-bezier(.34,1.56,.64,1),border-color 120ms cubic-bezier(.34,1.56,.64,1);will-change:transform}\n.d-le-plate:nth-child(1){--z:0px;z-index:1}\n.d-le-plate:nth-child(2){--z:26px;z-index:2}\n.d-le-plate:nth-child(3){--z:52px;z-index:3}\n.d-le-no{font-family:var(--font-mono);font-size:var(--fs-11);font-weight:400;letter-spacing:var(--tracking-mono-label);color:var(--faint)}\n.d-le-name{font-size:var(--fs-13);font-weight:600}\n.d-le-deck.is-hot .d-le-plate{opacity:.45;transform:translateZ(-18px)}\n.d-le-deck.is-hot .d-le-plate.is-on{opacity:1;border-color:var(--ink);transform:translateZ(64px)}\n.d-le-plate:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"tilt-stack","cat":"3D 与透视","t":"倾斜叠层","en":"tilt stack","d":"三张卡只错 8px 与 16px，再大就会被读成三张独立的卡，而不是一叠；指针移动时整叠只偏 8°（纵轴 6°），超过这个角度卡面文字开始难读。最上层抬 4px 是为了让「手正按着一叠纸」这件事有落点。记忆点：纸叠被指尖压得一歪，上面那张先翘起来。","body":"<div class=\"d-ts\" tabindex=\"0\" role=\"group\" aria-label=\"倾斜叠层：指针移动时整叠倾斜，最上层抬起 4px\"><div class=\"d-ts-deck\"><div class=\"d-ts-card\"></div><div class=\"d-ts-card\"></div><div class=\"d-ts-card\"><span class=\"d-ts-k\">01 打样</span><span class=\"d-ts-n\">叠层页</span></div></div></div>","css":".d-ts{box-sizing:border-box;width:236px;max-width:100%;height:150px;display:grid;place-items:center;perspective:700px;outline:none}\n.d-ts-deck{--rx:0deg;--ry:0deg;position:relative;width:196px;height:92px;transform-style:preserve-3d;transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform 180ms cubic-bezier(.34,1.56,.64,1);will-change:transform}\n.d-ts-card{position:absolute;inset:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-end;gap:2px;padding:10px 12px;border:1px solid var(--line);border-radius:10px;background:var(--paper);transition:transform 280ms cubic-bezier(.34,1.56,.64,1),opacity 180ms cubic-bezier(.34,1.56,.64,1)}\n.d-ts-card:nth-child(1){transform:translateY(16px) translateZ(-28px);opacity:.55}\n.d-ts-card:nth-child(2){transform:translateY(8px) translateZ(-14px);opacity:.75}\n.d-ts-card:nth-child(3){transform:translateY(0) translateZ(0)}\n.d-ts:hover .d-ts-card:nth-child(3),.d-ts:focus-visible .d-ts-card:nth-child(3){transform:translateY(-4px) translateZ(0)}\n.d-ts-k{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);color:var(--faint)}\n.d-ts-n{font-size:var(--fs-15);font-weight:650;line-height:var(--lh-display);letter-spacing:var(--tracking-display);color:var(--ink)}\n.d-ts:focus-visible{outline:1px solid var(--ink);outline-offset:6px}"},{"id":"scroll-counters","cat":"滚动驱动","t":"滚动计数","en":"scroll counters","d":"数字不做补间，而是用 scroll-timeline 把 0 到目标值切成 6 格（steps(6)），126 / 18 / 96 除得尽，所以每格分别是 21 / 3 / 16，读数永远落在整数上——仪器式的计数不该出现小数抖动。记忆点：往下滚，三个数字像计数器一样一格一格跳。","body":"<div class=\"d-sc\" role=\"group\" aria-label=\"滚动计数：向下滚动，三个数字从 0 走到目标值\"><div class=\"d-sc-scroll\" tabindex=\"0\"><div class=\"d-sc-head\"><div class=\"d-sc-cell\"><span class=\"d-sc-num d-sc-n1\"></span><span class=\"d-sc-k\">印张</span></div><div class=\"d-sc-cell\"><span class=\"d-sc-num d-sc-n2\"></span><span class=\"d-sc-k\">校次</span></div><div class=\"d-sc-cell\"><span class=\"d-sc-num d-sc-n3\"></span><span class=\"d-sc-k\">成品率</span></div></div><p class=\"d-sc-p\">第一版上机，墨辊先空转两圈，让油墨在辊面上匀开。</p><p class=\"d-sc-p\">样张从收纸台取下来，对着色标看三块油墨的深浅。</p><p class=\"d-sc-p\">压力调小半格，网点就不再往纸里陷。</p><p class=\"d-sc-p\">把样张折一道，看折缝处的墨色有没有匀。</p><p class=\"d-sc-p\">换第二版之前，先洗掉墨辊上的旧色，免得串色。</p><p class=\"d-sc-p\">刀口的毛边用指尖抹过，摸得出来就该磨刀了。</p><p class=\"d-sc-p\">成品按印次编号，签样一起装进牛皮纸袋。</p><p class=\"d-sc-p\">这一卷的账记完了，数字停在最后一次校色的位置。</p></div></div>","css":".d-sc{box-sizing:border-box;width:300px;max-width:100%;height:150px;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--bg)}\n.d-sc-scroll{box-sizing:border-box;height:100%;overflow-y:auto;scrollbar-width:none;padding:0 12px 12px}\n.d-sc-scroll::-webkit-scrollbar{width:0;height:0}\n.d-sc-head{position:sticky;top:0;display:flex;gap:8px;padding:12px 0 8px;background:var(--bg);border-bottom:1px solid var(--line)}\n.d-sc-cell{flex:1;display:flex;flex-direction:column;gap:2px}\n.d-sc-num{font-family:var(--font-mono);font-size:var(--fs-21);font-weight:650;line-height:var(--lh-display);color:var(--ink);font-variant-numeric:tabular-nums}\n.d-sc-k{font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);color:var(--faint)}\n.d-sc-p{margin:12px 0 0;font-size:var(--fs-11);line-height:var(--lh-note);color:var(--muted)}\n@property --d-sc-n1{syntax:\"<integer>\";inherits:false;initial-value:0}\n@property --d-sc-n2{syntax:\"<integer>\";inherits:false;initial-value:0}\n@property --d-sc-n3{syntax:\"<integer>\";inherits:false;initial-value:0}\n.d-sc-n1{--d-sc-n1:0;counter-reset:d-sc-c1 var(--d-sc-n1);animation:d-scroll-counters-one steps(6) both;animation-timeline:scroll(nearest)}\n.d-sc-n2{--d-sc-n2:0;counter-reset:d-sc-c2 var(--d-sc-n2);animation:d-scroll-counters-two steps(6) both;animation-timeline:scroll(nearest)}\n.d-sc-n3{--d-sc-n3:0;counter-reset:d-sc-c3 var(--d-sc-n3);animation:d-scroll-counters-three steps(6) both;animation-timeline:scroll(nearest)}\n.d-sc-n1::before{content:counter(d-sc-c1)}\n.d-sc-n2::before{content:counter(d-sc-c2)}\n.d-sc-n3::before{content:counter(d-sc-c3) \"%\"}\n.d-sc-scroll:focus-visible{outline:1px solid var(--ink);outline-offset:-3px}\n@keyframes d-scroll-counters-one{from{--d-sc-n1:0}to{--d-sc-n1:126}}\n@keyframes d-scroll-counters-two{from{--d-sc-n2:0}to{--d-sc-n2:18}}\n@keyframes d-scroll-counters-three{from{--d-sc-n3:0}to{--d-sc-n3:96}}"},{"id":"scroll-horizontal-pin","cat":"滚动驱动","t":"横向锁定","en":"horizontal pin","d":"纵向留 390px 换横向 600px，不是 1:1：横向三块各 300，必须走满 600 才能让第三块贴住左边；纵向 390 是「走完横向刚好也到底」，多一屏会让人以为卡住。pin 用 sticky 而不是 transform 顶住，因为 sticky 在滚动容器里天然对齐，不用算偏移。","body":"<div class=\"d-hp\" tabindex=\"0\" aria-label=\"横向锁定：纵向滚动带动横向位移\"><div class=\"d-hp-space\"><div class=\"d-hp-pin\"><div class=\"d-hp-track\"><span class=\"d-hp-panel\">01 印前</span><span class=\"d-hp-panel\">02 上机</span><span class=\"d-hp-panel\">03 装订</span></div></div></div></div>","css":".d-hp{box-sizing:border-box;width:300px;max-width:100%;height:150px;overflow-x:hidden;overflow-y:auto;border:1px solid var(--line);border-radius:10px;background:var(--bg)}\n.d-hp-space{height:540px}\n.d-hp-pin{position:sticky;top:0;height:148px;display:flex;align-items:center}\n.d-hp-track{display:flex;width:900px;animation:d-scroll-horizontal-pin-x linear both;animation-timeline:scroll(nearest)}\n.d-hp-panel{flex:0 0 300px;box-sizing:border-box;height:148px;display:flex;align-items:center;justify-content:center;border-right:1px solid var(--line);font-size:15px;color:var(--muted);background:var(--bg)}\n.d-hp-panel:nth-child(odd){background:var(--paper);color:var(--ink)}\n.d-hp:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@keyframes d-scroll-horizontal-pin-x{from{transform:translateX(0)}to{transform:translateX(-600px)}}"},{"id":"scroll-range-fade","cat":"滚动驱动","t":"区间淡出","en":"range fade","d":"把退场钉在 cover 55%–95%：卡片在视口里全墨走完大半段，贴上沿才淡到只剩轮廓——淡出绑在「已经在离场」的那一段，读者一进来不会先看到一张半透明的卡。用 animation-range 而不是手算 top<40%，换字号、换行高都不用重算数值。","body":"<div class=\"d-rg\" tabindex=\"0\" aria-label=\"区间淡出：卡片在指定滚动区间里退场\"><div class=\"d-rg-body\"><p class=\"d-rg-h\">区间淡出</p><p class=\"d-rg-p\">上面这一段是垫高用的：先让卡片在视口里正常出现，往下滚才看它贴上沿退场；没有这段，卡片一进来就已经在半透明里，看不出「开始退场」那一下。</p><div class=\"d-rg-card\"><p class=\"d-rg-t\">cover 55% → 95%</p><p class=\"d-rg-k\">animation-range: cover 55% / cover 95%</p></div><p class=\"d-rg-p\">这一段同样是垫高，好让卡片能贴着上沿走完整个区间。滚到底部时它只剩一圈轮廓和 15% 的墨；往回滚，它会一路还原，不需要点任何按钮，这也是交给滚动位置而不是脚本的原因。</p></div></div>","css":".d-rg{box-sizing:border-box;width:300px;max-width:100%;height:150px;overflow-x:hidden;overflow-y:auto;border:1px solid var(--line);border-radius:10px;background:var(--bg)}\n.d-rg-body{padding:12px}\n.d-rg-h{margin:0 0 4px;font-size:15px;color:var(--ink)}\n.d-rg-p{margin:0 0 12px;font-size:11px;line-height:1.6;color:var(--muted)}\n.d-rg-card{margin:0 0 12px;padding:10px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);box-shadow:inset 0 1px 0 #fff5;animation:d-scroll-range-fade-out cubic-bezier(.2,.75,.25,1) both;animation-timeline:view();animation-range:cover 55% cover 95%}\n.d-rg-t{margin:0;font-size:13px;color:var(--ink)}\n.d-rg-k{margin:2px 0 0;font-family:var(--font-mono);font-size:11px;color:var(--faint)}\n.d-rg:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@keyframes d-scroll-range-fade-out{from{opacity:1;transform:translateY(0)}to{opacity:.15;transform:translateY(-8px)}}"},{"id":"scroll-snap-sections","cat":"滚动驱动","t":"分屏吸附","en":"snap sections","d":"每段高度正好等于滚动框内高（148px），所以 scroll-snap 一定停在段首，不会停在半段；右侧刻度按同样的 28px 步距排三点，指针用 linear 180ms 平移——刻度是读数，加弹簧反而让人以为还有惯性没走完。记忆点：翻页式的段落，右边有个跟着走的指针。","body":"<div class=\"d-ss\" role=\"group\" aria-label=\"分屏吸附：滚动三段，右侧刻度指示当前段\"><div class=\"d-ss-scroll\" tabindex=\"0\" aria-label=\"三段面板，滚动或按 PageUp / PageDown 换段\"><section class=\"d-ss-panel\"><span class=\"d-ss-no\">01 / 03</span><h3 class=\"d-ss-h\">装版</h3><p class=\"d-ss-p\">铅字按行排进版框，木楔从两侧顶紧</p></section><section class=\"d-ss-panel\"><span class=\"d-ss-no\">02 / 03</span><h3 class=\"d-ss-h\">校色</h3><p class=\"d-ss-p\">先印一张样张，对着色标看深浅</p></section><section class=\"d-ss-panel\"><span class=\"d-ss-no\">03 / 03</span><h3 class=\"d-ss-h\">裁切</h3><p class=\"d-ss-p\">切刀对齐十字线，一刀到底</p></section></div><div class=\"d-ss-rail\" aria-hidden=\"true\"><i class=\"d-ss-tick\"></i><i class=\"d-ss-tick\"></i><i class=\"d-ss-tick\"></i><span class=\"d-ss-mark\"></span></div></div>","css":".d-ss{position:relative;box-sizing:border-box;width:300px;max-width:100%;height:150px;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--bg)}\n.d-ss-scroll{box-sizing:border-box;height:100%;overflow-y:auto;scroll-snap-type:y mandatory;scrollbar-width:none;padding-right:30px}\n.d-ss-scroll::-webkit-scrollbar{width:0;height:0}\n.d-ss-panel{box-sizing:border-box;height:100%;display:flex;flex-direction:column;justify-content:center;gap:2px;padding:0 16px;border-bottom:1px solid var(--line);scroll-snap-align:start;scroll-snap-stop:always}\n.d-ss-panel:last-child{border-bottom:0}\n.d-ss-no{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);color:var(--faint)}\n.d-ss-h{margin:0;font-size:var(--fs-21);font-weight:650;line-height:var(--lh-display);letter-spacing:var(--tracking-display);color:var(--ink)}\n.d-ss-p{margin:0;font-size:var(--fs-11);line-height:var(--lh-note);color:var(--muted)}\n.d-ss-rail{--i:0;position:absolute;right:8px;top:50%;width:16px;height:58px;transform:translateY(-50%)}\n.d-ss-tick{position:absolute;right:0;width:7px;height:1px;background:var(--faint)}\n.d-ss-tick:nth-child(1){top:0}\n.d-ss-tick:nth-child(2){top:28px}\n.d-ss-tick:nth-child(3){top:56px}\n.d-ss-mark{position:absolute;right:0;top:0;width:12px;height:2px;background:var(--ink);transform:translateY(calc(var(--i,0) * 28px));transition:transform 180ms linear}\n.d-ss-scroll:focus-visible{outline:1px solid var(--ink);outline-offset:-3px}"},{"id":"scroll-timeline-bar","cat":"滚动驱动","t":"滚动刻度进度","en":"scroll timeline","d":"已有 progress-scroll 也是 CSS 驱动的细线，只回答「到哪了」；这条把 0–100% 切成 6 档并画上刻度，读数靠对齐刻度而不是估长度——它是仪表，那条是书签。用 steps(6) 而不是 linear，因为刻度本来就是一格一格，连续增长的条和下面的 6 个刻线对不上。","body":"<div class=\"d-st\" tabindex=\"0\" aria-label=\"滚动刻度进度：滚动框内内容看刻度前进\"><div class=\"d-st-head\"><div class=\"d-st-bar\"><span class=\"d-st-fill\"></span></div><div class=\"d-st-scale\"><i class=\"d-st-tick\"></i><i class=\"d-st-tick\"></i><i class=\"d-st-tick\"></i><i class=\"d-st-tick\"></i><i class=\"d-st-tick\"></i><i class=\"d-st-tick\"></i></div></div><div class=\"d-st-body\"><p class=\"d-st-h\">01 装版</p><p class=\"d-st-p\">铅字按行排进版框，木楔从两侧顶紧。</p><p class=\"d-st-h\">02 校色</p><p class=\"d-st-p\">先印一张样张，对着色标看三块油墨的深浅。</p><p class=\"d-st-h\">03 裁切</p><p class=\"d-st-p\">切刀对齐十字线，一刀到底，纸边不起毛。</p><p class=\"d-st-h\">04 入档</p><p class=\"d-st-p\">成品按印次编号，签样一起装进牛皮纸袋。</p></div></div>","css":".d-st{box-sizing:border-box;width:300px;max-width:100%;height:150px;overflow-x:hidden;overflow-y:auto;border:1px solid var(--line);border-radius:10px;background:var(--bg)}\n.d-st-head{position:sticky;top:0;z-index:1;padding:8px 12px 6px;background:var(--bg);border-bottom:1px solid var(--line)}\n.d-st-bar{height:6px;border:1px solid var(--line);border-radius:2px;background:var(--paper)}\n.d-st-fill{display:block;height:100%;border-radius:2px;background:var(--ink);transform-origin:0 50%;transform:scaleX(0);animation:d-scroll-timeline-bar-grow steps(6) both;animation-timeline:scroll(nearest)}\n.d-st-scale{display:flex;justify-content:space-between;margin-top:4px}\n.d-st-tick{display:block;width:1px;height:4px;background:var(--faint)}\n.d-st-body{padding:0 12px 16px}\n.d-st-h{margin:12px 0 2px;font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;color:var(--muted)}\n.d-st-p{margin:0;font-size:11px;line-height:1.6;color:var(--faint)}\n.d-st:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@keyframes d-scroll-timeline-bar-grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}"},{"id":"scroll-velocity-skew","cat":"滚动驱动","t":"速度倾斜","en":"velocity skew","d":"倾斜 6° 封顶：再大文字基线就开始像被压扁，人先感到晃而不是快。速度按「一帧走了多少像素」算，不是按 wheel 一次跳多少——wheel 一跳 100px 不代表真速度，除以帧间隔才是；每帧靠近目标 45%，所以停下后 120ms 内自然回正。","body":"<div class=\"d-vel\" tabindex=\"0\" aria-label=\"速度倾斜：滚动越快字行越斜，停下回正\"><div class=\"d-vel-body\"><p class=\"d-vel-h\">速度倾斜</p><p class=\"d-vel-p\">滚得越快，这一叠字行越斜。</p><p class=\"d-vel-p\">停手之后它会自己回正，不用等。</p><p class=\"d-vel-p\">慢滚时几乎看不出，快滚时最明显。</p><p class=\"d-vel-p\">只斜 Y 轴，横向不歪，读起来还是正的。</p><p class=\"d-vel-p\">封顶 6°，再大就不是速度而是晃动了。</p><p class=\"d-vel-p\">滚到底部可以再往上滚，看它反向。</p></div></div>","css":".d-vel{box-sizing:border-box;width:300px;max-width:100%;height:150px;overflow-x:hidden;overflow-y:auto;border:1px solid var(--line);border-radius:10px;background:var(--bg)}\n.d-vel-body{padding:12px;transform-origin:50% 0;transition:transform 120ms linear;will-change:transform}\n.d-vel-h{margin:0 0 4px;font-size:15px;color:var(--ink)}\n.d-vel-p{margin:0 0 8px;font-size:11px;line-height:1.6;color:var(--muted)}\n.d-vel-p:last-child{margin-bottom:0}\n.d-vel:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"scroll-view-reveal","cat":"滚动驱动","t":"视口进入揭示","en":"view timeline","d":"用 view() 而不是 IntersectionObserver：揭示进度交给滚动位置，滚到一半停下卡片就停在半透明，往上滚还会退回去——JS 一次性加 class 只会「已经出现过了」一格，回滚无法复原。区间取 entry 10% 到 cover 45%，这样卡片露出三分之一时才真正看清。","body":"<div class=\"d-vr\" tabindex=\"0\" aria-label=\"视口进入揭示：在框内滚动，卡片逐张显形\"><div class=\"d-vr-body\"><div class=\"d-vr-card\"><p class=\"d-vr-t\">装版</p><p class=\"d-vr-p\">木楔顶紧，铅字不再走位。</p></div><div class=\"d-vr-card\"><p class=\"d-vr-t\">校色</p><p class=\"d-vr-p\">样张对色标，三块墨一处不看就偏。</p></div><div class=\"d-vr-card\"><p class=\"d-vr-t\">裁切</p><p class=\"d-vr-p\">刀口对齐十字线，一刀到底。</p></div><div class=\"d-vr-card\"><p class=\"d-vr-t\">入档</p><p class=\"d-vr-p\">签样跟着成品一起装袋。</p></div></div></div>","css":".d-vr{box-sizing:border-box;width:300px;max-width:100%;height:150px;overflow-x:hidden;overflow-y:auto;border:1px solid var(--line);border-radius:10px;background:var(--bg)}\n.d-vr-body{display:flex;flex-direction:column;gap:12px;padding:12px}\n.d-vr-card{padding:10px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);box-shadow:inset 0 1px 0 #fff5;animation:d-scroll-view-reveal-in cubic-bezier(.2,.75,.25,1) both;animation-timeline:view();animation-range:entry 10% cover 45%}\n.d-vr-t{margin:0;font-size:15px;color:var(--ink)}\n.d-vr-p{margin:2px 0 0;font-size:11px;line-height:1.6;color:var(--muted)}\n.d-vr:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@keyframes d-scroll-view-reveal-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}"}]);
window.INITS_EXTRA = Object.assign(window.INITS_EXTRA || {}, {
  "line-draw-title": root => {
  const box = root.querySelector('.d-ldt');
  if (!box || box.dataset.ldt) return;
  box.dataset.ldt = '1';
  const run = () => { box.classList.remove('is-run'); void box.offsetWidth; box.classList.add('is-run'); };
  box.addEventListener('pointerdown', () => { run(); });
  box.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); run(); }
  });
  run();
},
  "stagger-grid": root => {
  const box = root.querySelector('.d-sg');
  const grid = root.querySelector('.d-sg-grid');
  if (!box || !grid || grid.dataset.sg) return;
  grid.dataset.sg = '1';
  const run = () => { grid.classList.remove('is-run'); void grid.offsetWidth; grid.classList.add('is-run'); };
  box.addEventListener('pointerdown', () => { run(); });
  box.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); run(); }
  });
  run();
},
  "icon-morph-menu": root => {
  const box = root.querySelector('.d-icon-morph-menu');
  if (!box || box.dataset.dim) return;
  box.dataset.dim = '1';
  const btn = box.querySelector('.d-im-btn'), label = box.querySelector('.d-im-label');
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
    label.textContent = open ? '关闭' : '菜单';
  });
},
  "cursor-grid-light": root => {
  const box = root.querySelector('.d-grid-light');
  if (!box || box.dataset.dgl) return;
  box.dataset.dgl = '1';
  const grid = box.querySelector('.d-gl-grid');
  const cols = 12, rows = 5, step = 23;
  if (!grid.children.length) {
    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement('span');
      cell.className = 'd-gl-cell';
      grid.appendChild(cell);
    }
  }
  const cells = [...grid.children];
  let at = -1, kx = 5, ky = 2;
  const clear = () => { cells.forEach(c => { c.className = 'd-gl-cell'; }); at = -1; };
  const paint = (col, row) => {
    if (col < 0 || row < 0 || col >= cols || row >= rows) { clear(); return; }
    const idx = row * cols + col;
    if (idx === at) return;
    at = idx;
    cells.forEach((c, i) => {
      const d = Math.hypot(i % cols - col, Math.floor(i / cols) - row);
      c.className = 'd-gl-cell' + (d <= 1 ? ' is-l1' : d <= 2.2 ? ' is-l2' : d <= 3.2 ? ' is-l3' : '');
    });
  };
  const atPointer = e => {
    const r = grid.getBoundingClientRect();
    kx = Math.floor((e.clientX - r.left) / step);
    ky = Math.floor((e.clientY - r.top) / step);
    paint(kx, ky);
  };
  grid.addEventListener('pointermove', atPointer);
  grid.addEventListener('pointerdown', atPointer);
  grid.addEventListener('pointerleave', clear);
  box.addEventListener('focus', () => paint(kx, ky));
  box.addEventListener('blur', clear);
  box.addEventListener('keydown', e => {
    const k = e.key;
    if (k === 'ArrowLeft' || k === 'ArrowRight' || k === 'ArrowUp' || k === 'ArrowDown') {
      e.preventDefault();
      kx = Math.max(0, Math.min(cols - 1, kx + (k === 'ArrowRight' ? 1 : k === 'ArrowLeft' ? -1 : 0)));
      ky = Math.max(0, Math.min(rows - 1, ky + (k === 'ArrowDown' ? 1 : k === 'ArrowUp' ? -1 : 0)));
      paint(kx, ky);
    } else if (k === 'Escape') { clear(); }
  });
},
  "cursor-state-machine": root => {
  const box = root.querySelector('.d-cursor-states');
  if (!box || box.dataset.dcs) return;
  box.dataset.dcs = '1';
  const cur = box.querySelector('.d-cs-cursor');
  const blk = box.querySelector('.d-cs-block');
  const tip = box.querySelector('.d-cs-tip');
  const label = { idle: '待机', hover: '可抓取', drag: '拖动中', wait: '等待结果' };
  let x = 150, y = 66, drag = false, gx = 0, gy = 0, sx = 0, sy = 0, tx = 0, ty = 0;
  const set = s => { box.dataset.s = s; tip.textContent = label[s]; };
  const hit = () => {
    const a = blk.getBoundingClientRect(), r = box.getBoundingClientRect();
    return x >= a.left - r.left && x <= a.right - r.left && y >= a.top - r.top && y <= a.bottom - r.top;
  };
  const place = (nx, ny) => {
    const r = box.getBoundingClientRect();
    x = Math.max(0, Math.min(r.width, nx));
    y = Math.max(0, Math.min(r.height, ny));
    cur.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    if (!drag) set(hit() ? 'hover' : box.dataset.s === 'wait' ? 'wait' : 'idle');
  };
  const moveBlk = () => {
    const w = box.clientWidth, h = box.clientHeight, bw = blk.offsetWidth, bh = blk.offsetHeight;
    tx = Math.max(-blk.offsetLeft, Math.min(w - blk.offsetLeft - bw, sx + (x - gx)));
    ty = Math.max(-blk.offsetTop, Math.min(h - blk.offsetTop - bh, sy + (y - gy)));
    blk.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
  };
  const beginDrag = () => { drag = true; gx = x; gy = y; sx = tx; sy = ty; set('drag'); };
  const endDrag = () => {
    drag = false;
    set('wait');
    clearTimeout(box._dcsT);
    box._dcsT = setTimeout(() => set(hit() ? 'hover' : 'idle'), 900);
  };
  box.addEventListener('focus', () => { box.classList.add('is-live'); place(x, y); });
  box.addEventListener('blur', () => { box.classList.remove('is-live'); });
  box.addEventListener('pointerenter', e => {
    const r = box.getBoundingClientRect();
    box.classList.add('is-live');
    place(e.clientX - r.left, e.clientY - r.top);
  });
  box.addEventListener('pointermove', e => {
    const r = box.getBoundingClientRect();
    place(e.clientX - r.left, e.clientY - r.top);
    if (drag) moveBlk();
  });
  box.addEventListener('pointerdown', e => {
    const r = box.getBoundingClientRect();
    place(e.clientX - r.left, e.clientY - r.top);
    if (hit()) { beginDrag(); box.setPointerCapture(e.pointerId); e.preventDefault(); }
  });
  box.addEventListener('pointerup', () => { if (drag) endDrag(); });
  box.addEventListener('pointerleave', () => { if (!drag) box.classList.remove('is-live'); });
  box.addEventListener('keydown', e => {
    const k = e.key, step = 12;
    if (k === 'ArrowLeft') { e.preventDefault(); place(x - step, y); if (drag) moveBlk(); }
    else if (k === 'ArrowRight') { e.preventDefault(); place(x + step, y); if (drag) moveBlk(); }
    else if (k === 'ArrowUp') { e.preventDefault(); place(x, y - step); if (drag) moveBlk(); }
    else if (k === 'ArrowDown') { e.preventDefault(); place(x, y + step); if (drag) moveBlk(); }
    else if (k === ' ') {
      e.preventDefault();
      if (drag) endDrag();
      else if (hit()) beginDrag();
    }
  });
},
  "transition-wipe-diagonal": root => {
  const box = root.querySelector('.d-wipe');
  if (!box || box.dataset.dwd) return;
  box.dataset.dwd = '1';
  const on = () => {
    clearTimeout(box._dwT);
    box.classList.remove('is-out');
    box.classList.add('is-on');
  };
  const off = () => {
    clearTimeout(box._dwT);
    box.classList.add('is-out');
    box._dwT = setTimeout(() => {
      box.classList.remove('is-on');
      box.classList.remove('is-out');
    }, 280);
  };
  box._dwT = setTimeout(on, 280);
  box.addEventListener('click', () => { if (box.classList.contains('is-on')) off(); else on(); });
  box.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (box.classList.contains('is-on')) off(); else on();
    }
  });
},
  "drag-deck": root => {
  const deck = root.querySelector('.d-deck');
  if (!deck || deck.dataset.ready) return;
  deck.dataset.ready = '1';
  const cards = [].slice.call(deck.querySelectorAll('.d-deck-card'));
  const hint = deck.querySelector('.d-deck-hint');
  const IDLE = '甩出速度 > 0.5px/ms 直接飞走';

  // 从上到下的顺序，order[0] 才是可拖的那张
  const order = cards.slice().sort((a, b) => Number(a.dataset.depth) - Number(b.dataset.depth));

  // 每深一层：下移 7px、缩 4.5%、再带一点固定斜角，才像一叠纸
  const base = i => 'translateY(' + i * 7 + 'px) rotate(' + (i === 1 ? -1.4 : i === 2 ? 1.8 : 0) + 'deg) scale(' + (1 - i * .045) + ')';

  function paint(animate) {
    order.forEach((el, i) => {
      el.dataset.depth = String(i);
      el.style.zIndex = String(10 - i);
      el.style.transition = animate ? 'transform .28s cubic-bezier(.34,1.56,.64,1)' : 'none';
      el.style.transform = base(i);
    });
  }

  let drag = null;

  function down(e) {
    const el = e.currentTarget;
    if (el !== order[0]) return;
    e.preventDefault();
    el.focus({ preventScroll: true });
    el.setPointerCapture(e.pointerId);
    el.dataset.drag = '1';
    el.style.transition = 'none';
    drag = { el: el, x0: e.clientX, y0: e.clientY, x: e.clientX, dx: 0, v: 0, t: performance.now() };
  }

  function move(e) {
    if (!drag) return;
    const now = performance.now();
    const dt = now - drag.t;
    if (dt > 0) drag.v = drag.v * .6 + ((e.clientX - drag.x) / dt) * .4;
    drag.x = e.clientX;
    drag.t = now;
    drag.dx = e.clientX - drag.x0;
    const dy = e.clientY - drag.y0;
    const rot = Math.max(-14, Math.min(14, drag.dx * .06));
    drag.el.style.transform = 'translate(' + drag.dx + 'px,' + Math.max(-8, Math.min(8, dy * .22)) + 'px) rotate(' + rot + 'deg)';
    hint.textContent = Math.abs(drag.v) > .5 ? '松手 → 飞走' : '松手 → 回弹';
  }

  function release(dir) {
    const d = drag;
    drag = null;
    if (!d) return;
    const el = d.el;
    delete el.dataset.drag;
    const fly = dir || (Math.abs(d.dx) > 78 || Math.abs(d.v) > .5 ? (d.dx || d.v) > 0 ? 1 : -1 : 0);
    if (!fly) {
      el.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
      el.style.transform = base(0);
      hint.textContent = IDLE;
      return;
    }
    el.style.transition = 'transform .18s cubic-bezier(.34,1.56,.64,1)';
    el.style.transform = 'translate(' + fly * 340 + 'px,0px) rotate(' + fly * 16 + 'deg)';
    hint.textContent = fly > 0 ? '飞走 → 下一张' : '← 飞走 · 下一张';
    setTimeout(() => {
      order.push(order.shift());
      el.style.transition = 'none';
      el.style.transform = base(2);
      order.forEach((c, i) => {
        c.dataset.depth = String(i);
        c.style.zIndex = String(10 - i);
        if (c !== el) {
          c.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
          c.style.transform = base(i);
        }
      });
      hint.textContent = IDLE;
    }, 180);
  }

  function key(e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    if (drag) return;
    drag = { el: order[0], x0: 0, y0: 0, x: 0, dx: 0, v: 0, t: performance.now() };
    release(e.key === 'ArrowRight' ? 1 : -1);
  }

  cards.forEach(el => {
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', () => release(0));
    el.addEventListener('pointercancel', () => release(0));
    el.addEventListener('keydown', key);
  });
  paint(false);
},
  "drag-ghost-follow": root => {
  const box = root.querySelector('.d-ghost');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const card = box.querySelector('.d-ghost-card');
  const copy = box.querySelector('.d-ghost-copy');
  const hint = box.querySelector('.d-ghost-hint');
  const IDLE = '残影每帧按 0.3 追指针';
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0, drag = null;

  function loop() {
    cx += (tx - cx) * .3;
    cy += (ty - cy) * .3;
    copy.style.transform = 'translate(' + cx.toFixed(2) + 'px,' + cy.toFixed(2) + 'px)';
    raf = requestAnimationFrame(loop);
  }

  function down(e) {
    if (drag) return;
    e.preventDefault();
    card.focus({ preventScroll: true });
    card.setPointerCapture(e.pointerId);
    drag = { x: e.clientX, y: e.clientY };
    tx = ty = cx = cy = 0;
    box.dataset.drag = '1';
    copy.style.transition = 'none';
    copy.style.opacity = '1';
    if (!raf) raf = requestAnimationFrame(loop);
  }
  function move(e) {
    if (!drag) return;
    tx = e.clientX - drag.x;
    ty = e.clientY - drag.y;
    hint.textContent = '滞后 ' + Math.round(Math.hypot(tx - cx, ty - cy)) + 'px';
  }
  function up() {
    if (!drag) return;
    drag = null;
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    delete box.dataset.drag;
    copy.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1),opacity .18s linear';
    copy.style.transform = 'translate(0px,0px)';
    copy.style.opacity = '0';
    tx = ty = cx = cy = 0;
    hint.textContent = IDLE;
  }
  function key(e) {
    const mv = { ArrowLeft: [-12, 0], ArrowRight: [12, 0], ArrowUp: [0, -12], ArrowDown: [0, 12] }[e.key];
    if (!mv) return;
    e.preventDefault();
    const nx = Math.max(-40, Math.min(64, Number(card.dataset.x || 0) + mv[0]));
    const ny = Math.max(-20, Math.min(24, Number(card.dataset.y || 0) + mv[1]));
    card.dataset.x = String(nx);
    card.dataset.y = String(ny);
    card.style.transition = 'transform .18s cubic-bezier(.34,1.56,.64,1)';
    card.style.transform = 'translate(' + nx + 'px,' + ny + 'px)';
    hint.textContent = '方向键把卡推开 ' + Math.abs(nx + ny) + 'px';
  }

  card.addEventListener('pointerdown', down);
  card.addEventListener('pointermove', move);
  card.addEventListener('pointerup', up);
  card.addEventListener('pointercancel', up);
  card.addEventListener('keydown', key);
},
  "drag-snap-grid": root => {
  const box = root.querySelector('.d-snap');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const grid = box.querySelector('.d-snap-grid');
  const tile = box.querySelector('.d-snap-tile');
  const cells = [].slice.call(grid.querySelectorAll('.d-snap-cell'));
  const guide = box.querySelector('.d-snap-guide');
  const lines = guide.querySelectorAll('i');
  const hint = box.querySelector('.d-snap-hint');
  const COLS = 3, ROWS = 2, STEP = 56, SIZE = 48;
  const TW = tile.offsetWidth, TH = tile.offsetHeight;
  const GX = grid.offsetLeft, GY = grid.offsetTop;
  const pos = { x: 216, y: 38 };
  const IDLE = '离格心 26px 内松手就进去';

  function center(c, r) {
    return { x: GX + c * STEP + SIZE / 2, y: GY + r * STEP + SIZE / 2 };
  }
  function draw() {
    tile.style.transform = 'translate(' + pos.x + 'px,' + pos.y + 'px)';
  }
  function moveTo(x, y, animate) {
    tile.style.transition = animate ? 'transform .28s cubic-bezier(.34,1.56,.64,1)' : 'none';
    pos.x = x; pos.y = y; draw();
  }
  function nearest(x, y) {
    let best = null, bd = 1e9;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const k = center(c, r);
        const d = Math.hypot(k.x - x, k.y - y);
        if (d < bd) { bd = d; best = { c: c, r: r, x: k.x, y: k.y, d: d }; }
      }
    }
    return best;
  }
  function mark(hit) {
    cells.forEach((el, i) => {
      if (hit && i === hit.r * COLS + hit.c) el.dataset.hot = '1'; else delete el.dataset.hot;
    });
    if (!hit) { delete guide.dataset.on; return; }
    lines[0].style.left = (hit.c * STEP + SIZE / 2) + 'px';
    lines[1].style.top = (hit.r * STEP + SIZE / 2) + 'px';
    guide.dataset.on = '1';
  }
  function hot(x, y) {
    const hit = nearest(x, y);
    return hit && hit.d < 26 ? hit : null;
  }

  let drag = null;
  function down(e) {
    if (drag) return;
    e.preventDefault();
    tile.focus({ preventScroll: true });
    tile.setPointerCapture(e.pointerId);
    tile.dataset.drag = '1';
    drag = { x0: e.clientX - pos.x, y0: e.clientY - pos.y };
  }
  function move(e) {
    if (!drag) return;
    pos.x = Math.max(0, Math.min(300 - TW, e.clientX - drag.x0));
    pos.y = Math.max(0, Math.min(150 - TH, e.clientY - drag.y0));
    moveTo(pos.x, pos.y, false);
    const hit = hot(pos.x + TW / 2, pos.y + TH / 2);
    mark(hit);
    hint.textContent = hit ? '吸附中 · 松手进格子' : IDLE;
  }
  function up() {
    if (!drag) return;
    drag = null;
    delete tile.dataset.drag;
    const hit = hot(pos.x + TW / 2, pos.y + TH / 2);
    if (hit) moveTo(hit.x - TW / 2, hit.y - TH / 2, true);
    else moveTo(pos.x, pos.y, true);
    hint.textContent = hit ? '已吸附 · 对齐提示线随落点走' : IDLE;
    clearTimeout(box._hintT);
    box._hintT = setTimeout(() => { mark(null); hint.textContent = IDLE; }, 900);
  }
  function key(e) {
    const mv = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
    if (!mv) return;
    e.preventDefault();
    const from = nearest(pos.x + TW / 2, pos.y + TH / 2);
    const c = Math.max(0, Math.min(COLS - 1, from.c + mv[0]));
    const r = Math.max(0, Math.min(ROWS - 1, from.r + mv[1]));
    const k = center(c, r);
    moveTo(k.x - TW / 2, k.y - TH / 2, true);
    mark({ c: c, r: r });
    clearTimeout(box._hintT);
    box._hintT = setTimeout(() => mark(null), 900);
  }

  tile.addEventListener('pointerdown', down);
  tile.addEventListener('pointermove', move);
  tile.addEventListener('pointerup', up);
  tile.addEventListener('pointercancel', up);
  tile.addEventListener('keydown', key);
  draw();
},
  "drag-swap": root => {
  const wrap = root.querySelector('.d-swap');
  if (!wrap || wrap.dataset.ready) return;
  wrap.dataset.ready = '1';
  const cards = [].slice.call(wrap.querySelectorAll('.d-swap-card'));
  const SLOT = [24, 172];
  const Y = 26;

  function place(el, i, animate) {
    el.dataset.slot = String(i);
    el.style.transition = animate ? 'transform .28s cubic-bezier(.34,1.56,.64,1)' : 'none';
    el.style.transform = 'translate(' + SLOT[i] + 'px,' + Y + 'px)';
  }
  cards.forEach(el => place(el, Number(el.dataset.slot), false));

  const other = el => cards.filter(c => c !== el)[0];
  let drag = null;

  function down(e) {
    if (drag) return;
    const el = e.currentTarget;
    e.preventDefault();
    el.focus({ preventScroll: true });
    el.setPointerCapture(e.pointerId);
    el.dataset.drag = '1';
    el.style.transition = 'none';
    el.style.zIndex = '3';
    drag = { el: el, from: Number(el.dataset.slot), x0: e.clientX, y0: e.clientY, over: false };
  }

  function move(e) {
    if (!drag) return;
    const el = drag.el;
    const dx = e.clientX - drag.x0;
    const dy = e.clientY - drag.y0;
    el.style.transform = 'translate(' + (SLOT[drag.from] + dx) + 'px,' + (Y + dy) + 'px)';
    const o = other(el);
    const oSlot = Number(o.dataset.slot);
    const ecx = SLOT[drag.from] + el.offsetWidth / 2 + dx;
    const ocx = SLOT[oSlot] + o.offsetWidth / 2;
    const over = Math.abs(ecx - ocx) < 58;
    if (over === drag.over) return;
    drag.over = over;
    if (over) o.dataset.yield = '1'; else delete o.dataset.yield;
    o.style.transition = 'transform .18s cubic-bezier(.34,1.56,.64,1)';
    // 让位 22px = 间隙的一半，再多目标卡就被推出画框
    o.style.transform = 'translate(' + (SLOT[oSlot] + (over ? (drag.from === 0 ? 22 : -22) : 0)) + 'px,' + Y + 'px)';
  }

  function up() {
    if (!drag) return;
    const el = drag.el;
    const from = drag.from;
    const o = other(el);
    const over = drag.over;
    drag = null;
    delete el.dataset.drag;
    delete o.dataset.yield;
    el.style.zIndex = '2';
    if (over) {
      place(el, from === 0 ? 1 : 0, true);
      place(o, from, true);
    } else {
      place(el, from, true);
      place(o, Number(o.dataset.slot), true);
    }
  }

  function key(e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    const el = e.currentTarget;
    const o = other(el);
    const from = Number(el.dataset.slot);
    delete o.dataset.yield;
    place(o, from, true);
    place(el, from === 0 ? 1 : 0, true);
  }

  cards.forEach(el => {
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('keydown', key);
  });
},
  "drag-threshold-hint": root => {
  const box = root.querySelector('.d-bound');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const frame = box.querySelector('.d-bound-box');
  const knob = box.querySelector('.d-bound-knob');
  const hint = box.querySelector('.d-bound-hint');
  const NAME = { l: '左', r: '右', t: '上', b: '下' };
  const PAD = 8;
  const W = knob.offsetWidth, H = knob.offsetHeight;
  const MAX_X = frame.clientWidth - PAD * 2 - W;
  const MAX_Y = frame.clientHeight - PAD * 2 - H;
  const IDLE = '越界位移按 0.18 折算';
  let x = MAX_X / 2, y = MAX_Y / 2, drag = null;

  function draw(animate) {
    knob.style.transition = animate ? 'transform .28s cubic-bezier(.34,1.56,.64,1)' : 'none';
    knob.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
  }
  function down(e) {
    if (drag) return;
    e.preventDefault();
    knob.focus({ preventScroll: true });
    knob.setPointerCapture(e.pointerId);
    knob.dataset.drag = '1';
    drag = { x0: e.clientX - x, y0: e.clientY - y };
  }
  function move(e) {
    if (!drag) return;
    let nx = e.clientX - drag.x0, ny = e.clientY - drag.y0;
    const push = { l: 0, r: 0, t: 0, b: 0 };
    if (nx < 0) { push.l = Math.min(1, -nx / 44); nx = nx * .18; }
    else if (nx > MAX_X) { push.r = Math.min(1, (nx - MAX_X) / 44); nx = MAX_X + (nx - MAX_X) * .18; }
    if (ny < 0) { push.t = Math.min(1, -ny / 44); ny = ny * .18; }
    else if (ny > MAX_Y) { push.b = Math.min(1, (ny - MAX_Y) / 44); ny = MAX_Y + (ny - MAX_Y) * .18; }
    x = nx; y = ny;
    draw(false);
    const side = Object.keys(push).sort((a, b) => push[b] - push[a])[0];
    if (push[side] > 0) {
      frame.dataset.push = side;
      hint.textContent = '顶住「' + NAME[side] + '」边 · 位移按 0.18 折算';
    } else {
      delete frame.dataset.push;
      hint.textContent = IDLE;
    }
  }
  function up() {
    if (!drag) return;
    drag = null;
    delete knob.dataset.drag;
    x = Math.max(0, Math.min(MAX_X, x));
    y = Math.max(0, Math.min(MAX_Y, y));
    draw(true);
    delete frame.dataset.push;
    hint.textContent = IDLE;
  }
  function key(e) {
    const mv = { ArrowLeft: [-12, 0], ArrowRight: [12, 0], ArrowUp: [0, -12], ArrowDown: [0, 12] }[e.key];
    if (!mv) return;
    e.preventDefault();
    const side = mv[0] < 0 && x <= 0 ? 'l' : mv[0] > 0 && x >= MAX_X ? 'r' : mv[1] < 0 && y <= 0 ? 't' : mv[1] > 0 && y >= MAX_Y ? 'b' : '';
    x = Math.max(0, Math.min(MAX_X, x + mv[0]));
    y = Math.max(0, Math.min(MAX_Y, y + mv[1]));
    draw(true);
    if (!side) return;
    frame.dataset.push = side;
    hint.textContent = '到「' + NAME[side] + '」边 · 再推就是阻力';
    clearTimeout(box._pushT);
    box._pushT = setTimeout(() => { delete frame.dataset.push; hint.textContent = IDLE; }, 900);
  }

  knob.addEventListener('pointerdown', down);
  knob.addEventListener('pointermove', move);
  knob.addEventListener('pointerup', up);
  knob.addEventListener('pointercancel', up);
  knob.addEventListener('keydown', key);
  draw(false);
},
  "text-line-mask": root => {
  const box = root.querySelector('.d-line-mask');
  if (!box || box.dataset.dlm) return;
  box.dataset.dlm = '1';
  const play = () => { box.classList.add('is-reset'); void box.offsetWidth; box.classList.remove('is-reset'); };
  box.addEventListener('pointerdown', () => { play(); });
  box.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); } });
},
  "text-scramble": root => {
  const box = root.querySelector('.d-scramble');
  if (!box || box.dataset.dsc) return;
  box.dataset.dsc = '1';
  const out = box.querySelector('.d-sc-text');
  const pool = '0123456789ABCDEF#%&+*=<>/';
  const text = '正在生成页面';
  const play = () => {
    clearInterval(box._dscT);
    let step = 0;
    const paint = () => {
      let html = '';
      for (let i = 0; i < text.length; i++) {
        const ch = i < step ? text[i] : pool[Math.floor(Math.random() * pool.length)];
        html += '<span class="d-sc-ch' + (i < step ? ' is-fixed' : '') + '">' + ch + '</span>';
      }
      out.innerHTML = html;
    };
    paint();
    box._dscT = setInterval(() => {
      step += 1;
      paint();
      if (step >= text.length) { clearInterval(box._dscT); box._dscT = 0; }
    }, 120);
  };
  play();
  box.addEventListener('pointerdown', play);
  box.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); } });
},
  "text-strike-draw": root => {
  const box = root.querySelector('.d-strike-draw');
  if (!box || box.dataset.dsd) return;
  box.dataset.dsd = '1';
  const play = () => { box.classList.add('is-reset'); void box.offsetWidth; box.classList.remove('is-reset'); };
  box.addEventListener('pointerdown', play);
  box.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); } });
},
  "text-width-collapse": root => {
  const box = root.querySelector('.d-width-collapse');
  if (!box || box.dataset.dwc) return;
  box.dataset.dwc = '1';
  const meta = box.querySelector('.d-wc-meta');
  const set = wide => {
    box.classList.toggle('is-wide', wide);
    box.setAttribute('aria-pressed', wide ? 'true' : 'false');
    meta.textContent = wide ? 'wdth 118' : 'wdth 75';
  };
  const toggle = () => set(!box.classList.contains('is-wide'));
  box._dwcT = setTimeout(() => set(true), 280);
  box.addEventListener('click', toggle);
  box.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
},
  "contrast-toggle": root => {
  const box = root.querySelector('.d-ct');
  if (!box || box.dataset.ct) return;
  box.dataset.ct = '1';
  const sw = box.querySelector('.d-ct-sw');
  const state = box.querySelector('.d-ct-state');
  const paint = on => {
    box.classList.toggle('is-hc', on);
    sw.classList.toggle('is-on', on);
    sw.setAttribute('aria-checked', String(on));
    state.textContent = on ? 'STATE · 高对比' : 'STATE · 正常';
  };
  sw.addEventListener('click', () => paint(sw.getAttribute('aria-checked') !== 'true'));
  paint(false);
},
  "focus-trap-dialog": root => {
  const stage = root.querySelector('.d-ftd');
  if (!stage || stage.dataset.ftd) return;
  stage.dataset.ftd = '1';
  const openBtn = stage.querySelector('.d-ftd-open');
  const box = stage.querySelector('.d-ftd-box');
  const scrim = stage.querySelector('.d-ftd-scrim');
  const caret = stage.querySelector('.d-ftd-caret');
  const opts = Array.from(stage.querySelectorAll('.d-ftd-opt'));
  const mark = el => {
    const i = opts.indexOf(el);
    opts.forEach(o => o.classList.toggle('is-on', o === el));
    caret.style.setProperty('--i', String(i < 0 ? 0 : i));
  };
  const open = () => {
    stage.classList.add('is-open');
    box.hidden = false;
    scrim.hidden = false;
    opts[0].focus();
    mark(opts[0]);
  };
  const close = () => {
    stage.classList.remove('is-open');
    box.hidden = true;
    scrim.hidden = true;
    openBtn.focus();
  };
  openBtn.addEventListener('click', open);
  scrim.addEventListener('click', close);
  opts.forEach(o => {
    o.addEventListener('focus', () => mark(o));
    o.addEventListener('click', close);
  });
  box.addEventListener('keydown', e => {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab' || opts.length < 2) return;
    const first = opts[0], last = opts[opts.length - 1];
    if (e.shiftKey && stage.contains(document.activeElement) && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
},
  "skip-nav": root => {
  const box = root.querySelector('.d-skn');
  if (!box || box.dataset.skn) return;
  box.dataset.skn = '1';
  const link = box.querySelector('.d-skn-link');
  const main = box.querySelector('.d-skn-main');
  const tryBtn = box.querySelector('.d-skn-try');
  const jump = () => {
    main.focus();
    main.classList.add('is-hit');
  };
  link.addEventListener('click', e => { e.preventDefault(); jump(); });
  main.addEventListener('blur', () => main.classList.remove('is-hit'));
  tryBtn.addEventListener('click', () => link.focus());
},
  "toolbar-overflow": root => {
  const box = root.querySelector('.d-toolbar-overflow');
  if (!box || box.dataset.dto) return;
  box.dataset.dto = '1';
  const btn = box.querySelector('.d-to-more');
  const menu = box.querySelector('.d-to-menu');
  const items = [...box.querySelectorAll('.d-to-item')];
  let cur = 0;
  const focusItem = i => { cur = (i + items.length) % items.length; items[cur].focus(); };
  const set = open => {
    box.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.hidden = !open;
    if (open) setTimeout(() => focusItem(0), 280);
  };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  items.forEach(it => it.addEventListener('click', () => { set(false); btn.focus(); }));
  box.addEventListener('pointerdown', e => {
    if (!menu.hidden && !menu.contains(e.target) && !btn.contains(e.target)) set(false);
  });
  box.addEventListener('keydown', e => {
    if (e.key === 'Escape') { set(false); btn.focus(); }
    else if (e.key === 'ArrowDown' && !menu.hidden) { e.preventDefault(); focusItem(cur + 1); }
    else if (e.key === 'ArrowUp' && !menu.hidden) { e.preventDefault(); focusItem(cur - 1); }
  });
},
  "edge-swipe-back": root => {
  const box = root.querySelector('.d-back');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const page = box.querySelector('.d-back-page');
  const edge = box.querySelector('.d-back-edge');
  const fill = box.querySelector('.d-back-fill');
  const under = box.querySelector('.d-back-under');
  const hint = box.querySelector('.d-back-hint');
  const W = 260;
  const IDLE = '过 30% 才提交 · 30% 处有刻度';
  let x = 0, drag = null;

  function draw() {
    page.style.transform = 'translateX(' + x.toFixed(1) + 'px)';
    fill.style.width = Math.min(100, (x / W) * 100).toFixed(1) + '%';
  }
  function commit() {
    page.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
    x = W;
    draw();
    under.textContent = '已返回';
    hint.textContent = '已返回上一页 · 260px 一次走完';
    clearTimeout(box._t);
    box._t = setTimeout(() => {
      page.style.transition = 'none';
      x = 0;
      draw();
      under.textContent = '← 上一页';
      hint.textContent = IDLE;
    }, 280);
  }
  function reset() {
    page.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
    x = 0;
    draw();
    hint.textContent = IDLE;
  }
  function down(e) {
    if (drag) return;
    e.preventDefault();
    edge.focus({ preventScroll: true });
    edge.setPointerCapture(e.pointerId);
    page.style.transition = 'none';
    drag = { x0: e.clientX };
    x = 0;
    draw();
  }
  function move(e) {
    if (!drag) return;
    let dx = e.clientX - drag.x0;
    if (dx < 0) dx = dx * .2;
    x = Math.min(W, dx);
    draw();
    hint.textContent = x / W >= .3 ? '过 30% · 松手就返回' : '还差 ' + Math.round((.3 - x / W) * 100) + '% 才提交';
  }
  function up() {
    if (!drag) return;
    drag = null;
    if (x / W >= .3) commit(); else reset();
  }
  function key(e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); commit(); }
    else if (e.key === 'ArrowLeft' || e.key === 'Escape') { e.preventDefault(); reset(); }
  }

  edge.addEventListener('pointerdown', down);
  edge.addEventListener('pointermove', move);
  edge.addEventListener('pointerup', up);
  edge.addEventListener('pointercancel', up);
  edge.addEventListener('keydown', key);
  draw();
},
  "long-press-menu": root => {
  const box = root.querySelector('.d-press');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const card = box.querySelector('.d-press-card');
  const menu = box.querySelector('.d-press-menu');
  const bar = box.querySelector('.d-press-bar');
  const hint = box.querySelector('.d-press-hint');
  const items = [].slice.call(box.querySelectorAll('.d-press-item'));
  const HOLD = 420, MOVE = 8;
  const IDLE = '按住 420ms 或 Enter 呼出';
  let timer = 0, raf = 0, t0 = 0, sx = 0, sy = 0, holding = false, cur = 0;

  function progress() {
    const p = Math.min(1, (performance.now() - t0) / HOLD);
    bar.style.width = (p * 100).toFixed(1) + '%';
    if (p < 1 && holding) raf = requestAnimationFrame(progress);
  }
  function stopHold() {
    holding = false;
    clearTimeout(timer);
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    delete card.dataset.hold;
    bar.style.width = '0%';
  }
  function open() {
    stopHold();
    menu.dataset.open = '1';
    menu.setAttribute('aria-hidden', 'false');
    card.setAttribute('aria-expanded', 'true');
    items.forEach(b => b.tabIndex = 0);
    bar.style.width = '100%';
    hint.textContent = '方向键选 · Esc 关';
    cur = 0;
    items[0].focus({ preventScroll: true });
  }
  function close(refocus) {
    if (!menu.dataset.open) return;
    delete menu.dataset.open;
    menu.setAttribute('aria-hidden', 'true');
    card.setAttribute('aria-expanded', 'false');
    items.forEach(b => b.tabIndex = -1);
    bar.style.width = '0%';
    hint.textContent = IDLE;
    if (refocus) card.focus({ preventScroll: true });
  }
  function down(e) {
    if (menu.dataset.open) { close(true); return; }
    holding = true;
    sx = e.clientX; sy = e.clientY; t0 = performance.now();
    card.dataset.hold = '1';
    hint.textContent = '正在长按…移动 8px 就取消';
    timer = setTimeout(open, HOLD);
    raf = requestAnimationFrame(progress);
  }
  function move(e) {
    if (!holding) return;
    if (Math.hypot(e.clientX - sx, e.clientY - sy) > MOVE) {
      stopHold();
      hint.textContent = '已取消 · 移动超过 8px';
      clearTimeout(box._t2);
      box._t2 = setTimeout(() => { hint.textContent = IDLE; }, 900);
    }
  }
  function cardKey(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (menu.dataset.open) close(true); else open();
    } else if (e.key === 'Escape') {
      close(true);
    }
  }
  function menuKey(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      cur = (cur + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items[cur].focus({ preventScroll: true });
    } else if (e.key === 'Escape') {
      e.preventDefault();
      close(true);
    } else if (e.key === 'Tab') {
      close(false);
    }
  }
  function outside(e) {
    if (!menu.dataset.open) return;
    if (card.contains(e.target) || menu.contains(e.target)) return;
    close(false);
  }

  card.addEventListener('pointerdown', down);
  card.addEventListener('pointermove', move);
  card.addEventListener('pointerup', () => { if (!menu.dataset.open) stopHold(); });
  card.addEventListener('pointercancel', stopHold);
  card.addEventListener('pointerleave', () => { if (holding) stopHold(); });
  card.addEventListener('keydown', cardKey);
  menu.addEventListener('keydown', menuKey);
  items.forEach((b, i) => {
    b.addEventListener('focus', () => { cur = i; });
    b.addEventListener('click', () => {
      hint.textContent = '选了「' + b.textContent + '」';
      close(true);
    });
  });
  root.addEventListener('pointerdown', outside);
},
  "overscroll-bounce": root => {
  const box = root.querySelector('.d-over');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const view = box.querySelector('.d-over-view');
  const list = box.querySelector('.d-over-list');
  const thumb = box.querySelector('.d-over-thumb');
  const hint = box.querySelector('.d-over-hint');
  const IDLE = '端点后每 1px 折成 0.3px';
  const LIMIT = 40;
  let max = 0, scroll = 0, stretch = 0, thumbH = 16, drag = null, settleT = 0;

  function measure() {
    max = Math.max(0, list.offsetHeight - view.clientHeight);
    const h = view.clientHeight;
    thumbH = Math.max(16, h * (h / Math.max(list.offsetHeight, 1)));
    thumb.style.height = thumbH.toFixed(1) + 'px';
  }
  function apply(raw, animate) {
    let s = raw, ex = 0;
    if (raw < 0) { s = 0; ex = raw * .3; }
    else if (raw > max) { s = max; ex = (raw - max) * .3; }
    ex = Math.max(-LIMIT, Math.min(LIMIT, ex));
    scroll = s; stretch = ex;
    list.style.transition = animate ? 'transform .28s cubic-bezier(.34,1.56,.64,1)' : 'none';
    list.style.transform = 'translateY(' + (-s - ex).toFixed(2) + 'px)';
    const top = max ? (s / max) * (view.clientHeight - thumbH) : 0;
    thumb.style.transform = 'translateY(' + top.toFixed(1) + 'px)';
    if (ex !== 0) {
      view.dataset.end = raw < 0 ? 't' : 'b';
      hint.textContent = '端点 · 拉伸 ' + Math.round(Math.abs(ex)) + 'px';
    } else {
      delete view.dataset.end;
      hint.textContent = IDLE;
    }
  }
  function down(e) {
    if (drag) return;
    e.preventDefault();
    view.focus({ preventScroll: true });
    view.setPointerCapture(e.pointerId);
    list.style.transition = 'none';
    view.dataset.drag = '1';
    drag = { y0: e.clientY, s0: scroll };
  }
  function move(e) {
    if (!drag) return;
    apply(drag.s0 - (e.clientY - drag.y0), false);
  }
  function up() {
    if (!drag) return;
    drag = null;
    delete view.dataset.drag;
    apply(scroll, true);
  }
  function wheel(e) {
    e.preventDefault();
    list.style.transition = 'none';
    apply(scroll + e.deltaY, false);
    clearTimeout(settleT);
    settleT = setTimeout(() => apply(scroll, true), 180);
  }
  function key(e) {
    const d = e.key === 'ArrowDown' ? 28 : e.key === 'ArrowUp' ? -28 : 0;
    if (!d) return;
    e.preventDefault();
    const atEnd = (d > 0 && scroll >= max) || (d < 0 && scroll <= 0);
    apply(atEnd ? scroll + d * 2 : scroll + d, true);
    if (atEnd) {
      clearTimeout(settleT);
      settleT = setTimeout(() => apply(scroll, true), 280);
    }
  }

  view.addEventListener('wheel', wheel, { passive: false });
  view.addEventListener('pointerdown', down);
  view.addEventListener('pointermove', move);
  view.addEventListener('pointerup', up);
  view.addEventListener('pointercancel', up);
  view.addEventListener('keydown', key);
  measure();
  apply(0, false);
},
  "pinch-zoom-tile": root => {
  const box = root.querySelector('.d-zoom');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const frame = box.querySelector('.d-zoom-frame');
  const tile = box.querySelector('.d-zoom-tile');
  const num = box.querySelector('.d-zoom-num');
  const hint = box.querySelector('.d-zoom-hint');
  const MIN = 1, MAX = 2.4;
  const IDLE = '1.00–2.40 之间 · 越界按 0.25 折算';
  let scale = 1, settleT = 0, pinch = null;
  const ptrs = new Map();

  function shown(s) {
    if (s > MAX) return MAX + (s - MAX) * .25;
    if (s < MIN) return MIN - (MIN - s) * .25;
    return s;
  }
  function render(s) {
    scale = s;
    const v = shown(s);
    tile.style.transform = 'scale(' + v.toFixed(3) + ')';
    num.textContent = v.toFixed(2) + '×';
    if (s > MAX || s < MIN) box.dataset.edge = s > MAX ? 'max' : 'min';
    else delete box.dataset.edge;
  }
  function settle() {
    clearTimeout(settleT);
    settleT = 0;
    tile.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
    render(Math.max(MIN, Math.min(MAX, scale)));
    hint.textContent = IDLE;
  }
  function later() {
    clearTimeout(settleT);
    settleT = setTimeout(settle, 180);
  }
  function wheel(e) {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    tile.style.transition = 'none';
    render(scale * Math.exp(-e.deltaY * .0022));
    hint.textContent = '缩放中 · ' + shown(scale).toFixed(2) + '×';
    later();
  }
  function pdown(e) {
    tile.setPointerCapture(e.pointerId);
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    tile.style.transition = 'none';
    if (ptrs.size === 2) {
      const a = Array.from(ptrs.values());
      pinch = { d: Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y), s: scale };
      hint.textContent = '双指张开或收拢';
    }
  }
  function pmove(e) {
    if (!ptrs.has(e.pointerId)) return;
    ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (!pinch || ptrs.size !== 2) return;
    const a = Array.from(ptrs.values());
    const d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y);
    if (pinch.d > 8) render(pinch.s * (d / pinch.d));
  }
  function pup(e) {
    ptrs.delete(e.pointerId);
    if (ptrs.size < 2) pinch = null;
    if (ptrs.size === 0) settle();
  }
  function key(e) {
    if (e.key === '0') {
      e.preventDefault();
      tile.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
      render(1);
      hint.textContent = IDLE;
      return;
    }
    const step = e.key === 'ArrowUp' || e.key === '+' || e.key === '=' ? .2 : e.key === 'ArrowDown' || e.key === '-' ? -.2 : 0;
    if (!step) return;
    e.preventDefault();
    tile.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1)';
    render(Math.max(MIN, Math.min(MAX, scale + step)));
    hint.textContent = '方向键每档 0.20× · 0 复位';
  }

  frame.addEventListener('wheel', wheel, { passive: false });
  tile.addEventListener('pointerdown', pdown);
  tile.addEventListener('pointermove', pmove);
  tile.addEventListener('pointerup', pup);
  tile.addEventListener('pointercancel', pup);
  tile.addEventListener('keydown', key);
  render(1);
},
  "two-finger-rotate": root => {
  const box = root.querySelector('.d-rot');
  if (!box || box.dataset.ready) return;
  box.dataset.ready = '1';
  const card = box.querySelector('.d-rot-card');
  const num = box.querySelector('.d-rot-num');
  const hint = box.querySelector('.d-rot-hint');
  const IDLE = 'Shift + 拖 · 0° 基准';
  let rot = 0, drag = null;

  function render(v, animate) {
    rot = v;
    card.style.transition = animate ? 'transform .28s cubic-bezier(.34,1.56,.64,1)' : 'none';
    card.style.transform = 'rotate(' + v.toFixed(1) + 'deg)';
    num.textContent = Math.round(v) + '°';
    hint.textContent = Math.round(v) === 0 ? IDLE : '已转 ' + Math.round(v) + '° · 15° 一档 · Enter 归零';
  }
  function down(e) {
    if (!e.shiftKey || drag) return;
    e.preventDefault();
    card.focus({ preventScroll: true });
    const r = card.getBoundingClientRect();
    const c = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    drag = { c: c, a0: Math.atan2(e.clientY - c.y, e.clientX - c.x), r0: rot };
    card.setPointerCapture(e.pointerId);
    card.dataset.drag = '1';
    render(rot, false);
  }
  function move(e) {
    if (!drag) return;
    const a = Math.atan2(e.clientY - drag.c.y, e.clientX - drag.c.x);
    render(drag.r0 + (a - drag.a0) * 180 / Math.PI, false);
  }
  function up() {
    if (!drag) return;
    drag = null;
    delete card.dataset.drag;
    const snap = Math.round(rot / 15) * 15;
    render(Math.abs(rot - snap) < 6 ? snap : rot, true);
  }
  function key(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      render(0, true);
      return;
    }
    const d = e.key === 'ArrowLeft' ? -15 : e.key === 'ArrowRight' ? 15 : 0;
    if (!d) return;
    e.preventDefault();
    render(rot + d, true);
  }

  card.addEventListener('pointerdown', down);
  card.addEventListener('pointermove', move);
  card.addEventListener('pointerup', up);
  card.addEventListener('pointercancel', up);
  card.addEventListener('keydown', key);
  render(0, false);
},
  "caption-zoom": root => {
  const box = root.querySelector('.d-cz');
  if (!box || box.dataset.cz) return;
  box.dataset.cz = '1';
  const dots = Array.from(box.querySelectorAll('.d-cz-dot'));
  const caps = Array.from(box.querySelectorAll('.d-cz-cap'));
  const on = i => {
    dots.forEach((d, k) => d.classList.toggle('is-on', k === i));
    caps.forEach((c, k) => c.classList.toggle('is-hot', k === i));
  };
  const off = () => {
    dots.forEach(d => d.classList.remove('is-on'));
    caps.forEach(c => c.classList.remove('is-hot'));
  };
  dots.forEach((d, i) => {
    d.addEventListener('pointerenter', () => on(i));
    d.addEventListener('focus', () => on(i));
    d.addEventListener('blur', off);
    d.addEventListener('click', () => on(i));
  });
  box.addEventListener('pointerleave', off);
},
  "quote-block": root => {
  const box = root.querySelector('.d-qb');
  if (!box || box.dataset.qb) return;
  box.dataset.qb = '1';
  const btn = box.querySelector('.d-qb-btn');
  const ctx = box.querySelector('.d-qb-ctx');
  const sync = open => {
    box.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? '收起上下文' : '展开上下文';
    ctx.setAttribute('aria-hidden', String(!open));
  };
  btn.addEventListener('click', () => sync(!box.classList.contains('is-open')));
  box.addEventListener('keydown', e => {
    if (e.key === 'Escape' && box.classList.contains('is-open')) { sync(false); btn.focus(); }
  });
  sync(false);
},
  "ribbon-note": root => {
  const box = root.querySelector('.d-rn');
  if (!box || box.dataset.rn) return;
  box.dataset.rn = '1';
  const btn = box.querySelector('.d-rn-btn');
  const toggle = () => {
    const open = !box.classList.contains('is-open');
    box.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? '旁注 03 · 收起' : '旁注 03 · 展开';
  };
  btn.addEventListener('click', toggle);
},
  "svg-blob-morph": root => {
    const box = root.querySelector('.d-bm'), shape = box.querySelector('.d-bm-shape'), btn = box.querySelector('.d-bm-btn');
    const N = 8, R = 38, CX = 60, CY = 60, DUR = 900;
    const A = [1, .8, .96, .82, 1, .84, .98, .8];
    const B = [.82, .98, .84, 1, .8, .96, .8, 1];
    const ease = t => {
      const x1 = .34, y1 = 1.56, x2 = .64, y2 = 1;
      const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
      const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
      let u = t;
      for (let i = 0; i < 5; i++) {
        const x = ((ax * u + bx) * u + cx) * u - t;
        const dx = (3 * ax * u + 2 * bx) * u + cx;
        if (Math.abs(x) < 1e-4 || !dx) break;
        u -= x / dx;
      }
      u = Math.max(0, Math.min(1, u));
      return ((ay * u + by) * u + cy) * u;
    };
    const mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
    const draw = k => {
      const pts = [];
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2 - Math.PI / 2;
        const r = Math.min(R * 1.14, R * (A[i] + (B[i] - A[i]) * k));
        pts.push([CX + Math.cos(a) * r, CY + Math.sin(a) * r]);
      }
      const m0 = mid(pts[N - 1], pts[0]);
      let d = 'M' + m0[0].toFixed(1) + ' ' + m0[1].toFixed(1);
      for (let i = 0; i < N; i++) {
        const m = mid(pts[i], pts[(i + 1) % N]);
        d += 'Q' + pts[i][0].toFixed(1) + ' ' + pts[i][1].toFixed(1) + ' ' + m[0].toFixed(1) + ' ' + m[1].toFixed(1);
      }
      return d + 'Z';
    };
    shape.setAttribute('d', draw(0));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      btn.disabled = true;
      btn.textContent = '已停';
      btn.setAttribute('aria-pressed', 'false');
      return;
    }
    let raf = 0, t0 = 0, off = 0;
    const step = now => {
      if (!t0) t0 = now - off;
      const p = ((now - t0) / DUR) % 2;
      shape.setAttribute('d', draw(ease(p < 1 ? p : 2 - p)));
      raf = box._raf = requestAnimationFrame(step);
    };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; box._raf = 0; };
    btn.onclick = () => {
      if (raf) {
        off = (performance.now() - t0) % (DUR * 2); stop();
        btn.textContent = '走'; btn.setAttribute('aria-pressed', 'false');
      } else {
        t0 = 0; step(performance.now());
        btn.textContent = '停'; btn.setAttribute('aria-pressed', 'true');
      }
    };
    cancelAnimationFrame(box._raf);
    step(performance.now());
  },
  "svg-clip-reveal": root => {
    const box = root.querySelector('.d-cr'), art = box.querySelector('.d-cr-art'), cut = box.querySelector('.d-cr-cut'), btn = box.querySelector('.d-cr-btn');
    let corner = '100% 100%';
    const open = () => {
      cut.style.transformOrigin = corner;
      box.classList.remove('is-open');
      void art.getBoundingClientRect();
      box.classList.add('is-open');
    };
    art.onclick = e => {
      const r = art.getBoundingClientRect();
      corner = ((e.clientX - r.left) / r.width > .5 ? '100% ' : '0% ') + ((e.clientY - r.top) / r.height > .5 ? '100%' : '0%');
      open();
    };
    btn.onclick = open;
    open();
  },
  "svg-dash-progress": root => {
    const ring = root.querySelector('.d-dp-ring'), bar = ring.querySelector('.d-dp-bar'), num = ring.querySelector('.d-dp-num');
    const btn = root.querySelector('.d-dp-btn');
    const L = bar.getTotalLength();
    bar.style.strokeDasharray = L + ' ' + L;
    const DUR = 900;
    const tick = now => {
      if (!ring._t0) ring._t0 = now;
      const p = Math.min(1, (now - ring._t0) / DUR);
      bar.style.strokeDashoffset = String(L * (1 - p));
      const v = Math.round(p * 100);
      num.textContent = v + '%';
      ring.setAttribute('aria-valuenow', String(v));
      if (p < 1) ring._raf = requestAnimationFrame(tick);
    };
    const run = () => { cancelAnimationFrame(ring._raf); ring._t0 = 0; ring._raf = requestAnimationFrame(tick); };
    btn.onclick = run;
    run();
  },
  "svg-draw-line": root => {
    const box = root.querySelector('.d-dl'), btn = box.querySelector('.d-dl-btn');
    const run = () => { box.classList.remove('is-run'); void box.offsetWidth; box.classList.add('is-run'); };
    btn.onclick = run;
    run();
  },
  "svg-fill-wipe": root => {
    const box = root.querySelector('.d-fw'), btn = box.querySelector('.d-fw-btn');
    const run = () => { box.classList.remove('is-wipe'); void box.offsetWidth; box.classList.add('is-wipe'); };
    btn.onclick = run;
    run();
  },
  "svg-morph-icon": root => {
    const btn = root.querySelector('.d-mi-btn');
    btn.onclick = () => {
      const down = btn.classList.toggle('is-down');
      btn.setAttribute('aria-pressed', String(down));
    };
  },
  "svg-motion-path": root => {
    const box = root.querySelector('.d-mp'), btn = box.querySelector('.d-mp-btn');
    btn.onclick = () => {
      const paused = box.classList.toggle('is-paused');
      btn.textContent = paused ? '继续' : '暂停';
      btn.setAttribute('aria-pressed', String(paused));
    };
  },
  "svg-noise-grain": root => {
    const box = root.querySelector('.d-ng'), btn = box.querySelector('.d-ng-btn');
    const turb = box.querySelector('feTurbulence');
    let fine = true;
    const apply = () => {
      turb.setAttribute('baseFrequency', fine ? '0.9' : '0.35');
      btn.textContent = fine ? '网点 细' : '网点 粗';
      btn.setAttribute('aria-pressed', String(!fine));
    };
    btn.onclick = () => { fine = !fine; apply(); };
    apply();
  },
  "svg-stagger-dots": root => {
    const box = root.querySelector('.d-sd'), btn = box.querySelector('.d-sd-btn');
    btn.onclick = () => {
      const paused = box.classList.toggle('is-paused');
      btn.textContent = paused ? '继续' : '暂停';
      btn.setAttribute('aria-pressed', String(paused));
    };
  },
  "svg-text-on-path": root => {
    const box = root.querySelector('.d-tp'), btn = box.querySelector('.d-tp-btn');
    btn.onclick = () => {
      const on = box.classList.toggle('is-guide');
      btn.textContent = on ? '收起参考线' : '显示参考线';
      btn.setAttribute('aria-pressed', String(on));
    };
  },
  "card-flip-3d": root => {
  const box = root.querySelector('.d-cf3d');
  if (!box) return;
  box.onclick = () => {
    const on = !box.classList.contains('d-cf3d-on');
    box.classList.toggle('d-cf3d-on', on);
    box.setAttribute('aria-pressed', on ? 'true' : 'false');
  };
},
  "carousel-coverflow": root => {
  const items = Array.from(root.querySelectorAll('.d-cf-item'));
  if (!items.length) return;
  const set = i => items.forEach((el, k) => {
    el.dataset.pos = String(k - i);
    el.setAttribute('aria-current', k === i ? 'true' : 'false');
  });
  items.forEach((el, k) => { el.onclick = () => set(k); });
  set(1);
},
  "cube-flip": root => {
  const box = root.querySelector('.d-cube');
  if (!box) return;
  box.onclick = () => {
    const on = !box.classList.contains('d-cube-on');
    box.classList.toggle('d-cube-on', on);
    box.setAttribute('aria-pressed', on ? 'true' : 'false');
  };
},
  "depth-parallax": root => {
  const box = root.querySelector('.d-dp');
  if (!box) return;
  const scene = box.querySelector('.d-dp-scene');
  let kx = 0, ky = 0;
  const apply = () => { scene.style.transform = 'rotateX(' + ky.toFixed(2) + 'deg) rotateY(' + kx.toFixed(2) + 'deg)'; };
  box.onpointermove = e => {
    const r = box.getBoundingClientRect();
    kx = ((e.clientX - r.left) / r.width - .5) * 22;
    ky = -((e.clientY - r.top) / r.height - .5) * 18;
    scene.style.transition = 'none';
    apply();
  };
  box.onpointerleave = () => {
    kx = 0; ky = 0;
    scene.style.transition = 'transform 280ms cubic-bezier(.34,1.56,.64,1)';
    apply();
  };
  const step = { ArrowLeft: [-3, 0], ArrowRight: [3, 0], ArrowUp: [0, -3], ArrowDown: [0, 3] };
  box.onkeydown = e => {
    const s = step[e.key];
    if (!s) return;
    e.preventDefault();
    kx = Math.max(-11, Math.min(11, kx + s[0]));
    ky = Math.max(-9, Math.min(9, ky + s[1]));
    scene.style.transition = 'transform 280ms cubic-bezier(.34,1.56,.64,1)';
    apply();
  };
},
  "drawer-perspective": root => {
  const box = root.querySelector('.d-dw');
  if (!box) return;
  const btn = box.querySelector('.d-dw-handle');
  if (!btn) return;
  btn.onclick = () => {
    const on = !box.classList.contains('d-dw-on');
    box.classList.toggle('d-dw-on', on);
    btn.setAttribute('aria-expanded', on ? 'true' : 'false');
    btn.textContent = on ? '推回' : '拉出';
  };
},
  "layer-explode": root => {
  const deck = root.querySelector('.d-le-deck');
  if (!deck || deck.dataset.le) return;
  deck.dataset.le = '1';
  const plates = Array.from(deck.querySelectorAll('.d-le-plate'));
  const on = el => { deck.classList.add('is-hot'); plates.forEach(p => p.classList.toggle('is-on', p === el)); };
  const off = () => { deck.classList.remove('is-hot'); plates.forEach(p => p.classList.remove('is-on')); };
  deck.addEventListener('pointerover', e => { const p = e.target.closest('.d-le-plate'); if (p) on(p); });
  deck.addEventListener('pointerout', e => { const p = e.target.closest('.d-le-plate'); if (p && !p.contains(e.relatedTarget)) off(); });
  deck.addEventListener('focusin', e => { const p = e.target.closest('.d-le-plate'); if (p) on(p); });
  deck.addEventListener('focusout', e => { const p = e.target.closest('.d-le-plate'); if (p && !p.contains(e.relatedTarget)) off(); });
  deck.addEventListener('keydown', e => { if (e.key === 'Escape') off(); });
},
  "tilt-stack": root => {
  const deck = root.querySelector('.d-ts-deck');
  if (!deck || deck.dataset.ts) return;
  deck.dataset.ts = '1';
  const move = e => {
    const r = deck.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    deck.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg');
    deck.style.setProperty('--rx', (-y * 6).toFixed(2) + 'deg');
  };
  const rest = () => { deck.style.removeProperty('--rx'); deck.style.removeProperty('--ry'); };
  deck.addEventListener('pointermove', move);
  deck.addEventListener('pointerleave', rest);
  deck.addEventListener('pointercancel', rest);
},
  "scroll-snap-sections": root => {
  const box = root.querySelector('.d-ss-scroll');
  const rail = root.querySelector('.d-ss-rail');
  if (!box || !rail || box.dataset.ss) return;
  box.dataset.ss = '1';
  const sync = () => {
    const h = box.clientHeight || 1;
    const i = Math.max(0, Math.min(2, Math.round(box.scrollTop / h)));
    rail.style.setProperty('--i', String(i));
  };
  box.addEventListener('scroll', sync, { passive: true });
  box.addEventListener('keydown', e => {
    const h = box.clientHeight || 0;
    if (e.key === 'PageDown') { e.preventDefault(); box.scrollTo({ top: Math.min(box.scrollHeight, box.scrollTop + h) }); }
    else if (e.key === 'PageUp') { e.preventDefault(); box.scrollTo({ top: Math.max(0, box.scrollTop - h) }); }
  });
  sync();
},
  "scroll-velocity-skew": root => {
  const box = root.querySelector('.d-vel');
  if (!box) return;
  const body = box.querySelector('.d-vel-body');
  if (!body) return;
  if (root.__dVelStop) root.__dVelStop();
  let raf = 0, prevY = box.scrollTop, prevT = 0, cur = 0;
  const paint = () => {
    body.style.transform = Math.abs(cur) < .05 ? '' : 'skewY(' + cur.toFixed(2) + 'deg)';
  };
  const frame = now => {
    const y = box.scrollTop;
    const dt = prevT ? Math.max(8, now - prevT) : 16;
    const perFrame = (y - prevY) * (16 / dt);
    prevY = y;
    prevT = now;
    const want = Math.max(-6, Math.min(6, perFrame * .28));
    cur = cur + (want - cur) * .45;
    if (Math.abs(want) < .05 && Math.abs(cur) < .05) {
      cur = 0; paint(); prevT = 0; raf = 0;
      return;
    }
    paint();
    raf = requestAnimationFrame(frame);
  };
  const onScroll = () => {
    if (raf) return;
    prevY = box.scrollTop;
    raf = requestAnimationFrame(frame);
  };
  box.addEventListener('scroll', onScroll, { passive: true });
  root.__dVelStop = () => {
    box.removeEventListener('scroll', onScroll);
    if (raf) cancelAnimationFrame(raf);
    raf = 0; prevT = 0; cur = 0;
    body.style.transform = '';
  };
},
});
