/**
 * CookieConsentContext – single source of truth for cookie consent state.
 * Replaces multiple independent useState instances that could fall out of sync.
 *
 * localStorage key: "cookieConsent"
 * Analytics consent: ONLY when accepted === true AND type === "all" (strict equality).
 */
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'cookieConsent';

function readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Strict check: must be actual boolean true and string "all" or "necessary"
    if (parsed && parsed.accepted === true && typeof parsed.type === 'string') {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function isAnalyticsConsented(stored) {
  return (
    stored !== null &&
    stored.accepted === true &&
    stored.type === 'all'
  );
}

const CookieConsentContext = createContext(null);

export function CookieConsentProvider({ children }) {
  const [stored, setStored] = useState(() => readStorage());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const hasConsented = stored !== null && stored.accepted === true;
  const analyticsConsented = isAnalyticsConsented(stored);
  const consentType = stored?.type ?? null;

  const acceptAll = useCallback(() => {
    const data = { accepted: true, type: 'all', timestamp: new Date().toISOString() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch { /* ignore */ }
    setStored(data);
  }, []);

  const acceptNecessary = useCallback(() => {
    const data = { accepted: true, type: 'necessary', timestamp: new Date().toISOString() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch { /* ignore */ }
    setStored(data);
  }, []);

  /**
   * Revoke + open banner.
   * Called from Footer "Cookie-Einstellungen".
   * After revokeAnalyticsConsent() is triggered by the bridge, a controlled page
   * reload is performed (see AnalyticsConsentBridge) so the already-loaded GA
   * library cannot continue firing. The banner reappears because localStorage
   * is cleared here before the reload.
   */
  const resetConsent = useCallback(() => {
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
    setStored(null);
  }, []);

  const value = {
    stored,
    hasConsented,
    analyticsConsented,
    consentType,
    isLoaded,
    acceptAll,
    acceptNecessary,
    resetConsent,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsentContext() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error('useCookieConsentContext must be used within CookieConsentProvider');
  return ctx;
}
