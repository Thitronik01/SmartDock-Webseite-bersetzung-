
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const SmartdockModules = () => {
  const { t } = useLanguage();

  const modules = [
    { 
      id: 'ecu', 
      titleKey: 'sd_mod_ecu_title', 
      descKey: 'sd_mod_ecu_desc',
      image: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/430ca062649972bdd02a2f72754ce511.jpg',
      alt: 'Underwater propeller with green neon glow'
    },
    { 
      id: 'tcu', 
      titleKey: 'sd_mod_tcu_title', 
      descKey: 'sd_mod_tcu_desc',
      image: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/3bcedadb68eaa6be6ea49842a47e9187.jpg',
      alt: 'White boat from above with green water and foam effect'
    },
    { 
      id: 'tcup', 
      titleKey: 'sd_mod_tcup_title', 
      descKey: 'sd_mod_tcup_desc',
      image: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/b9a5b3911b746fc355c993968adce8d0.png',
      alt: 'Aerial view of white boat with turquoise water and trim control slider',
      customTitle: 'TCU-P'
    },
    { 
      id: 'acu', 
      titleKey: 'sd_mod_acu_title', 
      descKey: 'sd_mod_acu_desc',
      image: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/5d14b2eec31e921a0c4f9362491fb53d.jpg',
      alt: 'Boat with green anchor symbol and neon glow'
    },
    { 
      id: 'wcu', 
      titleKey: 'sd_mod_wcu_title', 
      descKey: 'sd_mod_wcu_desc',
      image: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/67188c0d40fd7b641fe3ea1818bb0e67.jpg',
      alt: 'Green rope on boat fitting'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-semibold tracking-wider uppercase text-sm mb-4 inline-block text-slate-500">
              {t('sd_mod_kicker')}
            </span>
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
              {t('sd_mod_title')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mx-auto max-w-prose">
              {t('sd_mod_desc')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {modules.map((mod, i) => (
            <motion.div
              key={`module-${mod.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl text-slate-900 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
                  {mod.customTitle || t(mod.titleKey)}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-grow">
                  {t(mod.descKey)}
                </p>
              </div>
              
              <div className="w-full mt-auto shrink-0">
                {mod.image ? (
                  <img 
                    src={mod.image} 
                    alt={mod.alt}
                    className="w-full h-48 md:h-56 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-48 md:h-56 bg-slate-100 flex items-center justify-center">
                    <span className="text-slate-500 text-sm font-medium">{t('mod_coming_soon')}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SmartdockModules;
