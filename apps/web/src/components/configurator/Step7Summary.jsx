
import React from 'react';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Button } from '@/components/ui/button.jsx';
import { formatPriceByCurrency } from '@/utils/PriceCalculator.js';
import { translateCountryName, translateProductName } from '@/utils/translationHelpers.js';
import { translateConfigValue } from '@/utils/translateConfigValue.js';
import { Mail } from 'lucide-react';
import PDFDownloadButton from '@/components/configurator/PDFDownloadButton.jsx';

const Step7Summary = () => {
  const { 
    priceData, 
    installationService, 
    thrusterManufacturer, 
    thrusterType,
    engineManufacturer, 
    configData,
    selectedCountry,
    selectedProducts,
    goNext, 
    goBack 
  } = useConfigurator();
  
  const { currentLanguage, t } = useLanguage();
  const isEN = currentLanguage === 'EN';
  const isFR = currentLanguage === 'FR';

  const getLabel = (key) => {
    const labels = {
      country: t('step1_label'),
      engine: t('sum_engine').replace(/:+$/, ''),
      engineCount: t('step2_motor_count'),
      thruster: t('sum_thruster').replace(/:+$/, ''),
      service: t('s5_service'),
      control: t('conf_cfg_control')
    };
    return labels[key] || key;
  };

  const getFormattedProductName = (name) => {
    // Device descriptions (ECU/TCU/ACU/WCU) are already fully composed with
    // their correct components by PriceCalculator.js - just translate them.
    return translateConfigValue(name, isEN, isFR);
  };

  const translateThrusterValue = (value) => {
    if (value === 'Weitere auf Anfrage') {
      return t('s4_other_req');
    }
    return translateProductName(value, currentLanguage);
  };

  const hasAdditionalModules = selectedProducts?.acu || selectedProducts?.wcu || selectedProducts?.horn;

  const handleNextStep = (e) => {
    e.preventDefault();
    if (typeof goNext === 'function') {
      goNext();
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          {t('conf_summary_req_title')}
        </h2>
        <p className="text-muted-foreground">
          {t('conf_summary_req_desc')} {t('conf_summary_req_desc_dealer')}.
        </p>
      </div>

      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="p-6 border-b border-border">
          <h3 className="font-semibold text-lg mb-4">
            {t('conf_cfg_title')}
          </h3>
          <div className="space-y-3">
            {priceData.configurationPrices && priceData.configurationPrices.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0 gap-4">
                <div className="font-medium text-foreground leading-tight">
                  {getFormattedProductName(item.name)}
                </div>
                <div className="font-semibold whitespace-nowrap">
                  {formatPriceByCurrency(item.price, priceData?.currency)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-b border-border">
          <h3 className="font-semibold text-lg mb-4">
            {t('conf_cfg_modules')}
          </h3>
          {!hasAdditionalModules ? (
            <p className="text-sm text-muted-foreground italic">
              {t('conf_cfg_mod_none')}
            </p>
          ) : (
            <div className="space-y-2 text-sm">
              {selectedProducts?.acu && <div>ACU</div>}
              {selectedProducts?.wcu && <div>WCU</div>}
              {selectedProducts?.horn && <div>{t('prod_horn')}</div>}
            </div>
          )}
        </div>

        <div className="p-6 bg-muted/30 space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t('summary_subtotal').replace(/:+$/, '')}</span>
            <span className="font-medium">{formatPriceByCurrency(priceData.subtotal, priceData?.currency)}</span>
          </div>
          
          {priceData.bundleDiscount < 0 && (
            <div className="flex justify-between text-sm text-primary font-medium">
              <span>{t('summary_bundle_discount').replace(/:+$/, '')}</span>
              <span>{formatPriceByCurrency(priceData.bundleDiscount, priceData?.currency)}</span>
            </div>
          )}

          {priceData.vat > 0 && (
            <div className="flex justify-between text-sm pt-2">
              <span className="text-muted-foreground">
                {t('summary_vat').replace(/:+$/, '')} ({priceData.vat}%):
              </span>
              <span className="text-muted-foreground">{t('sum_incl')}</span>
            </div>
          )}
          
          <div className="flex justify-between items-end pt-4 border-t border-border mt-4">
            <span className="text-lg font-bold">{t('summary_gross_total_alt')}</span>
            <span className="text-2xl font-bold text-primary">{formatPriceByCurrency(priceData.totalPrice, priceData?.currency)}</span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {selectedCountry && (
          <div className="bg-muted p-4 rounded-xl text-sm border border-border">
            <span className="text-muted-foreground block mb-1">
              {String(getLabel('country')).replace(/:+$/, '')}:
            </span>
            <span className="font-medium">{translateCountryName(selectedCountry, currentLanguage)}</span>
          </div>
        )}
        {engineManufacturer && (
          <div className="bg-muted p-4 rounded-xl text-sm border border-border">
            <span className="text-muted-foreground block mb-1">
              {String(getLabel('engine')).replace(/:+$/, '')}:
            </span>
            <span className="font-medium">{engineManufacturer}</span>
          </div>
        )}
        {configData?.motorCount > 0 && (
          <div className="bg-muted p-4 rounded-xl text-sm border border-border">
            <span className="text-muted-foreground block mb-1">
              {String(getLabel('engineCount')).replace(/:+$/, '')}:
            </span>
            <span className="font-medium">
              {configData.motorCount === 1 
                ? t('step2_motor_1')
                : t('step2_motor_2plus')
              }
            </span>
          </div>
        )}
        {(thrusterManufacturer || thrusterType) && (
          <div className="bg-muted p-4 rounded-xl text-sm border border-border">
            <span className="text-muted-foreground block mb-1">
              {String(getLabel('thruster')).replace(/:+$/, '')}:
            </span>
            <span className="font-medium">
              {translateThrusterValue(thrusterManufacturer)} 
              {thrusterType && thrusterType !== thrusterManufacturer ? ` (${translateThrusterValue(thrusterType)})` : ''}
            </span>
          </div>
        )}
        {installationService && (
          <div className="bg-muted p-4 rounded-xl text-sm border border-border">
            <span className="text-muted-foreground block mb-1">
              {String(getLabel('service')).replace(/:+$/, '')}:
            </span>
            <span className="font-medium">{translateProductName('Ja', currentLanguage)}</span>
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground mt-6 bg-secondary/20 p-4 rounded-lg">
        {t('sum_disclaimer')}
      </p>

      <div className="flex flex-col xl:flex-row items-center justify-between w-full pt-8 border-t border-border gap-4 mt-8">
        <div className="w-full xl:w-auto flex justify-start order-4 xl:order-1">
          <Button type="button" variant="outline" onClick={goBack} className="w-full sm:w-auto">
            {t('button_back')}
          </Button>
        </div>
        <div className="w-full xl:w-auto flex flex-col sm:flex-row gap-4 justify-center order-2 xl:order-2">
          <Button type="button" variant="outline" asChild className="w-full sm:w-auto border-primary/50 text-foreground hover:bg-primary/10">
            <a href="mailto:smartdock@thitronik.de?subject=SMARTDOCK">
              <Mail className="w-4 h-4 mr-2" />
              {t('button_ask_question')}
            </a>
          </Button>
          <PDFDownloadButton />
        </div>
        <div className="w-full xl:w-auto flex justify-end order-1 xl:order-3">
          <Button 
            type="button" 
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90" 
            onClick={handleNextStep}
          >
            {t('btn_request')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step7Summary;
