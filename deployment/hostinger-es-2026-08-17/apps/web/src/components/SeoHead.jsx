import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { SITE_URL, findPage, getLangFromPath, getCanonicalPath } from '@/config/routes.js';
import { getLocale, isPreviewLocale, LIVE_LOCALES } from '@/config/locales.js';

const HREF_LANG_BY_CODE = Object.freeze({
  DE: 'de',
  EN: 'en',
  FR: 'fr-FR',
  ES: 'es-ES',
  DA: 'da-DK',
  NL: 'nl-NL',
  NB: 'nb-NO',
  SV: 'sv-SE',
});

/**
 * Centralized, language-aware SEO head.
 * Rendered AFTER <Routes> so its singular tags (html lang, canonical, og:url)
 * win over any page-level Helmet and never accumulate duplicates.
 */
const SeoHead = () => {
  const { pathname } = useLocation();
  const lang = getLangFromPath(pathname);
  const htmlLang = lang === 'DE' ? 'de' : getLocale(lang)?.tag || 'de';
  const isCh = lang === 'CH';
  const isPreview = isPreviewLocale(lang);

  const canonicalPath = getCanonicalPath(pathname);
  const canonical = `${SITE_URL}${canonicalPath}`;

  const page = findPage(pathname);
  const deHref = page ? `${SITE_URL}${page.de}` : null;
  const alternateLocales = page
    ? LIVE_LOCALES.filter(({ code, routeKey }) => code !== 'CH' && page[routeKey])
    : [];

  return (
    <Helmet>
      <html lang={htmlLang} />
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
      {isPreview && <meta name="robots" content="noindex,nofollow" />}
      {/* CH is a standalone regional variant — no hreflang cross-links to DE/EN/FR */}
      {page && !isCh && !isPreview && alternateLocales.map(({ code, routeKey }) => (
        <link
          key={code}
          rel="alternate"
          hrefLang={HREF_LANG_BY_CODE[code]}
          href={`${SITE_URL}${page[routeKey]}`}
        />
      ))}
      {page && !isCh && !isPreview && <link rel="alternate" hrefLang="x-default" href={deHref} />}
    </Helmet>
  );
};

export default SeoHead;
