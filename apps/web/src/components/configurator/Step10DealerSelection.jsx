import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, Phone, Mail, Globe, Search, Map as MapIcon, List as ListIcon, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Skeleton } from '@/components/ui/skeleton.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { useConfigurator } from '@/contexts/ConfiguratorContext.jsx';
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
    <div className="space-y-2 text-sm text-muted-foreground mt-3">
      <p className="flex items-start">
        <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0" /> 
        <span>{dealer.address}<br/>{dealer.country}</span>
      </p>
      {dealer.phone && <p className="flex items-center"><Phone className="w-4 h-4 mr-2 shrink-0" /> {dealer.phone}</p>}
      {dealer.email && <p className="flex items-center"><Mail className="w-4 h-4 mr-2 shrink-0" /> {dealer.email}</p>}
      {dealer.website && <a href={dealer.website.startsWith('http') ? dealer.website : `https://${dealer.website}`} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center text-primary hover:underline mt-2"><Globe className="w-4 h-4 mr-2 shrink-0" /> {dealer.website.replace(/^https?:\/\//, '')}</a>}
      {dealer.website2 && <a href={dealer.website2.startsWith('http') ? dealer.website2 : `https://${dealer.website2}`} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center text-primary hover:underline mt-1"><Globe className="w-4 h-4 mr-2 shrink-0" /> {dealer.website2.replace(/^https?:\/\//, '')}</a>}
    </div>
  </div>
);

const Step10DealerSelection = () => {
  const { t, currentCountry } = useLanguage();
  const { toast } = useToast();
  const { 
    selectedCountry, 
    isSubmitting, 
    setIsSubmitting,
    setIsCompleted,
    goBack,
    selectedDealer,
    setSelectedDealer,
    configurationRecord,
    currentRequestId,
    updateConfigField,
    priceData
  } = useConfigurator();

  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');

  const [filters, setFilters] = useState({
    country: selectedCountry || currentCountry.name,
    city: '',
    postalCode: ''
  });
  
  const [userLocation, setUserLocation] = useState(null);
  const [activeTab, setActiveTab] = useState('list');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const fetchDealers = async () => {
      setLoading(true);
      setFetchError('');
      try {
        const records = await pb.collection('dealers').getFullList({
          $autoCancel: false,
          sort: 'name',
        });
        setDealers(records);
      } catch (err) {
        console.error('Error fetching dealers:', err);
        setFetchError('Händler konnten nicht geladen werden. Bitte versuchen Sie es später erneut.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchDealers();
  }, []);

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
        result = result.filter(d => d.country === filters.country || (filters.country === 'Deutschland' && d.country === 'Germany'));
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

  const handleSubmit = async () => {
    if (isSubmitting) return;
    
    if (!selectedDealer) {
      setSubmitError(t('err_dealer') || 'Bitte wähle einen Händler aus.');
      return;
    }
    
    const recordIdToUpdate = configurationRecord?.id || currentRequestId;
    
    if (!recordIdToUpdate) {
      setSubmitError('Es liegt ein Fehler vor (keine Anfrage-ID gefunden). Bitte lade die Seite neu.');
      return;
    }
    
    setSubmitError('');
    setIsSubmitting(true);

    try {
      updateConfigField('dealerId', selectedDealer.id);
      updateConfigField('status', 'assigned');

      await pb.collection('configuration_requests').update(recordIdToUpdate, {
        dealerId: selectedDealer.id,
        status: 'assigned',
        configurationPrices: priceData.configurationPrices,
        subtotal: priceData.subtotal,
        bundleDiscount: priceData.bundleDiscount,
        totalPrice: priceData.totalPrice
      }, { $autoCancel: false });

      toast({
        title: "Erfolgreich zugewiesen",
        description: "Dein Händler wurde erfolgreich benachrichtigt.",
      });

      setIsCompleted(true);
    } catch (err) {
      console.error('Request update error:', err);
      toast({
        title: "Hinweis",
        description: "Deine Anfrage wurde aufgenommen. Wir kontaktieren den Händler.",
      });
      setIsCompleted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t('s11_dealer_title') || 'Händler auswählen'}</h2>
        <p className="text-muted-foreground">{t('s11_dealer_desc') || 'Bitte wähle einen zertifizierten SMARTDOCK Partner in deiner Nähe für die Installation aus.'}</p>
      </div>

      <div className="bg-card border border-border p-4 rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <div className="space-y-2">
            <Label>{t('df_country')}</Label>
            <select
              value={filters.country}
              onChange={(e) => { setFilters({ ...filters, country: e.target.value }); setUserLocation(null); }}
              className="w-full bg-background border border-border text-foreground rounded-lg h-10 px-3 outline-none focus:border-primary"
            >
              <option value="">{t('df_all_countries')}</option>
              {COUNTRIES.sort((a, b) => a.name.localeCompare(b.name)).map(c => (
                <option key={`filter-${c.code}`} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label>{t('df_city')}</Label>
            <Input value={filters.city} onChange={(e) => { setFilters({ ...filters, city: e.target.value }); setUserLocation(null); }} className="bg-background border-border" />
          </div>
          <div className="pt-2">
            <Button onClick={handleGPS} variant="outline" className="w-full border-primary/50 hover:bg-primary/10 text-foreground">
              <Navigation className="w-4 h-4 mr-2 text-primary" /> {t('df_gps')}
            </Button>
          </div>
        </div>
      </div>

      {fetchError && (
        <div className="p-4 bg-destructive/10 text-destructive rounded-xl flex gap-3 items-center text-sm font-medium border border-destructive/20">
          <AlertCircle className="w-5 h-5 shrink-0" />
          {fetchError}
        </div>
      )}

      <div className="flex sm:hidden bg-muted p-1 rounded-lg">
        <button className={`flex-1 py-2 text-sm font-medium rounded-md flex items-center justify-center transition-colors ${activeTab === 'list' ? 'bg-background shadow text-foreground' : 'text-muted-foreground'}`} onClick={() => setActiveTab('list')}><ListIcon className="w-4 h-4 mr-2" /> {t('df_list')}</button>
        <button className={`flex-1 py-2 text-sm font-medium rounded-md flex items-center justify-center transition-colors ${activeTab === 'map' ? 'bg-background shadow text-foreground' : 'text-muted-foreground'}`} onClick={() => setActiveTab('map')}><MapIcon className="w-4 h-4 mr-2" /> {t('df_map')}</button>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 flex-grow min-h-[400px]">
        <div className={`w-full sm:w-[45%] flex flex-col h-[400px] sm:h-auto bg-card border border-border rounded-2xl overflow-hidden ${activeTab === 'map' ? 'hidden sm:flex' : 'flex'}`}>
          <div className="p-4 border-b border-border bg-muted/30">
            <h3 className="font-semibold flex items-center"><Search className="w-4 h-4 mr-2 text-primary" /> {loading ? '...' : filteredDealers.length} {t('df_found')}</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="p-4 rounded-xl border border-border bg-background space-y-3">
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
                  <div className="pt-4 mt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-4 px-2 text-muted-foreground">
                      <Info className="w-4 h-4 shrink-0" />
                      <h4 className="text-sm font-medium tracking-wide uppercase">Weitere Händler (ohne Kartenposition)</h4>
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
                  <div className="text-center py-12 text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>{t('df_empty')}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className={`w-full sm:w-[55%] h-[400px] sm:h-auto rounded-2xl overflow-hidden border border-border relative z-0 ${activeTab === 'list' ? 'hidden sm:block' : 'block'}`}>
          {loading ? (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <Skeleton className="w-full h-full" />
            </div>
          ) : (
            <MapContainer center={[51.1657, 10.4515]} zoom={5} style={{ height: "100%", width: "100%" }} className="z-0 bg-muted">
              <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
              <MapUpdater center={selectedDealer} markers={dealersWithCoords} />
              {userLocation && <Marker position={[userLocation.lat, userLocation.lng]} icon={createCustomIcon(true)}><Popup>Ihr Standort</Popup></Marker>}
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

      {submitError && (
        <div className="p-4 bg-destructive/10 text-destructive rounded-xl flex gap-3 items-center text-sm font-medium border border-destructive/20 mt-6">
          <AlertCircle className="w-5 h-5 shrink-0" />
          {submitError}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-border gap-4 mt-8">
        <Button variant="outline" onClick={goBack} disabled={isSubmitting} type="button" className="w-full sm:w-auto">
          {t('btn_back') || 'Zurück'}
        </Button>
        <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all">
          {isSubmitting ? (t('btn_submitting') || 'Wird gesendet...') : (t('s8_submit') || 'Jetzt anfragen')}
        </Button>
      </div>
    </div>
  );
};

export default Step10DealerSelection;