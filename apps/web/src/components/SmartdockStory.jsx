import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const SmartdockStory = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-card border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square">
              <img 
                src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/787b8b07f107fe4ac4a233509fd84f63.png" 
                alt="Skipper on boat with SMARTDOCK" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-snug">
                  {t('sd_story_quote')}
                </blockquote>
                <div>
                  <div className="font-bold text-primary">{t('sd_story_author')}</div>
                  <div className="text-sm text-muted-foreground">{t('sd_story_role')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="section-kicker">{t('sd_story_kicker')}</span>
            <h2 className="mb-8">{t('sd_story_title')}</h2>
            <div className="prose prose-invert prose-lg text-muted-foreground">
              <p>{t('sd_story_text')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartdockStory;