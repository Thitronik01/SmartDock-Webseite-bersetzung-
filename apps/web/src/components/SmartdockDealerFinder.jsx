import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { pathFor } from '@/config/routes.js';

const SmartdockDealerFinder = () => {
  const navigate = useNavigate();
  const { t, currentLanguage } = useLanguage();
  const lang = currentLanguage;

  return (
    <section className="py-24 bg-primary text-primary-foreground relative z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent pointer-events-none z-[-5]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center w-full"
        >
          <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground mx-auto mb-8 backdrop-blur-sm shadow-sm shadow-black/10">
            <MapPin className="w-8 h-8" />
          </div>
          
          <h2 className="mb-6 text-primary-foreground text-balance">
            {t('sd_dealer_title')}
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            {t('sd_dealer_desc')}
          </p>
          
          <Button 
            size="lg"
            onClick={() => navigate(pathFor('dealer', lang))}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg h-14 px-10 font-semibold transition-all hover:scale-105 shadow-lg shadow-black/20"
          >
            <MapPin className="w-5 h-5 mr-2" />
            {t('sd_dealer_btn')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartdockDealerFinder;