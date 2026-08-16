import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { CookieConsentProvider } from '@/contexts/CookieConsentContext.jsx';
import AnalyticsConsentBridge from '@/components/AnalyticsConsentBridge.jsx';
import AnalyticsRouteTracker from '@/components/AnalyticsRouteTracker.jsx';
import { Toaster } from '@/components/ui/sonner.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CookieConsentBanner from '@/components/CookieConsentBanner.jsx';
import HomePage from '@/pages/HomePage.jsx';
import ConfiguratorPage from '@/pages/ConfiguratorPage.jsx';
import DealerFinderPage from '@/pages/DealerFinderPage.jsx';
import FAQPage from '@/pages/FAQPage.jsx';
import ProduktPage from '@/pages/ProduktPage.jsx';
import FunktionenPage from '@/pages/FunktionenPage.jsx';
import FeaturesPage from '@/pages/FeaturesPage.jsx';
import InstallationPage from '@/pages/InstallationPage.jsx';
import PrivacyPage from '@/pages/PrivacyPage.jsx';
import PrivacyPage_FR from '@/pages/PrivacyPage_FR.jsx';
import ImpressumPage from '@/pages/ImpressumPage.jsx';
import ImpressumPage_EN from '@/pages/ImpressumPage_EN.jsx';
import ImpressumPage_FR from '@/pages/ImpressumPage_FR.jsx';
import AGBPage from '@/pages/AGBPage.jsx';
import AGBPage_EN from '@/pages/AGBPage_EN.jsx';
import AccessibilityPage from '@/pages/AccessibilityPage.jsx';
import AccessibilityPage_EN from '@/pages/AccessibilityPage_EN.jsx';
import WiderrufsbelehrungPage from '@/pages/WiderrufsbelehrungPage.jsx';
import WiderrufsbelehrungPage_EN from '@/pages/WiderrufsbelehrungPage_EN.jsx';
import VersandbedingungPage from '@/pages/VersandbedingungPage.jsx';
import VersandbedingungPage_EN from '@/pages/VersandbedingungPage_EN.jsx';
import NotFoundPage from '@/pages/NotFoundPage.jsx';
import { LanguageProvider } from '@/contexts/LanguageContext.jsx';
import ErrorBoundary from '@/components/ErrorBoundary.jsx';
import SeoHead from '@/components/SeoHead.jsx';
import { FR_FR_ALIASES, EN_ALIASES, getCanonicalPath } from '@/config/routes.js';

// Legacy /fr-fr(/...) alias: forward to the exact equivalent new /fr(/...)
// URL, preserving the query string and hash. The canonical French version
// now lives under /fr. Each old sub-path maps to its matching new sub-path
// (never a blanket redirect to /fr).
const FrFrAliasRedirect = () => {
  const { pathname, search, hash } = useLocation();
  const target = FR_FR_ALIASES[pathname] || getCanonicalPath(pathname);
  return <Navigate to={`${target}${search}${hash}`} replace />;
};

// Legacy /en/functions URL: redirect (replace, no history entry) straight to
// the current canonical English Funktionen/Features URL (/en/features).
// Never a redirect chain/loop and never to the English homepage.
const EnFunctionsAliasRedirect = () => {
  const { search, hash } = useLocation();
  const target = EN_ALIASES['/en/functions'];
  return <Navigate to={`${target}${search}${hash}`} replace />;
};

const AppContent = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground w-full font-sans antialiased overflow-x-hidden relative">
      <Header />

      {/* Main content with flex-grow to push footer to the bottom */}
      <main className="flex-grow flex flex-col w-full relative">
        <Routes>
          {/* ---------- German routes (default, no prefix) ---------- */}
          <Route path="/" element={<HomePage />} />
          <Route path="/produkt" element={<ProduktPage />} />
          <Route path="/funktionen" element={<FunktionenPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/installation" element={<InstallationPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/konfigurator" element={<ConfiguratorPage />} />
          <Route path="/haendlerfinder" element={<DealerFinderPage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/agb" element={<AGBPage />} />
          <Route path="/barrierefreiheit" element={<AccessibilityPage />} />
          <Route path="/widerrufsbelehrung" element={<WiderrufsbelehrungPage />} />
          <Route path="/versandbedingungen" element={<VersandbedingungPage />} />

          {/* ---------- English routes (/en prefix) ---------- */}
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/product" element={<ProduktPage />} />
          <Route path="/en/features" element={<FunktionenPage />} />
          <Route path="/en/functions" element={<EnFunctionsAliasRedirect />} />
          <Route path="/en/features-legacy" element={<FeaturesPage />} />
          <Route path="/en/installation" element={<InstallationPage />} />
          <Route path="/en/faq" element={<FAQPage />} />
          <Route path="/en/contact" element={<HomePage />} />
          <Route path="/en/smartdock-configurator" element={<ConfiguratorPage />} />
          <Route path="/en/dealer-finder" element={<DealerFinderPage />} />
          <Route path="/en/privacy" element={<PrivacyPage />} />
          <Route path="/en/imprint" element={<ImpressumPage_EN />} />
          <Route path="/en/terms" element={<AGBPage_EN />} />
          <Route path="/en/accessibility" element={<AccessibilityPage_EN />} />
          <Route path="/en/right-of-withdrawal" element={<WiderrufsbelehrungPage_EN />} />
          <Route path="/en/shipping" element={<VersandbedingungPage_EN />} />

          {/* ---------- French routes (/fr prefix, canonical) ---------- */}
          <Route path="/fr" element={<HomePage />} />
          <Route path="/fr/produit" element={<ProduktPage />} />
          <Route path="/fr/fonctions" element={<FunktionenPage />} />
          <Route path="/fr/fonctionnalites" element={<FeaturesPage />} />
          <Route path="/fr/installation" element={<InstallationPage />} />
          <Route path="/fr/faq" element={<FAQPage />} />
          <Route path="/fr/contact" element={<HomePage />} />
          <Route path="/fr/configurateur" element={<ConfiguratorPage />} />
          <Route path="/fr/revendeurs" element={<DealerFinderPage />} />
          <Route path="/fr/confidentialite" element={<PrivacyPage_FR />} />
          <Route path="/fr/mentions-legales" element={<ImpressumPage_FR />} />
          <Route path="/fr/cgv" element={<AGBPage />} />
          <Route path="/fr/accessibilite" element={<AccessibilityPage />} />
          <Route path="/fr/droit-de-retractation" element={<WiderrufsbelehrungPage />} />
          <Route path="/fr/livraison" element={<VersandbedingungPage />} />

          {/* ---------- Legacy /fr-fr(/...) aliases -> redirect (replace) to the exact new /fr(/...) URL ---------- */}
          <Route path="/fr-fr" element={<FrFrAliasRedirect />} />
          <Route path="/fr-fr/produit" element={<FrFrAliasRedirect />} />
          <Route path="/fr-fr/fonctions" element={<FrFrAliasRedirect />} />
          <Route path="/fr-fr/fonctionnalites" element={<FrFrAliasRedirect />} />
          <Route path="/fr-fr/installation" element={<FrFrAliasRedirect />} />
          <Route path="/fr-fr/faq" element={<FrFrAliasRedirect />} />
          <Route path="/fr-fr/configurateur" element={<FrFrAliasRedirect />} />
          <Route path="/fr-fr/revendeurs" element={<FrFrAliasRedirect />} />
          <Route path="/fr-fr/confidentialite" element={<FrFrAliasRedirect />} />
          <Route path="/fr-fr/mentions-legales" element={<FrFrAliasRedirect />} />
          <Route path="/fr-fr/cgv" element={<FrFrAliasRedirect />} />
          <Route path="/fr-fr/accessibilite" element={<FrFrAliasRedirect />} />
          <Route path="/fr-fr/droit-de-retractation" element={<FrFrAliasRedirect />} />
          <Route path="/fr-fr/livraison" element={<FrFrAliasRedirect />} />

          {/* ---------- Legacy English aliases (kept working) ---------- */}
          <Route path="/impressum-en" element={<ImpressumPage_EN />} />
          <Route path="/agb-en" element={<AGBPage_EN />} />
          <Route path="/barrierefreiheit-en" element={<AccessibilityPage_EN />} />
          <Route path="/widerrufsbelehrung-en" element={<WiderrufsbelehrungPage_EN />} />
          <Route path="/versandbedingungen-en" element={<VersandbedingungPage_EN />} />

          {/* ---------- Swiss CH routes (/ch prefix — mirrors DE, fixed to CH) ---------- */}
          <Route path="/ch" element={<HomePage />} />
          <Route path="/ch/produkt" element={<ProduktPage />} />
          <Route path="/ch/funktionen" element={<FunktionenPage />} />
          <Route path="/ch/features" element={<FeaturesPage />} />
          <Route path="/ch/installation" element={<InstallationPage />} />
          <Route path="/ch/faq" element={<FAQPage />} />
          <Route path="/ch/contact" element={<HomePage />} />
          <Route path="/ch/konfigurator" element={<ConfiguratorPage />} />
          <Route path="/ch/haendlerfinder" element={<DealerFinderPage />} />
          <Route path="/ch/datenschutz" element={<PrivacyPage />} />
          <Route path="/ch/impressum" element={<ImpressumPage />} />
          <Route path="/ch/agb" element={<AGBPage />} />
          <Route path="/ch/barrierefreiheit" element={<AccessibilityPage />} />
          <Route path="/ch/widerrufsbelehrung" element={<WiderrufsbelehrungPage />} />
          <Route path="/ch/versandbedingungen" element={<VersandbedingungPage />} />
          <Route path="/ch/*" element={<NotFoundPage lang="DE" />} />

          {/* ---------- Language-aware 404 handling ---------- */}
          <Route path="/fr/*" element={<NotFoundPage lang="FR" />} />
          <Route path="/en/*" element={<NotFoundPage lang="EN" />} />
          <Route path="*" element={<NotFoundPage lang="DE" />} />
        </Routes>
      </main>

      {/* Footer Area */}
      <div className="flex flex-col w-full shrink-0">
        <Footer />
      </div>

      {/* Centralized, language-aware SEO (canonical / hreflang / og:url / html lang).
          Rendered after <Routes> so it wins over page-level Helmet tags. */}
      <SeoHead />

      <CookieConsentBanner />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <CookieConsentProvider>
        <BrowserRouter>
          <LanguageProvider>
            <AnalyticsConsentBridge />
            <AnalyticsRouteTracker />
            <AppContent />
          </LanguageProvider>
        </BrowserRouter>
      </CookieConsentProvider>
    </ErrorBoundary>
  );
}

export default App;
