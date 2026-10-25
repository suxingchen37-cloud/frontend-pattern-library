import fs from 'node:fs';
import path from 'node:path';

// Keep source Markdown and its AI routing metadata in the same publication transaction.
export function guideProducts(dataRoot) {
  const directory = path.join(dataRoot, 'guides');
  const products = new Map();
  if (!fs.existsSync(directory)) return products;
  const manifest = JSON.parse(fs.readFileSync(path.join(directory, 'index.json'), 'utf8'));
  if (manifest.schema !== 1 || !Array.isArray(manifest.guides) || !manifest.guides.length) {
    throw new Error('guides/index.json: expected schema 1 and a nonempty guides array');
  }
  const ids = new Set();
  const guides = manifest.guides.map(({ id, title, when }) => {
    if (typeof id !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id) || ids.has(id)) {
      throw new Error('guides/index.json: invalid or duplicate guide id: ' + id);
    }
    if (![title, when].every(value => typeof value === 'string' && value.trim())) {
      throw new Error('guides/index.json: missing title or when for ' + id);
    }
    ids.add(id);
    const file = id + '.md';
    const text = fs.readFileSync(path.join(directory, file), 'utf8').replace(/\r\n/g, '\n');
    if (!text.trim()) throw new Error('guides/' + file + ': empty guide');
    products.set('agent/guides/' + file, text.endsWith('\n') ? text : text + '\n');
    return { id, title, when, file };
  });
  const extras = fs.readdirSync(directory).filter(file => file.endsWith('.md') && !ids.has(file.slice(0, -3)));
  if (extras.length) throw new Error('guides/index.json: unlisted guides: ' + extras.join(', '));
  products.set('agent/guides/index.json', JSON.stringify({ schema: 1, guides }, null, 2) + '\n');
  return products;
}
