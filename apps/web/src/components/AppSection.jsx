import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BarChart3, Bell, Cloud } from 'lucide-react';

const AppSection = () => {
  const appFeatures = [
    {
      icon: Smartphone,
      title: 'Fernsteuerung',
      description: 'Überwachen und steuern Sie SMARTDOCK-Funktionen von jedem Ort aus'
    },
    {
      icon: BarChart3,
      title: 'Live-Monitoring',
      description: 'Echtzeit-Daten zu Position, Geschwindigkeit und Systemstatus'
    },
    {
      icon: Bell,
      title: 'Benachrichtigungen',
      description: 'Push-Meldungen bei kritischen Ereignissen oder Wartungsbedarf'
    },
    {
      icon: Cloud,
      title: 'Datenanalyse',
      description: 'Detaillierte Auswertungen aller Manöver für kontinuierliche Optimierung'
    }
  ];

  return (
    <section id="app" className="py-24 md:py-32 bg-muted/10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">
              SMARTDOCK App – Fernsteuerung, Live-Monitoring, Datenanalyse
            </h2>
            <p className="text-xl text-secondary leading-relaxed mb-8">
              Die SMARTDOCK Mobile App erweitert Ihr System um leistungsstarke Remote-Funktionen. Behalten Sie alle wichtigen Daten im Blick – ob an Bord, im Büro oder unterwegs.
            </p>

            <div className="space-y-6">
              {appFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(0,208,132,0.1)]">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative z-10 max-w-[400px] w-full">
              <img
                src="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/f893bc0b4227fdf857b4e339309e2955.png"
                alt="SMARTDOCK Mobile App Interface mit High Mode und Steuerkreuz"
                className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
              />
            </div>
            
            {/* Ambient glows behind the phone */}
            <div className="absolute top-1/4 right-10 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;