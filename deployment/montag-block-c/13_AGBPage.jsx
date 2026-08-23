
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FileText, Scale, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import Translate from '@/components/Translate.jsx';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import { useLanguageRouting } from '@/hooks/useLanguageRouting.js';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { pathFor } from '@/config/routes.js';

const AGBPage = () => {
  useLanguageRouting();
  const { t, currentLanguage } = useLanguage();

  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang={currentLanguage === 'FR' ? 'fr-FR' : 'de-DE'} />
        <title>{`${t('agb_title')} - SMARTDOCK`}</title>
        <meta name="description" content={t('agb_desc')} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Standardized position & margin */}
        <Breadcrumb 
          items={[
            { label: <Translate>Startseite</Translate>, path: pathFor('home', currentLanguage) },
            { label: <Translate>AGB & Kundeninformationen</Translate>, path: pathFor('terms', currentLanguage) }
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
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground" style={{ letterSpacing: '-0.02em' }}>
            <Translate>Allgemeine Geschäftsbedingungen & Kundeninformationen</Translate>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            <Translate>Rechtliche Rahmenbedingungen und wichtige Informationen für den Kauf, die Installation und die Nutzung unserer SMARTDOCK Produkte.</Translate>
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* PART I - AGB */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm space-y-10"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                <Translate>Teil I: Allgemeine Geschäftsbedingungen</Translate>
              </h2>
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground"><Translate>§ 1 Grundlegende Bestimmungen</Translate></h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <Translate>(1) Die nachstehenden Geschäftsbedingungen gelten für Verträge, die Sie mit uns als Anbieter (Thitronik GmbH) über die Internetseite smartdock.de oder im direkten Kontakt anbahnen und abschließen. Soweit nicht anders vereinbart, wird der Einbeziehung gegebenenfalls von Ihnen verwendeter eigener Bedingungen widersprochen.</Translate>
                </p>
                <p>
                  <Translate>(2) Verbraucher im Sinne der nachstehenden Regelungen ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Unternehmer ist jede natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer selbständigen beruflichen oder gewerblichen Tätigkeit handelt.</Translate>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground"><Translate>§ 2 Anfragen über die Internetseite und Zustandekommen eines Vertrages</Translate></h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <Translate>(1) Gegenstand unserer Leistungen ist die Bereitstellung, Konfiguration und Installation des SMARTDOCK Systems sowie zugehöriger Komponenten für Sportboote und Yachten.</Translate>
                </p>
                <p>
                  <Translate>(2) Die Präsentation unserer Leistungen auf der Internetseite (insbesondere im Konfigurator) stellt kein rechtlich bindendes Angebot zum Abschluss eines Vertrages dar, sondern eine unverbindliche Aufforderung zur Abgabe einer Anfrage durch den Kunden.</Translate>
                </p>
                <p>
                  <Translate>(3) Durch das Absenden des Konfigurator-Formulars oder über unsere sonstigen Kontaktformulare geben Sie eine unverbindliche Anfrage an uns ab. Auf Basis dieser Anfrage prüfen wir oder unsere zertifizierten Einbaupartner die technische Machbarkeit und erstellen Ihnen ein verbindliches Angebot.</Translate>
                </p>
                <p>
                  <Translate>(4) Der Vertrag kommt erst zustande, wenn Sie dieses verbindliche Angebot ausdrücklich (z.B. per E-Mail, Fax oder Post) annehmen oder durch die Unterzeichnung eines separaten Installations- und Kaufvertrages mit einem unserer Einbaupartner.</Translate>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground"><Translate>§ 3 Inhalte der Internetseite</Translate></h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <Translate>(1) Wir übernehmen keine Gewähr für die Aktualität, Richtigkeit, Vollständigkeit oder Qualität der bereitgestellten Informationen auf unserer Website. Haftungsansprüche gegen uns, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern unsererseits kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.</Translate>
                </p>
                <p>
                  <Translate>(2) Alle aus dem Konfigurator generierten Preisschätzungen sind Richtwerte (UVP). Die tatsächlichen Kosten können je nach individueller Bootsbeschaffenheit und spezifischem Installationsaufwand abweichen.</Translate>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground"><Translate>§ 4 Preise, Zahlungsbedingungen, Lieferung und Installation</Translate></h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <Translate>(1) Alle auf der Website genannten Preise stellen unverbindliche Preisempfehlungen in Euro dar und beinhalten die gesetzliche Mehrwertsteuer (sofern nicht anders als Netto-Preise für Unternehmer ausgewiesen).</Translate>
                </p>
                <p>
                  <Translate>(2) Die Zahlungsbedingungen sowie Modalitäten zur Lieferung und Installation werden im jeweiligen verbindlichen Angebot detailliert geregelt. In der Regel ist die Installation durch geschultes Fachpersonal unserer zertifizierten Händler zwingend vorgeschrieben, um eine fehlerfreie Funktion in sicherheitsrelevanten maritime Umgebungen zu gewährleisten.</Translate>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground"><Translate>§ 5 Gewährleistung</Translate></h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <Translate>(1) Es bestehen die gesetzlichen Mängelhaftungsrechte.</Translate>
                </p>
                <p>
                  <Translate>(2) Bei Unternehmern gilt abweichend: Als Beschaffenheit der Ware gelten nur unsere eigenen Angaben und die Produktbeschreibung des Herstellers als vereinbart, nicht jedoch sonstige Werbung, öffentliche Anpreisungen und Äußerungen des Herstellers. Die Gewährleistungsfrist beträgt für Unternehmer ein Jahr ab Ablieferung der Ware.</Translate>
                </p>
                <p>
                  <Translate>(3) Wir haften nicht für Schäden, die auf eine unsachgemäße Selbstinstallation oder auf Eingriffe durch nicht von uns autorisiertes Personal zurückzuführen sind. Das SMARTDOCK System greift tief in die Steuerungselektronik des Bootes ein; eine fehlerhafte Montage kann erhebliche Folgeschäden verursachen.</Translate>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground"><Translate>§ 6 Rechtswahl, Erfüllungsort, Gerichtsstand</Translate></h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <Translate>(1) Es gilt deutsches Recht. Bei Verbrauchern gilt diese Rechtswahl nur, soweit hierdurch der durch zwingende Bestimmungen des Rechts des Staates des gewöhnlichen Aufenthaltes des Verbrauchers gewährte Schutz nicht entzogen wird (Günstigkeitsprinzip).</Translate>
                </p>
                <p>
                  <Translate>(2) Erfüllungsort für alle Leistungen aus den mit uns bestehenden Geschäftsbeziehungen sowie Gerichtsstand ist unser Sitz (Eckernförde), soweit Sie nicht Verbraucher, sondern Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen sind.</Translate>
                </p>
                <p>
                  <Translate>(3) Die Bestimmungen des UN-Kaufrechts finden ausdrücklich keine Anwendung.</Translate>
                </p>
              </div>
            </section>
          </motion.div>

          {/* PART II - KUNDENINFORMATIONEN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm space-y-10"
          >
            <div className="flex items-center space-x-4 border-b border-border pb-6 mb-8">
              <div className="p-3 bg-secondary/20 rounded-lg text-secondary-foreground">
                <Info className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                <Translate>Teil II: Kundeninformationen</Translate>
              </h2>
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground"><Translate>1. Identität des Anbieters</Translate></h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p><Translate>Verantwortlich für den Inhalt dieser Website und Ihr Vertragspartner im Falle eines direkten Vertragsschlusses ist:</Translate></p>
                <div className="p-6 bg-muted/40 rounded-xl space-y-1">
                  <p className="font-medium text-foreground text-lg">Thitronik GmbH</p>
                  <p>Finkenweg 9-15</p>
                  <p>24340 Eckernförde</p>
                  <p><Translate>Deutschland</Translate></p>
                  <div className="pt-3 space-y-2">
                    <p className="flex items-center">
                      <span className="w-20"><Translate>Telefon:</Translate></span>
                      <a href="tel:+494351767440" className="text-primary font-medium hover:underline transition-colors">+49 4351 767440</a>
                    </p>
                    <p className="flex items-center">
                      <span className="w-20"><Translate>E-Mail:</Translate></span>
                      <a href="mailto:smartdock@thitronik.de" className="text-primary font-medium hover:underline transition-colors">smartdock@thitronik.de</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground"><Translate>2. Informationen zur Anfrage und zum Vertragsschluss</Translate></h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <Translate>Die technischen Schritte zum Vertragsschluss, der Vertragsschluss selbst und die Korrekturmöglichkeiten erfolgen nach Maßgabe der Regelungen "Zustandekommen eines Vertrages" (vgl. § 2 der Allgemeinen Geschäftsbedingungen - Teil I).</Translate>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground"><Translate>3. Vertragssprache und Speicherung der Anfrage</Translate></h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <Translate>(1) Die Vertragssprache ist Deutsch.</Translate>
                </p>
                <p>
                  <Translate>(2) Die Daten Ihrer Anfrage werden von uns im System gespeichert und an den zuständigen Installationspartner weitergeleitet. Sie erhalten eine Zusammenfassung Ihrer Konfiguration und Anfrage an die von Ihnen angegebene E-Mail-Adresse.</Translate>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground"><Translate>4. Wesentliche Merkmale der Ware oder Dienstleistung</Translate></h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <Translate>Die wesentlichen Merkmale des SMARTDOCK Systems (Assistenzsystem für Boots-Manöver, Joystick-Steuerung) und ergänzender Leistungen finden sich in den jeweiligen Produktbeschreibungen und Spezifikationen auf unserer Internetseite.</Translate>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground"><Translate>5. Preise und Zahlungsmodalitäten</Translate></h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <Translate>Die auf unserer Website ausgegebenen Konfigurationspreise sind Schätzwerte. Der finale Preis und die akzeptierten Zahlungsmittel ergeben sich aus dem individuellen Angebot, das Ihnen oder Ihrem Händler nach Prüfung Ihrer Bootsdaten übermittelt wird.</Translate>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground"><Translate>6. Lieferung, Installation und Leistungserbringung</Translate></h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <Translate>Die Lieferbedingungen, der Liefertermin sowie etwaige Lieferbeschränkungen oder Termine für die Installation an Ihrem Boot werden individuell im Rahmen des Angebotsverfahrens mit unseren zertifizierten Händlern oder direkt mit uns vereinbart.</Translate>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground"><Translate>7. Gesetzliches Mängelhaftungsrecht</Translate></h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <Translate>Die Mängelhaftung für unsere Waren richtet sich nach der Regelung "Gewährleistung" in unseren Allgemeinen Geschäftsbedingungen (Teil I).</Translate>
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AGBPage;
