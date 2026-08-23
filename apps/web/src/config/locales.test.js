import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LOCALES,
  PREVIEW_LOCALES,
  SELECTABLE_LOCALES,
  TARGET_LOCALES,
  getContentLocaleCode,
  isSelectableLocale,
} from './locales.js';
import { getEquivalentPath, getLangFromPath } from './routes.js';

test('registers Spanish as a hidden preview and keeps four target locales planned', () => {
  assert.deepEqual(
    TARGET_LOCALES.map(({ code, tag, routePrefix }) => ({ code, tag, routePrefix })),
    [
      { code: 'DA', tag: 'da-DK', routePrefix: '/da' },
      { code: 'NL', tag: 'nl-NL', routePrefix: '/nl' },
      { code: 'NB', tag: 'nb-NO', routePrefix: '/no' },
      { code: 'SV', tag: 'sv-SE', routePrefix: '/sv' },
    ],
  );
  assert.ok(TARGET_LOCALES.every((locale) => locale.release === 'planned'));
  assert.ok(TARGET_LOCALES.every((locale) => locale.selectable === false));
  assert.deepEqual(PREVIEW_LOCALES.map(({ code, tag, routePrefix }) => ({ code, tag, routePrefix })), [
    { code: 'ES', tag: 'es-ES', routePrefix: '/es' },
  ]);
  assert.equal(PREVIEW_LOCALES[0].selectable, false);
});

test('keeps the current language menu unchanged', () => {
  assert.deepEqual(SELECTABLE_LOCALES.map((locale) => locale.code), ['DE', 'EN', 'FR']);
  assert.equal(isSelectableLocale('DA'), false);
  assert.equal(isSelectableLocale('EN'), true);
});

test('keeps existing content-language behavior unchanged', () => {
  assert.equal(getContentLocaleCode('DE'), 'DE');
  assert.equal(getContentLocaleCode('EN'), 'EN');
  assert.equal(getContentLocaleCode('FR'), 'FR');
  assert.equal(getContentLocaleCode('CH'), 'DE');
});

test('keeps locale identifiers and route prefixes unique', () => {
  assert.equal(new Set(LOCALES.map((locale) => locale.code)).size, LOCALES.length);
  assert.equal(new Set(LOCALES.map((locale) => locale.tag)).size, LOCALES.length);
  assert.equal(new Set(LOCALES.map((locale) => locale.routePrefix)).size, LOCALES.length);
});

test('does not expose planned target routes before their language rollout', () => {
  for (const path of ['/da', '/nl', '/no', '/sv']) {
    assert.equal(getLangFromPath(path), 'DE');
  }
  assert.equal(getLangFromPath('/es'), 'ES');
  assert.equal(getLangFromPath('/es/producto'), 'ES');
});

test('preserves existing DE, EN, FR and CH route behavior', () => {
  assert.equal(getLangFromPath('/produkt'), 'DE');
  assert.equal(getLangFromPath('/en/product'), 'EN');
  assert.equal(getLangFromPath('/fr/produit'), 'FR');
  assert.equal(getLangFromPath('/ch/produkt'), 'CH');

  assert.equal(getEquivalentPath('/produkt', 'EN'), '/en/product');
  assert.equal(getEquivalentPath('/en/product', 'FR'), '/fr/produit');
  assert.equal(getEquivalentPath('/fr/produit', 'DE'), '/produkt');
});
