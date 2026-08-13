
import React, { useState } from 'react';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { Mail, AlertCircle } from 'lucide-react';

const countryTranslations = [
  { code: 'BE', de: 'Belgien', en: 'Belgium', fr: 'Belgique' },
  { code: 'BG', de: 'Bulgarien', en: 'Bulgaria', fr: 'Bulgarie' },
  { code: 'DK', de: 'Dänemark', en: 'Denmark', fr: 'Danemark' },
  { code: 'DE', de: 'Deutschland', en: 'Germany', fr: 'Allemagne' },
  { code: 'EE', de: 'Estland', en: 'Estonia', fr: 'Estonie' },
  { code: 'FI', de: 'Finnland', en: 'Finland', fr: 'Finlande' },
  { code: 'FR', de: 'Frankreich', en: 'France', fr: 'France' },
  { code: 'GR', de: 'Griechenland', en: 'Greece', fr: 'Grèce' },
  { code: 'IE', de: 'Irland', en: 'Ireland', fr: 'Irlande' },
  { code: 'IT', de: 'Italien', en: 'Italy', fr: 'Italie' },
  { code: 'HR', de: 'Kroatien', en: 'Croatia', fr: 'Croatie' },
  { code: 'LV', de: 'Lettland', en: 'Latvia', fr: 'Lettonie' },
  { code: 'LT', de: 'Litauen', en: 'Lithuania', fr: 'Lituanie' },
  { code: 'LU', de: 'Luxemburg', en: 'Luxembourg', fr: 'Luxembourg' },
  { code: 'MT', de: 'Malta', en: 'Malta', fr: 'Malte' },
  { code: 'NL', de: 'Niederlande', en: 'Netherlands', fr: 'Pays-Bas' },
  { code: 'AT', de: 'Österreich', en: 'Austria', fr: 'Autriche' },
  { code: 'PL', de: 'Polen', en: 'Poland', fr: 'Pologne' },
  { code: 'PT', de: 'Portugal', en: 'Portugal', fr: 'Portugal' },
  { code: 'RO', de: 'Rumänien', en: 'Romania', fr: 'Roumanie' },
  { code: 'SE', de: 'Schweden', en: 'Sweden', fr: 'Suède' },
  { code: 'CH', de: 'Schweiz', en: 'Switzerland', fr: 'Suisse' },
  { code: 'SK', de: 'Slowakei', en: 'Slovakia', fr: 'Slovaquie' },
  { code: 'SI', de: 'Slowenien', en: 'Slovenia', fr: 'Slovénie' },
  { code: 'ES', de: 'Spanien', en: 'Spain', fr: 'Espagne' },
  { code: 'CZ', de: 'Tschechien', en: 'Czech Republic', fr: 'République tchèque' },
  { code: 'HU', de: 'Ungarn', en: 'Hungary', fr: 'Hongrie' },
  { code: 'CY', de: 'Zypern', en: 'Cyprus', fr: 'Chypre' }
];

const Step1Country = () => {
  const { selectedCountry, setCountry, goNext } = useConfigurator();
  const { currentLanguage, t } = useLanguage();
  const [error, setError] = useState('');

  const isEN = currentLanguage === 'EN';
  const isFR = currentLanguage === 'FR';
  const getName = (c) => isFR ? c.fr : (isEN ? c.en : c.de);

  // Sort countries alphabetically based on the current language
  const sortedCountries = [...countryTranslations].sort((a, b) => {
    const nameA = getName(a);
    const nameB = getName(b);
    return nameA.localeCompare(nameB);
  });

  const handleNext = () => {
    if (!selectedCountry) {
      setError(t('conf_err_country'));
      return;
    }
    setError('');
    goNext();
  };

  const handleCountryChange = (val) => {
    setCountry(val);
    if (val) {
      setError('');
    }
  };

  const disclaimerText = t('footer_disclaimer');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full">
      {/* Disclaimer Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 sm:p-6 shadow-sm">
        <div className="flex gap-4 items-start">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="font-semibold text-amber-900 text-sm sm:text-base">
              {isFR ? 'Configuration sans engagement' : (isEN ? 'Non-binding configuration' : 'Unverbindliche Konfiguration')}
            </h3>
            <p className="text-amber-800 text-xs sm:text-sm leading-relaxed">
              {isFR
                ? "Le fait de remplir, de composer ou d'envoyer cette configuration n'entraîne ni contrat, ni commande, ni aucune autre obligation légale ou financière. Cette configuration est fournie exclusivement à titre informatif et préparatoire et n'est pas contraignante."
                : (isEN 
                  ? 'Filling out, compiling or submitting this configuration does not result in a contract, an order, or any other legal or financial obligations. This configuration is intended solely for informational and preparatory purposes and is not binding.'
                  : 'Durch das Ausfüllen, Zusammenstellen oder Absenden dieser Konfiguration entstehen weder ein Vertrag noch eine Bestellung oder sonstige rechtliche beziehungsweise finanzielle Verpflichtungen. Diese Konfiguration dient ausschließlich der unverbindlichen Information und Vorbereitung.'
                )
              }
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">
          {t('step1_title')}
        </h2>
        <p className="text-muted-foreground">
          {t('step1_description')}
        </p>
      </div>

      <div className="max-w-md">
        <label className="block text-sm font-medium mb-2 text-foreground">
          {t('step1_label')}
        </label>
        <Select value={selectedCountry || ''} onValueChange={handleCountryChange}>
          <SelectTrigger className={`w-full bg-input text-foreground ${error ? 'border-destructive ring-1 ring-destructive' : 'border-border'}`}>
            <SelectValue placeholder="–" />
          </SelectTrigger>
          <SelectContent>
            {sortedCountries.map(c => (
              <SelectItem key={c.code} value={c.de}>
                {getName(c)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error && <p className="text-sm text-destructive mt-2">{error}</p>}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-border gap-4 mt-8">
        <div className="w-full sm:w-1/2 flex justify-start">
          <Button variant="outline" asChild>
            <a href="mailto:smartdock@thitronik.de?subject=SMARTDOCK">
              <Mail className="w-4 h-4 mr-2" />
              {t('button_ask_question')}
            </a>
          </Button>
        </div>
        <div className="w-full sm:w-1/2 flex justify-end">
          <Button onClick={handleNext} className="bg-primary text-primary-foreground hover:bg-primary/90">
            {t('button_continue')}
          </Button>
        </div>
      </div>

      {/* Trademark Disclaimer */}
      <div className="mt-12 pt-8 border-t border-border/50">
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-left">
          {disclaimerText}
        </p>
      </div>
    </div>
  );
};

export default Step1Country;
