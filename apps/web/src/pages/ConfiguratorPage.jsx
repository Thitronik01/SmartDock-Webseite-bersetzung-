
import React from 'react';
import { Helmet } from 'react-helmet';
import { ConfiguratorProvider } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import ConfiguratorLayout from '@/components/configurator/ConfiguratorLayout.jsx';
import Breadcrumb from '@/components/Breadcrumb.jsx';

const ConfiguratorPage = () => {
  const { currentLanguage } = useLanguage();
  const isEN = currentLanguage === 'EN';
  const isFR = currentLanguage === 'FR';
  const htmlLang = isFR ? 'fr' : (isEN ? 'en' : 'de');
  const pageTitle = isFR ? 'Configurateur SMARTDOCK' : (isEN ? 'SMARTDOCK Configurator' : 'SMARTDOCK Konfigurator');
  const pageDesc = isFR ? 'Configurez votre système en quelques étapes' : (isEN ? 'Configure your system in a few steps' : 'Konfiguriere dein System in wenigen Schritten');
  const homeLabel = isFR ? 'Accueil' : (isEN ? 'Home' : 'Startseite');
  const configLabel = isFR ? 'Configurateur' : (isEN ? 'Configurator' : 'Konfigurator');

  return (
    <ConfiguratorProvider>
      <Helmet>
        <html lang={htmlLang} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
      </Helmet>
      
      <div className="w-full bg-background pt-28 pb-20 min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Single, central Breadcrumb using LanguageContext */}
          <Breadcrumb 
            items={[
              { label: homeLabel, path: '/' },
              { label: configLabel, path: '/konfigurator' }
            ]} 
            className="mb-8" 
          />
        </div>
        
        <div className="w-full p-0 m-0 flex-1">
          <ConfiguratorLayout />
        </div>
      </div>
    </ConfiguratorProvider>
  );
};

export default ConfiguratorPage;
