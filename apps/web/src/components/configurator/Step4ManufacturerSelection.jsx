import React, { useState } from 'react';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Mail } from 'lucide-react';

const Step4ManufacturerSelection = () => {
  const { thrusterManufacturer, setThrusterManufacturer, setThrusterType, goNext, goBack } = useConfigurator();
  const { t } = useLanguage();
  const [error, setError] = useState('');

  const options = [
    { value: "QUICK ON/OFF", label: "QUICK ON/OFF" },
    { value: "VETUS ON/OFF", label: "VETUS ON/OFF" },
    { value: "SLEIPNER / SIDE POWER ON/OFF", label: "SLEIPNER / SIDE POWER ON/OFF" },
    { value: "SLEIPNER / SIDE POWER proportional", label: "SLEIPNER / SIDE POWER proportional" },
    { value: "Weitere auf Anfrage", label: t('s4_other_req') || "Weitere auf Anfrage" }
  ];

  const handleSelectionChange = (val) => {
    setThrusterManufacturer(val);
    setThrusterType(val); // Bind the selection to thrusterType state as requested
  };

  const handleNext = () => {
    if (!thrusterManufacturer) {
      setError(t('err_select') || 'Bitte wähle eine Option aus.');
      return;
    }
    setError('');
    goNext();
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t('s4_thrust_title') || 'Querstrahlruder Hersteller'}</h2>
        <p className="text-muted-foreground">{t('s4_thrust_desc') || 'Bitte wähle den Hersteller deines Querstrahlruders.'}</p>
      </div>

      <div className="bg-card p-6 rounded-2xl border border-border">
        <RadioGroup value={thrusterManufacturer} onValueChange={handleSelectionChange} className="flex flex-col gap-4">
          {options.map((opt) => (
            <div key={opt.value} className="flex items-center space-x-3">
              <RadioGroupItem value={opt.value} id={`tm-${opt.value}`} />
              <Label htmlFor={`tm-${opt.value}`} className="text-base cursor-pointer">{opt.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-border gap-4 mt-8">
        <div className="w-full sm:w-1/3 flex justify-start">
          <Button variant="outline" onClick={goBack}>{t('btn_back') || 'Zurück'}</Button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center">
          <Button variant="outline" asChild>
            <a href="mailto:smartdock@thitronik.de?subject=SMARTDOCK">
              <Mail className="w-4 h-4 mr-2" />
              {t('btn_ask_question') || 'Frage stellen'}
            </a>
          </Button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-end">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleNext}>{t('btn_next') || 'Weiter'}</Button>
        </div>
      </div>
    </div>
  );
};

export default Step4ManufacturerSelection;