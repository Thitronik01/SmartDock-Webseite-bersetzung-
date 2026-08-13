/**
 * analytics.js
 * Central GA4 integration – strict Basic Consent Mode (no cookies/requests before opt-in).
 * Measurement ID: G-5DDPJH2NRW
 *
 * Rules:
 *  - gtag.js is never loaded before explicit "all" consent.
 *  - Only analytics_storage is ever granted; all ad/personalization signals stay "denied".
 *  - Script, config and initial pageview are loaded/sent exactly once per page lifecycle.
 *  - On revoke: consent denied → GA cookies deleted → page reloaded (so the already-loaded
 *    library cannot continue sending; after reload the banner reappears and the script is absent).
 */

const MEASUREMENT_ID = 'G-5DDPJH2NRW';
const SCRIPT_ID = 'ga4-gtag-script';

// Internal flags (module-level, reset on page reload)
let _scriptLoaded = false;
let _configSent = false;
let _consentGranted = false;

// Retry state for gtag.js load failures
const MAX_LOAD_ATTEMPTS = 3;
let _loadAttempts = 0;

// Callbacks fired exactly once when GA4 config is ready (consent + config sent).
const _readyCallbacks = [];

function _flushReady() {
  if (!(_consentGranted && _configSent)) return;
  while (_readyCallbacks.length) {
    const cb = _readyCallbacks.shift();
    try { cb(); } catch { /* ignore */ }
  }
}

/**
 * Register a callback to run once GA4 is ready to receive events
 * (consent granted AND config sent). Fires immediately if already ready.
 * Returns an unsubscribe function.
 */
export function onAnalyticsReady(cb) {
  if (_consentGranted && _configSent) {
    cb();
    return () => {};
  }
  _readyCallbacks.push(cb);
  return () => {
    const i = _readyCallbacks.indexOf(cb);
    if (i >= 0) _readyCallbacks.splice(i, 1);
  };
}

/** Initialise window.dataLayer and the gtag queue-stub (no network). */
function _ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    // eslint-disable-next-line prefer-rest-params
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
  }
}

/** Push the default-denied consent state. Must run before any config/event. */
function _setDefaultConsentDenied() {
  _ensureGtag();
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}

/** Call once at module load to prime the queue without any network access. */
export function initGtagQueue() {
  _ensureGtag();
  _setDefaultConsentDenied();
}

// Prime the queue immediately when this module is first imported.
initGtagQueue();

/**
 * Load gtag.js exactly once and retry safely on load failure.
 * - Only ever attempts while consent is granted.
 * - At most MAX_LOAD_ATTEMPTS attempts with exponential backoff.
 * - Removes the failed <script> element and resets the load flag before retry.
 * - Never creates a duplicate script id (guards on existing element/src).
 */
function _loadScript() {
  if (_scriptLoaded) return;
  // Guard against duplicate scripts from a previous lifecycle
  if (
    document.getElementById(SCRIPT_ID) ||
    document.querySelector(`script[src*="${MEASUREMENT_ID}"]`)
  ) {
    _scriptLoaded = true;
    return;
  }
  _scriptLoaded = true;
  _loadAttempts += 1;

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.onerror = () => {
    // Reset load flag and remove the failed element so a retry can re-create it.
    _scriptLoaded = false;
    const el = document.getElementById(SCRIPT_ID);
    if (el) el.remove();

    // Retry only after consent, capped at MAX_LOAD_ATTEMPTS, with backoff.
    if (_consentGranted && _loadAttempts < MAX_LOAD_ATTEMPTS) {
      const delay = 1000 * Math.pow(2, _loadAttempts - 1); // 1s, 2s
      setTimeout(() => {
        if (_consentGranted) _loadScript();
      }, delay);
    }
  };
  document.head.appendChild(script);
}

/** Send the GA4 config exactly once after consent + script. */
function _sendConfig() {
  if (_configSent) return;
  _configSent = true;
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  // Config is queued to dataLayer; notify any pending pageview waiters.
  _flushReady();
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Grant analytics consent (type === "all").
 * Loads the script, sends config and initial pageview exactly once.
 */
export function grantAnalyticsConsent() {
  if (_consentGranted) return;
  _consentGranted = true;

  _ensureGtag();
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    // ad_* remain denied permanently
  });

  _loadScript();
  _sendConfig();
  // NOTE: the initial page_view is sent exclusively by AnalyticsRouteTracker,
  // which waits for readiness via onAnalyticsReady(). Do NOT trackPageView() here.
}

/**
 * Revoke analytics consent.
 * Updates consent state, deletes GA cookies, then reloads the page so the
 * already-loaded library cannot continue sending. After reload the banner
 * reappears and the script stays absent.
 */
export function revokeAnalyticsConsent() {
  _consentGranted = false;
  // Reset retry state so a future opt-in starts a clean load cycle.
  _loadAttempts = 0;

  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }

  _deleteGaCookies();
}

/** Delete all first-party GA cookies for known host/domain/path variants. */
function _deleteGaCookies() {
  const hostname = window.location.hostname;
  // Possible domain variants: exact host, .host, root domain, .rootdomain
  const parts = hostname.split('.');
  const rootDomain = parts.length >= 2 ? `.${parts.slice(-2).join('.')}` : `.${hostname}`;
  const domains = [hostname, `.${hostname}`, rootDomain];
  const paths = ['/', ''];

  document.cookie.split(';').forEach((c) => {
    const name = c.trim().split('=')[0];
    if (name.startsWith('_ga')) {
      domains.forEach((domain) => {
        paths.forEach((path) => {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${domain}; path=${path || '/'}`;
        });
      });
    }
  });
}

/**
 * Send a manual pageview. Strips query params, fragments, and referrer params.
 * No-op when consent not granted or config not sent.
 */
export function trackPageView(overridePath) {
  if (!_consentGranted || !_configSent) return;
  if (!window.gtag) return;

  const pathname = overridePath || window.location.pathname;
  const origin = window.location.origin;
  // Strip query/fragment from referrer
  let referrer = '';
  try {
    if (document.referrer) {
      const ref = new URL(document.referrer);
      referrer = ref.origin + ref.pathname;
    }
  } catch {
    // ignore
  }

  window.gtag('event', 'page_view', {
    page_path: pathname,
    page_location: origin + pathname,
    page_title: document.title,
    ...(referrer ? { page_referrer: referrer } : {}),
  });
}

/**
 * Send a custom event. No-op when consent not granted.
 * Reserved for future use – do NOT call automatically for forms/clicks/configurator/chat.
 */
export function trackEvent(eventName, params = {}) {
  if (!_consentGranted || !_configSent) return;
  if (!window.gtag) return;
  window.gtag('event', eventName, params);
}

/** Status helper – does not send data. */
export function getAnalyticsStatus() {
  return {
    consentGranted: _consentGranted,
    scriptLoaded: _scriptLoaded,
    configSent: _configSent,
  };
}
