
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { pathFor } from '@/config/routes.js';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';

const ProduktPage = () => {
  const { t, currentLanguage } = useLanguage();
  const lang = currentLanguage;
  const homePath = pathFor('home', lang);

  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang={t('html_lang')} />
        <title>{t('prod_meta_title')}</title>
        <meta name="description" content={t('prod_meta_desc')} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Standardized position & margin */}
        <Breadcrumb 
          items={[
            { label: t('prod_nav_home'), path: pathFor('home', lang) },
            { label: t('prod_nav_product'), path: pathFor('product', lang) }
          ]} 
        />

        {/* Hero Section */}
        <HeroSection 
          label={t('prod_hero_kicker')}
          title={t('prod_hero_title')}
          subtitle={t('prod_hero_desc')}
          labelColor="#bceb02"
        />

        {/* Zig-Zag Layout for Product Details */}
        <div className="space-y-32 mb-32">
          {/* Row 1: Image Left, Text Right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6 }} 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="order-2 lg:order-1 aspect-[4/3]">
              <img src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/app_screen_3-p2e8B.png" alt="Professioneller Skipper steuert Boot mit Smartphone" className="object-cover w-full h-full rounded-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-balance text-foreground">
                {t('prod_crew_title')}
              </h2>
              <div className="space-y-6">
                <p className="text-base text-muted-foreground leading-normal">
                  {t('prod_crew_p1')}
                </p>
                <p className="text-base text-muted-foreground leading-normal">
                  {t('prod_crew_p2')}
                </p>
                <p className="text-base text-muted-foreground leading-normal">
                  {t('prod_crew_p3')}
                </p>
                <p className="text-base text-muted-foreground leading-normal">
                  {t('prod_crew_p4')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 2: Text Left, Image Right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6 }} 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="order-1">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-balance text-foreground">
                {t('prod_float_title')}
              </h2>
              <p className="text-base text-muted-foreground leading-normal mb-8">
                {t('prod_float_desc')}
              </p>
              <a href="https://floatmagazin.de/dinge/thitronik-smartdock-praxistest/#page-1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
                {t('prod_float_link')}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="order-2 aspect-[4/3]">
              <img src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/float_magazin-iBOod.png" alt="Float Magazin Artikel: Praxistest Mit dem Handy in den Hafen steuern" className="object-cover w-full h-full rounded-2xl" />
            </div>
          </motion.div>

          {/* Row 3: Image Left, Text Right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6 }} 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="order-2 lg:order-1 aspect-[4/3]">
              <img src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/cu_seite-cashC.png" alt="Darstellung der Systemfunktionen" className="object-cover w-full h-full rounded-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-sm md:text-base font-semibold tracking-wider uppercase text-primary mb-4">
                {t('prod_plug_kicker')}
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance text-foreground">
                {t('prod_plug_title')}
              </h2>
              <div className="space-y-6">
                <p className="text-base text-muted-foreground leading-normal">
                  {t('prod_plug_p1')}
                </p>
                <p className="text-base text-muted-foreground leading-normal">
                  {t('prod_plug_p2')}
                </p>
                <p className="text-base text-muted-foreground leading-normal">
                  {t('prod_plug_p3')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 4: Text Left, Image Right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6 }} 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="order-1">
              <h3 className="text-lg md:text-xl font-semibold tracking-wider uppercase text-primary mb-4">
                {t('prod_ecu_kicker')}
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance text-foreground">
                {t('prod_ecu_title')}
              </h2>
              <div className="space-y-6">
                <p className="text-base text-muted-foreground leading-normal">
                  {t('prod_ecu_p1')}
                </p>
                <p className="text-base text-muted-foreground leading-normal">
                  {t('prod_ecu_p2')}
                </p>
              </div>
            </div>
            <div className="order-2 aspect-[4/3]">
              <img src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/cu_front-VfFNf.png" alt="SMARTDOCK-ECU" className="object-cover w-full h-full rounded-2xl" />
            </div>
          </motion.div>

          {/* Row 5: Image Left, Text Right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6 }} 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="order-2 lg:order-1 aspect-[4/3]">
              <img src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/cu_overview-LYR18.png" alt="SMARTDOCK-TCU Thruster Control Unit" className="object-cover w-full h-full rounded-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-lg md:text-xl font-semibold tracking-wider uppercase text-primary mb-4">
                {t('prod_tcu_kicker')}
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance text-foreground">
                {t('prod_tcu_title')}
              </h2>
              <div className="space-y-6">
                <p className="text-base text-muted-foreground leading-normal">
                  {t('prod_tcu_p1')}
                </p>
                <p className="text-base text-muted-foreground leading-normal">
                  {t('prod_tcu_p2')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Kompatibilität Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="bg-card border border-border rounded-3xl p-8 md:p-12 mb-16 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('prod_compat_title')}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('prod_compat_desc')}
              </p>
            </div>

            {/* Right Column */}
            <div className="bg-secondary/30 rounded-2xl p-8 md:p-10 border border-primary/20 relative overflow-hidden flex flex-col items-start h-full justify-center">
              {/* Subtle green glow effect */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              
              <h4 className="text-xl md:text-2xl font-semibold mb-8 text-foreground leading-snug relative z-10">
                {t('prod_compat_contact_title')}
              </h4>
              <Link to={`${homePath}#kontakt`} className="relative z-10 w-full sm:w-auto">
                <Button size="lg" className="rounded-full px-8 text-base h-14 w-full sm:w-auto">
                  {t('prod_compat_contact_btn')}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            {t('prod_cta_title')}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={pathFor('configurator', lang)} className="w-full sm:w-auto">
              <Button size="lg" className="rounded-full px-8 text-base h-14 w-full">
                {t('prod_cta_config_btn')}
              </Button>
            </Link>
            <Link to={pathFor('dealer', lang)} className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-14 w-full">
                {t('prod_cta_dealer_btn')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProduktPage;
