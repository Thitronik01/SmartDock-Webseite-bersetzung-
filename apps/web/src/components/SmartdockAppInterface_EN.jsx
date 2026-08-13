import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const SmartdockAppInterface_EN = () => {
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === 'EN';

  // Always use English image for English page
  const imageUrl = "https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/449bffd246d80582a1107f5688f757cb.png";

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
            alt={isEn ? "iPhone 15 Pro with SMARTDOCK App Interface" : "iPhone 15 Pro mit SMARTDOCK App Oberfläche"} 
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
            {isEn ? 'Everything under control—with just one finger' : 'Alles im Griff – mit einem Finger'}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-16 text-balance">
            {isEn 
              ? 'The SMARTDOCK app turns your smartphone into a mobile helm for your boat. You control important manoeuvres exactly where you have the best overview—at the bow, stern, or midships. With intuitive swipe gestures and customisable control modes, you always have full control of your ship.' 
              : 'Die SMARTDOCK App macht dein Smartphone zum mobilen Steuerstand für dein Boot. Du steuerst wichtige Manöver genau dort, wo du den besten Überblick hast – am Bug, am Heck oder mittschiffs. Mit intuitiven Wischgesten und anpassbaren Steuerungsmodi hast du jederzeit die volle Kontrolle über dein Schiff.'}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-left pt-8 border-t border-border/50">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {isEn ? 'Thruster Control' : 'Strahlruder-Kontrolle'}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {isEn 
                  ? 'Control bow and stern thrusters precisely. Perfect for docking in tight ports and strong crosswinds.' 
                  : 'Steuere Bug- und Heckstrahlruder präzise. Perfekt für das Anlegen in engen Häfen und bei starkem Seitenwind.'}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {isEn ? 'High-Mode Function' : 'High-Mode Funktion'}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {isEn 
                  ? 'Activate High-Mode for instant, maximum thrust when manoeuvring conditions require quick action.' 
                  : 'Aktiviere den High-Mode für sofortige, maximale Schubkraft, wenn die Manövrierbedingungen schnelles Handeln erfordern.'}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {isEn ? 'Integrated Accessories' : 'Integriertes Zubehör'}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {isEn 
                  ? 'Operate the anchor winch, signal horn, and other connected systems centrally and clearly directly from the app interface.' 
                  : 'Bediene Ankerwinde, Signalhorn und weitere angeschlossene Systeme zentral und übersichtlich direkt über die App-Oberfläche.'}
              </p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default SmartdockAppInterface_EN;