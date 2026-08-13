
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ChevronDown, PhoneCall, FileDown, AlertCircle, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import pb from '@/lib/pocketbaseClient.js';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import { pathFor } from '@/config/routes.js';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';

// Cross-origin resources (PocketBase / CDN) ignore the <a download> filename,
// so we fetch the file as a blob and trigger a download with the desired name.
const downloadFileAs = async (url, filename) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('Download failed, opening in new tab instead:', error);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

const sanitizeFilename = (name) => `${name.replace(/[\\/:*?"<>|]+/g, '').trim()}.pdf`;

const GuideItem = ({ guide, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isEn = lang === 'EN';
  const isFr = lang === 'FR';

  // Generate PDF URL if file exists
  const pdfUrl = guide.datei ? pb.files.getURL(guide, guide.datei) : null;

  // Pick title based on selected language, falling back to German
  const title = (isEn || isFr) && guide.titel_en && guide.titel_en.trim() !== ''
    ? guide.titel_en
    : guide.titel;

  // Pick description based on selected language, falling back to German
  let description;
  if (isFr && guide.beschreibung_fr && guide.beschreibung_fr.trim() !== '') {
    description = guide.beschreibung_fr;
  } else if (isEn && guide.beschreibung_en && guide.beschreibung_en.trim() !== '') {
    description = guide.beschreibung_en;
  } else {
    description = guide.beschreibung;
  }

  // Check if a description actually exists
  const hasDescription = Boolean(description && description.trim() !== '');

  const downloadLabel = isFr ? 'Télécharger le PDF' : (isEn ? 'Download PDF' : 'PDF Herunterladen');
  const downloadAriaLabel = isFr
    ? `Télécharger le PDF pour ${title}`
    : (isEn ? `Download PDF for ${title}` : `PDF Herunterladen für ${title}`);

  const handleToggle = () => {
    if (hasDescription) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`mb-4 overflow-hidden border border-border bg-card rounded-2xl transition-all duration-200 ${hasDescription ? 'hover:border-primary/50' : ''}`}>
      <div 
        className={`flex items-center justify-between p-5 md:p-6 select-none ${hasDescription ? 'cursor-pointer' : 'cursor-default'}`}
        onClick={handleToggle}
      >
        <div className="flex items-center gap-4 flex-1 pr-4">
          {hasDescription && (
            <div className={`p-2 rounded-full transition-colors duration-300 flex-shrink-0 ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
              />
            </div>
          )}
          <h3 className={`text-lg md:text-xl font-semibold text-card-foreground leading-snug ${!hasDescription ? 'pl-2' : ''}`}>
            {title}
          </h3>
        </div>

        {pdfUrl && (
          <a 
            href={pdfUrl} 
            download={sanitizeFilename(title)}
            className="flex items-center justify-center p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 shrink-0"
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); downloadFileAs(pdfUrl, sanitizeFilename(title)); }}
            title={downloadLabel}
            aria-label={downloadAriaLabel}
          >
            <FileDown className="w-6 h-6" />
          </a>
        )}
      </div>

      {hasDescription && (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="p-5 md:p-6 pt-0 border-t border-border/50">
                <div className="mt-4 text-muted-foreground whitespace-pre-wrap leading-relaxed max-w-prose">
                  {description}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

const TechnicalDataItem = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-3 overflow-hidden border border-border bg-card rounded-2xl transition-all duration-200 hover:border-primary/50">
      <div 
        className="flex items-center justify-between p-5 md:p-6 select-none cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex items-center gap-4 flex-1">
          <div className={`p-2 rounded-full transition-colors duration-300 flex-shrink-0 ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
            <ChevronDown 
              className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </div>
          <h4 className="text-base md:text-lg font-semibold text-card-foreground leading-snug">
            {title}
          </h4>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-5 md:p-6 pt-0 border-t border-border/50">
              <div className="mt-4 space-y-3">
                {data.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <span className="font-medium text-foreground">{item.label}:</span>
                    <span className="text-muted-foreground text-right sm:text-left">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InstallationPage = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const isEn = currentLanguage === 'EN';
  const isFr = currentLanguage === 'FR';

  // Helper: choose the right string for the current language (DE fallback)
  const tt = (de, en, fr) => (isFr ? (fr ?? en ?? de) : isEn ? (en ?? de) : de);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ecuGuides, setEcuGuides] = useState([]);
  const [tcuGuides, setTcuGuides] = useState([]);

  const fetchGuides = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await pb.collection('anleitungen').getList(1, 100, {
        filter: 'aktiv = true',
        sort: '-created'
      });

      const records = response.items || [];
      setEcuGuides(records.filter(r => r.kategorie === 'ECU'));
      setTcuGuides(records.filter(r => r.kategorie === 'TCU'));
    } catch (err) {
      console.error("Error fetching anleitungen:", err);
      setError(tt(
        "Fehler beim Laden der Installationsanleitungen. Bitte versuchen Sie es später erneut.",
        "Error loading installation instructions. Please try again later.",
        "Erreur lors du chargement des guides d'installation. Veuillez réessayer plus tard."
      ));
    } finally {
      setLoading(false);
    }
  };

  useScrollRestoration();

  useEffect(() => {
    fetchGuides();
  }, [currentLanguage]);

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <Helmet>
        <html lang={isFr ? "fr-FR" : isEn ? "en-US" : "de-DE"} />
        <title>{`Installation - SMARTDOCK`}</title>
        <meta
          name="description"
          content={tt(
            "Installationsanleitungen für SMARTDOCK ECU und TCU Module.",
            "Installation instructions for SMARTDOCK ECU and TCU modules.",
            "Guides d'installation pour les modules SMARTDOCK ECU et TCU."
          )}
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Standardized position & margin */}
        <Breadcrumb 
          items={[
            { label: tt('Startseite', 'Home', 'Accueil'), path: pathFor('home', currentLanguage) },
            { label: tt('Installation', 'Installation', 'Installation'), path: pathFor('installation', currentLanguage) }
          ]} 
        />

        {/* Hero Section */}
        <HeroSection 
          label={tt('INSTALLATION', 'INSTALLATION', 'INSTALLATION')}
          labelColor="#bceb02"
          title={tt('Installationsanleitungen', 'Installation instructions', "Guides d'installation")}
          subtitle={tt(
            'Hier findest du detaillierte Schritt-für-Schritt Anleitungen und technische Dokumentationen für die Installation unserer SMARTDOCK Module.',
            'Here you will find detailed step-by-step instructions and technical documentation for installing our SMARTDOCK modules.',
            "Tu trouveras ici des guides détaillés étape par étape ainsi que la documentation technique pour l'installation de nos modules SMARTDOCK."
          )}
        />

        {/* Main Content Area */}
        <div className="mb-24">
          {loading ? (
            <div className="space-y-12">
              {[1, 2].map((section) => (
                <div key={section} className="space-y-4">
                  <div className="h-8 w-48 bg-muted rounded-md animate-pulse mb-6"></div>
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="h-20 w-full bg-card border border-border rounded-2xl animate-pulse"></div>
                  ))}
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8 text-center flex flex-col items-center">
              <AlertCircle className="w-12 h-12 text-destructive mb-4" />
              <h3 className="text-xl font-semibold text-destructive mb-2">
                {tt('Ein Fehler ist aufgetreten', 'An error occurred', 'Une erreur est survenue')}
              </h3>
              <p className="text-muted-foreground mb-6">{error}</p>
              <Button onClick={fetchGuides} variant="outline" className="gap-2">
                <RefreshCw className="w-4 h-4" />
                {tt('Erneut versuchen', 'Try again', 'Réessayer')}
              </Button>
            </div>
          ) : (
            <div className="space-y-16">
              
              {/* ECU Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-foreground">
                    ECU - Installation
                  </h2>
                  <div className="h-px bg-border flex-1 ml-4 hidden sm:block"></div>
                </div>
                
                {ecuGuides.length > 0 ? (
                  <div className="space-y-4">
                    {ecuGuides.map((guide) => (
                      <GuideItem key={guide.id} guide={guide} lang={currentLanguage} />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground italic bg-secondary/30 p-6 rounded-xl border border-border/50 text-center">
                    {tt(
                      'Aktuell sind keine ECU-Anleitungen verfügbar.',
                      'There are currently no ECU manuals available.',
                      "Aucun guide ECU n'est disponible actuellement."
                    )}
                  </p>
                )}
              </motion.div>

              {/* TCU Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-foreground">
                    TCU - Installation
                  </h2>
                  <div className="h-px bg-border flex-1 ml-4 hidden sm:block"></div>
                </div>

                {tcuGuides.length > 0 ? (
                  <div className="space-y-4">
                    {tcuGuides.map((guide) => (
                      <GuideItem key={guide.id} guide={guide} lang={currentLanguage} />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground italic bg-secondary/30 p-6 rounded-xl border border-border/50 text-center">
                    {tt(
                      'Aktuell sind keine TCU-Anleitungen verfügbar.',
                      'There are currently no TCU manuals available.',
                      "Aucun guide TCU n'est disponible actuellement."
                    )}
                  </p>
                )}
              </motion.div>

              {/* Technical Data Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-foreground">
                    {tt('Technische Daten', 'Technical Data', 'Données techniques')}
                  </h2>
                  <div className="h-px bg-border flex-1 ml-4 hidden sm:block"></div>
                </div>

                <div className="space-y-3">
                  {/* ECU and TCU-P */}
                  <TechnicalDataItem
                    title={tt('Technische Daten ECU, TCU-P', 'Technical Data ECU and TCU-P', 'Données techniques ECU, TCU-P')}
                    data={[
                      { label: tt('Spannungsversorgung', 'Power supply', 'Alimentation électrique'), value: '12 V DC' },
                      { label: tt('Stromaufnahme (12 V)', 'Current consumption (12 V)', 'Consommation de courant (12 V)'), value: '54,6 mA' },
                      { label: tt('Genutzte Frequenz (Bluetooth)', 'Bluetooth frequency', 'Fréquence utilisée (Bluetooth)'), value: '2.402–2.480 GHz' },
                      { label: tt('Reichweite', 'Range', 'Portée'), value: tt('bis zu 50 m', 'up to 50 m', "jusqu'à 50 m") },
                      { label: tt('Max. Einschaltdauer', 'Max. switch-on duration', 'Durée de mise en marche max.'), value: tt('unbegrenzt', 'unlimited', 'illimitée') },
                      { label: tt('Max. Temperaturbereich', 'Max. temperature range', 'Plage de température max.'), value: '-10 bis +60°C' },
                      { label: tt('Abmessungen (B x H x T)', 'Dimensions (W x H x D)', 'Dimensions (L x H x P)'), value: '84 × 98 × 21 mm' },
                      { label: tt('Gewicht', 'Weight', 'Poids'), value: 'ca. 91 g' }
                    ]}
                  />

                  {/* TCU and ACU */}
                  <TechnicalDataItem
                    title={tt('Technische Daten TCU, ACU', 'Technical Data TCU and ACU', 'Données techniques TCU, ACU')}
                    data={[
                      { label: tt('Spannungsversorgung', 'Power supply', 'Alimentation électrique'), value: '12/24 V DC' },
                      { label: tt('Stromaufnahme (12 V)', 'Current consumption (12 V)', 'Consommation de courant (12 V)'), value: '<5 mA' },
                      { label: tt('Genutzte Frequenz (Bluetooth)', 'Bluetooth frequency', 'Fréquence utilisée (Bluetooth)'), value: '2.402 - 2.480 GHz' },
                      { label: tt('Reichweite', 'Range', 'Portée'), value: tt('bis zu 50 m', 'up to 50 m', "jusqu'à 50 m") },
                      { label: tt('Max. Einschaltdauer', 'Max. switch-on duration', 'Durée de mise en marche max.'), value: '120s (danach 120s Pause)' },
                      { label: tt('Max. Ausgangsstrom (12 V, 120 s)', 'Max. output current (12 V, 120 s)', 'Courant de sortie max. (12 V, 120 s)'), value: '4,5 A' },
                      { label: tt('Max. Temperaturbereich', 'Max. temperature range', 'Plage de température max.'), value: '-40 bis +85°C' },
                      { label: tt('Abmessungen (B x H x T)', 'Dimensions (W x H x D)', 'Dimensions (L x H x P)'), value: '84 x 98 x 21 mm' },
                      { label: tt('Gewicht', 'Weight', 'Poids'), value: 'ca. 96 g' }
                    ]}
                  />

                  {/* WCU */}
                  <TechnicalDataItem
                    title={tt('Technische Daten WCU', 'Technical Data WCU', 'Données techniques WCU')}
                    data={[
                      { label: tt('Spannungsversorgung', 'Power supply', 'Alimentation électrique'), value: '12/24 V DC' },
                      { label: tt('Stromaufnahme (12 V)', 'Current consumption (12 V)', 'Consommation de courant (12 V)'), value: '<5 mA' },
                      { label: tt('Genutzte Frequenz (Bluetooth)', 'Bluetooth frequency', 'Fréquence utilisée (Bluetooth)'), value: '2.402 - 2.480 GHz' },
                      { label: tt('Reichweite', 'Range', 'Portée'), value: tt('bis zu 50 m', 'up to 50 m', "jusqu'à 50 m") },
                      { label: tt('Max. Ausgangsstrom (12 V, 120 s)', 'Max. output current (12 V, 120 s)', 'Courant de sortie max. (12 V, 120 s)'), value: '4,5 A' },
                      { label: tt('Max. Temperaturbereich', 'Max. temperature range', 'Plage de température max.'), value: '-40 bis +85°C' },
                      { label: tt('Abmessungen (B x H x T)', 'Dimensions (W x H x D)', 'Dimensions (L x H x P)'), value: '84 x 98 x 21 mm' },
                      { label: tt('Gewicht', 'Weight', 'Poids'), value: 'ca. 90 g' }
                    ]}
                  />
                </div>
              </motion.div>

              {/* Conformity Declarations Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-16"
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-foreground">
                    {tt('Konformitätserklärungen', 'Declarations of Conformity', 'Déclarations de conformité')}
                  </h2>
                  <div className="h-px bg-border flex-1 ml-4 hidden sm:block"></div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      title: tt(
                        'EG-Konformitätserklärung SMARTDOCK-ACU / -WCU',
                        'EC Declaration of Conformity SMARTDOCK-ACU / -WCU',
                        'Déclaration de conformité CE SMARTDOCK-ACU / -WCU'
                      ),
                      url: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/9278c9a8a3ea88b81ff0d9e7b8229877.pdf',
                    },
                    {
                      title: tt(
                        'EG-Konformitätserklärung SMARTDOCK-ECU, TCU-P',
                        'EC Declaration of Conformity SMARTDOCK-ECU, TCU-P',
                        'Déclaration de conformité CE SMARTDOCK-ECU, TCU-P'
                      ),
                      url: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/1df41139ddc91a1496cb225088086ae2.pdf',
                    },
                    {
                      title: tt(
                        'EG-Konformitätserklärung SMARTDOCK-TCU',
                        'EC Declaration of Conformity SMARTDOCK-TCU',
                        'Déclaration de conformité CE SMARTDOCK-TCU'
                      ),
                      url: 'https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/4b92ac903dfba2c5551db3e795093aa8.pdf',
                    },
                  ].map((doc) => (
                    <div
                      key={doc.url}
                      className="mb-4 overflow-hidden border border-border bg-card rounded-2xl transition-all duration-200 hover:border-primary/50"
                    >
                      <div className="flex items-center justify-between p-5 md:p-6">
                        <div className="flex items-center gap-4 flex-1 pr-4">
                          <h3 className="text-lg md:text-xl font-semibold text-card-foreground leading-snug">
                            {doc.title}
                          </h3>
                        </div>
                        <a
                          href={doc.url}
                          download={sanitizeFilename(doc.title)}
                          className="flex items-center justify-center p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 shrink-0"
                          onClick={(e) => { e.preventDefault(); downloadFileAs(doc.url, sanitizeFilename(doc.title)); }}
                          title={tt('PDF Herunterladen', 'Download PDF', 'Télécharger le PDF')}
                          aria-label={tt(`PDF Herunterladen für ${doc.title}`, `Download PDF for ${doc.title}`, `Télécharger le PDF pour ${doc.title}`)}
                        >
                          <FileDown className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default InstallationPage;
