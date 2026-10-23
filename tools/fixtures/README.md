# tools/fixtures

`tools/build.mjs` 的自测数据（真实资产还没到位时用）。结构跟 `data/` 一样，只放资产；
`tokens.json` 与 `categories.json` 不在时会回落到仓库的 `data/`。

    node tools/build.mjs --data tools/fixtures --out tools/fixtures/out
    node tools/build.mjs --data tools/fixtures --out tools/fixtures/out --check

- `fx-fade-stagger.json`：有 init（入场 + 重放），生成 blocks/<id>.js
- `fx-press-feedback.json`：无 init（纯 CSS 微交互），不生成 .js
- `_ignored.json`：以 `_` 开头，构建时必须被跳过（用来验证跳过规则）
- `out/`：上面第一条命令的产物，只是自测样例，删掉不影响任何东西；
  真实产物在仓库根的 `agent/` 与 `llms.txt`。
