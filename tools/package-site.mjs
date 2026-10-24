#!/usr/bin/env node
// 只打包公开页面与 AI 取料产物；维护数据和工具不进入 Pages artifact。
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const PUBLIC_PATHS = [
  'index.html', 'motion-lab.html', 'design-system.html', 'depth.html',
  'ai-tells.html', 'landing.html', 'dashboard.html',
  'ds-content.js', 'ds-render.js', 'ds-specs.js',
  'lab-more.js', 'lab-extra2.js', 'lab-extra3.js', 'lab-extra4.js', 'lab-recipe.js',
  'llms.txt', 'data/tokens.json', 'agent', 'site'
];

async function copyPublic(source, destination) {
  const info = await fs.lstat(source);
  if (info.isSymbolicLink()) throw new Error('发布白名单内不允许符号链接: ' + source);
  if (info.isDirectory()) {
    await fs.mkdir(destination, { recursive: true });
    for (const name of (await fs.readdir(source)).sort()) {
      if (name.startsWith('.')) throw new Error('发布目录内不允许隐藏文件: ' + name);
      await copyPublic(path.join(source, name), path.join(destination, name));
    }
  } else if (info.isFile()) {
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.copyFile(source, destination);
  } else {
    throw new Error('发布目录内只允许常规文件与目录: ' + source);
  }
}

export async function packageSite(root) {
  root = path.resolve(root);
  const output = path.join(root, '_site');
  // 删除目标固定为工程根下的 _site，不接受任意输出路径。
  if (path.dirname(output) !== root || path.basename(output) !== '_site') throw new Error('非法发布目录');
  for (const name of PUBLIC_PATHS) await fs.lstat(path.join(root, name));
  await fs.rm(output, { recursive: true, force: true });
  await fs.mkdir(output, { recursive: true });
  for (const name of PUBLIC_PATHS) await copyPublic(path.join(root, name), path.join(output, name));
  await fs.writeFile(path.join(output, '.nojekyll'), '');
  return output;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(fileURLToPath(import.meta.url), '..', '..');
  packageSite(root).then(output => console.log('✓ 发布白名单已生成: ' + output)).catch(error => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
