/**
 * tools/literal.mjs —— 括号配平扫描器（与 extract.mjs 同一套规则，独立成模块给 emit 用）。
 * 跳过字符串 / 模板字符串 / 注释 / 正则字面量，找出配平的括号区间。
 */

export function skipString(src, i) {
  const q = src[i];
  i += 1;
  while (i < src.length) {
    const c = src[i];
    if (c === '\\') { i += 2; continue; }
    if (c === q) return i + 1;
    i += 1;
  }
  throw new Error('unterminated string at ' + i);
}

export function skipTemplate(src, i) {
  i += 1;
  while (i < src.length) {
    const c = src[i];
    if (c === '\\') { i += 2; continue; }
    if (c === '`') return i + 1;
    if (c === '$' && src[i + 1] === '{') {
      i = matchBracket(src, i + 1) + 1;
      continue;
    }
    i += 1;
  }
  throw new Error('unterminated template literal at ' + i);
}

export function skipRegex(src, i) {
  i += 1;
  let inClass = false;
  while (i < src.length) {
    const c = src[i];
    if (c === '\\') { i += 2; continue; }
    if (c === '\n') throw new Error('unterminated regex at ' + i);
    if (c === '[') { inClass = true; i += 1; continue; }
    if (c === ']') { inClass = false; i += 1; continue; }
    if (c === '/' && !inClass) {
      i += 1;
      while (i < src.length && /[a-z]/i.test(src[i])) i += 1;
      return i;
    }
    i += 1;
  }
  throw new Error('unterminated regex at ' + i);
}

const REGEX_PREV = new Set(['(', '[', '{', ',', ';', ':', '=', '!', '&', '|', '?', '+', '-', '*', '%', '^', '~', '<', '>', null]);
const PAIRS = { '(': ')', '[': ']', '{': '}' };

export function matchBracket(src, openIdx) {
  if (!PAIRS[src[openIdx]]) throw new Error('not an opening bracket at ' + openIdx);
  const stack = [src[openIdx]];
  let i = openIdx + 1;
  let prev = null;
  while (i < src.length) {
    const c = src[i];
    const n = src[i + 1];
    if (c === '/' && n === '/') { const nl = src.indexOf('\n', i); i = nl < 0 ? src.length : nl; continue; }
    if (c === '/' && n === '*') { const e = src.indexOf('*/', i + 2); i = e < 0 ? src.length : e + 2; continue; }
    if (c === '/' && REGEX_PREV.has(prev)) { i = skipRegex(src, i); prev = 'a'; continue; }
    if (c === "'" || c === '"') { i = skipString(src, i); prev = 'a'; continue; }
    if (c === '`') { i = skipTemplate(src, i); prev = 'a'; continue; }
    if (PAIRS[c]) { stack.push(c); prev = c; i += 1; continue; }
    if (c === ')' || c === ']' || c === '}') {
      const top = stack[stack.length - 1];
      if (PAIRS[top] !== c) throw new Error('bracket mismatch: ' + top + ' closed by ' + c + ' at ' + i);
      stack.pop();
      if (!stack.length) return i;
      prev = c; i += 1; continue;
    }
    if (!/\s/.test(c)) prev = /[A-Za-z0-9_$]/.test(c) ? 'a' : c;
    i += 1;
  }
  throw new Error('unbalanced literal: EOF with stack ' + stack.join(''));
}

export function findLiteral(src, anchor, openCh) {
  const at = src.indexOf(anchor);
  if (at < 0) throw new Error('anchor not found: ' + anchor);
  let i = at + anchor.length;
  while (i < src.length && /\s/.test(src[i])) i += 1;
  if (src[i] !== openCh) throw new Error('expected ' + openCh + ' after anchor ' + anchor + ' at ' + i);
  const end = matchBracket(src, i);
  return { open: i, close: end, anchor: at, literal: src.slice(i, end + 1) };
}

export function runLiteral(literal, label) {
  try {
    return vmRun('(' + literal + ')', label);
  } catch (err) {
    throw new Error('vm 求值失败（' + label + '）: ' + err.message);
  }
}

import vm from 'node:vm';
export function vmRun(code, filename) {
  return vm.runInNewContext(code, {}, { filename });
}
export function runFile(code, filename) {
  const windowObj = {};
  const quiet = () => {};
  const sandbox = { window: windowObj, console: { log: quiet, warn: quiet, error: quiet, info: quiet, debug: quiet } };
  sandbox.self = windowObj;
  vm.runInContext(code, vm.createContext(sandbox), { filename });
  return windowObj;
}
