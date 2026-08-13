
import React, { useState } from 'react';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import pb from '@/lib/pocketbaseClient.js';
import { useToast } from '@/hooks/use-toast.js';
import { AlertCircle } from 'lucide-react';

const Step8ContactForm = () => {
  const { 
    selectedCountry, 
    installationService, 
    engineManufacturer,
    merCruiserSystem,
    yamahaSystem,
    volvoPentaSystem,
    isSubmitting, 
    setIsSubmitting,
    setIsCompleted,
    addAnswer,
    goBack,
    goNext,
    contactData,
    setContactData,
    priceData,
    configData,
    setCurrentRequestId,
    setConfigurationRecord,
    thrusterManufacturer,
    thrusterType
  } = useConfigurator();

  const { currentLanguage } = useLanguage();
  const isEN = currentLanguage === 'EN';
  const isFR = currentLanguage === 'FR';
  const { toast } = useToast();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setContactData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    addAnswer(e.target.name, e.target.value);
  };

  const generateOrderNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  };

  const handleNextOrSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    if (!contactData.firstName || !contactData.lastName || !contactData.email) {
      setError(isEN ? 'Please fill in all required fields.' : 'Bitte fülle alle Pflichtfelder aus.');
      return;
    }
    
    setError('');

    if (installationService) {
      goNext();
      return;
    }

    setIsSubmitting(true);

    try {
      const motorCountStr = configData.motorCount === 1 ? '1 Motor' : (configData.motorCount >= 2 ? '2+ Motoren' : '');
      const parts = [
        ...(priceData.configurationPrices.map(d => d.name) || []),
        engineManufacturer ? `Engine: ${engineManufacturer}` : null,
        motorCountStr ? `Motors: ${motorCountStr}` : null,
        merCruiserSystem || yamahaSystem || volvoPentaSystem ? `System: ${merCruiserSystem || yamahaSystem || volvoPentaSystem}` : null,
        contactData.company ? `Company: ${contactData.company}` : null
      ].filter(Boolean);

      const configurationStr = parts.join(' | ');
      const skus = priceData.configurationPrices.map(d => d.name.split(' ')[0]).join(',');
      const orderNumber = generateOrderNumber();
      const countryValue = selectedCountry || 'N/A';

      const record = await pb.collection('configuration_requests').create({
        referenceNumber: orderNumber,
        firstName: contactData.firstName,
        lastName: contactData.lastName,
        email: contactData.email,
        phone: contactData.phone,
        street: contactData.street,
        houseNumber: contactData.houseNumber,
        postalCode: contactData.postalCode,
        city: contactData.city,
        country: countryValue,
        company: contactData.company,
        skus: skus,
        configuration: configurationStr,
        motorCount: configData.motorCount,
        motorType: configData.motorType,
        joystickType: configData.joystickType,
        ecuCount: configData.ecuCount,
        tcu: configData.tcu,
        bugstrahlruder: configData.bugstrahlruder,
        heckstrahlruder: configData.heckstrahlruder,
        acu: configData.acu,
        wcu: configData.wcu,
        horn: configData.horn,
        ankerwinde1: configData.ankerwinde1,
        ankerwinde2: configData.ankerwinde2,
        ankerwinch1: configData.ankerwinch1,
        ankerwinch2: configData.ankerwinch2,
        totalPrice: priceData.totalPrice,
        configurationPrices: priceData.configurationPrices,
        subtotal: priceData.subtotal,
        bundleDiscount: priceData.bundleDiscount,
        installationService: installationService ? 'Ja' : 'Nein',
        thrusterManufacturer: thrusterManufacturer || 'N/A',
        thrusterType: thrusterType || '',
        status: 'pending'
      }, { $autoCancel: false });

      setCurrentRequestId(record.id);
      setConfigurationRecord(record);

      toast({
        title: isEN ? "Success" : "Erfolgreich",
        description: isEN ? "Your inquiry has been sent successfully." : "Deine Anfrage wurde erfolgreich gesendet.",
      });

      setIsCompleted(true);

    } catch (err) {
      console.error('Order submission error (PocketBase):', err);
      toast({
        title: isEN ? "Error" : "Fehler",
        description: isEN ? "There was an error sending your inquiry. Please try again." : 'Es gab einen Fehler beim Senden deiner Anfrage. Bitte versuche es erneut.',
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          {isEN ? 'Contact Information' : 'Kontaktdaten'}
        </h2>
        <p className="text-muted-foreground">
          {isEN ? 'Please enter your details to complete the inquiry.' : 'Bitte gib deine Daten ein, um die Anfrage abzuschließen.'}
        </p>
      </div>

      <form id="contact-form" onSubmit={handleNextOrSubmit} className="space-y-6 flex-1">
        <div className="bg-card p-6 rounded-2xl border border-border space-y-6 shadow-sm">
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">{isEN ? 'First Name *' : 'Vorname *'}</Label>
              <Input id="firstName" name="firstName" value={contactData.firstName} onChange={handleChange} required className="bg-background text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">{isEN ? 'Last Name *' : 'Nachname *'}</Label>
              <Input id="lastName" name="lastName" value={contactData.lastName} onChange={handleChange} required className="bg-background text-foreground" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">{isEN ? 'Email *' : 'E-Mail *'}</Label>
              <Input id="email" type="email" name="email" value={contactData.email} onChange={handleChange} required className="bg-background text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{isEN ? 'Phone' : 'Telefon'}</Label>
              <Input id="phone" type="tel" name="phone" value={contactData.phone} onChange={handleChange} className="bg-background text-foreground" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company">{isEN ? 'Company (Optional)' : 'Firma (Optional)'}</Label>
              <Input id="company" type="text" name="company" value={contactData.company} onChange={handleChange} className="bg-background text-foreground" />
            </div>
            <div className="space-y-2">
              <Label>{isEN ? 'Country' : 'Land'}</Label>
              <Input 
                value={selectedCountry || 'N/A'} 
                readOnly 
                className="bg-muted text-muted-foreground border-border cursor-not-allowed" 
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="street">{isEN ? 'Street' : 'Straße'}</Label>
              <Input id="street" name="street" value={contactData.street} onChange={handleChange} className="bg-background text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="houseNumber">{isEN ? 'No.' : 'Nr.'}</Label>
              <Input id="houseNumber" name="houseNumber" value={contactData.houseNumber} onChange={handleChange} className="bg-background text-foreground" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="postalCode">{isEN ? 'ZIP Code' : 'PLZ'}</Label>
              <Input id="postalCode" name="postalCode" value={contactData.postalCode} onChange={handleChange} className="bg-background text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">{isEN ? 'City' : 'Stadt'}</Label>
              <Input id="city" name="city" value={contactData.city} onChange={handleChange} className="bg-background text-foreground" />
            </div>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-destructive/10 text-destructive rounded-xl flex gap-3 items-center text-sm font-medium border border-destructive/20">
            <AlertCircle className="w-5 h-5 shrink-0" />
            {error}
          </div>
        )}
      </form>

      <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-border gap-4 mt-8">
        <Button variant="outline" onClick={goBack} disabled={isSubmitting} type="button" className="w-full sm:w-auto">
          {isEN ? 'Back' : 'Zurück'}
        </Button>
        <Button type="submit" form="contact-form" disabled={isSubmitting} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all">
          {isSubmitting 
            ? (isEN ? 'Submitting...' : 'Wird gesendet...') 
            : (installationService 
                ? (isEN ? 'Select Dealer' : 'Händler auswählen') 
                : (isEN ? 'Submit Inquiry' : 'Jetzt anfragen'))}
        </Button>
      </div>
    </div>
  );
};

export default Step8ContactForm;
