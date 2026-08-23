
import { translation_DE } from './translation_DE.js';
import { translation_EN } from './translation_EN.js';
import { translation_FR } from './translation_FR.js';
import { translation_ES } from './translation_ES.js';
import { sourceTranslation_ES } from './sourceTranslation_ES.js';

export const translations = {
  DE: translation_DE,
  EN: translation_EN,
  FR: translation_FR,
  ES: translation_ES,
};

export const sourceTranslations = {
  ES: sourceTranslation_ES,
};

const normalizeSourceText = (value) => String(value ?? '')
  .normalize('NFC')
  .replace(/[‘’‚‛“”„‟'"]/g, '"')
  .replace(/\s+/g, ' ')
  .trim();

export const translateSourceText = (text, language) => {
  if (typeof text !== 'string' || language === 'DE') return text;
  const translated = sourceTranslations[language]?.[normalizeSourceText(text)];
  return translated || (sourceTranslations[language] ? `[${language} missing]` : text);
};

export const getAvailableLanguages = () => Object.keys(translations);
