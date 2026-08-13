import { useState, useCallback } from 'react';
import apiServerClient from '@/lib/apiServerClient.js';

export const useTranslationService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const translateText = useCallback(async (text, targetLanguage) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiServerClient.fetch('/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, targetLanguage })
      });
      
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Translation failed');
      }
      
      const data = await response.json();
      return data.translatedText;
    } catch (err) {
      setError(err.message);
      console.error('Translation error:', err);
      return text; // Fallback to original text on failure
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { translateText, isLoading, error };
};

export default useTranslationService;