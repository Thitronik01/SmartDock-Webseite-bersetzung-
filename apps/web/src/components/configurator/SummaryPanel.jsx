import React from 'react';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { formatPrice, formatPriceByCurrency, countryData } from '@/utils/PriceCalculator.js';
import { translateCountryName } from '@/utils/translationHelpers.js';
import { translateConfigValue } from '@/utils/translateConfigValue.js';

const SummaryPanel = () => {
  const { priceData, selectedCountry, configData, installationService } = useConfigurator();
  const { t, currentLanguage } = useLanguage();
  const isEN = currentLanguage === 'EN';
  const isFR = currentLanguage === 'FR';

  const vatRate = selectedCountry && countryData[selectedCountry] 
    ? countryData[selectedCountry].vat 
    : (priceData?.vat || 19);

  const getLabel = (key) => {
    const labels = {
      country: t('step1_label') || (isEN ? 'Country' : 'Land'),
      engineCount: t('sum_motor_count') || (isEN ? 'Engine Count' : 'Motorenanzahl')
    };
    return labels[key] || key;
  };

  const getFormattedProductName = (name) => {
    // Device descriptions (ECU/TCU/ACU/WCU) are already fully composed with
    // their correct components by PriceCalculator.js - just translate them.
    return translateConfigValue(name, isEN, isFR);
  };

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm sticky top-24">
      <div className="p-6 border-b border-border bg-muted/30">
        <h3 className="font-semibold text-lg">{t('summary_title') || 'Zusammenfassung'}</h3>
      </div>
      
      {/* Configuration Details */}
      {(selectedCountry || (configData?.motorCount > 0) || installationService !== null) && (
        <div className="px-6 py-4 border-b border-border space-y-2 text-sm bg-muted/10">
          {selectedCountry && (
            <div className="flex justify-between items-start gap-4">
              <span className="text-muted-foreground">
                {String(getLabel('country')).replace(/:+$/, '')}:
              </span>
              <span className="font-medium text-right">
                {translateCountryName(selectedCountry, currentLanguage)}
              </span>
            </div>
          )}
          {configData?.motorCount > 0 && (
            <div className="flex justify-between items-start gap-4">
              <span className="text-muted-foreground">
                {String(getLabel('engineCount')).replace(/:+$/, '')}:
              </span>
              <span className="font-medium text-right">
                {configData.motorCount === 1 
                  ? t('step2_motor_1') || '1 Engine'
                  : t('step2_motor_2plus') || '2+ Engines'
                }
              </span>
            </div>
          )}
          {installationService !== null && installationService !== undefined && (
            <div className="flex justify-between items-start gap-4">
              <span className="text-muted-foreground">
                {String(t('s5_service') || (isEN ? 'Installation Service' : 'Einbauservice')).replace(/:+$/, '')}:
              </span>
              <span className="font-medium text-right">
                {installationService ? t('yes') : t('no')}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-6 space-y-4">
        {/* Selected Products List */}
        <div className="space-y-3 mb-6">
          {priceData?.configurationPrices?.map((item, idx) => (
            <div key={idx} className="flex justify-between items-start py-1 text-sm border-b border-border/50 last:border-0 gap-4">
              <div className="text-muted-foreground leading-tight">
                {getFormattedProductName(item.name)}
              </div>
              <div className="font-medium whitespace-nowrap pt-0.5">
                {formatPriceByCurrency(item.price, priceData?.currency)}
              </div>
            </div>
          ))}
          {(!priceData?.configurationPrices || priceData.configurationPrices.length === 0) && (
            <p className="text-sm text-muted-foreground italic">
              {t('sum_no_products') || (isEN ? 'No products selected yet.' : 'Noch keine Produkte ausgewählt.')}
            </p>
          )}
        </div>

        {/* Totals Section */}
        <div className="space-y-2 pt-4 border-t border-border">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t('summary_subtotal') || 'Zwischensumme'}</span>
            <span className="font-medium">{formatPriceByCurrency(priceData?.subtotal || 0, priceData?.currency)}</span>
          </div>
          
          {(priceData?.bundleDiscount || 0) < 0 && (
            <div className="flex justify-between text-sm text-primary font-medium">
              <span>{t('summary_bundle_discount') || 'Paketrabatt'}</span>
              <span>{formatPriceByCurrency(priceData.bundleDiscount, priceData?.currency)}</span>
            </div>
          )}

          {vatRate > 0 && (
            <div className="flex justify-between text-sm pt-2">
              <span className="text-muted-foreground">
                {String(t('summary_vat') || 'MwSt.').replace(/:+$/, '')} ({vatRate}%):
              </span>
              <span className="text-muted-foreground">{t('sum_incl') || 'inklusive'}</span>
            </div>
          )}
          
          <div className="flex justify-between items-end pt-4 border-t border-border mt-4">
            <span className="text-base font-bold">{t('summary_gross_total_alt') || 'Gesamtbetrag'}</span>
            <span className="text-xl font-bold text-primary">{formatPriceByCurrency(priceData?.totalPrice || 0, priceData?.currency)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel;