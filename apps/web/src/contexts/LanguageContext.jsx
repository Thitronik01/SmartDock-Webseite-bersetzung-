
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations as staticTranslations } from '@/utils/translations/index.js';
import { COUNTRIES } from '@/translations.js';
import { getLangFromPath, getEquivalentPath } from '@/config/routes.js';
import pb from '@/lib/pocketbaseClient.js';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // The URL is the single source of truth for DE / EN / FR.
  const currentLanguage = getLangFromPath(location.pathname); // 'DE' | 'EN' | 'FR'
  
  const [countryCode, setCountryCode] = useState('DE');
  const currentCountry = COUNTRIES.find(c => c.code === countryCode) || COUNTRIES[0];

  const [dbTranslations, setDbTranslations] = useState({ DE: {}, EN: {}, FR: {} });

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

  const t = useCallback((key) => {
    if (!key) return "";
    // CH uses German content — map to DE for all translation lookups
    const langKey = currentLanguage === 'CH' ? 'DE' : currentLanguage;

    // 1. Try DB translations for current language
    if (dbTranslations[langKey] && dbTranslations[langKey][key] !== undefined) {
      return dbTranslations[langKey][key];
    }
    
    // 2. Try static translations for current language
    if (staticTranslations[langKey] && staticTranslations[langKey][key] !== undefined) {
      return staticTranslations[langKey][key];
    }
    
    // 3. Try DB fallback (DE)
    if (dbTranslations['DE'] && dbTranslations['DE'][key] !== undefined) {
      return dbTranslations['DE'][key];
    }
    
    // 4. Try static fallback (DE)
    if (staticTranslations['DE'] && staticTranslations['DE'][key] !== undefined) {
      return staticTranslations['DE'][key];
    }
    
    // Final fallback: Return the raw key
    return key;
  }, [currentLanguage, dbTranslations]);

  const translateText = async (text) => text;

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
