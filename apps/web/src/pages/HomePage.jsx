import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero.jsx';
import SmartdockIntro from '@/components/SmartdockIntro.jsx';
import SmartdockApp from '@/components/SmartdockApp.jsx';
import SmartdockModules from '@/components/SmartdockModules.jsx';
import SmartdockDealerFinder from '@/components/SmartdockDealerFinder.jsx';
import SmartdockConfigurator from '@/components/SmartdockConfigurator.jsx';
import SmartdockAppDownload from '@/components/SmartdockAppDownload.jsx';
import Kontakt from '@/components/Kontakt.jsx';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // /en/contact and /fr/contact render the homepage and must auto-scroll to
    // the existing #kontakt section without ever exposing a #kontakt hash in
    // the visible URL.
    const isContactRoute = location.pathname === '/en/contact' || location.pathname === '/fr/contact' || location.pathname === '/ch/contact';
    const preserveScroll = location.state?.preserveScroll;

    if (location.hash || isContactRoute) {
      // Language switch onto a contact route: jump straight to #kontakt
      // without animating, so there is no visible top-then-down jump.
      const scrollBehavior = preserveScroll ? 'instant' : 'smooth';
      const delay = preserveScroll ? 0 : 100;

      setTimeout(() => {
        const element = isContactRoute
          ? document.getElementById('kontakt')
          : document.querySelector(location.hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: scrollBehavior
          });
        }
      }, delay);
    } else if (preserveScroll) {
      // Language switch on a non-contact route: restore the exact scroll
      // position from before navigating, once the new page has its final
      // height (double rAF), clamped to the tallest valid position.
      const savedScrollY = typeof location.state.scrollY === 'number' ? location.state.scrollY : 0;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const targetScroll = Math.min(savedScrollY, Math.max(0, maxScroll));
          window.scrollTo({ top: Math.max(0, targetScroll), left: 0, behavior: 'auto' });
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  return (
    <div className="bg-background w-full flex-grow flex flex-col">
      <Helmet>
        <html lang="de-DE" />
        <title>SMARTDOCK - Intelligente Hafenmanöver-Lösung</title>
        <meta name="description" content="Vollständige Kontrolle und Sicherheit bei jedem Manöver. Entwickelt für anspruchsvolle Kapitäne, die auf Präzision und Innovation setzen." />
      </Helmet>

      <Hero />
      <SmartdockIntro />
      <SmartdockApp />
      <SmartdockModules />
      <SmartdockDealerFinder />
      <SmartdockConfigurator />
      
      {/* Floating App Download Section with generous vertical spacing */}
      <div className="relative z-10">
        <SmartdockAppDownload />
      </div>
      
      <Kontakt />
    </div>
  );
};

export default HomePage;