/**
 * AnalyticsRouteTracker – SPA pageview tracking for react-router-dom v6/v7.
 *
 * Rules:
 *  - Tracks each unique pathname change exactly once (no re-render duplicates).
 *  - Hash/anchor-only changes (#kontakt etc.) do NOT produce a pageview.
 *  - Query parameters are excluded from page_path, page_location, and dedup key.
 *  - Reads document.title after a small delay so SEO/Helmet has updated it.
 *  - No-ops when analytics consent is not granted.
 *
 * Mounted exactly once inside BrowserRouter (in AppContent).
 */
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookieConsentContext } from '@/contexts/CookieConsentContext.jsx';
import { trackPageView, onAnalyticsReady } from '@/lib/analytics.js';

export default function AnalyticsRouteTracker() {
  const location = useLocation();
  const { analyticsConsented } = useCookieConsentContext();
  const lastTrackedRef = useRef(null);

  useEffect(() => {
    if (!analyticsConsented) return;

    const pathname = location.pathname; // no query, no hash

    // Skip if same pathname (re-render or hash/query change only)
    if (lastTrackedRef.current === pathname) return;

    let cancelled = false;
    let timer = null;

    // Wait until GA4 config is ready before sending, so the initial pageview
    // is emitted exactly once — whether consent is granted mid-visit or a
    // stored type:"all" grants synchronously on reload.
    const unsubscribe = onAnalyticsReady(() => {
      if (cancelled) return;
      if (lastTrackedRef.current === pathname) return;
      lastTrackedRef.current = pathname;
      // Delay slightly so react-helmet/document.title updates first.
      timer = setTimeout(() => {
        trackPageView(pathname);
      }, 50);
    });

    return () => {
      cancelled = true;
      unsubscribe();
      if (timer) clearTimeout(timer);
    };
  }, [location.pathname, analyticsConsented]);

  return null;
}
