
import React, { useState } from 'react';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Button } from '@/components/ui/button.jsx';
import { SelectionCard } from './SelectionCard.jsx';
import { Mail } from 'lucide-react';

const Step2SystemSelection = () => {
  const { selectedProducts, addProduct, goNext, goBack } = useConfigurator();
  const { t } = useLanguage();
  const [error, setError] = useState('');

  const handleNext = () => {
    const hasSelection = selectedProducts.ecu || selectedProducts.tcu.length > 0 || selectedProducts.acu || selectedProducts.wcu || selectedProducts.horn;
    if (!hasSelection) {
      setError(t('err_sys_select'));
      return;
    }
    setError('');
    goNext();
  };

  const handleTcuChange = (type, checked) => {
    const current = [...selectedProducts.tcu];
    if (checked) current.push(type);
    else {
      const idx = current.indexOf(type);
      if (idx > -1) current.splice(idx, 1);
    }
    addProduct('tcu', current);
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full">
      <div>
        <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 block">
          {t('s2_sys_title')}
        </span>
        <h2 className="text-3xl font-bold mb-2">
          {t('s2_sys_desc')}
        </h2>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            {t('s2_main_engines')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SelectionCard 
              id="ecu-1" 
              checked={selectedProducts.ecu === "1 Motor"} 
              onClick={(c) => addProduct('ecu', c ? '1 Motor' : null)}
              title={t('step2_motor_1')} 
              image="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/7b6231a214f5791b8cf22e7de43414de.jpg" 
            />
            <SelectionCard 
              id="ecu-2" 
              checked={selectedProducts.ecu === "2+ Motoren"} 
              onClick={(c) => addProduct('ecu', c ? '2+ Motoren' : null)}
              title={t('step2_motor_2plus')} 
              image="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/0fcdbe96dd69cb4d58e0bf13b4af650b.jpg" 
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            {t('s2_thrusters')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SelectionCard 
              id="tcu-bug" 
              type="checkbox"
              checked={selectedProducts.tcu.includes('Bugstrahlruder')}
              onClick={(c) => handleTcuChange('Bugstrahlruder', c)}
              title={t('prod_bug')} 
              image="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/34ed81f760c552b1fb1c1dcbb9e2e21e.jpg" 
            />
            <SelectionCard 
              id="tcu-heck" 
              type="checkbox"
              checked={selectedProducts.tcu.includes('Heckstrahlruder')}
              onClick={(c) => handleTcuChange('Heckstrahlruder', c)}
              title={t('prod_heck')} 
              image="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/8f5e93a380f595afbb8e0fa34a906055.jpg" 
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            {t('s2_anchors')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SelectionCard 
              id="acu-1" 
              checked={selectedProducts.acu === "1 Ankerwinde"} 
              onClick={(c) => addProduct('acu', c ? '1 Ankerwinde' : null)}
              title={t('prod_anker1')} 
              image="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/8abc81c7254ada423d53330b7269e8ad.jpg" 
            />
            <SelectionCard 
              id="acu-2" 
              checked={selectedProducts.acu === "2 Ankerwinden"} 
              onClick={(c) => addProduct('acu', c ? '2 Ankerwinden' : null)}
              title={t('prod_anker2')} 
              image="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/4f225521f708ab8aea5c3cad73b8671f.jpg" 
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            {t('s2_winches')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SelectionCard 
              id="wcu-1" 
              checked={selectedProducts.wcu === "1 Winch"} 
              onClick={(c) => addProduct('wcu', c ? '1 Winch' : null)}
              title={t('prod_winch1')} 
              image="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/e390ed507db8515672f8ab58afa2e504.jpg" 
            />
            <SelectionCard 
              id="wcu-2" 
              checked={selectedProducts.wcu === "2 Winches"} 
              onClick={(c) => addProduct('wcu', c ? '2 Winches' : null)}
              title={t('prod_winch2')} 
              image="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/4788db7c41be491ef7da026d510beb7f.jpg" 
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            {t('s2_extras')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SelectionCard 
              id="horn" 
              type="checkbox"
              checked={selectedProducts.horn}
              onClick={(c) => addProduct('horn', c)}
              title={t('prod_horn')} 
              image="https://horizons-cdn.hostinger.com/9e931b78-a97e-475e-99a2-3a70b48cf364/31e7207a7507ab93960b2bedf912a8c7.jpg" 
            />
          </div>
        </div>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-border gap-4 mt-8">
        <div className="w-full sm:w-1/3 flex justify-start">
          <Button variant="outline" onClick={goBack}>
            {t('button_back')}
          </Button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center">
          <Button variant="outline" asChild>
            <a href="mailto:smartdock@thitronik.de?subject=SMARTDOCK">
              <Mail className="w-4 h-4 mr-2" />
              {t('button_ask_question')}
            </a>
          </Button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-end">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleNext}>
            {t('button_continue')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step2SystemSelection;
