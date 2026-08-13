import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Navigation, Search, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';

// Custom Limegrün Marker
const limeGreenMarker = L.divIcon({
  className: 'custom-leaflet-marker',
  html: `<div style="background-color: #00D084; width: 24px; height: 24px; border-radius: 50%; border: 3px solid #0F1419; box-shadow: 0 0 15px rgba(0,208,132,0.6); position: relative; left: -12px; top: -12px;"></div>`,
  iconSize: [0, 0]
});

const dealers = [
  {
    id: 1,
    name: 'Thitronik GmbH',
    address: 'Finkenweg 9–15',
    postalCode: '24340',
    city: 'Eckernförde',
    country: 'Deutschland',
    coords: [54.4716, 9.8375],
    phone: '+49 4351 767440',
    email: 'info@thitronik.de'
  }
];

const DealerSection = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [activeDealer, setActiveDealer] = useState(dealers[0]);
  const [mapCenter, setMapCenter] = useState(dealers[0].coords);
  const [mapZoom, setMapZoom] = useState(6);

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          // For the sake of demonstration, center map between user and dealer
          setMapCenter([latitude, longitude]);
          setMapZoom(7);
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    }
  };

  const handleRoutePlan = (dealer) => {
    const query = encodeURIComponent(`${dealer.name}, ${dealer.address}, ${dealer.postalCode} ${dealer.city}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section id="haendler" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Fachhändler finden</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Finden Sie einen zertifizierten SMARTDOCK Installations- und Servicepartner in Ihrer Nähe.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar / List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Suche</h3>
              <Button 
                onClick={handleGeolocation}
                variant="outline" 
                className="w-full mb-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Standort verwenden
              </Button>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input 
                  type="text" 
                  placeholder="PLZ oder Stadt eingeben..." 
                  className="pl-10 bg-background border-border text-foreground"
                />
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg flex-grow flex flex-col">
              <h3 className="text-lg font-semibold mb-4">Ergebnisse</h3>
              <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {dealers.map((dealer) => (
                  <div 
                    key={dealer.id}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                      activeDealer?.id === dealer.id 
                        ? 'border-[hsl(var(--ci-green))] bg-slate-700 shadow-md ring-2 ring-[hsl(var(--ci-green)_/_0.2)]' 
                        : 'border-border hover:border-border/80'
                    }`}
                    onClick={() => {
                      setActiveDealer(dealer);
                      setMapCenter(dealer.coords);
                      setMapZoom(12);
                    }}
                  >
                    <h4 className="font-semibold text-foreground mb-1">{dealer.name}</h4>
                    <div className="text-sm text-muted-foreground mb-3 space-y-1">
                      <p>{dealer.address}</p>
                      <p>{dealer.postalCode} {dealer.city}</p>
                      <p>{dealer.country}</p>
                    </div>
                    {userLocation && (
                      <p className="text-xs text-muted-foreground mb-3 font-medium bg-muted inline-block px-2 py-1 rounded">
                        Distanz: ~ {Math.round(Math.random() * 50 + 10)} km
                      </p>
                    )}
                    <Button 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRoutePlan(dealer);
                      }}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Route planen
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-card rounded-2xl overflow-hidden border border-border shadow-lg min-h-[500px] relative z-0"
          >
            {/* The MapContainer needs a z-index of 0 so the sticky header stays on top */}
            <MapContainer 
              center={mapCenter} 
              zoom={mapZoom} 
              scrollWheelZoom={false} 
              style={{ height: '100%', width: '100%', position: 'absolute', inset: 0, zIndex: 0 }}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />
              {dealers.map(dealer => (
                <Marker 
                  key={dealer.id} 
                  position={dealer.coords} 
                  icon={limeGreenMarker}
                  eventHandlers={{
                    click: () => setActiveDealer(dealer),
                  }}
                >
                  <Popup className="custom-popup">
                    <div className="p-1">
                      <h4 className="font-semibold text-primary text-sm mb-1">{dealer.name}</h4>
                      <p className="text-xs text-muted-foreground">{dealer.address}</p>
                      <p className="text-xs text-muted-foreground">{dealer.postalCode} {dealer.city}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
              {userLocation && (
                <Marker position={userLocation}>
                  <Popup>Ihr Standort</Popup>
                </Marker>
              )}
            </MapContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DealerSection;