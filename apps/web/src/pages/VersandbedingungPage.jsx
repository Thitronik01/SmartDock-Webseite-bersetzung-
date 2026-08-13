
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Truck, 
  MapPin, 
  Calendar, 
  CreditCard, 
  Building, 
  FileText, 
  CheckCircle2, 
  Info,
  Globe,
  PackageCheck,
  Wallet
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Translate from '@/components/Translate.jsx';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { useLanguageRouting } from '@/hooks/useLanguageRouting.js';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';

const EU_COUNTRIES = [
  "Belgien", "Bulgarien", "Dänemark", "Deutschland", "Estland", "Finnland", 
  "Frankreich", "Griechenland", "Irland", "Italien", "Kroatien", "Lettland", 
  "Litauen", "Luxemburg", "Malta", "Niederlande", "Österreich", "Polen", 
  "Portugal", "Rumänien", "Schweden", "Slowakei", "Slowenien", "Spanien", 
  "Tschechien", "Ungarn", "Zypern"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const VersandbedingungPage = () => {
  useLanguageRouting();

  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang="de-DE" />
        <title>{`Versand- und Zahlungsbedingungen - SMARTDOCK`}</title>
        <meta name="description" content="Informationen zu Liefergebieten, Versandkosten, Lieferfristen und Zahlungsmöglichkeiten bei SMARTDOCK." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Standardized position & margin */}
        <Breadcrumb 
          items={[
            { label: <Translate>Startseite</Translate>, path: '/' },
            { label: <Translate>Versand- & Zahlungsbedingungen</Translate>, path: '/versand' }
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
            <Truck className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground" style={{ letterSpacing: '-0.02em' }}>
            <Translate>Versand- und Zahlungsbedingungen</Translate>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            <Translate>Transparente Informationen zu unseren Liefergebieten, Lieferfristen sowie Ihren Zahlungsmöglichkeiten.</Translate>
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Section 1: Versandkosten (Highlight) */}
          <motion.div variants={itemVariants}>
            <Card className="border-2 border-primary/20 bg-primary/5 shadow-none overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 bg-primary/20 rounded-full text-primary shrink-0">
                  <PackageCheck className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-foreground tracking-tight">
                      <Translate>Versandkosten</Translate>
                    </h2>
                    <Badge variant="default" className="bg-primary hover:bg-primary text-primary-foreground font-semibold px-3 py-1">
                      <Translate>Kostenlos</Translate>
                    </Badge>
                  </div>
                  <p className="text-lg text-foreground/80 font-medium">
                    <Translate>Keine Versandkosten berechnet (inklusive gesetzliche Mehrwertsteuer).</Translate>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 2: Liefergebiete */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-secondary/20 rounded-lg text-secondary-foreground">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-foreground tracking-tight">
                <Translate>Liefergebiete</Translate>
              </h2>
            </div>
            
            <Card className="border border-border shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 border-b border-border bg-muted/20">
                  <p className="text-muted-foreground leading-relaxed">
                    <Translate>Wir liefern aktuell nach Deutschland und in die folgenden Länder der Europäischen Union:</Translate>
                  </p>
                </div>
                <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {EU_COUNTRIES.map((country, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm font-medium text-foreground/90">
                      <MapPin className="w-4 h-4 text-primary/60 shrink-0" />
                      <span><Translate>{country}</Translate></span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 3: Lieferfristen */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-secondary/20 rounded-lg text-secondary-foreground">
                <Calendar className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-foreground tracking-tight">
                <Translate>Lieferfristen</Translate>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-border shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    <Translate>Reguläre Lieferzeiten</Translate>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary/70 shrink-0 mt-0.5" />
                    <p><strong className="text-foreground"><Translate>Inland (Deutschland):</Translate></strong> <Translate>3 - 5 Tage nach Vertragsschluss.</Translate></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary/70 shrink-0 mt-0.5" />
                    <p><strong className="text-foreground"><Translate>Ausland:</Translate></strong> <Translate>5 - 7 Tage nach Vertragsschluss.</Translate></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p><Translate>Bei vereinbarter Vorauszahlung beginnt die Frist nach dem Zeitpunkt Ihrer Zahlungsanweisung.</Translate></p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border shadow-sm bg-muted/10">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Info className="w-5 h-5 text-secondary-foreground" />
                    <Translate>Wichtige Hinweise zur Zustellung</Translate>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span><Translate>Beachten Sie, dass an Sonn- und Feiertagen keine Zustellung erfolgt.</Translate></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span><Translate>Haben Sie Artikel mit unterschiedlichen Lieferzeiten bestellt, versenden wir die Ware in einer gemeinsamen Sendung, sofern wir keine abweichenden Vereinbarungen mit Ihnen getroffen haben.</Translate></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span><Translate>In diesem Fall bestimmt sich die Lieferzeit nach dem Artikel mit der längsten Lieferzeit, den Sie bestellt haben.</Translate></span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Section 4: Zahlungsmöglichkeiten */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-secondary/20 rounded-lg text-secondary-foreground">
                <CreditCard className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-foreground tracking-tight">
                <Translate>Akzeptierte Zahlungsmöglichkeiten</Translate>
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <Card className="border border-border shadow-sm hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-foreground">
                    <Building className="w-6 h-6" />
                  </div>
                  <span className="font-medium text-foreground"><Translate>Vorkasse per Überweisung</Translate></span>
                </CardContent>
              </Card>

              <Card className="border border-border shadow-sm hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-foreground">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="font-medium text-foreground"><Translate>Zahlung per Rechnung</Translate></span>
                </CardContent>
              </Card>

              <Card className="border border-border shadow-sm hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-foreground">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <span className="font-medium text-foreground"><Translate>PayPal</Translate></span>
                </CardContent>
              </Card>
            </div>

            {/* Section 5: Weitere Einzelheiten zur Zahlung */}
            <Card className="border border-border shadow-sm bg-accent/5">
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Wallet className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground"><Translate>Weitere Einzelheiten zur Zahlung</Translate></h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <Translate>Der Rechnungsbetrag ist bei Zahlung auf Rechnung innerhalb von 14 Tagen auszugleichen.</Translate>
                  </p>
                  <p className="text-sm text-muted-foreground pt-2">
                    <Translate>Bei Fragen finden Sie unsere Kontaktdaten im</Translate> <Link to="/impressum" className="text-primary hover:underline font-medium"><Translate>Impressum</Translate></Link>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default VersandbedingungPage;
