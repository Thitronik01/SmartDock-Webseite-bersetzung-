
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Button } from '@/components/ui/button.jsx';
import { CheckCircle2, MapPin, Phone, Mail, FileText, Anchor, Settings, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card.jsx';

const Step10Confirmation = () => {
  const navigate = useNavigate();
  const { configurationRecord, selectedDealer, resetConfigurator } = useConfigurator();
  const { t } = useLanguage();

  const handleReturnHome = () => {
    resetConfigurator();
    navigate('/');
  };

  if (!configurationRecord) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6">
        <p className="text-xl text-muted-foreground">Daten konnten nicht geladen werden.</p>
        <Button onClick={handleReturnHome}>Zurück zur Startseite</Button>
      </div>
    );
  }

  const features = [];
  if (configurationRecord.ecuCount > 0) features.push(`${configurationRecord.ecuCount}x Engine Control Unit`);
  if (configurationRecord.tcu) features.push('Thruster Control Unit');
  if (configurationRecord.acu) features.push('Anchor Control Unit');
  if (configurationRecord.wcu) features.push('Winch Control Unit');
  if (configurationRecord.horn) features.push('Horn Control');

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500 pb-16">
      <div className="text-center space-y-4 pt-8">
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-primary/20">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          {t('succ_title') || 'Vielen Dank!'}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Der ausgewählte Händler wird sich in Kürze bei Ihnen melden.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <Card className="p-6 border-border shadow-sm bg-card space-y-4">
          <div className="flex items-center gap-3 text-primary border-b border-border/50 pb-4">
            <FileText className="w-6 h-6" />
            <h3 className="font-semibold text-lg text-foreground">Anfrage Details</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Referenznummer</span>
              <span className="font-mono font-medium">{configurationRecord.referenceNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Kunde</span>
              <span className="font-medium">{configurationRecord.firstName} {configurationRecord.lastName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status</span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                Übermittelt
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-border/50 space-y-3">
            <div className="flex items-center gap-2 text-foreground font-medium mb-2">
              <Settings className="w-4 h-4 text-muted-foreground" />
              Ihre Konfiguration
            </div>
            {configurationRecord.motorType && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Motor</span>
                <span className="font-medium text-right">{configurationRecord.motorType} <br/> <span className="text-xs font-normal text-muted-foreground">{configurationRecord.motorCount}</span></span>
              </div>
            )}
            {configurationRecord.joystickType && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Steuerung</span>
                <span className="font-medium text-right">{configurationRecord.joystickType}</span>
              </div>
            )}
            <div className="flex justify-between text-sm pt-2">
              <span className="text-muted-foreground">Systeme</span>
              <span className="font-medium text-right">{features.join(', ')}</span>
            </div>
          </div>
        </Card>

        {selectedDealer ? (
          <Card className="p-6 border-border shadow-sm bg-card space-y-4">
            <div className="flex items-center gap-3 text-primary border-b border-border/50 pb-4">
              <Anchor className="w-6 h-6" />
              <h3 className="font-semibold text-lg text-foreground">Zuständiger Händler</h3>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-lg">{selectedDealer.name}</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 mt-0.5 shrink-0 text-primary" /> 
                  <span>{selectedDealer.address}<br/>{selectedDealer.country}</span>
                </p>
                {selectedDealer.phone && (
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 shrink-0 text-primary" /> 
                    {selectedDealer.phone}
                  </p>
                )}
                {selectedDealer.email && (
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 shrink-0 text-primary" /> 
                    {selectedDealer.email}
                  </p>
                )}
              </div>
            </div>
          </Card>
        ) : (
          <Card className="p-6 border-border shadow-sm bg-muted/50 flex items-center justify-center text-center">
            <p className="text-muted-foreground">Es wurde kein spezifischer Händler ausgewählt. Unser Service-Team wird Sie kontaktieren.</p>
          </Card>
        )}
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 sm:p-6 shadow-sm mt-8">
        <div className="flex gap-4 items-start">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="font-semibold text-amber-900 text-sm sm:text-base">Unverbindliche Konfiguration</h3>
            <p className="text-amber-800 text-xs sm:text-sm leading-relaxed">
              Durch das Ausfüllen, Zusammenstellen oder Absenden dieser Konfiguration entstehen weder ein Vertrag noch eine Bestellung oder sonstige rechtliche beziehungsweise finanzielle Verpflichtungen. Diese Konfiguration dient ausschließlich der unverbindlichen Information und Vorbereitung.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <Button 
          onClick={handleReturnHome}
          size="lg" 
          className="bg-primary text-primary-foreground font-semibold px-8 h-12 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          Zurück zur Startseite
        </Button>
      </div>
    </div>
  );
};

export default Step10Confirmation;
