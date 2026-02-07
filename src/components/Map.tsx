import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in React-Leaflet
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Tyumen coordinates (replace with your actual address coordinates)
const KINDERGARTEN_POSITION: [number, number] = [57.1522, 65.5272];

const Map = () => {
  useEffect(() => {
    // Fix leaflet container sizing issues
    window.dispatchEvent(new Event('resize'));
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-elevated border border-white/50">
      <MapContainer
        center={KINDERGARTEN_POSITION}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
        style={{ borderRadius: 'inherit' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={KINDERGARTEN_POSITION} icon={customIcon}>
          <Popup>
            <div className="text-center p-1">
              <strong className="text-foreground">Мистер Мишка</strong>
              <br />
              <span className="text-muted-foreground text-sm">г. Тюмень, ул. Примерная, 123</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      
      {/* Overlay gradient for smooth integration */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-black/5" />
    </div>
  );
};

export default Map;
