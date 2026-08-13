import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTop = () => {
    const { pathname, state } = useLocation();

    useLayoutEffect(() => {
        // Language switches mark their navigation with `preserveScroll` and the
        // scroll position captured right before navigating. In that case we
        // must NOT jump to the top — instead restore the previous position
        // once the new page has fully rendered (so its final height is known).
        if (state?.preserveScroll) {
            const savedScrollY = typeof state.scrollY === 'number' ? state.scrollY : 0;

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
    }, [pathname, state]);

    return null;
}

export default ScrollToTop;
