import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const SmartdockIntro = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold tracking-wider uppercase text-sm inline-block mt-8 mb-6 text-primary">
            {t('sd_intro_kicker')}
          </span>
          <h2 className="mb-8 text-balance text-foreground">{t('sd_intro_title')}</h2>
          <p className="text-lg md:text-xl text-muted-foreground mx-auto mb-10 leading-relaxed max-w-prose">
            {t('sd_intro_desc')}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mx-auto mb-10 leading-relaxed max-w-prose">
            {t('sd_intro_awards')}
          </p>
          {/* Highlight heading with accent line */}
          <div className="flex flex-col items-center mt-12 mb-10">
            <div style={{ display: 'inline-block' }}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground text-center mb-4">
                {t('sd_intro_highlight')}
              </h3>
              {/* Green accent line — ~82% of heading width, centered */}
              <div style={{ width: '82%', height: '3px', borderRadius: '9999px', margin: '0 auto' }} className="bg-primary"></div>
            </div>
          </div>

          {/* Award & membership logos — language-independent, centered group */}
          <div className="mb-2 flex flex-row items-center justify-center gap-8">
            <img
              src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/80ccc1c646c38a629f06c6723cf3c11d.png"
              alt="DAME Design Awards Nominee 2025"
              style={{ maxHeight: '72px', maxWidth: '220px', width: 'auto', objectFit: 'contain' }}
            />
            <img
              src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/429e4f3152780f6520edb4df5a784511.jpg"
              alt="NMEA Member"
              style={{ maxHeight: '72px', maxWidth: '72px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartdockIntro;