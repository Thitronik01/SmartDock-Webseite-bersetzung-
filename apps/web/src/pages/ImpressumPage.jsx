import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Scale, Shield, AlertCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import { useLanguageRouting } from '@/hooks/useLanguageRouting.js';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';
const ImpressumPage = () => {
  // Listen for language changes and route accordingly
  useLanguageRouting();
  useScrollRestoration();
  return <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang="de" />
        <title>Impressum - SMARTDOCK</title>
        <meta name="description" content="Gesetzliche Anbieterkennung und rechtliche Hinweise der Thitronik GmbH." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Standardized position & margin */}
        <Breadcrumb items={[{
        label: 'Startseite',
        path: '/'
      }, {
        label: 'Impressum',
        path: '/impressum'
      }]} className="mb-4" />

        {/* Hero Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="mb-16 mt-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
            <Scale className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground" style={{
          letterSpacing: '-0.02em'
        }}>
            Impressum
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Angaben gemäß § 5 TMG und rechtliche Hinweise
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Section 1: Gesetzliche Anbieterkennung */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Gesetzliche Anbieterkennung
              </h2>
            </div>

            <div className="space-y-8">
              {/* Company Information */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Unternehmensangaben</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <div>
                    <p className="font-medium text-foreground text-lg">Thitronik GmbH</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Adresse:</p>
                    <p>Finkenweg 9-15</p>
                    <p>24340 Eckernförde</p>
                    <p>Deutschland</p>
                  </div>
                </div>
              </section>

              {/* Management */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Geschäftsführung:</h3>
                <div className="space-y-2 text-muted-foreground leading-relaxed">
                  <p>Mark Thietje</p>
                  <p>Daniela Hierl</p>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Kontaktinformationen</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <div className="flex items-start">
                    <span className="w-32 font-medium">Zentrale:</span>
                    <a href="tel:+494351767440" className="text-primary hover:underline transition-colors font-medium">+49 (0) 4351 76744-0</a>
                  </div>
                  <div className="flex items-start">
                    <span className="w-32 font-medium">Support:</span>
                    <a href="tel:+49435176744112" className="text-primary hover:underline transition-colors font-medium">+49 (0) 4351 76744-112</a>
                  </div>
                  <div className="flex items-start">
                    <span className="w-32 font-medium">E-Mail:</span>
                    <a href="mailto:kontakt@thitronik.de" className="text-primary hover:underline transition-colors font-medium">smartock@thitronik.de</a>
                  </div>
                  <div className="flex items-start">
                    <span className="w-32 font-medium">Webseite:</span>
                    <a href="https://www.smartdock.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors font-medium">www.smartdock.de</a>
                  </div>
                </div>
              </section>

              {/* Trade Register */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Handelsregistereintrag</h3>
                <div className="space-y-2 text-muted-foreground leading-relaxed">
                  <p>Registergericht: Amtsgericht Kiel</p>
                  <p>Handelsregisternummer: HRB 11453 KI</p>
                </div>
              </section>

              {/* VAT ID */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Umsatzsteuer-Identifikationsnummer</h3>
                <div className="space-y-2 text-muted-foreground leading-relaxed">
                  <p>DE 268454642</p>
                </div>
              </section>

              {/* WEEE Registration */}
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">WEEE-Registrierungsnummer</h3>
                <div className="space-y-2 text-muted-foreground leading-relaxed">
                  <p>Registrierungsnummer für Elektro- und Elektronik-Altgeräte:</p>
                  <p className="font-medium text-foreground">DE33826840</p>
                </div>
              </section>
            </div>
          </motion.div>

          {/* Section 1b: SMARTDOCK Kontaktinformationen */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.15
        }} className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">SMARTDOCK Kontaktinformationen</h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-sm text-muted-foreground">Für Anfragen zu SMARTDOCK Produkten und Dienstleistungen</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Telefon:</p>
                    <a href="tel:+494351767440" className="text-primary hover:underline transition-colors font-medium">+49 4351 767440</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">E-Mail:</p>
                    <a href="mailto:smartdock@thitronik.de" className="text-primary hover:underline transition-colors font-medium">smartdock@thitronik.de</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Berufshaftpflichtversicherung */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <div className="p-3 bg-secondary/20 rounded-lg text-secondary-foreground">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Berufshaftpflichtversicherung
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <p className="font-medium text-foreground mb-3">Versicherungsunternehmen:</p>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">Carsten A. Höneise e.K.</p>
                  <p>Versicherungsmakler und Versicherungsberater</p>
                </div>
              </div>

              <div>
                <p className="font-medium text-foreground mb-3">Geltungsbereich:</p>
                <p>Die Berufshaftpflichtversicherung gilt weltweit.</p>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Zusätzliche Hinweise */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <div className="p-3 bg-muted rounded-lg text-muted-foreground">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Zusätzliche Hinweise
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Verbraucherstreitbeilegung / Universalschiedsverfahren</h3>
                <p>Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Haftungsausschluss</h3>
                <p className="mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Alle genannten Marken, Produktnamen und Logos (einschließlich, aber nicht beschränkt auf Volvo Penta, MerCruiser, Mercury, Yamaha, EPT, Quick, Sleipner, Vetus, Lewmar und Max Power) sind eingetragene Marken oder Marken der jeweiligen Rechteinhaber. Zwischen der Thitronik GmbH und den jeweiligen Markeninhabern bestehen keine geschäftlichen Verbindungen, Partnerschaften oder Autorisierungen, sofern nicht ausdrücklich anders angegeben. Die Nennung der Markennamen erfolgt ausschließlich zur Beschreibung der technischen Kompatibilität der SMARTDOCK/THITRONIK® Produkte.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Haftung für Links</h3>
                <p>Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-foreground mb-4">Urheberrecht</h3>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Schöpfers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
              </section>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="w-full pt-8">
            <p className="text-center mx-auto text-sm text-muted-foreground">
              Weitere rechtliche Informationen finden Sie in unserer <Link to="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link> und den <Link to="/agb" className="text-primary hover:underline">Allgemeinen Geschäftsbedingungen</Link>.
            </p>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default ImpressumPage;