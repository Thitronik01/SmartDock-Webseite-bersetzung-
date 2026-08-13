import React, { useState } from 'react';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { Button } from '@/components/ui/button';
import { SelectionCard } from './SelectionCard.jsx';

const Step10VolvoPentaThrottle = () => {
  const { volvoPentaThrottle, setVolvoPentaThrottle, goNext, goBack } = useConfigurator();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!volvoPentaThrottle) return setError('Bitte treffen Sie eine Auswahl.');
    goNext();
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold mb-2">Ist ein Volvo Penta Gashebel vorhanden?</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <SelectionCard title="Ja" checked={volvoPentaThrottle === 'Ja'} onClick={() => setVolvoPentaThrottle('Ja')} />
        <SelectionCard title="Nein" checked={volvoPentaThrottle === 'Nein'} onClick={() => setVolvoPentaThrottle('Nein')} />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
        <Button variant="outline" onClick={goBack}>Zurück</Button>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 ml-auto" onClick={handleNext}>Weiter</Button>
      </div>
    </div>
  );
};

export default Step10VolvoPentaThrottle;