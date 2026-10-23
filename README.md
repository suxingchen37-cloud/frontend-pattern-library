# 前端模式库

一个给人和 AI 共用的前端资产库：**224 条可交互动效与 UI 模式**，26 个分类（含 18 条纯代码图表与 17 条 3D 纵深）。
人在这里挑，AI 在这里取料；两边读的是同一份数据。

在浏览器打开：`http://127.0.0.1:8801/?tab=motion`

## 为什么是「数据 + 生成」

页面、AI 取料文件、GitHub 上的那份——过去是三份手抄件，改一处就分叉。
现在只有一份真相：`data/`。其余全是生成物。

```
data/assets/motion/<id>.json   一条资产 = 一个文件（body / css / init / 分类 / 运动语言）
data/tokens.json               颜色、字阶、间距、圆角、时长、曲线、阴影（唯一数字源）
data/rules.md                  给 AI 的口味底线（占位符渲染进 llms.txt）
data/categories.json           分类登记
        │
        ├─ node tools/build.mjs  → agent/（AI 取料：索引 + 单条 blocks + 单条预览）+ llms.txt
        ├─ node tools/site.mjs   → lab-extra4.js + 给 index.html / motion-lab.html 打补丁（source=v4）
        └─ node tools/emit.mjs   → 老 144 条：motion-lab.html 内联数组 + lab-more/extra2/extra3
```

## 改完数据必须跑这三条

```bash
node tools/build.mjs && node tools/site.mjs && node tools/emit.mjs && node tools/verify.mjs
```

三条都退出 0 才算改完。只想确认有没有漂移：

```bash
node tools/build.mjs --check && node tools/site.mjs --check
```

## 给人

- 左栏分类筛选、搜索、密度切换、夜间主题
- 每张卡：`复制 CSS` / `整卡` / `预览` / `选中`
- 选中几条后点 `复制配方`，会生成一段可直接粘给 AI 的单子（含 id、取料地址、组装要求）

## 给 AI

从 `llms.txt` 开始，它指向 `agent/index.json`。取单条资产：

```
agent/blocks/<id>.html   body 原文
agent/blocks/<id>.css    css 原文（外层自己加作用域）
agent/blocks/<id>.js     init 源码（hasInit 为 true 才有）
agent/preview/<id>.html  单条独立预览页，加 ?theme=night 看夜间
```

一条页面只挑 2–3 条资产，必须留一处破格并写明破坏了哪条——这是 `data/rules.md` 的硬要求。

## 目录

| 路径 | 说明 |
|---|---|
| `data/` | **唯一真相**，手改这里 |
| `tools/` | 生成器与自检（build / site / verify / extract） |
| `agent/` | 生成物，已 gitignore（700 个文件，随时重建） |
| `llms.txt` | 生成物，AI 入口 |
| `lab-extra4.js` | 生成物，新资产挂载 |
| `lab-recipe.js` | 手写，已选面板的「复制配方」 |
| `index.html` / `motion-lab.html` / `design-system.html` | 站点页面（前两个由 site.mjs 打补丁） |
| `AGENTS.md` | 流水线约定 + 给协作者的留言 |

## 部署

推送到 `main` 会触发两条 GitHub Actions：

| 工作流 | 做什么 |
|---|---|
| `design-check` | 重建 agent/ → 校验站点补丁无漂移 → 三方一致性 → 构建确定性 |
| `deploy-pages` | 先 `node tools/build.mjs` 生成 agent/，再整站发布到 Pages |

**为什么要先构建再发布**：`agent/` 是生成物（已 gitignore），仓库里没有它。
若直接发布仓库内容，`/agent/index.json` 会 404，AI 就取不到料——所以发布前必须重建。

首次启用：仓库 Settings → Pages → Source 选 `GitHub Actions`。
