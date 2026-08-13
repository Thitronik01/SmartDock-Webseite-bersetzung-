
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const DisclaimerBanner = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-muted border-t border-border flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8 shrink-0">
      <p className="text-sm text-muted-foreground text-center leading-relaxed max-w-7xl">
        {t('disclaimer_text')}
      </p>
    </div>
  );
};

export default DisclaimerBanner;
