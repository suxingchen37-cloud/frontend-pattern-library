# 本仓库的生成流水线（人机共用）

## 权威入口

资产数量和分类数量只从 `agent/index.json` 的 `count` 与 `categories` 读取，不在协作文档或规范里保留手写快照。
资产 JSON 位于 `data/assets/motion/`，分类在 `data/categories.json` 登记。设计系统与内容呈现页面仍有手写示例，不能视为全库数据化。

| 层 | 维护入口 | 产物 |
|---|---|---|
| 资产与分类 | `data/assets/motion/*.json`、`data/categories.json` | 展示代码与 AI 索引 |
| 预览变量 | `data/tokens.json` | `agent/tokens.css` 与独立预览 |
| AI 使用要求 | `data/rules.md` | `llms.txt` |
| 排版方法与结构示例 | `data/typography.md`、`data/layouts/*.json` | `agent/typography.md`、`agent/layouts/` |
| AI 生成器 | `tools/build.mjs` | `agent/`、`llms.txt` |
| 站点合成器 | `tools/site.mjs` | `lab-extra4.js` 与首页、实验室补丁 |
| 老批次生成器 | `tools/emit.mjs` | 实验室内联数组、`lab-more.js`、`lab-extra2.js`、`lab-extra3.js` |
| 一致性核验 | `tools/verify.mjs` | 只读，不写盘 |
| 发布打包 | `tools/package-site.mjs` | `_site/`，按白名单生成 |

## 修改与检查

改源数据或生成器后按顺序执行四步，再提交生成物：

```bash
node tools/build.mjs
node tools/site.mjs
node tools/emit.mjs
node tools/verify.mjs
```

交付前运行：

```bash
node tools/build.mjs --check --strict
node tools/site.mjs --check
node tools/emit.mjs --check
node tools/verify.mjs
node --test tools/tests/*.test.mjs
node tools/package-site.mjs
```

- `--strict` 把质量契约 WARN 当作失败；颜色、圆角、材质与曲线不是质量错误。
- 生成物勿手改；`agent/` 当前入库，改源数据后必须一起提交，避免远程取料过期。
- 不运行一次性 `tools/extract.mjs`，它会覆盖 motion 元数据；不要把它加入校验或发布流程。
- 同一时刻只允许一个执行者跑生成器，避免并发覆盖。
- 分类必须先登记；临时脚本用 `tools/_` 前缀且不要提交。
- 提交只包含当前任务的修改，换行统一 LF，说明改了什么以及原因。

## 完全不预设风格

用户需求、内容、品牌与受众决定视觉表现。库内不设风格预案，不强定配色、字体数量、字阶、圆角档数、材质、阴影、曲线或版式配额，也不要求刻意破格。
预览变量、示例页面和布局骨架只是可修改的材料，变量名不是视觉限制。

保留避免 AI 模板感的要求：按内容组织信息，不堆无意义卡片，不机械重复区块，不用装饰和口号填补空内容，不虚构指标与评价。
渐变、玻璃、紫色、胶囊等元素不被单独封禁；检查它们是否服务当前内容与任务。
代码隔离、变量依赖、交互正确性、必要状态、键盘焦点、可读性、响应式与 reduced-motion 仍是质量底线。

## 远程取料

从 `llms.txt` 到 `agent/index.json`，再按 files 读取 blocks；使用 `agent/preview/` 核对交互。
可使用 jsDelivr、raw 或已启用的 Pages。项目站点地址带仓库名前缀，复制链接不能丢掉这个路径。
需要可复现版本时，CDN 地址固定提交 SHA，不能假定 @main 没有缓存。

## 发布与权限

- `design-check.yml` 对 PR、main 推送与手动运行执行只读检查、回归测试及打包。
- `deploy-pages.yml` 在 main 推送与手动运行时检查、构建并部署，只发布打包白名单。
- 首次启用需将仓库 Pages Source 设为 GitHub Actions；写入 workflow 文件需要相应权限。
- 工作流文件、仓库设置、成功运行与线上验证是不同状态，不在文档里写死已上线。核实后再报告完成。
- Pages 未启用或部署失败时，raw / CDN 取料路径仍可使用；恢复正常提交后重新运行部署即可回滚。

## 尚需独立处理

设计系统与内容呈现的完整数据化，以及全资产移动端和可访问性巡检不属于本次修复，不能因生成检查通过就宣称这些已完成。
