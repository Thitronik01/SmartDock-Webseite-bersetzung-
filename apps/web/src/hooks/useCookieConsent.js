/**
 * useCookieConsent – thin proxy that delegates to CookieConsentContext.
 * All components (CookieConsentBanner, Footer, AnalyticsConsentBridge) share
 * the same reactive state via the central provider.
 *
 * Public API is backward-compatible with the previous standalone hook.
 */
import { useCookieConsentContext } from '@/contexts/CookieConsentContext.jsx';

export const useCookieConsent = () => {
  const {
    hasConsented,
    analyticsConsented,
    consentType,
    isLoaded,
    acceptAll,
    acceptNecessary,
    resetConsent,
  } = useCookieConsentContext();

  return {
    hasConsented,
    analyticsConsented,
    consentType,
    isLoaded,
    acceptAll,
    acceptNecessary,
    resetConsent,
  };
};
