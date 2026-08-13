
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { pathFor } from '@/config/routes.js';

const SmartdockConfigurator = () => {
  const navigate = useNavigate();
  const { t, currentLanguage } = useLanguage();
  const lang = currentLanguage;

  return (
    <section 
      className="pt-28 pb-48 md:pt-36 md:pb-60 relative z-0 overflow-hidden flex items-center justify-center min-h-[82vh] bg-background"
    >
      <div 
        className="absolute inset-0 z-[-2] w-full h-full pointer-events-none select-none"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--background) / 0.92) 0%, hsl(var(--background) / 0.75) 35%, hsl(var(--background) / 0.4) 68%, hsl(var(--background) / 0) 100%)'
        }}
      />

      <div className="absolute inset-0 z-[-1] w-full h-full overflow-hidden pointer-events-none select-none">
        <img
          src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/9329d5c683fb6989da054c32080ed203.png"
          alt="Smartdock System Configurator"
          className="w-full h-full object-cover object-left-top sm:object-center opacity-20 transition-opacity duration-700"
          style={{
            maskImage: 'radial-gradient(ellipse 135% 115% at 15% 15%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.5) 55%, rgba(0, 0, 0, 0.2) 75%, rgba(0, 0, 0, 0.05) 90%, rgba(0, 0, 0, 0) 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 135% 115% at 15% 15%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.5) 55%, rgba(0, 0, 0, 0.2) 75%, rgba(0, 0, 0, 0.05) 90%, rgba(0, 0, 0, 0) 100%)'
          }}
        />
        
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 35%, hsl(var(--background) / 0.65) 70%, hsl(var(--background) / 1) 100%)'
          }}
        />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h2 className="mb-6 text-foreground text-balance text-4xl md:text-5xl font-bold tracking-tight drop-shadow-sm">
            {t('sd_conf_title')}
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-light">
            {t('sd_conf_desc')}
          </p>
          
          <div className="w-fit mx-auto">
            <Button 
              size="lg" 
              onClick={() => navigate(pathFor('configurator', lang))}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-10 mb-6 font-semibold transition-all duration-300 hover:scale-105 active:scale-[0.98] shadow-lg shadow-primary/10"
            >
              {t('sd_conf_btn')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartdockConfigurator;
