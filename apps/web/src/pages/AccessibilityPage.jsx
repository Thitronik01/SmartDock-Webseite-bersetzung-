
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Accessibility, CheckCircle2, AlertTriangle, Calendar } from 'lucide-react';
import Translate from '@/components/Translate.jsx';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import { useLanguageRouting } from '@/hooks/useLanguageRouting.js';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { pathFor } from '@/config/routes.js';

const AccessibilityPage = () => {
  useLanguageRouting();
  const { t, currentLanguage } = useLanguage();

  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang={currentLanguage === 'FR' ? 'fr-FR' : 'de-DE'} />
        <title>{`${t('acc_title')} - SMARTDOCK`}</title>
        <meta name="description" content={t('acc_desc')} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Standardized position & margin */}
        <Breadcrumb 
          items={[
            { label: <Translate>Startseite</Translate>, path: pathFor('home', currentLanguage) },
            { label: <Translate>Barrierefreiheit</Translate>, path: pathFor('accessibility', currentLanguage) }
          ]} 
          className="mb-4"
        />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 mt-8"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
            <Accessibility className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground" style={{ letterSpacing: '-0.02em' }}>
            <Translate>Erklärung zur Barrierefreiheit</Translate>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            <Translate>Informationen über die Zugänglichkeit dieser Website und unser Engagement für digitale Barrierefreiheit.</Translate>
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Section 1: Einleitung */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">
                <Translate>1. Einleitung</Translate>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <Translate>Die Thitronik GmbH ist bemüht, ihre Website im Einklang mit dem Barrierefreiheitsstärkungsgesetz (BFSG) sowie der Barrierefreiheitsstärkungsverordnung (BFSGV) barrierefrei zugänglich zu machen.</Translate>
              </p>
              <p>
                <Translate>Diese Erklärung zur Barrierefreiheit gilt für die Website www.smartdock.de.</Translate>
              </p>
            </div>
          </motion.div>

          {/* Section 2: Stand der Vereinbarkeit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-3">
                <span><Translate>2. Stand der Vereinbarkeit mit den Anforderungen</Translate></span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <p className="font-medium text-foreground">
                  <Translate>Teilweise vereinbar</Translate>
                </p>
              </div>
              <p>
                <Translate>Diese Website ist wegen der folgenden Ausnahmen teilweise mit den Web Content Accessibility Guidelines (WCAG) 2.1 Level AA und der Europäischen Norm EN 301 549 vereinbar.</Translate>
              </p>
            </div>
          </motion.div>

          {/* Section 3: Nicht barrierefreie Inhalte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-3">
                <span><Translate>3. Nicht barrierefreie Inhalte</Translate></span>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <Translate>Die nachstehend aufgeführten Inhalte sind aus den folgenden Gründen noch nicht vollständig barrierefrei:</Translate>
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong><Translate>Formulare:</Translate></strong> <Translate>Einige Formulare enthalten möglicherweise Eingabefelder, die für Screenreader-Nutzer nicht vollständig oder unzureichend beschriftet sind.</Translate>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong><Translate>Bilder und Grafiken:</Translate></strong> <Translate>Bei einigen Bildern oder Grafiken fehlen alternative Texte (Alt-Texte) oder diese sind nicht ausreichend aussagekräftig.</Translate>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong><Translate>Videos:</Translate></strong> <Translate>Eingebundene Videoinhalte verfügen derzeit teilweise noch nicht über durchgehende Untertitel oder Transkripte.</Translate>
                  </span>
                </li>
              </ul>
              <p className="p-4 bg-muted rounded-lg mt-6">
                <Translate>Wir arbeiten kontinuierlich an der Verbesserung unserer digitalen Angebote. Ein externes Audit zur Barrierefreiheit ist geplant, um die identifizierten Mängel strukturiert zu beheben.</Translate>
              </p>
            </div>
          </motion.div>

          {/* Section 4: Erstellung der Erklärung */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-3">
                <span><Translate>4. Erstellung dieser Erklärung zur Barrierefreiheit</Translate></span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed flex items-start gap-4">
              <Calendar className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <p>
                  <Translate>Diese Erklärung wurde am 9. Juli 2025 erstellt.</Translate>
                </p>
                <p className="mt-2">
                  <Translate>Die Einschätzung basiert auf einer internen Selbstbewertung der Website und ihrer Funktionen.</Translate>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Feedback und Kontakt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-3">
                <span><Translate>5. Feedback und Kontaktangaben</Translate></span>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <Translate>Sind Ihnen Mängel beim barrierefreien Zugang zu Inhalten von www.smartdock.de aufgefallen? Oder haben Sie Fragen zum Thema Barrierefreiheit? Dann können Sie sich gerne an uns wenden:</Translate>
              </p>
              
              <div className="p-6 bg-muted/40 rounded-xl space-y-1">
                <p className="font-medium text-foreground text-lg">Thitronik GmbH</p>
                <p>Finkenweg 9-15</p>
                <p>24340 Eckernförde</p>
                <div className="pt-3 space-y-2">
                  <p className="flex items-center">
                    <span className="w-20"><Translate>E-Mail:</Translate></span>
                    <a href="mailto:kontakt@thitronik.de" className="text-primary font-medium hover:underline transition-colors">kontakt@thitronik.de</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 6: Durchsetzungsverfahren */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-3">
                <span><Translate>6. Durchsetzungsverfahren</Translate></span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <Translate>Sollten Sie nach einer Kontaktaufnahme mit uns keine oder keine zufriedenstellende Antwort erhalten haben, können Sie sich an die Schlichtungsstelle nach dem Behindertengleichstellungsgesetz (BGG) bei der Bundesnetzagentur wenden.</Translate>
              </p>
              <p>
                <Translate>Die Schlichtungsstelle hat die Aufgabe, Konflikte zwischen Menschen mit Behinderungen und nicht-öffentlichen Stellen (Unternehmen) außergerichtlich beizulegen.</Translate>
              </p>
              
              <div className="p-6 bg-muted/40 rounded-xl space-y-1 mt-4">
                <p className="font-medium text-foreground"><Translate>Schlichtungsstelle gemäß BFSG bei der Bundesnetzagentur</Translate></p>
                <p>Tulpenfeld 4</p>
                <p>53113 Bonn</p>
                <div className="pt-3 space-y-2">
                  <p className="flex items-start md:items-center flex-col md:flex-row gap-1 md:gap-0">
                    <span className="w-24 shrink-0"><Translate>E-Mail:</Translate></span>
                    <a href="mailto:barrierefreiheit@bnetza.de" className="text-primary font-medium hover:underline transition-colors">barrierefreiheit@bnetza.de</a>
                  </p>
                  <p className="flex items-start md:items-center flex-col md:flex-row gap-1 md:gap-0">
                    <span className="w-24 shrink-0"><Translate>Website:</Translate></span>
                    <a href="https://www.bundesnetzagentur.de/barrierefreiheit" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline transition-colors break-all">www.bundesnetzagentur.de/barrierefreiheit</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;
