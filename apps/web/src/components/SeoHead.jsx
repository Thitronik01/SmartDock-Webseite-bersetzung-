import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { SITE_URL, findPage, getLangFromPath, getCanonicalPath } from '@/config/routes.js';

/**
 * Centralized, language-aware SEO head.
 * Rendered AFTER <Routes> so its singular tags (html lang, canonical, og:url)
 * win over any page-level Helmet and never accumulate duplicates.
 */
const SeoHead = () => {
  const { pathname } = useLocation();
  const lang = getLangFromPath(pathname);
  const htmlLang = lang === 'EN' ? 'en' : lang === 'FR' ? 'fr-FR' : lang === 'CH' ? 'de-CH' : 'de';
  const isCh = lang === 'CH';

  const canonicalPath = getCanonicalPath(pathname);
  const canonical = `${SITE_URL}${canonicalPath}`;

  const page = findPage(pathname);
  const deHref = page ? `${SITE_URL}${page.de}` : null;
  const enHref = page ? `${SITE_URL}${page.en}` : null;
  const frHref = page ? `${SITE_URL}${page.fr}` : null;

  return (
    <Helmet>
      <html lang={htmlLang} />
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
      {/* CH is a standalone regional variant — no hreflang cross-links to DE/EN/FR */}
      {page && !isCh && <link rel="alternate" hrefLang="de" href={deHref} />}
      {page && !isCh && <link rel="alternate" hrefLang="en" href={enHref} />}
      {page && !isCh && <link rel="alternate" hrefLang="fr-FR" href={frHref} />}
      {page && !isCh && <link rel="alternate" hrefLang="x-default" href={deHref} />}
    </Helmet>
  );
};

export default SeoHead;
