import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { translation_DE } from '../src/utils/translations/translation_DE.js';
import { translation_EN } from '../src/utils/translations/translation_EN.js';
import { translation_FR } from '../src/utils/translations/translation_FR.js';

const TOOL_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(TOOL_DIR, '../../..');
const REVIEWED_SOURCE = path.join(
  REPO_ROOT,
  'outputs/019fffc2-5353-7cf1-939a-8fd2c800e55c/SmartDock_Website_Texte_Alle_Sprachen_REVIEWED_95PLUS.md',
);

const locale = String(process.argv[2] || 'ES').toUpperCase();
const targetColumn = { DA: 4, ES: 5, NL: 6, NB: 7, SV: 8 }[locale];

if (targetColumn === undefined) {
  throw new Error(`Unsupported target locale: ${locale}`);
}

const normalize = (value) => String(value ?? '')
  .normalize('NFC')
  .replace(/[‘’‚‛“”„‟'"]/g, '"')
  .replace(/\s+/g, ' ')
  .trim();

const cleanCell = (value) => String(value ?? '')
  .replace(/\\\|/g, '|')
  .replace(/<br\s*\/?>/gi, '\n')
  .trim();

const isTranslation = (value) => value && value !== '—' && !value.startsWith('— siehe');

const splitTableRow = (line) => {
  const cells = [];
  let cell = '';
  let escaped = false;

  for (const character of line.slice(1, -1)) {
    if (escaped) {
      cell += character;
      escaped = false;
    } else if (character === '\\') {
      escaped = true;
      cell += character;
    } else if (character === '|') {
      cells.push(cleanCell(cell));
      cell = '';
    } else {
      cell += character;
    }
  }
  cells.push(cleanCell(cell));
  return cells;
};

const source = fs.readFileSync(REVIEWED_SOURCE, 'utf8').split('## Appendix A')[0];
const rows = source
  .split(/\r?\n/)
  .filter((line) => line.startsWith('|') && line.endsWith('|'))
  .map(splitTableRow)
  .filter((cells) => cells.length === 10 || cells.length === 11)
  .filter((cells) => !cells[0].startsWith('---') && cells[1] !== 'DE');

const records = rows.map((cells) => {
  const offset = cells.length === 11 ? 1 : 0;
  return {
    id: cells[0],
    context: offset ? cells[1] : cells[0],
    de: cells[1 + offset],
    en: cells[2 + offset],
    fr: cells[3 + offset],
    target: cells[targetColumn + offset],
  };
}).filter((record) => isTranslation(record.target));

const semanticValue = (id) => {
  const values = new Set(
    records
      .filter((record) => record.id.split('/')[0].trim() === id)
      .map((record) => record.target),
  );
  if (values.size !== 1) {
    throw new Error(`Expected one ${locale} value for semantic id ${id}, got ${values.size}`);
  }
  return [...values][0];
};

const ES_OVERRIDES = {
  rev_title: () => semanticValue('withdrawal.hero.title'),
  imp_title: () => semanticValue('imprint.hero.title'),
  imp_desc: () => `${semanticValue('imprint.hero.description')}.`,
  imp_s1_sub2: () => 'Dirección',
  imp_s1_sub3: () => 'Información de contacto',
  imp_s1_tel1: () => 'Central:',
  imp_s1_tel2: () => 'Soporte:',
  imp_s1_reg1: () => 'Tribunal de registro:',
  imp_s1_reg2: () => 'Número del Registro Mercantil:',
  imp_s2_p1: () => 'Para consultas sobre productos y servicios SMARTDOCK:',
  imp_s3_p2: () => 'El seguro de responsabilidad civil profesional tiene cobertura mundial, excepto en Estados Unidos, Canadá y sus territorios.',
  imp_s4_p2: () => 'Como prestador de servicios somos responsables de nuestros propios contenidos en estas páginas conforme al § 7(1) TMG y a la legislación general. Sin embargo, de acuerdo con los §§ 8–10 TMG, no estamos obligados a supervisar información de terceros transmitida o almacenada ni a investigar circunstancias que indiquen una actividad ilícita.',
  imp_footer: () => 'Encontrará más información en nuestra política de privacidad y en nuestros términos y condiciones.',
  html_lang: () => 'es-ES',
  df_found: () => semanticValue('dealer.results.count_label.other'),
  conf_succ_title: () => '¡Gracias!',
  config_nonbinding_description: () => semanticValue('configurator.disclaimer.description'),
  app_dl_app_store: () => 'App Store',
  app_dl_google_play: () => 'Google Play',
  step2_system: () => 'Seleccionar sistema para [Fabricante]',
  sd_hero_badge: () => 'Navigate in control.',
  sd_mod_ecu_title: () => 'ECU',
  sd_mod_tcu_title: () => 'TCU',
  sd_mod_tcup_title: () => 'TCU-P',
  sd_mod_acu_title: () => 'ACU',
  sd_mod_wcu_title: () => 'WCU',
  hero_badge_origin: () => 'Made in Germany',
  footer_smartdock_desc: () => 'Atraca de forma fácil e inteligente con SMARTDOCK. Control moderno e intuitivo de embarcaciones, desarrollado en Alemania.',
};

const overrides = locale === 'ES' ? ES_OVERRIDES : {};
const dictionaries = { de: translation_DE, en: translation_EN, fr: translation_FR };
const translated = {};
const unresolved = [];

for (const [key, deValue] of Object.entries(translation_DE)) {
  if (overrides[key]) {
    translated[key] = overrides[key]();
    continue;
  }

  const explicit = records.filter((record) => {
    const keys = [...record.context.matchAll(/`([A-Za-z0-9_]+)`/g)].map((match) => match[1]);
    return keys.includes(key);
  });

  const sourceValues = {
    de: normalize(deValue),
    en: normalize(translation_EN[key]),
    fr: normalize(translation_FR[key]),
  };
  const matched = explicit.length ? explicit : records.filter((record) => (
    (sourceValues.de && normalize(record.de) === sourceValues.de)
    || (sourceValues.en && normalize(record.en) === sourceValues.en)
    || (sourceValues.fr && normalize(record.fr) === sourceValues.fr)
  ));
  const values = [...new Set(matched.map((record) => record.target).filter(isTranslation))];

  if (values.length === 1) translated[key] = values[0];
  else unresolved.push({ key, values });
}

if (locale === 'ES') {
  translated.nav_installation = semanticValue('global.nav.installation');
  translated.imp_s4_trademarks = semanticValue('imprint.disclaimer.trademarks');
}

const sourceTranslations = {};
const sourceGroups = new Map();
for (const record of records) {
  if (!isTranslation(record.de)) continue;
  const sourceKey = normalize(record.de);
  const values = sourceGroups.get(sourceKey) || new Set();
  values.add(record.target);
  sourceGroups.set(sourceKey, values);
}
for (const [sourceText, values] of sourceGroups) {
  if (values.size === 1) sourceTranslations[sourceText] = [...values][0];
}

if (locale === 'ES') {
  sourceTranslations[normalize('Hier findest du detaillierte Schritt-für-Schritt Anleitungen und technische Dokumentationen für die Installation unserer SMARTDOCK Module.')] = semanticValue('installation.hero.subtitle');
  sourceTranslations[normalize('Installationsanleitungen für SMARTDOCK ECU und TCU Module.')] = semanticValue('seo.installation.description');
  sourceTranslations[normalize('Fehler beim Laden der Installationsanleitungen. Bitte versuchen Sie es später erneut.')] = 'No se han podido cargar las instrucciones de instalación. Inténtalo de nuevo más tarde.';
  sourceTranslations[normalize('INSTALLATION')] = 'INSTALACIÓN';
  sourceTranslations[normalize('-10 bis +60 °C')] = '-10 a +60 °C';
  sourceTranslations[normalize('-40 bis +85 °C')] = '-40 a +85 °C';
  sourceTranslations[normalize('Abmessungen (B x H x T)')] = 'Dimensiones (An × Al × Pr)';
  sourceTranslations[normalize('ca. 90 g')] = 'aprox. 90 g';
  sourceTranslations[normalize('ca. 91 g')] = 'aprox. 91 g';
  sourceTranslations[normalize('ca. 96 g')] = 'aprox. 96 g';
}

const serializeObject = (name, object) => {
  const entries = Object.entries(object).map(
    ([key, value]) => `  ${JSON.stringify(key)}: ${JSON.stringify(value)},`,
  );
  return `export const ${name} = {\n${entries.join('\n')}\n};\n`;
};

const dictionaryPath = path.join(TOOL_DIR, `../src/utils/translations/translation_${locale}.js`);
const sourceMapPath = path.join(TOOL_DIR, `../src/utils/translations/sourceTranslation_${locale}.js`);
fs.writeFileSync(dictionaryPath, serializeObject(`translation_${locale}`, translated), 'utf8');
fs.writeFileSync(sourceMapPath, serializeObject(`sourceTranslation_${locale}`, sourceTranslations), 'utf8');

console.log(JSON.stringify({
  locale,
  dictionaryEntries: Object.keys(translated).length,
  sourceEntries: Object.keys(sourceTranslations).length,
  unresolved: unresolved.length,
  unresolvedKeys: unresolved.map(({ key }) => key),
}, null, 2));
