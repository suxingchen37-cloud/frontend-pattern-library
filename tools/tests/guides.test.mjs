import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { guideProducts } from '../guides.mjs';

async function fixture(t) {
  const root=await fs.mkdtemp(path.join(os.tmpdir(),'pattern-guides-'));
  t.after(()=>fs.rm(root,{recursive:true,force:true}));
  const directory=path.join(root,'guides');
  await fs.mkdir(directory);
  const item={id:'example',title:'Example',when:'When needed'};
  const manifest=async guides=>fs.writeFile(path.join(directory,'index.json'),JSON.stringify({schema:1,guides}));
  await manifest([item]);
  await fs.writeFile(path.join(directory,'example.md'),'# Example\r\n\r\nBody');
  return {root,directory,item,manifest};
}

test('guide routing points to normalized published Markdown',async t=>{
  const {root}=await fixture(t);
  const products=guideProducts(root);
  const index=JSON.parse(products.get('agent/guides/index.json'));
  assert.equal(index.guides[0].when,'When needed');
  assert.equal(index.guides[0].file,'example.md');
  assert.equal(products.get('agent/guides/'+index.guides[0].file),'# Example\n\nBody\n');
  assert.equal(products.size,2);
});

test('missing or unlisted guide sources cannot silently disappear from publication',async t=>{
  const {root,directory}=await fixture(t);
  await fs.writeFile(path.join(directory,'unlisted.md'),'# Unlisted');
  assert.throws(()=>guideProducts(root),/unlisted guides/);
  await fs.unlink(path.join(directory,'unlisted.md'));
  await fs.unlink(path.join(directory,'example.md'));
  assert.throws(()=>guideProducts(root),{code:'ENOENT'});
});

test('guide IDs cannot escape their directory or collide',async t=>{
  const {root,item,manifest}=await fixture(t);
  await manifest([{...item,id:'../outside'}]);
  assert.throws(()=>guideProducts(root),/invalid or duplicate/);
  await manifest([item,item]);
  assert.throws(()=>guideProducts(root),/invalid or duplicate/);
});
