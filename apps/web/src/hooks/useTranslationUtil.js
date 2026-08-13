
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext.jsx';
import { translations } from '@/utils/translations/index.js';

/**
 * Retrieves a translation string outside of React components.
 * @param {string} key - The translation key
 * @param {string} language - The language code (e.g., 'DE', 'EN')
 * @returns {string} The translated string or the key if not found
 */
export const getTranslation = (key, language = 'DE') => {
  const langData = translations[language] || translations['DE'];
  return langData[key] || key;
};

/**
 * Returns the entire translation object for a specific language.
 * @param {string} language - The language code
 * @returns {Object} The translation key-value map
 */
export const getAllTranslations = (language = 'DE') => {
  return translations[language] || translations['DE'];
};

/**
 * Hook to access the translation function directly if needed,
 * though normally useLanguage() from LanguageContext is preferred.
 */
export const useTranslationUtil = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    // Fallback if used outside provider
    return {
      t: (key) => getTranslation(key, 'DE'),
      language: 'DE'
    };
  }

  return {
    t: context.t,
    language: context.currentLanguage
  };
};
