import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const SmartdockAppInterface_DE = () => {
  const { currentLanguage, t } = useLanguage();
  const isEn = currentLanguage === 'EN';
  const isFr = currentLanguage === 'FR';

  // Language-dependent image selection - computed reactively.
  // Each language has its own authentic interface asset (DE / EN / FR).
  const DE_IMG = "https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/f468096f2bedd6cf3299b65f182cfab1.png";
  const EN_IMG = "https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/449bffd246d80582a1107f5688f757cb.png";
  const FR_IMG = "https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/8a13c5ecb8af06a7aa1e786676801d8a.png";

  const imageUrl = currentLanguage === 'EN'
    ? EN_IMG
    : currentLanguage === 'FR'
    ? FR_IMG
    : DE_IMG;

  return (
    <section className="pt-0 pb-24 md:pb-32 relative overflow-hidden bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        
        {/* Top: iPhone 15 Pro Mockup Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="flex justify-center mt-0 mb-8 md:mb-12"
        >
          <img 
            src={imageUrl} 
            alt={isEn ? "iPhone 15 Pro with SMARTDOCK App Interface" : isFr ? "iPhone 15 Pro avec l'interface de l'application SMARTDOCK" : "iPhone 15 Pro mit SMARTDOCK App Oberfläche"} 
            className="w-full max-w-[650px] h-auto object-contain" 
          />
        </motion.div>

        {/* Bottom: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="max-w-4xl mx-auto text-center"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance" 
            style={{ letterSpacing: '-0.02em' }}
          >
            {t('func_app_kicker')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16 text-balance">
            {t('func_app_desc')}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-left pt-8 border-t border-border/50">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t('func_app_f1_title')}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t('func_app_f1_desc')}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t('func_app_f2_title')}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t('func_app_f2_desc')}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t('func_app_f3_title')}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t('func_app_f3_desc')}
              </p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default SmartdockAppInterface_DE;
