import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const Translate = ({ children, fallback }) => {
  const { currentLanguage, translateText } = useLanguage();
  const [translated, setTranslated] = useState(children);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const performTranslation = async () => {
      // If it's not a string, we can't translate it
      if (typeof children !== 'string') {
        if (isMounted) setTranslated(children);
        return;
      }

      // If source language, return immediately
      if (currentLanguage === 'DE') {
        if (isMounted) setTranslated(children);
        return;
      }

      if (isMounted) setIsLoading(true);
      
      const result = await translateText(children, currentLanguage);
      
      if (isMounted) {
        setTranslated(result);
        setIsLoading(false);
      }
    };

    performTranslation();

    return () => {
      isMounted = false;
    };
  }, [children, currentLanguage, translateText]);

  return (
    <span className={`transition-opacity duration-300 ${isLoading ? 'opacity-70' : 'opacity-100'}`}>
      {translated || fallback || children}
    </span>
  );
};

export default Translate;