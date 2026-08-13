
import { useEffect } from 'react';

/**
 * Hook to automatically update the document lang attribute based on the active language.
 * @param {string} currentLanguage - The active language code from context (e.g., 'DE', 'EN')
 */
export const useDocumentLang = (currentLanguage = 'DE') => {
  useEffect(() => {
    // Map internal app language codes to standard BCP 47 language tags
    const langMap = {
      'DE': 'de-DE',
      'EN': 'en',
      'FR': 'fr',
      'NL': 'nl',
      'ES': 'es',
      'IT': 'it'
    };

    const code = langMap[currentLanguage] || 'de-DE';
    document.documentElement.lang = code;
  }, [currentLanguage]);
};
