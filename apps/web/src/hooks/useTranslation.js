
import { useState, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

export const useTranslation = () => {
  const { translateText, currentLanguage } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  const translate = useCallback(async (germanText) => {
    setIsLoading(true);
    try {
      const result = await translateText(germanText);
      return result;
    } finally {
      setIsLoading(false);
    }
  }, [translateText, currentLanguage]);

  return { translate, currentLanguage, isLoading };
};
