import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

import gallery1 from '@/assets/gallery/gallery-1.jpg';
import gallery2 from '@/assets/gallery/gallery-2.jpg';
import gallery3 from '@/assets/gallery/gallery-3.jpg';
import gallery4 from '@/assets/gallery/gallery-4.jpg';
import gallery5 from '@/assets/gallery/gallery-5.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Игра с конструктором' },
  { src: gallery2, alt: 'Творческие занятия' },
  { src: gallery3, alt: 'Праздник с шариками' },
  { src: gallery4, alt: 'Детский праздник' },
  { src: gallery5, alt: 'День рождения' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Галерея
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Наши фото
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Яркие моменты из жизни нашего садика — игры, занятия и праздники
            </p>
          </div>
        </ScrollReveal>

        {/* Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal
              key={index}
              animation="scale"
              delay={index * 100}
            >
              <div
                className={cn(
                  "group relative overflow-hidden rounded-2xl cursor-pointer",
                  "aspect-[3/4]",
                  // Make some images span 2 rows on larger screens
                  index === 0 && "md:row-span-2 md:aspect-auto md:h-full",
                  index === 3 && "lg:row-span-2 lg:aspect-auto lg:h-full"
                )}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
                {/* Glass border effect */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 group-hover:ring-primary/40 transition-all duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Add more photos hint */}
        <ScrollReveal animation="fade-up" delay={500}>
          <p className="text-center text-muted-foreground text-sm mt-8">
            Больше фотографий в нашем{' '}
            <a 
              href="#" 
              className="text-primary hover:underline font-medium"
              onClick={(e) => e.preventDefault()}
            >
              Instagram
            </a>
          </p>
        </ScrollReveal>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/95 backdrop-blur-xl">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          {selectedImage !== null && (
            <div className="relative flex items-center justify-center w-full h-[80vh]">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Navigation arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
