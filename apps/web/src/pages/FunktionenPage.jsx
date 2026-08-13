import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Radio, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import SmartdockAppInterface_DE from '@/components/SmartdockAppInterface_DE.jsx';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import { pathFor } from '@/config/routes.js';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';

const FunktionenPage = () => {
  const { currentLanguage, t } = useLanguage();
  const isEn = currentLanguage === 'EN';
  const isFr = currentLanguage === 'FR';
  const htmlLang = isEn ? 'en-US' : isFr ? 'fr-FR' : 'de-DE';

  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang={htmlLang} />
        <title>{isEn ? `Features - SMARTDOCK` : isFr ? `Fonctions - SMARTDOCK` : `Funktionen - SMARTDOCK`}</title>
        <meta 
          name="description" 
          content={isEn 
            ? "Discover all features of the SMARTDOCK app. From One Hand Mode to anchor control." 
            : isFr
              ? "Découvre toutes les fonctions de l'application SMARTDOCK. Du mode une main jusqu'au contrôle de l'ancre."
              : "Entdecke alle Funktionen der SMARTDOCK App. Von One Hand Mode bis zur Ankersteuerung."} 
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: isEn ? 'Home' : isFr ? 'Accueil' : 'Startseite', path: pathFor('home', currentLanguage) },
            { label: isEn ? 'Features' : isFr ? 'Fonctions' : 'Funktionen', path: pathFor('functions', currentLanguage) }
          ]} 
        />

        {/* Hero Section */}
        <HeroSection 
          label={t('func_kicker')}
          labelColor="#bceb02"
          title={t('func_title')}
          subtitle={t('func_subtitle')}
        />

        {/* App Interface Spotlight Layout - Language-dependent */}
        <SmartdockAppInterface_DE />

        {/* Smartphone Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-center mb-32 mt-16">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground text-center">
              {t('func_feat1_title')}
            </h3>
            <img 
              src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/7389f4a82f13162b59d72b803198ee54.png" 
              alt="iPhone 15 Pro BoatDrag One-Handed Mode" 
              className="w-full max-w-[260px] h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Middle Column (Emphasized) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:scale-110 z-10"
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground text-center">
              {t('func_feat2_title')}
            </h3>
            <img 
              src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/0dae1c5b8608f0cd0277991c6d13580e.png" 
              alt="iPhone 15 Pro Controller Mode" 
              className="w-full max-w-[380px] lg:max-w-[420px] h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground text-center">
              {t('func_feat3_title')}
            </h3>
            <img 
              src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/fb7fe4bd168f53ff40bdb3c726624410.png" 
              alt="iPhone 15 Pro Anchor Mode" 
              className="w-full max-w-[260px] h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

        </div>

        {/* Safety Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-muted rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background text-foreground mb-8 shadow-sm">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('func_safety_title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            {t('func_safety_desc')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="bg-background rounded-xl p-4 flex items-center justify-center gap-3 shadow-sm border border-border">
              <Radio className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm">
                {t('func_safety_feat1')}
              </span>
            </div>
            <div className="bg-background rounded-xl p-4 flex items-center justify-center gap-3 shadow-sm border border-border">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm">
                {t('func_safety_feat2')}
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default FunktionenPage;
