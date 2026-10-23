# 前端模式库

一套可直接点、可直接复制的通用前端参考库：**196 个真交互效果 / 25 个分类**、设计系统与内容呈现各 50 条图鉴，外加一个完整示范站《缓坡》。纯静态、零依赖、单页入口。

它同时是给 AI 的取材源：仓库根有一份 `llms.txt` 和 `agent/` 目录，新对话里的 AI 不需要跑任何命令，读文件就能取料。

## 运行

```bash
node serve.mjs
# http://127.0.0.1:8801/
```

端口可用 `PORT=8802 node serve.mjs` 覆盖。无需安装依赖，无需构建。

## 结构

| 标签 | 文件 | 内容 |
|---|---|---|
| 动效与交互 | `motion-lab.html` + `lab-more.js` + `lab-extra2.js` + `lab-extra3.js` + `lab-extra4.js` | 196 个真交互效果，25 个分类；点「选中」→「复制清单」取 id |
| 设计系统 | `design-system.html#design` + `ds-specs.js` | 颜色令牌、7 档字阶、间距/圆角/阴影、可复制图标、空态插画、组件六态矩阵；另加 50 条组件/状态图鉴 |
| 内容呈现 | `design-system.html#content` + `ds-content.js` | Markdown、代码块、diff、图片查看器、文案语气；另加 50 条内容小样 |
| 整站实战 | `site/` | 虚构独立刊物《缓坡》：首页 / 文章 / 往期 / 关于 |

`index.html` 是唯一入口与标签外壳；页面选择存 `localStorage`，夜间主题通过 `?theme=` 与 `postMessage` 同步进内容页与示范站。

25 个分类：入场、加载、微交互、光标、滚动、过渡、拖拽、布局、数据、反馈、排印、无障碍、表单、导航、浮层、列表、手势、内容、长文、表格、状态页、媒体、SVG 与路径、3D 与透视、滚动驱动。

## 给 AI 取料

```
llms.txt              入口：数字表、黑名单、五条公理、组装法、交付前自检（≤120 行）
agent/index.json      一行一条资产：id / cat / t / en / d / motion / tags / files
agent/blocks/<id>.html|.css|.js   这条的结构、样式、行为原文
agent/preview/<id>.html           单条独立页，令牌已注入，双击即看，不引用外部资源
```

用法：把**这个文件夹**交给 AI（本地路径即可，`127.0.0.1` 只有本机打得开），说清楚要做什么网站。

**库是取材源，不是待改的工程**：抄走的代码归你，怎么组合、改参数、加库里没有的新效果都随你；`data/` 与 `agent/**`、`llms.txt` 是生成物，不要手改。

## 数据流（改资产前必读）

唯一真源是 `data/`，两边都是产物：

```
data/assets/motion/<id>.json   一条一文件；data/tokens.json 唯一数字来源
data/categories.json           分类登记；data/rules.md 是 llms.txt 的正文源
data/order.json                老批次在页面上的出现顺序
        │
        ├─ node tools/build.mjs   → agent/**、llms.txt        （AI 侧）
        ├─ node tools/site.mjs    → lab-extra4.js、站点计数    （source=v4 的新资产）
        └─ node tools/emit.mjs    → motion-lab.html 内联数组、lab-more.js、
                                    lab-extra2.js、lab-extra3.js（老 144 条）
```

**不要跑 `tools/extract.mjs`**：它是一次性导入器，会把 `motion` 无条件写回空串，`--prune` 还会删掉 40 条新资产。
**不要手改 `motion-lab.html` / `lab-*.js` / `agent/**` / `llms.txt`**：都是生成物。

## 加一个效果

1. 写 `data/assets/motion/<id>.json`（字段与硬性约束见 `data/schema.md`；`source` 填 `v4`，`motion` 必填）。
2. `node tools/build.mjs && node tools/site.mjs`
3. 自检四件套，全绿再收工：

```bash
node tools/build.mjs --check --strict   # 契约：警告即失败
node tools/site.mjs --check             # v4 → lab-extra4.js 无漂移
node tools/emit.mjs --check             # 老批次与 data 逐字段一致
node tools/verify.mjs                   # data ↔ agent ↔ 站点 三方一致
```

4. 打开 `agent/preview/<id>.html` 看一眼（加 `?theme=night` 看夜间）。

### 契约要点

- **motion 四值**：机械 / 物理 / 印刷 / 无动效。判据看这条自己用的曲线，不看名字。`无动效` 只描述"这条现在不含动画"，**不是禁令**——要加就从前三族里挑一族加。
- 每条自带全部代码，不共用零件；通用件（`.d-btn` / `.d-btn-primary` / `.d-hint`）内联进这条自己的 css，保证抄走就能跑。
- `body` 里所有 class 必须 `d-` 前缀；`init` 里引用类名的三处要跟着改（完整类名字符串、`querySelector('.a .b')` 复合选择器、拼的 `class="..."`）。
- 行内 `style` 只允许 `--自定义属性`（逐元素数据）；样式属性一律进 `css`。
- `@keyframes` 名字必须带 `d-<id>-` 前缀，否则多条同屏互相覆盖。
- 圆角只取 0 / 2 / 6 / 10 / 999（`50%` 是形状，不受档位限制）。
- `css` 允许为空，但仅限纯行为资产（`init` 非空）。
- 状态色 `--ok` / `--warn` 只标成功与警示，不作装饰色。

## 宽屏与交互

- **≥1600px**：动效页三栏（左分类栏 / 中流式网格 / 右已选面板）；图鉴为左分组栏 + 流式网格；首页 4 张开入口卡铺开。
- **1200–1599px**：保留左栏，已选收进右下浮动胶囊。
- **<1200px**：左栏收起，分类回到单行横滑；<640px 网格单列。
- 动效页记住筛选、搜索、滚动位置、密度；图鉴记住分组、搜索、密度和滚动位置。
- 选中后可从面板或胶囊里回看、定位、移除；支持「只看已选」「复制清单」。
- 每张卡支持复制 CSS、复制整卡（HTML + CSS）、全屏预览；预览里可复制深链接（`?tab=motion&demo=id`）。
- 键盘：`/` 聚焦搜索，`Esc` 清空搜索 / 关闭预览。
- 按分类懒渲染，首屏只画视口附近的分类。

## 示范站《缓坡》

- `site/index.html`：封面、本期文章、编辑室手记、订阅表单
- `site/article.html`：长文排版，阅读进度、目录跟随、脚注浮层、复制链接
- `site/archive.html`：12 篇文章，栏目筛选、搜索、列表/网格切换、空结果
- `site/about.html`：编辑室、撰稿人、投稿步骤、联系表单（前端校验）

全部为静态演示，不连接后端；表单只做本地校验与反馈。

## 设计图鉴 / 内容图鉴

`ds-specs.js`（50 条规格）和 `ds-content.js`（50 条内容小样）用同一套条目结构：`{ id, group, t, en, rule, dont?, body, css, init? }`；`ds-render.js` 负责分组筛选、搜索、作用域化 CSS 和挂载交互。

## 工具

`tools/` 下除生成器外还留着本轮清警告用的一次性脚本（`fix-22` / `fix-keyframes` / `fix-radius` / `fix-classes{,2,3}` / `fix-motion`），每个都支持 `--plan` 先看改动再 `--apply`，可当作后续批量治理的样板。
