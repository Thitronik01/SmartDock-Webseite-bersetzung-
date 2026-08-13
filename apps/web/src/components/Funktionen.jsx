import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Target, Shield, Smartphone } from 'lucide-react';

const Funktionen = () => {
  const features = [
    {
      icon: Navigation,
      title: 'Echtzeit-Navigation',
      description: 'Präzise Positionsbestimmung mit GPS, GLONASS und Galileo. Automatische Routenberechnung unter Berücksichtigung von Strömungen, Wind und Verkehr.'
    },
    {
      icon: Target,
      title: 'Präzisions-Docking',
      description: 'Zentimetergenaue Abstandsmessung zu Kaimauern und anderen Schiffen. Visuelle und akustische Warnungen bei kritischen Annäherungen.'
    },
    {
      icon: Shield,
      title: 'Sicherheitssysteme',
      description: 'Kollisionsvermeidung durch 360°-Rundumsicht. Automatische Notfallprotokolle und Blackbox-Aufzeichnung aller Manöver.'
    },
    {
      icon: Smartphone,
      title: 'Intuitive Bedienung',
      description: 'Touchscreen-Interface mit anpassbaren Dashboards. Mehrsprachige Unterstützung und kontextsensitive Hilfe für schnelle Einarbeitung.'
    }
  ];

  return (
    <section id="funktionen" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Kernfunktionen</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SMARTDOCK vereint modernste Technologie mit jahrzehntelanger maritimer Expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Funktionen;