# 前端模式库

给人和 AI 共用的前端资产库：可交互动效、UI 模式、排版判断方法和可修改的结构示例。
人在页面里挑，AI 按索引取代码，两边读同一份数据。

**当前数量只看 [`agent/index.json`](agent/index.json) 的 `count` 与 `categories`。** 本文不维护手写快照。
本地运行 `node serve.mjs`，打开 `http://127.0.0.1:8801/?tab=motion`。
AI 入口：[llms.txt](https://cdn.jsdelivr.net/gh/suxingchen37-cloud/frontend-pattern-library@main/llms.txt)。

## 页面

| 页面 | 内容 |
|---|---|
| `index.html` | 总览 |
| `motion-lab.html` | 动效与交互实验室，分类与数量从数据推导 |
| `design-system.html` | 预览用的设计系统示例与内容呈现，不是消费方的风格规范 |
| `depth.html` | 纵深组合示例 |
| `ai-tells.html` | 默认套版与基于内容设计的反例对照 |
| `landing.html` / `dashboard.html` | 落地页与数据工作台示例 |
| `site/` | 多页面整站示例 |

## 数据与生成

`data/` 是唯一真源，`agent/`、`llms.txt`、站点资产与计数由脚本生成：

- `data/assets/motion/<id>.json`：资产 body、css、init、分类与检索元数据。
- `data/categories.json`：分类登记；`data/tokens.json`：预览变量的数值来源。
- `data/rules.md`：AI 入口正文；`data/typography.md`、`data/layouts/`：排版方法和结构示例。
- `tools/build.mjs` → `agent/` 与 `llms.txt`。
- `tools/site.mjs` → 新批次资产与站点计数；`tools/emit.mjs` → 老批次展示代码。

改完数据，依次运行下面四步，并提交再生成的产物：

```bash
node tools/build.mjs
node tools/site.mjs
node tools/emit.mjs
node tools/verify.mjs
```

只读检查与回归测试：

```bash
node tools/build.mjs --check --strict
node tools/site.mjs --check
node tools/emit.mjs --check
node tools/verify.mjs
node --test tools/tests/*.test.mjs
```

`agent/` 当前仍入库，让 raw / CDN 可以直接取料；自动发布不会改变这个约定。

## 完全不预设风格，保留质量要求

本库不规定配色、字体、圆角、材质、阴影、动效曲线或必须使用的版式，也不要求刻意破格。
资产和预览参数是可修改的实现示例；变量名是兼容接口，`agent/tokens.css` 的值只为让示例可运行。

避免 AI 模板感的要求仍保留：内容先于容器，不机械堆砌卡片和重复区块，不虚构指标与评价，装饰不抢内容，动效说明状态或关系，文案写具体信息。
这不等于封禁某种颜色、渐变、玻璃或胶囊；是否使用，由实际内容、品牌和用户需求决定。
键盘焦点、必要状态、可读性、响应式、reduced-motion、变量依赖和代码隔离仍需检查。
维护资产时 `--strict` 检查质量契约，不按视觉偏好拒收。

## 给人和 AI

页面提供分类筛选、搜索、预览与复制。选中资产后点击“复制配方”，可把 id、取料地址和质量要求交给 AI。
AI 从 `llms.txt` 开始，查 `agent/index.json`，再按 `files` 获取：

```text
agent/blocks/<id>.html   body
agent/blocks/<id>.css    CSS，消费方添加作用域
agent/blocks/<id>.js     init，仅 hasInit 为 true 时存在
agent/preview/<id>.html  独立预览，可加 ?theme=night
```

远程基址：

- `https://cdn.jsdelivr.net/gh/suxingchen37-cloud/frontend-pattern-library@main/`
- `https://raw.githubusercontent.com/suxingchen37-cloud/frontend-pattern-library/main/`

CDN 可能缓存分支内容；需要固定版本时将 `@main` 换成提交 SHA。Pages 启用后也可使用项目站点基址。

## 自动校验与发布

- `.github/workflows/design-check.yml`：PR、主分支推送和手动运行时检查产物一致性、质量契约、回归测试与发布白名单。
- `.github/workflows/deploy-pages.yml`：主分支推送或手动运行时，检查后重新生成并发布；部署任务只在构建成功后运行。
- `node tools/package-site.mjs`：生成 `_site/`。只发布指定页面、浏览器脚本、`site/`、`agent/`、`llms.txt` 与取料需要的 `data/tokens.json`。
- 不发布完整 `data/`、`tools/`、协作文档或仓库元数据。上传和部署使用 GitHub 官方 Pages Actions。

首次启用需在仓库 **Settings → Pages → Source** 选择 **GitHub Actions**；提交工作流需要可写仓库连接以及相应 workflow 权限。
实际发布状态以仓库 Settings 和 Actions 运行结果为准；有工作流文件不代表已经上线。
回滚时恢复上一份正常提交，重新运行发布流程。
