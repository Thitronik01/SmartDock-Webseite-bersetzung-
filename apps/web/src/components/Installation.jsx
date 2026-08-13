import React from 'react';
import { motion } from 'framer-motion';

const Installation = () => {
  const steps = [
    {
      number: '01',
      title: 'Bedarfsanalyse',
      description: 'Unser Expertenteam analysiert Ihr Schiff, Ihre Routen und spezifischen Anforderungen. Wir erstellen ein maßgeschneidertes Installationskonzept.'
    },
    {
      number: '02',
      title: 'Hardware-Installation',
      description: 'Professionelle Montage aller Sensoren, Kameras und Steuereinheiten. Werfttermin oder Installation während regulärer Liegezeiten möglich.'
    },
    {
      number: '03',
      title: 'Software-Konfiguration',
      description: 'Einrichtung der SMARTDOCK-Software, Integration in bestehende Navigationssysteme und Kalibrierung aller Komponenten.'
    },
    {
      number: '04',
      title: 'Crew-Schulung',
      description: 'Umfassende Einweisung Ihrer Crew in alle Funktionen. Praktische Übungen im Hafen und Zertifizierung nach Abschluss.'
    },
    {
      number: '05',
      title: 'Go-Live & Support',
      description: 'Begleitete erste Manöver mit unserem Support-Team. 24/7-Hotline und regelmäßige Software-Updates inklusive.'
    }
  ];

  return (
    <section id="installation" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Installation in fünf Schritten</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der ersten Analyse bis zum erfolgreichen Go-Live – wir begleiten Sie durch den gesamten Prozess
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-shrink-0">
                <div className="text-7xl md:text-8xl font-bold text-primary/10 leading-none">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-semibold mb-4 text-primary">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Installation;