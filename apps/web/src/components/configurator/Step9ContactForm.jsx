import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Skeleton } from '@/components/ui/skeleton.jsx';
import { AlertCircle, MapPin, Navigation, Phone, Search, Settings } from 'lucide-react';
import { COUNTRIES } from '@/translations.js';
import pb from '@/lib/pocketbaseClient.js';
import { useToast } from '@/hooks/use-toast.js';

const createCustomIcon = (isSelected) => {
  const color = isSelected ? 'hsl(72, 100%, 50%)' : '#9ca3af'; // CI Green vs Gray-400
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

const DealerCard = ({ dealer, isSelected, onSelect }) => (
  <div 
    onClick={() => onSelect(dealer)} 
    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
      isSelected 
        ? 'border-[hsl(var(--ci-green))] bg-slate-700 shadow-md ring-2 ring-[hsl(var(--ci-green)_/_0.2)]' 
        : 'border-border bg-background hover:border-border/80'
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
    <div className="space-y-1.5 text-xs text-muted-foreground mt-2">
      <p className="flex items-start">
        <MapPin className="w-3.5 h-3.5 mr-2 mt-0.5 shrink-0" /> 
        <span className="line-clamp-2">{dealer.address}, {dealer.country}</span>
      </p>
      {dealer.phone && <p className="flex items-center"><Phone className="w-3.5 h-3.5 mr-2 shrink-0" /> {dealer.phone}</p>}
    </div>
  </div>
);

const Step9ContactForm = () => {
  const { 
    isSubmitting, 
    setIsSubmitting,
    goBack,
    contactData,
    setContactData,
    configData,
    updateConfigField,
    setConfigurationRecord,
    setCurrentStepId,
    selectedDealer,
    setSelectedDealer,
    selectedCountry,
    installationService,
    priceData
  } = useConfigurator();

  const { t, currentCountry } = useLanguage();
  const { toast } = useToast();
  const [error, setError] = useState('');

  const [dealers, setDealers] = useState([]);
  const [loadingDealers, setLoadingDealers] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [filters, setFilters] = useState({
    country: selectedCountry || currentCountry.name,
    city: ''
  });

  const requiresDealer = installationService === true;

  useEffect(() => {
    if (!requiresDealer) {
      setLoadingDealers(false);
      return;
    }

    const fetchDealers = async () => {
      setLoadingDealers(true);
      try {
        const records = await pb.collection('dealers').getFullList({
          $autoCancel: false,
          sort: 'name',
        });
        setDealers(records);
      } catch (err) {
        console.error('Error fetching dealers:', err);
      } finally {
        setLoadingDealers(false);
      }
    };
    fetchDealers();
  }, [requiresDealer]);

  const handleGPS = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
          setFilters({ country: '', city: '' });
        },
        (error) => {
          console.error("Error getting location:", error);
          toast({ title: "Fehler", description: "Standort konnte nicht ermittelt werden." });
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
        result = result.filter(d => d.country === filters.country || (filters.country === 'Deutschland' && d.country === 'Germany'));
      }
      if (filters.city) {
        result = result.filter(d => d.address?.toLowerCase().includes(filters.city.toLowerCase()));
      }
    }
    return result;
  }, [filters, userLocation, dealers]);

  const dealersWithCoords = filteredDealers.filter(d => d.latitude != null && d.longitude != null);

  const handleChange = (e) => {
    setContactData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generateReferenceNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    if (!contactData.firstName || !contactData.lastName || !contactData.email) {
      setError(t('err_fill_all') || 'Bitte fülle alle Pflichtfelder aus.');
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (requiresDealer && !selectedDealer) {
      setError('Bitte wähle einen Händler aus der Karte oder Liste aus.');
      document.getElementById('dealer-section')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    
    setError('');
    setIsSubmitting(true);

    try {
      const refNum = generateReferenceNumber();
      const custNum = "C-" + Math.floor(100000 + Math.random() * 900000).toString();

      const payload = {
        ...contactData,
        ...configData,
        motorCount: configData.motorCount, // Explicitly use the dynamic motorCount from state
        configurationPrices: priceData.configurationPrices,
        subtotal: priceData.subtotal,
        bundleDiscount: priceData.bundleDiscount,
        totalPrice: priceData.totalPrice,
        referenceNumber: refNum,
        customerNumber: custNum,
        dealerId: requiresDealer ? selectedDealer.id : '',
        status: 'pending'
      };

      const record = await pb.collection('configuration_requests').create(payload, { $autoCancel: false });
      
      setConfigurationRecord(record);
      if (requiresDealer) {
        updateConfigField('dealerId', selectedDealer.id);
      }
      
      toast({
        title: "Anfrage erfolgreich",
        description: "Ihre Daten wurden übermittelt.",
      });

      setCurrentStepId('step10_confirmation');

    } catch (err) {
      console.error('Record creation error:', err);
      setError('Es gab einen Fehler beim Speichern deiner Daten. Bitte versuche es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <div>
        <h2 className="text-3xl font-extrabold mb-3 tracking-tight">Zusammenfassung & Anfrage</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Bitte überprüfen Sie Ihre Konfiguration, geben Sie Ihre Kontaktdaten ein {requiresDealer && 'und wählen Sie einen Installationspartner'}.
        </p>
      </div>

      <form id="combined-form" onSubmit={handleSubmit} className="space-y-10">
        
        <section className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2 border-b border-border pb-2">
            <Settings className="w-5 h-5 text-primary" /> Ihre Konfiguration
          </h3>
          <div className="bg-muted/40 rounded-xl p-6 border border-border/50 grid sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
            {configData.ecuCount > 0 && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">Engine Control Unit</p>
                <p className="font-medium">{configData.ecuCount}x System</p>
              </div>
            )}
            {configData.motorType && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">Motor</p>
                <p className="font-medium">
                  {configData.motorType}
                  {configData.motorCount > 0 && (
                    <span className="text-muted-foreground font-normal text-sm block">
                      {configData.motorCount === 1 ? '1 Motor' : '2+ Motoren'}
                    </span>
                  )}
                </p>
              </div>
            )}
            {configData.joystickType && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">Steuerung</p>
                <p className="font-medium">{configData.joystickType}</p>
              </div>
            )}
            
            <div className="sm:col-span-2 md:col-span-3 pt-2">
              <p className="text-sm text-muted-foreground mb-2">Ausgewählte Module</p>
              <div className="flex flex-wrap gap-2">
                {configData.tcu && <span className="bg-background border border-border text-xs px-3 py-1 rounded-full shadow-sm">Thruster Control</span>}
                {configData.acu && <span className="bg-background border border-border text-xs px-3 py-1 rounded-full shadow-sm">Anchor Control</span>}
                {configData.wcu && <span className="bg-background border border-border text-xs px-3 py-1 rounded-full shadow-sm">Winch Control</span>}
                {configData.horn && <span className="bg-background border border-border text-xs px-3 py-1 rounded-full shadow-sm">Horn Control</span>}
                {(!configData.tcu && !configData.acu && !configData.wcu && !configData.horn) && 
                  <span className="text-sm text-muted-foreground italic">Keine zusätzlichen Module gewählt</span>
                }
              </div>
            </div>
          </div>
        </section>

        <section id="contact-section" className="space-y-4">
          <h3 className="text-xl font-bold border-b border-border pb-2">Kontaktdaten</h3>
          <div className="bg-card p-6 rounded-xl border border-border space-y-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Vorname *</Label>
                <Input id="firstName" name="firstName" value={contactData.firstName} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nachname *</Label>
                <Input id="lastName" name="lastName" value={contactData.lastName} onChange={handleChange} required />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail *</Label>
                <Input id="email" type="email" name="email" value={contactData.email} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" type="tel" name="phone" value={contactData.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Firma (Optional)</Label>
                <Input id="company" type="text" name="company" value={contactData.company} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Land</Label>
                <select
                  id="country"
                  name="country"
                  value={contactData.country}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {COUNTRIES.sort((a, b) => a.name.localeCompare(b.name)).map(c => (
                    <option key={`contact-country-${c.code}`} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8 space-y-2">
                <Label htmlFor="street">Straße</Label>
                <Input id="street" name="street" value={contactData.street} onChange={handleChange} />
              </div>
              <div className="col-span-4 space-y-2">
                <Label htmlFor="houseNumber">Nr.</Label>
                <Input id="houseNumber" name="houseNumber" value={contactData.houseNumber} onChange={handleChange} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="postalCode">PLZ</Label>
                <Input id="postalCode" name="postalCode" value={contactData.postalCode} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Stadt</Label>
                <Input id="city" name="city" value={contactData.city} onChange={handleChange} />
              </div>
            </div>
          </div>
        </section>

        {requiresDealer && (
          <section id="dealer-section" className="space-y-4">
            <div className="flex justify-between items-end border-b border-border pb-2">
              <h3 className="text-xl font-bold">Installationspartner wählen *</h3>
            </div>
            
            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="p-4 border-b border-border bg-muted/20 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs">Land</Label>
                  <select
                    value={filters.country}
                    onChange={(e) => { setFilters({ ...filters, country: e.target.value }); setUserLocation(null); }}
                    className="w-full bg-background border border-input text-foreground rounded-md h-9 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Alle Länder</option>
                    {COUNTRIES.sort((a, b) => a.name.localeCompare(b.name)).map(c => (
                      <option key={`filter-${c.code}`} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Stadt / PLZ</Label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      value={filters.city} 
                      onChange={(e) => { setFilters({ ...filters, city: e.target.value }); setUserLocation(null); }} 
                      className="h-9 pl-9" 
                      placeholder="Suchen..."
                    />
                  </div>
                </div>
                <div className="flex items-end pb-0.5">
                  <Button onClick={handleGPS} type="button" variant="outline" className="w-full h-9">
                    <Navigation className="w-4 h-4 mr-2" /> In meiner Nähe
                  </Button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row h-[500px]">
                <div className="w-full md:w-[35%] h-[200px] md:h-full border-b md:border-b-0 md:border-r border-border flex flex-col bg-background/50">
                  <div className="p-3 border-b border-border bg-muted/10 text-xs font-medium text-muted-foreground">
                    {loadingDealers ? 'Lade...' : `${filteredDealers.length} Händler gefunden`}
                  </div>
                  <div className="flex-1 overflow-y-auto p-3 space-y-3">
                    {loadingDealers ? (
                      Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="p-4 rounded-xl border border-border space-y-2">
                          <Skeleton className="h-4 w-3/4" />
                          <Skeleton className="h-3 w-full" />
                        </div>
                      ))
                    ) : (
                      dealersWithCoords.map((dealer) => (
                        <DealerCard 
                          key={dealer.id}
                          dealer={dealer}
                          isSelected={selectedDealer?.id === dealer.id}
                          onSelect={setSelectedDealer}
                        />
                      ))
                    )}
                    {filteredDealers.length === 0 && !loadingDealers && (
                      <div className="text-center py-8 text-muted-foreground text-sm">
                        Keine Händler für diese Filter gefunden.
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full md:w-[65%] h-[300px] md:h-full relative z-0 bg-muted/20">
                  {!loadingDealers && (
                    <MapContainer center={[51.1657, 10.4515]} zoom={5} style={{ height: "100%", width: "100%" }} className="z-0">
                      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                      <MapUpdater center={selectedDealer} markers={dealersWithCoords} />
                      {userLocation && <Marker position={[userLocation.lat, userLocation.lng]} icon={createCustomIcon(true)}><Popup>Ihr Standort</Popup></Marker>}
                      {dealersWithCoords.map((dealer) => (
                        <Marker 
                          key={`marker-${dealer.id}`} 
                          position={[parseFloat(dealer.latitude), parseFloat(dealer.longitude)]} 
                          icon={createCustomIcon(selectedDealer?.id === dealer.id)} 
                          eventHandlers={{ click: () => setSelectedDealer(dealer) }}
                        >
                          <Popup className="custom-popup">
                            <div className="font-bold text-sm mb-1">{dealer.name}</div>
                            <div className="text-xs text-muted-foreground">{dealer.address}</div>
                          </Popup>
                        </Marker>
                      ))}
                    </MapContainer>
                  )}
                </div>
              </div>
              
              {selectedDealer && (
                <div className="p-4 bg-primary/5 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Ausgewählter Partner</p>
                    <p className="font-medium">{selectedDealer.name}</p>
                  </div>
                  <div className="text-sm text-right sm:text-left text-muted-foreground">
                    <p>{selectedDealer.address}, {selectedDealer.country}</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {error && (
          <div className="p-4 bg-destructive/10 text-destructive rounded-xl flex gap-3 items-center text-sm font-medium border border-destructive/20">
            <AlertCircle className="w-5 h-5 shrink-0" />
            {error}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <Button variant="outline" onClick={goBack} disabled={isSubmitting} type="button" size="lg" className="w-full sm:w-auto">
            Zurück
          </Button>
          <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto px-10">
            {isSubmitting ? 'Wird übermittelt...' : 'Jetzt anfragen'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step9ContactForm;