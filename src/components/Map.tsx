// Simple OpenStreetMap embed - no external dependencies needed
// Tyumen coordinates (replace with your actual address coordinates)
const KINDERGARTEN_LAT = 57.1522;
const KINDERGARTEN_LNG = 65.5272;
const ZOOM = 16;

const Map = () => {
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${KINDERGARTEN_LNG - 0.01}%2C${KINDERGARTEN_LAT - 0.005}%2C${KINDERGARTEN_LNG + 0.01}%2C${KINDERGARTEN_LAT + 0.005}&layer=mapnik&marker=${KINDERGARTEN_LAT}%2C${KINDERGARTEN_LNG}`;

  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-elevated border border-white/50">
      <iframe
        title="Карта расположения детского сада Мистер Мишка"
        src={mapUrl}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      
      {/* Overlay for smooth integration */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-black/5" />
      
      {/* Link to full map */}
      <a
        href={`https://www.openstreetmap.org/?mlat=${KINDERGARTEN_LAT}&mlon=${KINDERGARTEN_LNG}#map=${ZOOM}/${KINDERGARTEN_LAT}/${KINDERGARTEN_LNG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-foreground hover:bg-white transition-colors shadow-md"
      >
        Открыть карту →
      </a>
    </div>
  );
};

export default Map;
