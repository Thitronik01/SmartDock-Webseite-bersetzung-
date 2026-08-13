
import React from 'react';
import { motion } from 'framer-motion';
import { Pointer, Crosshair, Wifi, Zap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import ParallaxBars from '@/components/ParallaxBars.jsx';
import Translate from '@/components/Translate.jsx';

const SmartdockAdvantages = () => {
  const { t } = useLanguage();

  const advantages = [
    { 
      icon: Pointer, 
      titleKey: 'sd_adv_1_title', 
      fallbackTitle: 'Intuitive Bedienung', 
      descKey: 'sd_adv_1_desc', 
      fallbackDesc: 'Die App ist klar und verständlich, sodass du dein Boot intuitiv mit nur einer Hand steuern kannst.' 
    },
    { 
      icon: Crosshair, 
      titleKey: 'sd_adv_2_title', 
      fallbackTitle: 'Präzise Kontrolle', 
      descKey: 'sd_adv_2_desc', 
      fallbackDesc: 'Ob Motoren, Bugstrahlruder oder Ankerwinde – du steuerst alles millimetergenau auf engstem Raum.' 
    },
    { 
      icon: Wifi, 
      titleKey: 'sd_adv_3_title', 
      fallbackTitle: 'Starke Reichweite', 
      descKey: 'sd_adv_3_desc', 
      fallbackDesc: 'SMARTDOCK nutzt Bluetooth LE für eine zuverlässige und weitreichende kabellose Verbindung überall an Bord.' 
    },
    { 
      icon: Zap, 
      titleKey: 'sd_adv_4_title', 
      fallbackTitle: 'Schnell integriert', 
      descKey: 'sd_adv_4_desc', 
      fallbackDesc: 'SMARTDOCK ist als Plug & Play System konzipiert und lässt sich nahtlos in führende Antriebssysteme integrieren.' 
    },
    { 
      icon: ShieldCheck, 
      titleKey: 'sd_adv_5_title', 
      fallbackTitle: 'Zukunftssicher gedacht', 
      descKey: 'sd_adv_5_desc', 
      fallbackDesc: 'Als App-gesteuertes System profitiert SMARTDOCK von regelmäßigen Updates und höchsten Sicherheitsstandards.' 
    }
  ];

  return (
    <section className="py-24 bg-background relative z-0 overflow-hidden">
      {/* Parallax Geometric Bars Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <ParallaxBars />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-semibold tracking-wider uppercase text-sm inline-block mt-8 mb-4 text-primary">
              <Translate>{t('app_reasons_kicker') || 'FÜNF GRÜNDE FÜR SMARTDOCK'}</Translate>
            </span>
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              <Translate>{t('app_reasons_title') || 'Fünf Gründe für SMARTDOCK'}</Translate>
            </h2>
            <p className="text-lg text-muted-foreground mx-auto max-w-prose">
              <Translate>{t('app_reasons_desc') || 'Entdecke die Vorteile, die SMARTDOCK zur unverzichtbaren Lösung für moderne Skipper machen'}</Translate>
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={`adv-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col h-full transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  <Translate>{t(adv.titleKey) || adv.fallbackTitle}</Translate>
                </h3>
                <p className="text-muted-foreground flex-grow">
                  <Translate>{t(adv.descKey) || adv.fallbackDesc}</Translate>
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SmartdockAdvantages;
