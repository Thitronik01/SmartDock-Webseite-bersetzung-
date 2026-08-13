import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles the on-mount scroll behaviour for a page.
 *
 * By default a freshly mounted page scrolls to the top (the existing,
 * unchanged behaviour for normal navigation).
 *
 * When the navigation was a language switch, `LanguageContext.setCurrentLanguage`
 * marks it via `location.state = { preserveScroll: true, scrollY }`. In that
 * case we must NOT jump to the top — instead we restore the previous scroll
 * position once the new page has rendered (double `requestAnimationFrame` so
 * the DOM already has its final height), clamped to the tallest valid
 * position in case the target page is shorter.
 */
export function useScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.preserveScroll) {
      const savedScrollY = typeof location.state.scrollY === 'number' ? location.state.scrollY : 0;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const targetScroll = Math.min(savedScrollY, Math.max(0, maxScroll));
          window.scrollTo({ top: Math.max(0, targetScroll), left: 0, behavior: 'auto' });
        });
      });

      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Intentionally run once per mount, mirroring the previous per-page effects.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
