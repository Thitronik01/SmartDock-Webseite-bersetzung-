// Central DE/EN/FR route mapping for the whole site.
// German is the default language and uses NO url prefix.
// English uses the "/en" prefix.
// French uses the "/fr" prefix (canonical).

export const SITE_URL = 'https://www.smartdock.de';

// Canonical DE / EN / FR page triples. `key` is a stable, language-neutral
// identifier used for language-aware internal links and SEO.
export const PAGES = [
  { key: 'home',          de: '/',                   en: '/en',                        fr: '/fr',                        ch: '/ch' },
  { key: 'product',       de: '/produkt',            en: '/en/product',                fr: '/fr/produit',                ch: '/ch/produkt' },
  { key: 'functions',     de: '/funktionen',         en: '/en/features',               fr: '/fr/fonctions',              ch: '/ch/funktionen' },
  { key: 'features',      de: '/features',           en: '/en/features-legacy',        fr: '/fr/fonctionnalites',        ch: '/ch/features' },
  { key: 'installation',  de: '/installation',       en: '/en/installation',           fr: '/fr/installation',           ch: '/ch/installation' },
  { key: 'faq',           de: '/faq',                en: '/en/faq',                    fr: '/fr/faq',                    ch: '/ch/faq' },
  { key: 'configurator',  de: '/konfigurator',       en: '/en/smartdock-configurator', fr: '/fr/configurateur',          ch: '/ch/konfigurator' },
  { key: 'dealer',        de: '/haendlerfinder',     en: '/en/dealer-finder',          fr: '/fr/revendeurs',             ch: '/ch/haendlerfinder' },
  { key: 'privacy',       de: '/datenschutz',        en: '/en/privacy',                fr: '/fr/confidentialite',        ch: '/ch/datenschutz' },
  { key: 'imprint',       de: '/impressum',          en: '/en/imprint',                fr: '/fr/mentions-legales',       ch: '/ch/impressum' },
  { key: 'terms',         de: '/agb',                en: '/en/terms',                  fr: '/fr/cgv',                    ch: '/ch/agb' },
  { key: 'accessibility', de: '/barrierefreiheit',   en: '/en/accessibility',          fr: '/fr/accessibilite',          ch: '/ch/barrierefreiheit' },
  { key: 'withdrawal',    de: '/widerrufsbelehrung', en: '/en/right-of-withdrawal',    fr: '/fr/droit-de-retractation',  ch: '/ch/widerrufsbelehrung' },
  { key: 'shipping',      de: '/versandbedingungen', en: '/en/shipping',               fr: '/fr/livraison',              ch: '/ch/versandbedingungen' },
  // Contact is a section on the existing homepage (#kontakt). German keeps
  // using the homepage anchor; EN/FR/CH get dedicated routes that render the
  // homepage and auto-scroll to that same section (see App.jsx / HomePage.jsx).
  { key: 'contact',       de: '/#kontakt',           en: '/en/contact',                fr: '/fr/contact',                ch: '/ch/contact' },
];

// Legacy, already-published French URLs under the old "/fr-fr" prefix.
// They keep working as redirect aliases and declare the new "/fr/..." path
// as their canonical target. Derived automatically from PAGES so it can
// never drift from the current French slugs.
export const FR_FR_ALIASES = PAGES.reduce((acc, page) => {
  const oldPath = page.fr === '/fr' ? '/fr-fr' : `/fr-fr${page.fr.slice('/fr'.length)}`;
  acc[oldPath] = page.fr;
  return acc;
}, {});

// Legacy, already-published English URLs. They keep working as aliases and
// declare the new "/en/..." path as their canonical target.
export const EN_ALIASES = {
  '/impressum-en': '/en/imprint',
  '/agb-en': '/en/terms',
  '/barrierefreiheit-en': '/en/accessibility',
  '/widerrufsbelehrung-en': '/en/right-of-withdrawal',
  '/versandbedingungen-en': '/en/shipping',
  // Old published Funktionen/Features URL. Redirects (replace) to /en/features.
  '/en/functions': '/en/features',
};

const LANG_KEYS = { DE: 'de', EN: 'en', FR: 'fr', CH: 'ch' };

const normalize = (p) => {
  if (!p) return '/';
  if (p.length > 1 && p.endsWith('/')) return p.slice(0, -1);
  return p;
};

// The URL is the single source of truth for the active language.
export function getLangFromPath(pathname) {
  const p = normalize(pathname);
  if (p === '/ch' || p.startsWith('/ch/')) return 'CH';
  if (p === '/fr' || p.startsWith('/fr/')) return 'FR';
  if (FR_FR_ALIASES[p]) return 'FR';
  if (p === '/en' || p.startsWith('/en/')) return 'EN';
  if (EN_ALIASES[p]) return 'EN';
  return 'DE';
}

// Resolve a pathname (incl. legacy alias) to its canonical page triple.
export function findPage(pathname) {
  const p = normalize(pathname);
  const target = EN_ALIASES[p] || FR_FR_ALIASES[p] || p;
  return PAGES.find((pg) => pg.de === target || pg.en === target || pg.fr === target || pg.ch === target) || null;
}

// Path to the equivalent page in the requested language.
export function getEquivalentPath(pathname, targetLang) {
  const key = LANG_KEYS[targetLang] || 'de';
  const page = findPage(pathname);
  if (!page) return PAGES[0][key];
  return page[key];
}

// Self-referencing canonical path for the current URL (aliases point forward).
export function getCanonicalPath(pathname) {
  const p = normalize(pathname);
  if (EN_ALIASES[p]) return EN_ALIASES[p];
  if (FR_FR_ALIASES[p]) return FR_FR_ALIASES[p];
  const page = findPage(p);
  if (!page) return p;
  const key = LANG_KEYS[getLangFromPath(p)] || 'de';
  return page[key];
}

// Language-aware internal link for a given page key.
export function pathFor(key, lang) {
  const langKey = LANG_KEYS[lang] || 'de';
  const page = PAGES.find((p) => p.key === key);
  if (!page) return PAGES[0][langKey];
  return page[langKey];
}
