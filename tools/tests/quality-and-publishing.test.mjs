import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { packageSite, PUBLIC_PATHS } from '../package-site.mjs';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '..', '..', '..');

async function temporary(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'frontend-pattern-tests-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  return root;
}

async function buildFixture(t, extraCss = '', body) {
  const root = await temporary(t);
  const data = path.join(root, 'data');
  const dir = path.join(data, 'assets', 'motion');
  await fs.mkdir(dir, { recursive: true });
  const asset = JSON.parse(await fs.readFile(path.join(ROOT, 'tools/fixtures/assets/motion/fx-press-feedback.json'), 'utf8'));
  asset.css += extraCss;
  if (body) asset.body = body;
  await fs.writeFile(path.join(dir, asset.id + '.json'), JSON.stringify(asset));
  await fs.copyFile(path.join(ROOT, 'data/rules.md'), path.join(data, 'rules.md'));
  const result = spawnSync(process.execPath, [path.join(ROOT, 'tools/build.mjs'), '--data', data, '--out', root, '--strict'], { encoding: 'utf8' });
  assert.ifError(result.error);
  return { root, result, output: result.stdout + result.stderr };
}

test('strict build accepts visual choices without a preset style', async t => {
  const css = '\n.d-choice{color:#a855f7;background:linear-gradient(#c4b6ff,#fff);border-radius:23px;box-shadow:0 4px 12px rgba(0,0,0,.3);backdrop-filter:blur(12px);transition:opacity 240ms cubic-bezier(.4,0,.2,1)}';
  const { root, result, output } = await buildFixture(t, css);
  assert.equal(result.status, 0, output);
  const generated = await fs.readFile(path.join(root, 'agent/blocks/fx-press-feedback.css'), 'utf8');
  assert.ok(generated.includes(css.trim()));
});

for (const [name, css, body, diagnostic] of [
  ['missing CSS dependency', '\n.d-btn{color:var(--missing)}', null, '没有的变量'],
  ['unscoped body class', '', '<button class="unscoped">保存</button>', 'class 不是 d- 前缀'],
  ['colliding animation name', '\n@keyframes shared{to{opacity:1}}', null, 'keyframes 缺本条 id 前缀'],
  ['unrelated animated properties', '\n.d-btn{transition:all 1s}', null, 'transition:all']
]) {
  test('strict build still rejects ' + name, async t => {
    const { result, output } = await buildFixture(t, css, body);
    assert.equal(result.status, 1, output);
    assert.ok(output.includes(diagnostic), output);
  });
}

test('CSS fallback satisfies an optional variable dependency', async t => {
  const { result, output } = await buildFixture(t, '\n.d-btn{color:var(--optional-brand,#a855f7)}');
  assert.equal(result.status, 0, output);
});

async function publicationFixture(t) {
  const root = await temporary(t);
  for (const name of PUBLIC_PATHS) {
    if (name === 'site' || name === 'agent') {
      await fs.mkdir(path.join(root, name), { recursive: true });
      await fs.writeFile(path.join(root, name, 'example.html'), '<h1>Example</h1>');
    } else {
      await fs.mkdir(path.dirname(path.join(root, name)), { recursive: true });
      await fs.writeFile(path.join(root, name), 'public');
    }
  }
  return root;
}

test('publication includes required assets and excludes maintenance files', async t => {
  const root = await publicationFixture(t);
  for (const name of ['AGENTS.md', 'data/rules.md', 'data/assets/motion/private.json', 'tools/private.mjs', '.git/config']) {
    await fs.mkdir(path.dirname(path.join(root, name)), { recursive: true });
    await fs.writeFile(path.join(root, name), 'not for publication');
  }
  const output = await packageSite(root);
  assert.equal(await fs.readFile(path.join(output, 'data/tokens.json'), 'utf8'), 'public');
  assert.equal(await fs.readFile(path.join(output, 'agent/example.html'), 'utf8'), '<h1>Example</h1>');
  assert.equal(await fs.readFile(path.join(output, '.nojekyll'), 'utf8'), '');
  for (const name of ['AGENTS.md', 'data/rules.md', 'data/assets', 'tools', '.git']) {
    await assert.rejects(fs.stat(path.join(output, name)), { code: 'ENOENT' });
  }
  await fs.writeFile(path.join(output, 'stale.html'), 'old');
  await packageSite(root);
  await assert.rejects(fs.stat(path.join(output, 'stale.html')), { code: 'ENOENT' });
});

test('publication rejects a link to an external directory', async t => {
  const root = await publicationFixture(t);
  const external = await temporary(t);
  await fs.writeFile(path.join(external, 'keep.txt'), 'keep');
  await fs.symlink(external, path.join(root, 'site/external'), process.platform === 'win32' ? 'junction' : 'dir');
  await assert.rejects(packageSite(root), /不允许符号链接/);
  assert.equal(await fs.readFile(path.join(external, 'keep.txt'), 'utf8'), 'keep');
});

test('copied recipes keep the project path and do not prescribe a style', async () => {
  const script = await fs.readFile(path.join(ROOT, 'lab-recipe.js'), 'utf8');
  for (const base of ['http://127.0.0.1:8801/', 'https://example.github.io/frontend-pattern-library/']) {
    const context = {
      window: {}, location: new URL(base + 'motion-lab.html'), URL,
      localStorage: { getItem: () => '["example"]' },
      fetch: async () => ({ ok: true, json: async () => ({ items: [{ id: 'example', t: '示例', cat: '反馈', hasInit: true }] }) }),
      document: { body: {}, querySelectorAll: () => [] },
      MutationObserver: class { observe() {} }
    };
    vm.runInNewContext(script, context);
    const recipe = await context.window.__recipe();
    assert.ok(recipe.includes(base + 'llms.txt'), recipe);
    assert.ok(recipe.includes(base + 'agent/blocks/example.html'), recipe);
    assert.ok(recipe.includes('避免无意义的卡片堆砌'), recipe);
    assert.ok(!recipe.includes('只允许一处'), recipe);
  }
});
