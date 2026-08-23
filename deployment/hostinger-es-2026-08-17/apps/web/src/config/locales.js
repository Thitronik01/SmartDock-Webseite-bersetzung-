const LIVE = 'live';
const PREVIEW = 'preview';
const PLANNED = 'planned';

const defineLocale = (locale) => Object.freeze(locale);

export const LOCALES = Object.freeze([
  defineLocale({
    code: 'DE',
    tag: 'de-DE',
    routeKey: 'de',
    routePrefix: '',
    label: 'Deutsch',
    flag: '🇩🇪',
    contentCode: 'DE',
    release: LIVE,
    selectable: true,
  }),
  defineLocale({
    code: 'EN',
    tag: 'en-GB',
    routeKey: 'en',
    routePrefix: '/en',
    label: 'English',
    flag: '🇬🇧',
    contentCode: 'EN',
    release: LIVE,
    selectable: true,
  }),
  defineLocale({
    code: 'FR',
    tag: 'fr-FR',
    routeKey: 'fr',
    routePrefix: '/fr',
    label: 'Français',
    flag: '🇫🇷',
    contentCode: 'FR',
    release: LIVE,
    selectable: true,
  }),
  defineLocale({
    code: 'CH',
    tag: 'de-CH',
    routeKey: 'ch',
    routePrefix: '/ch',
    label: 'Schweiz',
    flag: '🇨🇭',
    contentCode: 'DE',
    release: LIVE,
    selectable: false,
  }),
  defineLocale({
    code: 'DA',
    tag: 'da-DK',
    routeKey: 'da',
    routePrefix: '/da',
    label: 'Dansk',
    flag: '🇩🇰',
    contentCode: 'DA',
    release: PLANNED,
    selectable: false,
  }),
  defineLocale({
    code: 'ES',
    tag: 'es-ES',
    routeKey: 'es',
    routePrefix: '/es',
    label: 'Español',
    flag: '🇪🇸',
    contentCode: 'ES',
    release: PREVIEW,
    selectable: false,
  }),
  defineLocale({
    code: 'NL',
    tag: 'nl-NL',
    routeKey: 'nl',
    routePrefix: '/nl',
    label: 'Nederlands',
    flag: '🇳🇱',
    contentCode: 'NL',
    release: PLANNED,
    selectable: false,
  }),
  defineLocale({
    code: 'NB',
    tag: 'nb-NO',
    routeKey: 'nb',
    routePrefix: '/no',
    label: 'Norsk bokmål',
    flag: '🇳🇴',
    contentCode: 'NB',
    release: PLANNED,
    selectable: false,
  }),
  defineLocale({
    code: 'SV',
    tag: 'sv-SE',
    routeKey: 'sv',
    routePrefix: '/sv',
    label: 'Svenska',
    flag: '🇸🇪',
    contentCode: 'SV',
    release: PLANNED,
    selectable: false,
  }),
]);

const LOCALE_BY_CODE = new Map(LOCALES.map((locale) => [locale.code, locale]));

export const LIVE_LOCALES = Object.freeze(
  LOCALES.filter((locale) => locale.release === LIVE),
);

export const SELECTABLE_LOCALES = Object.freeze(
  LIVE_LOCALES.filter((locale) => locale.selectable),
);

export const ROUTABLE_LOCALES = Object.freeze(
  LOCALES.filter((locale) => locale.release === LIVE || locale.release === PREVIEW),
);

export const PREVIEW_LOCALES = Object.freeze(
  LOCALES.filter((locale) => locale.release === PREVIEW),
);

export const TARGET_LOCALES = Object.freeze(
  LOCALES.filter((locale) => locale.release === PLANNED),
);

export const getLocale = (code) => LOCALE_BY_CODE.get(String(code || '').toUpperCase()) || null;

export const getContentLocaleCode = (code) => getLocale(code)?.contentCode || 'DE';

export const isSelectableLocale = (code) => Boolean(getLocale(code)?.selectable);

export const isPreviewLocale = (code) => getLocale(code)?.release === PREVIEW;

export const allowsGermanFallback = (code) => {
  const locale = getLocale(code);
  return !locale || locale.release === LIVE;
};
