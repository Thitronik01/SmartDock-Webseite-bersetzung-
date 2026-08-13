
export const useHrefLang = (currentPath, languages = ['de-DE', 'en', 'fr', 'nl', 'es', 'it']) => {
  const baseUrl = 'https://www.smartdock.de';
  // Ensure the path correctly starts with a slash and avoid trailing slash for the root
  const safePath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
  const cleanPath = safePath === '/' ? '' : safePath;

  const links = languages.map(lang => {
    const isDefault = lang === 'de-DE';
    // Use query parameter for language variations (standard for SPA without explicit localized sub-routes)
    const url = isDefault
      ? `${baseUrl}${cleanPath}`
      : `${baseUrl}${cleanPath}?lang=${lang.split('-')[0]}`;

    return {
      rel: 'alternate',
      hreflang: lang,
      href: url
    };
  });

  // Always include the x-default fallback, pointing to the default language (German)
  links.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: `${baseUrl}${cleanPath}`
  });

  return links;
};
