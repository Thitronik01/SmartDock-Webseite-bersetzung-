
import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, Phone, Mail, Globe, Search, Map as MapIcon, List as ListIcon, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Skeleton } from '@/components/ui/skeleton.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { pathFor } from '@/config/routes.js';
import pb from '@/lib/pocketbaseClient.js';
import Breadcrumb from '@/components/Breadcrumb.jsx';
import { useScrollRestoration } from '@/hooks/useScrollRestoration.js';

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

const getLocalizedDealerName = (dealer, activeLanguage) => {
  const languageCode = activeLanguage?.toLowerCase().split('-')[0];
  const localizedName = dealer?.[`name_${languageCode}`];
  return localizedName?.trim() || dealer?.name;
};

// --- Country normalization ---------------------------------------------
// Maps the various free-text country strings stored on dealer records
// (in German, English, or French) to a single canonical ISO 3166-1 alpha-2
// code. Used to de-duplicate the country filter dropdown and to filter
// dealers independently of which language variant is stored on the record.
const COUNTRY_ALIASES = {
  australia: 'AU',
  australien: 'AU',
  australie: 'AU',

  deutschland: 'DE',
  germany: 'DE',
  allemagne: 'DE',

  france: 'FR',
  frankreich: 'FR',

  spain: 'ES',
  spanien: 'ES',
  espagne: 'ES',
  espana: 'ES',

  switzerland: 'CH',
  schweiz: 'CH',
  suisse: 'CH',
};

const normalizeCountry = (rawCountry) => {
  if (!rawCountry) return null;
  const key = rawCountry.trim().toLowerCase();
  return COUNTRY_ALIASES[key] || null;
};

// Fallback labels used only when Intl.DisplayNames is unavailable or
// doesn't return a value for the given locale/region combination.
const COUNTRY_LABEL_FALLBACKS = {
  de: { AU: 'Australien', DE: 'Deutschland', FR: 'Frankreich', ES: 'Spanien', CH: 'Schweiz' },
  en: { AU: 'Australia', DE: 'Germany', FR: 'France', ES: 'Spain', CH: 'Switzerland' },
  fr: { AU: 'Australie', DE: 'Allemagne', FR: 'France', ES: 'Espagne', CH: 'Suisse' },
};

const getCountryLabel = (countryCode, activeLanguage) => {
  const languageCode = (activeLanguage || 'de').toLowerCase().split('-')[0];
  const localeMap = { de: 'de-DE', en: 'en', fr: 'fr-FR' };
  const locale = localeMap[languageCode] || languageCode;

  try {
    const displayName = new Intl.DisplayNames([locale], { type: 'region' }).of(countryCode);
    if (displayName) return displayName;
  } catch (e) {
    // Intl.DisplayNames not supported or region invalid; fall through to the
    // static fallback table below.
  }

  return COUNTRY_LABEL_FALLBACKS[languageCode]?.[countryCode] || countryCode;
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

const DealerCard = ({ dealer, isSelected, onSelect, t, displayName }) => (
  <div 
    onClick={() => onSelect(dealer)} 
    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
      isSelected 
        ? 'border-[hsl(var(--ci-green))] bg-slate-700 shadow-md ring-2 ring-[hsl(var(--ci-green)_/_0.2)]' 
        : 'border-border bg-background hover:border-border/80'
    }`}
  >
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-bold text-foreground text-lg leading-tight">{displayName}</h4>
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

const DealerFinderPage = () => {
  const { t, currentLanguage } = useLanguage();
  const isEn = currentLanguage === 'EN';
  const location = useLocation();
  const isCh = location.pathname.startsWith('/ch');
  
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [filters, setFilters] = useState({
    country: isCh ? 'CH' : '',
    postalCode: '',
    city: ''
  });
  
  const [userLocation, setUserLocation] = useState(null);
  const [selectedDealer, setSelectedDealer] = useState(null);
  const [activeTab, setActiveTab] = useState('list');

  useScrollRestoration();

  useEffect(() => {
    const fetchDealers = async () => {
      setLoading(true);
      setError('');
      try {
        const records = await pb.collection('dealers').getFullList({
          $autoCancel: false,
          sort: 'name',
        });
        setDealers(records);
      } catch (err) {
        console.error('Error fetching dealers:', err);
        setError('Händler konnten nicht geladen werden. Bitte versuchen Sie es später erneut.');
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
          setFilters({ country: '', postalCode: '', city: '' });
          setActiveTab('list');
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  const availableCountries = useMemo(() => {
    const codes = new Set(
      dealers
        .map(d => normalizeCountry(d.country))
        .filter(Boolean)
    );
    return Array.from(codes)
      .map(code => ({ code, label: getCountryLabel(code, currentLanguage) }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [dealers, currentLanguage]);

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
  }, [filters, userLocation, dealers, currentLanguage]);

  const dealersWithCoords = filteredDealers.filter(d => d.latitude != null && d.longitude != null);
  const dealersWithoutCoords = filteredDealers.filter(d => d.latitude == null || d.longitude == null);

  const handleDealerSelect = (dealer) => {
    setSelectedDealer(dealer);
    if (window.innerWidth < 768 && dealer.latitude != null && dealer.longitude != null) {
      setActiveTab('map');
    }
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 flex flex-col">
      <Helmet>
        <html lang="de-DE" />
        <title>{t('df_title')}</title>
        <meta name="description" content={t('df_sub')} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col">
        {/* Breadcrumb - Standardized position & margin */}
        <Breadcrumb 
          items={[
            { label: isEn ? 'Home' : 'Startseite', path: pathFor('home', currentLanguage) },
            { label: t('df_title') || 'Händlersuche', path: pathFor('dealer', currentLanguage) }
          ]} 
          className="mb-4"
        />

        <div className="mb-8 mt-8">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{t('df_title')}</h1>
          <p className="text-lg text-muted-foreground">{t('df_sub')}</p>
        </div>

        <div className="bg-card border border-border p-6 rounded-2xl mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <Label>{t('df_country')}</Label>
              <select
                value={filters.country}
                onChange={(e) => { setFilters({ ...filters, country: e.target.value }); setUserLocation(null); }}
                className="w-full bg-background border border-border text-foreground rounded-lg h-10 px-3 outline-none focus:border-primary"
              >
                <option value="">{t('df_all_countries')}</option>
                {availableCountries.map(({ code, label }) => (
                  <option key={`filter-${code}`} value={code}>{label}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label>{t('df_city')}</Label>
              <Input value={filters.city} onChange={(e) => { setFilters({ ...filters, city: e.target.value }); setUserLocation(null); }} className="bg-background border-border" />
            </div>
            <div className="space-y-2">
              <Label>{t('df_zip')}</Label>
              <Input value={filters.postalCode} onChange={(e) => { setFilters({ ...filters, postalCode: e.target.value }); setUserLocation(null); }} className="bg-background border-border" />
            </div>
            <div className="pt-2">
              <Button onClick={handleGPS} variant="outline" className="w-full border-primary/50 hover:bg-primary/10 text-foreground">
                <Navigation className="w-4 h-4 mr-2 text-primary" /> {t('df_gps')}
              </Button>
            </div>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-destructive/10 text-destructive rounded-xl flex gap-3 items-center text-sm font-medium border border-destructive/20 mb-8">
            <AlertCircle className="w-5 h-5 shrink-0" />
            {error}
          </div>
        )}

        <div className="flex md:hidden bg-muted p-1 rounded-lg mb-4">
          <button className={`flex-1 py-2 text-sm font-medium rounded-md flex items-center justify-center transition-colors ${activeTab === 'list' ? 'bg-background shadow text-foreground' : 'text-muted-foreground'}`} onClick={() => setActiveTab('list')}><ListIcon className="w-4 h-4 mr-2" /> {t('df_list')}</button>
          <button className={`flex-1 py-2 text-sm font-medium rounded-md flex items-center justify-center transition-colors ${activeTab === 'map' ? 'bg-background shadow text-foreground' : 'text-muted-foreground'}`} onClick={() => setActiveTab('map')}><MapIcon className="w-4 h-4 mr-2" /> {t('df_map')}</button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 flex-grow min-h-[800px]">
          <div className={`flex-1 flex flex-col h-[800px] bg-card border border-border rounded-2xl overflow-hidden ${activeTab === 'map' ? 'hidden md:flex' : 'flex'}`}>
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
                      displayName={getLocalizedDealerName(dealer, currentLanguage)}
                    />
                  ))}
                  
                  {dealersWithoutCoords.length > 0 && (
                    <div className="pt-4 mt-6 border-t border-border">
                      <div className="flex items-center gap-2 mb-4 px-2 text-muted-foreground">
                        <Info className="w-4 h-4 shrink-0" />
                        <h4 className="text-sm font-medium tracking-wide uppercase">{t('df_other_dealers')}</h4>
                      </div>
                      <div className="space-y-4">
                        {dealersWithoutCoords.map((dealer) => (
                          <DealerCard 
                            key={dealer.id}
                            dealer={dealer}
                            isSelected={selectedDealer?.id === dealer.id}
                            onSelect={handleDealerSelect}
                            t={t}
                            displayName={getLocalizedDealerName(dealer, currentLanguage)}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredDealers.length === 0 && !error && (
                    <div className="text-center py-12 text-muted-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-4 opacity-20" />
                      <p>{t('df_empty')}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className={`w-[800px] h-[800px] shrink-0 rounded-2xl overflow-hidden border border-border relative z-0 ${activeTab === 'list' ? 'hidden md:block' : 'block'}`}>
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
                      <div className="font-bold text-base mb-1">{getLocalizedDealerName(dealer, currentLanguage)}</div>
                      <div className="text-sm text-muted-foreground">{dealer.address}</div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerFinderPage;
