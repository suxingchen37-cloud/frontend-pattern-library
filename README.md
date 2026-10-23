# 前端模式库

给人和 AI 共用的前端资产库：**200+ 条可交互动效与 UI 模式**，二十多个分类。

> 条数以 `agent/index.json` 的 `count` 字段为准（会随新增变化，不要写死在别处）。本文写作时：224 条 / 26 分类。
人在这里挑，AI 在这里取料，两边读同一份数据。

本地打开：`http://127.0.0.1:8801/?tab=motion`
线上（AI 取料用）：`https://cdn.jsdelivr.net/gh/suxingchen37-cloud/frontend-pattern-library@main/llms.txt`

## 页面

| 页面 | 内容 |
|---|---|
| `index.html` | 总览（印刷目录版式） |
| `motion-lab.html` | 动效与交互实验室（条数与分类随数据变化） |
| `design-system.html` | 设计系统：令牌、字阶、图标、组件图鉴 |
| `depth.html` | 纵深示范：一台测距仪的使用说明（整页组合样例） |
| `ai-tells.html` | 反例对照：AI 默认写法 vs 本库改法，8 组并排 |
| `site/` | 整站实战《缓坡》四页 |

## 为什么是「数据 + 生成」

页面、AI 取料文件、GitHub 上的那份——过去是三份手抄件，改一处就分叉。
现在只有一份真相：`data/`，其余都是生成物。

```
data/assets/motion/<id>.json   一条资产 = 一个文件（body / css / init / 分类 / 运动语言）
data/tokens.json               颜色、字阶、间距、圆角、时长、曲线、阴影（唯一数字源）
data/rules.md                  给 AI 的口味底线（占位符渲染进 llms.txt）
data/categories.json           分类登记
data/schema.md                 字段契约与机器校验规则
        │
        ├─ node tools/build.mjs  → agent/（索引 + 单条 blocks + 单条预览）+ llms.txt
        ├─ node tools/site.mjs   → lab-extra4.js + 给 index.html / motion-lab.html 打补丁（source=v4/v5）
        └─ node tools/emit.mjs   → 反向生成：老 144 条的 motion-lab 内联数组 + lab-more/extra2/extra3
```

## 改完数据必须跑这三条

```bash
node tools/build.mjs && node tools/site.mjs && node tools/emit.mjs && node tools/verify.mjs
```

三条都退出 0 才算改完。**`agent/` 目前入库**，所以改完还要把再生后的 `agent/` 一起提交
（否则线上 AI 拿到的是旧产物）。只想确认有没有漂移：

```bash
node tools/build.mjs --check && node tools/site.mjs --check
```

> `agent/` 入库是「还没有 Pages 时的取料方案」。等 GitHub Actions 部署跑通，
> 可以把它移出仓库、改由 CI 在发布前构建，届时 `.gitignore` 加回 `agent/` 即可。

## 给人

- 左栏分类筛选、搜索、密度切换、夜间主题
- 每张卡：`复制 CSS` / `整卡` / `预览` / `选中`
- 选中几条后点 `复制配方`：生成一段可直接粘给 AI 的单子（含 id、取料地址、组装要求）

## 给 AI

从 `llms.txt` 开始，它指向 `agent/index.json`。取单条资产：

```
agent/blocks/<id>.html   body 原文
agent/blocks/<id>.css    css 原文（外层自己加作用域）
agent/blocks/<id>.js     init 源码（hasInit 为 true 才有）
agent/preview/<id>.html  单条独立预览页，加 ?theme=night 看夜间
```

远程基址两条（国内网络优先 jsDelivr）：

| 基址 | 实测 |
|---|---|
| `https://cdn.jsdelivr.net/gh/suxingchen37-cloud/frontend-pattern-library@main/` | 可用；有约 12 小时缓存，要最新版加 `?v=<时间戳>` |
| `https://raw.githubusercontent.com/suxingchen37-cloud/frontend-pattern-library/main/` | 国内常超时，作兜底 |

一条页面只挑 2–3 条资产，必须留一处破格并写明破坏了哪条——这是 `data/rules.md` 的硬要求。

## 目录

| 路径 | 说明 |
|---|---|
| `data/` | **唯一真相**，手改这里 |
| `tools/` | 生成器与自检（build / site / emit / verify / extract / annotate-motion） |
| `agent/` | AI 取料产物，当前入库（文件数随资产增加，可由 build 重建） |
| `llms.txt` | AI 入口（生成物） |
| `lab-extra4.js` | 新资产挂载（生成物） |
| `lab-recipe.js` | 手写，已选面板的「复制配方」 |
| `lab-more.js` `lab-extra2.js` `lab-extra3.js` | 存量资产来源（老 144 条仍在这些文件里） |
| `README.md` / `AGENTS.md` | 流水线说明与协作约定 |

## 部署

当前可用路径：**公开仓库 + jsDelivr**（无需构建服务）。
GitHub Pages / Actions 尚未启用（推送令牌缺 `workflow` 权限，工作流暂存在仓库外）。
启用后：推送到 `main` → `design-check` 校验 → `deploy-pages` 先构建 `agent/` 再按白名单发布。
