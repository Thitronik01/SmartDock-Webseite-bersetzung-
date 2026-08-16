
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations as staticTranslations } from '@/utils/translations/index.js';
import { COUNTRIES } from '@/translations.js';
import { getLangFromPath, getEquivalentPath } from '@/config/routes.js';
import pb from '@/lib/pocketbaseClient.js';

export const LanguageContext = createContext();

const normalizeSourceText = (value) => String(value ?? '')
  .replace(/[‘’‚‛“”„‟'\"]/g, '"')
  .replace(/\s+/g, ' ')
  .trim();

const createSourceKeyIndex = (dictionary = {}) => {
  const index = new Map();
  Object.entries(dictionary).forEach(([key, value]) => {
    if (typeof value !== 'string' || !value.trim()) return;
    const normalized = normalizeSourceText(value);
    const keys = index.get(normalized) || [];
    keys.push(key);
    index.set(normalized, keys);
  });
  return index;
};

const staticSourceKeysByText = createSourceKeyIndex(staticTranslations.DE);

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // The URL is the single source of truth for DE / EN / FR.
  const currentLanguage = getLangFromPath(location.pathname); // 'DE' | 'EN' | 'FR'
  
  const [countryCode, setCountryCode] = useState('DE');
  const currentCountry = COUNTRIES.find(c => c.code === countryCode) || COUNTRIES[0];

  const [dbTranslations, setDbTranslations] = useState({ DE: {}, EN: {}, FR: {} });
  const dbSourceKeysByText = useMemo(
    () => createSourceKeyIndex(dbTranslations.DE),
    [dbTranslations.DE]
  );

  // Fetch translations from PocketBase on mount
  useEffect(() => {
    let isMounted = true;
    const loadTranslations = async () => {
      try {
        console.log("Loading translations from PocketBase...");
        
        // Fetch translation collections (with $autoCancel: false per rules)
        const [deList, enList] = await Promise.all([
          pb.collection('translation_DE').getFullList({ $autoCancel: false }),
          pb.collection('translation_EN').getFullList({ $autoCancel: false })
        ]);
        
        if (isMounted) {
          // Convert lists to dictionary objects: { [key]: value }
          const loadedDE = deList.reduce((acc, item) => ({ ...acc, [item.key]: item.de }), {});
          const loadedEN = enList.reduce((acc, item) => ({ ...acc, [item.key]: item.en }), {});
          
          setDbTranslations(prev => ({
            ...prev,
            DE: loadedDE,
            EN: loadedEN
          }));
          console.log(`Successfully loaded ${Object.keys(loadedDE).length} DE and ${Object.keys(loadedEN).length} EN translations from DB.`);
        }
      } catch (err) {
        console.error("Failed to load translations from DB:", err);
      }
    };
    
    loadTranslations();
    
    return () => { isMounted = false; };
  }, []);

  const setCurrentLanguage = (lang) => {
    const upperLang = (lang || '').toUpperCase();
    if (!['DE', 'EN', 'FR'].includes(upperLang)) return;
    if (upperLang === currentLanguage) return;

    // Navigate to the equivalent localized URL using the central page mapping,
    // preserving query parameters and hash anchors. The URL then drives the
    // active language for the whole app.
    const target = getEquivalentPath(location.pathname, upperLang);
    const scrollY = window.scrollY;
    navigate(`${target}${location.search}${location.hash}`, {
      state: { preserveScroll: true, scrollY },
    });
  };

  const t = useCallback((key, options = {}) => {
    if (!key) return "";
    // CH uses German content — map to DE for all translation lookups
    const langKey = currentLanguage === 'CH' ? 'DE' : currentLanguage;
    const count = Number(options.count);
    const hasCount = Number.isFinite(count);
    let lookupKeys = [key];

    if (hasCount) {
      let pluralCategory;
      try {
        pluralCategory = new Intl.PluralRules(langKey.toLowerCase()).select(count);
      } catch {
        pluralCategory = count === 1 ? 'one' : 'other';
      }
      lookupKeys = [`${key}_${pluralCategory}`, key];
    }

    // Try the count-specific key before the base key in the current language.
    for (const lookupKey of lookupKeys) {
      if (dbTranslations[langKey] && dbTranslations[langKey][lookupKey] !== undefined) {
        return dbTranslations[langKey][lookupKey];
      }
      if (staticTranslations[langKey] && staticTranslations[langKey][lookupKey] !== undefined) {
        return staticTranslations[langKey][lookupKey];
      }
    }
    
    // Apply the same lookup order to the German fallback.
    for (const lookupKey of lookupKeys) {
      if (dbTranslations['DE'] && dbTranslations['DE'][lookupKey] !== undefined) {
        return dbTranslations['DE'][lookupKey];
      }
      if (staticTranslations['DE'] && staticTranslations['DE'][lookupKey] !== undefined) {
        return staticTranslations['DE'][lookupKey];
      }
    }
    
    // Final fallback: Return the raw key
    return key;
  }, [currentLanguage, dbTranslations]);

  const translateText = useCallback(async (text, requestedLanguage = currentLanguage) => {
    if (typeof text !== 'string') return text;

    const langKey = requestedLanguage === 'CH' ? 'DE' : requestedLanguage;
    if (langKey === 'DE') return text;

    const normalized = normalizeSourceText(text);
    const candidateKeys = [
      ...(dbSourceKeysByText.get(normalized) || []),
      ...(staticSourceKeysByText.get(normalized) || []),
    ];

    for (const key of candidateKeys) {
      const dbValue = dbTranslations[langKey]?.[key];
      if (typeof dbValue === 'string' && dbValue.trim()) return dbValue;

      const staticValue = staticTranslations[langKey]?.[key];
      if (typeof staticValue === 'string' && staticValue.trim()) return staticValue;
    }

    return text;
  }, [currentLanguage, dbSourceKeysByText, dbTranslations]);

  return (
    <LanguageContext.Provider value={{ 
      countryCode,
      setCountryCode, 
      t, 
      currentCountry, 
      currentLanguage, 
      setCurrentLanguage, 
      translateText 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
