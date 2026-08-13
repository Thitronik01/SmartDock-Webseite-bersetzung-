
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';

const PrivacyPage = () => {
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === 'EN';

  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang={isEn ? "en-US" : "de-DE"} />
        <title>{isEn ? `Privacy Policy - SMARTDOCK` : `Datenschutz - SMARTDOCK`}</title>
        <meta 
          name="description" 
          content={isEn 
            ? "Privacy policy and information regarding data processing at SMARTDOCK." 
            : "Datenschutzerklärung und Informationen zur Datenverarbeitung bei SMARTDOCK."
          } 
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: isEn ? "Home" : "Startseite", path: '/' },
            { label: isEn ? "Privacy Policy" : "Datenschutz", path: '/datenschutz' }
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
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground" style={{ letterSpacing: '-0.02em' }}>
            {isEn ? "Privacy Policy" : "Datenschutzerklärung"}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {isEn 
              ? "Information on the collection, processing and use of your personal data."
              : "Informationen über die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten."}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm space-y-12"
        >
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "1. Introduction" : "1. Einleitung"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {isEn 
                  ? "We appreciate your interest in our website and products. The protection of your privacy is very important to us. Below we provide detailed information about how we handle your data."
                  : "Wir freuen uns über Ihr Interesse an unserer Website und unseren Produkten. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten."}
              </p>
              <p>
                {isEn
                  ? "Personal data is any data with which you could be personally identified. This includes, for example, your name, e-mail address, postal address, or usage data such as your IP address."
                  : "Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Hierzu zählen beispielsweise Name, E-Mail-Adresse, Anschrift oder auch Nutzungsdaten wie Ihre IP-Adresse."}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "2. Contact (Data Controller)" : "2. Kontakt (Verantwortlicher)"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {isEn
                  ? "The controller responsible for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is:"
                  : "Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:"}
              </p>
              <div className="p-4 bg-muted/50 rounded-lg text-foreground">
                <p className="font-medium">Thitronik GmbH</p>
                <p>Finkenweg 9-15</p>
                <p>24340 Eckernförde</p>
                <p>{isEn ? "Germany" : "Deutschland"}</p>
                <p className="mt-2">{isEn ? "Phone" : "Telefon"}: +49 4351 767440</p>
                <p>E-Mail: smartdock@thitronik.de</p>
              </div>
              <p>
                {isEn ? "Further details about the responsible party can be found in our " : "Weitere Details zur verantwortlichen Stelle finden Sie in unserem "}
                <Link to="/impressum" className="text-primary hover:underline">
                  {isEn ? "Legal Notice" : "Impressum"}
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "3. Server Log Files" : "3. Server-Logfiles"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {isEn
                  ? "You can visit our websites without providing any personal information. Every time a website is accessed, the web server merely automatically saves a so-called server log file, which contains e.g., the name of the requested file, your IP address, date and time of the request, transferred data volume and the requesting provider (access data) and documents the request."
                  : "Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Aufruf einer Webseite speichert der Webserver lediglich automatisch ein sogenanntes Server-Logfile, das z.B. den Namen der angeforderten Datei, Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, übertragene Datenmenge und den anfragenden Provider (Zugriffsdaten) enthält und den Abruf dokumentiert."}
              </p>
              <p>
                {isEn
                  ? "This access data is evaluated exclusively for the purpose of ensuring trouble-free operation of the site and improving our offer. In accordance with Art. 6 Para. 1 S. 1 lit. f GDPR, this serves to safeguard our legitimate interests in a correct presentation of our offer, which predominate in the context of a balancing of interests."
                  : "Diese Zugriffsdaten werden ausschließlich zum Zwecke der Sicherstellung eines störungsfreien Betriebs der Seite sowie der Verbesserung unseres Angebots ausgewertet. Dies dient gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO der Wahrung unserer im Rahmen einer Interessensabwägung überwiegenden berechtigten Interessen an einer korrekten Darstellung unseres Angebots."}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "4. Customer's Initiative Contact via E-Mail" : "4. Initiativ-Kontaktaufnahme des Kunden per E-Mail"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {isEn
                  ? "If you contact us by e-mail or via a contact form, the data you provide (your e-mail address, possibly your name and telephone number) will be stored by us to answer your questions."
                  : "Wenn Sie per E-Mail oder über ein Kontaktformular Kontakt mit uns aufnehmen, werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu beantworten."}
              </p>
              <p>
                {isEn
                  ? "We delete the data arising in this context after storage is no longer necessary, or restrict processing if there are statutory retention obligations. The legal basis for processing the data is our legitimate interest in responding to your request in accordance with Art. 6 Para. 1 lit. f GDPR. If your contact is aimed at concluding a contract, the additional legal basis for processing is Art. 6 Para. 1 lit. b GDPR."
                  : "Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen. Rechtsgrundlage für die Verarbeitung der Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO."}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "5. Orders" : "5. Bestellungen"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {isEn
                  ? "We collect, process, and use personal data only to the extent necessary for the establishment, content formulation, or modification of the legal relationship (inventory data). This is done on the basis of Art. 6 Para. 1 lit. b GDPR, which permits the processing of data to fulfil a contract or for pre-contractual measures."
                  : "Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses (Bestandsdaten) erforderlich sind. Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet."}
              </p>
              <p>
                {isEn
                  ? "To fulfil the contract, we pass your data on to the shipping company commissioned with the delivery, insofar as this is necessary for the delivery of ordered goods. To process payments, we pass on the necessary payment data to the credit institution commissioned with the payment and, if applicable, to payment service providers commissioned by us."
                  : "Zur Vertragserfüllung geben wir Ihre Daten an das mit der Lieferung beauftragte Versandunternehmen weiter, soweit dies zur Lieferung bestellter Waren erforderlich ist. Zur Abwicklung von Zahlungen geben wir die hierfür erforderlichen Zahlungsdaten an das mit der Zahlung beauftragte Kreditinstitut und ggf. von uns beauftragte Zahlungsdienstleister weiter."}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "6. Advertising (Newsletter)" : "6. Werbung (Newsletter)"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {isEn
                  ? "If you register for our newsletter, we use the data required for this or separately provided by you to regularly send you our e-mail newsletter based on your consent in accordance with Art. 6 Para. 1 S. 1 lit. a GDPR."
                  : "Wenn Sie sich zu unserem Newsletter anmelden, verwenden wir die hierfür erforderlichen oder gesondert von Ihnen mitgeteilten Daten, um Ihnen regelmäßig unseren E-Mail-Newsletter aufgrund Ihrer Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO zuzusenden."}
              </p>
              <p>
                {isEn
                  ? "Unsubscribing from the newsletter is possible at any time and can be done either by sending a message to the contact option described above or via a link provided for this purpose in the newsletter. After unsubscription, we will delete your e-mail address unless you have expressly consented to further use of your data."
                  : "Die Abmeldung vom Newsletter ist jederzeit möglich und kann entweder durch eine Nachricht an die oben beschriebene Kontaktmöglichkeit oder über einen dafür vorgesehenen Link im Newsletter erfolgen. Nach Abmeldung löschen wir Ihre E-Mail-Adresse, soweit Sie nicht ausdrücklich in eine weitere Nutzung Ihrer Daten eingewilligt haben."}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "7. Cookies" : "7. Cookies"}
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-medium mb-3 text-foreground">
                  {isEn ? "Technically necessary cookies" : "Technisch notwendige Cookies"}
                </h3>
                <p>
                  {isEn
                    ? "To make visiting our website attractive and to enable the use of certain functions, we use so-called cookies on various pages. This serves to safeguard our legitimate interests, which predominate in the context of a balancing of interests, in an optimised presentation of our offer according to Art. 6 Para. 1 S. 1 lit. f GDPR."
                    : "Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir auf verschiedenen Seiten sogenannte Cookies. Dies dient der Wahrung unserer im Rahmen einer Interessensabwägung überwiegenden berechtigten Interessen an einer optimierten Darstellung unseres Angebots gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO."}
                </p>
                <p className="mt-2">
                  {isEn
                    ? "Most of the cookies we use are deleted from your hard drive at the end of the browser session (so-called session cookies). Other cookies remain on your computer and enable us to recognise your computer on your next visit (persistent cookies)."
                    : "Die meisten der von uns verwendeten Cookies werden nach Ende der Browser-Sitzung wieder von Ihrer Festplatte gelöscht (sog. Sitzungs-Cookies). Andere Cookies verbleiben auf Ihrem Rechner und ermöglichen es uns, Ihren Rechner bei Ihrem nächsten Besuch wiederzuerkennen (dauerhafte Cookies)."}
                </p>
              </div>
              
              <div>
                {/* DRAFT – requires legal review before publication */}
                <h3 className="text-xl font-medium mb-3 text-foreground">
                  {isEn ? 'Consent Management (Cookie Banner)' : 'Einwilligungsverwaltung (Cookie-Banner)'}
                </h3>
                <p>
                  {isEn
                    ? 'We use a self-hosted consent management solution to obtain and document your consent to the use of optional technologies such as Google Analytics 4. When you visit our website, a banner is displayed that allows you to accept all optional services or only technically necessary ones. Your choice is stored in your browser\'s local storage (key: "cookieConsent"). No data is transmitted to a third-party consent service; consent is recorded locally on your device only.'
                    : 'Wir verwenden eine eigene Einwilligungslösung (Cookie-Banner), um Ihre Einwilligung zur Nutzung optionaler Technologien wie Google Analytics 4 einzuholen und zu dokumentieren. Beim Besuch unserer Website wird ein Banner angezeigt, über das Sie alle optionalen Dienste oder nur technisch notwendige Dienste akzeptieren können. Ihre Auswahl wird im Local Storage Ihres Browsers unter dem Schlüssel \u201ecookieConsent\u201c gespeichert. Es werden keine Daten an einen Drittanbieter für Einwilligungsverwaltung übertragen; die Einwilligung wird ausschließlich lokal auf Ihrem Gerät erfasst.'}
                </p>
                <p className="mt-2">
                  {isEn
                    ? 'You can withdraw your consent at any time by clicking "Cookie Settings" in the footer. This removes the stored consent, deletes any Google Analytics cookies, and reloads the page so that no further analytics data is transmitted.'
                    : 'Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie im Footer auf \u201eCookie-Einstellungen\u201c klicken. Dadurch wird die gespeicherte Einwilligung entfernt, vorhandene Google-Analytics-Cookies werden gelöscht und die Seite neu geladen, sodass keine weiteren Analysedaten übertragen werden.'}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "8. Analysis" : "8. Analyse"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <h3 className="text-xl font-medium mb-3 text-foreground">Google Analytics 4</h3>
              <p>
                {isEn
                  ? 'We use Google Analytics 4 (Measurement ID: G-5DDPJH2NRW), a web analytics service provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland ("Google"). Google Analytics uses cookies that enable an analysis of your use of the website. Google Analytics 4 is only loaded and activated after you have explicitly consented via the cookie banner. The legal basis is your consent pursuant to Art. 6 para. 1 lit. a GDPR.'
                  : 'Wir nutzen auf unserer Website Google Analytics 4 (Mess-ID: G-5DDPJH2NRW), einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland ("Google"). Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglichen. Google Analytics 4 wird erst geladen und aktiviert, nachdem Sie über das Cookie-Banner ausdrücklich eingewilligt haben. Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.'}
              </p>
              <p>
                {isEn
                  ? "The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there. With Google Analytics 4, IP anonymization is activated by default. As a result, your IP address is shortened beforehand by Google within member states of the European Union or in other contracting states of the Agreement on the European Economic Area."
                  : "Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Bei Google Analytics 4 ist die IP-Anonymisierung standardmäßig aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung gekürzt."}
              </p>
              <p>
                {isEn
                  ? "You can prevent the storage of cookies by a corresponding setting of your browser software; however, we point out that in this case you may not be able to use all functions of this website to their full extent. You can also prevent the collection of the data generated by the cookie and related to your use of the website to Google and the processing of this data by Google by downloading and installing the browser plug-in available under the following link:"
                  : "Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plug-in herunterladen und installieren:"}{' '}
                <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout?hl=de</a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "9. Plug-ins and Miscellaneous" : "9. Plug-ins und Sonstiges"}
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {/* Google Tag Manager is not used on this website – section removed. DRAFT – requires legal review. */}
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-foreground">Cloudfront</h3>
                <p>
                  {isEn
                    ? "We use the Content Delivery Network (CDN) Amazon CloudFront. The provider is Amazon Web Services EMEA SARL, 38 avenue John F. Kennedy, L-1855, Luxembourg. Amazon CloudFront is a globally distributed CDN that enables us to deliver content from our website to you faster and more securely. The data transfer between your browser and our website is routed via CloudFront's infrastructure. The legal basis for use is Art. 6 Para. 1 lit. f GDPR (legitimate interest in a secure and efficient provision of our online offering)."
                    : "Wir nutzen das Content Delivery Network (CDN) Amazon CloudFront. Anbieter ist die Amazon Web Services EMEA SARL, 38 avenue John F. Kennedy, L-1855, Luxemburg. Amazon CloudFront ist ein global verteiltes CDN, das es uns ermöglicht, Inhalte unserer Website schneller und sicherer an Sie auszuliefern. Dabei wird der Datentransfer zwischen Ihrem Browser und unserer Website über die Infrastruktur von CloudFront geroutet. Rechtsgrundlage für die Nutzung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten Bereitstellung unseres Onlineangebotes)."}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "10. Data Subject Rights and Storage Duration" : "10. Betroffenenrechte und Speicherdauer"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {isEn
                  ? "The data processed by us will be deleted or its processing restricted as soon as the purpose of storage no longer applies, there are no statutory retention periods preventing deletion, and/or there is no legitimate interest on our part in continued storage."
                  : "Die von uns verarbeiteten Daten werden gelöscht oder in ihrer Verarbeitung eingeschränkt, sobald der Zweck der Speicherung entfällt, keine gesetzlichen Aufbewahrungsfristen der Löschung entgegenstehen und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht."}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "11. Rights of the Data Subject" : "11. Rechte der betroffenen Person"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {isEn
                  ? "Under the respective legal requirements, you have the following rights regarding your personal data:"
                  : "Sie haben unter den jeweiligen gesetzlichen Voraussetzungen folgende Rechte bezüglich Ihrer personenbezogenen Daten:"}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>{isEn ? "Right of access" : "Recht auf Auskunft"}</strong> 
                  {isEn ? " (Art. 15 GDPR) regarding your personal data processed by us." : " (Art. 15 DSGVO) über Ihre von uns verarbeiteten personenbezogenen Daten."}
                </li>
                <li>
                  <strong>{isEn ? "Right to rectification" : "Recht auf Berichtigung"}</strong> 
                  {isEn ? " (Art. 16 GDPR) of incorrect or completion of your personal data stored by us." : " (Art. 16 DSGVO) unrichtiger oder auf Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten."}
                </li>
                <li>
                  <strong>{isEn ? "Right to erasure" : "Recht auf Löschung"}</strong> 
                  {isEn ? " (Art. 17 GDPR) of your personal data stored by us, unless processing is necessary to exercise the right to freedom of expression and information, to fulfil a legal obligation, for reasons of public interest, or to assert, exercise, or defend legal claims." : " (Art. 17 DSGVO) Ihrer bei uns gespeicherten personenbezogenen Daten, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist."}
                </li>
                <li>
                  <strong>{isEn ? "Right to restriction of processing" : "Recht auf Einschränkung der Verarbeitung"}</strong> 
                  {isEn ? " (Art. 18 GDPR) of your personal data, insofar as you dispute the accuracy of the data, the processing is unlawful, but you reject its deletion." : " (Art. 18 DSGVO) Ihrer personenbezogenen Daten, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen."}
                </li>
                <li>
                  <strong>{isEn ? "Right to data portability" : "Recht auf Datenübertragbarkeit"}</strong> 
                  {isEn ? " (Art. 20 GDPR), i.e., the right to receive your personal data that you have provided to us in a structured, common, and machine-readable format." : " (Art. 20 DSGVO), d.h. das Recht, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten."}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "12. Right to Lodge a Complaint with the Supervisory Authority" : "12. Beschwerderecht bei der Aufsichtsbehörde"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {isEn
                  ? "According to Art. 77 GDPR, you have the right to complain to a supervisory authority. As a rule, you can contact the supervisory authority of your usual place of residence or work or our company headquarters for this purpose."
                  : "Gemäß Art. 77 DSGVO haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Unternehmenssitzes wenden."}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "13. Right to Object" : "13. Widerspruchsrecht"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {isEn
                  ? "If your personal data are processed on the basis of legitimate interests according to Art. 6 Para. 1 S. 1 lit. f GDPR, you have the right to object to the processing of your personal data according to Art. 21 GDPR, provided that there are reasons for this arising from your particular situation or the objection is directed against direct marketing. In the latter case, you have a general right of objection, which we will implement without specifying a particular situation."
                  : "Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird."}
              </p>
              <p>
                {isEn
                  ? "If you would like to make use of your right of revocation or objection, an e-mail to the e-mail address mentioned in the legal notice or in section 2 is sufficient."
                  : "Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an die im Impressum oder in Abschnitt 2 genannte E-Mail-Adresse."}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              {isEn ? "14. Addition / Adjustment to the Privacy Policy" : "14. Ergänzung / Anpassung zur Datenschutzerklärung"}
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-medium mb-3 text-foreground">
                  {isEn ? "Web Hosting, Technical Provision, and Form Storage via Hostinger Horizons" : "Webhosting, technische Bereitstellung und Formularspeicherung über Hostinger Horizons"}
                </h3>
                <p>
                  {isEn
                    ? "We use the services of Hostinger Horizons (Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Cyprus) for web hosting, the technical provision of our website, and the storage of form data."
                    : "Wir nutzen für das Webhosting, die technische Bereitstellung unserer Website sowie die Speicherung von Formulardaten die Dienste von Hostinger Horizons (Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Zypern)."}
                </p>
                <p className="mt-2">
                  {isEn
                    ? "When you visit our website or use forms on our website, your data is processed and stored on the servers of Hostinger Horizons. This includes, among other things, IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access, and other data generated via a website."
                    : "Wenn Sie unsere Website besuchen oder Formulare auf unserer Website nutzen, werden Ihre Daten auf den Servern von Hostinger Horizons verarbeitet und gespeichert. Dies umfasst unter anderem IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden."}
                </p>
                <p className="mt-2">
                  {isEn
                    ? "The use of Hostinger Horizons takes place for the purpose of a secure, fast, and efficient provision of our online offer by a professional provider (Art. 6 Para. 1 lit. f GDPR) as well as for the initiation and fulfilment of contracts with our potential and existing customers (Art. 6 Para. 1 lit. b GDPR)."
                    : "Die Inanspruchnahme von Hostinger Horizons erfolgt zum Zwecke einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO) sowie zur Anbahnung und Erfüllung von Verträgen mit unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO)."}
                </p>
                <p className="mt-2">
                  {isEn
                    ? "We have concluded an order processing agreement (DPA) with Hostinger Horizons. This ensures that Hostinger Horizons only processes your personal data according to our instructions and in compliance with the GDPR. Your data will only be stored for as long as is necessary to fulfil the aforementioned purposes or if there are statutory retention periods. Of course, you also have all data subject rights mentioned in Section 11 regarding this data processed by our host."
                    : "Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit Hostinger Horizons geschlossen. Dies stellt sicher, dass Hostinger Horizons Ihre personenbezogenen Daten nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet. Ihre Daten werden nur so lange gespeichert, wie es für die Erfüllung der vorgenannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Ihnen stehen selbstverständlich auch bezüglich dieser bei unserem Hoster verarbeiteten Daten alle in Abschnitt 11 genannten Betroffenenrechte zu."}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-foreground">
                  {isEn ? "Domain Management / DNS via Hetzner" : "Domainverwaltung / DNS über Hetzner"}
                </h3>
                <p>
                  {isEn
                    ? "We use the services of Hetzner Online GmbH (Industriestr. 25, 91710 Gunzenhausen, Germany) for domain management and as a DNS provider."
                    : "Für die Domainverwaltung und als DNS-Provider nutzen wir die Dienste der Hetzner Online GmbH (Industriestr. 25, 91710 Gunzenhausen, Deutschland)."}
                </p>
                <p className="mt-2">
                  {isEn
                    ? "When using our website, requests are sent to Hetzner's servers to resolve domain names into IP addresses (DNS routing). Technical connection data such as your IP address can be transmitted to Hetzner and stored temporarily in the form of log files."
                    : "Bei der Nutzung unserer Website werden zur Auflösung der Domainnamen in IP-Adressen (DNS-Routing) Anfragen an die Server von Hetzner gesendet. Hierbei können technische Verbindungsdaten wie Ihre IP-Adresse an Hetzner übertragen und in Form von Logfiles kurzzeitig gespeichert werden."}
                </p>
                <p className="mt-2">
                  {isEn
                    ? "The use of Hetzner is based on our legitimate interest in the reliable and secure accessibility of our website under our domain name in accordance with Art. 6 Para. 1 lit. f GDPR."
                    : "Die Nutzung von Hetzner erfolgt auf Grundlage unseres berechtigten Interesses an einer zuverlässigen und sicheren Erreichbarkeit unserer Website unter unserem Domainnamen gemäß Art. 6 Abs. 1 lit. f DSGVO."}
                </p>
                <p className="mt-2">
                  {isEn
                    ? "We have also concluded a corresponding order processing agreement (DPA) with Hetzner to ensure the protection of your data during domain and DNS management. The log data generated within the scope of DNS queries is usually deleted after a few days, provided there are no legal obligations for longer retention. You can assert your rights as a data subject against us at any time with regard to these processing operations as well."
                    : "Auch mit Hetzner haben wir einen entsprechenden Vertrag zur Auftragsverarbeitung (AVV) abgeschlossen, um den Schutz Ihrer Daten bei der Domain- und DNS-Verwaltung sicherzustellen. Die im Rahmen der DNS-Abfragen anfallenden Logdaten werden in der Regel nach wenigen Tagen gelöscht, sofern keine rechtlichen Verpflichtungen zur längeren Aufbewahrung bestehen. Ihre Rechte als betroffene Person können Sie jederzeit auch im Hinblick auf diese Verarbeitungsvorgänge gegenüber uns geltend machen."}
                </p>
              </div>
            </div>
          </section>

          <div className="pt-8 mt-12 border-t border-border">
            <p className="text-sm font-medium text-muted-foreground">
              {isEn ? "Last updated: October 22, 2024" : "Letzte Aktualisierung: 22.10.2024"}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;
