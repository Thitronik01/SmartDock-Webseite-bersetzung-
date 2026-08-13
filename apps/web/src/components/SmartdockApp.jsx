
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const SmartdockApp = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const { t } = useLanguage();

  const reasons = [
    {
      title: t('sd_adv_1_title'),
      image: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/8eb8b45840b388245f6624cdcebc3656.png',
      text: t('sd_adv_1_desc')
    },
    {
      title: t('sd_adv_2_title'),
      image: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/6763565c9f7022037c2c5017efb303ea.png',
      text: t('sd_adv_2_desc')
    },
    {
      title: t('sd_adv_3_title'),
      image: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/f42d9cf6915fc3738a485fb793d584eb.png',
      text: t('sd_adv_3_desc')
    },
    {
      title: t('sd_adv_4_title'),
      image: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/a06ae317bc7778f28b675ccbdac5b130.png',
      text: t('sd_adv_4_desc')
    },
    {
      title: t('sd_adv_5_title'),
      image: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/ff0c04122cf9804e728c0251b137efa5.png',
      text: t('sd_adv_5_desc')
    }
  ];

  return (
    <section 
      id="app-download" 
      className="pt-16 pb-36 md:pt-24 md:pb-52 lg:pb-64 bg-background relative overflow-hidden flex items-center z-0"
    >
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-primary/5 rounded-t-full blur-3xl translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="w-full mb-16 md:mb-24 rounded-2xl overflow-hidden shadow-2xl border border-border/60 bg-card relative"
        >
          <div className="relative w-full bg-background" style={{ aspectRatio: '16 / 9' }}>
            
            <div className="absolute inset-0 bg-gradient-to-br from-background to-card opacity-80 flex items-center justify-center z-0">
              {(!isVideoLoaded && !videoError) && (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                  <span className="text-sm text-muted-foreground animate-pulse">{t('common_loading_preview')}</span>
                </div>
              )}
              {videoError && (
                <div className="text-muted-foreground flex flex-col items-center">
                  <svg className="w-12 h-12 mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium">{t('common_video_unavailable')}</span>
                </div>
              )}
            </div>
            
            {!videoError && (
              <iframe
                src="https://player.vimeo.com/video/1208103894?background=1&autoplay=1&loop=1&muted=1&controls=false&dnt=1"
                className={`absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                allow="autoplay; fullscreen; picture-in-picture"
                title="Smartdock Interface Video"
                frameBorder="0"
                loading="lazy"
                onLoad={() => setIsVideoLoaded(true)}
                onError={() => {
                  setVideoError(true);
                  setIsVideoLoaded(false);
                }}
              />
            )}
          </div>
        </motion.div>

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-semibold tracking-wider uppercase text-sm inline-block mb-4 md:mb-6 text-primary drop-shadow-md">
              {t('sd_adv_kicker')}
            </span>
            <h2 className="mb-4 text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-foreground drop-shadow-sm">
              {t('sd_adv_title')}
            </h2>
            <p className="text-lg text-muted-foreground mx-auto max-w-prose">
              {t('sd_adv_desc')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {reasons.map((reason, index) => (
            <motion.div
              key={`smartdock-reason-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex flex-col h-full p-6"
            >
              <div className="w-full flex justify-center mb-6 shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center">
                  <img 
                    src={reason.image} 
                    alt={reason.title}
                    className="w-full h-full object-contain drop-shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-4 text-left">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-left flex-grow">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SmartdockApp;
