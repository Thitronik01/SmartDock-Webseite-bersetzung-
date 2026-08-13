
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { pathFor } from '@/config/routes.js';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.jsx';

const FAQ = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const lang = currentLanguage;

  // 12 FAQ entries with multi-line formatting (\n\n and \n) as requested for specific questions
  const faqs = [
    {
      question: 'Wie funktioniert SMARTDOCK genau?',
      answer: 'SMARTDOCK verbindet sich drahtlos mit der Steuerungselektronik Ihres Bootes. Über die intuitive App auf Ihrem Smartphone oder Tablet können Sie Manöver punktgenau und mit direkter Rückmeldung ausführen. Das System übersetzt Ihre Eingaben in Echtzeit an die Antriebe.'
    },
    {
      question: 'Ist mein Boot mit SMARTDOCK kompatibel?',
      answer: 'SMARTDOCK ist mit den meisten modernen Motorbooten und Yachten kompatibel, die über elektronische Schaltungen (Drive-by-Wire) verfügen. Spezifische Kompatibilität prüfen wir gerne anhand Ihrer Motoren- und Getriebedaten in einer individuellen Beratung.'
    },
    {
      question: 'Welche Schritte sind für die Einrichtung erforderlich?',
      answer: 'Die Einrichtung erfolgt in wenigen Schritten:\n\n1. App aus dem Store herunterladen\n2. Bluetooth-Verbindung zum Modul herstellen\n3. Bootsprofil anlegen und kalibrieren\n4. Verbindungstest durchführen'
    },
    {
      question: 'Wie läuft der Support bei Problemen ab?',
      answer: 'Unser Support-Team steht Ihnen jederzeit zur Verfügung.\n\nIm ersten Schritt können Sie die integrierte Diagnose-Funktion der App nutzen. Diese erkennt häufige Verbindungsfehler automatisch.\n\nSollte das Problem weiterhin bestehen, kontaktieren Sie einfach unseren Kundenservice direkt über die App oder unsere Webseite.'
    },
    {
      question: 'Welche Sicherheitsfunktionen sind integriert?',
      answer: 'SMARTDOCK bietet mehrere Schutzmechanismen für maximale Sicherheit auf dem Wasser:\n\n• Automatischer Stopp der Antriebe bei Verbindungsabbruch\n• Verschlüsselte Bluetooth-Verbindung (AES-128)\n• Manuelle Notabschaltung jederzeit am Steuerstand möglich\n• Warnsignal bei niedrigem Akkustand des Smartphones'
    },
    {
      question: 'Wie lange hält der Akku meines Smartphones bei der Nutzung?',
      answer: 'Die SMARTDOCK App ist auf Energieeffizienz optimiert. Eine Stunde aktive Manöversteuerung verbraucht durchschnittlich nur 5-8% der Akkukapazität eines modernen Smartphones.'
    },
    {
      question: 'Kann ich mehrere Boote mit einer App steuern?',
      answer: 'Ja, die SMARTDOCK App kann Profile für mehrere Boote speichern.\n\nWenn Sie sich mit dem jeweiligen SMARTDOCK Modul verbinden, lädt die App automatisch die passenden Konfigurationen für das aktuelle Boot.\n\nDies ist besonders praktisch für Eigner von mehreren Booten oder für Charterunternehmen.'
    },
    {
      question: 'Wie schnell ist die Reaktionszeit?',
      answer: 'Die Latenz zwischen einer Eingabe in der App und der Reaktion der Antriebe liegt bei unter 50 Millisekunden.\n\nDas sorgt für ein absolut direktes und präzises Steuergefühl, als stünden Sie direkt am Steuerstand.\n\nSie spüren keine Verzögerung bei der Ausführung Ihrer Manöver.'
    },
    {
      question: 'Wie lange dauert die Installation?',
      answer: 'Die Installation durch einen unserer Fachhändler dauert in der Regel nur 4 bis 8 Stunden, abhängig vom jeweiligen Bootstyp und der Zugänglichkeit der Steuerungselektronik.'
    },
    {
      question: 'Wie lange ist die Garantie?',
      answer: 'Auf das SMARTDOCK Hardware-Modul gewähren wir eine erweiterte Garantie von 3 Jahren. Software-Updates für die App und das Modul stellen wir kostenlos zur Verfügung.'
    },
    {
      question: 'Welche Funktionen bietet die App?',
      answer: 'Die App bietet alle wesentlichen Funktionen für die vollständige Kontrolle:\n\n• Proportionale Steuerung der Hauptantriebe\n• Nahtlose Bug- und Heckstrahlruder-Integration (sofern vorhanden)\n• Anker-Funktion zum Halten der Position\n• Statusüberwachung in Echtzeit\n\nZudem können Sie die Sensibilität der Steuerung individuell anpassen und verschiedene Manöver-Modi für unterschiedliche Wetterbedingungen (z.B. Starkwind) auswählen.'
    },
    {
      question: 'Wie hoch sind die Kosten für ein SMARTDOCK System?',
      answer: 'Die Kosten variieren je nach Bootsgröße und Antriebsart. Nutzen Sie unseren Konfigurator für eine erste Einschätzung oder kontaktieren Sie einen Händler in Ihrer Nähe für ein verbindliches Angebot.'
    }
  ];

  // Helper to format text with \n\n into paragraphs and \n into line breaks
  const formatAnswer = (text) => {
    if (!text) return null;
    const paragraphs = text.split('\n\n');
    return (
      <div className="space-y-4">
        {paragraphs.map((paragraph, pIndex) => (
          <p key={pIndex} className="leading-relaxed">
            {paragraph.split('\n').map((line, lIndex, arr) => (
              <React.Fragment key={lIndex}>
                {line}
                {lIndex < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        ))}
      </div>
    );
  };

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-kicker">Wissen</span>
          <h2 className="mb-6">Häufig gestellte Fragen</h2>
          <p className="text-xl text-muted-foreground">
            Alles, was Sie über SMARTDOCK wissen müssen
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary transition-colors duration-200 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200 py-5 text-[16px] font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-[15px]">
                  {formatAnswer(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 flex flex-col items-center gap-6"
        >
          <Button 
            size="lg"
            variant="outline"
            onClick={() => navigate(pathFor('faq', lang))}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Alle FAQs ansehen
          </Button>
          
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              Weitere Fragen? Kontaktiere uns!
            </p>
            <Button 
              size="lg"
              onClick={() => handleScrollTo('#kontakt')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
            >
              Jetzt Kontakt aufnehmen
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
