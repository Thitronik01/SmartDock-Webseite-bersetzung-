
import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  MapPin, Navigation, Phone, Mail, Globe, Search, 
  Map as MapIcon, List as ListIcon, AlertCircle, Info 
} from 'lucide-react';

import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Skeleton } from '@/components/ui/skeleton.jsx';
import pb from '@/lib/pocketbaseClient.js';
import { useToast } from '@/hooks/use-toast.js';
import { formatPrice, formatPriceByCurrency } from '@/utils/PriceCalculator.js';
import { translateCountryName, translateProductName } from '@/utils/translationHelpers.js';
import { translateConfigValue } from '@/utils/translateConfigValue.js';
import { COUNTRIES } from '@/translations.js';
import PDFDownloadButton from '@/components/configurator/PDFDownloadButton.jsx';

// Normalises a raw country string (any language) to an ISO 3166-1 alpha-2 code.
// Mirrors the logic used in DealerFinderPage so both finders match the same records.
const COUNTRY_ALIASES = {
  australia: 'AU', australien: 'AU', australie: 'AU',
  deutschland: 'DE', germany: 'DE', allemagne: 'DE',
  france: 'FR', frankreich: 'FR',
  spain: 'ES', spanien: 'ES', espagne: 'ES', espana: 'ES',
  switzerland: 'CH', schweiz: 'CH', suisse: 'CH',
  netherlands: 'NL', niederlande: 'NL', nederland: 'NL', 'pays-bas': 'NL',
  belgium: 'BE', belgien: 'BE', belgique: 'BE',
  austria: 'AT', österreich: 'AT', autriche: 'AT',
  italy: 'IT', italien: 'IT', italie: 'IT',
  sweden: 'SE', schweden: 'SE', suède: 'SE',
  norway: 'NO', norwegen: 'NO', norvège: 'NO',
  denmark: 'DK', dänemark: 'DK', danemark: 'DK',
  finland: 'FI', finnland: 'FI', finlande: 'FI',
  'united kingdom': 'GB', großbritannien: 'GB', 'royaume-uni': 'GB',
  usa: 'US', 'united states': 'US', 'vereinigte staaten': 'US',
  canada: 'CA', kanada: 'CA',
  bulgaria: 'BG', bulgarien: 'BG', bulgarie: 'BG',
  croatia: 'HR', kroatien: 'HR', croatie: 'HR',
  czechia: 'CZ', tschechien: 'CZ', tchèque: 'CZ',
  cyprus: 'CY', zypern: 'CY', chypre: 'CY',
  estonia: 'EE', estland: 'EE', estonie: 'EE',
  greece: 'GR', griechenland: 'GR', grèce: 'GR',
  hungary: 'HU', ungarn: 'HU', hongrie: 'HU',
  ireland: 'IE', irland: 'IE', irlande: 'IE',
  latvia: 'LV', lettland: 'LV', lettonie: 'LV',
  lithuania: 'LT', litauen: 'LT', lituanie: 'LT',
  luxembourg: 'LU', luxemburg: 'LU',
  malta: 'MT',
  poland: 'PL', polen: 'PL', pologne: 'PL',
  portugal: 'PT',
  romania: 'RO', rumänien: 'RO', roumanie: 'RO',
  slovakia: 'SK', slowakei: 'SK', slovaquie: 'SK',
  slovenia: 'SI', slowenien: 'SI', slovénie: 'SI',
};

const normalizeCountry = (rawCountry) => {
  if (!rawCountry) return null;
  const key = rawCountry.trim().toLowerCase();
  if (/^[A-Z]{2}$/.test(rawCountry.trim())) return rawCountry.trim();
  return COUNTRY_ALIASES[key] || null;
};


// --- LEAFLET MAP HELPERS ---
const createCustomIcon = (isSelected) => {
  const color = isSelected ? 'hsl(72, 100%, 50%)' : '#9ca3af';
  const strokeColor = isSelected ? '#000000' : '#4b5563';
  const zIndex = isSelected ? 1000 : 1;
  const html = `
    <div style="position: relative; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; z-index: ${zIndex};">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="${color}" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0px 3px 6px rgba(0,0,0,0.4));">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3" fill="${strokeColor}"></circle>
      </svg>
    </div>
  `;

  return L.divIcon({
    className: 'custom-leaflet-svg-icon',
    html: html,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36]
  });
};

const getDistance = (lat1, lon1, lat2, lon2) => {
  if (!lat1 || !lon1 || !lat2 || !lon2) return Infinity;
  const R = 6371;
  const dLat = (parseFloat(lat2) - parseFloat(lat1)) * (Math.PI / 180);
  const dLon = (parseFloat(lon2) - parseFloat(lon1)) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(parseFloat(lat1) * (Math.PI / 180)) * Math.cos(parseFloat(lat2) * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const MapUpdater = ({ center, markers }) => {
  const map = useMap();
  useEffect(() => {
    if (!map || !map._loaded || !map.getPane('mapPane')) return;
    if (center && center.latitude != null && center.longitude != null) {
      map.flyTo([parseFloat(center.latitude), parseFloat(center.longitude)], 12, { duration: 1.5 });
    } else if (markers.length > 0) {
      const validMarkers = markers.filter(m => m.latitude != null && m.longitude != null);
      if (validMarkers.length > 0) {
        const bounds = L.latLngBounds(validMarkers.map(m => [parseFloat(m.latitude), parseFloat(m.longitude)]));
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
      }
    }
    // Stop any in-flight pan/zoom animation before the map (or this
    // updater) unmounts/reruns, otherwise Leaflet's animation frame
    // callback fires after internal DOM refs are gone.
    return () => {
      try {
        if (map && map._loaded && map._mapPane && map._mapPane._leaflet_pos) {
          map.stop();
        }
      } catch (e) {
        // Swallow Leaflet teardown races: the map/pane may already be
        // detached from the DOM when this cleanup runs.
      }
    };
  }, [center, markers, map]);
  return null;
};

const DealerCard = ({ dealer, isSelected, onSelect, t }) => (
  <div 
    onClick={() => onSelect(dealer)} 
    className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
      isSelected 
        ? 'border-primary bg-primary/5 shadow-md' 
        : 'border-border bg-card hover:border-primary/40 hover:bg-muted/50'
    }`}
  >
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-bold text-foreground text-lg leading-tight">{dealer.name}</h4>
      {dealer.distance !== undefined && dealer.distance !== Infinity && (
        <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap ml-2">
          {dealer.distance.toFixed(1)} km
        </span>
      )}
    </div>
    <div className="space-y-2 text-sm text-muted-foreground mt-3">
      <p className="flex items-start">
        <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0" /> 
        <span>{dealer.address}<br/>{dealer.country}</span>
      </p>
      {dealer.phone && <p className="flex items-center"><Phone className="w-4 h-4 mr-2 shrink-0" /> {dealer.phone}</p>}
      {dealer.email && <p className="flex items-center"><Mail className="w-4 h-4 mr-2 shrink-0" /> {dealer.email}</p>}
      {dealer.website && <a href={dealer.website} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center text-primary hover:underline mt-2"><Globe className="w-4 h-4 mr-2 shrink-0" /> {t('df_visit')}</a>}
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const Step8UnifiedSummaryAndContact = () => {
  const { 
    priceData, 
    installationService, 
    thrusterManufacturer, 
    thrusterType,
    engineManufacturer, 
    merCruiserSystem,
    yamahaSystem,
    volvoPentaSystem,
    configData,
    selectedCountry,
    selectedProducts,
    contactData,
    setContactData,
    addAnswer,
    selectedDealer,
    setSelectedDealer,
    isSubmitting,
    setIsSubmitting,
    setIsCompleted,
    setCurrentRequestId,
    setConfigurationRecord,
    goNext, 
    goBack 
  } = useConfigurator();
  
  const { currentLanguage, t, currentCountry } = useLanguage();
  const isEN = currentLanguage === 'EN';
  const isFR = currentLanguage === 'FR';
  const { toast } = useToast();

  const [error, setError] = useState('');
  
  // Dealer Map States
  const [dealers, setDealers] = useState([]);
  const [loadingDealers, setLoadingDealers] = useState(false);
  const [fetchError, setFetchError] = useState('');
  const [filters, setFilters] = useState({
    country: normalizeCountry(selectedCountry) || normalizeCountry(currentCountry?.name) || '',
    city: '',
    postalCode: ''
  });
  const [userLocation, setUserLocation] = useState(null);
  const [activeTab, setActiveTab] = useState('list');

  // Load Dealers if Installation Service is selected
  useEffect(() => {
    if (installationService) {
      const fetchDealers = async () => {
        setLoadingDealers(true);
        setFetchError('');
        try {
          const records = await pb.collection('dealers').getFullList({
            requestKey: 'fetch-dealers',
            sort: 'name',
          });
          console.log('[DealerFinder] Loaded', records.length, 'dealers. Country filter:', normalizeCountry(selectedCountry));
          setDealers(records);
        } catch (err) {
          console.error('Error fetching dealers:', err);
          setFetchError(isFR ? "Les revendeurs n'ont pas pu être chargés. Veuillez réessayer plus tard." : (isEN ? 'Could not load dealers. Please try again later.' : 'Händler konnten nicht geladen werden. Bitte versuchen Sie es später erneut.'));
        } finally {
          setLoadingDealers(false);
        }
      };
      
      fetchDealers();
    }
  }, [installationService, isEN]);

  // Auto-select NAGY Yachting when Switzerland is the delivery country
  useEffect(() => {
    if (dealers.length === 0) return;
    if (normalizeCountry(selectedCountry) !== 'CH') return;
    if (selectedDealer) return;
    const nagy = dealers.find(d => d.name?.toLowerCase().includes('nagy'));
    if (nagy) setSelectedDealer(nagy);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealers]);

  // --- Summary Formatting Helpers ---
  const getLabel = (key) => {
    const labels = {
      country: isFR ? 'Pays' : (isEN ? 'Country' : 'Land'),
      engine: isFR ? 'Moteur' : (isEN ? 'Engine' : 'Motor'),
      engineCount: isFR ? 'Nombre de moteurs' : (isEN ? 'Engine Count' : 'Motorenanzahl'),
      thruster: isFR ? 'Propulseurs' : (isEN ? 'Thruster' : 'Bug-/Heckstrahlruder'),
      service: isFR ? "Service d'installation" : (isEN ? 'Installation Service' : 'Einbauservice'),
      control: isFR ? 'Commande' : (isEN ? 'Control' : 'Steuerung')
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
      return isFR ? 'Autres sur demande' : (isEN ? 'Others on Request' : 'Weitere auf Anfrage');
    }
    return translateProductName(value, currentLanguage);
  };

  const hasAdditionalModules = selectedProducts?.acu || selectedProducts?.wcu || selectedProducts?.horn;

  // --- Contact Form Handlers ---
  const handleContactChange = (e) => {
    setContactData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    addAnswer(e.target.name, e.target.value);
  };

  // --- Dealer Map Handlers ---
  const handleGPS = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
          setFilters({ country: '', city: '', postalCode: '' });
          setActiveTab('list');
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  const filteredDealers = useMemo(() => {
    let result = dealers;
    if (userLocation) {
      result = result.map(dealer => ({
        ...dealer,
        distance: getDistance(userLocation.lat, userLocation.lng, dealer.latitude, dealer.longitude)
      })).sort((a, b) => a.distance - b.distance);
    } else {
      if (filters.country) {
        result = result.filter(d => normalizeCountry(d.country) === filters.country);
      }
      if (filters.city) {
        result = result.filter(d => d.address?.toLowerCase().includes(filters.city.toLowerCase()));
      }
      if (filters.postalCode) {
        result = result.filter(d => d.address?.includes(filters.postalCode));
      }
    }
    return result;
  }, [filters, userLocation, dealers]);

  const dealersWithCoords = filteredDealers.filter(d => d.latitude != null && d.longitude != null);
  const dealersWithoutCoords = filteredDealers.filter(d => d.latitude == null || d.longitude == null);

  const handleDealerSelect = (dealer) => {
    setSelectedDealer(dealer);
    if (window.innerWidth < 640 && dealer.latitude != null && dealer.longitude != null) {
      setActiveTab('map');
    }
  };

  // --- Submission Logic ---
  const generateOrderNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    // Validate Contact Form
    if (!contactData.firstName || !contactData.lastName || !contactData.email) {
      setError(isFR ? 'Veuillez remplir tous les champs obligatoires du formulaire de contact.' : (isEN ? 'Please fill in all required contact fields.' : 'Bitte fülle alle Pflichtfelder der Kontaktdaten aus.'));
      return;
    }

    // Validate Dealer Selection
    if (installationService && !selectedDealer) {
      setError(isFR ? 'Veuillez choisir un revendeur sur la carte.' : (isEN ? 'Please select a dealer from the map.' : 'Bitte wähle einen Händler auf der Karte aus.'));
      return;
    }
    
    setError('');
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

      const payload = {
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
        status: installationService ? 'assigned' : 'pending',
        dealerId: installationService && selectedDealer ? selectedDealer.id : null
      };

      const record = await pb.collection('configuration_requests').create(payload, { $autoCancel: false });

      setCurrentRequestId(record.id);
      setConfigurationRecord(record);

      toast({
        title: isFR ? "Succès" : (isEN ? "Success" : "Erfolgreich"),
        description: isFR ? "Votre demande a été envoyée avec succès." : (isEN ? "Your inquiry has been sent successfully." : "Deine Anfrage wurde erfolgreich gesendet."),
      });

      setIsCompleted(true);
      goNext();

    } catch (err) {
      console.error('Order submission error (PocketBase):', err);
      toast({
        title: isFR ? "Erreur" : (isEN ? "Error" : "Fehler"),
        description: isFR ? "Un problème est survenu lors de l'envoi de votre demande. Veuillez réessayer." : (isEN ? "There was an error sending your inquiry. Please try again." : 'Es gab einen Fehler beim Senden deiner Anfrage. Bitte versuche es erneut.'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto w-full space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-16 pt-4">
      
      {/* SECTION 1: HEADER & SUMMARY */}
      <section className="space-y-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            {isFR ? 'Votre configuration' : (isEN ? 'Your Configuration' : 'Ihre Konfiguration')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {isFR 
              ? 'Veuillez vérifier votre configuration, saisir vos coordonnées et valider votre demande.'
              : isEN 
              ? 'Please review your configuration, enter your contact information, and submit your inquiry.' 
              : 'Bitte überprüfen Sie Ihre Konfiguration, geben Sie Ihre Kontaktdaten ein und schließen Sie die Anfrage ab.'}
          </p>
        </div>

        <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-lg mx-auto max-w-4xl">
          <div className="p-8 border-b border-border bg-muted/20">
            <h3 className="font-semibold text-xl mb-6 text-center">
              {isFR ? 'Composants sélectionnés' : (isEN ? 'Selected Components' : 'Ausgewählte Komponenten')}
            </h3>
            <div className="space-y-4">
              {priceData.configurationPrices && priceData.configurationPrices.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0 gap-4">
                  <div className="font-medium text-foreground text-lg">
                    {getFormattedProductName(item.name)}
                  </div>
                  <div className="font-semibold text-lg whitespace-nowrap">
                    {formatPriceByCurrency(item.price, priceData?.currency)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {hasAdditionalModules && (
            <div className="p-8 border-b border-border">
              <h3 className="font-semibold text-lg mb-4 text-center">
                {isFR ? 'Extras sélectionnés' : (isEN ? 'Selected Extras' : 'Zusätzliche Extras')}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                {selectedProducts?.acu && <div className="bg-muted px-4 py-2 rounded-lg font-medium">ACU</div>}
                {selectedProducts?.wcu && <div className="bg-muted px-4 py-2 rounded-lg font-medium">WCU</div>}
                {selectedProducts?.horn && <div className="bg-muted px-4 py-2 rounded-lg font-medium">{isFR ? 'Avertisseur sonore' : (isEN ? 'Horn' : 'Horn')}</div>}
              </div>
            </div>
          )}

          <div className="p-8 bg-muted/40 space-y-4">
            <div className="flex justify-between text-base">
              <span className="text-muted-foreground">{isFR ? 'Sous-total' : (isEN ? 'Subtotal' : 'Zwischensumme')}</span>
              <span className="font-medium">{formatPriceByCurrency(priceData.subtotal, priceData?.currency)}</span>
            </div>
            
            {priceData.bundleDiscount < 0 && (
              <div className="flex justify-between text-base text-primary font-medium">
                <span>{isFR ? 'Remise groupée' : (isEN ? 'Bundle Discount' : 'Paketrabatt')}</span>
                <span>{formatPriceByCurrency(priceData.bundleDiscount, priceData?.currency)}</span>
              </div>
            )}

            {priceData.vat > 0 && (
              <div className="flex justify-between text-base pt-2">
                <span className="text-muted-foreground">
                  {isFR ? 'TVA' : (isEN ? 'VAT' : 'MwSt.')} ({priceData.vat}%):
                </span>
                <span className="text-muted-foreground">{isFR ? 'inclus' : (isEN ? 'included' : 'inklusive')}</span>
              </div>
            )}
            
            <div className="flex justify-between items-end pt-6 border-t border-border mt-6">
              <span className="text-xl font-bold">{isFR ? 'Montant total' : (isEN ? 'Total Amount' : 'Gesamtbetrag')}</span>
              <span className="text-3xl font-extrabold text-primary">{formatPriceByCurrency(priceData.totalPrice, priceData?.currency)}</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {selectedCountry && (
            <div className="bg-muted p-5 rounded-2xl text-center border border-border">
              <span className="text-muted-foreground block text-sm mb-2">
                {String(getLabel('country')).replace(/:+$/, '')}
              </span>
              <span className="font-semibold text-lg">{translateCountryName(selectedCountry, currentLanguage)}</span>
            </div>
          )}
          {engineManufacturer && (
            <div className="bg-muted p-5 rounded-2xl text-center border border-border">
              <span className="text-muted-foreground block text-sm mb-2">
                {String(getLabel('engine')).replace(/:+$/, '')}
              </span>
              <span className="font-semibold text-lg">{engineManufacturer}</span>
            </div>
          )}
          {configData?.motorCount > 0 && (
            <div className="bg-muted p-5 rounded-2xl text-center border border-border">
              <span className="text-muted-foreground block text-sm mb-2">
                {String(getLabel('engineCount')).replace(/:+$/, '')}
              </span>
              <span className="font-semibold text-lg">
                {configData.motorCount === 1 
                  ? (isFR ? '1 moteur' : (isEN ? '1 Engine' : '1 Motor'))
                  : (isFR ? '2 moteurs ou plus' : (isEN ? '2+ Engines' : '2+ Motoren'))
                }
              </span>
            </div>
          )}
          {(thrusterManufacturer || thrusterType) && (
            <div className="bg-muted p-5 rounded-2xl text-center border border-border">
              <span className="text-muted-foreground block text-sm mb-2">
                {String(getLabel('thruster')).replace(/:+$/, '')}
              </span>
              <span className="font-semibold text-lg leading-tight">
                {translateThrusterValue(thrusterManufacturer)} 
                {thrusterType && thrusterType !== thrusterManufacturer ? <><br/><span className="text-sm font-normal">({translateThrusterValue(thrusterType)})</span></> : ''}
              </span>
            </div>
          )}
        </div>

        <p className="text-sm text-center text-muted-foreground mt-8 bg-secondary/30 p-4 rounded-xl max-w-4xl mx-auto">
          {isFR
            ? 'Les prix affichés sont des prix conseillés sans engagement, TVA légale incluse.'
            : (isEN 
            ? 'The prices shown are recommended retail prices including statutory VAT.' 
            : 'Die angezeigten Preise sind unverbindliche Preisempfehlungen inkl. der gesetzlichen Mehrwertsteuer.')}
        </p>
      </section>

      {/* SECTION 2: CONTACT FORM */}
      <section className="space-y-8 bg-card p-6 sm:p-12 rounded-3xl border border-border shadow-lg max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-4xl font-bold mb-3">
            {isFR ? 'Coordonnées' : (isEN ? 'Contact Information' : 'Kontaktdaten')}
          </h3>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {isFR ? 'Veuillez saisir vos données pour finaliser votre demande.' : (isEN ? 'Please enter your details to finalize your inquiry.' : 'Bitte gib deine Daten ein, um die Anfrage abzuschließen.')}
          </p>
        </div>

        <form id="unified-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="firstName" className="text-base font-medium">{isFR ? 'Prénom *' : (isEN ? 'First Name *' : 'Vorname *')}</Label>
              <Input id="firstName" name="firstName" value={contactData.firstName} onChange={handleContactChange} required className="bg-background text-foreground h-12 text-base px-4" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="lastName" className="text-base font-medium">{isFR ? 'Nom *' : (isEN ? 'Last Name *' : 'Nachname *')}</Label>
              <Input id="lastName" name="lastName" value={contactData.lastName} onChange={handleContactChange} required className="bg-background text-foreground h-12 text-base px-4" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-base font-medium">{isFR ? 'E-mail *' : (isEN ? 'Email *' : 'E-Mail *')}</Label>
              <Input id="email" type="email" name="email" value={contactData.email} onChange={handleContactChange} required className="bg-background text-foreground h-12 text-base px-4" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="phone" className="text-base font-medium">{isFR ? 'Téléphone' : (isEN ? 'Phone' : 'Telefon')}</Label>
              <Input id="phone" type="tel" name="phone" value={contactData.phone} onChange={handleContactChange} className="bg-background text-foreground h-12 text-base px-4" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="company" className="text-base font-medium">{isFR ? 'Entreprise (facultatif)' : (isEN ? 'Company (Optional)' : 'Firma (Optional)')}</Label>
              <Input id="company" type="text" name="company" value={contactData.company} onChange={handleContactChange} className="bg-background text-foreground h-12 text-base px-4" />
            </div>
            <div className="space-y-3">
              <Label className="text-base font-medium">{isFR ? 'Pays' : (isEN ? 'Country' : 'Land')}</Label>
              <Input 
                value={translateCountryName(selectedCountry, currentLanguage) || 'N/A'} 
                readOnly 
                className="bg-muted text-muted-foreground border-border cursor-not-allowed h-12 text-base px-4" 
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-3 sm:col-span-2">
              <Label htmlFor="street" className="text-base font-medium">{isFR ? 'Rue' : (isEN ? 'Street' : 'Straße')}</Label>
              <Input id="street" name="street" value={contactData.street} onChange={handleContactChange} className="bg-background text-foreground h-12 text-base px-4" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="houseNumber" className="text-base font-medium">{isFR ? 'N°' : (isEN ? 'No.' : 'Nr.')}</Label>
              <Input id="houseNumber" name="houseNumber" value={contactData.houseNumber} onChange={handleContactChange} className="bg-background text-foreground h-12 text-base px-4" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="postalCode" className="text-base font-medium">{isFR ? 'Code postal' : (isEN ? 'ZIP Code' : 'PLZ')}</Label>
              <Input id="postalCode" name="postalCode" value={contactData.postalCode} onChange={handleContactChange} className="bg-background text-foreground h-12 text-base px-4" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="city" className="text-base font-medium">{isFR ? 'Ville' : (isEN ? 'City' : 'Stadt')}</Label>
              <Input id="city" name="city" value={contactData.city} onChange={handleContactChange} className="bg-background text-foreground h-12 text-base px-4" />
            </div>
          </div>
        </form>
      </section>

      {/* SECTION 3: DEALER MAP (CONDITIONAL) */}
      {installationService && (
        <section className="space-y-8 max-w-5xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-4xl font-bold mb-3">{t('s11_dealer_title') || 'Händler auswählen'}</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('s11_dealer_desc')}
            </p>
          </div>

          <div className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-lg space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div className="space-y-3">
                <Label className="text-base font-medium">{t('df_country')}</Label>
                <select
                  value={filters.country}
                  onChange={(e) => { setFilters({ ...filters, country: e.target.value }); setUserLocation(null); }}
                  className="w-full bg-background border border-input text-foreground rounded-lg h-12 px-4 outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                >
                  <option value="">{t('df_all_countries')}</option>
                  {COUNTRIES
                    .map(c => ({...c, displayName: translateCountryName(c.name, currentLanguage)}))
                    .sort((a, b) => a.displayName.localeCompare(b.displayName))
                    .map(c => (
                      <option key={`filter-${c.code}`} value={c.code}>{c.displayName}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-3">
                <Label className="text-base font-medium">{t('df_city')}</Label>
                <Input value={filters.city} onChange={(e) => { setFilters({ ...filters, city: e.target.value }); setUserLocation(null); }} className="bg-background h-12 text-base px-4" />
              </div>
              <div className="pt-2">
                <Button type="button" onClick={handleGPS} variant="outline" className="w-full h-12 border-primary/50 hover:bg-primary/10 text-foreground text-base">
                  <Navigation className="w-5 h-5 mr-2 text-primary" /> {t('df_gps')}
                </Button>
              </div>
            </div>

            {fetchError && (
              <div className="p-4 bg-destructive/10 text-destructive rounded-xl flex gap-3 items-center text-sm font-medium border border-destructive/20">
                <AlertCircle className="w-5 h-5 shrink-0" />
                {fetchError}
              </div>
            )}

            <div className="flex md:hidden bg-muted p-1 rounded-xl">
              <button type="button" className={`flex-1 py-3 text-sm font-medium rounded-lg flex items-center justify-center transition-all ${activeTab === 'list' ? 'bg-background shadow-md text-foreground' : 'text-muted-foreground'}`} onClick={() => setActiveTab('list')}><ListIcon className="w-5 h-5 mr-2" /> {t('df_list')}</button>
              <button type="button" className={`flex-1 py-3 text-sm font-medium rounded-lg flex items-center justify-center transition-all ${activeTab === 'map' ? 'bg-background shadow-md text-foreground' : 'text-muted-foreground'}`} onClick={() => setActiveTab('map')}><MapIcon className="w-5 h-5 mr-2" /> {t('df_map')}</button>
            </div>

            <div className="flex flex-col md:flex-row gap-8 flex-grow min-h-[500px]">
              <div className={`w-full md:w-[40%] flex flex-col h-[500px] md:h-auto bg-card border border-border rounded-2xl overflow-hidden ${activeTab === 'map' ? 'hidden md:flex' : 'flex'}`}>
                <div className="p-5 border-b border-border bg-muted/40">
                  <h3 className="font-semibold text-lg flex items-center"><Search className="w-5 h-5 mr-2 text-primary" /> {loadingDealers ? '...' : filteredDealers.length} {t('df_found', { count: filteredDealers.length })}</h3>
                </div>
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {loadingDealers ? (
                    Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="p-5 rounded-2xl border border-border bg-background space-y-3">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    ))
                  ) : (
                    <>
                      {dealersWithCoords.map((dealer) => (
                        <DealerCard 
                          key={dealer.id}
                          dealer={dealer}
                          isSelected={selectedDealer?.id === dealer.id}
                          onSelect={handleDealerSelect}
                          t={t}
                        />
                      ))}

                      {dealersWithoutCoords.length > 0 && (
                        <div className="pt-6 mt-8 border-t border-border">
                          <div className="flex items-center gap-2 mb-4 px-2 text-muted-foreground">
                            <Info className="w-5 h-5 shrink-0" />
                            <h4 className="text-sm font-medium tracking-wide uppercase">{isFR ? 'Autres revendeurs (sans position sur la carte)' : (isEN ? 'Other Dealers (No Map Position)' : 'Weitere Händler (ohne Kartenposition)')}</h4>
                          </div>
                          <div className="space-y-4">
                            {dealersWithoutCoords.map((dealer) => (
                              <DealerCard 
                                key={dealer.id}
                                dealer={dealer}
                                isSelected={selectedDealer?.id === dealer.id}
                                onSelect={handleDealerSelect}
                                t={t}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {filteredDealers.length === 0 && !fetchError && (
                        <div className="text-center py-16 text-muted-foreground">
                          <MapPin className="w-16 h-16 mx-auto mb-6 opacity-20" />
                          <p className="text-lg">{t('df_empty')}</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className={`w-full md:w-[60%] h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-border relative z-0 ${activeTab === 'list' ? 'hidden md:block' : 'block'}`}>
                {loadingDealers ? (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Skeleton className="w-full h-full" />
                  </div>
                ) : (
                  <MapContainer center={[51.1657, 10.4515]} zoom={5} style={{ height: "100%", width: "100%" }} className="z-0 bg-muted">
                    <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                    <MapUpdater center={selectedDealer} markers={dealersWithCoords} />
                    {userLocation && <Marker position={[userLocation.lat, userLocation.lng]} icon={createCustomIcon(true)}><Popup>{isFR ? 'Votre position' : (isEN ? 'Your Location' : 'Ihr Standort')}</Popup></Marker>}
                    {dealersWithCoords.map((dealer) => (
                      <Marker 
                        key={`marker-${dealer.id}`} 
                        position={[parseFloat(dealer.latitude), parseFloat(dealer.longitude)]} 
                        icon={createCustomIcon(selectedDealer?.id === dealer.id)} 
                        eventHandlers={{ click: () => handleDealerSelect(dealer) }}
                      >
                        <Popup className="custom-popup">
                          <div className="font-bold text-base mb-1">{dealer.name}</div>
                          <div className="text-sm text-muted-foreground">{dealer.address}</div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: ACTIONS & ERRORS */}
      {error && (
        <div className="p-5 bg-destructive/10 text-destructive rounded-xl flex gap-3 items-center justify-center text-base font-medium border border-destructive/20 mt-10 max-w-4xl mx-auto">
          <AlertCircle className="w-6 h-6 shrink-0" />
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12 mt-12 border-t border-border max-w-4xl mx-auto">
        <Button type="button" variant="outline" onClick={goBack} disabled={isSubmitting} className="w-full sm:w-auto min-w-[140px] h-12 px-6 text-base">
          {isFR ? 'Retour' : (isEN ? 'Back' : 'Zurück')}
        </Button>
        <Button type="button" variant="outline" asChild className="w-full sm:w-auto min-w-[140px] border-primary/50 text-foreground hover:bg-primary/10 h-12 px-6 text-base">
          <a href="mailto:smartdock@thitronik.de?subject=SMARTDOCK">
            <Mail className="w-5 h-5 mr-2" />
            {isFR ? 'Poser une question' : (isEN ? 'Ask a Question' : 'Frage stellen')}
          </a>
        </Button>
        <div className="w-full sm:w-auto flex justify-center">
          <PDFDownloadButton />
        </div>
        <Button 
          type="submit" 
          form="unified-form"
          disabled={isSubmitting} 
          className="w-full sm:w-auto min-w-[220px] bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-all h-12 px-8 text-base font-semibold"
        >
          {isSubmitting 
            ? (isFR ? 'Envoi en cours...' : (isEN ? 'Submitting...' : 'Wird gesendet...')) 
            : (isFR ? 'Demandez maintenant' : (isEN ? 'Inquire Now' : 'Jetzt anfragen'))}
        </Button>
      </div>
    </div>
  );
};

export default Step8UnifiedSummaryAndContact;
