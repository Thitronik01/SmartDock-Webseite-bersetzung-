#!/usr/bin/env node
/**
 * Abgleich eines beliebigen Wörterbuch-Stands gegen die QA-Sollwerte.
 *
 * Die Sollwerte liest das Skript aus 04_AENDERUNGEN_WOERTERBUECHER.md, das im
 * selben Ordner liegen muss. Damit gibt es nur eine Datenquelle — die Tabelle,
 * die auch ein Mensch liest.
 *
 * Aufruf:
 *   node abgleich.mjs <pfad-zum-translations-ordner> [pfad-zur-04-datei]
 *
 * Beispiel:
 *   node abgleich.mjs "C:/Projekte/website-abzug/apps/web/src/utils/translations"
 *
 * Erwartet dort translation_DE.js, translation_EN.js, translation_FR.js.
 * Gibt je Sprache aus, welche der geänderten Schlüssel bereits den Sollwert
 * tragen, welche noch den Altwert tragen, welche einen dritten Wert tragen
 * (echter Konflikt, Handarbeit) und welche fehlen.
 *
 * Ändert nichts. Reines Lesen.
 */

import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve, join } from 'node:path';

const dir = process.argv[2];
const tabellenPfad = process.argv[3] ?? new URL('./04_AENDERUNGEN_WOERTERBUECHER.md', import.meta.url);

if (!dir) {
  console.error('Aufruf: node abgleich.mjs <pfad-zum-translations-ordner> [pfad-zur-04-datei]');
  process.exit(2);
}
/* --- Sollwerte aus der Markdown-Tabelle lesen ------------------------------ */

const ERWARTET = { DE: 47, EN: 28, FR: 42 };

function ladeSollwerte(pfad) {
  const text = readFileSync(pfad, 'utf8');
  const soll = { DE: {}, EN: {}, FR: {} };
  let aktuell = null;

  for (const zeile of text.split(/\r?\n/)) {
    const kopf = zeile.match(/^##\s+(DE|EN|FR)\s+—/);
    if (kopf) { aktuell = kopf[1]; continue; }
    if (!aktuell || !zeile.startsWith('|')) continue;

    const spalten = zeile.split('|').slice(1, -1).map((s) => s.trim());
    if (spalten.length !== 4) continue;
    const [nr, schluessel, alt, neu] = spalten;
    if (!/^\d+$/.test(nr)) continue;                       // Kopf- und Trennzeile

    const key = schluessel.replace(/^`|`$/g, '');
    soll[aktuell][key] = { alt, neu };
  }
  return soll;
}

let soll;
try {
  soll = ladeSollwerte(tabellenPfad);
} catch (e) {
  console.error(`04_AENDERUNGEN_WOERTERBUECHER.md nicht lesbar: ${e.message}`);
  process.exit(2);
}

let tabelleOk = true;
for (const [lang, n] of Object.entries(ERWARTET)) {
  const ist = Object.keys(soll[lang]).length;
  if (ist !== n) {
    console.error(`WARNUNG: für ${lang} wurden ${ist} Einträge gelesen, erwartet sind ${n}. Die Tabelle ist unvollständig oder beschädigt.`);
    tabelleOk = false;
  }
}
if (tabelleOk) console.log('Sollwerte geladen: DE 47, EN 28, FR 42 — vollständig.');

/* --- Wörterbücher vergleichen --------------------------------------------- */

const flach = (o, p = '') =>
  Object.entries(o).flatMap(([k, v]) =>
    v && typeof v === 'object' && !Array.isArray(v) ? flach(v, p + k + '.') : [[p + k, v]]
  );

const norm = (s) => (typeof s === 'string' ? s.normalize('NFC') : s);

let gesamt = { soll: 0, alt: 0, konflikt: 0, fehlt: 0 };
const details = [];

for (const lang of ['DE', 'EN', 'FR']) {
  const datei = join(resolve(dir), `translation_${lang}.js`);
  let woerterbuch;
  try {
    const mod = await import(pathToFileURL(datei).href);
    woerterbuch = Object.fromEntries(flach(mod.default ?? Object.values(mod)[0]));
  } catch (e) {
    console.error(`\n[${lang}] Datei nicht lesbar: ${datei}\n      ${e.message}`);
    continue;
  }

  const eintraege = soll[lang];
  const z = { soll: 0, alt: 0, konflikt: 0, fehlt: 0 };

  for (const [key, { alt, neu }] of Object.entries(eintraege)) {
    if (!(key in woerterbuch)) {
      z.fehlt++;
      details.push([lang, 'FEHLT', key, '', neu]);
    } else if (norm(woerterbuch[key]) === norm(neu)) {
      z.soll++;
    } else if (norm(woerterbuch[key]) === norm(alt)) {
      z.alt++;
      details.push([lang, 'ALTWERT', key, woerterbuch[key], neu]);
    } else {
      z.konflikt++;
      details.push([lang, 'KONFLIKT', key, woerterbuch[key], neu]);
    }
  }

  const n = Object.keys(eintraege).length;
  console.log(
    `\n[${lang}] ${n} geänderte Schlüssel geprüft, Wörterbuch hat ${Object.keys(woerterbuch).length} Schlüssel\n` +
    `      bereits Sollwert   : ${z.soll}\n` +
    `      noch Altwert       : ${z.alt}   ← übernehmen\n` +
    `      dritter Wert       : ${z.konflikt}   ← manuell entscheiden\n` +
    `      fehlender Schlüssel: ${z.fehlt}`
  );
  for (const k of Object.keys(gesamt)) gesamt[k] += z[k];
}

console.log(
  `\n=== Gesamt ===\n` +
  `bereits Sollwert : ${gesamt.soll}\n` +
  `noch Altwert     : ${gesamt.alt}\n` +
  `dritter Wert     : ${gesamt.konflikt}\n` +
  `fehlend          : ${gesamt.fehlt}`
);

if (details.length) {
  console.log('\n=== Zu bearbeiten ===');
  for (const [lang, art, key, ist, sollwert] of details) {
    console.log(`\n[${lang}] ${art}  ${key}`);
    if (ist !== '') console.log(`  ist  : ${ist}`);
    console.log(`  soll : ${sollwert}`);
  }
} else {
  console.log('\nNichts zu tun — der geprüfte Stand trägt alle Sollwerte.');
}
