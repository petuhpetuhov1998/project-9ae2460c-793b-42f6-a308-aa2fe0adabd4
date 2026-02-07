import { useEffect, useRef } from 'react';

const Map = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing content
    containerRef.current.innerHTML = '';

    // Create and append the Yandex Maps script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4187f624647c7ac7a3a71f6f1758c6599661a0717e3687d36d8e94ab7b6ad805&width=100%25&height=100%25&lang=ru_RU&scroll=true';
    
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-elevated border border-white/50">
      <div 
        ref={containerRef} 
        className="w-full h-full"
        style={{ minHeight: '300px' }}
      />
      
      {/* Overlay for smooth integration */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-black/5" />
    </div>
  );
};

export default Map;
