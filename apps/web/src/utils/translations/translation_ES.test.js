import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { translation_ES } from './translation_ES.js';
import { translation_DE } from './translation_DE.js';
import { sourceTranslation_ES } from './sourceTranslation_ES.js';

const SRC_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

const resolveImport = (fromFile, specifier) => {
  const base = specifier.startsWith('@/')
    ? path.join(SRC_ROOT, specifier.slice(2))
    : path.resolve(path.dirname(fromFile), specifier);
  const candidates = [base, `${base}.js`, `${base}.jsx`, path.join(base, 'index.js')];
  return candidates.find((candidate) => fs.existsSync(candidate)) || null;
};

const activeSourceFiles = () => {
  const pending = [path.join(SRC_ROOT, 'App.jsx')];
  const visited = new Set();

  while (pending.length) {
    const file = pending.pop();
    if (visited.has(file)) continue;
    visited.add(file);

    const source = fs.readFileSync(file, 'utf8');
    for (const match of source.matchAll(/(?:from\s+|import\s*)['"]([^'"]+)['"]/g)) {
      if (!match[1].startsWith('.') && !match[1].startsWith('@/')) continue;
      const imported = resolveImport(file, match[1]);
      if (imported?.startsWith(SRC_ROOT)) pending.push(imported);
    }
  }
  return [...visited];
};

const normalizeSourceText = (value) => String(value ?? '')
  .normalize('NFC')
  .replace(/[‘’‚‛“”„‟'"]/g, '"')
  .replace(/\s+/g, ' ')
  .trim();

const germanSourceKeys = new Map();
for (const [key, value] of Object.entries(translation_DE)) {
  const normalized = normalizeSourceText(value);
  const keys = germanSourceKeys.get(normalized) || [];
  keys.push(key);
  germanSourceKeys.set(normalized, keys);
}

const hasSpanishSourceTranslation = (sourceText) => {
  const normalized = normalizeSourceText(sourceText);
  if (sourceTranslation_ES[normalized]) return true;
  return (germanSourceKeys.get(normalized) || []).some((key) => translation_ES[key]);
};

test('Spanish dictionaries contain reviewed production content without placeholders', () => {
  assert.ok(Object.keys(translation_ES).length >= 570);
  assert.ok(Object.keys(sourceTranslation_ES).length >= 650);
  assert.equal(Object.values(translation_ES).some((value) => /\[ES(?: missing)?\]/.test(value)), false);
  assert.equal(Object.values(sourceTranslation_ES).some((value) => /\[ES(?: missing)?\]/.test(value)), false);
});

test('every literal translation key in the active app graph has Spanish content', () => {
  const keys = new Set();
  for (const file of activeSourceFiles()) {
    const source = fs.readFileSync(file, 'utf8');
    for (const match of source.matchAll(/\bt\(\s*['"]([^'"]+)['"]/g)) keys.add(match[1]);
  }

  const missing = [...keys].filter((key) => !translation_ES[key]);
  assert.deepEqual(missing, []);
});

test('dynamic translation-key literals in the active app graph have Spanish content', () => {
  const keys = new Set();
  for (const file of activeSourceFiles()) {
    const source = fs.readFileSync(file, 'utf8');
    for (const match of source.matchAll(/['"]([a-z][a-z0-9]*(?:_[a-z0-9]+)+)['"]/g)) {
      if (translation_DE[match[1]] !== undefined) keys.add(match[1]);
    }
  }

  const missing = [...keys].filter((key) => !translation_ES[key]);
  assert.deepEqual(missing, []);
});

test('active Translate children and installation source triplets resolve to Spanish', () => {
  const sourceTexts = new Set();
  for (const file of activeSourceFiles()) {
    const source = fs.readFileSync(file, 'utf8');
    for (const match of source.matchAll(/<Translate>\s*([^<{][^<]*?)\s*<\/Translate>/gs)) {
      sourceTexts.add(match[1]);
    }
    for (const match of source.matchAll(/\btt\(\s*(['"])(.*?)\1/gs)) {
      sourceTexts.add(match[2]);
    }
  }

  const missing = [...sourceTexts].filter((text) => !hasSpanishSourceTranslation(text));
  assert.deepEqual(missing, []);
});
