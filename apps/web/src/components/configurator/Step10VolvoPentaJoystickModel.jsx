import React, { useState } from 'react';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Button } from '@/components/ui/button';
import { SelectionCard } from './SelectionCard.jsx';
import { Mail } from 'lucide-react';

const Step10VolvoPentaJoystickModel = () => {
  const { volvoPentaJoystickModel, setVolvoPentaJoystickModel, goNext, goBack } = useConfigurator();
  const { t } = useLanguage();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!volvoPentaJoystickModel) return setError(t('err_select'));
    goNext();
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t('s10_vol_joy_mod')}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <SelectionCard 
          title={t('step2_volvo_evc_bc')} 
          checked={volvoPentaJoystickModel === 'Joystick EVC B & C (Volvo Penta)'} 
          onClick={() => setVolvoPentaJoystickModel('Joystick EVC B & C (Volvo Penta)')} 
        />
        <SelectionCard 
          title={t('step2_volvo_evc_20')} 
          checked={volvoPentaJoystickModel === 'Joystick EVC 2.0 & D E (Volvo Penta)'} 
          onClick={() => setVolvoPentaJoystickModel('Joystick EVC 2.0 & D E (Volvo Penta)')} 
        />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-border gap-4 mt-8">
        <div className="w-full sm:w-1/3 flex justify-start">
          <Button variant="outline" onClick={goBack}>{t('btn_back')}</Button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center">
          <Button variant="outline" asChild>
            <a href="mailto:smartdock@thitronik.de?subject=SMARTDOCK">
              <Mail className="w-4 h-4 mr-2" />
              {t('btn_ask_question')}
            </a>
          </Button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-end">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleNext}>{t('btn_next')}</Button>
        </div>
      </div>
    </div>
  );
};

export default Step10VolvoPentaJoystickModel;