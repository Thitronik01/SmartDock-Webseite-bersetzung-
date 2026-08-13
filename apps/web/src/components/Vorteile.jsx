import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Award } from 'lucide-react';

const Vorteile = () => {
  const advantages = [
    {
      icon: ShieldCheck,
      title: 'Sicherheit',
      description: 'Reduzierung von Kollisionsrisiken um 87% durch präzise Abstandsmessung und automatische Warnungen. Erfüllt alle internationalen Sicherheitsstandards.',
      highlight: '87% weniger Risiko'
    },
    {
      icon: Zap,
      title: 'Effizienz',
      description: 'Durchschnittlich 34% kürzere Manöverzeiten bedeuten weniger Hafengebühren und optimierte Routen. Kraftstoffeinsparung durch präzise Navigation.',
      highlight: '34% schneller'
    },
    {
      icon: Users,
      title: 'Benutzerfreundlichkeit',
      description: 'Intuitive Touchscreen-Bedienung mit kontextsensitiver Hilfe. Crew-Schulung in nur 2 Tagen. Mehrsprachige Unterstützung für internationale Teams.',
      highlight: '2 Tage Schulung'
    },
    {
      icon: Award,
      title: 'Zuverlässigkeit',
      description: 'Redundante Systeme garantieren 99.8% Verfügbarkeit. Regelmäßige Updates und 24/7-Support. Bewährt in über 1.200 Installationen weltweit.',
      highlight: '99.8% Uptime'
    }
  ];

  return (
    <section id="vorteile" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Warum SMARTDOCK wählen?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Messbare Vorteile für Ihre Flotte – von erhöhter Sicherheit bis zu reduzierten Betriebskosten
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br ${
                  isEven ? 'from-card to-muted/50' : 'from-muted/50 to-card'
                } rounded-2xl p-8 border-2 border-border hover:border-primary/50 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {advantage.highlight}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Vorteile;