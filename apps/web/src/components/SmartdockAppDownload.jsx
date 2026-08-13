
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const SmartdockAppDownload = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="download-app" 
      className="py-8 sm:py-10 md:py-12 lg:py-16 bg-background overflow-hidden relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          
          <div className="absolute inset-0 z-0 overflow-hidden select-none">
            <img 
              src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/39c1ccde8b8ec16dd4ad36b7af3dbaf1.png" 
              alt="Smartdock App on smartphone with green background" 
              className="w-full h-full object-cover object-center pointer-events-none"
            />
          </div>

          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-black leading-tight">
                {t('sd_dl_title')}
              </h2>
              <p className="text-base md:text-lg text-black mb-6 leading-relaxed max-w-xl">
                {t('sd_dl_desc')}
              </p>
              
              <div className="flex flex-col items-start gap-4 mt-6 w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <a 
                    href="https://apps.apple.com/de/app/smartdock/id6745021801" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center px-8 py-3 text-sm font-semibold text-white bg-black rounded-full transition-all duration-300 hover:bg-black/90 active:scale-[0.98] shadow-lg"
                  >
                    {t('app_dl_app_store')}
                  </a>
                  <a 
                    href="https://play.google.com/store/search?q=Smartdock" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center px-8 py-3 text-sm font-semibold text-white bg-black rounded-full transition-all duration-300 hover:bg-black/90 active:scale-[0.98] shadow-lg"
                  >
                    {t('app_dl_google_play')}
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartdockAppDownload;
