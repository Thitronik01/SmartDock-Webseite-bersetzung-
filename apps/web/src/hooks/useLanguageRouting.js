/**
 * Legacy hook.
 *
 * Language <-> route resolution is now handled centrally by the URL-driven
 * routing system (see src/config/routes.js, App.jsx and LanguageContext).
 * The active language is derived from the URL, so the old imperative
 * DE/EN legal-page redirects are no longer needed and would conflict with
 * the central logic. This is kept as a no-op so existing imports keep working.
 */
export const useLanguageRouting = () => {
  // intentionally empty
};
