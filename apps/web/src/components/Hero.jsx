import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button.jsx';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { pathFor } from '@/config/routes.js';
import ParallaxBars from '@/components/ParallaxBars.jsx';

const Hero = () => {
  const navigate = useNavigate();
  const { t, currentLanguage } = useLanguage();
  const lang = currentLanguage;

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex flex-col justify-center items-start overflow-hidden bg-background pt-24 sm:pt-20 z-0">
      <Helmet>
        <title>{t('hero_headline')}</title>
        <meta name="description" content={t('sd_hero_subtitle')} />
      </Helmet>

      <ParallaxBars />

      <div className="vimeo-bg-container">
        <iframe
          src="https://player.vimeo.com/video/1206062183?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="vimeo-bg-iframe"
          style={{ filter: 'brightness(1.4)', opacity: 0.7 }}
          allow="autoplay; fullscreen; picture-in-picture"
          title="SMARTDOCK Hero Video"
        ></iframe>
        
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/10 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent z-[2] mix-blend-screen opacity-40 pointer-events-none" />
        
        <div className="absolute bottom-0 left-0 w-full h-96 lg:h-[50vh] hero-bottom-fade z-[3] pointer-events-none" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start text-left">
        <div className="max-w-4xl flex flex-col items-start justify-center w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 mt-12 sm:mt-0"
          >
            <div className="flex items-center gap-3">
              <span className="text-foreground text-sm font-semibold uppercase tracking-[0.2em]">
                {t('sd_hero_badge')}
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {t('hero_badge_origin')}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="HUE-Hero mb-6 sm:mb-8 w-full"
          >
            {t('hero_headline').split(' ').slice(0, 2).join(' ')}<br />
            {t('hero_headline').split(' ').slice(2).join(' ')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[17px] sm:text-[18px] md:text-[22px] text-foreground/90 leading-relaxed mb-8 sm:mb-12 max-w-2xl font-light w-full drop-shadow-md"
          >
            {lang === 'EN' ? (
              <>
                Manoeuvre your boat intuitively, precisely, and safely.
                <br />
                All from your smartphone.
              </>
            ) : (
              t('sd_hero_subtitle')
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-start gap-4 sm:gap-6 w-full"
          >
            <Button 
              size="lg"
              onClick={() => navigate(pathFor('configurator', lang))}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 active:scale-[0.98] rounded-full h-14 px-8 w-full sm:w-auto font-medium shadow-lg"
            >
              {t('nav_configurator')}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate(pathFor('dealer', lang))}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 active:scale-[0.98] rounded-full h-14 px-8 bg-background/20 w-full sm:w-auto font-medium backdrop-blur-md shadow-lg"
            >
              {t('nav_dealer_finder')}
            </Button>
            <button 
              onClick={() => {
                const el = document.getElementById('kontakt');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-foreground hover:text-primary font-medium text-base underline underline-offset-4 transition-colors py-2 sm:py-0 sm:h-14 flex items-center justify-start px-2 drop-shadow-md"
            >
              {t('nav_request')}
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;