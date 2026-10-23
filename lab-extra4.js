/* 自动生成：node tools/site.mjs —— 不要手改。新资产来自 data/assets/motion/ 中 source=v4 的条目。 */
window.DEMOS_EXTRA = (window.DEMOS_EXTRA || []).concat([{"id":"line-draw-title","cat":"入场","t":"标题描线","en":"line draw title","d":"线用 scaleX 而不是 width，宽度每帧都要重排，标题会跟着抖一下；280ms 走完再让副标题淡入，延迟正好等于线的时长，两者不在中间叠——读者先看到一条线把版面定住，再读出下面那行小字。记忆点：先画线，再说话。","body":"<div class=\"d-ldt\" tabindex=\"0\" role=\"group\" aria-label=\"标题描线：线从左画到右，再淡入副标题，点击或回车重播\"><h3 class=\"d-ldt-t\">排版的秩序</h3><span class=\"d-ldt-rule\" aria-hidden=\"true\"></span><p class=\"d-ldt-sub\">先排版心，再排标题</p></div>","css":".d-ldt{box-sizing:border-box;width:260px;max-width:100%;outline:none}\n.d-ldt-t{margin:0;font-family:var(--font-sans);font-size:var(--fs-21);font-weight:700;line-height:var(--lh-display);letter-spacing:var(--tracking-display);color:var(--ink)}\n.d-ldt-rule{display:block;height:1px;margin:8px 0;background:var(--ink);transform:scaleX(0);transform-origin:0 50%}\n.d-ldt-sub{margin:0;font-family:var(--font-sans);font-size:var(--fs-11);line-height:var(--lh-note);color:var(--muted);opacity:0}\n.d-ldt.is-run .d-ldt-rule{animation:d-line-draw-title-rule 280ms cubic-bezier(.2,.75,.25,1) both}\n.d-ldt.is-run .d-ldt-sub{animation:d-line-draw-title-sub 180ms cubic-bezier(.2,.75,.25,1) 280ms both}\n.d-ldt:focus-visible{outline:1px solid var(--ink);outline-offset:6px}\n@keyframes d-line-draw-title-rule{from{transform:scaleX(0)}to{transform:scaleX(1)}}\n@keyframes d-line-draw-title-sub{from{opacity:0}to{opacity:1}}"},{"id":"stagger-grid","cat":"入场","t":"网格错峰","en":"stagger grid","d":"3×3 按到中心的切比雪夫距离分三圈：0 / 120 / 280ms，第二圈的延迟等于第一圈的时长、第三圈又等于第二圈，队列首尾相接不重叠；中心先落位是因为视线本来就先落在正中，四角最后补齐，读者感到方格是从中间铺开的，而不是从左上角扫过来。记忆点：从中心炸开。","body":"<div class=\"d-sg\" tabindex=\"0\" role=\"group\" aria-label=\"网格错峰入场：中心先亮、四角最后，点击或回车重播\"><div class=\"d-sg-grid\"><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i><i class=\"d-sg-cell\"></i></div></div>","css":".d-sg{width:200px;max-width:100%;height:150px;display:grid;place-items:center;outline:none}\n.d-sg-grid{display:grid;grid-template-columns:repeat(3,44px);grid-auto-rows:44px;gap:8px}\n.d-sg-cell{display:block;border:1px solid var(--line);border-radius:6px;background:var(--paper)}\n.d-sg-grid.is-run .d-sg-cell{animation:d-stagger-grid-pop 280ms cubic-bezier(.34,1.56,.64,1) both}\n.d-sg-grid.is-run .d-sg-cell:nth-child(2),.d-sg-grid.is-run .d-sg-cell:nth-child(4),.d-sg-grid.is-run .d-sg-cell:nth-child(6),.d-sg-grid.is-run .d-sg-cell:nth-child(8){animation-delay:120ms}\n.d-sg-grid.is-run .d-sg-cell:nth-child(1),.d-sg-grid.is-run .d-sg-cell:nth-child(3),.d-sg-grid.is-run .d-sg-cell:nth-child(7),.d-sg-grid.is-run .d-sg-cell:nth-child(9){animation-delay:280ms}\n.d-sg:focus-visible{outline:1px solid var(--ink);outline-offset:6px}\n@keyframes d-stagger-grid-pop{from{opacity:0;transform:translateY(6px) scale(.92)}to{opacity:1;transform:none}}"},{"id":"checkbox-draw","cat":"微交互","t":"勾选手绘","en":"checkbox draw","d":"勾是一条 pathLength=1 的描边，280ms 画完；再叠一条偏移 1px、四成透明的同形线当套印偏差——机器画的勾没有这层错位，而正是它让勾像手画的。","body":"<label class=\"d-checkbox-draw\"><input class=\"d-cd-input\" type=\"checkbox\" checked><span class=\"d-cd-box\"><svg class=\"d-cd-tick\" viewBox=\"0 0 22 22\" aria-hidden=\"true\" focusable=\"false\"><path class=\"d-cd-bleed\" pathLength=\"1\" d=\"M5 11.6 9.2 15.8 17.2 6.4\"></path><path class=\"d-cd-ink\" pathLength=\"1\" d=\"M5 11.6 9.2 15.8 17.2 6.4\"></path></svg></span><span class=\"d-cd-text\">排字已校对</span></label>","css":".d-checkbox-draw{position:relative;display:inline-flex;align-items:center;gap:var(--sp-8);font-family:var(--sans);outline:none;cursor:pointer}\n.d-cd-input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}\n.d-cd-box{position:relative;width:22px;height:22px;border:1px solid var(--line);border-radius:2px;background:var(--paper);box-shadow:inset 0 1px 0 #fff5}\n.d-checkbox-draw:hover .d-cd-box{border-color:var(--ink)}\n.d-cd-tick{position:absolute;inset:0;width:22px;height:22px;fill:none;stroke-linecap:square;stroke-linejoin:miter}\n.d-cd-ink,.d-cd-bleed{stroke:var(--ink);stroke-width:1;stroke-dasharray:1;stroke-dashoffset:1}\n.d-cd-bleed{opacity:.4;transform:translate(1px,1px)}\n.d-cd-input:checked + .d-cd-box .d-cd-ink{animation:d-checkbox-draw-ink 280ms cubic-bezier(.2,.75,.25,1) both}\n.d-cd-input:checked + .d-cd-box .d-cd-bleed{animation:d-checkbox-draw-bleed 280ms cubic-bezier(.2,.75,.25,1) 120ms both}\n.d-cd-input:focus-visible + .d-cd-box{outline:1px solid var(--ink);outline-offset:2px}\n.d-checkbox-draw .d-cd-text{font-size:var(--fs-13);color:var(--ink)}\n@keyframes d-checkbox-draw-ink{to{stroke-dashoffset:0}}\n@keyframes d-checkbox-draw-bleed{to{stroke-dashoffset:0}}"},{"id":"icon-morph-menu","cat":"微交互","t":"汉堡变叉","en":"hamburger morph","d":"三条 1px 线在 40px 按钮里留 6px 间距，比 4px 更接近字排的行距；中间那条先退 120ms（它没法参与 X），上下两条再用物理曲线 280ms 合拢——三条一起转会像图案翻转，不像折叠。","body":"<div class=\"d-icon-morph-menu\"><button class=\"d-im-btn\" type=\"button\" aria-expanded=\"false\" aria-label=\"打开菜单\"><i class=\"d-im-bar d-im-top\"></i><i class=\"d-im-bar d-im-mid\"></i><i class=\"d-im-bar d-im-bot\"></i></button><span class=\"d-im-label\">菜单</span></div>","css":".d-icon-morph-menu{display:inline-flex;align-items:center;gap:var(--sp-12);font-family:var(--sans);outline:none}\n.d-im-btn{position:relative;width:40px;height:40px;padding:0;border:1px solid var(--line);border-radius:6px;background:var(--paper);box-shadow:inset 0 1px 0 #fff5;cursor:pointer}\n.d-im-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-im-bar{position:absolute;left:10px;width:18px;height:1px;background:var(--ink);transform-origin:center;transition:transform 280ms cubic-bezier(.34,1.56,.64,1) 120ms,opacity 120ms linear}\n.d-im-top{top:13px}\n.d-im-mid{top:19px}\n.d-im-bot{top:25px}\n.d-im-btn[aria-expanded=true] .d-im-top{transform:translateY(6px) rotate(45deg)}\n.d-im-btn[aria-expanded=true] .d-im-mid{opacity:0;transform:scaleX(.4)}\n.d-im-btn[aria-expanded=true] .d-im-bot{transform:translateY(-6px) rotate(-45deg)}\n.d-im-label{font-size:var(--fs-11);letter-spacing:.08em;color:var(--muted);min-width:26px}"},{"id":"cursor-grid-light","cat":"光标","t":"光标点亮网格","en":"grid spotlight","d":"亮度按与光标的欧氏距离分三档（1 / 2.2 / 3.2 格），不用连续值：连续亮度在 180ms 里会糊成一片，分档才看得出一圈一圈；最近一圈不加延迟，加了就变成追着光标跑。","body":"<div class=\"d-grid-light\" tabindex=\"0\" role=\"group\" aria-label=\"光标点亮网格，方向键移动\"><div class=\"d-gl-grid\"></div><span class=\"d-gl-tip\">移动光标 / 方向键</span></div>","css":".d-grid-light{display:inline-flex;flex-direction:column;gap:var(--sp-8);font-family:var(--sans);outline:none;cursor:crosshair}\n.d-gl-grid{display:grid;grid-template-columns:repeat(12,22px);grid-auto-rows:22px;gap:1px;width:max-content;background:var(--line);border:1px solid var(--line)}\n.d-gl-cell{background:var(--paper);transition:background 180ms steps(6),opacity 180ms steps(6)}\n.d-gl-cell.is-l1{background:#c2402a}\n.d-gl-cell.is-l2{background:#c2402a;opacity:.5}\n.d-gl-cell.is-l3{background:#c2402a;opacity:.22}\n.d-gl-tip{font-family:var(--mono);font-size:var(--fs-9);letter-spacing:.08em;color:var(--faint)}\n.d-grid-light:focus-visible{outline:1px solid var(--ink);outline-offset:4px}"},{"id":"cursor-state-machine","cat":"光标","t":"光标状态机","en":"cursor states","d":"四种形态只改尺寸、圆角和一个描边色，尺寸用 steps(6) 跳着变——机械感来自「跳」而不是「滑」；放下后 900ms 的等待态是必须的，否则「正在处理」和「卡住」看起来一模一样。","body":"<div class=\"d-cursor-states\" tabindex=\"0\" role=\"group\" aria-label=\"光标状态机，方向键移动，空格抓取\"><i class=\"d-cs-cursor\" aria-hidden=\"true\"><b class=\"d-cs-shape\"></b></i><span class=\"d-cs-block\">拖我</span><em class=\"d-cs-tip\" aria-live=\"polite\">待机</em></div>","css":".d-cursor-states{position:relative;width:300px;max-width:100%;height:132px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden;font-family:var(--sans);outline:none;cursor:none;touch-action:none}\n.d-cursor-states:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-cs-cursor{position:absolute;left:0;top:0;width:0;height:0;pointer-events:none;opacity:0;transition:opacity 120ms linear}\n.d-cursor-states.is-live .d-cs-cursor{opacity:1}\n.d-cs-shape{position:absolute;left:0;top:0;display:block;width:8px;height:8px;margin:-4px 0 0 -4px;border:1px solid var(--muted);border-radius:999px;background:transparent;transition:width 120ms steps(6),height 120ms steps(6),margin 120ms steps(6),border-radius 120ms steps(6),border-color 120ms steps(6),background 120ms steps(6)}\n.d-cursor-states[data-s=hover] .d-cs-shape{width:16px;height:16px;margin:-8px 0 0 -8px;border-radius:2px;border-color:var(--ink)}\n.d-cursor-states[data-s=drag] .d-cs-shape{width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:2px;border-color:var(--ink);background:var(--ink)}\n.d-cursor-states[data-s=wait] .d-cs-shape{width:16px;height:16px;margin:-8px 0 0 -8px;border-radius:999px;border-color:var(--line);border-top-color:var(--ink);animation:d-cursor-state-machine-spin 900ms steps(6) infinite}\n.d-cs-block{position:absolute;left:28px;top:44px;display:grid;place-items:center;width:64px;height:42px;border:1px solid var(--line);border-radius:6px;background:var(--bg);font-size:var(--fs-11);color:var(--muted);box-shadow:inset 0 1px 0 #fff5;user-select:none}\n.d-cursor-states[data-s=drag] .d-cs-block{border-color:var(--ink);color:var(--ink)}\n.d-cs-tip{position:absolute;left:10px;bottom:8px;font-family:var(--mono);font-style:normal;font-size:var(--fs-9);letter-spacing:.08em;color:var(--faint)}\n@keyframes d-cursor-state-machine-spin{to{transform:rotate(360deg)}}"},{"id":"transition-wipe-diagonal","cat":"过渡","t":"斜切擦除","en":"diagonal wipe","d":"边界斜 20%（顶边比底边多走 20% 宽），斜边一有角度，眼睛先看到「被刮开」而不是「淡入」；新内容同时从 -10px 推到 0，才像被带过来。整版靛蓝是本批两处破格之一——擦除的边只有色差才看得见。","body":"<div class=\"d-wipe\" tabindex=\"0\" role=\"group\" aria-label=\"斜切擦除，回车重播\"><div class=\"d-wipe-a\"><span class=\"d-wipe-k\">旧版</span><span class=\"d-wipe-l\">排字顺序</span></div><div class=\"d-wipe-b\"><span class=\"d-wipe-k\">新版</span><span class=\"d-wipe-l\">阅读顺序</span></div></div>","css":".d-wipe{position:relative;width:296px;max-width:100%;height:132px;overflow:hidden;border:1px solid var(--line);border-radius:10px;font-family:var(--sans);outline:none;cursor:pointer}\n.d-wipe:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-wipe-a,.d-wipe-b{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;gap:2px;padding:var(--sp-12)}\n.d-wipe-a{background:var(--paper);color:var(--muted)}\n.d-wipe-b{background:#2b4b8f;color:var(--paper);clip-path:polygon(0 0,0 0,0 100%,0 100%)}\n.d-wipe-k{font-family:var(--mono);font-size:var(--fs-9);letter-spacing:.08em;opacity:.75}\n.d-wipe-l{font-size:var(--fs-21);font-weight:600;letter-spacing:-.02em}\n.d-wipe.is-on .d-wipe-b{animation:d-transition-wipe-diagonal-in 280ms cubic-bezier(.2,.75,.25,1) forwards}\n.d-wipe.is-on .d-wipe-b .d-wipe-l{animation:d-transition-wipe-diagonal-text 280ms cubic-bezier(.2,.75,.25,1) forwards}\n.d-wipe.is-out .d-wipe-b{animation:d-transition-wipe-diagonal-out 280ms cubic-bezier(.2,.75,.25,1) forwards}\n@keyframes d-transition-wipe-diagonal-in{from{clip-path:polygon(0 0,0 0,0 100%,0 100%)}to{clip-path:polygon(0 0,128% 0,108% 100%,0 100%)}}\n@keyframes d-transition-wipe-diagonal-out{from{clip-path:polygon(0 0,128% 0,108% 100%,0 100%)}to{clip-path:polygon(0 0,0 0,0 100%,0 100%)}}\n@keyframes d-transition-wipe-diagonal-text{from{transform:translateX(-10px)}to{transform:translateX(0)}}"},{"id":"drag-deck","cat":"拖拽","t":"卡片堆拖拽","en":"drag deck","d":"甩出用 0.5px/ms 当门槛：比它慢的时候人其实是在「把牌摆正」，此时飞走就像误触。卡片 56px 的序号不是排版爱好——卡面只有 104px 高，字号阶里只有 56 能一眼数出「还剩几张」，序号本身就是信息，所以这条整块破格一次。层间缩 4.5%、下移 7px、再给 1.8° 的固定斜角，堆叠才读成一叠纸而不是三张叠起来的界面卡。","body":"<div class=\"d-deck\">\n  <div class=\"d-deck-stack\">\n    <article class=\"d-deck-card\" data-depth=\"2\"><b>03</b><em>第三张</em></article>\n    <article class=\"d-deck-card\" data-depth=\"1\"><b>02</b><em>第二张</em></article>\n    <article class=\"d-deck-card\" data-depth=\"0\" tabindex=\"0\" role=\"button\" aria-label=\"第一张卡片，左右拖动或按左右方向键甩出\"><b>01</b><em>左右甩我</em></article>\n  </div>\n  <p class=\"d-deck-hint\">甩出速度 > 0.5px/ms 直接飞走</p>\n</div>","css":".d-deck{position:relative;width:260px;height:150px;display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--ink)}\n.d-deck-stack{position:relative;width:100%;height:118px}\n.d-deck-card{position:absolute;left:50%;top:0;width:190px;height:104px;margin-left:-95px;display:flex;flex-direction:column;justify-content:space-between;padding:8px 10px;background:var(--paper);border:1px solid var(--line);border-radius:10px;box-shadow:0 1px 0 var(--line);transform-origin:50% 80%;cursor:grab;touch-action:none;user-select:none;will-change:transform}\n.d-deck-card[data-depth=\"1\"],.d-deck-card[data-depth=\"2\"]{background:var(--bg)}\n.d-deck-card b{font-size:56px;line-height:1;letter-spacing:-.03em;font-weight:650}\n.d-deck-card em{font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:.08em;color:var(--faint)}\n.d-deck-card[data-drag]{cursor:grabbing;box-shadow:0 12px 24px -8px #20241e26}\n.d-deck-card:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-deck-hint{margin:0;font-family:var(--mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}"},{"id":"drag-ghost-follow","cat":"拖拽","t":"拖拽残影","en":"ghost trail","d":"残影每帧按 0.3 追指针：0.5 就变成钉在指针上、没有重量，0.15 会一直掉半个身位、像卡住了。原件压到 0.28 不透明度也有上下限——再高会和残影抢注意力，再低就看不出「它原来在哪」，而「原来在哪」正是这条要传达的信息。","body":"<div class=\"d-ghost\" role=\"group\" aria-label=\"拖拽残影\">\n  <div class=\"d-ghost-slot\">\n    <span class=\"d-ghost-frame\" aria-hidden=\"true\"></span>\n    <article class=\"d-ghost-card\" tabindex=\"0\" role=\"button\" aria-label=\"按住拖动，原件留残影\"><b>原件</b><em>拖我</em></article>\n    <article class=\"d-ghost-copy\" aria-hidden=\"true\"><b>原件</b><em>拖我</em></article>\n  </div>\n  <p class=\"d-ghost-hint\">残影每帧按 0.3 追指针</p>\n</div>","css":".d-ghost{position:relative;width:300px;height:150px;padding:16px;color:var(--ink)}\n.d-ghost-slot{position:relative;width:120px;height:80px}\n.d-ghost-frame{position:absolute;inset:0;border:1px dashed var(--line);border-radius:10px}\n.d-ghost-card,.d-ghost-copy{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;padding:8px 10px;background:var(--paper);border:1px solid var(--line);border-radius:10px}\n.d-ghost-card{box-shadow:0 1px 0 var(--line);cursor:grab;touch-action:none;user-select:none;transition:opacity  180ms linear}\n.d-ghost-copy{border-color:var(--ink);box-shadow:0 12px 24px -8px #20241e26;opacity:0;pointer-events:none;will-change:transform}\n.d-ghost[data-drag=\"1\"] .d-ghost-card{opacity:.28;border-style:dashed;cursor:grabbing}\n.d-ghost-card b,.d-ghost-copy b{font-size:13px;font-weight:650}\n.d-ghost-card em,.d-ghost-copy em{font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:.08em;color:var(--faint)}\n.d-ghost-card:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-ghost-hint{position:absolute;left:16px;bottom:8px;margin:0;font-family:var(--mono);font-size:9px;color:var(--faint)}"},{"id":"drag-snap-grid","cat":"拖拽","t":"网格吸附","en":"snap grid","d":"吸附半径 26px 是照 48px 的格子算的：半格 24px 再加 2px 容错——半径只要小于半格，手指压着方块偏一格就永远吸不进去，人会觉得这功能坏了。对齐提示线只画 1px：它的作用是解释落点，不是参与构图，粗一格就把格子本身的秩序压掉了。格子松手用 280ms 落位，比 180ms 慢一点，落点才看得出是「归位」而不是被甩进去。","body":"<div class=\"d-snap\" role=\"group\" aria-label=\"网格吸附\">\n  <div class=\"d-snap-grid\">\n    <i class=\"d-snap-cell\"></i><i class=\"d-snap-cell\"></i><i class=\"d-snap-cell\"></i>\n    <i class=\"d-snap-cell\"></i><i class=\"d-snap-cell\"></i><i class=\"d-snap-cell\"></i>\n    <div class=\"d-snap-guide\" aria-hidden=\"true\"><i></i><i></i></div>\n  </div>\n  <div class=\"d-snap-tile\" tabindex=\"0\" role=\"button\" aria-label=\"拖动方块吸附到格子，方向键移动一格\"><b>1</b></div>\n  <p class=\"d-snap-hint\">离格心 26px 内松手就进去</p>\n</div>","css":".d-snap{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-snap-grid{position:absolute;left:12px;top:12px;display:grid;grid-template-columns:repeat(3,48px);grid-auto-rows:48px;gap:8px}\n.d-snap-cell{border:1px dashed var(--line);border-radius:6px}\n.d-snap-cell[data-hot]{border-style:solid;border-color:var(--ink);background:var(--bg)}\n.d-snap-guide{position:absolute;inset:0;opacity:0;pointer-events:none;transition:opacity .12s linear}\n.d-snap-guide[data-on]{opacity:1}\n.d-snap-guide i{position:absolute;background:var(--ink)}\n.d-snap-guide i:first-child{left:0;top:0;bottom:0;width:1px}\n.d-snap-guide i:last-child{top:0;left:0;right:0;height:1px}\n.d-snap-tile{position:absolute;left:0;top:0;width:40px;height:40px;display:grid;place-items:center;background:var(--paper);border:1px solid var(--ink);border-radius:6px;box-shadow:0 1px 0 var(--line);cursor:grab;touch-action:none;will-change:transform}\n.d-snap-tile b{font-family:var(--mono);font-size:13px;font-weight:500;color:#c2402a}\n.d-snap-tile[data-drag]{cursor:grabbing;box-shadow:0 12px 24px -8px #20241e26}\n.d-snap-tile:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-snap-hint{position:absolute;left:12px;bottom:4px;margin:0;font-family:var(--mono);font-size:9px;line-height:1.6;color:var(--faint)}"},{"id":"drag-swap","cat":"拖拽","t":"两卡互换","en":"drag to swap","d":"判定用「两张卡中心相距 58px 以内」而不是「碰到边缘」：手指会盖住接触点，按接触判定永远慢半拍，人会觉得没反应。目标卡只让 22px——正好是两卡间隙的一半，再多它就贴到画框边上，看着像目标卡先跑了；让位用 180ms、落位用 280ms，先让后落才有先后顺序。","body":"<div class=\"d-swap\" role=\"group\" aria-label=\"两张卡片，拖到另一张上互换\">\n  <div class=\"d-swap-slot\" data-slot=\"0\"></div>\n  <div class=\"d-swap-slot\" data-slot=\"1\"></div>\n  <article class=\"d-swap-card\" data-slot=\"0\" tabindex=\"0\" role=\"button\" aria-label=\"甲卡，拖到乙卡上互换\"><b>甲</b><em>01</em></article>\n  <article class=\"d-swap-card\" data-slot=\"1\" tabindex=\"0\" role=\"button\" aria-label=\"乙卡，拖到甲卡上互换\"><b>乙</b><em>02</em></article>\n  <p class=\"d-swap-hint\">拖到另一张上 · Enter 也能换</p>\n</div>","css":".d-swap{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-swap-slot{position:absolute;top:26px;left:24px;width:104px;height:78px;border:1px dashed var(--line);border-radius:10px}\n.d-swap-slot[data-slot=\"1\"]{left:172px}\n.d-swap-card{position:absolute;left:0;top:0;width:104px;height:78px;z-index:2;display:flex;flex-direction:column;justify-content:space-between;padding:8px 9px;background:var(--paper);border:1px solid var(--line);border-radius:10px;box-shadow:0 1px 0 var(--line);cursor:grab;touch-action:none;user-select:none;will-change:transform}\n.d-swap-card b{font-size:21px;line-height:1;font-weight:650}\n.d-swap-card em{font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:.08em;color:var(--faint)}\n.d-swap-card[data-drag]{cursor:grabbing;border-color:var(--ink);box-shadow:0 12px 24px -8px #20241e26}\n.d-swap-card[data-yield]{border-style:dashed}\n.d-swap-card:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-swap-hint{position:absolute;left:24px;bottom:8px;margin:0;font-family:var(--mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}"},{"id":"drag-threshold-hint","cat":"拖拽","t":"边界提示","en":"drag threshold","d":"越界后位移按 0.18 折算，是要把「拖不动」做成「拖得动但明显费劲」：折算到 0 就像卡死，到 0.3 又像还能拖出去。箭头要等你推过 6px 才亮——短促的抖手不该惊动提示，那 6px 就是「手抖」和「想出去」的分界。松手 280ms 弹回，比 180ms 多留一点被拉回去的感觉。","body":"<div class=\"d-bound\" role=\"group\" aria-label=\"拖到边界出现方向提示\">\n  <div class=\"d-bound-box\">\n    <i class=\"d-bound-arrow\" data-side=\"l\" aria-hidden=\"true\"></i>\n    <i class=\"d-bound-arrow\" data-side=\"r\" aria-hidden=\"true\"></i>\n    <i class=\"d-bound-arrow\" data-side=\"t\" aria-hidden=\"true\"></i>\n    <i class=\"d-bound-arrow\" data-side=\"b\" aria-hidden=\"true\"></i>\n    <div class=\"d-bound-knob\" tabindex=\"0\" role=\"button\" aria-label=\"拖动方块到边界，或用方向键\"><span>拖到边上</span></div>\n  </div>\n  <p class=\"d-bound-hint\">越界位移按 0.18 折算</p>\n</div>","css":".d-bound{position:relative;width:300px;height:150px;display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--ink)}\n.d-bound-box{position:relative;width:280px;height:120px;border:1px solid var(--line);border-radius:10px;background:var(--bg);overflow:hidden}\n.d-bound-arrow{position:absolute;width:6px;height:6px;border-top:1px solid var(--ink);border-right:1px solid var(--ink);opacity:0;transition:opacity .12s linear}\n.d-bound-arrow[data-side=\"l\"]{left:4px;top:50%;margin-top:-3px;transform:rotate(-135deg)}\n.d-bound-arrow[data-side=\"r\"]{right:4px;top:50%;margin-top:-3px;transform:rotate(45deg)}\n.d-bound-arrow[data-side=\"t\"]{top:4px;left:50%;margin-left:-3px;transform:rotate(-45deg)}\n.d-bound-arrow[data-side=\"b\"]{bottom:4px;left:50%;margin-left:-3px;transform:rotate(135deg)}\n.d-bound-box[data-push=\"l\"] .d-bound-arrow[data-side=\"l\"],.d-bound-box[data-push=\"r\"] .d-bound-arrow[data-side=\"r\"],.d-bound-box[data-push=\"t\"] .d-bound-arrow[data-side=\"t\"],.d-bound-box[data-push=\"b\"] .d-bound-arrow[data-side=\"b\"]{opacity:1}\n.d-bound-knob{position:absolute;left:8px;top:8px;width:88px;height:56px;display:grid;place-items:center;background:var(--paper);border:1px solid var(--ink);border-radius:6px;font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--muted);cursor:grab;touch-action:none;user-select:none;will-change:transform}\n.d-bound-knob[data-drag]{cursor:grabbing;box-shadow:0 12px 24px -8px #20241e26}\n.d-bound-knob:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-bound-hint{margin:0;font-family:var(--mono);font-size:9px;color:var(--faint)}"},{"id":"annotation-band","cat":"图表","t":"目标带与标注","en":"annotation band","d":"目标不是一个点，是一个可接受区间：画成一条线，人只会盯着「差 0.3」，画成带子，才知道一直在区间里。事件标注用一根细竖线加一句短语，不写长句——标注是路标，不是注释文章。","body":"<div class=\"d-ab\"><svg class=\"d-ab-svg\" viewBox=\"0 0 320 180\" role=\"img\" aria-label=\"带目标区间与事件标注的趋势图\"></svg><p class=\"d-ab-note\">灰带是可接受区间 · 两根竖线是事件</p></div>","css":".d-ab{width:100%;max-width:340px}\n.d-ab-svg{display:block;width:100%;height:auto;overflow:visible}\n.d-ab-axis{stroke:var(--line);stroke-width:1}\n.d-ab-band{fill:color-mix(in srgb,var(--ink) 9%,var(--paper))}\n.d-ab-line{fill:none;stroke:var(--ink);stroke-width:1.5;stroke-linejoin:round;stroke-linecap:round}\n.d-ab-mark{stroke:var(--ink-vermilion);stroke-width:1;stroke-dasharray:2 3}\n.d-ab-tag{fill:var(--ink-vermilion);font-family:var(--font-mono);font-size:7px;letter-spacing:.04em}\n.d-ab-label{fill:var(--faint);font-family:var(--font-mono);font-size:7px}\n.d-ab-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"area-stack","cat":"图表","t":"堆叠面积","en":"stacked area","d":"三条叠起来看的是「总共多少、各占多少」，不是三条各自的高低——单看某一条的起伏会误读，因为它底下的面积也在动。三层只用一档墨加两种油墨，靠明度分开；再加第三种颜色，读者就开始数颜色而不是看总量。","body":"<div class=\"d-as\"><svg class=\"d-as-svg\" viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"三层构成随时间变化的堆叠面积图\"></svg><p class=\"d-as-note\">三层构成 · 看总量也看占比</p></div>","css":".d-as{width:100%;max-width:340px}\n.d-as-svg{display:block;width:100%;height:auto;overflow:visible}\n.d-as-axis{stroke:var(--line);stroke-width:1}\n.d-as-label{fill:var(--faint);font-family:var(--font-mono);font-size:7px;letter-spacing:.06em}\n.d-as-s1{fill:var(--ink)}\n.d-as-s2{fill:var(--ink-vermilion)}\n.d-as-s3{fill:var(--ink-yellow)}\n.d-as-s1,.d-as-s2,.d-as-s3{opacity:.85}\n.d-as-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"bar-grouped","cat":"图表","t":"分组柱","en":"grouped bars","d":"两根柱之间留 4px、组与组之间留 18px：间距就是分组信号，两组一样宽反而分不出谁跟谁比。基線从 0 起，不给「截断轴」——截断能让差距看着翻倍，那是骗人。悬停整组变色，是为了让你比较一组里的两根，而不是单根。","body":"<div class=\"d-bg2\"><svg class=\"d-bg2-svg\" viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"四组对比柱状图，每组两根\"></svg><p class=\"d-bg2-note\">深浅两根：今年 / 去年</p></div>","css":".d-bg2{width:100%;max-width:340px}\n.d-bg2-svg{display:block;width:100%;height:auto;overflow:visible}\n.d-bg2-axis{stroke:var(--line);stroke-width:1}\n.d-bg2-label{fill:var(--faint);font-family:var(--font-mono);font-size:7px;letter-spacing:.06em}\n.d-bg2-a{fill:var(--ink)}\n.d-bg2-b{fill:color-mix(in srgb,var(--ink) 28%,var(--paper))}\n.d-bg2-g{cursor:default}\n.d-bg2-g .d-bg2-a,.d-bg2-g .d-bg2-b{transition:opacity 160ms var(--ease-print)}\n.d-bg2-svg:hover .d-bg2-g{opacity:.45}\n.d-bg2-svg .d-bg2-g:hover{opacity:1}\n.d-bg2-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"bullet-chart","cat":"图表","t":"子弹图","en":"bullet chart","d":"一根横条同时给三件事：实际走到哪、目标在哪、量程多大。背景三段是量程分区（差 / 中 / 好），不是三个数据；把分区做成一样深，它们就会跟实际值抢读。目标线是竖线，不画成第二根条——它只是一个位置。","body":"<div class=\"d-bc\"><div class=\"d-bc-item\"><span>响应速度</span><i class=\"d-bc-bar\"><b style=\"--w:72%\"></b><s style=\"--t:80%\"></s></i><em>72 / 80</em></div><div class=\"d-bc-item\"><span>一次通过</span><i class=\"d-bc-bar\"><b style=\"--w:46%\"></b><s style=\"--t:70%\"></s></i><em>46 / 70</em></div><div class=\"d-bc-item\"><span>当日关闭</span><i class=\"d-bc-bar\"><b style=\"--w:91%\"></b><s style=\"--t:85%\"></s></i><em>91 / 85</em></div><p class=\"d-bc-note\">条是实际 · 竖线是目标</p></div>","css":".d-bc{width:100%;max-width:340px;display:flex;flex-direction:column;gap:12px}\n.d-bc-item{display:grid;grid-template-columns:64px 1fr 52px;align-items:center;gap:10px}\n.d-bc-item>span{font-size:11px;color:var(--muted)}\n.d-bc-bar{position:relative;display:block;height:14px;border-radius:2px;background:linear-gradient(90deg,color-mix(in srgb,var(--ink) 7%,var(--paper)) 0 50%,color-mix(in srgb,var(--ink) 12%,var(--paper)) 50% 80%,color-mix(in srgb,var(--ink) 18%,var(--paper)) 80% 100%)}\n.d-bc-bar b{position:absolute;left:0;top:4px;height:6px;width:var(--w);border-radius:2px;background:var(--ink)}\n.d-bc-bar s{position:absolute;top:-2px;bottom:-2px;left:var(--t);width:2px;background:var(--ink-vermilion);text-decoration:none}\n.d-bc-item em{font-family:var(--font-mono);font-style:normal;font-size:9px;color:var(--faint);text-align:right}\n.d-bc-note{margin:0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"chart-empty-states","cat":"图表","t":"图表三态","en":"chart empty states","d":"没有数据、正在加载、取数失败，是三种完全不同的处境，不能都用一句「暂无数据」。加载态给骨架轮廓，位置和真图一样，出来时不跳；失败态必须给重试和一句人话原因；空态告诉人下一步做什么，不是只说「空」。","body":"<div class=\"d-ce\"><div class=\"d-ce-tabs\" role=\"tablist\" aria-label=\"图表状态切换\"><button type=\"button\" role=\"tab\" aria-selected=\"true\" data-s=\"empty\">无数据</button><button type=\"button\" role=\"tab\" aria-selected=\"false\" data-s=\"loading\">加载中</button><button type=\"button\" role=\"tab\" aria-selected=\"false\" data-s=\"error\">出错</button></div><div class=\"d-ce-body\" data-body></div></div>","css":".d-ce{width:100%;max-width:340px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden}\n.d-ce-tabs{display:flex;gap:2px;padding:6px 8px;border-bottom:1px solid var(--line)}\n.d-ce-tabs button{padding:4px 10px;border:1px solid transparent;border-radius:999px;background:transparent;color:var(--muted);font:inherit;font-size:11px;cursor:pointer}\n.d-ce-tabs button[aria-selected=\"true\"]{border-color:var(--line);background:var(--bg);color:var(--ink)}\n.d-ce-body{display:grid;place-items:center;height:140px;padding:14px;text-align:center}\n.d-ce-t{font-size:11px;color:var(--ink);margin:0 0 2px}\n.d-ce-p{font-size:11px;color:var(--muted);margin:0;max-width:26ch}\n.d-ce-btn{margin-top:10px;padding:5px 14px;border:1px solid var(--line);border-radius:999px;background:var(--bg);color:var(--ink);font:inherit;font-size:11px;cursor:pointer}\n.d-ce-sk{width:100%;height:96px;display:flex;align-items:flex-end;gap:6px}\n.d-ce-sk i{flex:1;border-radius:2px 2px 0 0;background:color-mix(in srgb,var(--ink) 10%,var(--paper));animation:d-chart-empty-states-pulse 900ms var(--ease-print) infinite alternate}\n.d-ce-sk i:nth-child(2n){animation-delay:120ms}\n@keyframes d-chart-empty-states-pulse{from{opacity:.55}to{opacity:1}}"},{"id":"chart-small-multiples","cat":"图表","t":"小多图","en":"small multiples","d":"同一个指标切成六组并排，共用一条纵轴：各自缩放会让六张小图看起来一样高，那就什么都比不出来了。小图不画轴、不画网格，只在左下角留一个组名——它们是同一张图的六个切片，不是六张图。","body":"<div class=\"d-sm3\"><div class=\"d-sm3-grid\"><figure><svg data-v=\"12,15,14,18,17,21\"></svg><figcaption>华东</figcaption></figure><figure><svg data-v=\"22,20,21,19,18,19\"></svg><figcaption>华北</figcaption></figure><figure><svg data-v=\"8,11,10,13,16,19\"></svg><figcaption>华南</figcaption></figure><figure><svg data-v=\"14,13,15,14,16,15\"></svg><figcaption>西南</figcaption></figure><figure><svg data-v=\"6,7,9,8,11,12\"></svg><figcaption>西北</figcaption></figure><figure><svg data-v=\"18,21,20,24,23,26\"></svg><figcaption>海外</figcaption></figure></div><p class=\"d-sm3-note\">同一纵轴 · 六个切片</p></div>","css":".d-sm3{width:100%;max-width:340px}\n.d-sm3-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}\n.d-sm3 figure{margin:0;padding:6px 6px 4px;border:1px solid var(--line);border-radius:6px;background:var(--paper)}\n.d-sm3 svg{display:block;width:100%;height:34px;overflow:visible}\n.d-sm3 figcaption{margin-top:2px;font-family:var(--font-mono);font-size:8px;letter-spacing:.06em;color:var(--faint)}\n.d-sm3-line{fill:none;stroke:var(--ink);stroke-width:1.5;stroke-linejoin:round;stroke-linecap:round}\n.d-sm3-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"donut-progress","cat":"图表","t":"环形进度","en":"donut progress","d":"环只画一个数：68% 这种单一指标适合环，是因为环天然对应「一圈里占了多少」。多指标别用多个环并排，人比不出两个环的面积差；换成条形更准。缺口从 12 点方向开始，顺时针走，跟表盘一致。","body":"<div class=\"d-dp2\"><svg class=\"d-dp2-svg\" viewBox=\"0 0 120 120\" role=\"img\" aria-label=\"完成度 68% 的环形进度\"><circle class=\"d-dp2-bg\" cx=\"60\" cy=\"60\" r=\"46\"></circle><circle class=\"d-dp2-fg\" cx=\"60\" cy=\"60\" r=\"46\"></circle><text class=\"d-dp2-num\" x=\"60\" y=\"62\" text-anchor=\"middle\">68%</text><text class=\"d-dp2-cap\" x=\"60\" y=\"78\" text-anchor=\"middle\">本月完成</text></svg><p class=\"d-dp2-note\">环只给一个数</p></div>","css":".d-dp2{display:flex;flex-direction:column;align-items:center;gap:4px;width:100%;max-width:340px}\n.d-dp2-svg{display:block;width:132px;height:132px}\n.d-dp2-bg{fill:none;stroke:var(--line);stroke-width:8}\n.d-dp2-fg{fill:none;stroke:var(--ink);stroke-width:8;stroke-linecap:round;transform:rotate(-90deg);transform-origin:60px 60px;stroke-dasharray:0 1000;transition:stroke-dasharray 620ms var(--ease-print)}\n.d-dp2-num{fill:var(--ink);font-size:21px;font-weight:650;letter-spacing:-.02em}\n.d-dp2-cap{fill:var(--faint);font-family:var(--font-mono);font-size:7px;letter-spacing:.08em}\n.d-dp2-note{margin:0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"heatmap-calendar","cat":"图表","t":"日历热力","en":"calendar heatmap","d":"一格一天，一列一周，行是星期几：位置固定，面积才可比。深浅只分五档，再多档人眼分不出；0 单独用一个接近纸面的颜色，跟「有一点」区别开。二十周就够看趋势，画满一年格子在卡片里会小到看不清。","body":"<div class=\"d-hc\"><div class=\"d-hc-grid\" aria-label=\"近二十周的活跃度热力图\"><svg class=\"d-hc-svg\" viewBox=\"0 0 320 116\" role=\"img\" aria-label=\"二十周、每周七天的活跃度热力图\"></svg></div><div class=\"d-hc-legend\"><span>少</span><i data-l=\"0\"></i><i data-l=\"1\"></i><i data-l=\"2\"></i><i data-l=\"3\"></i><i data-l=\"4\"></i><span>多</span></div></div>","css":".d-hc{width:100%;max-width:340px}\n.d-hc-svg{display:block;width:100%;height:auto}\n.d-hc-cell{stroke:var(--bg);stroke-width:1}\n.d-hc-legend{display:flex;align-items:center;gap:4px;margin-top:6px;font-family:var(--font-mono);font-size:8px;color:var(--faint)}\n.d-hc-legend i{width:9px;height:9px;border-radius:2px;display:block}\n.d-hc-legend i[data-l=\"0\"]{background:color-mix(in srgb,var(--ink) 6%,var(--paper))}\n.d-hc-legend i[data-l=\"1\"]{background:color-mix(in srgb,var(--ink) 18%,var(--paper))}\n.d-hc-legend i[data-l=\"2\"]{background:color-mix(in srgb,var(--ink) 34%,var(--paper))}\n.d-hc-legend i[data-l=\"3\"]{background:color-mix(in srgb,var(--ink) 58%,var(--paper))}\n.d-hc-legend i[data-l=\"4\"]{background:var(--ink)}"},{"id":"histogram","cat":"图表","t":"直方图","en":"histogram","d":"柱子之间不留缝，因为横轴是连续的数值区间，不是几个并列的类别；留缝就会让人以为组与组之间有空白。均值线画在柱子上层、虚线、比柱子深一档，位置对得上才算数。区间宽度取 5：太细看不出形状，太粗只剩三根柱子。","body":"<div class=\"d-hg\"><svg class=\"d-hg-svg\" viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"测量误差分布直方图，共 14 个区间\"></svg><p class=\"d-hg-note\">虚线是均值 · 区间宽 5</p></div>","css":".d-hg{width:100%;max-width:340px}\n.d-hg-svg{display:block;width:100%;height:auto;overflow:visible}\n.d-hg-axis{stroke:var(--line);stroke-width:1}\n.d-hg-label{fill:var(--faint);font-family:var(--font-mono);font-size:7px;letter-spacing:.06em}\n.d-hg-bar{fill:color-mix(in srgb,var(--ink) 78%,var(--paper))}\n.d-hg-bar.hi{fill:var(--ink-vermilion)}\n.d-hg-mean{stroke:var(--ink);stroke-width:1;stroke-dasharray:3 3}\n.d-hg-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"legend-toggle","cat":"图表","t":"图例联动","en":"legend toggle","d":"点图例关掉一条线，纵轴不跟着缩：一缩，剩下的线立刻被拉高，看起来像涨了，其实是删了数据。关掉的那条在图例上留一道删除线，随时能点回来——图例既是开关，也是当前状态的记录。","body":"<div class=\"d-lt2\"><div class=\"d-lt2-legend\"><button type=\"button\" data-k=\"0\" aria-pressed=\"true\"><i></i>访问</button><button type=\"button\" data-k=\"1\" aria-pressed=\"true\"><i></i>注册</button><button type=\"button\" data-k=\"2\" aria-pressed=\"true\"><i></i>付费</button></div><svg class=\"d-lt2-svg\" viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"三条趋势线的图例开关\"></svg></div>","css":".d-lt2{width:100%;max-width:340px}\n.d-lt2-legend{display:flex;gap:8px;margin-bottom:4px}\n.d-lt2-legend button{display:inline-flex;align-items:center;gap:5px;padding:3px 9px;border:1px solid var(--line);border-radius:999px;background:var(--paper);color:var(--ink);font:inherit;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;cursor:pointer}\n.d-lt2-legend button[aria-pressed=\"false\"]{color:var(--faint);text-decoration:line-through}\n.d-lt2-legend i{width:10px;height:2px;display:block;background:var(--ink)}\n.d-lt2-legend button:nth-child(2) i{background:var(--ink-vermilion)}\n.d-lt2-legend button:nth-child(3) i{background:var(--ink-indigo)}\n.d-lt2-svg{display:block;width:100%;height:auto;overflow:visible}\n.d-lt2-axis{stroke:var(--line);stroke-width:1}\n.d-lt2-line{fill:none;stroke-width:1.5;stroke-linejoin:round;stroke-linecap:round;transition:opacity 180ms var(--ease-print)}\n.d-lt2-s0{stroke:var(--ink)}\n.d-lt2-s1{stroke:var(--ink-vermilion)}\n.d-lt2-s2{stroke:var(--ink-indigo)}\n.d-lt2-off{opacity:.12}"},{"id":"line-chart","cat":"图表","t":"折线趋势","en":"line chart","d":"12 个月只留 4 个横轴标签：每月都标，字会挤成一片，反而看不出趋势。悬停时十字线吸附到最近的点而不是跟着鼠标飘——读数要落在真实数据上，落在两点之间就是假数据。线用 1.5px，网格 1px 且压到很淡：图是主角，不是网格。","body":"<div class=\"d-lc\"><svg class=\"d-lc-svg\" viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"月度访问量折线图，共 12 个月\"></svg><p class=\"d-lc-note\">悬停看每月读数</p></div>","css":".d-lc{position:relative;width:100%;max-width:340px}\n.d-lc-svg{display:block;width:100%;height:auto;overflow:visible}\n.d-lc-axis{stroke:var(--line);stroke-width:1}\n.d-lc-label{fill:var(--faint);font-family:var(--font-mono);font-size:7px;letter-spacing:.06em}\n.d-lc-line{fill:none;stroke:var(--ink);stroke-width:1.5;stroke-linejoin:round;stroke-linecap:round}\n.d-lc-dot{fill:var(--paper);stroke:var(--ink);stroke-width:1.5;opacity:0}\n.d-lc-dot.on{opacity:1}\n.d-lc-cross{stroke:var(--line);stroke-width:1;stroke-dasharray:2 3;opacity:0}\n.d-lc-cross.on{opacity:1}\n.d-lc-val{fill:var(--ink);font-size:11px;font-weight:650}\n.d-lc-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"radar-chart","cat":"图表","t":"雷达图","en":"radar chart","d":"只放两组、五个维度：再多几条线就互相盖住，读不出谁是谁。轴从中心 0 起，别为了让形状变好看把最小值抬高——那会把「全都不行」画成一个饱满的多边形。两组用实线和虚线，不靠颜色区分：复印和色盲都不受影响。","body":"<div class=\"d-rd\"><svg class=\"d-rd-svg\" viewBox=\"0 0 240 200\" role=\"img\" aria-label=\"五维能力雷达图，两条对比\"></svg><p class=\"d-rd-note\">实线今年 · 虚线去年</p></div>","css":".d-rd{display:flex;flex-direction:column;align-items:center;width:100%;max-width:340px}\n.d-rd-svg{display:block;width:216px;height:180px;overflow:visible}\n.d-rd-grid{fill:none;stroke:var(--line);stroke-width:1}\n.d-rd-spoke{stroke:var(--line);stroke-width:1}\n.d-rd-lab{fill:var(--faint);font-family:var(--font-mono);font-size:7px}\n.d-rd-a{fill:color-mix(in srgb,var(--ink) 14%,transparent);stroke:var(--ink);stroke-width:1.5}\n.d-rd-b{fill:none;stroke:var(--ink-vermilion);stroke-width:1.25;stroke-dasharray:3 3}\n.d-rd-note{margin:2px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"scatter-plot","cat":"图表","t":"散点相关","en":"scatter plot","d":"四十六个点里只标一个离群点：全标等于没标，人会先去读标注而不是先看形状。点用 2px 实心、不加描边，叠在一起还能看出密度；加描边就把密度糊成一团。横纵轴范围从 0 起，因为这两个量没有负值，硬拉开只会让相关性看着更强。","body":"<div class=\"d-sp2\"><svg class=\"d-sp2-svg\" viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"两组数据的散点图，标出一个离群点\"></svg><p class=\"d-sp2-note\">点越靠右上，两个量一起涨</p></div>","css":".d-sp2{width:100%;max-width:340px}\n.d-sp2-svg{display:block;width:100%;height:auto;overflow:visible}\n.d-sp2-axis{stroke:var(--line);stroke-width:1}\n.d-sp2-label{fill:var(--faint);font-family:var(--font-mono);font-size:7px;letter-spacing:.06em}\n.d-sp2-dot{fill:var(--ink);opacity:.55}\n.d-sp2-out{fill:var(--ink-vermilion);opacity:1}\n.d-sp2-tag{fill:var(--ink-vermilion);font-family:var(--font-mono);font-size:7px;letter-spacing:.04em}\n.d-sp2-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"slope-chart","cat":"图表","t":"斜率图","en":"slope chart","d":"只看两个时间点之间的变化，不画中间过程：斜率图回答的是「谁上去了、谁掉下来了」，不是「怎么变的」。交叉的线最显眼，所以顺序按终点排、不按起点排，一眼就能看出谁反超。两条线就够了，三条以上开始乱；真要三组，换成分组柱。","body":"<div class=\"d-sl\"><svg class=\"d-sl-svg\" viewBox=\"0 0 320 180\" role=\"img\" aria-label=\"去年与今年的排名变化斜率图\"></svg><p class=\"d-sl-note\">去年 → 今年 · 交叉的是反超</p></div>","css":".d-sl{width:100%;max-width:340px}\n.d-sl-svg{display:block;width:100%;height:auto;overflow:visible}\n.d-sl-line{stroke-width:1.5;stroke-linecap:round}\n.d-sl-up{stroke:var(--ink)}\n.d-sl-down{stroke:var(--ink-vermilion)}\n.d-sl-dot{fill:var(--paper);stroke-width:1.5}\n.d-sl-up.d-sl-dot{stroke:var(--ink)}\n.d-sl-down.d-sl-dot{stroke:var(--ink-vermilion)}\n.d-sl-name{fill:var(--ink);font-size:8px}\n.d-sl-val{fill:var(--faint);font-family:var(--font-mono);font-size:7px}\n.d-sl-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"sparkline-grid","cat":"图表","t":"迷你趋势","en":"sparkline grid","d":"表格里的趋势不该占一整个图表位：一条 28px 高的线，只画形状不画轴，配一个涨跌数字就够了。线不填充、端点不留圆点——在 28px 里加任何装饰都会盖住形状本身。数值涨用墨、跌用朱，别用红绿：这套纸色里没有交通灯。","body":"<div class=\"d-sg2\"><div class=\"d-sg2-row\"><span class=\"d-sg2-k\">访问</span><svg class=\"d-sg2-s\" data-v=\"12,18,15,22,26,24,31\"></svg><b class=\"d-sg2-up\">+18%</b></div><div class=\"d-sg2-row\"><span class=\"d-sg2-k\">注册</span><svg class=\"d-sg2-s\" data-v=\"9,11,10,12,11,10,9\"></svg><b class=\"d-sg2-down\">−6%</b></div><div class=\"d-sg2-row\"><span class=\"d-sg2-k\">留存</span><svg class=\"d-sg2-s\" data-v=\"20,19,21,22,24,23,27\"></svg><b class=\"d-sg2-up\">+9%</b></div></div>","css":".d-sg2{width:100%;max-width:340px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden}\n.d-sg2-row{display:grid;grid-template-columns:52px 1fr 48px;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid var(--line)}\n.d-sg2-row:last-child{border-bottom:0}\n.d-sg2-k{font-size:11px;color:var(--muted)}\n.d-sg2-s{display:block;width:100%;height:28px;overflow:visible}\n.d-sg2-line{fill:none;stroke:var(--ink);stroke-width:1.5;stroke-linejoin:round;stroke-linecap:round}\n.d-sg2-b{font-family:var(--font-mono);font-size:11px;text-align:right}\n.d-sg2-up{color:var(--ink)}\n.d-sg2-down{color:var(--ink-vermilion)}"},{"id":"stacked-100","cat":"图表","t":"百分比堆叠条","en":"100% stacked bar","d":"一行就是 100%，段与段之间留 1px 缝：不留缝时两块深色挨在一起就并成一条，看不出是三类。只在占比超过 12% 的段里写字，小段写字会溢出——小段靠图例，不靠标签。四行并排比高低，比四个饼图准得多。","body":"<div class=\"d-s1\"><div class=\"d-s1-row\"><span>桌面</span><i class=\"d-s1-bar\"><b style=\"--w:54%\">54%</b><b style=\"--w:31%\">31%</b><b style=\"--w:15%\"></b></i></div><div class=\"d-s1-row\"><span>平板</span><i class=\"d-s1-bar\"><b style=\"--w:38%\">38%</b><b style=\"--w:41%\">41%</b><b style=\"--w:21%\">21%</b></i></div><div class=\"d-s1-row\"><span>手机</span><i class=\"d-s1-bar\"><b style=\"--w:22%\">22%</b><b style=\"--w:33%\">33%</b><b style=\"--w:45%\">45%</b></i></div><p class=\"d-s1-note\">三段：新访 / 回访 / 沉默</p></div>","css":".d-s1{width:100%;max-width:340px;display:flex;flex-direction:column;gap:10px}\n.d-s1-row{display:grid;grid-template-columns:44px 1fr;align-items:center;gap:10px}\n.d-s1-row>span{font-size:11px;color:var(--muted)}\n.d-s1-bar{display:flex;gap:1px;height:22px;border-radius:2px;overflow:hidden;background:var(--line)}\n.d-s1-bar b{display:flex;align-items:center;justify-content:center;width:var(--w);background:color-mix(in srgb,var(--ink) 22%,var(--paper));font-family:var(--font-mono);font-size:9px;font-weight:400;color:var(--muted)}\n.d-s1-bar b:nth-child(1){background:var(--ink);color:var(--paper)}\n.d-s1-bar b:nth-child(2){background:color-mix(in srgb,var(--ink) 45%,var(--paper));color:var(--paper)}\n.d-s1-note{margin:2px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"treemap","cat":"图表","t":"矩形树图","en":"treemap","d":"面积就是占比，所以只能拿面积比，不能拿长短比——人估面积误差大，这张图适合看「谁明显更大」，不适合读精确数值。只在能放下字的块里写标签，放不下就留空，硬塞会把字压成两个字。块按大小从左上角排，眼睛先落在那里。","body":"<div class=\"d-tm\"><svg class=\"d-tm-svg\" viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"流量来源的矩形树图\"></svg><p class=\"d-tm-note\">面积 = 占比</p></div>","css":".d-tm{width:100%;max-width:340px}\n.d-tm-svg{display:block;width:100%;height:auto}\n.d-tm-cell{stroke:var(--paper);stroke-width:2}\n.d-tm-text{fill:var(--paper);font-size:9px;font-weight:600}\n.d-tm-val{fill:var(--paper);font-family:var(--font-mono);font-size:7px;opacity:.8}\n.d-tm-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"waterfall","cat":"图表","t":"瀑布拆解","en":"waterfall chart","d":"先给起点、再给每次增减、最后落到终点，中间那几根悬空才是瀑布图的意义：每一段从上一段的落点开始，不是从零开始。桥接线用虚线，是在说「这两根不是并列，是接力」。增减只用一个墨色加一档透明，不靠红绿——色盲跟打印都还看得懂上下。","body":"<div class=\"d-wf\"><svg class=\"d-wf-svg\" viewBox=\"0 0 320 170\" role=\"img\" aria-label=\"月度变化瀑布图：起点、三次增减、终点\"></svg><p class=\"d-wf-note\">每根从上根的落点起</p></div>","css":".d-wf{width:100%;max-width:340px}\n.d-wf-svg{display:block;width:100%;height:auto;overflow:visible}\n.d-wf-axis{stroke:var(--line);stroke-width:1}\n.d-wf-label{fill:var(--faint);font-family:var(--font-mono);font-size:7px;letter-spacing:.06em}\n.d-wf-bar{fill:var(--ink)}\n.d-wf-up{fill:var(--ink-vermilion)}\n.d-wf-down{fill:color-mix(in srgb,var(--ink) 30%,var(--paper))}\n.d-wf-link{stroke:var(--line);stroke-width:1;stroke-dasharray:2 2}\n.d-wf-val{fill:var(--ink);font-family:var(--font-mono);font-size:7px}\n.d-wf-note{margin:6px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"text-line-mask","cat":"排印","t":"逐行遮罩","en":"line mask","d":"行用 overflow:hidden 遮住、字上移 112%（多出的 12% 盖住字头，否则行顶会漏一条白缝），每行错 120ms——正好是一行中文读完的时间，像排字工一行行把字放上版。","body":"<div class=\"d-line-mask\" tabindex=\"0\" role=\"group\" aria-label=\"逐行遮罩，回车重播\"><span class=\"d-lm-row\"><i>把字排直</i></span><span class=\"d-lm-row\"><i>让行站队</i></span><span class=\"d-lm-row\"><i>再准它出现</i></span></div>","css":".d-line-mask{width:248px;max-width:100%;padding:4px 0;font-family:var(--sans);color:var(--ink);outline:none}\n.d-line-mask .d-lm-row{display:block;overflow:hidden;padding-bottom:1px}\n.d-line-mask .d-lm-row i{display:block;font-style:normal;font-size:var(--fs-21);font-weight:650;line-height:var(--lh-display);letter-spacing:-.03em;transform:translateY(112%);animation:d-text-line-mask-rise 280ms cubic-bezier(.2,.75,.25,1) both;animation-delay:calc(var(--i,0) * 120ms)}\n.d-line-mask .d-lm-row:nth-child(2){--i:1}\n.d-line-mask .d-lm-row:nth-child(3){--i:2}\n.d-line-mask.is-reset .d-lm-row i{animation:none}\n.d-line-mask:focus-visible{outline:1px solid var(--ink);outline-offset:6px}\n@keyframes d-text-line-mask-rise{to{transform:translateY(0)}}"},{"id":"text-scramble","cat":"排印","t":"乱码解码","en":"scramble","d":"乱码每 120ms 定住一位，未定的位换成同宽等宽字符，因为等宽决定换值时整行不抖；定型从左往右，读者才有「这句到底要说哪个字」的预期。","body":"<div class=\"d-scramble\" tabindex=\"0\" role=\"group\" aria-label=\"乱码解码，回车重播\"><span class=\"d-sc-text\">正在生成页面</span><i class=\"d-sc-caret\" aria-hidden=\"true\"></i></div>","css":".d-scramble{display:inline-flex;align-items:center;gap:2px;font-family:var(--mono);font-size:var(--fs-21);line-height:1;letter-spacing:.08em;color:var(--ink);outline:none;cursor:pointer}\n.d-scramble .d-sc-ch{font-variant-numeric:tabular-nums}\n.d-scramble .d-sc-ch:not(.is-fixed){color:var(--faint)}\n.d-scramble .d-sc-caret{display:inline-block;width:1px;height:var(--fs-21);background:var(--ink);animation:d-text-scramble-blink 900ms steps(6) infinite}\n.d-scramble:focus-visible{outline:1px solid var(--ink);outline-offset:6px}\n@keyframes d-text-scramble-blink{50%{opacity:0}}"},{"id":"text-strike-draw","cat":"排印","t":"删除线手绘","en":"strike draw","d":"线用 scaleX 从 0 拉到 1（不写 width，避免每帧重排把字挤动），两端各探出 2px、落在字高中线偏下 1px——手划删除线不会正好停在笔画边缘。","body":"<div class=\"d-strike-draw\" tabindex=\"0\" role=\"group\" aria-label=\"删除线手绘，回车重画\"><span class=\"d-sd-old\">原价 128</span><span class=\"d-sd-new\">现价 96</span></div>","css":".d-strike-draw{display:inline-flex;flex-direction:column;gap:2px;font-family:var(--sans);outline:none;cursor:pointer}\n.d-strike-draw .d-sd-old{position:relative;display:inline-block;font-size:var(--fs-21);font-weight:600;letter-spacing:-.01em;color:var(--muted)}\n.d-strike-draw .d-sd-old::after{content:\"\";position:absolute;left:-2px;right:-2px;top:calc(50% + 1px);height:1px;background:var(--ink);transform:scaleX(0);transform-origin:left center;animation:d-text-strike-draw-line 280ms cubic-bezier(.2,.75,.25,1) 120ms both}\n.d-strike-draw .d-sd-new{font-size:var(--fs-13);color:var(--ink);opacity:0;animation:d-text-strike-draw-new 120ms linear 280ms both}\n.d-strike-draw.is-reset .d-sd-old::after,.d-strike-draw.is-reset .d-sd-new{animation:none}\n.d-strike-draw:focus-visible{outline:1px solid var(--ink);outline-offset:6px}\n@keyframes d-text-strike-draw-line{to{transform:scaleX(1)}}\n@keyframes d-text-strike-draw-new{to{opacity:1}}"},{"id":"text-width-collapse","cat":"排印","t":"字宽压缩","en":"width collapse","d":"字宽只压到 .75、放到 1.18：超过 ±25% 读者先看到「变形」而不是「宽窄」；基线锚在左侧，缩放都往右长，字才不像被整体缩放。900ms 是唯一能看清中间态的时长——这是连续量，不是反馈。34px 是本条唯一的破格，字号阶里的展示档只为一句话用。","body":"<div class=\"d-width-collapse\" tabindex=\"0\" role=\"button\" aria-pressed=\"false\" aria-label=\"切换字宽\"><span class=\"d-wc-word\">可变字宽</span><span class=\"d-wc-meta\">wdth 75</span></div>","css":".d-width-collapse{display:inline-flex;flex-direction:column;gap:2px;width:max-content;max-width:100%;font-family:var(--sans);outline:none;cursor:pointer}\n.d-width-collapse .d-wc-word{display:inline-block;transform-origin:left center;font-size:var(--fs-34);font-weight:600;line-height:var(--lh-display);letter-spacing:-.03em;color:var(--ink);transform:scaleX(.75);transition:transform 900ms cubic-bezier(.2,.75,.25,1),letter-spacing 900ms cubic-bezier(.2,.75,.25,1)}\n.d-width-collapse .d-wc-meta{font-family:var(--mono);font-size:var(--fs-9);letter-spacing:.08em;color:var(--faint)}\n.d-width-collapse.is-wide .d-wc-word{transform:scaleX(1.18);letter-spacing:.02em}\n.d-width-collapse.is-wide .d-wc-meta{color:var(--muted)}\n.d-width-collapse:focus-visible{outline:1px solid var(--ink);outline-offset:6px}"},{"id":"contrast-toggle","cat":"无障碍","t":"高对比模式","en":"contrast toggle","d":"两态之间不做淡入淡出：拨杆用 steps(6) 走 120ms，一格一格换挡，像老印刷机的调墨杆——过渡会让人怀疑「是不是还在切」。真正只换三样：正文落到 --ink、描边从 --line 加深到 --ink、0 1px 0 的底边阴影清零；颜色一变立刻可读，不用等动画结束。","body":"<div class=\"d-ct\"><div class=\"d-ct-card\"><b class=\"d-ct-h\">第 04 期 · 排字房札记</b><p class=\"d-ct-p\">行距 1.7，字距 0，欠一档光就够读。</p><span class=\"d-ct-meta\">p.14 / 全文 2200 字</span></div><div class=\"d-ct-bar\"><button class=\"d-ct-sw\" type=\"button\" role=\"switch\" aria-checked=\"false\"><i class=\"d-ct-track\"><i class=\"d-ct-knob\" aria-hidden=\"true\"></i></i><span class=\"d-ct-opt\">高对比</span></button><span class=\"d-ct-state\">STATE · 正常</span></div></div>","css":".d-ct{width:300px;max-width:100%;height:150px;padding:12px;border:1px solid var(--line);border-radius:2px;background:var(--bg);font-family:var(--sans)}\n.d-ct-card{padding:7px 10px;border:1px solid var(--line);border-radius:2px;background:var(--paper);box-shadow:0 1px 0 var(--line)}\n.d-ct-h{display:block;font-size:11px;line-height:1.5;font-weight:650;color:var(--ink)}\n.d-ct-p{margin:4px 0 0;font-size:11px;line-height:1.6;color:var(--muted)}\n.d-ct-meta{display:block;margin-top:6px;font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}\n.d-ct-bar{display:flex;align-items:center;gap:10px;margin-top:10px}\n.d-ct-sw{display:inline-flex;align-items:center;gap:6px;padding:3px 8px 3px 4px;border:1px solid var(--line);border-radius:999px;background:var(--paper);cursor:pointer}\n.d-ct-sw:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-ct-track{display:block;width:32px;height:16px;padding:1px;border:1px solid var(--line);border-radius:999px;background:var(--bg)}\n.d-ct-knob{display:block;width:12px;height:12px;border-radius:999px;background:var(--faint);transform:translateX(0);transition:transform 120ms steps(6),background-color 120ms steps(6)}\n.d-ct-opt{font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--muted)}\n.d-ct-state{font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}\n.d-ct.is-hc{background:var(--paper)}\n.d-ct.is-hc .d-ct-card{box-shadow:none;border-color:var(--ink)}\n.d-ct.is-hc .d-ct-p{color:var(--ink)}\n.d-ct.is-hc .d-ct-meta{color:var(--muted)}\n.d-ct.is-hc .d-ct-track{border-color:var(--ink);background:var(--paper)}\n.d-ct.is-hc .d-ct-opt,.d-ct.is-hc .d-ct-state{color:var(--ink)}\n.d-ct.is-hc .d-ct-knob{transform:translateX(16px);background:var(--ink)}"},{"id":"focus-trap-dialog","cat":"无障碍","t":"焦点陷阱","en":"focus trap","d":"焦点不淡入：三个按钮下面那根 1px 游标用 120ms 的 steps(6) 一格格挪，像字车走位，读者能数出焦点在第几个；弹层本身也只用 120ms 六步从 6px 外落到位，不给缓动。Tab 到底回第一个、Esc 关掉并把焦点送回触发按钮——这两条缺一条，键盘用户就不敢在弹层里按回车。","body":"<div class=\"d-ftd\"><div class=\"d-ftd-page\"><p class=\"d-ftd-line\">改字号会重排整页，所以先问一句。</p><button class=\"d-ftd-open\" type=\"button\" aria-haspopup=\"dialog\">打开对话框</button></div><div class=\"d-ftd-scrim\" hidden></div><div class=\"d-ftd-box\" role=\"dialog\" aria-modal=\"true\" aria-label=\"套用字号确认\" hidden><b class=\"d-ftd-title\">套用这个字号？</b><div class=\"d-ftd-row\"><button class=\"d-ftd-opt\" type=\"button\">套用</button><button class=\"d-ftd-opt\" type=\"button\">先看</button><button class=\"d-ftd-opt\" type=\"button\">取消</button></div><i class=\"d-ftd-caret\" aria-hidden=\"true\"></i><span class=\"d-ftd-hint\">Tab 循环三点 · Esc 关</span></div></div>","css":".d-ftd{position:relative;width:300px;max-width:100%;height:150px;border:1px solid var(--line);border-radius:2px;background:var(--paper);overflow:hidden;font-family:var(--sans)}\n.d-ftd-page{padding:12px}\n.d-ftd-line{max-width:200px;margin:0 0 10px;font-size:11px;line-height:1.7;color:var(--muted)}\n.d-ftd-open{font-family:var(--mono);font-size:9px;letter-spacing:.08em;padding:5px 9px;border:1px solid var(--line);border-radius:2px;background:var(--paper);color:var(--ink);cursor:pointer;transition:border-color 120ms steps(6)}\n.d-ftd-open:hover{border-color:var(--ink)}\n.d-ftd-open:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-ftd-scrim{position:absolute;inset:0;background:var(--bg);opacity:.72}\n.d-ftd-box{position:absolute;left:14px;right:14px;top:16px;padding:10px 12px 12px;border:1px solid var(--ink);border-radius:2px;background:var(--paper);box-shadow:0 12px 24px -8px #20241e26}\n.d-ftd.is-open .d-ftd-box{animation:d-focus-trap-dialog-snap 120ms steps(6) both}\n@keyframes d-focus-trap-dialog-snap{from{transform:translateY(6px)}to{transform:translateY(0)}}\n.d-ftd-title{display:block;font-size:11px;line-height:1.5;font-weight:650;color:var(--ink)}\n.d-ftd-row{display:flex;gap:6px;margin-top:8px}\n.d-ftd-opt{width:52px;padding:4px 0;border:1px solid var(--line);border-radius:2px;background:var(--paper);font-family:var(--mono);font-size:9px;color:var(--muted);cursor:pointer;transition:border-color 120ms steps(6),color 120ms steps(6),background-color 120ms steps(6)}\n.d-ftd-opt.is-on{border-color:var(--ink);background:var(--bg);color:var(--ink)}\n.d-ftd-opt:focus-visible{outline:1px solid #2b4b8f;outline-offset:2px}\n.d-ftd-caret{--i:0;display:block;width:52px;height:1px;margin-top:4px;background:#2b4b8f;transform:translateX(calc(var(--i,0) * 58px));transition:transform 120ms steps(6)}\n.d-ftd-hint{display:block;margin-top:8px;font-family:var(--mono);font-size:9px;letter-spacing:.08em;color:var(--faint)}"},{"id":"skip-nav","cat":"无障碍","t":"跳到主内容","en":"skip link","d":"跳转条从版面外落下来只用 120ms 的 linear，一点不加缓动：它是「立刻能用」的东西，一被缓动就像还没加载完。落位停在 8px 而不贴顶，是让它的上下两条边都露出来——读者一眼看出这是压在页头上的浮条，不是新长出来的页头。焦点环只给正文不给跳转条，因为读者要确认的是「我到了」，不是「我按到了」。","body":"<div class=\"d-skn\"><a class=\"d-skn-link\" href=\"#\">跳到主内容</a><div class=\"d-skn-nav\"><span>导航</span><span>本期</span><span>往期</span><span>关于</span></div><div class=\"d-skn-body\"><p class=\"d-skn-lead\">跳转条平时藏在版面外，第一次 Tab 才落下来；回车之后焦点进正文。</p><main class=\"d-skn-main\" tabindex=\"-1\" aria-label=\"主内容\">主内容区 · 焦点落在这里</main><button class=\"d-skn-try\" type=\"button\">按一下＝第一次 Tab</button></div></div>","css":".d-skn{position:relative;width:300px;max-width:100%;height:150px;border:1px solid var(--line);border-radius:2px;background:var(--paper);overflow:hidden;font-family:var(--sans)}\n.d-skn-link{position:absolute;left:8px;top:-26px;z-index:2;display:block;padding:4px 8px;border:1px solid var(--ink);border-radius:2px;background:var(--ink);color:var(--paper);font-family:var(--mono);font-size:9px;letter-spacing:.08em;text-decoration:none;transition:top 120ms linear}\n.d-skn-link:focus,.d-skn-link:focus-visible{top:8px;outline:1px solid var(--paper);outline-offset:2px}\n.d-skn-nav{display:flex;gap:8px;padding:6px 8px;border-bottom:1px solid var(--line);font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}\n.d-skn-body{padding:10px 8px 0}\n.d-skn-lead{margin:0 0 6px;font-size:11px;line-height:1.65;color:var(--muted)}\n.d-skn-main{padding:6px 8px;border-radius:2px;background:var(--bg);font-size:9px;line-height:1.6;color:var(--ink);outline:0;outline-offset:2px}\n.d-skn-main.is-hit{outline:1px solid var(--ink)}\n.d-skn-try{margin-top:8px;padding:3px 8px;border:1px solid var(--line);border-radius:2px;background:var(--paper);color:var(--faint);font-family:var(--mono);font-size:9px;letter-spacing:.06em;cursor:pointer;transition:border-color 120ms linear,color 120ms linear}\n.d-skn-try:hover{border-color:var(--ink);color:var(--ink)}\n.d-skn-try:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"toolbar-overflow","cat":"浮层","t":"工具栏溢出折叠","en":"toolbar overflow","d":"工具栏定宽 280px：再宽就轮不到折叠；展开时三项依次错 120ms、用 steps(6) 出现，是让人看清有哪三项，而不是一次糊上来。更多键上留着数字 3——折起来的东西要能数得清。","body":"<div class=\"d-toolbar-overflow\"><div class=\"d-to-bar\" role=\"toolbar\" aria-label=\"编辑器工具\"><button class=\"d-to-btn\" type=\"button\" aria-pressed=\"true\">粗</button><button class=\"d-to-btn\" type=\"button\" aria-pressed=\"false\">斜</button><button class=\"d-to-more\" type=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\">更多 <b>3</b></button></div><div class=\"d-to-menu\" role=\"menu\" hidden><button class=\"d-to-item\" type=\"button\" role=\"menuitem\">插入注脚</button><button class=\"d-to-item\" type=\"button\" role=\"menuitem\">导出 PDF</button><button class=\"d-to-item\" type=\"button\" role=\"menuitem\">版本历史</button></div></div>","css":".d-toolbar-overflow{position:relative;width:280px;max-width:100%;font-family:var(--sans)}\n.d-to-bar{display:flex;align-items:center;gap:2px;height:34px;padding:0 2px;border:1px solid var(--line);border-radius:6px;background:var(--paper)}\n.d-to-btn{height:24px;min-width:26px;padding:0 6px;border:0;border-radius:2px;background:transparent;color:var(--muted);font:inherit;font-size:var(--fs-11);cursor:pointer}\n.d-to-btn:hover{color:var(--ink)}\n.d-to-btn[aria-pressed=true]{color:var(--ink);background:var(--bg);box-shadow:inset 0 1px 0 #fff5}\n.d-to-btn:focus-visible,.d-to-more:focus-visible,.d-to-item:focus-visible{outline:1px solid var(--ink);outline-offset:1px}\n.d-to-more{display:inline-flex;align-items:center;gap:4px;margin-left:auto;height:24px;padding:0 8px;border:1px solid var(--line);border-radius:2px;background:transparent;color:var(--ink);font:inherit;font-size:var(--fs-11);cursor:pointer}\n.d-to-more b{font-family:var(--mono);font-weight:400;font-size:var(--fs-9);color:var(--faint)}\n.d-to-menu{position:absolute;right:0;top:38px;z-index:2;width:148px;padding:4px;border:1px solid var(--line);border-radius:6px;background:var(--paper);box-shadow:0 12px 24px -8px #20241e26}\n.d-to-menu[hidden]{display:none}\n.d-to-item{display:block;width:100%;height:28px;padding:0 8px;border:0;border-radius:2px;background:transparent;color:var(--ink);font:inherit;font-size:var(--fs-11);text-align:left;cursor:pointer;opacity:0;transform:translateY(-4px)}\n.d-to-item:hover{background:var(--bg)}\n.d-toolbar-overflow.is-open .d-to-item{animation:d-toolbar-overflow-item 180ms steps(6) forwards;animation-delay:calc(var(--i,0) * 120ms)}\n.d-to-item:nth-child(2){--i:1}\n.d-to-item:nth-child(3){--i:2}\n@keyframes d-toolbar-overflow-item{to{opacity:1;transform:none}}"},{"id":"double-tap-zoom","cat":"手势","t":"双击放大","en":"double tap zoom","d":"双击从点中的位置放大，不是从中心：手指点哪儿，哪儿就该留在原地，从中心放大会把想看的那块推出屏幕。两次点击间隔 300ms 内才算双击；第二次点击后再放大，避免单击时的闪动。","body":"<div class=\"d-dz2\" data-stage><div class=\"d-dz2-inner\" data-inner><span>把手指点在字上双击</span><b>放大看细节</b><em>1×</em></div><p class=\"d-dz2-hint\">双击放大 · 再双击还原</p></div>","css":".d-dz2{position:relative;width:100%;max-width:340px;height:190px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden;touch-action:manipulation;cursor:zoom-in}\n.d-dz2-inner{position:absolute;left:14px;top:28px;right:14px;display:flex;flex-direction:column;gap:4px;transform-origin:0 0;transition:transform 260ms var(--ease-physical)}\n.d-dz2-inner span{font-family:var(--font-mono);font-size:9px;letter-spacing:.08em;color:var(--faint)}\n.d-dz2-inner b{font-size:21px;letter-spacing:-.01em}\n.d-dz2-inner em{font-style:normal;font-family:var(--font-mono);font-size:11px;color:var(--muted);margin-top:6px}\n.d-dz2-hint{position:absolute;left:14px;bottom:10px;margin:0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"drag-handle-resize","cat":"手势","t":"拖动调整高度","en":"drag handle resize","d":"上下两块之间的把手给 14px 高，是因为手指按上去会挡住 10px：比这更薄，用户只能盲拖。拖动时有最小高度（80px）和最大（面板的七成），到边继续拖只回弹 4px，手感上知道到底了。松手不吸附——这是自由高度，不是分档。","body":"<div class=\"d-dh\" data-wrap><div class=\"d-dh-top\"><b>预览</b><span>上面这块会被压缩</span></div><div class=\"d-dh-handle\" data-handle><i></i></div><div class=\"d-dh-bottom\" data-bottom><b>详情</b><span data-size>高 96px</span></div></div>","css":".d-dh{display:flex;flex-direction:column;width:100%;max-width:340px;height:200px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden}\n.d-dh-top{flex:1;min-height:0;padding:14px;display:flex;flex-direction:column;gap:2px;background:var(--bg)}\n.d-dh-top b,.d-dh-bottom b{font-size:12px}\n.d-dh-top span,.d-dh-bottom span{font-size:11px;color:var(--muted)}\n.d-dh-handle{display:grid;place-items:center;height:14px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--paper);cursor:ns-resize;touch-action:none}\n.d-dh-handle i{width:34px;height:3px;border-radius:999px;background:var(--line)}\n.d-dh-bottom{height:96px;padding:14px;display:flex;flex-direction:column;gap:2px;background:var(--paper)}"},{"id":"drag-scrub","cat":"手势","t":"拖动擦洗","en":"drag scrub","d":"在时间条上拖动时，预览缩略图跟着手指走，但播放头只按整秒跳：拖到 3.7 秒就显示第 3 秒，不显示半帧——擦洗是为了找位置，不是为了逐帧。松手才把播放头设到当前位置，拖着的时候不改播放状态。","body":"<div class=\"d-dsr\" data-strip><div class=\"d-dsr-track\"><div class=\"d-dsr-fill\" data-fill></div><div class=\"d-dsr-head\" data-head></div></div><div class=\"d-dsr-preview\" data-preview><b data-sec>0s</b><span>预览</span></div><p class=\"d-dsr-note\">按住时间条左右拖</p></div>","css":".d-dsr{position:relative;width:100%;max-width:340px;height:180px;padding:16px;border:1px solid var(--line);border-radius:10px;background:var(--paper);display:flex;flex-direction:column;justify-content:flex-end;gap:10px}\n.d-dsr-track{position:relative;height:8px;border-radius:999px;background:var(--line);touch-action:none;cursor:ew-resize}\n.d-dsr-fill{position:absolute;left:0;top:0;bottom:0;width:0;border-radius:999px;background:var(--ink)}\n.d-dsr-head{position:absolute;top:-5px;width:12px;height:18px;margin-left:-6px;border:1px solid var(--ink);border-radius:2px;background:var(--paper);left:0}\n.d-dsr-preview{display:flex;align-items:baseline;gap:6px}\n.d-dsr-preview b{font-family:var(--font-mono);font-size:21px;letter-spacing:-.02em}\n.d-dsr-preview span{font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}\n.d-dsr-note{position:absolute;right:14px;bottom:10px;margin:0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"drag-sheet-snap","cat":"手势","t":"抽屉分档","en":"drag sheet snap","d":"抽屉只停三档：露头、半屏、全屏。档位固定，是因为自由高度会让每次打开都要重新找位置；松手后按「离哪档近 + 甩的方向」决定落到哪，甩得够快时方向比距离更重要。拖到最上面再往上不再动，但会有 24px 的阻尼，告诉你到头了。","body":"<div class=\"d-ds2\" data-wrap><button type=\"button\" class=\"d-ds2-open\" data-open>打开抽屉</button><div class=\"d-ds2-sheet\" data-sheet><span class=\"d-ds2-grip\"></span><b>这一场的信息</b><p>机位 B，50mm，14:22:07 打板。缺 38 秒，已标在素材页。</p><em data-state>peek</em></div></div>","css":".d-ds2{position:relative;width:100%;max-width:340px;height:190px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden}\n.d-ds2-open{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:6px 14px;border:1px solid var(--line);border-radius:999px;background:var(--bg);color:var(--ink);font:inherit;font-size:11px;cursor:pointer}\n.d-ds2-sheet{position:absolute;left:0;right:0;bottom:0;height:150px;padding:8px 14px 14px;border-top:1px solid var(--line);border-radius:10px 10px 0 0;background:var(--bg);transform:translateY(102px);transition:transform 280ms var(--ease-physical);touch-action:none;cursor:grab;will-change:transform}\n.d-ds2-grip{display:block;width:34px;height:4px;border-radius:999px;background:var(--line);margin:0 auto 8px}\n.d-ds2-sheet b{font-size:12px}\n.d-ds2-sheet p{margin:2px 0 0;font-size:11px;color:var(--muted)}\n.d-ds2-sheet em{position:absolute;right:14px;bottom:10px;font-style:normal;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"drag-to-close","cat":"手势","t":"下拉关闭","en":"drag to close","d":"弹层随手指往下走，背景同步变淡，松手时超过 1/4 高度才关：只有跟手的位移才让人相信「这是可以被推走的」。关的速度比开的快（180ms 对 280ms）——撤销总是应该比进入干脆。","body":"<div class=\"d-dc\" data-box><button type=\"button\" class=\"d-dc-open\" data-open>打开卡片</button><div class=\"d-dc-scrim\" data-scrim></div><div class=\"d-dc-sheet\" data-sheet><span class=\"d-dc-grip\"></span><b>补充说明</b><p>往下拖可以关掉这张卡片。</p></div></div>","css":".d-dc{position:relative;width:100%;max-width:340px;height:190px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden}\n.d-dc-open{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:6px 14px;border:1px solid var(--line);border-radius:999px;background:var(--bg);color:var(--ink);font:inherit;font-size:11px;cursor:pointer}\n.d-dc-scrim{position:absolute;inset:0;background:var(--ink);opacity:0;pointer-events:none;transition:opacity 180ms var(--ease)}\n.d-dc-sheet{position:absolute;left:0;right:0;bottom:0;padding:8px 16px 16px;border-radius:10px 10px 0 0;background:var(--bg);border-top:1px solid var(--line);transform:translateY(105%);transition:transform 280ms var(--ease-physical);touch-action:none;cursor:grab}\n.d-dc-sheet.on{transform:none}\n.d-dc-grip{display:block;width:34px;height:4px;margin:0 auto 8px;border-radius:999px;background:var(--line)}\n.d-dc-sheet b{font-size:13px}\n.d-dc-sheet p{margin:2px 0 0;font-size:11px;color:var(--muted)}"},{"id":"edge-peek","cat":"手势","t":"边缘窥视","en":"edge peek","d":"从屏幕左缘往里拉会露出上一页的一角，松手弹回；拉过 40% 才真的返回。只露出一角、不整页跟手，是为了让人随时能放弃——整页跟手时，手一抖就回不去了。右缘不做，避免和系统手势打架。","body":"<div class=\"d-ep\" data-peek><div class=\"d-ep-page\"><b>当前页</b><span>场记本 · 第 12 天</span></div><div class=\"d-ep-under\" data-under><b>上一页</b><span>场记本 · 第 11 天</span></div><div class=\"d-ep-edge\" data-edge></div><p class=\"d-ep-hint\">从左边缘往里拉</p></div>","css":".d-ep{position:relative;width:100%;max-width:340px;height:190px;border:1px solid var(--line);border-radius:10px;background:var(--bg);overflow:hidden;touch-action:pan-y}\n.d-ep-page{position:relative;z-index:2;height:100%;padding:16px;background:var(--paper);border-right:1px solid var(--line);will-change:transform;transition:transform 260ms var(--ease-physical)}\n.d-ep-page b,.d-ep-under b{display:block;font-size:13px}\n.d-ep-page span,.d-ep-under span{font-size:11px;color:var(--muted)}\n.d-ep-under{position:absolute;inset:0;padding:16px;background:var(--bg);z-index:1}\n.d-ep-edge{position:absolute;left:0;top:0;bottom:0;width:26px;z-index:3;cursor:ew-resize}\n.d-ep-hint{position:absolute;right:10px;bottom:8px;margin:0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint);z-index:4}"},{"id":"edge-swipe-back","cat":"手势","t":"边缘右滑返回","en":"edge swipe","d":"30% 是「划到这里心里已经决定要走」的位置：低于它松手算误触，高于它手指已经到屏幕中间，再弹回就显得很突兀。判定只在左边缘 18px 内起手，否则页面里正常的横向拖动会被当成返回，这一条是整条手势能不能用的关键。进度用 1px 的尺子加一根刻度表示，人在拖的时候需要知道「还差多少」，而不是一个百分比数字。","body":"<div class=\"d-back\" role=\"group\" aria-label=\"边缘右滑返回\">\n  <div class=\"d-back-screen\">\n    <span class=\"d-back-under\">← 上一页</span>\n    <div class=\"d-back-edge\" tabindex=\"0\" role=\"button\" aria-label=\"从左边缘往右拖，或按右方向键返回\"><i class=\"d-back-grip\" aria-hidden=\"true\"></i></div>\n    <div class=\"d-back-page\">\n      <b>详情页</b>\n      <em>从左边缘往右拖</em>\n    </div>\n  </div>\n  <div class=\"d-back-ruler\" aria-hidden=\"true\"><i class=\"d-back-fill\"></i><span class=\"d-back-tick\"></span></div>\n  <p class=\"d-back-hint\">过 30% 才提交 · 30% 处有刻度</p>\n</div>","css":".d-back{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-back-screen{position:absolute;left:20px;top:14px;width:260px;height:104px;border:1px solid var(--line);border-radius:10px;background:var(--bg);overflow:hidden}\n.d-back-under{position:absolute;inset:0;display:grid;place-items:center;font-family:var(--mono);font-size:11px;letter-spacing:.08em;color:var(--faint)}\n.d-back-edge{position:absolute;left:0;top:0;bottom:0;width:18px;z-index:2;cursor:ew-resize;touch-action:none}\n.d-back-grip{position:absolute;left:7px;top:50%;width:1px;height:24px;margin-top:-12px;background:var(--line)}\n.d-back-edge:focus-visible{outline:1px solid var(--ink);outline-offset:-2px}\n.d-back-page{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;gap:4px;padding:10px 12px;background:var(--paper);border-left:1px solid var(--line);border-radius:10px;box-shadow:0 1px 0 var(--line);will-change:transform}\n.d-back-page b{font-size:13px;font-weight:650}\n.d-back-page em{font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}\n.d-back-ruler{position:absolute;left:20px;top:130px;width:260px;height:1px;background:var(--line)}\n.d-back-fill{position:absolute;left:0;top:0;width:0;height:1px;background:#c2402a}\n.d-back-tick{position:absolute;left:30%;top:-2px;width:1px;height:5px;background:var(--ink)}\n.d-back-hint{position:absolute;left:20px;top:136px;margin:0;font-family:var(--mono);font-size:9px;line-height:1.6;color:var(--faint)}"},{"id":"flick-velocity","cat":"手势","t":"轻扫判定","en":"flick velocity","d":"快速轻扫（超过 0.6px/ms）即使只走 40px 也触发，慢慢推到底反而不触发：手势里速度比距离更接近意图。阈值用「每毫秒像素」而不是总行程，因为总行程会被按住不动的时间稀释。界面上把当前速度直接写出来，是为了让人看见判定依据。","body":"<div class=\"d-fv\" data-zone><div class=\"d-fv-chip\" data-chip>向上轻扫</div><span class=\"d-fv-meter\"><i data-bar></i></span><em data-vel>0.0 px/ms</em><b data-log>还没扫</b></div>","css":".d-fv{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;width:100%;max-width:340px;height:180px;border:1px solid var(--line);border-radius:10px;background:var(--paper);touch-action:none;overflow:hidden}\n.d-fv-chip{padding:8px 16px;border:1px solid var(--line);border-radius:999px;background:var(--bg);font-size:12px;will-change:transform;transition:transform 260ms var(--ease-physical)}\n.d-fv-meter{display:block;width:140px;height:3px;border-radius:999px;background:var(--line);overflow:hidden}\n.d-fv-meter i{display:block;height:100%;width:0;background:var(--ink);transition:width 80ms linear}\n.d-fv em{font-style:normal;font-family:var(--font-mono);font-size:10px;color:var(--faint)}\n.d-fv b{position:absolute;bottom:10px;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--muted);font-weight:400}"},{"id":"gesture-hint","cat":"手势","t":"手势引导","en":"gesture hint","d":"提示只在第一次出现，滑一次就消失：每次都出现会挡住内容，而不出现人就永远不知道可以滑。提示是一根手指加一条轨迹，动两秒停住，不循环——循环的提示会变成背景噪音。底下留一个「再看一次」，是给快速划过去的人。","body":"<div class=\"d-gh\" data-box><div class=\"d-gh-card\"><b>这一屏可以左右滑</b><span>切到上一条 / 下一条</span></div><div class=\"d-gh-hand\" data-hand><i></i></div><p class=\"d-gh-note\"><button type=\"button\" data-again>再看一次</button></p></div>","css":".d-gh{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:340px;height:190px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden}\n.d-gh-card{display:flex;flex-direction:column;gap:2px;padding:18px 20px;border:1px dashed var(--line);border-radius:10px;text-align:center}\n.d-gh-card b{font-size:13px}\n.d-gh-card span{font-size:11px;color:var(--muted)}\n.d-gh-hand{position:absolute;left:50%;bottom:44px;display:flex;align-items:center;gap:2px;opacity:0;transition:opacity 200ms var(--ease)}\n.d-gh-hand i{display:block;width:14px;height:14px;border-radius:50%;background:var(--ink);box-shadow:0 0 0 6px color-mix(in srgb,var(--ink) 12%,transparent)}\n.d-gh-hand:after{content:\"\";display:block;width:46px;height:1px;background:var(--ink);opacity:.35}\n.d-gh-hand.on{opacity:1;animation:d-gesture-hint-sweep 1.8s var(--ease) 2 both}\n@keyframes d-gesture-hint-sweep{0%{transform:translateX(-46px)}55%{transform:translateX(46px)}100%{transform:translateX(-46px)}}\n.d-gh-note{position:absolute;bottom:8px;margin:0}\n.d-gh-note button{border:0;background:none;color:var(--faint);font:inherit;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;cursor:pointer;text-decoration:underline}"},{"id":"hold-to-record","cat":"手势","t":"按住录音","en":"hold to record","d":"按下去才开始计时，松手立刻结束并给出时长：录音类交互最怕「按了没录上」，所以按压的 120ms 内就出红点和计时，不用等。上滑超过 60px 取消录音，这是手指不离屏也能反悔的唯一办法。","body":"<div class=\"d-hr\" data-box><button type=\"button\" class=\"d-hr-btn\" data-rec><span></span>按住说话</button><p class=\"d-hr-note\" data-note>上滑取消 · 松手结束</p></div>","css":".d-hr{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;width:100%;max-width:340px;height:180px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden;touch-action:none}\n.d-hr-btn{position:relative;display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border:1px solid var(--ink);border-radius:999px;background:var(--paper);color:var(--ink);font:inherit;font-size:13px;cursor:pointer;transition:transform 160ms var(--ease-physical),background-color 160ms var(--ease)}\n.d-hr-btn span{display:block;width:8px;height:8px;border-radius:50%;background:var(--ink-vermilion);opacity:0;transition:opacity 120ms var(--ease)}\n.d-hr-btn.on{transform:scale(1.04);background:var(--ink);color:var(--paper)}\n.d-hr-btn.on span{opacity:1;animation:d-hold-to-record-blink 1s steps(2) infinite}\n.d-hr-btn.cancel{background:var(--ink-vermilion);border-color:var(--ink-vermilion);color:var(--paper)}\n.d-hr-note{position:absolute;bottom:10px;margin:0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}\n@keyframes d-hold-to-record-blink{50%{opacity:.25}}"},{"id":"long-press-copy","cat":"手势","t":"长按复制","en":"long press copy","d":"长按 480ms 弹出菜单，比系统的 500ms 略短，是因为网页里常有人按得轻。菜单出现在按下的位置上方，放不下就翻到下方——位置不对，人第一反应是「没反应」。复制后菜单不立刻消失，改成显示「已复制」，因为消失得太快会让人不确定到底成没成。","body":"<div class=\"d-lc2\" data-zone><p class=\"d-lc2-text\" data-text>时码 14:22:07，机位 B，缺 38 秒。</p><div class=\"d-lc2-menu\" data-menu hidden><button type=\"button\" data-copy>复制这句</button><button type=\"button\" data-cancel>取消</button></div><p class=\"d-lc2-note\">长按上面这句话</p></div>","css":".d-lc2{position:relative;display:flex;flex-direction:column;justify-content:center;width:100%;max-width:340px;height:170px;padding:0 16px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden}\n.d-lc2-text{margin:0;font-size:13px;line-height:1.9;user-select:none;-webkit-user-select:none}\n.d-lc2-menu{position:absolute;display:flex;gap:2px;padding:3px;border:1px solid var(--line);border-radius:6px;background:var(--ink);box-shadow:0 12px 24px -8px #20241e26;z-index:3}\n.d-lc2-menu button{padding:4px 10px;border:0;border-radius:6px;background:transparent;color:var(--paper);font:inherit;font-size:11px;cursor:pointer}\n.d-lc2-menu button:hover{background:color-mix(in srgb,var(--paper) 14%,transparent)}\n.d-lc2-note{position:absolute;bottom:8px;margin:0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"long-press-menu","cat":"手势","t":"长按菜单","en":"long press","d":"按 420ms：300ms 会被滑动起步的惯性误触，500ms 又像卡顿；比 iOS 的 400ms 多 20ms，是因为这里同时画一条走满才弹的进度线，线到 420ms 刚好走完，两条时间轴合得上。移动超过 8px 立刻取消——长按和拖动只能二选一，否则手指一抖两件事都做一半。整块主墨也是故意的：420ms 的停留需要一个实心面来承重，描边卡撑不住这个时长，本组只此一处大色块。","body":"<div class=\"d-press\" role=\"group\" aria-label=\"长按菜单\">\n  <div class=\"d-press-card\" tabindex=\"0\" role=\"button\" aria-haspopup=\"menu\" aria-expanded=\"false\">\n    <b>按住 420ms</b>\n    <em>移动超过 8px 即取消</em>\n    <i class=\"d-press-bar\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"d-press-menu\" role=\"menu\" aria-hidden=\"true\" aria-label=\"卡片操作\">\n    <button class=\"d-press-item\" type=\"button\" role=\"menuitem\" tabindex=\"-1\">重命名</button>\n    <button class=\"d-press-item\" type=\"button\" role=\"menuitem\" tabindex=\"-1\">复制链接</button>\n    <button class=\"d-press-item d-press-danger\" type=\"button\" role=\"menuitem\" tabindex=\"-1\">归档</button>\n  </div>\n  <p class=\"d-press-hint\">按住 420ms 或 Enter 呼出</p>\n</div>","css":".d-press{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-press-card{position:absolute;left:12px;top:16px;width:150px;height:96px;display:flex;flex-direction:column;justify-content:space-between;padding:10px;background:var(--ink);color:var(--bg);border:1px solid var(--ink);border-radius:10px;overflow:hidden;cursor:pointer;touch-action:none;user-select:none;transition:transform .12s linear}\n.d-press-card b{font-size:15px;line-height:1.2;font-weight:650}\n.d-press-card em{font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}\n.d-press-card[data-hold]{transform:scale(.985)}\n.d-press-card:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-press-bar{position:absolute;left:0;bottom:0;width:0;height:1px;background:#e8c34a}\n.d-press-menu{position:absolute;left:150px;top:26px;width:132px;display:flex;flex-direction:column;gap:1px;padding:4px;background:var(--paper);border:1px solid var(--ink);border-radius:6px;box-shadow:0 12px 24px -8px #20241e26;transform-origin:0 0;opacity:0;transform:translateX(-6px) scale(.96);pointer-events:none;transition:opacity  180ms cubic-bezier(.34,1.56,.64,1),transform  180ms cubic-bezier(.34,1.56,.64,1)}\n.d-press-menu[data-open]{opacity:1;transform:translateX(0) scale(1);pointer-events:auto}\n.d-press-item{border:0;background:transparent;color:var(--ink);font-family:inherit;font-size:11px;line-height:1.4;text-align:left;padding:6px 8px;border-radius:2px;cursor:pointer}\n.d-press-item:hover{background:var(--bg)}\n.d-press-item:focus-visible{outline:1px solid var(--ink);outline-offset:-1px}\n.d-press-danger{color:#c2402a}\n.d-press-hint{position:absolute;left:12px;bottom:6px;margin:0;font-family:var(--mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}"},{"id":"momentum-gallery","cat":"手势","t":"惯性相册","en":"momentum gallery","d":"松手后按最后一段速度继续滑，摩擦每帧 0.94：手指快划时能连翻三四张，慢拖则停在原地。停下来的位置吸附到最近的整张，因为半张卡停在中间既不能看也不能点。单张宽度取容器 78%，露出下一张的一角，人才知道后面还有。","body":"<div class=\"d-mg\" data-gallery><div class=\"d-mg-track\" data-track><div class=\"d-mg-card\"><b>01</b><span>开场</span></div><div class=\"d-mg-card\"><b>02</b><span>推门</span></div><div class=\"d-mg-card\"><b>03</b><span>停顿</span></div><div class=\"d-mg-card\"><b>04</b><span>反打</span></div><div class=\"d-mg-card\"><b>05</b><span>收</span></div></div><p class=\"d-mg-note\">快速横滑 · 会自己滑一会儿</p></div>","css":".d-mg{position:relative;width:100%;max-width:340px;overflow:hidden;border:1px solid var(--line);border-radius:10px;background:var(--bg);padding:12px 0 0}\n.d-mg-track{display:flex;gap:8px;padding:0 12px;will-change:transform;touch-action:pan-y;cursor:grab}\n.d-mg-card{flex:0 0 78%;height:110px;display:flex;flex-direction:column;justify-content:space-between;padding:10px 12px;border:1px solid var(--line);border-radius:10px;background:var(--paper)}\n.d-mg-card b{font-family:var(--font-mono);font-size:9px;letter-spacing:.08em;color:var(--faint);font-weight:400}\n.d-mg-card span{font-size:13px}\n.d-mg-note{margin:8px 0 10px;text-align:center;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"overscroll-bounce","cat":"手势","t":"过度滚动回弹","en":"overscroll bounce","d":"端点后的位移按 0.3 折算，并且封顶 40px：折算到 0.5 像列表从手里滑走，到 0.15 又几乎看不出被拉住；40px 是 116px 视窗里还能看见最后一行、又明显变形的临界，超过就只剩一条空白。回弹给 280ms 而不是 180ms，因为 180ms 会有一声「啪」的惊吓感，橡皮筋要慢一点才像有弹性。","body":"<div class=\"d-over\" role=\"group\" aria-label=\"过度滚动回弹\">\n  <div class=\"d-over-view\" tabindex=\"0\" role=\"group\" aria-label=\"滚动列表，到端点再拖会拉伸，方向键也行\">\n    <div class=\"d-over-list\">\n      <div class=\"d-over-row\"><b>01</b><span>校对</span></div>\n      <div class=\"d-over-row\"><b>02</b><span>付印</span></div>\n      <div class=\"d-over-row\"><b>03</b><span>折页</span></div>\n      <div class=\"d-over-row\"><b>04</b><span>装订</span></div>\n      <div class=\"d-over-row\"><b>05</b><span>裁切</span></div>\n      <div class=\"d-over-row\"><b>06</b><span>签样</span></div>\n    </div>\n  </div>\n  <div class=\"d-over-bar\" aria-hidden=\"true\"><i class=\"d-over-thumb\"></i></div>\n  <p class=\"d-over-hint\">端点后每 1px 折成 0.3px</p>\n</div>","css":".d-over{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-over-view{position:absolute;left:14px;top:12px;width:220px;height:112px;overflow:hidden;border:1px solid var(--line);border-radius:6px;background:var(--paper);cursor:grab;touch-action:none;user-select:none}\n.d-over-view[data-end=\"t\"]{border-top-color:var(--ink)}\n.d-over-view[data-end=\"b\"]{border-bottom-color:var(--ink)}\n.d-over-view:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-over-view[data-drag]{cursor:grabbing}\n.d-over-list{will-change:transform}\n.d-over-row{display:flex;align-items:center;gap:8px;height:34px;padding:0 10px;border-bottom:1px solid var(--line)}\n.d-over-row b{font-family:var(--mono);font-size:9px;font-weight:400;letter-spacing:.08em;color:var(--faint)}\n.d-over-row span{font-size:11px}\n.d-over-bar{position:absolute;left:246px;top:12px;width:1px;height:112px;background:var(--line)}\n.d-over-thumb{position:absolute;left:0;top:0;width:1px;background:var(--ink)}\n.d-over-hint{position:absolute;left:14px;bottom:8px;margin:0;font-family:var(--mono);font-size:9px;line-height:1.6;color:var(--faint)}"},{"id":"pinch-map","cat":"手势","t":"地图式缩放","en":"pinch map","d":"缩放围绕两指中点，不是画布中心：手指想放大的地方就该留在指尖下。倍率卡在 1–3，缩到 1 再缩会停住而不是乱飘；平移范围跟着倍率算，放得越大能拖的越多。滚轮用 Ctrl 当捏合，桌面也能试。","body":"<div class=\"d-pm\" data-map><div class=\"d-pm-layer\" data-layer><span>街区 A</span><i class=\"d-pm-block d-pm-b1\"></i><i class=\"d-pm-block d-pm-b2\"></i><i class=\"d-pm-block d-pm-b3\"></i><em data-scale>1.0×</em></div></div>","css":".d-pm{position:relative;width:100%;max-width:340px;height:190px;border:1px solid var(--line);border-radius:10px;background:var(--bg);overflow:hidden;touch-action:none;cursor:grab}\n.d-pm-layer{position:absolute;inset:0;transform-origin:0 0;will-change:transform}\n.d-pm-layer span{position:absolute;left:14px;top:12px;font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;color:var(--faint)}\n.d-pm-block{position:absolute;border:1px solid var(--ink);border-radius:2px;background:color-mix(in srgb,var(--ink) 8%,var(--paper))}\n.d-pm-b1{left:40px;top:52px;width:90px;height:54px}\n.d-pm-b2{left:150px;top:92px;width:70px;height:64px}\n.d-pm-b3{left:238px;top:40px;width:56px;height:88px;background:color-mix(in srgb,var(--ink-vermilion) 18%,var(--paper));border-color:var(--ink-vermilion)}\n.d-pm-layer em{position:absolute;right:10px;bottom:8px;font-style:normal;font-family:var(--font-mono);font-size:9px;color:var(--faint)}"},{"id":"pinch-zoom-tile","cat":"手势","t":"捏合缩放","en":"pinch zoom","d":"上下限锁 1.00 和 2.40：1 是「刚到边」而不是随便定的下限，2.40 是这张 200px 的图放大后网点还认得出的极限。越界先按 0.25 折算再回弹，所以推到 3.00 也不会突然停住——突然停住人会以为手势坏了，而不是以为到底了。回弹 280ms 用带过冲的物理曲线，越界那一刻的「拽回来」才感觉得到。","body":"<div class=\"d-zoom\" role=\"group\" aria-label=\"捏合缩放\">\n  <div class=\"d-zoom-frame\">\n    <div class=\"d-zoom-tile\" tabindex=\"0\" role=\"group\" aria-label=\"Ctrl 加滚轮或双指缩放，方向键也行\">\n      <i class=\"d-zoom-v\" aria-hidden=\"true\"></i>\n      <i class=\"d-zoom-h\" aria-hidden=\"true\"></i>\n      <i class=\"d-zoom-dot\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n  <b class=\"d-zoom-num\">1.00×</b>\n  <p class=\"d-zoom-hint\">1.00–2.40 之间 · 越界按 0.25 折算</p>\n</div>","css":".d-zoom{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-zoom-frame{position:absolute;left:12px;top:14px;width:200px;height:112px;border:1px solid var(--line);border-radius:6px;background:var(--bg);overflow:hidden}\n.d-zoom-tile{position:absolute;inset:0;background:var(--paper);transform-origin:50% 50%;will-change:transform;cursor:zoom-in;touch-action:none}\n.d-zoom-v{position:absolute;left:66px;top:0;bottom:0;width:1px;background:var(--line)}\n.d-zoom-h{position:absolute;left:0;right:0;top:60%;height:1px;background:var(--line)}\n.d-zoom-dot{position:absolute;left:50%;top:50%;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:2px;background:#2b4b8f}\n.d-zoom-tile:focus-visible{outline:1px solid var(--ink);outline-offset:-3px}\n.d-zoom-num{position:absolute;left:228px;top:14px;font-family:var(--mono);font-size:13px;line-height:1.2;letter-spacing:.02em;color:var(--muted)}\n.d-zoom[data-edge] .d-zoom-num{color:var(--ink)}\n.d-zoom-hint{position:absolute;left:12px;bottom:6px;margin:0;font-family:var(--mono);font-size:9px;line-height:1.6;color:var(--faint)}"},{"id":"press-hold-fill","cat":"手势","t":"按住确认","en":"press and hold","d":"长按 900ms 填满才生效：短到 500ms 会误触，长到 1.5 秒手会酸。填充用环而不是进度条，因为手指正压着按钮中间，环形能在不移动视线的前提下被余光看到。中途松手立刻退回，没有半途生效这回事。","body":"<div class=\"d-ph\"><button type=\"button\" class=\"d-ph-btn\" data-hold><svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><circle class=\"d-ph-track\" cx=\"32\" cy=\"32\" r=\"28\"></circle><circle class=\"d-ph-fill\" cx=\"32\" cy=\"32\" r=\"28\"></circle></svg><span>按住 0.9 秒清空</span></button><p class=\"d-ph-note\" data-note>松手即取消</p></div>","css":".d-ph{display:flex;flex-direction:column;align-items:center;gap:8px;width:100%;max-width:340px}\n.d-ph-btn{position:relative;display:grid;place-items:center;width:132px;height:132px;border:0;background:none;font:inherit;color:var(--ink);cursor:pointer;-webkit-tap-highlight-color:transparent}\n.d-ph-btn svg{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}\n.d-ph-track{fill:none;stroke:var(--line);stroke-width:3}\n.d-ph-fill{fill:none;stroke:var(--ink-vermilion);stroke-width:3;stroke-linecap:round;stroke-dasharray:0 999;transition:stroke-dasharray 60ms linear}\n.d-ph-btn span{font-size:12px;max-width:80px;text-align:center}\n.d-ph-note{margin:0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}\n.d-ph-btn:focus-visible{outline:1px solid var(--ink);outline-offset:4px}"},{"id":"rotary-dial","cat":"手势","t":"旋钮","en":"rotary dial","d":"旋钮按角度算，不按位移算：拖得远不等于转得多，手指绕着中心画弧才是转。每 30° 一档、一共 12 档，吸附让人不用盯着看；指针拖出界后角度继续跟手但刻度不动，是告诉你到头了。","body":"<div class=\"d-rd2\" data-dial><div class=\"d-rd2-knob\" data-knob><span data-needle></span></div><b data-val>6</b><em>12 档 · 拖外圈转</em></div>","css":".d-rd2{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;width:100%;max-width:340px;height:190px;border:1px solid var(--line);border-radius:10px;background:var(--paper);touch-action:none;cursor:grab;overflow:hidden}\n.d-rd2-knob{position:relative;width:110px;height:110px;border-radius:50%;border:1px solid var(--ink);background:radial-gradient(circle at 50% 38%,color-mix(in srgb,var(--ink) 14%,var(--paper)),var(--paper) 70%)}\n.d-rd2-knob:after{content:\"\";position:absolute;inset:10px;border-radius:50%;border:1px dashed var(--line)}\n.d-rd2-knob span{position:absolute;left:50%;top:6px;width:2px;height:22px;margin-left:-1px;background:var(--ink-vermilion);transform-origin:50% 49px;border-radius:999px}\n.d-rd2 b{font-family:var(--font-mono);font-size:21px;letter-spacing:-.01em}\n.d-rd2 em{font-style:normal;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"shake-undo","cat":"手势","t":"摇一摇撤销","en":"shake to undo","d":"手机上摇一摇是少数不需要看屏幕的手势：删除后想撤销，手已经在抖了。判定看两次加速度的间隔（180ms 内反向），不动手机永远不会触发。桌面没有加速度计，所以下面永远放一个普通按钮兜底——不能只有一种触发方式。","body":"<div class=\"d-su\" data-box><div class=\"d-su-toast\" data-toast>已删除 1 条场记</div><button type=\"button\" class=\"d-su-btn\" data-shake>模拟摇一下</button><button type=\"button\" class=\"d-su-undo\" data-undo hidden>撤销</button><p class=\"d-su-note\" data-note>摇晃手机，或点上面的按钮</p></div>","css":".d-su{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;width:100%;max-width:340px;height:180px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden}\n.d-su-toast{padding:6px 12px;border-radius:6px;background:var(--ink);color:var(--paper);font-size:11px;opacity:0;transform:translateY(-6px);transition:opacity 180ms var(--ease),transform 180ms var(--ease)}\n.d-su-toast.on{opacity:1;transform:none}\n.d-su-btn,.d-su-undo{padding:5px 14px;border:1px solid var(--line);border-radius:999px;background:var(--bg);color:var(--ink);font:inherit;font-size:11px;cursor:pointer}\n.d-su-undo{border-color:var(--ink-vermilion);color:var(--ink-vermilion)}\n.d-su-note{position:absolute;bottom:10px;margin:0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"swipe-actions-row","cat":"手势","t":"左滑操作","en":"swipe actions","d":"左滑露出两个动作，宽度固定 136px：动作宽度随内容变，滑开的位置就每次不一样。滑开一半松手会回弹到关闭，滑过 60% 才停住——一半停住最难受，两个动作都露不全。右边的动作用油墨色，左边的删除用朱色，颜色只标危险。","body":"<div class=\"d-sa\" data-row><div class=\"d-sa-actions\"><button type=\"button\" class=\"d-sa-mark\">标记</button><button type=\"button\" class=\"d-sa-del\">删除</button></div><div class=\"d-sa-face\" data-face><b>场次 03 · 条 02</b><span>机位 B · 14:22:07</span></div></div>","css":".d-sa{position:relative;width:100%;max-width:340px;height:70px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden;touch-action:pan-y}\n.d-sa-actions{position:absolute;right:0;top:0;bottom:0;display:flex}\n.d-sa-actions button{width:68px;border:0;font:inherit;font-size:11px;cursor:pointer}\n.d-sa-mark{background:var(--ink);color:var(--paper)}\n.d-sa-del{background:var(--ink-vermilion);color:var(--paper)}\n.d-sa-face{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;gap:2px;padding:0 14px;background:var(--paper);will-change:transform;transition:transform 240ms var(--ease-physical)}\n.d-sa-face b{font-size:12px}\n.d-sa-face span{font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"swipe-tab-pager","cat":"手势","t":"横滑切页","en":"swipe tab pager","d":"翻页用「三分之一屏」做阈值，不是整屏：手腕一抖就换页在手机上很烦，走满三分之一才认。页与页之间不留空隙，手指到哪儿内容到哪儿，松手再补完剩下的一段——中间加过渡会让人觉得页面在打滑。","body":"<div class=\"d-sp3\" data-pager><div class=\"d-sp3-dots\"><i class=\"d-sp3-on\"></i><i></i><i></i></div><div class=\"d-sp3-view\"><div class=\"d-sp3-track\" data-track><section><b>第一页</b><span>今天拍了 12 条，缺 1 条。</span></section><section><b>第二页</b><span>B 机位补了两条反打。</span></section><section><b>第三页</b><span>收工 22:40，比计划晚 40 分。</span></section></div></div></div>","css":".d-sp3{width:100%;max-width:340px}\n.d-sp3-dots{display:flex;gap:5px;justify-content:center;margin-bottom:6px}\n.d-sp3-dots i{width:5px;height:5px;border-radius:50%;background:var(--line);transition:width 180ms var(--ease),background-color 180ms var(--ease)}\n.d-sp3-dots i.d-sp3-on{width:16px;border-radius:999px;background:var(--ink)}\n.d-sp3-view{overflow:hidden;border:1px solid var(--line);border-radius:10px;background:var(--paper);touch-action:pan-y}\n.d-sp3-track{display:flex;width:300%;transition:transform 260ms var(--ease-physical);will-change:transform}\n.d-sp3-track section{width:calc(100% / 3);padding:18px 16px;display:flex;flex-direction:column;gap:4px}\n.d-sp3-track b{font-size:13px}\n.d-sp3-track span{font-size:11px;color:var(--muted)}"},{"id":"swipe-to-dismiss","cat":"手势","t":"侧滑关闭","en":"swipe to dismiss","d":"滑过 96px 或松手时速度超过 0.5px/ms 才算关掉，两个条件缺一个就弹回去：只看距离会把「手抖一下」当成关闭，只看速度会把慢慢推到底的动作忽略。位移跟手但压到 0.55 倍，手感是「拉着有阻力」，不是图片在飘。","body":"<div class=\"d-sd\"><div class=\"d-sd-card\" data-card><b>今晚 8 点</b><span>样片放到共享盘了，记得看第 3 场。</span><em>左滑或右滑</em></div><p class=\"d-sd-note\">滑掉就没了 · 再点一下这里重置</p></div>","css":".d-sd{position:relative;width:100%;max-width:340px;padding:8px 0}\n.d-sd-card{position:relative;display:flex;flex-direction:column;gap:2px;padding:12px 14px;border:1px solid var(--line);border-radius:10px;background:var(--paper);touch-action:pan-y;cursor:grab;will-change:transform;transition:transform 220ms var(--ease-physical),opacity 220ms var(--ease)}\n.d-sd-card b{font-size:13px}\n.d-sd-card span{font-size:11px;color:var(--muted)}\n.d-sd-card em{font-style:normal;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}\n.d-sd-note{margin:10px 0 0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint);cursor:pointer}"},{"id":"tap-feedback","cat":"手势","t":"触点反馈","en":"tap feedback","d":"涟漪按落点生成、随输入类型变强度：手指按得重一点，圈就大一点（用 pointer 的 pressure），鼠标固定一档。圈从 0 开始、扩到 36px 就停，再大就像加载动画。同一处连点会叠出三层，这是有意的——快连点本来就该看到密度。","body":"<div class=\"d-tf\" data-surface><b>点这里</b><span>落点会出现一圈反馈</span></div>","css":".d-tf{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;width:100%;max-width:340px;height:170px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden;cursor:crosshair;touch-action:manipulation}\n.d-tf b{font-size:13px}\n.d-tf span{font-size:11px;color:var(--muted)}\n.d-tf i{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;border:1px solid var(--ink);opacity:.9;pointer-events:none;animation:d-tap-feedback-ring 520ms var(--ease) forwards}\n@keyframes d-tap-feedback-ring{to{transform:scale(3.6);opacity:0}}"},{"id":"two-finger-pan","cat":"手势","t":"双指平移","en":"two finger pan","d":"画布用两根手指才平移，一根手指留给「选中」：单指也能拖的画布，在手机上永远选不中东西。平移有边界，边到边就停，回弹只留 30px；滚轮兜底用 Shift 当第二根手指。","body":"<div class=\"d-tp\" data-canvas><div class=\"d-tp-art\" data-art><span>画布</span><i>1</i><i>2</i><i>3</i></div><p class=\"d-tp-hint\">双指拖动 · 滚轮 + Shift</p></div>","css":".d-tp{position:relative;width:100%;max-width:340px;height:190px;border:1px solid var(--line);border-radius:10px;background:var(--bg);overflow:hidden;touch-action:none;cursor:grab}\n.d-tp-art{position:absolute;left:0;top:0;width:520px;height:300px;background:repeating-linear-gradient(0deg,color-mix(in srgb,var(--ink) 7%,transparent) 0 1px,transparent 1px 24px),repeating-linear-gradient(90deg,color-mix(in srgb,var(--ink) 7%,transparent) 0 1px,transparent 1px 24px);will-change:transform}\n.d-tp-art span{position:absolute;left:16px;top:12px;font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;color:var(--faint)}\n.d-tp-art i{position:absolute;display:grid;place-items:center;width:44px;height:44px;border:1px solid var(--line);border-radius:6px;background:var(--paper);font-family:var(--font-mono);font-style:normal;font-size:12px}\n.d-tp-art i:nth-of-type(1){left:120px;top:80px}\n.d-tp-art i:nth-of-type(2){left:250px;top:150px}\n.d-tp-art i:nth-of-type(3){left:360px;top:60px;border-color:var(--ink)}\n.d-tp-hint{position:absolute;right:10px;bottom:8px;margin:0;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;color:var(--faint)}"},{"id":"two-finger-rotate","cat":"手势","t":"双指旋转","en":"two-finger rotate","d":"角度按「指针相对卡心的夹角」算，不按横向位移：夹角等于真的两根手指在转，位移算法一转过头就会反向跳，人立刻知道是假的。松手时 6° 内吸到 15° 的刻度上——手很难停准，吸一下才有「卡进档位」的手感，而 15° 是排版里斜线最常用的档，再密就分不出区别。读数放卡外，是因为卡在转，字跟着转就没法看。","body":"<div class=\"d-rot\" role=\"group\" aria-label=\"双指旋转\">\n  <div class=\"d-rot-stage\">\n    <i class=\"d-rot-axis-h\" aria-hidden=\"true\"></i>\n    <i class=\"d-rot-axis-v\" aria-hidden=\"true\"></i>\n    <div class=\"d-rot-card\" tabindex=\"0\" role=\"button\" aria-label=\"按住 Shift 拖动旋转，或用左右方向键，Enter 归零\"><b>旋转</b><em>Shift + 拖</em></div>\n  </div>\n  <b class=\"d-rot-num\">0°</b>\n  <p class=\"d-rot-hint\">Shift + 拖 · 0° 基准</p>\n</div>","css":".d-rot{position:relative;width:300px;height:150px;color:var(--ink)}\n.d-rot-stage{position:absolute;left:14px;top:16px;width:200px;height:112px;border:1px dashed var(--line);border-radius:6px}\n.d-rot-axis-h{position:absolute;left:0;right:0;top:50%;height:1px;background:var(--line)}\n.d-rot-axis-v{position:absolute;top:0;bottom:0;left:50%;width:1px;background:var(--line)}\n.d-rot-card{position:absolute;left:50%;top:50%;width:112px;height:72px;margin:-36px 0 0 -56px;display:flex;flex-direction:column;justify-content:space-between;padding:8px 10px;background:var(--paper);border:1px solid var(--ink);border-radius:6px;box-shadow:0 1px 0 var(--line);cursor:grab;touch-action:none;user-select:none;will-change:transform}\n.d-rot-card b{font-size:11px;font-weight:650;letter-spacing:.02em}\n.d-rot-card em{font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:.04em;color:var(--faint)}\n.d-rot-card[data-drag]{cursor:grabbing;box-shadow:0 12px 24px -8px #20241e26}\n.d-rot-card:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-rot-num{position:absolute;right:14px;top:16px;font-family:var(--mono);font-size:21px;line-height:1.05;letter-spacing:-.02em;color:#2b4b8f}\n.d-rot-hint{position:absolute;left:14px;bottom:8px;margin:0;font-family:var(--mono);font-size:9px;line-height:1.6;color:var(--faint)}"},{"id":"caption-zoom","cat":"内容","t":"图注联动","en":"caption link","d":"图注列锁死 120px、不随字数伸缩，换行时右边缘不动，图注才不会把版面顶来顶去；上移只给 2px 配物理曲线的过冲，多 1px 像在跳，少 1px 看不出和热点是一对。热点用 --x/--y 百分比定位，换一张图不必重算坐标，这套联动才能直接搬走。","body":"<div class=\"d-cz\"><div class=\"d-cz-plate\"><i class=\"d-cz-rule d-cz-rule-a\"></i><i class=\"d-cz-rule d-cz-rule-b\"></i><i class=\"d-cz-rule d-cz-rule-c\"></i><button class=\"d-cz-dot\" type=\"button\" style=\"--x:16%;--y:18%\" aria-label=\"热点 1：招牌底板\"></button><button class=\"d-cz-dot\" type=\"button\" style=\"--x:62%;--y:40%\" aria-label=\"热点 2：字高\"></button><button class=\"d-cz-dot\" type=\"button\" style=\"--x:32%;--y:68%\" aria-label=\"热点 3：字距\"></button></div><ul class=\"d-cz-list\"><li class=\"d-cz-cap\">底板 1.2×0.6m</li><li class=\"d-cz-cap\">字高 38cm 可辨</li><li class=\"d-cz-cap\">字距 4cm 不糊</li></ul></div>","css":".d-cz{display:flex;gap:12px;width:300px;max-width:100%;font-family:var(--sans)}\n.d-cz-plate{position:relative;flex:0 0 156px;width:156px;height:118px;border:1px solid var(--line);border-radius:2px;background:var(--bg);overflow:hidden}\n.d-cz-rule{position:absolute;background:var(--line)}\n.d-cz-rule-a{left:0;right:0;top:38px;height:1px}\n.d-cz-rule-b{left:0;right:0;top:82px;height:1px}\n.d-cz-rule-c{top:0;bottom:0;left:96px;width:1px}\n.d-cz-dot{position:absolute;left:var(--x);top:var(--y);width:12px;height:12px;padding:0;border:1px solid var(--ink);border-radius:50%;background:var(--paper);cursor:pointer;transform:scale(1);transition:background-color 120ms linear,transform 180ms cubic-bezier(.34,1.56,.64,1)}\n.d-cz-dot.is-on{background:#c2402a;transform:scale(1.2)}\n.d-cz-dot:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-cz-list{flex:0 0 120px;width:120px;margin:0;padding:2px 0 0;list-style:none;display:flex;flex-direction:column;gap:7px}\n.d-cz-cap{display:block;font-size:11px;line-height:1.5;color:var(--faint);transform:translateY(0);transition:color 180ms cubic-bezier(.34,1.56,.64,1),transform 180ms cubic-bezier(.34,1.56,.64,1)}\n.d-cz-cap.is-hot{color:var(--ink);transform:translateY(-2px)}"},{"id":"quote-block","cat":"内容","t":"引段块","en":"quote block","d":"竖线只在左侧留 1px、不加粗，因为引文靠留白和字号分层，线一粗就变成警示条；出处压在 10px 等宽字上，比引文低两档，读者先读句子后读来源。「上下文」默认合起、展开走 280ms 印刷曲线，高度只放 44px——正好两行批注，再多这一块就压过原文。","body":"<figure class=\"d-qb\"><blockquote class=\"d-qb-text\">「留白不是空，是把话说慢一点。」</blockquote><figcaption class=\"d-qb-src\">—— 排字房札记 · 第 04 页</figcaption><div class=\"d-qb-more\"><p class=\"d-qb-ctx\">这句原本是一条页边旁批，写在字号表右侧；批注比正文大两号，隔着排版台也要看清。</p></div><button class=\"d-qb-btn\" type=\"button\" aria-expanded=\"false\">展开上下文</button></figure>","css":".d-qb{width:300px;max-width:100%;margin:0;padding:2px 0 2px 12px;border-left:1px solid var(--ink)}\n.d-qb-text{margin:0;font-family:var(--serif);font-size:13px;line-height:1.7;color:var(--ink)}\n.d-qb-src{margin-top:4px;font-family:var(--mono);font-size:9px;line-height:1.6;color:var(--faint)}\n.d-qb-more{max-height:0;overflow:hidden;transition:max-height 280ms cubic-bezier(.2,.75,.25,1)}\n.d-qb-ctx{margin:0;padding-top:6px;font-size:11px;line-height:1.65;color:var(--muted)}\n.d-qb.is-open .d-qb-more{max-height:44px}\n.d-qb-btn{margin-top:6px;font-family:var(--mono);font-size:9px;letter-spacing:.08em;padding:4px 8px;border:1px solid var(--line);border-radius:2px;background:var(--paper);color:var(--muted);cursor:pointer;transition:border-color 120ms cubic-bezier(.2,.75,.25,1),color 120ms cubic-bezier(.2,.75,.25,1)}\n.d-qb-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-qb-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"ribbon-note","cat":"内容","t":"旁注便签","en":"ribbon note","d":"便签歪 1.5° 是「贴上去而不是插进去」的最小可见角度，再多就像坏了；1px 硬边不改成软阴影，便签才留在纸面上而不浮起来。展开只放 54px、用 280ms 印刷曲线，因为旁注的职责是补一句话，写长就成了第二篇正文。","body":"<div class=\"d-rn\"><p class=\"d-rn-text\">正文往左让出一列，右边贴一张便签。<b>注释不打断句子</b>，读者愿意才展开。</p><aside class=\"d-rn-note\"><i class=\"d-rn-tab\"></i><button class=\"d-rn-btn\" type=\"button\" aria-expanded=\"false\">旁注 03 · 展开</button><div class=\"d-rn-more\"><p class=\"d-rn-ctx\">边注写短些：三行以内，读不完就不算旁注。</p></div></aside></div>","css":".d-rn{position:relative;width:300px;max-width:100%;height:150px;padding-top:4px;font-family:var(--sans)}\n.d-rn-text{width:158px;margin:0;font-size:11px;line-height:1.75;color:var(--muted)}\n.d-rn-text b{font-weight:650;color:var(--ink)}\n.d-rn-note{position:absolute;top:10px;right:2px;width:114px;padding:7px 9px 8px;border:1px solid var(--ink);border-radius:2px;background:var(--paper);transform:rotate(-1.5deg);box-shadow:0 1px 0 var(--line)}\n.d-rn-tab{display:block;height:1px;margin-bottom:6px;background:#e8c34a}\n.d-rn-btn{width:100%;padding:2px 0;border:0;border-bottom:1px solid var(--line);background:transparent;font-family:var(--mono);font-size:9px;letter-spacing:.06em;color:var(--ink);text-align:left;cursor:pointer}\n.d-rn-btn:focus-visible{outline:1px solid var(--ink);outline-offset:1px}\n.d-rn-more{max-height:0;overflow:hidden;transition:max-height 280ms cubic-bezier(.2,.75,.25,1)}\n.d-rn-ctx{margin:0;padding-top:5px;font-size:9px;line-height:1.6;color:var(--muted)}\n.d-rn.is-open .d-rn-more{max-height:58px}"},{"id":"svg-blob-morph","cat":"SVG 与路径","t":"有机形变","en":"blob morph","d":"八个极径按曲线插值再拼成 Q 路径，而不是给 d 做过渡——d 只有 Chromium 能补间；曲线在 1.56 那里过冲，半径会多鼓一点再回来，这才像一个会呼吸的墨点，等比缩放是死板的。半径上限压到 1.14 倍，过冲也不会蹭到边框。","body":"<div class=\"d-bm\"><svg class=\"d-bm-art\" viewBox=\"0 0 120 120\" aria-hidden=\"true\"><path class=\"d-bm-shape\" d=\"M60 27Q69 27 75 33Q82 39 80 47Q79 55 74 61Q69 68 62 71Q54 74 47 70Q40 66 38 59Q36 52 39 45Q42 37 49 32Q54 27 60 27Z\"/></svg><button class=\"d-bm-btn\" type=\"button\" aria-pressed=\"true\">停</button></div>","css":".d-bm{display:flex;align-items:center;gap:16px}\n.d-bm-art{width:120px;height:120px}\n.d-bm-shape{fill:#c2402a;stroke:var(--ink);stroke-width:1}\n.d-bm-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-bm-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-bm-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"svg-clip-reveal","cat":"SVG 与路径","t":"图形裁剪揭示","en":"svg clip reveal","d":"clipPath 里的 rect 必须设 transform-box:fill-box，否则 transform-origin 按 SVG 用户坐标算，揭示会从画布左上角漏出来，而不是从你点的那个角长出来。点哪儿就从哪个角开始——这是人翻纸样时的习惯。","body":"<div class=\"d-cr\"><svg class=\"d-cr-art\" viewBox=\"0 0 220 120\" aria-hidden=\"true\"><defs><clipPath id=\"d-svg-clip-reveal-win\" clipPathUnits=\"userSpaceOnUse\"><rect class=\"d-cr-cut\" x=\"0\" y=\"0\" width=\"220\" height=\"120\"/></clipPath></defs><g clip-path=\"url(#d-svg-clip-reveal-win)\"><rect class=\"d-cr-block\" x=\"20\" y=\"20\" width=\"180\" height=\"80\" rx=\"6\"/><circle class=\"d-cr-ring\" cx=\"186\" cy=\"34\" r=\"26\"/><path class=\"d-cr-rule\" d=\"M20 100H200\"/></g></svg><button class=\"d-cr-btn\" type=\"button\">再揭示</button></div>","css":".d-cr{display:flex;flex-direction:column;align-items:flex-start;gap:8px}\n.d-cr-art{display:block;width:220px;height:120px;cursor:pointer}\n.d-cr-block{fill:#2b4b8f}\n.d-cr-ring{fill:none;stroke:var(--ink);stroke-width:1}\n.d-cr-rule{stroke:var(--line);stroke-width:1}\n.d-cr-cut{transform-box:fill-box;transform-origin:100% 100%;transform:scale(1)}\n.d-cr.is-open .d-cr-cut{animation:d-svg-clip-reveal-open 900ms cubic-bezier(.2,.75,.25,1) both}\n@keyframes d-svg-clip-reveal-open{from{transform:scale(0)}to{transform:scale(1)}}\n.d-cr-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-cr-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-cr-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"svg-dash-progress","cat":"SVG 与路径","t":"圆环路径进度","en":"dash progress","d":"环和数字共用同一个 requestAnimationFrame 时钟，才不会出现环走到 78%、数字还停在 65% 的错位；周长用 getTotalLength() 现算而不是写死 126，换成椭圆或非圆路径也不用手改数字。","body":"<div class=\"d-dp\"><div class=\"d-dp-ring\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\"><svg class=\"d-dp-art\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><circle class=\"d-dp-track\" cx=\"24\" cy=\"24\" r=\"20\"/><circle class=\"d-dp-bar\" cx=\"24\" cy=\"24\" r=\"20\"/></svg><b class=\"d-dp-num\">0%</b></div><button class=\"d-dp-btn\" type=\"button\">重跑</button></div>","css":".d-dp{display:flex;align-items:center;gap:16px}\n.d-dp-ring{position:relative;display:grid;place-items:center;width:72px;height:72px}\n.d-dp-art{position:absolute;inset:0;width:72px;height:72px;transform:rotate(-90deg)}\n.d-dp-track,.d-dp-bar{fill:none;stroke-width:1}\n.d-dp-track{stroke:var(--line)}\n.d-dp-bar{stroke:#2b4b8f;stroke-dasharray:126;stroke-dashoffset:126}\n.d-dp-num{font-family:var(--font-mono);font-size:var(--fs-13);font-variant-numeric:tabular-nums;min-width:34px;text-align:center;color:var(--ink)}\n.d-dp-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-dp-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-dp-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"svg-draw-line","cat":"SVG 与路径","t":"描边生长","en":"stroke draw","d":"先用 2/4 的虚线铺一遍画稿，墨线再压着它走一趟——读者认的是「起稿→上墨」这个作画顺序，而不是一条线忽然出现；dasharray 取 271 是这条曲线的实长上取整，短一截就会在收笔处提前断掉。","body":"<div class=\"d-dl\"><svg class=\"d-dl-art\" viewBox=\"0 0 260 96\" aria-hidden=\"true\"><path class=\"d-dl-sketch\" d=\"M14 76C46 76 52 24 92 22C132 20 148 74 188 64C214 57 226 40 236 26\"/><path class=\"d-dl-ink\" d=\"M14 76C46 76 52 24 92 22C132 20 148 74 188 64C214 57 226 40 236 26\"/></svg><button class=\"d-dl-btn\" type=\"button\">重描一遍</button></div>","css":".d-dl{display:flex;flex-direction:column;align-items:flex-start;gap:8px;width:260px}\n.d-dl-art{display:block;width:260px;height:96px;overflow:visible}\n.d-dl-sketch,.d-dl-ink{fill:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round}\n.d-dl-sketch{stroke:var(--faint);stroke-dasharray:2 4}\n.d-dl-ink{stroke:var(--ink);stroke-dasharray:271;stroke-dashoffset:0}\n.d-dl.is-run .d-dl-ink{animation:d-svg-draw-line-ink 900ms cubic-bezier(.2,.75,.25,1) both}\n@keyframes d-svg-draw-line-ink{from{stroke-dashoffset:271}to{stroke-dashoffset:0}}\n.d-dl-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer;transition:border-color 120ms cubic-bezier(.2,.75,.25,1),color 120ms cubic-bezier(.2,.75,.25,1)}\n.d-dl-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-dl-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"svg-fill-wipe","cat":"SVG 与路径","t":"填充扫过","en":"fill wipe","d":"用一张会长高的白板当遮罩，而不是给 fill 做透明度过渡——fill 淡入一定会出现中间灰调，而刮墨落纸是硬边；板子以底边为原点，墨就从下往上被刮过去，露出边上那圈 1px 的印版线。","body":"<div class=\"d-fw\"><svg class=\"d-fw-art\" viewBox=\"0 0 220 120\" aria-hidden=\"true\"><defs><mask class=\"d-fw-mask\" id=\"d-svg-fill-wipe-m\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"220\" height=\"120\"><rect class=\"d-fw-blade\" x=\"22\" y=\"28\" width=\"176\" height=\"64\"/></mask></defs><path class=\"d-fw-ink\" d=\"M22 28H198V92H22Z\" mask=\"url(#d-svg-fill-wipe-m)\"/><circle class=\"d-fw-ring\" cx=\"198\" cy=\"28\" r=\"22\"/><path class=\"d-fw-line\" d=\"M22 28H198V92H22Z\"/></svg><button class=\"d-fw-btn\" type=\"button\">再刮一次</button></div>","css":".d-fw{display:flex;flex-direction:column;align-items:flex-start;gap:8px;width:220px}\n.d-fw-art{display:block;width:220px;height:120px;overflow:visible}\n.d-fw-mask{mask-type:alpha}\n.d-fw-blade{fill:var(--paper);transform-box:fill-box;transform-origin:50% 100%;transform:scaleY(0)}\n.d-fw-ink{fill:#c2402a}\n.d-fw-ring{fill:none;stroke:var(--ink);stroke-width:1}\n.d-fw-line{fill:none;stroke:var(--ink);stroke-width:1}\n.d-fw.is-wipe .d-fw-blade{animation:d-svg-fill-wipe-blade 900ms cubic-bezier(.2,.75,.25,1) both}\n@keyframes d-svg-fill-wipe-blade{from{transform:scaleY(0)}to{transform:scaleY(1)}}\n.d-fw-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-fw-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-fw-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"svg-morph-icon","cat":"SVG 与路径","t":"图标路径变形","en":"icon path morph","d":"两条箭头的 d 命令数与顺序完全一样，只有端点互换，所以交叉淡入的那一帧在空间里几乎重合，看不出是两个图形；命令数不同的图标硬切会在中途抖一下，这就是必须先对齐 d 结构的原因。","body":"<div class=\"d-mi\"><button class=\"d-mi-btn\" type=\"button\" aria-pressed=\"false\" aria-label=\"切换箭头方向\"><svg class=\"d-mi-art\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><path class=\"d-mi-up\" d=\"M24 40V8M14 18L24 8L34 18\"/><path class=\"d-mi-down\" d=\"M24 8V40M14 30L24 40L34 30\"/></svg></button></div>","css":".d-mi-btn{display:grid;place-items:center;width:64px;height:64px;border:1px solid var(--line);border-radius:10px;background:var(--paper);cursor:pointer;transition:border-color 180ms cubic-bezier(.34,1.56,.64,1)}\n.d-mi-btn:hover{border-color:var(--ink)}\n.d-mi-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-mi-art{width:48px;height:48px}\n.d-mi-up,.d-mi-down{fill:none;stroke:#2b4b8f;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;transform-box:fill-box;transform-origin:50% 50%;transition:opacity 180ms cubic-bezier(.34,1.56,.64,1),transform 180ms cubic-bezier(.34,1.56,.64,1)}\n.d-mi-up{opacity:1;transform:scale(1)}\n.d-mi-down{opacity:0;transform:scale(.8)}\n.d-mi-btn.is-down .d-mi-up{opacity:0;transform:scale(.8)}\n.d-mi-btn.is-down .d-mi-down{opacity:1;transform:scale(1)}"},{"id":"svg-motion-path","cat":"SVG 与路径","t":"沿路径运动","en":"motion path","d":"圆点用 offset-path 沿弧长跑，中段曲率最大的地方也不会被拽快——写四组 translate 关键帧做不到匀速；offset-rotate 必须设 0deg 关掉自动朝向，否则点会自己跟着切线打转。","body":"<div class=\"d-mp\"><svg class=\"d-mp-art\" viewBox=\"0 0 260 112\" aria-hidden=\"true\"><path class=\"d-mp-curve\" d=\"M14 88C58 88 62 26 108 26S164 88 208 66 236 22 246 30\"/></svg><i class=\"d-mp-dot\"></i><button class=\"d-mp-btn\" type=\"button\" aria-pressed=\"false\">暂停</button></div>","css":".d-mp{position:relative;width:260px;height:112px}\n.d-mp-art{display:block;width:260px;height:112px}\n.d-mp-curve{fill:none;stroke:var(--line);stroke-width:1}\n.d-mp-dot{position:absolute;left:0;top:0;width:6px;height:6px;border-radius:999px;background:#c2402a;offset-path:path(\"M14 88C58 88 62 26 108 26S164 88 208 66 236 22 246 30\");offset-rotate:0deg;animation:d-svg-motion-path-run 900ms linear infinite}\n@keyframes d-svg-motion-path-run{from{offset-distance:0%}to{offset-distance:100%}}\n.d-mp.is-paused .d-mp-dot{animation-play-state:paused}\n.d-mp-btn{position:absolute;right:0;bottom:0;font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-mp-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-mp-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@media (prefers-reduced-motion: reduce){.d-mp-dot{animation:none;offset-distance:100%}}"},{"id":"svg-noise-grain","cat":"SVG 与路径","t":"颗粒质感","en":"noise grain","d":"颗粒层比色块大 6px 再用同形状的 clip 裁住，抖动只发生在这 6px 余量里，边缘才不会露白；alpha 从噪声的 .6R+.6G+.6B-.55 取，只有噪声高的地方落墨，看着才是撒点而不是蒙一层灰。整页最大的一块实色留在这里，因为它得当印刷样张。","body":"<div class=\"d-ng\"><svg class=\"d-ng-art\" viewBox=\"0 0 168 104\" aria-hidden=\"true\"><defs><clipPath id=\"d-svg-noise-grain-c\"><rect x=\"0\" y=\"0\" width=\"168\" height=\"104\"/></clipPath><filter id=\"d-svg-noise-grain-f\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" seed=\"7\" stitchTiles=\"stitch\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .6 .6 .6 0 -.55\"/></filter></defs><rect class=\"d-ng-block\" x=\"0\" y=\"0\" width=\"168\" height=\"104\"/><g class=\"d-ng-film\" clip-path=\"url(#d-svg-noise-grain-c)\"><rect class=\"d-ng-grain\" x=\"-6\" y=\"-6\" width=\"180\" height=\"116\" filter=\"url(#d-svg-noise-grain-f)\"/></g></svg><button class=\"d-ng-btn\" type=\"button\" aria-pressed=\"false\">网点 细</button></div>","css":".d-ng{display:flex;flex-direction:column;align-items:flex-start;gap:8px}\n.d-ng-art{display:block;width:168px;height:104px}\n.d-ng-block{fill:#e8c34a}\n.d-ng-film{animation:d-svg-noise-grain-jit 900ms steps(6) infinite}\n.d-ng-grain{opacity:.38;mix-blend-mode:multiply}\n@keyframes d-svg-noise-grain-jit{from{transform:translate(0,0)}to{transform:translate(6px,6px)}}\n.d-ng-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-ng-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-ng-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@media (prefers-reduced-motion: reduce){.d-ng-film{animation:none}}"},{"id":"svg-stagger-dots","cat":"SVG 与路径","t":"点阵依次点亮","en":"staggered dots","d":"六格、每格迟 120ms：最后一格在 600ms 亮起，赶在第一格 900ms 复亮之前把这一轮走完，再加一格就会和第一轮撞上，先后顺序就读不出来了。点用实心圆不用方，12px 的方块会被眼睛读成表格线。","body":"<div class=\"d-sd\"><div class=\"d-sd-grid\"><i class=\"d-sd-dot\"></i><i class=\"d-sd-dot\"></i><i class=\"d-sd-dot\"></i><i class=\"d-sd-dot\"></i><i class=\"d-sd-dot\"></i><i class=\"d-sd-dot\"></i></div><button class=\"d-sd-btn\" type=\"button\" aria-pressed=\"false\">暂停</button></div>","css":".d-sd{display:flex;align-items:center;gap:16px}\n.d-sd-grid{display:grid;grid-template-columns:repeat(3,12px);gap:16px}\n.d-sd-dot{--k:0;width:12px;height:12px;border-radius:999px;background:#2b4b8f;opacity:.22;animation:d-svg-stagger-dots-scan 900ms linear infinite;animation-delay:calc(120ms * var(--k))}\n.d-sd-dot:nth-child(2){--k:1}\n.d-sd-dot:nth-child(3){--k:2}\n.d-sd-dot:nth-child(4){--k:3}\n.d-sd-dot:nth-child(5){--k:4}\n.d-sd-dot:nth-child(6){--k:5}\n@keyframes d-svg-stagger-dots-scan{0%{opacity:.22}20%{opacity:1}55%{opacity:1}75%{opacity:.22}100%{opacity:.22}}\n.d-sd.is-paused .d-sd-dot{animation-play-state:paused}\n.d-sd-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-sd-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-sd-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@media (prefers-reduced-motion: reduce){.d-sd-dot{animation:none;opacity:1}}"},{"id":"svg-text-on-path","cat":"SVG 与路径","t":"文字沿弧线","en":"text on path","d":"startOffset 50% 配 text-anchor middle，字串的中点才落在弧顶；中文字面比西文高，dominant-baseline 设 middle 才能让弧线从字腰穿过去，不然整行会漂在弧线上方一截。21px 是本条唯一的大字号，因为弧形排字本来就该占版面。","body":"<div class=\"d-tp\"><svg class=\"d-tp-art\" viewBox=\"0 0 260 118\" aria-hidden=\"true\"><defs><path id=\"d-svg-text-on-path-arc\" d=\"M22 106Q130 8 238 106\"/></defs><use class=\"d-tp-guide\" href=\"#d-svg-text-on-path-arc\"/><text class=\"d-tp-txt\"><textPath class=\"d-tp-run\" href=\"#d-svg-text-on-path-arc\" startOffset=\"50%\" text-anchor=\"middle\">铅字排在弧上</textPath></text></svg><button class=\"d-tp-btn\" type=\"button\" aria-pressed=\"false\">显示参考线</button></div>","css":".d-tp{display:flex;flex-direction:column;align-items:flex-start;gap:8px}\n.d-tp-art{display:block;width:260px;height:118px;overflow:visible}\n.d-tp-guide{fill:none;stroke:var(--faint);stroke-width:1;stroke-dasharray:2 4;opacity:0;transition:opacity 280ms cubic-bezier(.2,.75,.25,1)}\n.d-tp.is-guide .d-tp-guide{opacity:1}\n.d-tp-txt{fill:var(--ink);font-family:var(--font-sans);font-size:21px;font-weight:600;letter-spacing:.06em;dominant-baseline:middle}\n.d-tp-btn{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);padding:8px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--muted);cursor:pointer}\n.d-tp-btn:hover{border-color:var(--ink);color:var(--ink)}\n.d-tp-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"card-flip-3d","cat":"3D 与透视","t":"卡片翻面","en":"card flip","d":"翻面用 280ms：180° 要让眼睛看清「转的是同一张卡」，再短只剩闪一下，900ms 又会两面叠在半途、分不清哪面是新的。参数表放背面，因为翻面这个动作已经说明是同一张卡的另一面，不必再换位置。","body":"<button type=\"button\" class=\"d-cf3d\" aria-pressed=\"false\" aria-label=\"卡片翻面：正面看名称，背面看参数\"><span class=\"d-cf3d-in\"><span class=\"d-cf3d-face\"><span class=\"d-cf3d-k\">规格 · spec</span><span class=\"d-cf3d-name\">卡片 A</span><span class=\"d-cf3d-note\">点一下，背面是参数表</span></span><span class=\"d-cf3d-face d-cf3d-back\"><span class=\"d-cf3d-row\"><span class=\"d-cf3d-k\">尺寸</span><span class=\"d-cf3d-v\">300 × 148</span></span><span class=\"d-cf3d-row\"><span class=\"d-cf3d-k\">圆角</span><span class=\"d-cf3d-v\">10</span></span><span class=\"d-cf3d-row\"><span class=\"d-cf3d-k\">翻面</span><span class=\"d-cf3d-v\">280ms</span></span></span></span></button>","css":".d-cf3d{position:relative;box-sizing:border-box;width:300px;max-width:100%;height:148px;padding:0;border:0;background:none;font:inherit;color:inherit;text-align:left;perspective:900px;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.d-cf3d-in{position:absolute;inset:0;display:block;transform-style:preserve-3d;transition:transform 280ms cubic-bezier(.34,1.56,.64,1)}\n.d-cf3d-on .d-cf3d-in{transform:rotateY(180deg)}\n.d-cf3d-face{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;gap:8px;padding:12px 16px;box-sizing:border-box;border:1px solid var(--line);border-radius:10px;background:var(--paper);box-shadow:inset 0 1px 0 #fff5;backface-visibility:hidden}\n.d-cf3d-back{transform:rotateY(180deg);gap:2px}\n.d-cf3d-k{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;color:var(--faint);text-transform:uppercase}\n.d-cf3d-name{font-size:21px;font-weight:650;letter-spacing:-.01em;color:var(--ink)}\n.d-cf3d-note{font-size:11px;color:var(--muted)}\n.d-cf3d-row{display:flex;justify-content:space-between;gap:8px;padding:2px 0;border-bottom:1px solid var(--line);font-size:11px}\n.d-cf3d-row:last-child{border-bottom:0}\n.d-cf3d-v{font-family:var(--font-mono);color:var(--ink)}\n.d-cf3d:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"carousel-coverflow","cat":"3D 与透视","t":"封面轮播","en":"coverflow","d":"侧过身 34° 是「明显侧着」又不至于把标题折到看不见的角度，两侧再缩到 .82、压到 72% 不透就分出了主次。中间那张铺满靛墨是本组唯一的大色块：轮播的活是挑出一张，只靠描边看不出谁被选中。","body":"<div class=\"d-cf\" role=\"group\" aria-label=\"封面轮播：点两侧的封面把它挪到中间\"><button type=\"button\" class=\"d-cf-item\" aria-current=\"false\"><span class=\"d-cf-n\">01</span><span class=\"d-cf-t\">纸样</span></button><button type=\"button\" class=\"d-cf-item\" aria-current=\"true\"><span class=\"d-cf-n\">02</span><span class=\"d-cf-t\">印版</span></button><button type=\"button\" class=\"d-cf-item\" aria-current=\"false\"><span class=\"d-cf-n\">03</span><span class=\"d-cf-t\">装订</span></button></div>","css":".d-cf{position:relative;width:300px;max-width:100%;height:150px;perspective:640px}\n.d-cf-item{position:absolute;top:8px;left:50%;width:132px;height:132px;margin-left:-66px;display:flex;flex-direction:column;justify-content:flex-end;gap:2px;padding:10px;box-sizing:border-box;border:1px solid var(--line);border-radius:10px;background:var(--paper);color:var(--ink);font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform 280ms cubic-bezier(.34,1.56,.64,1),opacity 280ms cubic-bezier(.34,1.56,.64,1),background-color 280ms cubic-bezier(.34,1.56,.64,1),border-color 280ms cubic-bezier(.34,1.56,.64,1),color 280ms cubic-bezier(.34,1.56,.64,1)}\n.d-cf-item[data-pos=\"0\"]{transform:translateX(0) rotateY(0) scale(1);z-index:3;background:#2b4b8f;border-color:#2b4b8f;color:var(--paper)}\n.d-cf-item[data-pos=\"-1\"]{transform:translateX(-88px) rotateY(34deg) scale(.82);z-index:2;opacity:.72}\n.d-cf-item[data-pos=\"1\"]{transform:translateX(88px) rotateY(-34deg) scale(.82);z-index:2;opacity:.72}\n.d-cf-item:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n.d-cf-n{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;opacity:.7}\n.d-cf-t{font-size:15px}"},{"id":"cube-flip","cat":"3D 与透视","t":"立方体翻转","en":"cube flip","d":"90° 是面间夹角，多一度露缝、少一度会看到第二条面；两面必须同尺寸同圆角，否则转过去边缘对不齐，这是立方体最容易露馅的地方。B 面给 34px 大字压在朱墨块上：换面时最先被认出来的是整块颜色，不是小字。","body":"<button type=\"button\" class=\"d-cube\" aria-pressed=\"false\" aria-label=\"立方体翻转：A 面与 B 面互换\"><span class=\"d-cube-in\"><span class=\"d-cube-face d-cube-a\"><span class=\"d-cube-ch\">A</span><span class=\"d-cube-k\">正面</span></span><span class=\"d-cube-face d-cube-b\"><span class=\"d-cube-ch\">B</span><span class=\"d-cube-k\">底面</span></span></span></button>","css":".d-cube{position:relative;box-sizing:border-box;width:300px;max-width:100%;height:150px;padding:0;border:0;background:none;font:inherit;color:inherit;cursor:pointer;perspective:700px;-webkit-tap-highlight-color:transparent}\n.d-cube-in{position:absolute;left:50%;top:8px;width:124px;height:124px;margin-left:-62px;display:block;transform-style:preserve-3d;transition:transform 280ms cubic-bezier(.34,1.56,.64,1)}\n.d-cube-on .d-cube-in{transform:rotateX(90deg)}\n.d-cube-face{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;box-sizing:border-box;border:1px solid var(--line);border-radius:6px;background:var(--paper);backface-visibility:hidden}\n.d-cube-a{transform:translateZ(62px)}\n.d-cube-b{transform:rotateX(-90deg) translateZ(62px);background:#c2402a;border-color:#c2402a;color:var(--paper)}\n.d-cube-ch{font-size:34px;font-weight:700;line-height:1;letter-spacing:-.03em}\n.d-cube-k{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;opacity:.65}\n.d-cube:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"depth-parallax","cat":"3D 与透视","t":"分层视差","en":"depth parallax","d":"三层靠 translateZ 分景深，不手算每层位移：场景绕 Y 轴转 11° 时，近层在屏幕上走过的像素自然多于远层，跟真实透视一致。11° / 9° 是上限，再转背板边缘就会露出空边；方向键一次 3°，和鼠标手感同档。","body":"<div class=\"d-dp\" tabindex=\"0\" role=\"group\" aria-label=\"分层视差：鼠标移动或方向键转动景深\"><div class=\"d-dp-scene\"><span class=\"d-dp-plane d-dp-back\"></span><span class=\"d-dp-plane d-dp-mid\"><span class=\"d-dp-k\">景深三层</span></span><span class=\"d-dp-plane d-dp-front\"><span class=\"d-dp-v\">+60</span></span></div></div>","css":".d-dp{box-sizing:border-box;width:300px;max-width:100%;height:150px;border:1px solid var(--line);border-radius:10px;background:var(--bg);perspective:560px;overflow:hidden}\n.d-dp-scene{position:relative;width:100%;height:100%;transform-style:preserve-3d;will-change:transform}\n.d-dp-plane{position:absolute;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:6px}\n.d-dp-back{left:16px;top:16px;right:16px;bottom:16px;border:1px solid var(--line);background:var(--paper);transform:translateZ(-120px)}\n.d-dp-mid{left:64px;top:40px;width:172px;height:70px;border:1px solid var(--faint);background:var(--bg);transform:translateZ(-30px)}\n.d-dp-front{left:112px;top:56px;width:76px;height:38px;background:var(--ink);color:var(--bg);transform:translateZ(60px)}\n.d-dp-k{font-size:11px;letter-spacing:.08em;color:var(--muted)}\n.d-dp-v{font-family:var(--font-mono);font-size:11px}\n.d-dp:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"drawer-perspective","cat":"3D 与透视","t":"抽屉透视推出","en":"drawer perspective","d":"拉出用 translateZ 而不是 translateY：只有朝观察者推，边框才会出现轻微斜切，跟真抽屉抽出来一样；再叠 6° rotateX 让上沿先出来一点，超过 8° 就开始像在翻书。底层始终留一条 1px 缝，提醒下面还有东西。","body":"<div class=\"d-dw\"><div class=\"d-dw-under\"><span class=\"d-dw-k\">底层 · 发票 3 张</span></div><div class=\"d-dw-page\"><span class=\"d-dw-k\">本月</span><span class=\"d-dw-v\">报销单</span><span class=\"d-dw-n\">拉出后整页向观察者靠近</span></div><button type=\"button\" class=\"d-dw-handle\" aria-expanded=\"false\">拉出</button></div>","css":".d-dw{position:relative;box-sizing:border-box;width:300px;max-width:100%;height:150px;perspective:700px;perspective-origin:50% 40%}\n.d-dw-under{position:absolute;inset:0;display:flex;align-items:flex-start;padding:10px 16px;box-sizing:border-box;border:1px solid var(--line);border-radius:10px;background:var(--bg);color:var(--muted);font-size:11px}\n.d-dw-page{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;gap:2px;padding:12px 16px;box-sizing:border-box;border:1px solid var(--line);border-radius:10px;background:var(--paper);box-shadow:inset 0 1px 0 #fff5;transform-style:preserve-3d;transition:transform 280ms cubic-bezier(.34,1.56,.64,1)}\n.d-dw-on .d-dw-page{transform:translateZ(58px) translateY(-20px) rotateX(6deg)}\n.d-dw-k{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;color:var(--faint)}\n.d-dw-v{font-size:21px;font-weight:650;letter-spacing:-.01em;color:var(--ink)}\n.d-dw-n{font-size:11px;color:var(--muted)}\n.d-dw-handle{position:absolute;left:50%;bottom:-1px;z-index:2;height:22px;padding:0 12px;border:1px solid var(--line);border-radius:999px;background:var(--paper);color:var(--muted);font:inherit;font-size:11px;cursor:pointer;transform:translateX(-50%);-webkit-tap-highlight-color:transparent}\n.d-dw-on .d-dw-handle{color:var(--ink);border-color:var(--ink)}\n.d-dw-handle:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"extruded-text","cat":"3D 与透视","t":"立体文字","en":"extruded text","d":"厚度用 14 层同字叠出来，每层错 1px：用阴影做会糊，用 3D 变换做会连字重一起变形。指针只让整块偏 8°，超过就开始晕，而且字要能被读出来，不能被当成一张立体贴纸。厚度色比正面深一档，光才像是从左上来的。","body":"<div class=\"d-xt-stage\" tabindex=\"0\" aria-label=\"立体文字：移动指针它会跟着偏\"><span class=\"d-xt-word\" data-word=\"缓坡\">缓坡</span><span class=\"d-xt-sub\">SLOPE · 2026</span></div>","css":".d-xt-stage{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;width:100%;max-width:340px;height:180px;border:1px solid var(--line);border-radius:10px;background:var(--bg);perspective:600px;overflow:hidden}\n.d-xt-word{position:relative;font-family:var(--font-serif);font-size:56px;font-weight:700;line-height:1;letter-spacing:.02em;color:var(--ink);text-shadow:1px 1px 0 var(--muted),2px 2px 0 var(--muted),3px 3px 0 var(--muted),4px 4px 0 var(--muted),5px 5px 0 var(--muted),6px 6px 0 var(--faint),7px 7px 0 var(--faint),8px 8px 0 var(--faint),9px 9px 0 var(--faint),10px 10px 0 var(--faint),11px 11px 0 var(--faint),12px 12px 0 var(--faint),14px 14px 0 var(--faint);transform-style:preserve-3d;transition:transform 280ms var(--ease-spring);will-change:transform}\n.d-xt-sub{font-family:var(--font-mono);font-size:9px;letter-spacing:.16em;color:var(--faint)}\n@media (prefers-reduced-motion:reduce){.d-xt-word{transition:none}}"},{"id":"hover-lift-shadow","cat":"3D 与透视","t":"悬浮与影子","en":"hover lift shadow","d":"抬起 12px 的同时影子放大 8px、变虚、变淡：影子不是装饰，是告诉你它离桌面多高。只抬不散影，看起来像整个卡片在往上滚；只散影不抬，像地上有水汽。落回去用 180ms 比抬起快，手感才对——按住东西落下的速度本来就比松开快。","body":"<div class=\"d-hs-stage\"><button type=\"button\" class=\"d-hs-card\"><span class=\"d-hs-k\">SPEC 07</span><b>纸面卡片</b><span class=\"d-hs-meta\">悬停或键盘聚焦</span></button><span class=\"d-hs-shadow\" aria-hidden=\"true\"></span><p class=\"d-hs-note\">影子随高度变</p></div>","css":".d-hs-stage{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;width:100%;max-width:340px;height:190px;border:1px solid var(--line);border-radius:10px;background:var(--bg);overflow:hidden}\n.d-hs-card{position:relative;z-index:1;display:flex;flex-direction:column;gap:2px;width:200px;padding:14px 16px;border:1px solid var(--line);border-radius:10px;background:var(--paper);color:var(--ink);font:inherit;text-align:left;cursor:pointer;transform:translateY(0);transition:transform 280ms var(--ease-spring),border-color 180ms var(--ease-print)}\n.d-hs-card:hover,.d-hs-card:focus-visible{transform:translateY(-12px);border-color:var(--ink);outline:none}\n.d-hs-card:active{transform:translateY(-4px);transition-duration:120ms}\n.d-hs-k{font-family:var(--font-mono);font-size:9px;letter-spacing:.08em;color:var(--faint)}\n.d-hs-card b{font-size:15px;font-weight:650;letter-spacing:-.01em}\n.d-hs-meta{font-size:11px;color:var(--muted)}\n.d-hs-shadow{position:absolute;bottom:34px;width:170px;height:14px;border-radius:50%;background:var(--ink);opacity:.18;filter:blur(6px);transform:scale(1);transition:transform 280ms var(--ease-spring),opacity 280ms var(--ease-print),filter 280ms var(--ease-print)}\n.d-hs-stage:hover .d-hs-shadow,.d-hs-card:focus-visible~.d-hs-shadow{transform:translateY(6px) scale(1.08);opacity:.1;filter:blur(11px)}\n.d-hs-note{margin:0;font-size:9px;color:var(--faint)}"},{"id":"isometric-stack","cat":"3D 与透视","t":"等距图层","en":"isometric stack","d":"等距不是随便斜一下：X 轴压到 cos(60°)、Y 轴压到 sin(60°)，比例不对就不像等距而像被拉歪的平面。抽出时每层间距 26px，是 1px 描边在这个尺度下还能数清层数的最小值。三层封顶——再往上加，抽出来就飞出框了。","body":"<div class=\"d-iso-stage\"><div class=\"d-iso-scene\"><div class=\"d-iso-layer d-iso-l1\"><span>数据</span></div><div class=\"d-iso-layer d-iso-l2\"><span>接口</span></div><div class=\"d-iso-layer d-iso-l3\"><span>界面</span></div></div><button type=\"button\" class=\"d-iso-btn\" aria-pressed=\"false\">抽出图层</button></div>","css":".d-iso-stage{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;width:100%;max-width:340px;height:196px;border:1px solid var(--line);border-radius:10px;background:var(--bg);overflow:hidden}\n.d-iso-scene{position:relative;width:150px;height:104px;transform-style:preserve-3d;transform:rotateX(58deg) rotateZ(-40deg) translateY(-4px)}\n.d-iso-layer{position:absolute;inset:0;display:flex;align-items:flex-end;padding:8px 10px;box-sizing:border-box;border:1px solid var(--ink);border-radius:6px;background:var(--paper);font-family:var(--font-mono);font-size:9px;letter-spacing:.08em;color:var(--ink);box-shadow:0 6px 14px #20241e26;transition:transform 280ms var(--ease-spring)}\n.d-iso-l1{transform:translateZ(0)}\n.d-iso-l2{transform:translateZ(16px);background:color-mix(in srgb,var(--ink) 6%,var(--paper))}\n.d-iso-l3{transform:translateZ(32px);background:color-mix(in srgb,var(--ink) 12%,var(--paper))}\n.d-iso-stage.d-iso-open .d-iso-l1{transform:translateZ(-26px)}\n.d-iso-stage.d-iso-open .d-iso-l2{transform:translateZ(16px)}\n.d-iso-stage.d-iso-open .d-iso-l3{transform:translateZ(58px)}\n.d-iso-btn{position:absolute;bottom:10px;padding:5px 12px;border:1px solid var(--line);border-radius:999px;background:var(--paper);color:var(--ink);font:inherit;font-size:11px;cursor:pointer}\n.d-iso-btn:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@media (prefers-reduced-motion:reduce){.d-iso-layer{transition:none}}"},{"id":"layer-explode","cat":"3D 与透视","t":"分层爆炸图","en":"layer explode","d":"三层沿 Z 轴拉开 26px，是 1px 描边在 640px 透视下还能认出「这是三层」的最小间隙，再挤就糊成一张卡；指针进入某层时它抬到 64px、其余退到 -18px 并压到 45% 不透明度，读者先看清被抽出的那一层，再回头对它在原图里的位置。记忆点：抽屉式抽层。","body":"<div class=\"d-le\" role=\"group\" aria-label=\"分层爆炸图：悬停或聚焦任一层，该层抬起、其余后退\"><div class=\"d-le-deck\"><div class=\"d-le-plate\" tabindex=\"0\"><b class=\"d-le-no\">01</b><span class=\"d-le-name\">底板</span></div><div class=\"d-le-plate\" tabindex=\"0\"><b class=\"d-le-no\">02</b><span class=\"d-le-name\">图文层</span></div><div class=\"d-le-plate\" tabindex=\"0\"><b class=\"d-le-no\">03</b><span class=\"d-le-name\">标注层</span></div></div></div>","css":".d-le{box-sizing:border-box;width:260px;max-width:100%;height:150px;display:grid;place-items:center;perspective:640px}\n.d-le-deck{position:relative;width:196px;height:84px;transform-style:preserve-3d;transform:rotateX(18deg) rotateY(-14deg)}\n.d-le-plate{position:absolute;inset:0;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;padding:0 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--ink);transform:translateZ(var(--z,0px));transition:transform 280ms cubic-bezier(.34,1.56,.64,1),opacity 180ms cubic-bezier(.34,1.56,.64,1),border-color 120ms cubic-bezier(.34,1.56,.64,1);will-change:transform}\n.d-le-plate:nth-child(1){--z:0px;z-index:1}\n.d-le-plate:nth-child(2){--z:26px;z-index:2}\n.d-le-plate:nth-child(3){--z:52px;z-index:3}\n.d-le-no{font-family:var(--font-mono);font-size:var(--fs-11);font-weight:400;letter-spacing:var(--tracking-mono-label);color:var(--faint)}\n.d-le-name{font-size:var(--fs-13);font-weight:600}\n.d-le-deck.is-hot .d-le-plate{opacity:.45;transform:translateZ(-18px)}\n.d-le-deck.is-hot .d-le-plate.is-on{opacity:1;border-color:var(--ink);transform:translateZ(64px)}\n.d-le-plate:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"orbit-chart","cat":"3D 与透视","t":"可转立体图表","en":"orbit chart","d":"柱子高度直接写进每根自己的变量里，换数据只改数字，不用动布局；地面网格给 5 格是为了让眼睛有刻度，不给格子就只能看个大概。拖到侧面时后排柱子会被前排挡住一点，这是真三维该有的遮挡，不是 bug——反过来，如果完全不遮，说明只是在斜切一张平面图。","body":"<div class=\"d-oc-stage\" aria-label=\"立体柱状图：拖动可以换角度\"><div class=\"d-oc-scene\"><div class=\"d-oc-floor\"></div><div class=\"d-oc-bar\" style=\"--h:58px;--i:0\"></div><div class=\"d-oc-bar\" style=\"--h:92px;--i:1\"></div><div class=\"d-oc-bar\" style=\"--h:38px;--i:2\"></div><div class=\"d-oc-bar\" style=\"--h:74px;--i:3\"></div><div class=\"d-oc-bar\" style=\"--h:47px;--i:4\"></div></div><p class=\"d-oc-note\">拖动换角度 · 单位：次</p></div>","css":".d-oc-stage{position:relative;width:100%;max-width:340px;padding:8px 0 0;border:1px solid var(--line);border-radius:10px;background:var(--bg);overflow:hidden;touch-action:none;cursor:grab}\n.d-oc-stage.d-oc-drag{cursor:grabbing}\n.d-oc-scene{position:relative;height:172px;margin:0 auto;width:220px;transform-style:preserve-3d;transform:rotateX(58deg) rotateZ(-40deg) translateZ(-18px);will-change:transform}\n.d-oc-floor{position:absolute;left:0;bottom:0;width:200px;height:120px;background-image:repeating-linear-gradient(0deg,var(--line) 0 1px,transparent 1px 24px),repeating-linear-gradient(90deg,var(--line) 0 1px,transparent 1px 24px);opacity:.9}\n.d-oc-bar{position:absolute;bottom:0;left:calc(var(--i) * 38px + 12px);width:20px;height:var(--h);border-radius:2px 2px 0 0;background:var(--ink);transform:translateZ(0);transform-origin:50% 100%}\n.d-oc-bar:nth-child(odd){background:var(--ink-vermilion)}\n.d-oc-note{margin:4px 0 8px;text-align:center;font-family:var(--font-mono);font-size:9px;letter-spacing:.08em;color:var(--faint)}"},{"id":"particle-depth","cat":"3D 与透视","t":"粒子景深","en":"particle depth","d":"远近决定三件事：大小、速度、亮度。远的粒子又小又慢还压暗，近的又大又快，这样看起来才是往屏幕外飞，而不是一堆点在平移。数量按面积给，340×180 只放 46 个，多了就糊成噪点。离开屏幕就停，不白烧电。","body":"<canvas class=\"d-pd-canvas\" aria-label=\"粒子向屏幕外飞出的景深示意\" role=\"img\"></canvas>","css":".d-pd-canvas{display:block;width:100%;max-width:340px;height:180px;border:1px solid var(--line);border-radius:10px;background:var(--bg)}"},{"id":"pointer-light","cat":"3D 与透视","t":"指针当光源","en":"pointer light","d":"光是跟着指针走的一个圆形渐变，中心亮度只到 18%：再亮就盖住了卡面文字，读者先看见光斑再看见内容。光斑用两层——紧的一层是灯，散的一层是反射；只做一层会像一块脏印子。指针离开立刻灭，因为光源跟着人走了，不是留在原地。","body":"<div class=\"d-lt-stage\" tabindex=\"0\" aria-label=\"指针移到卡面上，高光会跟着走\"><div class=\"d-lt-card\"><span class=\"d-lt-k\">LIGHT</span><b>材质在动</b><span class=\"d-lt-meta\">高光跟着指针，不是装饰</span></div><p class=\"d-lt-note\">移一下指针</p></div>","css":".d-lt-stage{--lx:50%;--ly:0%;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;width:100%;max-width:340px;height:180px;border:1px solid var(--line);border-radius:10px;background:var(--bg);overflow:hidden}\n.d-lt-card{position:relative;width:220px;padding:16px 16px 18px;border:1px solid var(--line);border-radius:10px;background:var(--paper);overflow:hidden;box-shadow:0 1px 0 var(--line)}\n.d-lt-card:before{content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;background:radial-gradient(120px 120px at var(--lx,50%) var(--ly,0%),color-mix(in srgb,var(--marker-hi) 55%,transparent),transparent 62%);opacity:0;transition:opacity 220ms var(--ease-print);pointer-events:none}\n.d-lt-card:after{content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;background:radial-gradient(60px 60px at var(--lx,50%) var(--ly,0%),color-mix(in srgb,var(--paper) 80%,transparent),transparent 70%);opacity:0;transition:opacity 220ms var(--ease-print);pointer-events:none}\n.d-lt-stage.d-lt-on .d-lt-card:before{opacity:.18}\n.d-lt-stage.d-lt-on .d-lt-card:after{opacity:.5}\n.d-lt-k{display:block;font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;color:var(--faint)}\n.d-lt-card b{display:block;margin-top:2px;font-size:15px;font-weight:650;letter-spacing:-.01em}\n.d-lt-meta{display:block;margin-top:2px;font-size:11px;color:var(--muted)}\n.d-lt-note{position:absolute;bottom:8px;margin:0;font-size:9px;color:var(--faint)}\n@media (prefers-reduced-motion:reduce){.d-lt-card:before,.d-lt-card:after{transition:none}}"},{"id":"scroll-camera-dolly","cat":"3D 与透视","t":"滚动推镜","en":"scroll camera dolly","d":"把滚动量直接接到纵深上，等于相机往前推：近层涨得比远层快，是因为它本来离你近，不是给每层各设一个放大系数。推到顶时停在 150px，再往前近层会糊出框；回滚不弹，因为镜头不该有回弹。","body":"<div class=\"d-cd-scroll\" tabindex=\"0\" aria-label=\"滚动这块区域，镜头向前推进\"><div class=\"d-cd-space\"><div class=\"d-cd-scene\"><div class=\"d-cd-plane d-cd-far\"><span>背景板</span></div><div class=\"d-cd-plane d-cd-mid\"><span>中层</span></div><div class=\"d-cd-plane d-cd-near\"><span>前景</span></div></div><p class=\"d-cd-hint\">往下滚</p></div></div>","css":".d-cd-scroll{width:100%;max-width:340px;height:168px;overflow:auto;border:1px solid var(--line);border-radius:10px;background:color-mix(in srgb,var(--ink) 5%,var(--bg));overscroll-behavior:contain}\n.d-cd-space{height:460px;display:flex;align-items:flex-start;justify-content:center;padding-top:24px}\n.d-cd-scene{position:relative;width:220px;height:120px;perspective:520px;perspective-origin:50% 50%}\n.d-cd-plane{position:absolute;inset:0;display:grid;place-items:center;border:1px solid var(--line);border-radius:6px;background:var(--paper);font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;color:var(--muted);transform-style:preserve-3d}\n.d-cd-far{transform:translateZ(-140px) scale(1.16);background:color-mix(in srgb,var(--ink) 7%,var(--paper))}\n.d-cd-mid{transform:translateZ(-70px) scale(1.07);color:var(--ink)}\n.d-cd-near{transform:translateZ(0);border-color:var(--ink);color:var(--ink)}\n.d-cd-hint{margin:26px 0 0;font-size:11px;color:var(--faint);text-align:center}"},{"id":"scroll-parallax-depth","cat":"3D 与透视","t":"滚动分层视差","en":"scroll parallax depth","d":"三层给 0.18 / 0.42 / 0.8 三个系数，不是随便取的：远景只跟四分之一，近景几乎贴身，中间那层压在大约一半，读者才信这三层在同一个空间里。层内文字靠左对齐同一条线，滚动时错开的是距离不是位置，所以看起来是你在往纵深里走，不是三张图各飘各的。","body":"<div class=\"d-pp-scroll\" tabindex=\"0\" aria-label=\"滚动这块区域，看三层景物以不同速度移动\"><div class=\"d-pp-space\"><div class=\"d-pp-layer d-pp-back\"><span>远景 · 山脊</span></div><div class=\"d-pp-layer d-pp-mid\"><span>中景 · 树线</span></div><div class=\"d-pp-layer d-pp-front\"><span>近景 · 栏杆</span></div></div></div>","css":".d-pp-scroll{position:relative;width:100%;max-width:340px;height:168px;overflow:auto;border:1px solid var(--line);border-radius:10px;background:var(--bg);overscroll-behavior:contain}\n.d-pp-space{position:relative;height:420px}\n.d-pp-layer{position:absolute;left:0;right:0;display:flex;align-items:center;padding:0 14px;box-sizing:border-box;will-change:transform}\n.d-pp-layer span{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em}\n.d-pp-back{top:40px;height:78px;background:color-mix(in srgb,var(--ink) 8%,var(--bg));color:var(--faint);border-bottom:1px solid var(--line)}\n.d-pp-mid{top:118px;height:70px;background:color-mix(in srgb,var(--ink) 14%,var(--bg));color:var(--muted)}\n.d-pp-front{top:196px;height:64px;background:var(--ink);color:var(--paper)}\n@media (prefers-reduced-motion:reduce){.d-pp-layer{will-change:auto}}"},{"id":"scroll-tilt-reveal","cat":"3D 与透视","t":"滚动立起","en":"scroll tilt reveal","d":"躺到立走 68° 而不是 90°：90° 是纯平贴地，滚到一半会像一块被翻过来的板子，68° 还留着一眼能读到的厚度。每块按自己的位置算进度，不按整页滚动量算，所以长页面上第一块立完第二块才开始，不会一起倒。","body":"<div class=\"d-tt-scroll\" aria-label=\"滚动这块区域，三块内容依次立起\"><div class=\"d-tt-space\"><article class=\"d-tt-card\"><b>01</b><span>先有结构</span></article><article class=\"d-tt-card\"><b>02</b><span>再挂动效</span></article><article class=\"d-tt-card\"><b>03</b><span>最后加一处破格</span></article></div></div>","css":".d-tt-scroll{width:100%;max-width:340px;height:180px;overflow:auto;border:1px solid var(--line);border-radius:10px;background:var(--bg);overscroll-behavior:contain;perspective:700px}\n.d-tt-space{display:flex;flex-direction:column;gap:22px;padding:26px 14px 60px}\n.d-tt-card{display:flex;align-items:baseline;gap:10px;padding:12px 14px;border:1px solid var(--line);border-radius:6px;background:var(--paper);transform-origin:50% 100%;transform:rotateX(68deg) translateY(18px);opacity:.35;will-change:transform,opacity}\n.d-tt-card b{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;color:var(--ink-vermilion)}\n.d-tt-card span{font-size:13px;color:var(--ink)}\n@media (prefers-reduced-motion:reduce){.d-tt-card{transform:none;opacity:1}}"},{"id":"tag-sphere","cat":"3D 与透视","t":"标签球","en":"tag sphere","d":"每个词的位置用等距球面点算，不手写坐标：手写的坐标会挤在赤道。远小近大按 260 的焦距算，透明度跟着深度掉，最远的降到 35%——不是为了好看，是为了让眼睛分得清前后。拖一下会带着惯性转，松手后慢慢停，停的位置由松手那一下的速度决定。","body":"<div class=\"d-ts-stage\" aria-label=\"标签球：可以用手拖动旋转\"><div class=\"d-ts-core\"></div><span class=\"d-ts-tag\">排版</span><span class=\"d-ts-tag\">留白</span><span class=\"d-ts-tag\">描边</span><span class=\"d-ts-tag\">节奏</span><span class=\"d-ts-tag\">油墨</span><span class=\"d-ts-tag\">纸感</span><span class=\"d-ts-tag\">对齐</span><span class=\"d-ts-tag\">层级</span></div>","css":".d-ts-stage{position:relative;width:100%;max-width:340px;height:190px;overflow:hidden;border:1px solid var(--line);border-radius:10px;background:var(--bg);touch-action:none;cursor:grab}\n.d-ts-stage.d-ts-drag{cursor:grabbing}\n.d-ts-core{position:absolute;left:50%;top:50%;width:6px;height:6px;margin:-3px 0 0 -3px;border-radius:50%;background:var(--ink);opacity:.35}\n.d-ts-tag{position:absolute;left:50%;top:50%;padding:3px 8px;border:1px solid var(--line);border-radius:999px;background:var(--paper);font-size:11px;line-height:1.2;white-space:nowrap;color:var(--ink);will-change:transform,opacity}"},{"id":"tilt-stack","cat":"3D 与透视","t":"倾斜叠层","en":"tilt stack","d":"三张卡只错 8px 与 16px，再大就会被读成三张独立的卡，而不是一叠；指针移动时整叠只偏 8°（纵轴 6°），超过这个角度卡面文字开始难读。最上层抬 4px 是为了让「手正按着一叠纸」这件事有落点。记忆点：纸叠被指尖压得一歪，上面那张先翘起来。","body":"<div class=\"d-ts\" tabindex=\"0\" role=\"group\" aria-label=\"倾斜叠层：指针移动时整叠倾斜，最上层抬起 4px\"><div class=\"d-ts-deck\"><div class=\"d-ts-card\"></div><div class=\"d-ts-card\"></div><div class=\"d-ts-card\"><span class=\"d-ts-k\">01 打样</span><span class=\"d-ts-n\">叠层页</span></div></div></div>","css":".d-ts{box-sizing:border-box;width:236px;max-width:100%;height:150px;display:grid;place-items:center;perspective:700px;outline:none}\n.d-ts-deck{--rx:0deg;--ry:0deg;position:relative;width:196px;height:92px;transform-style:preserve-3d;transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform 180ms cubic-bezier(.34,1.56,.64,1);will-change:transform}\n.d-ts-card{position:absolute;inset:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-end;gap:2px;padding:10px 12px;border:1px solid var(--line);border-radius:10px;background:var(--paper);transition:transform 280ms cubic-bezier(.34,1.56,.64,1),opacity 180ms cubic-bezier(.34,1.56,.64,1)}\n.d-ts-card:nth-child(1){transform:translateY(16px) translateZ(-28px);opacity:.55}\n.d-ts-card:nth-child(2){transform:translateY(8px) translateZ(-14px);opacity:.75}\n.d-ts-card:nth-child(3){transform:translateY(0) translateZ(0)}\n.d-ts:hover .d-ts-card:nth-child(3),.d-ts:focus-visible .d-ts-card:nth-child(3){transform:translateY(-4px) translateZ(0)}\n.d-ts-k{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);color:var(--faint)}\n.d-ts-n{font-size:var(--fs-15);font-weight:650;line-height:var(--lh-display);letter-spacing:var(--tracking-display);color:var(--ink)}\n.d-ts:focus-visible{outline:1px solid var(--ink);outline-offset:6px}"},{"id":"scroll-counters","cat":"滚动驱动","t":"滚动计数","en":"scroll counters","d":"数字不做补间，而是用 scroll-timeline 把 0 到目标值切成 6 格（steps(6)），126 / 18 / 96 除得尽，所以每格分别是 21 / 3 / 16，读数永远落在整数上——仪器式的计数不该出现小数抖动。记忆点：往下滚，三个数字像计数器一样一格一格跳。","body":"<div class=\"d-sc\" role=\"group\" aria-label=\"滚动计数：向下滚动，三个数字从 0 走到目标值\"><div class=\"d-sc-scroll\" tabindex=\"0\"><div class=\"d-sc-head\"><div class=\"d-sc-cell\"><span class=\"d-sc-num d-sc-n1\"></span><span class=\"d-sc-k\">印张</span></div><div class=\"d-sc-cell\"><span class=\"d-sc-num d-sc-n2\"></span><span class=\"d-sc-k\">校次</span></div><div class=\"d-sc-cell\"><span class=\"d-sc-num d-sc-n3\"></span><span class=\"d-sc-k\">成品率</span></div></div><p class=\"d-sc-p\">第一版上机，墨辊先空转两圈，让油墨在辊面上匀开。</p><p class=\"d-sc-p\">样张从收纸台取下来，对着色标看三块油墨的深浅。</p><p class=\"d-sc-p\">压力调小半格，网点就不再往纸里陷。</p><p class=\"d-sc-p\">把样张折一道，看折缝处的墨色有没有匀。</p><p class=\"d-sc-p\">换第二版之前，先洗掉墨辊上的旧色，免得串色。</p><p class=\"d-sc-p\">刀口的毛边用指尖抹过，摸得出来就该磨刀了。</p><p class=\"d-sc-p\">成品按印次编号，签样一起装进牛皮纸袋。</p><p class=\"d-sc-p\">这一卷的账记完了，数字停在最后一次校色的位置。</p></div></div>","css":".d-sc{box-sizing:border-box;width:300px;max-width:100%;height:150px;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--bg)}\n.d-sc-scroll{box-sizing:border-box;height:100%;overflow-y:auto;scrollbar-width:none;padding:0 12px 12px}\n.d-sc-scroll::-webkit-scrollbar{width:0;height:0}\n.d-sc-head{position:sticky;top:0;display:flex;gap:8px;padding:12px 0 8px;background:var(--bg);border-bottom:1px solid var(--line)}\n.d-sc-cell{flex:1;display:flex;flex-direction:column;gap:2px}\n.d-sc-num{font-family:var(--font-mono);font-size:var(--fs-21);font-weight:650;line-height:var(--lh-display);color:var(--ink);font-variant-numeric:tabular-nums}\n.d-sc-k{font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);color:var(--faint)}\n.d-sc-p{margin:12px 0 0;font-size:var(--fs-11);line-height:var(--lh-note);color:var(--muted)}\n@property --d-sc-n1{syntax:\"<integer>\";inherits:false;initial-value:0}\n@property --d-sc-n2{syntax:\"<integer>\";inherits:false;initial-value:0}\n@property --d-sc-n3{syntax:\"<integer>\";inherits:false;initial-value:0}\n.d-sc-n1{--d-sc-n1:0;counter-reset:d-sc-c1 var(--d-sc-n1);animation:d-scroll-counters-one steps(6) both;animation-timeline:scroll(nearest)}\n.d-sc-n2{--d-sc-n2:0;counter-reset:d-sc-c2 var(--d-sc-n2);animation:d-scroll-counters-two steps(6) both;animation-timeline:scroll(nearest)}\n.d-sc-n3{--d-sc-n3:0;counter-reset:d-sc-c3 var(--d-sc-n3);animation:d-scroll-counters-three steps(6) both;animation-timeline:scroll(nearest)}\n.d-sc-n1::before{content:counter(d-sc-c1)}\n.d-sc-n2::before{content:counter(d-sc-c2)}\n.d-sc-n3::before{content:counter(d-sc-c3) \"%\"}\n.d-sc-scroll:focus-visible{outline:1px solid var(--ink);outline-offset:-3px}\n@keyframes d-scroll-counters-one{from{--d-sc-n1:0}to{--d-sc-n1:126}}\n@keyframes d-scroll-counters-two{from{--d-sc-n2:0}to{--d-sc-n2:18}}\n@keyframes d-scroll-counters-three{from{--d-sc-n3:0}to{--d-sc-n3:96}}"},{"id":"scroll-horizontal-pin","cat":"滚动驱动","t":"横向锁定","en":"horizontal pin","d":"纵向留 390px 换横向 600px，不是 1:1：横向三块各 300，必须走满 600 才能让第三块贴住左边；纵向 390 是「走完横向刚好也到底」，多一屏会让人以为卡住。pin 用 sticky 而不是 transform 顶住，因为 sticky 在滚动容器里天然对齐，不用算偏移。","body":"<div class=\"d-hp\" tabindex=\"0\" aria-label=\"横向锁定：纵向滚动带动横向位移\"><div class=\"d-hp-space\"><div class=\"d-hp-pin\"><div class=\"d-hp-track\"><span class=\"d-hp-panel\">01 印前</span><span class=\"d-hp-panel\">02 上机</span><span class=\"d-hp-panel\">03 装订</span></div></div></div></div>","css":".d-hp{box-sizing:border-box;width:300px;max-width:100%;height:150px;overflow-x:hidden;overflow-y:auto;border:1px solid var(--line);border-radius:10px;background:var(--bg)}\n.d-hp-space{height:540px}\n.d-hp-pin{position:sticky;top:0;height:148px;display:flex;align-items:center}\n.d-hp-track{display:flex;width:900px;animation:d-scroll-horizontal-pin-x linear both;animation-timeline:scroll(nearest)}\n.d-hp-panel{flex:0 0 300px;box-sizing:border-box;height:148px;display:flex;align-items:center;justify-content:center;border-right:1px solid var(--line);font-size:15px;color:var(--muted);background:var(--bg)}\n.d-hp-panel:nth-child(odd){background:var(--paper);color:var(--ink)}\n.d-hp:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@keyframes d-scroll-horizontal-pin-x{from{transform:translateX(0)}to{transform:translateX(-600px)}}"},{"id":"scroll-range-fade","cat":"滚动驱动","t":"区间淡出","en":"range fade","d":"把退场钉在 cover 55%–95%：卡片在视口里全墨走完大半段，贴上沿才淡到只剩轮廓——淡出绑在「已经在离场」的那一段，读者一进来不会先看到一张半透明的卡。用 animation-range 而不是手算 top<40%，换字号、换行高都不用重算数值。","body":"<div class=\"d-rg\" tabindex=\"0\" aria-label=\"区间淡出：卡片在指定滚动区间里退场\"><div class=\"d-rg-body\"><p class=\"d-rg-h\">区间淡出</p><p class=\"d-rg-p\">上面这一段是垫高用的：先让卡片在视口里正常出现，往下滚才看它贴上沿退场；没有这段，卡片一进来就已经在半透明里，看不出「开始退场」那一下。</p><div class=\"d-rg-card\"><p class=\"d-rg-t\">cover 55% → 95%</p><p class=\"d-rg-k\">animation-range: cover 55% / cover 95%</p></div><p class=\"d-rg-p\">这一段同样是垫高，好让卡片能贴着上沿走完整个区间。滚到底部时它只剩一圈轮廓和 15% 的墨；往回滚，它会一路还原，不需要点任何按钮，这也是交给滚动位置而不是脚本的原因。</p></div></div>","css":".d-rg{box-sizing:border-box;width:300px;max-width:100%;height:150px;overflow-x:hidden;overflow-y:auto;border:1px solid var(--line);border-radius:10px;background:var(--bg)}\n.d-rg-body{padding:12px}\n.d-rg-h{margin:0 0 4px;font-size:15px;color:var(--ink)}\n.d-rg-p{margin:0 0 12px;font-size:11px;line-height:1.6;color:var(--muted)}\n.d-rg-card{margin:0 0 12px;padding:10px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);box-shadow:inset 0 1px 0 #fff5;animation:d-scroll-range-fade-out cubic-bezier(.2,.75,.25,1) both;animation-timeline:view();animation-range:cover 55% cover 95%}\n.d-rg-t{margin:0;font-size:13px;color:var(--ink)}\n.d-rg-k{margin:2px 0 0;font-family:var(--font-mono);font-size:11px;color:var(--faint)}\n.d-rg:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@keyframes d-scroll-range-fade-out{from{opacity:1;transform:translateY(0)}to{opacity:.15;transform:translateY(-8px)}}"},{"id":"scroll-snap-sections","cat":"滚动驱动","t":"分屏吸附","en":"snap sections","d":"每段高度正好等于滚动框内高（148px），所以 scroll-snap 一定停在段首，不会停在半段；右侧刻度按同样的 28px 步距排三点，指针用 linear 180ms 平移——刻度是读数，加弹簧反而让人以为还有惯性没走完。记忆点：翻页式的段落，右边有个跟着走的指针。","body":"<div class=\"d-ss\" role=\"group\" aria-label=\"分屏吸附：滚动三段，右侧刻度指示当前段\"><div class=\"d-ss-scroll\" tabindex=\"0\" aria-label=\"三段面板，滚动或按 PageUp / PageDown 换段\"><section class=\"d-ss-panel\"><span class=\"d-ss-no\">01 / 03</span><h3 class=\"d-ss-h\">装版</h3><p class=\"d-ss-p\">铅字按行排进版框，木楔从两侧顶紧</p></section><section class=\"d-ss-panel\"><span class=\"d-ss-no\">02 / 03</span><h3 class=\"d-ss-h\">校色</h3><p class=\"d-ss-p\">先印一张样张，对着色标看深浅</p></section><section class=\"d-ss-panel\"><span class=\"d-ss-no\">03 / 03</span><h3 class=\"d-ss-h\">裁切</h3><p class=\"d-ss-p\">切刀对齐十字线，一刀到底</p></section></div><div class=\"d-ss-rail\" aria-hidden=\"true\"><i class=\"d-ss-tick\"></i><i class=\"d-ss-tick\"></i><i class=\"d-ss-tick\"></i><span class=\"d-ss-mark\"></span></div></div>","css":".d-ss{position:relative;box-sizing:border-box;width:300px;max-width:100%;height:150px;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--bg)}\n.d-ss-scroll{box-sizing:border-box;height:100%;overflow-y:auto;scroll-snap-type:y mandatory;scrollbar-width:none;padding-right:30px}\n.d-ss-scroll::-webkit-scrollbar{width:0;height:0}\n.d-ss-panel{box-sizing:border-box;height:100%;display:flex;flex-direction:column;justify-content:center;gap:2px;padding:0 16px;border-bottom:1px solid var(--line);scroll-snap-align:start;scroll-snap-stop:always}\n.d-ss-panel:last-child{border-bottom:0}\n.d-ss-no{font-family:var(--font-mono);font-size:var(--fs-11);letter-spacing:var(--tracking-mono-label);color:var(--faint)}\n.d-ss-h{margin:0;font-size:var(--fs-21);font-weight:650;line-height:var(--lh-display);letter-spacing:var(--tracking-display);color:var(--ink)}\n.d-ss-p{margin:0;font-size:var(--fs-11);line-height:var(--lh-note);color:var(--muted)}\n.d-ss-rail{--i:0;position:absolute;right:8px;top:50%;width:16px;height:58px;transform:translateY(-50%)}\n.d-ss-tick{position:absolute;right:0;width:7px;height:1px;background:var(--faint)}\n.d-ss-tick:nth-child(1){top:0}\n.d-ss-tick:nth-child(2){top:28px}\n.d-ss-tick:nth-child(3){top:56px}\n.d-ss-mark{position:absolute;right:0;top:0;width:12px;height:2px;background:var(--ink);transform:translateY(calc(var(--i,0) * 28px));transition:transform 180ms linear}\n.d-ss-scroll:focus-visible{outline:1px solid var(--ink);outline-offset:-3px}"},{"id":"scroll-timeline-bar","cat":"滚动驱动","t":"滚动刻度进度","en":"scroll timeline","d":"已有 progress-scroll 也是 CSS 驱动的细线，只回答「到哪了」；这条把 0–100% 切成 6 档并画上刻度，读数靠对齐刻度而不是估长度——它是仪表，那条是书签。用 steps(6) 而不是 linear，因为刻度本来就是一格一格，连续增长的条和下面的 6 个刻线对不上。","body":"<div class=\"d-st\" tabindex=\"0\" aria-label=\"滚动刻度进度：滚动框内内容看刻度前进\"><div class=\"d-st-head\"><div class=\"d-st-bar\"><span class=\"d-st-fill\"></span></div><div class=\"d-st-scale\"><i class=\"d-st-tick\"></i><i class=\"d-st-tick\"></i><i class=\"d-st-tick\"></i><i class=\"d-st-tick\"></i><i class=\"d-st-tick\"></i><i class=\"d-st-tick\"></i></div></div><div class=\"d-st-body\"><p class=\"d-st-h\">01 装版</p><p class=\"d-st-p\">铅字按行排进版框，木楔从两侧顶紧。</p><p class=\"d-st-h\">02 校色</p><p class=\"d-st-p\">先印一张样张，对着色标看三块油墨的深浅。</p><p class=\"d-st-h\">03 裁切</p><p class=\"d-st-p\">切刀对齐十字线，一刀到底，纸边不起毛。</p><p class=\"d-st-h\">04 入档</p><p class=\"d-st-p\">成品按印次编号，签样一起装进牛皮纸袋。</p></div></div>","css":".d-st{box-sizing:border-box;width:300px;max-width:100%;height:150px;overflow-x:hidden;overflow-y:auto;border:1px solid var(--line);border-radius:10px;background:var(--bg)}\n.d-st-head{position:sticky;top:0;z-index:1;padding:8px 12px 6px;background:var(--bg);border-bottom:1px solid var(--line)}\n.d-st-bar{height:6px;border:1px solid var(--line);border-radius:2px;background:var(--paper)}\n.d-st-fill{display:block;height:100%;border-radius:2px;background:var(--ink);transform-origin:0 50%;transform:scaleX(0);animation:d-scroll-timeline-bar-grow steps(6) both;animation-timeline:scroll(nearest)}\n.d-st-scale{display:flex;justify-content:space-between;margin-top:4px}\n.d-st-tick{display:block;width:1px;height:4px;background:var(--faint)}\n.d-st-body{padding:0 12px 16px}\n.d-st-h{margin:12px 0 2px;font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;color:var(--muted)}\n.d-st-p{margin:0;font-size:11px;line-height:1.6;color:var(--faint)}\n.d-st:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@keyframes d-scroll-timeline-bar-grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}"},{"id":"scroll-velocity-skew","cat":"滚动驱动","t":"速度倾斜","en":"velocity skew","d":"倾斜 6° 封顶：再大文字基线就开始像被压扁，人先感到晃而不是快。速度按「一帧走了多少像素」算，不是按 wheel 一次跳多少——wheel 一跳 100px 不代表真速度，除以帧间隔才是；每帧靠近目标 45%，所以停下后 120ms 内自然回正。","body":"<div class=\"d-vel\" tabindex=\"0\" aria-label=\"速度倾斜：滚动越快字行越斜，停下回正\"><div class=\"d-vel-body\"><p class=\"d-vel-h\">速度倾斜</p><p class=\"d-vel-p\">滚得越快，这一叠字行越斜。</p><p class=\"d-vel-p\">停手之后它会自己回正，不用等。</p><p class=\"d-vel-p\">慢滚时几乎看不出，快滚时最明显。</p><p class=\"d-vel-p\">只斜 Y 轴，横向不歪，读起来还是正的。</p><p class=\"d-vel-p\">封顶 6°，再大就不是速度而是晃动了。</p><p class=\"d-vel-p\">滚到底部可以再往上滚，看它反向。</p></div></div>","css":".d-vel{box-sizing:border-box;width:300px;max-width:100%;height:150px;overflow-x:hidden;overflow-y:auto;border:1px solid var(--line);border-radius:10px;background:var(--bg)}\n.d-vel-body{padding:12px;transform-origin:50% 0;transition:transform 120ms linear;will-change:transform}\n.d-vel-h{margin:0 0 4px;font-size:15px;color:var(--ink)}\n.d-vel-p{margin:0 0 8px;font-size:11px;line-height:1.6;color:var(--muted)}\n.d-vel-p:last-child{margin-bottom:0}\n.d-vel:focus-visible{outline:1px solid var(--ink);outline-offset:2px}"},{"id":"scroll-view-reveal","cat":"滚动驱动","t":"视口进入揭示","en":"view timeline","d":"用 view() 而不是 IntersectionObserver：揭示进度交给滚动位置，滚到一半停下卡片就停在半透明，往上滚还会退回去——JS 一次性加 class 只会「已经出现过了」一格，回滚无法复原。区间取 entry 10% 到 cover 45%，这样卡片露出三分之一时才真正看清。","body":"<div class=\"d-vr\" tabindex=\"0\" aria-label=\"视口进入揭示：在框内滚动，卡片逐张显形\"><div class=\"d-vr-body\"><div class=\"d-vr-card\"><p class=\"d-vr-t\">装版</p><p class=\"d-vr-p\">木楔顶紧，铅字不再走位。</p></div><div class=\"d-vr-card\"><p class=\"d-vr-t\">校色</p><p class=\"d-vr-p\">样张对色标，三块墨一处不看就偏。</p></div><div class=\"d-vr-card\"><p class=\"d-vr-t\">裁切</p><p class=\"d-vr-p\">刀口对齐十字线，一刀到底。</p></div><div class=\"d-vr-card\"><p class=\"d-vr-t\">入档</p><p class=\"d-vr-p\">签样跟着成品一起装袋。</p></div></div></div>","css":".d-vr{box-sizing:border-box;width:300px;max-width:100%;height:150px;overflow-x:hidden;overflow-y:auto;border:1px solid var(--line);border-radius:10px;background:var(--bg)}\n.d-vr-body{display:flex;flex-direction:column;gap:12px;padding:12px}\n.d-vr-card{padding:10px 12px;border:1px solid var(--line);border-radius:6px;background:var(--paper);box-shadow:inset 0 1px 0 #fff5;animation:d-scroll-view-reveal-in cubic-bezier(.2,.75,.25,1) both;animation-timeline:view();animation-range:entry 10% cover 45%}\n.d-vr-t{margin:0;font-size:15px;color:var(--ink)}\n.d-vr-p{margin:2px 0 0;font-size:11px;line-height:1.6;color:var(--muted)}\n.d-vr:focus-visible{outline:1px solid var(--ink);outline-offset:2px}\n@keyframes d-scroll-view-reveal-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}"}]);
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
  "annotation-band": root => {
  const svg = root.querySelector('.d-ab-svg');
  if (!svg) return;
  const W = 320, H = 180, L = 26, R = 10, T = 16, B = 28;
  const plotW = W - L - R, plotH = H - T - B;
  const pts = [34, 41, 39, 46, 44, 51, 49, 56, 54, 60, 58, 63, 61, 66];
  const max = 80;
  const x = i => L + i * plotW / (pts.length - 1);
  const y = v => T + plotH * (1 - v / max);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    svg.appendChild(mk('line', { class: 'd-ab-axis', x1: L, y1: T + plotH * g / 4, x2: W - R, y2: T + plotH * g / 4 }));
    const t = mk('text', { class: 'd-ab-label', x: 0, y: T + plotH * g / 4 + 2.5 });
    t.textContent = String(max - g * 20); svg.appendChild(t);
  }
  svg.appendChild(mk('rect', { class: 'd-ab-band', x: L, y: y(58).toFixed(1), width: plotW, height: (y(48) - y(58)).toFixed(1) }));
  const d = pts.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');
  svg.appendChild(mk('path', { class: 'd-ab-line', d: d }));
  [[3, '改版上线'], [9, '换了供应商']].forEach(m => {
    svg.appendChild(mk('line', { class: 'd-ab-mark', x1: x(m[0]).toFixed(1), y1: T, x2: x(m[0]).toFixed(1), y2: H - B }));
    const t = mk('text', { class: 'd-ab-tag', x: x(m[0]) + 4, y: T + 8 });
    t.textContent = m[1];
    svg.appendChild(t);
  });
},
  "area-stack": root => {
  const svg = root.querySelector('.d-as-svg');
  if (!svg) return;
  const series = [
    [18, 22, 20, 26, 24, 30, 28, 34],
    [10, 12, 16, 14, 18, 19, 22, 24],
    [6, 8, 7, 11, 10, 13, 12, 15]
  ];
  const W = 320, H = 170, L = 26, R = 8, T = 16, B = 26;
  const n = series[0].length;
  const max = 80;
  const x = i => L + i * (W - L - R) / (n - 1);
  const y = v => T + (H - T - B) * (1 - v / max);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    const gy = T + (H - T - B) * g / 4;
    svg.appendChild(mk('line', { class: 'd-as-axis', x1: L, y1: gy, x2: W - R, y2: gy }));
    const t = mk('text', { class: 'd-as-label', x: 0, y: gy + 2.5 });
    t.textContent = String(max - g * (max / 4));
    svg.appendChild(t);
  }
  const base = new Array(n).fill(0);
  series.forEach((s, si) => {
    const top = base.map((b, i) => b + s[i]);
    const up = top.map((v, i) => x(i).toFixed(1) + ' ' + y(v).toFixed(1));
    const down = base.map((v, i) => x(i).toFixed(1) + ' ' + y(v).toFixed(1)).reverse();
    const d = 'M' + up.join(' L') + ' L' + down.join(' L') + ' Z';
    svg.appendChild(mk('path', { class: 'd-as-s' + (si + 1), d: d }));
    for (let i = 0; i < n; i++) base[i] = top[i];
  });
  ['1月','3月','5月','7月'].forEach((m, k) => { const i = k * 2; const t = mk('text', { class: 'd-as-label', x: x(i), y: H - 8, 'text-anchor': 'middle' }); t.textContent = m; svg.appendChild(t); });
},
  "bar-grouped": root => {
  const svg = root.querySelector('.d-bg2-svg');
  if (!svg) return;
  const groups = [['一季度', 42, 31], ['二季度', 58, 47], ['三季度', 51, 39], ['四季度', 72, 55]];
  const W = 320, H = 170, L = 26, R = 10, T = 14, B = 26;
  const max = 80;
  const plotW = W - L - R, plotH = H - T - B;
  const gw = plotW / groups.length;
  const bw = 16, gap = 4;
  const y = v => T + plotH * (1 - v / max);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    const gy = T + plotH * g / 4;
    svg.appendChild(mk('line', { class: 'd-bg2-axis', x1: L, y1: gy, x2: W - R, y2: gy }));
    const t = mk('text', { class: 'd-bg2-label', x: 0, y: gy + 2.5 });
    t.textContent = String(max - g * 20);
    svg.appendChild(t);
  }
  groups.forEach((gr, i) => {
    const g = mk('g', { class: 'd-bg2-g' });
    const cx = L + gw * i + gw / 2;
    const x0 = cx - (bw * 2 + gap) / 2;
    g.appendChild(mk('rect', { class: 'd-bg2-a', x: x0, y: y(gr[1]), width: bw, height: y(0) - y(gr[1]) }));
    g.appendChild(mk('rect', { class: 'd-bg2-b', x: x0 + bw + gap, y: y(gr[2]), width: bw, height: y(0) - y(gr[2]) }));
    const t = mk('text', { class: 'd-bg2-label', x: cx, y: H - 8, 'text-anchor': 'middle' });
    t.textContent = gr[0];
    g.appendChild(t);
    svg.appendChild(g);
  });
},
  "chart-empty-states": root => {
  const body = root.querySelector('[data-body]');
  const tabs = [...root.querySelectorAll('[data-s]')];
  if (!body || !tabs.length) return;
  const line = (cls, text) => { const el = document.createElement('p'); el.className = cls; el.textContent = text; return el; };
  const box = (title, note, retry) => {
    const wrap = document.createElement('div');
    wrap.appendChild(line('d-ce-t', title));
    wrap.appendChild(line('d-ce-p', note));
    if (retry) { const b = document.createElement('button'); b.type = 'button'; b.className = 'd-ce-btn'; b.textContent = '重试'; wrap.appendChild(b); }
    return wrap;
  };
  const render = k => {
    body.textContent = '';
    if (k === 'loading') {
      const sk = document.createElement('div');
      sk.className = 'd-ce-sk';
      [38, 64, 47, 82, 56, 71].forEach(h => { const i = document.createElement('i'); i.style.height = h + '%'; sk.appendChild(i); });
      body.appendChild(sk);
    } else if (k === 'error') {
      body.appendChild(box('取数没成功', '接口 8 秒没回应，已停止等待。', true));
    } else {
      body.appendChild(box('这段时间没有记录', '换个时间范围，或者等明天第一批数据进来。', false));
    }
    tabs.forEach(t => t.setAttribute('aria-selected', t.dataset.s === k ? 'true' : 'false'));
  };
  tabs.forEach(t => { t.onclick = () => render(t.dataset.s); });
  render('empty');
},
  "chart-small-multiples": root => {
  const NS = 'http://www.w3.org/2000/svg';
  const groups = [...root.querySelectorAll('.d-sm3 svg')];
  const all = groups.map(g => (g.dataset.v || '').split(',').map(Number));
  const flat = all.flat();
  const min = Math.min.apply(null, flat), max = Math.max.apply(null, flat);
  const span = max - min || 1;
  groups.forEach((svg, gi) => {
    const vals = all[gi];
    svg.setAttribute('viewBox', '0 0 100 34');
    svg.setAttribute('preserveAspectRatio', 'none');
    const d = vals.map((v, i) => (i ? 'L' : 'M') + (i * 100 / (vals.length - 1)).toFixed(1) + ' ' + (31 - (v - min) / span * 27).toFixed(1)).join(' ');
    const p = document.createElementNS(NS, 'path');
    p.setAttribute('class', 'd-sm3-line');
    p.setAttribute('d', d);
    svg.appendChild(p);
  });
},
  "donut-progress": root => {
  const fg = root.querySelector('.d-dp2-fg');
  if (!fg) return;
  const pct = 68, r = 46, C = 2 * Math.PI * r;
  const set = () => { fg.setAttribute('stroke-dasharray', (C * pct / 100).toFixed(1) + ' ' + C.toFixed(1)); };
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { set(); return; }
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { set(); io.disconnect(); } }), { threshold: .4 });
  io.observe(root.querySelector('.d-dp2-svg') || fg);
},
  "heatmap-calendar": root => {
  const svg = root.querySelector('.d-hc-svg');
  if (!svg) return;
  const weeks = 20, days = 7, cell = 14, gap = 2;
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  const shades = ['color-mix(in srgb,var(--ink) 6%,var(--paper))', 'color-mix(in srgb,var(--ink) 18%,var(--paper))', 'color-mix(in srgb,var(--ink) 34%,var(--paper))', 'color-mix(in srgb,var(--ink) 58%,var(--paper))', 'var(--ink)'];
  let seed = 11;
  const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  const days7 = ['一', '三', '五', '日'];
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      const r = rnd();
      const v = d === 5 || d === 6 ? (r > .55 ? 1 : 0) : r > .82 ? 4 : r > .62 ? 3 : r > .38 ? 2 : r > .16 ? 1 : 0;
      const rect = mk('rect', { class: 'd-hc-cell', x: 22 + w * (cell + gap), y: 6 + d * (cell + gap), width: cell, height: cell, rx: 2, fill: shades[v] });
      svg.appendChild(rect);
    }
  }
  days7.forEach((label, k) => {
    const t = mk('text', { class: 'd-hc-t', x: 16, y: 6 + k * 4 * (cell + gap) + cell - 3, 'text-anchor': 'end', fill: 'var(--faint)', 'font-size': '7', 'font-family': 'var(--font-mono)' });
    t.textContent = label;
    svg.appendChild(t);
  });
},
  "histogram": root => {
  const svg = root.querySelector('.d-hg-svg');
  if (!svg) return;
  const bins = [2, 5, 9, 16, 24, 31, 27, 19, 12, 7, 5, 2, 1, 0];
  const W = 320, H = 170, L = 26, R = 10, T = 14, B = 26;
  const plotW = W - L - R, plotH = H - T - B;
  const max = 32, bw = plotW / bins.length;
  const y = v => T + plotH * (1 - v / max);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    const gy = T + plotH * g / 4;
    svg.appendChild(mk('line', { class: 'd-hg-axis', x1: L, y1: gy, x2: W - R, y2: gy }));
    const t = mk('text', { class: 'd-hg-label', x: 0, y: gy + 2.5 });
    t.textContent = String(max - g * 8);
    svg.appendChild(t);
  }
  const peak = bins.indexOf(Math.max.apply(null, bins));
  bins.forEach((v, i) => {
    if (!v) return;
    svg.appendChild(mk('rect', { class: 'd-hg-bar' + (i === peak ? ' hi' : ''), x: (L + i * bw).toFixed(1), y: y(v).toFixed(1), width: Math.ceil(bw) + 0.5, height: (y(0) - y(v)).toFixed(1) }));
  });
  const mean = 5.4;
  const mx = L + plotW * mean / bins.length;
  svg.appendChild(mk('line', { class: 'd-hg-mean', x1: mx, y1: T, x2: mx, y2: H - B }));
  ['−2', '0', '+2', '+4', '+6'].forEach((lab, k) => { const t = mk('text', { class: 'd-hg-label', x: L + plotW * (k * 3.5) / bins.length, y: H - 8 }); t.textContent = lab; svg.appendChild(t); });
},
  "legend-toggle": root => {
  const svg = root.querySelector('.d-lt2-svg');
  const btns = [...root.querySelectorAll('[data-k]')];
  if (!svg || !btns.length) return;
  const series = [[30, 38, 35, 48, 44, 57, 62], [12, 15, 14, 19, 22, 21, 26], [4, 5, 7, 6, 9, 11, 13]];
  const W = 320, H = 170, L = 26, R = 8, T = 14, B = 26;
  const n = series[0].length, max = 70;
  const x = i => L + i * (W - L - R) / (n - 1);
  const y = v => T + (H - T - B) * (1 - v / max);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 3; g++) svg.appendChild(mk('line', { class: 'd-lt2-axis', x1: L, y1: T + (H - T - B) * g / 3, x2: W - R, y2: T + (H - T - B) * g / 3 }));
  const paths = series.map((s, si) => {
    const d = s.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');
    const p = mk('path', { class: 'd-lt2-line d-lt2-s' + si, d: d });
    svg.appendChild(p);
    return p;
  });
  btns.forEach(b => {
    b.onclick = () => {
      const on = b.getAttribute('aria-pressed') === 'true';
      b.setAttribute('aria-pressed', on ? 'false' : 'true');
      paths[Number(b.dataset.k)].classList.toggle('d-lt2-off', on);
    };
  });
},
  "line-chart": root => {
  const svg = root.querySelector('.d-lc-svg');
  if (!svg) return;
  const data = [32, 41, 38, 52, 47, 61, 58, 72, 68, 79, 88, 96];
  const months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  const W = 320, H = 170, L = 26, R = 8, T = 18, B = 26;
  const max = 100, min = 0;
  const x = i => L + i * (W - L - R) / (data.length - 1);
  const y = v => T + (H - T - B) * (1 - (v - min) / (max - min));
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    const gy = T + (H - T - B) * g / 4;
    svg.appendChild(mk('line', { class: 'd-lc-axis', x1: L, y1: gy, x2: W - R, y2: gy }));
    const t = mk('text', { class: 'd-lc-label', x: 0, y: gy + 2.5 });
    t.textContent = String(100 - g * 25);
    svg.appendChild(t);
  }
  const d = data.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');
  svg.appendChild(mk('path', { class: 'd-lc-line', d: d }));
  months.forEach((m, i) => { if (i % 3 !== 0) return; const t = mk('text', { class: 'd-lc-label', x: x(i), y: H - 8, 'text-anchor': 'middle' }); t.textContent = m; svg.appendChild(t); });
  const cross = mk('line', { class: 'd-lc-cross', x1: 0, y1: T, x2: 0, y2: H - B });
  svg.appendChild(cross);
  const dots = data.map((v, i) => { const c = mk('circle', { class: 'd-lc-dot', cx: x(i), cy: y(v), r: 3.5 }); svg.appendChild(c); return c; });
  const val = mk('text', { class: 'd-lc-val', x: 0, y: 0 });
  svg.appendChild(val);
  const move = e => {
    const box = svg.getBoundingClientRect();
    const px = (e.clientX - box.left) / box.width * W;
    let idx = Math.round((px - L) / ((W - L - R) / (data.length - 1)));
    idx = Math.max(0, Math.min(data.length - 1, idx));
    dots.forEach((c, i) => c.classList.toggle('on', i === idx));
    cross.classList.add('on');
    cross.setAttribute('x1', x(idx)); cross.setAttribute('x2', x(idx));
    val.textContent = months[idx] + ' · ' + data[idx];
    val.setAttribute('x', Math.min(W - 60, Math.max(L, x(idx) - 22)));
    val.setAttribute('y', Math.max(12, y(data[idx]) - 8));
  };
  svg.addEventListener('pointermove', move);
  svg.addEventListener('pointerleave', () => { dots.forEach(c => c.classList.remove('on')); cross.classList.remove('on'); val.textContent = ''; });
},
  "radar-chart": root => {
  const svg = root.querySelector('.d-rd-svg');
  if (!svg) return;
  const axes = ['稳定', '速度', '成本', '覆盖', '维护'];
  const cur = [.82, .64, .58, .9, .72];
  const prev = [.62, .7, .66, .54, .6];
  const cx = 120, cy = 96, R = 62;
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  const pt = (i, k) => { const a = -Math.PI / 2 + i * 2 * Math.PI / axes.length; return [cx + Math.cos(a) * R * k, cy + Math.sin(a) * R * k]; };
  [1, .66, .33].forEach(k => {
    const d = axes.map((_, i) => { const p = pt(i, k); return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' ') + ' Z';
    svg.appendChild(mk('path', { class: 'd-rd-grid', d: d }));
  });
  axes.forEach((name, i) => {
    const p = pt(i, 1);
    svg.appendChild(mk('line', { class: 'd-rd-spoke', x1: cx, y1: cy, x2: p[0].toFixed(1), y2: p[1].toFixed(1) }));
    const lp = pt(i, 1.16);
    const t = mk('text', { class: 'd-rd-lab', x: lp[0].toFixed(1), y: lp[1].toFixed(1), 'text-anchor': 'middle', 'dominant-baseline': 'middle' });
    t.textContent = name;
    svg.appendChild(t);
  });
  const poly = (vals, cls) => {
    const d = vals.map((v, i) => { const p = pt(i, v); return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' ') + ' Z';
    svg.appendChild(mk('path', { class: cls, d: d }));
  };
  poly(prev, 'd-rd-b');
  poly(cur, 'd-rd-a');
},
  "scatter-plot": root => {
  const svg = root.querySelector('.d-sp2-svg');
  if (!svg) return;
  const W = 320, H = 170, L = 26, R = 10, T = 14, B = 26;
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    const gy = T + (H - T - B) * g / 4;
    svg.appendChild(mk('line', { class: 'd-sp2-axis', x1: L, y1: gy, x2: W - R, y2: gy }));
    const t = mk('text', { class: 'd-sp2-label', x: 0, y: gy + 2.5 });
    t.textContent = String(100 - g * 25);
    svg.appendChild(t);
  }
  let seed = 7;
  const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  for (let i = 0; i < 45; i++) {
    const a = 12 + rnd() * 62;
    const b = a * .6 + (rnd() - .5) * 26 + 8;
    const cx = L + (W - L - R) * a / 100;
    const cy = T + (H - T - B) * (1 - Math.max(2, Math.min(98, b)) / 100);
    svg.appendChild(mk('circle', { class: 'd-sp2-dot', cx: cx.toFixed(1), cy: cy.toFixed(1), r: 2 }));
  }
  const ox = L + (W - L - R) * .86, oy = T + (H - T - B) * .16;
  svg.appendChild(mk('circle', { class: 'd-sp2-out', cx: ox, cy: oy, r: 2.6 }));
  const t = mk('text', { class: 'd-sp2-tag', x: ox - 46, y: oy - 7 });
  t.textContent = '离群 · 单次 12m';
  svg.appendChild(t);
},
  "slope-chart": root => {
  const svg = root.querySelector('.d-sl-svg');
  if (!svg) return;
  const rows = [['响应', 62, 74], ['稳定', 71, 68], ['成本', 44, 58], ['覆盖', 80, 76], ['维护', 55, 61]];
  const W = 320, H = 180, LX = 96, RX = 236;
  const vals = rows.flatMap(r => [r[1], r[2]]);
  const min = Math.min.apply(null, vals) - 6, max = Math.max.apply(null, vals) + 6;
  const y = v => 26 + (H - 52) * (1 - (v - min) / (max - min));
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  svg.appendChild(mk('line', { class: 'd-sl-axis', x1: LX, y1: 20, x2: LX, y2: H - 20, stroke: 'var(--line)' }));
  svg.appendChild(mk('line', { class: 'd-sl-axis', x1: RX, y1: 20, x2: RX, y2: H - 20, stroke: 'var(--line)' }));
  ['去年', '今年'].forEach((t, i) => { const el = mk('text', { class: 'd-sl-label', x: i ? RX : LX, y: 14, 'text-anchor': 'middle' }); el.textContent = t; svg.appendChild(el); });
  rows.forEach(r => {
    const [name, a, b] = r;
    const up = b >= a;
    const cls = up ? 'd-sl-up' : 'd-sl-down';
    svg.appendChild(mk('line', { class: 'd-sl-line ' + cls, x1: LX + 4, y1: y(a).toFixed(1), x2: RX - 4, y2: y(b).toFixed(1) }));
    [[LX, a], [RX, b]].forEach(p => {
      svg.appendChild(mk('circle', { class: 'd-sl-dot ' + cls, cx: p[0], cy: y(p[1]).toFixed(1), r: 3 }));
    });
    const l = mk('text', { class: 'd-sl-name', x: LX - 10, y: y(a) + 3, 'text-anchor': 'end' });
    l.textContent = name; svg.appendChild(l);
    const v = mk('text', { class: 'd-sl-val', x: RX + 8, y: y(b) + 3 });
    v.textContent = String(b); svg.appendChild(v);
  });
},
  "sparkline-grid": root => {
  const NS = 'http://www.w3.org/2000/svg';
  root.querySelectorAll('.d-sg2-s').forEach(svg => {
    const vals = (svg.dataset.v || '').split(',').map(Number).filter(v => !isNaN(v));
    if (!vals.length) return;
    svg.setAttribute('viewBox', '0 0 120 28');
    svg.setAttribute('preserveAspectRatio', 'none');
    const min = Math.min.apply(null, vals), max = Math.max.apply(null, vals);
    const span = max - min || 1;
    const d = vals.map((v, i) => (i ? 'L' : 'M') + (i * 120 / (vals.length - 1)).toFixed(1) + ' ' + (26 - (v - min) / span * 22).toFixed(1)).join(' ');
    const p = document.createElementNS(NS, 'path');
    p.setAttribute('class', 'd-sg2-line');
    p.setAttribute('d', d);
    svg.appendChild(p);
  });
},
  "treemap": root => {
  const svg = root.querySelector('.d-tm-svg');
  if (!svg) return;
  const items = [['搜索', 42], ['直接', 23], ['社交', 15], ['邮件', 9], ['联盟', 6], ['其它', 5]];
  const total = items.reduce((s, x) => s + x[1], 0);
  const W = 320, H = 170;
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  const shades = ['var(--ink)', 'color-mix(in srgb,var(--ink) 78%,var(--paper))', 'color-mix(in srgb,var(--ink) 60%,var(--paper))', 'var(--ink-indigo)', 'color-mix(in srgb,var(--ink) 42%,var(--paper))', 'color-mix(in srgb,var(--ink) 30%,var(--paper))'];
  const rects = [];
  (function split(list, x, y, w, h, vertical) {
    if (!list.length) return;
    if (list.length === 1) { rects.push({ item: list[0], x: x, y: y, w: w, h: h }); return; }
    const sum = list.reduce((s, i) => s + i[1], 0);
    let acc = 0, cut = 1;
    for (let i = 0; i < list.length; i++) { const next = acc + list[i][1]; if (next >= sum / 2) { cut = i + 1; break; } acc = next; }
    const a = list.slice(0, cut), b = list.slice(cut);
    const sa = a.reduce((s, i) => s + i[1], 0);
    const frac = sa / sum;
    if (vertical) { split(a, x, y, w * frac, h, false); split(b, x + w * frac, y, w * (1 - frac), h, false); }
    else { split(a, x, y, w, h * frac, true); split(b, x, y + h * frac, w, h * (1 - frac), true); }
  })(items, 0, 0, W, H, true);
  const order = new Map(items.map((it, i) => [it[0], i]));
  rects.forEach(r => {
    const [name, val] = r.item;
    const idx = order.get(name);
    svg.appendChild(mk('rect', { class: 'd-tm-cell', x: r.x.toFixed(1), y: r.y.toFixed(1), width: r.w.toFixed(1), height: r.h.toFixed(1), fill: shades[idx % shades.length] }));
    if (r.w < 52 || r.h < 30) return;
    const t = mk('text', { class: 'd-tm-text', x: r.x + 8, y: r.y + 18 });
    t.textContent = name;
    svg.appendChild(t);
    const v = mk('text', { class: 'd-tm-val', x: r.x + 8, y: r.y + 30 });
    v.textContent = Math.round(val / total * 100) + '%';
    svg.appendChild(v);
  });
},
  "waterfall": root => {
  const svg = root.querySelector('.d-wf-svg');
  if (!svg) return;
  const steps = [['期初', 120, 'total'], ['新增', 38, 'up'], ['流失', -27, 'down'], ['退款', -12, 'down'], ['期末', 119, 'total']];
  const W = 320, H = 170, L = 24, R = 8, T = 16, B = 28;
  const plotW = W - L - R, plotH = H - T - B;
  const max = 160, slot = plotW / steps.length, bw = 26;
  const y = v => T + plotH * (1 - v / max);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs) => { const el = document.createElementNS(NS, tag); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
  for (let g = 0; g <= 4; g++) {
    const gy = T + plotH * g / 4;
    svg.appendChild(mk('line', { class: 'd-wf-axis', x1: L, y1: gy, x2: W - R, y2: gy }));
    const t = mk('text', { class: 'd-wf-label', x: 0, y: gy + 2.5 });
    t.textContent = String(max - g * 40);
    svg.appendChild(t);
  }
  let run = 0, prevTop = null;
  steps.forEach((s, i) => {
    const [name, val, kind] = s;
    const cx = L + slot * i + slot / 2;
    let from, to;
    if (kind === 'total') { from = 0; to = val; run = val; }
    else { from = run; to = run + val; run = to; }
    const y0 = y(from), y1 = y(to);
    const top = Math.min(y0, y1), h = Math.max(2, Math.abs(y1 - y0));
    svg.appendChild(mk('rect', { class: 'd-wf-bar ' + (kind === 'up' ? 'd-wf-up' : kind === 'down' ? 'd-wf-down' : ''), x: (cx - bw / 2).toFixed(1), y: top.toFixed(1), width: bw, height: h.toFixed(1) }));
    if (prevTop !== null) svg.appendChild(mk('line', { class: 'd-wf-link', x1: cx - slot / 2 - bw / 2, y1: prevTop.toFixed(1), x2: cx - bw / 2, y2: prevTop.toFixed(1) }));
    prevTop = kind === 'total' ? y(to) : y(to);
    const t = mk('text', { class: 'd-wf-label', x: cx, y: H - 10, 'text-anchor': 'middle' });
    t.textContent = name;
    svg.appendChild(t);
    const v = mk('text', { class: 'd-wf-val', x: cx, y: top - 4, 'text-anchor': 'middle' });
    v.textContent = kind === 'total' ? String(val) : (val > 0 ? '+' + val : String(val));
    svg.appendChild(v);
  });
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
  "double-tap-zoom": root => {
  var stage = root.querySelector('[data-stage]');
  var inner = root.querySelector('[data-inner]');
  var label = inner && inner.querySelector('em');
  if (!stage || !inner) return;
  var on = false, last = 0;
  stage.addEventListener('pointerup', function (e) {
    var now = Date.now();
    if (now - last > 320) { last = now; return; }
    last = 0;
    var r = stage.getBoundingClientRect();
    var x = e.clientX - r.left, y = e.clientY - r.top;
    on = !on;
    inner.style.transformOrigin = on ? x + 'px ' + y + 'px' : '0 0';
    inner.style.transform = on ? 'scale(2.2)' : 'none';
    if (label) label.textContent = on ? '2.2×' : '1×';
    stage.style.cursor = on ? 'zoom-out' : 'zoom-in';
  });
},
  "drag-handle-resize": root => {
  var wrap = root.querySelector('[data-wrap]');
  var handle = root.querySelector('[data-handle]');
  var bottom = root.querySelector('[data-bottom]');
  var size = root.querySelector('[data-size]');
  if (!handle || !bottom) return;
  var startY = 0, startH = 0, drag = false;
  var apply = function (h) {
    var max = wrap.clientHeight * .7, min = 80;
    h = Math.max(min, Math.min(max, h));
    bottom.style.height = h.toFixed(1) + 'px';
    if (size) size.textContent = '高 ' + Math.round(h) + 'px';
  };
  handle.addEventListener('pointerdown', function (e) { drag = true; startY = e.clientY; startH = bottom.offsetHeight; handle.setPointerCapture(e.pointerId); });
  handle.addEventListener('pointermove', function (e) { if (!drag) return; apply(startH - (e.clientY - startY)); });
  var end = function () { drag = false; };
  handle.addEventListener('pointerup', end);
  handle.addEventListener('pointercancel', end);
},
  "drag-scrub": root => {
  var track = root.querySelector('[data-strip] .d-dsr-track');
  var fill = root.querySelector('[data-fill]');
  var head = root.querySelector('[data-head]');
  var sec = root.querySelector('[data-sec]');
  if (!track || !fill || !head) return;
  var max = 12, dragging = false;
  var paint = function (p) {
    fill.style.width = (p * 100).toFixed(1) + '%';
    head.style.left = (p * 100).toFixed(1) + '%';
    if (sec) sec.textContent = Math.floor(p * max) + 's';
  };
  var fromEvent = function (e) { var r = track.getBoundingClientRect(); return Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)); };
  track.addEventListener('pointerdown', function (e) { dragging = true; paint(fromEvent(e)); track.setPointerCapture(e.pointerId); });
  track.addEventListener('pointermove', function (e) { if (dragging) paint(fromEvent(e)); });
  var end = function () { dragging = false; };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);
  paint(0);
},
  "drag-sheet-snap": root => {
  var sheet = root.querySelector('[data-sheet]');
  var open = root.querySelector('[data-open]');
  var state = root.querySelector('[data-state]');
  if (!sheet || !open) return;
  var H = 150, peaks = [102, 52, 0], idx = 0;
  var startY = 0, startT = 0, base = 102, y = 102, dragging = false;
  var apply = function (v, anim) { y = v; sheet.style.transition = anim ? 'transform 280ms cubic-bezier(.34,1.56,.64,1)' : 'none'; sheet.style.transform = 'translateY(' + v + 'px)'; if (state) state.textContent = v === peaks[0] ? 'peek' : v === peaks[1] ? 'half' : 'full'; };
  var nearest = function (v) { var best = 0; peaks.forEach(function (p, i) { if (Math.abs(p - v) < Math.abs(peaks[best] - v)) best = i; }); return best; };
  sheet.addEventListener('pointerdown', function (e) { dragging = true; startY = e.clientY; startT = Date.now(); base = y; sheet.setPointerCapture(e.pointerId); });
  sheet.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    var d = e.clientY - startY;
    var v = base + d;
    if (v < 0) v = v * .25;
    if (v > peaks[0]) v = peaks[0] + (v - peaks[0]) * .3;
    apply(v, false);
  });
  var end = function () { if (!dragging) return; dragging = false; var v = (y - base) / Math.max(1, Date.now() - startT); var i = nearest(y); if (Math.abs(v) > .5) i = Math.max(0, Math.min(2, i + (v > 0 ? 1 : -1))); idx = i; apply(peaks[idx], true); };
  sheet.addEventListener('pointerup', end);
  sheet.addEventListener('pointercancel', end);
  open.addEventListener('click', function () { idx = Math.min(2, idx + 1); apply(peaks[idx], true); });
  apply(102, false);
},
  "drag-to-close": root => {
  var sheet = root.querySelector('[data-sheet]');
  var scrim = root.querySelector('[data-scrim]');
  var open = root.querySelector('[data-open]');
  if (!sheet || !scrim || !open) return;
  var startY = 0, dy = 0, drag = false, H = 0;
  var setOpen = function (v) { sheet.style.transition = 'transform 280ms cubic-bezier(.34,1.56,.64,1)'; sheet.classList.toggle('on', v); scrim.style.opacity = v ? '.18' : '0'; };
  open.addEventListener('click', function () { setOpen(true); });
  sheet.addEventListener('pointerdown', function (e) { drag = true; startY = e.clientY; dy = 0; H = sheet.offsetHeight; sheet.style.transition = 'none'; sheet.setPointerCapture(e.pointerId); });
  sheet.addEventListener('pointermove', function (e) {
    if (!drag) return;
    dy = Math.max(0, e.clientY - startY);
    sheet.style.transform = 'translateY(' + dy.toFixed(1) + 'px)';
    scrim.style.opacity = String(Math.max(0, .18 * (1 - dy / H)));
  });
  var end = function () {
    if (!drag) return;
    drag = false;
    sheet.style.transition = 'transform 180ms cubic-bezier(.2,.75,.25,1)';
    if (dy > H * .25) { sheet.style.transform = 'translateY(105%)'; sheet.classList.remove('on'); scrim.style.opacity = '0'; }
    else { sheet.style.transform = ''; scrim.style.opacity = '.18'; setTimeout(function () { sheet.style.transition = 'transform 280ms cubic-bezier(.34,1.56,.64,1)'; }, 200); }
  };
  sheet.addEventListener('pointerup', end);
  sheet.addEventListener('pointercancel', end);
},
  "edge-peek": root => {
  var box = root.querySelector('[data-peek]');
  var page = box && box.querySelector('.d-ep-page');
  var edge = box && box.querySelector('[data-edge]');
  if (!box || !page || !edge) return;
  var startX = 0, dx = 0, drag = false, w = 0;
  edge.addEventListener('pointerdown', function (e) { drag = true; startX = e.clientX; dx = 0; w = box.clientWidth; page.style.transition = 'none'; edge.setPointerCapture(e.pointerId); });
  edge.addEventListener('pointermove', function (e) { if (!drag) return; dx = Math.max(0, Math.min(w, e.clientX - startX)); page.style.transform = 'translateX(' + dx.toFixed(1) + 'px)'; });
  var end = function () { if (!drag) return; drag = false; page.style.transition = 'transform 260ms cubic-bezier(.34,1.56,.64,1)'; page.style.transform = dx > w * .4 ? 'translateX(' + w + 'px)' : 'none'; setTimeout(function () { page.style.transition = 'none'; page.style.transform = 'none'; void page.offsetWidth; page.style.transition = 'transform 260ms cubic-bezier(.34,1.56,.64,1)'; }, 300); };
  edge.addEventListener('pointerup', end);
  edge.addEventListener('pointercancel', end);
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
  "flick-velocity": root => {
  var zone = root.querySelector('[data-zone]');
  var chip = root.querySelector('[data-chip]');
  var bar = root.querySelector('[data-bar]');
  var vel = root.querySelector('[data-vel]');
  var log = root.querySelector('[data-log]');
  if (!zone || !chip) return;
  var sy = 0, st = 0, dy = 0, dragging = false;
  var reset = function () { chip.style.transform = 'none'; if (bar) bar.style.width = '0'; };
  zone.addEventListener('pointerdown', function (e) { dragging = true; sy = e.clientY; st = Date.now(); dy = 0; chip.style.transition = 'none'; zone.setPointerCapture(e.pointerId); });
  zone.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    dy = Math.min(0, e.clientY - sy);
    chip.style.transform = 'translateY(' + dy.toFixed(1) + 'px)';
    var v = Math.abs(dy) / Math.max(1, Date.now() - st);
    if (bar) bar.style.width = Math.min(100, v / .6 * 100) + '%';
    if (vel) vel.textContent = v.toFixed(2) + ' px/ms';
  });
  var end = function () {
    if (!dragging) return;
    dragging = false;
    var v = Math.abs(dy) / Math.max(1, Date.now() - st);
    chip.style.transition = 'transform 260ms cubic-bezier(.34,1.56,.64,1)';
    if (v > .6) { if (log) log.textContent = '触发 · ' + v.toFixed(2) + ' px/ms'; chip.style.transform = 'translateY(-120px)'; setTimeout(function () { chip.style.transition = 'none'; reset(); void chip.offsetWidth; chip.style.transition = 'transform 260ms cubic-bezier(.34,1.56,.64,1)'; }, 420); }
    else { if (log) log.textContent = '没到阈值 · 只走了 ' + Math.round(Math.abs(dy)) + 'px'; reset(); }
  };
  zone.addEventListener('pointerup', end);
  zone.addEventListener('pointercancel', end);
},
  "gesture-hint": root => {
  var hand = root.querySelector('[data-hand]');
  var again = root.querySelector('[data-again]');
  if (!hand) return;
  var play = function () { hand.classList.remove('on'); void hand.offsetWidth; hand.classList.add('on'); };
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) play();
  if (again) again.addEventListener('click', play);
  hand.addEventListener('animationend', function () { hand.classList.remove('on'); });
},
  "hold-to-record": root => {
  var btn = root.querySelector('[data-rec]');
  var note = root.querySelector('[data-note]');
  if (!btn) return;
  var t0 = 0, startY = 0, timer = 0, on = false, cancelled = false;
  var fmt = function (ms) { var s = ms / 1000; return s.toFixed(1) + 's'; };
  var stop = function () {
    if (!on) return;
    on = false;
    clearInterval(timer);
    btn.classList.remove('on', 'cancel');
    btn.lastChild.textContent = '按住说话';
    var ms = performance.now() - t0;
    if (note) note.textContent = cancelled ? '已取消' : '录了 ' + fmt(ms);
  };
  btn.addEventListener('pointerdown', function (e) {
    e.preventDefault();
    on = true; cancelled = false; t0 = performance.now(); startY = e.clientY;
    btn.classList.add('on');
    btn.lastChild.textContent = '松手结束';
    btn.setPointerCapture(e.pointerId);
    timer = setInterval(function () { if (note) note.textContent = fmt(performance.now() - t0) + ' · 上滑取消'; }, 100);
  });
  btn.addEventListener('pointermove', function (e) {
    if (!on) return;
    var up = startY - e.clientY;
    cancelled = up > 60;
    btn.classList.toggle('cancel', cancelled);
    if (note) note.textContent = cancelled ? '松手取消' : fmt(performance.now() - t0) + ' · 上滑取消';
  });
  btn.addEventListener('pointerup', stop);
  btn.addEventListener('pointercancel', stop);
},
  "long-press-copy": root => {
  var zone = root.querySelector('[data-zone]');
  var text = root.querySelector('[data-text]');
  var menu = root.querySelector('[data-menu]');
  if (!zone || !text || !menu) return;
  var timer = 0;
  var hide = function () { menu.hidden = true; };
  var open = function (x, y) {
    menu.hidden = false;
    var r = zone.getBoundingClientRect();
    var mw = menu.offsetWidth, mh = menu.offsetHeight;
    var left = Math.max(6, Math.min(r.width - mw - 6, x - r.left - mw / 2));
    var top = y - r.top - mh - 8;
    if (top < 4) top = y - r.top + 18;
    menu.style.left = left.toFixed(0) + 'px';
    menu.style.top = top.toFixed(0) + 'px';
  };
  var start = function (e) { timer = setTimeout(function () { open(e.clientX, e.clientY); }, 480); };
  var cancel = function () { clearTimeout(timer); };
  text.addEventListener('pointerdown', start);
  text.addEventListener('pointerup', cancel);
  text.addEventListener('pointermove', cancel);
  text.addEventListener('pointercancel', cancel);
  var copy = menu.querySelector('[data-copy]');
  if (copy) copy.addEventListener('click', function () { var old = copy.textContent; copy.textContent = '已复制'; setTimeout(function () { copy.textContent = old; hide(); }, 700); });
  var cancelBtn = menu.querySelector('[data-cancel]');
  if (cancelBtn) cancelBtn.addEventListener('click', hide);
  zone.addEventListener('click', function (e) { if (menu.hidden) return; if (!menu.contains(e.target)) hide(); });
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
  "momentum-gallery": root => {
  var box = root.querySelector('[data-gallery]');
  var track = root.querySelector('[data-track]');
  if (!box || !track) return;
  var x = 0, v = 0, startX = 0, lastX = 0, lastT = 0, drag = false, raf = 0;
  var minX = function () { return Math.min(0, box.clientWidth - track.scrollWidth - 12); };
  var apply = function () { track.style.transform = 'translate3d(' + x.toFixed(1) + 'px,0,0)'; };
  var snap = function () {
    var card = track.querySelector('.d-mg-card');
    if (!card) return;
    var w = card.offsetWidth + 8;
    var i = Math.round(-x / w);
    var target = Math.max(minX(), Math.min(0, -i * w));
    x = target; apply();
  };
  var tick = function () {
    if (drag) return;
    x += v; v *= .94;
    if (x > 0) { x = 0; v = 0; }
    if (x < minX()) { x = minX(); v = 0; }
    apply();
    if (Math.abs(v) > .3) raf = requestAnimationFrame(tick);
    else { snap(); v = 0; }
  };
  track.addEventListener('pointerdown', function (e) { drag = true; startX = e.clientX; lastX = e.clientX; lastT = Date.now(); v = 0; cancelAnimationFrame(raf); track.setPointerCapture(e.pointerId); });
  track.addEventListener('pointermove', function (e) {
    if (!drag) return;
    var now = Date.now();
    x += e.clientX - lastX;
    v = (e.clientX - lastX) / Math.max(1, now - lastT) * 16;
    lastX = e.clientX; lastT = now;
    if (x > 0) x *= .35;
    if (x < minX()) x = minX() + (x - minX()) * .35;
    apply();
  });
  var end = function () { if (!drag) return; drag = false; raf = requestAnimationFrame(tick); };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);
  apply();
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
  "pinch-map": root => {
  const box = root.querySelector('[data-map]');
  const layer = root.querySelector('[data-layer]');
  const label = layer && layer.querySelector('[data-scale]');
  if (!box || !layer) return;
  let scale = 1, x = 0, y = 0;
  const pts = new Map();
  let pinch = null, pan = null;
  const clamp = () => {
    const minX = box.clientWidth * (1 - scale), minY = box.clientHeight * (1 - scale);
    x = Math.max(minX, Math.min(0, x));
    y = Math.max(minY, Math.min(0, y));
    layer.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) scale(' + scale.toFixed(3) + ')';
    if (label) label.textContent = scale.toFixed(1) + '×';
  };
  const zoomAt = (cx, cy, factor) => {
    const next = Math.max(1, Math.min(3, scale * factor));
    const k = next / scale;
    x = cx - (cx - x) * k;
    y = cy - (cy - y) * k;
    scale = next;
  };
  const span = () => {
    const v = [...pts.values()];
    return { d: Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y), cx: (v[0].x + v[1].x) / 2, cy: (v[0].y + v[1].y) / 2 };
  };
  box.addEventListener('pointerdown', e => {
    box.setPointerCapture(e.pointerId);
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 2) {
      const s = span(), r = box.getBoundingClientRect();
      pinch = { d: s.d, cx: s.cx - r.left, cy: s.cy - r.top };
    } else if (pts.size === 1) {
      pan = { x: e.clientX, y: e.clientY, px: x, py: y };
    }
  });
  box.addEventListener('pointermove', e => {
    if (!pts.has(e.pointerId)) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 2 && pinch) {
      const s = span(), r = box.getBoundingClientRect();
      const factor = s.d / Math.max(1, pinch.d);
      zoomAt(s.cx - r.left, s.cy - r.top, factor);
      x += (s.cx - r.left) - pinch.cx;
      y += (s.cy - r.top) - pinch.cy;
      pinch = { d: s.d, cx: s.cx - r.left, cy: s.cy - r.top };
      clamp();
    } else if (pan && scale > 1) {
      x = pan.px + (e.clientX - pan.x);
      y = pan.py + (e.clientY - pan.y);
      clamp();
    }
  });
  const release = e => {
    pts.delete(e.pointerId);
    if (pts.size < 2) pinch = null;
    if (pts.size === 0) pan = null;
    else if (pts.size === 1) { const p = [...pts.values()][0]; pan = { x: p.x, y: p.y, px: x, py: y }; }
  };
  box.addEventListener('pointerup', release);
  box.addEventListener('pointercancel', release);
  box.addEventListener('wheel', e => {
    if (!e.ctrlKey) return;
    e.preventDefault();
    const r = box.getBoundingClientRect();
    zoomAt(e.clientX - r.left, e.clientY - r.top, e.deltaY < 0 ? 1.15 : 0.87);
    clamp();
  }, { passive: false });
  box.addEventListener('dblclick', e => {
    const r = box.getBoundingClientRect();
    if (scale > 1.5) { scale = 1; x = 0; y = 0; clamp(); }
    else { zoomAt(e.clientX - r.left, e.clientY - r.top, 2); clamp(); }
  });
  clamp();
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
  "press-hold-fill": root => {
  var btn = root.querySelector('[data-hold]');
  var ring = btn && btn.querySelector('.d-ph-fill');
  var note = root.querySelector('[data-note]');
  if (!btn || !ring) return;
  var C = 2 * Math.PI * 28, raf = 0, t0 = 0, done = false;
  var stop = function () { cancelAnimationFrame(raf); ring.style.strokeDasharray = '0 ' + C; };
  var tick = function () {
    var p = Math.min(1, (performance.now() - t0) / 900);
    ring.style.strokeDasharray = (C * p).toFixed(1) + ' ' + C;
    if (p >= 1) { done = true; if (note) note.textContent = '已清空 · 再按住可撤销'; btn.querySelector('span').textContent = '已清空'; return; }
    raf = requestAnimationFrame(tick);
  };
  btn.addEventListener('pointerdown', function (e) { e.preventDefault(); if (done) return; t0 = performance.now(); if (note) note.textContent = '继续按住…'; btn.setPointerCapture(e.pointerId); cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); });
  btn.addEventListener('pointerup', function () { if (done) { done = false; btn.querySelector('span').textContent = '按住 0.9 秒清空'; if (note) note.textContent = '松手即取消'; } stop(); });
  btn.addEventListener('pointercancel', stop);
},
  "rotary-dial": root => {
  var box = root.querySelector('[data-dial]');
  var knob = root.querySelector('[data-knob]');
  var needle = root.querySelector('[data-needle]');
  var val = root.querySelector('[data-val]');
  if (!box || !knob || !needle) return;
  var steps = 12, step = 30, idx = 6, dragging = false, lastAngle = 0;
  var render = function () { needle.style.transform = 'rotate(' + (idx * step - 90) + 'deg)'; if (val) val.textContent = String(idx); };
  var angleOf = function (e) { var r = knob.getBoundingClientRect(); var cx = r.left + r.width / 2, cy = r.top + r.height / 2; return Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI; };
  box.addEventListener('pointerdown', function (e) { dragging = true; lastAngle = angleOf(e); box.setPointerCapture(e.pointerId); box.style.cursor = 'grabbing'; });
  box.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    var a = angleOf(e), d = a - lastAngle;
    if (d > 180) d -= 360; if (d < -180) d += 360;
    lastAngle = a;
    idx = Math.max(0, Math.min(steps, idx + d / step));
    var snapped = Math.round(idx);
    needle.style.transform = 'rotate(' + (idx * step - 90).toFixed(1) + 'deg)';
    if (val) val.textContent = String(snapped);
  });
  var end = function () { if (!dragging) return; dragging = false; idx = Math.round(idx); box.style.cursor = 'grab'; render(); };
  box.addEventListener('pointerup', end);
  box.addEventListener('pointercancel', end);
  render();
},
  "shake-undo": root => {
  var toast = root.querySelector('[data-toast]');
  var btn = root.querySelector('[data-shake]');
  var undo = root.querySelector('[data-undo]');
  var note = root.querySelector('[data-note]');
  if (!toast || !btn) return;
  var last = 0, lastDir = 0, armed = false, timer = 0;
  var fire = function () {
    if (armed) return;
    armed = true;
    toast.classList.add('on');
    if (undo) undo.hidden = false;
    if (note) note.textContent = '抖了一下 · 5 秒内可撤销';
    clearTimeout(timer);
    timer = setTimeout(function () { armed = false; toast.classList.remove('on'); if (undo) undo.hidden = true; if (note) note.textContent = '摇晃手机，或点上面的按钮'; }, 5000);
  };
  btn.addEventListener('click', fire);
  if (undo) undo.addEventListener('click', function () { armed = false; clearTimeout(timer); toast.classList.remove('on'); undo.hidden = true; if (note) note.textContent = '已撤销'; });
  var onMotion = function (e) {
    var a = e.accelerationIncludingGravity || e.acceleration;
    if (!a) return;
    var m = Math.abs(a.x || 0) + Math.abs(a.y || 0) + Math.abs(a.z || 0);
    if (m < 28) return;
    var now = Date.now();
    var dir = (a.x || 0) > 0 ? 1 : -1;
    if (now - last < 180 && dir !== lastDir) fire();
    last = now; lastDir = dir;
  };
  if (window.DeviceMotionEvent) addEventListener('devicemotion', onMotion);
},
  "swipe-actions-row": root => {
  var row = root.querySelector('[data-row]');
  var face = root.querySelector('[data-face]');
  if (!row || !face) return;
  var W = 136, startX = 0, dx = 0, drag = false, open = false;
  var set = function (v, anim) { face.style.transition = anim ? 'transform 240ms cubic-bezier(.34,1.56,.64,1)' : 'none'; face.style.transform = 'translateX(' + v + 'px)'; };
  face.addEventListener('pointerdown', function (e) { drag = true; startX = e.clientX; dx = 0; open = face.style.transform === 'translateX(' + (-W) + 'px)'; face.setPointerCapture(e.pointerId); });
  face.addEventListener('pointermove', function (e) {
    if (!drag) return;
    dx = e.clientX - startX;
    var base = open ? -W : 0;
    var v = Math.max(-W, Math.min(0, base + dx));
    set(v, false);
  });
  var end = function () { if (!drag) return; drag = false; var base = open ? -W : 0; var cur = Math.max(-W, Math.min(0, base + dx)); set(cur < -W * .6 ? -W : 0, true); open = cur < -W * .6; };
  face.addEventListener('pointerup', end);
  face.addEventListener('pointercancel', end);
},
  "swipe-tab-pager": root => {
  var box = root.querySelector('[data-pager]');
  var view = box && box.querySelector('.d-sp3-view');
  var track = box && box.querySelector('[data-track]');
  var dots = box ? [].slice.call(box.querySelectorAll('.d-sp3-dots i')) : [];
  if (!view || !track) return;
  var idx = 0, startX = 0, startY = 0, dx = 0, dragging = false, w = 0;
  var set = function (i, anim) { idx = Math.max(0, Math.min(2, i)); track.style.transition = anim ? 'transform 260ms cubic-bezier(.34,1.56,.64,1)' : 'none'; track.style.transform = 'translateX(' + (-idx * 100 / 3) + '%)'; dots.forEach(function (d, k) { d.classList.toggle('d-sp3-on', k === idx); }); };
  view.addEventListener('pointerdown', function (e) { dragging = true; startX = e.clientX; startY = e.clientY; dx = 0; w = view.clientWidth; track.style.transition = 'none'; view.setPointerCapture(e.pointerId); });
  view.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    dx = e.clientX - startX;
    var dy = e.clientY - startY;
    if (Math.abs(dy) > Math.abs(dx) + 6) return;
    track.style.transform = 'translateX(calc(' + (-idx * 100 / 3) + '% + ' + dx.toFixed(1) + 'px))';
  });
  var end = function () { if (!dragging) return; dragging = false; set(Math.abs(dx) > w / 3 ? idx + (dx < 0 ? 1 : -1) : idx, true); };
  view.addEventListener('pointerup', end);
  view.addEventListener('pointercancel', end);
  set(0, false);
},
  "swipe-to-dismiss": root => {
  var card = root.querySelector('[data-card]');
  var note = root.querySelector('.d-sd-note');
  if (!card || !note) return;
  var startX = 0, startT = 0, dx = 0, dragging = false;
  var reset = function () { card.style.transition = 'transform 220ms cubic-bezier(.34,1.56,.64,1),opacity 220ms cubic-bezier(.2,.75,.25,1)'; card.style.transform = ''; card.style.opacity = '1'; };
  card.addEventListener('pointerdown', function (e) { dragging = true; startX = e.clientX; startT = Date.now(); dx = 0; card.style.transition = 'none'; card.setPointerCapture(e.pointerId); });
  card.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    dx = e.clientX - startX;
    card.style.transform = 'translateX(' + (dx * .55).toFixed(1) + 'px)';
    card.style.opacity = String(Math.max(.35, 1 - Math.abs(dx) / 420));
  });
  var end = function () {
    if (!dragging) return;
    dragging = false;
    var v = Math.abs(dx) / Math.max(1, Date.now() - startT);
    if (Math.abs(dx) > 96 || v > .5) { card.style.transform = 'translateX(' + (dx > 0 ? 420 : -420) + 'px)'; card.style.opacity = '0'; }
    else reset();
  };
  card.addEventListener('pointerup', end);
  card.addEventListener('pointercancel', end);
  note.addEventListener('click', function () { card.style.transition = 'none'; card.style.transform = ''; card.style.opacity = '1'; void card.offsetWidth; reset(); });
},
  "tap-feedback": root => {
  var box = root.querySelector('[data-surface]');
  if (!box) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  box.addEventListener('pointerdown', function (e) {
    var r = box.getBoundingClientRect();
    var ring = document.createElement('i');
    ring.style.left = (e.clientX - r.left) + 'px';
    ring.style.top = (e.clientY - r.top) + 'px';
    var p = e.pointerType === 'mouse' ? .8 : (e.pressure || .5) + .5;
    ring.style.transform = 'scale(' + p.toFixed(2) + ')';
    box.appendChild(ring);
    setTimeout(function () { ring.remove(); }, 560);
  });
},
  "two-finger-pan": root => {
  var box = root.querySelector('[data-canvas]');
  var art = root.querySelector('[data-art]');
  if (!box || !art) return;
  var x = 0, y = 0, sx = 0, sy = 0, drag = null;
  var clamp = function () {
    var maxX = 0, minX = box.clientWidth - art.offsetWidth;
    var maxY = 0, minY = box.clientHeight - art.offsetHeight;
    x = Math.max(minX, Math.min(maxX, x));
    y = Math.max(minY, Math.min(maxY, y));
    art.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)';
  };
  box.addEventListener('pointerdown', function (e) { if (e.pointerType === 'touch' && e.isPrimary) return; drag = { x: e.clientX, y: e.clientY }; sx = x; sy = y; box.setPointerCapture(e.pointerId); });
  box.addEventListener('pointermove', function (e) { if (!drag) return; x = sx + (e.clientX - drag.x); y = sy + (e.clientY - drag.y); clamp(); });
  var end = function () { drag = null; };
  box.addEventListener('pointerup', end);
  box.addEventListener('pointercancel', end);
  box.addEventListener('wheel', function (e) { if (!e.shiftKey) { x -= e.deltaY; clamp(); e.preventDefault(); } }, { passive: false });
  clamp();
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
  "extruded-text": root => {
  const stage = root.querySelector('.d-xt-stage');
  const word = stage && stage.querySelector('.d-xt-word');
  if (!stage || !word) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const move = e => {
    const r = stage.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    word.style.transform = 'rotateY(' + (x * 8).toFixed(1) + 'deg) rotateX(' + (-y * 6).toFixed(1) + 'deg)';
  };
  stage.addEventListener('pointermove', move);
  stage.addEventListener('pointerleave', () => { word.style.transform = 'none'; });
},
  "isometric-stack": root => {
  const stage = root.querySelector('.d-iso-stage');
  const btn = stage && stage.querySelector('.d-iso-btn');
  if (!stage || !btn) return;
  btn.onclick = () => {
    const on = stage.classList.toggle('d-iso-open');
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.textContent = on ? '合上图层' : '抽出图层';
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
  "orbit-chart": root => {
  const stage = root.querySelector('.d-oc-stage');
  if (!stage) return;
  const scene = stage.querySelector('.d-oc-scene');
  if (!scene) return;
  let rz = -40, rx = 58, drag = null, vx = 0, vy = 0, raf = 0, live = false;
  const apply = () => { scene.style.transform = 'rotateX(' + rx.toFixed(2) + 'deg) rotateZ(' + rz.toFixed(2) + 'deg) translateZ(-18px)'; };
  const tick = () => {
    if (!live) return;
    if (!drag) { rz += vx; rx += vy; vx *= 0.93; vy *= 0.93; if (Math.abs(vx) < 0.01) vx = 0; if (Math.abs(vy) < 0.01) vy = 0; rx = Math.max(30, Math.min(76, rx)); apply(); }
    if (drag || vx || vy) raf = requestAnimationFrame(tick); else live = false;
  };
  const start = () => { if (!live) { live = true; raf = requestAnimationFrame(tick); } };
  stage.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY }; stage.classList.add('d-oc-drag'); stage.setPointerCapture(e.pointerId); vx = vy = 0; });
  stage.addEventListener('pointermove', e => {
    if (!drag) return;
    rz += (e.clientX - drag.x) * 0.4;
    rx = Math.max(30, Math.min(76, rx - (e.clientY - drag.y) * 0.25));
    vx = (e.clientX - drag.x) * 0.06; vy = -(e.clientY - drag.y) * 0.04;
    drag = { x: e.clientX, y: e.clientY };
    apply(); start();
  });
  const release = () => { drag = null; stage.classList.remove('d-oc-drag'); start(); };
  stage.addEventListener('pointerup', release);
  stage.addEventListener('pointercancel', release);
  apply();
},
  "particle-depth": root => {
  const cv = root.querySelector('.d-pd-canvas');
  if (!cv || !cv.getContext) return;
  const ctx = cv.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w = 0, h = 0, dpr = 1, ps = [], raf = 0, live = false;
  const seed = (n) => {
    const ink = getComputedStyle(cv).getPropertyValue('--ink').trim() || '#20241e';
    const out = [];
    for (let i = 0; i < n; i++) out.push({ x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2, z: Math.random() * 1.8 + 0.1, ink });
    return out;
  };
  const draw = () => {
    if (!w) return;
    ctx.clearRect(0, 0, w, h);
    for (const p of ps) {
      const s = 1 / p.z;
      const x = w / 2 + (p.x * w) * s * 0.5;
      const y = h / 2 + (p.y * h) * s * 0.5;
      const r = Math.max(0.6, 2.4 * s);
      ctx.globalAlpha = Math.max(0.12, Math.min(0.85, 0.75 / p.z));
      ctx.fillStyle = p.ink;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  };
  const resize = () => {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    w = cv.clientWidth; h = cv.clientHeight;
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!ps.length) ps = seed(46);
    draw();
  };
  const tick = () => {
    for (const p of ps) {
      p.z -= 0.006 + (1.9 - p.z) * 0.0045;
      if (p.z < 0.12) { p.z = 1.9; p.x = (Math.random() - 0.5) * 2; p.y = (Math.random() - 0.5) * 2; }
    }
    draw();
    raf = requestAnimationFrame(tick);
  };
  const start = () => { if (!live && !reduce) { live = true; raf = requestAnimationFrame(tick); } };
  const stop = () => { live = false; cancelAnimationFrame(raf); };
  new ResizeObserver(resize).observe(cv);
  resize();
  if (!reduce) {
    if ('IntersectionObserver' in window) new IntersectionObserver(es => es.forEach(x => (x.isIntersecting ? start() : stop())), { rootMargin: '120px' }).observe(cv);
    else start();
  }
},
  "pointer-light": root => {
  const stage = root.querySelector('.d-lt-stage');
  const card = stage && stage.querySelector('.d-lt-card');
  if (!stage || !card) return;
  stage.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    const y = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    card.style.setProperty('--lx', (x * 100).toFixed(1) + '%');
    card.style.setProperty('--ly', (y * 100).toFixed(1) + '%');
    stage.classList.add('d-lt-on');
  });
  stage.addEventListener('pointerleave', () => stage.classList.remove('d-lt-on'));
},
  "scroll-camera-dolly": root => {
  const box = root.querySelector('.d-cd-scroll');
  if (!box) return;
  const scene = box.querySelector('.d-cd-scene');
  const hint = box.querySelector('.d-cd-hint');
  if (!scene || !hint) return;
  const apply = () => {
    const max = box.scrollHeight - box.clientHeight || 1;
    const p = Math.min(1, box.scrollTop / max);
    scene.style.transform = 'translateZ(' + (p * 150).toFixed(1) + 'px)';
    hint.style.opacity = String(1 - p);
  };
  box.addEventListener('scroll', apply, { passive: true });
  apply();
},
  "scroll-parallax-depth": root => {
  const box = root.querySelector('.d-pp-scroll');
  if (!box) return;
  const map = [['.d-pp-back', 0.18], ['.d-pp-mid', 0.42], ['.d-pp-front', 0.8]]
    .map(p => [box.querySelector(p[0]), p[1]])
    .filter(p => p[0]);
  const apply = () => {
    const y = box.scrollTop;
    map.forEach(p => { p[0].style.transform = 'translate3d(0,' + (-y * p[1]).toFixed(1) + 'px,0)'; });
  };
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) box.addEventListener('scroll', apply, { passive: true });
  apply();
},
  "scroll-tilt-reveal": root => {
  const box = root.querySelector('.d-tt-scroll');
  if (!box) return;
  const cards = [...box.querySelectorAll('.d-tt-card')];
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { cards.forEach(c => { c.style.transform = 'none'; c.style.opacity = '1'; }); return; }
  let queued = false;
  const apply = () => {
    queued = false;
    const r0 = box.getBoundingClientRect();
    cards.forEach(card => {
      const r = card.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (r0.bottom - r.top) / (r0.height * 0.62)));
      card.style.transform = 'rotateX(' + (68 * (1 - p)).toFixed(1) + 'deg) translateY(' + (18 * (1 - p)).toFixed(1) + 'px)';
      card.style.opacity = String(0.35 + 0.65 * p);
    });
  };
  const onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(apply); } };
  box.addEventListener('scroll', onScroll, { passive: true });
  apply();
},
  "tag-sphere": root => {
  const stage = root.querySelector('.d-ts-stage');
  if (!stage) return;
  const tags = [...stage.querySelectorAll('.d-ts-tag')];
  if (!tags.length) return;
  const R = 96, FOV = 260;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pts = tags.map((el, i) => {
    const y = 1 - (i / (tags.length - 1)) * 2;
    const rad = Math.sqrt(Math.max(0, 1 - y * y));
    const th = i * 2.399963229728653;
    return { el, x: Math.cos(th) * rad, y, z: Math.sin(th) * rad };
  });
  let ry = 0.4, rx = -0.18, vy = reduce ? 0 : 0.0035, vx = 0, raf = 0, live = false, drag = null;
  const draw = () => {
    const cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx);
    for (const p of pts) {
      const x1 = p.x * cy - p.z * sy;
      const z1 = p.x * sy + p.z * cy;
      const y1 = p.y * cx - z1 * sx;
      const z2 = p.y * sx + z1 * cx;
      const s = FOV / (FOV + z2 * R);
      p.el.style.transform = 'translate3d(' + (x1 * R * s).toFixed(1) + 'px,' + (y1 * R * s).toFixed(1) + 'px,0) translate(-50%,-50%) scale(' + s.toFixed(3) + ')';
      p.el.style.opacity = (0.35 + 0.65 * ((s - 0.62) / 0.55)).toFixed(3);
      p.el.style.zIndex = String(Math.round((z2 + 1) * 100));
    }
  };
  const tick = () => {
    if (!live) return;
    ry += vy; rx += vx;
    rx = Math.max(-1.1, Math.min(1.1, rx));
    vy *= 0.96; vx *= 0.9;
    if (Math.abs(vy) < 0.0004) vy = reduce ? 0 : 0.0035;
    draw();
    raf = requestAnimationFrame(tick);
  };
  const start = () => { if (!live) { live = true; raf = requestAnimationFrame(tick); } };
  const stop = () => { live = false; cancelAnimationFrame(raf); };
  stage.addEventListener('pointerdown', e => {
    drag = { x: e.clientX, y: e.clientY };
    stage.classList.add('d-ts-drag');
    stage.setPointerCapture(e.pointerId);
    vy = 0; vx = 0;
  });
  stage.addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    drag = { x: e.clientX, y: e.clientY };
    ry += dx * 0.006; rx = Math.max(-1.1, Math.min(1.1, rx + dy * 0.004));
    vx = dy * 0.0006; vy = 0;
    draw();
  });
  const release = () => { drag = null; stage.classList.remove('d-ts-drag'); };
  stage.addEventListener('pointerup', release);
  stage.addEventListener('pointercancel', release);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(es => es.forEach(x => (x.isIntersecting ? start() : stop())), { rootMargin: '120px' }).observe(stage);
  } else start();
  draw();
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
