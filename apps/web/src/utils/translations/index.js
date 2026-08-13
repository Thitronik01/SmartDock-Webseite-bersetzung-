
import { translation_DE } from './translation_DE.js';
import { translation_EN } from './translation_EN.js';
import { translation_FR } from './translation_FR.js';

export const translations = {
  DE: translation_DE,
  EN: translation_EN,
  FR: translation_FR
};

export const getAvailableLanguages = () => Object.keys(translations);
