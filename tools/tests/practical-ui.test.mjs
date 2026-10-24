import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { ASSETS, writeBatch } from '../add-practical-ui.mjs';

async function temporary(t) {
  const directory=await fs.mkdtemp(path.join(os.tmpdir(),'practical-assets-'));
  t.after(()=>fs.rm(directory,{recursive:true,force:true}));
  return directory;
}

test('batch rejects a collision before writing any other asset',async t=>{
  const directory=await temporary(t);
  const existing=path.join(directory,ASSETS.at(-1).id+'.json');
  await fs.writeFile(existing,'existing independent work');
  assert.throws(()=>writeBatch(directory),/Refusing to overwrite/);
  assert.deepEqual(await fs.readdir(directory),[ASSETS.at(-1).id+'.json']);
  assert.equal(await fs.readFile(existing,'utf8'),'existing independent work');
});

test('batch is exactly forty distinct assets and can be regenerated unchanged',async t=>{
  const directory=await temporary(t);
  assert.equal(ASSETS.length,40);
  assert.equal(new Set(ASSETS.map(asset=>asset.id)).size,40);
  writeBatch(directory);
  const before=await Promise.all(ASSETS.map(asset=>fs.readFile(path.join(directory,asset.id+'.json'),'utf8')));
  writeBatch(directory);
  const after=await Promise.all(ASSETS.map(asset=>fs.readFile(path.join(directory,asset.id+'.json'),'utf8')));
  assert.deepEqual(after,before);
  assert.equal((await fs.readdir(directory)).length,40);
});
