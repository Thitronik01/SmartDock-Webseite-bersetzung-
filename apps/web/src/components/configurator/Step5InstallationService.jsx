import React, { useState } from 'react';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Wrench } from 'lucide-react';
import { isCHCountry } from '@/utils/PriceCalculator.js';

const Step5InstallationService = () => {
  const { installationService, setInstallationService, goNext, goBack, selectedCountry } = useConfigurator();
  const { t } = useLanguage();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (installationService === null || installationService === undefined) {
      setError(t('err_select'));
      return;
    }
    setError('');
    goNext();
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t('s5_service')}</h2>
        <p className="text-muted-foreground">{t('s5_service_q')}</p>
      </div>

      <div className="bg-card p-6 rounded-2xl border border-border">
        <RadioGroup 
          value={installationService ? "yes" : "no"} 
          onValueChange={(val) => setInstallationService(val === "yes")} 
          className="flex flex-col gap-6"
        >
          <Label htmlFor="inst-yes" className="flex items-start space-x-4 cursor-pointer p-4 rounded-xl border border-border hover:border-primary/50 transition-colors">
            <RadioGroupItem value="yes" id="inst-yes" className="mt-1" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 font-medium text-lg">
                  <Wrench className="w-5 h-5 text-primary" />
                  {t('s5_service_yes')}
                </div>
                <span className="font-semibold text-primary">{isCHCountry(selectedCountry) ? '+ CHF\u00A01.500,00' : '+ 2.000,00 \u20AC'}</span>
              </div>
              <p className="text-sm text-muted-foreground font-normal">{t('s5_service_yes_desc')}</p>
            </div>
          </Label>

          <Label htmlFor="inst-no" className="flex items-start space-x-4 cursor-pointer p-4 rounded-xl border border-border hover:border-primary/50 transition-colors">
            <RadioGroupItem value="no" id="inst-no" className="mt-1" />
            <div>
              <div className="font-medium text-lg mb-1">{t('s5_service_no')}</div>
              <p className="text-sm text-muted-foreground font-normal">{t('s5_service_no_desc')}</p>
            </div>
          </Label>
        </RadioGroup>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-border gap-4 mt-8">
        <Button variant="outline" onClick={goBack} className="w-full sm:w-auto">{t('btn_back')}</Button>
        <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleNext}>{t('btn_next')}</Button>
      </div>
    </div>
  );
};

export default Step5InstallationService;