
import React, { useState } from 'react';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Button } from '@/components/ui/button';
import { SelectionCard } from './SelectionCard.jsx';
import { Mail } from 'lucide-react';

const Step3ManufacturerSelection = () => {
  const { engineManufacturer, setEngineManufacturer, goNext, goBack } = useConfigurator();
  const { t } = useLanguage();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!engineManufacturer) {
      setError(t('err_select') || 'Bitte triff eine Auswahl.');
      return;
    }
    setError('');
    goNext();
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t('manufacturer_of_drive_technology') || 'Hersteller der Antriebstechnik'}</h2>
        <p className="text-muted-foreground">{t('select_manufacturer_main_engines') || 'Bitte wähle den Hersteller deiner Hauptmotoren.'}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
        <SelectionCard 
          title="MerCruiser/Mercury" 
          checked={engineManufacturer === 'MerCruiser/Mercury'} 
          onClick={() => setEngineManufacturer('MerCruiser/Mercury')} 
        />
        <SelectionCard 
          title="Yamaha" 
          checked={engineManufacturer === 'Yamaha'} 
          onClick={() => setEngineManufacturer('Yamaha')} 
        />
        <SelectionCard 
          title="Volvo Penta" 
          checked={engineManufacturer === 'Volvo Penta'} 
          onClick={() => setEngineManufacturer('Volvo Penta')} 
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-border gap-4 mt-8">
        <div className="w-full sm:w-1/3 flex justify-start">
          <Button variant="outline" onClick={goBack}>{t('button_back') || 'Zurück'}</Button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center">
          <Button variant="outline" asChild>
            <a href="mailto:smartdock@thitronik.de?subject=SMARTDOCK">
              <Mail className="w-4 h-4 mr-2" />
              {t('button_ask_question') || 'Frage stellen'}
            </a>
          </Button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-end">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleNext}>{t('button_continue') || 'Weiter'}</Button>
        </div>
      </div>
    </div>
  );
};

export default Step3ManufacturerSelection;
