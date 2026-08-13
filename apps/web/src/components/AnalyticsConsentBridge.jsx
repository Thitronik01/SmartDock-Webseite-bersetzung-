/**
 * AnalyticsConsentBridge – observes central consent state and drives GA4.
 *
 * Grant:  analyticsConsented === true  → grantAnalyticsConsent()
 * Revoke: analyticsConsented === false → revokeAnalyticsConsent()
 *         then (if consent was previously granted) page reload so the
 *         already-loaded GA library cannot continue sending.
 *
 * Mounted exactly once inside CookieConsentProvider and BrowserRouter.
 * Renders nothing.
 */
import { useEffect, useRef } from 'react';
import { useCookieConsentContext } from '@/contexts/CookieConsentContext.jsx';
import { grantAnalyticsConsent, revokeAnalyticsConsent } from '@/lib/analytics.js';

export default function AnalyticsConsentBridge() {
  const { analyticsConsented, isLoaded } = useCookieConsentContext();
  const prevConsentedRef = useRef(null); // null = not yet evaluated

  useEffect(() => {
    if (!isLoaded) return;

    const prev = prevConsentedRef.current;
    prevConsentedRef.current = analyticsConsented;

    if (analyticsConsented) {
      grantAnalyticsConsent();
    } else {
      // Only revoke+reload if consent was previously granted in this page lifecycle
      if (prev === true) {
        revokeAnalyticsConsent();
        // Controlled reload: banner reappears because localStorage is already cleared
        // by resetConsent() in the context before this effect runs.
        window.location.reload();
      } else {
        // First load with no/necessary consent – just ensure denied state
        revokeAnalyticsConsent();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [analyticsConsented, isLoaded]);

  return null;
}
