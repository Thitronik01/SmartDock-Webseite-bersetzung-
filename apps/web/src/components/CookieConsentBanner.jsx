
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { useCookieConsent } from '@/hooks/useCookieConsent.js';
import { Button } from '@/components/ui/button';
import { pathFor } from '@/config/routes.js';

const CookieConsentBanner = () => {
  const { t, currentLanguage } = useLanguage();
  const { hasConsented, isLoaded, acceptAll, acceptNecessary } = useCookieConsent();

  const privacyLink = pathFor('privacy', currentLanguage);

  // Do not render anything until the localStorage check is complete
  // or if the user has already consented.
  if (!isLoaded || hasConsented) {
    return null;
  }

  return (
    <AnimatePresence>
      {!hasConsented && (
        <>
          {/* Semi-transparent overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/60"
            aria-hidden="true"
          />

          {/* Floating banner card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 md:max-w-md z-50 bg-card text-card-foreground border border-border shadow-2xl rounded-2xl p-6"
            role="dialog"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-description"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 id="cookie-consent-title" className="text-lg font-semibold mb-2">
                  {t('cookie_title')}
                </h2>
                <p id="cookie-consent-description" className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {t('cookie_desc')}{' '}
                  <Link 
                    to={privacyLink} 
                    className="text-primary hover:underline underline-offset-4 whitespace-nowrap"
                  >
                    {t('cookie_privacy_link')}
                  </Link>
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-xl"
                    onClick={acceptNecessary}
                  >
                    {t('cookie_accept_necessary')}
                  </Button>
                  <Button 
                    className="flex-1 rounded-xl"
                    onClick={acceptAll}
                  >
                    {t('cookie_accept_all')}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
