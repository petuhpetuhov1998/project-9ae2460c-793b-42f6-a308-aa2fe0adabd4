import { MapPin } from 'lucide-react';
import heroChild from '@/assets/hero-child-balls.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-gradient-to-br from-sky-light via-sky/30 to-sky-light">
      {/* Decorative circles */}
      <div className="absolute top-32 right-[15%] w-16 h-16 rounded-full border-4 border-sky/50" />
      <div className="absolute top-48 left-[8%] w-8 h-8 rounded-full bg-amber-light/60" />
      <div className="absolute top-[60%] left-[5%] w-12 h-12 rounded-full border-4 border-pink-light/40" />
      <div className="absolute bottom-[30%] right-[8%] w-10 h-10 rounded-full border-4 border-sky/40" />
      <div className="absolute top-40 right-[40%] w-6 h-6 rounded-full bg-pink-light/50" />
      <div className="absolute bottom-40 left-[15%] w-4 h-4 rounded-full bg-amber-light/50" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-280px)]">
          {/* Text Content */}
          <div className="animate-fade-in">
            {/* Location */}
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">г. Тюмень</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-amber-accent font-heading tracking-wide">МИСТЕР МИШКА</span>
              <br />
              <span className="text-foreground uppercase">Частный</span>
              <br />
              <span className="text-foreground uppercase">Детский сад</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              с заботой о детях<br />и родителях
            </p>

            {/* CTA Button */}
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-pink-accent hover:bg-pink-accent/90 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg uppercase tracking-wide"
            >
              Записаться на экскурсию
            </a>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
            {/* Decorative elements around image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-pink-light/60" />
            <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-amber-light/60" />
            
            {/* Circular image container */}
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
              <div className="absolute inset-0 rounded-full border-8 border-amber-accent bg-background overflow-hidden shadow-elevated">
                <img 
                  src={heroChild} 
                  alt="Счастливый ребенок" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          {/* Card 1 - Blue */}
          <div className="relative bg-sky/60 rounded-3xl p-6 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300 backdrop-blur-sm">
            {/* Decorative star */}
            <div className="absolute -top-3 -right-2">
              <svg className="w-8 h-8 text-sky" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12.5 2 13 2.5 13 3V5C13 5.5 12.5 6 12 6C11.5 6 11 5.5 11 5V3C11 2.5 11.5 2 12 2Z" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <p className="text-foreground text-center">
              <span className="font-bold text-lg">с 7:30 до 18:00</span>
              <br />
              <span className="text-sm text-muted-foreground">по запросу продленка</span>
            </p>
          </div>

          {/* Card 2 - Light blue */}
          <div className="relative bg-sky-light/80 rounded-3xl p-6 transform rotate-[1deg] hover:rotate-0 transition-transform duration-300 backdrop-blur-sm">
            {/* Decorative star */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <svg className="w-8 h-8 text-amber-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" />
              </svg>
            </div>
            <p className="text-foreground text-center">
              <span className="font-bold text-lg">Принимаем</span>
              <br />
              <span className="text-sm">с 1.5 лет</span>
            </p>
          </div>

          {/* Card 3 - Peach */}
          <div className="relative bg-peach/80 rounded-3xl p-6 transform rotate-[2deg] hover:rotate-0 transition-transform duration-300 backdrop-blur-sm">
            {/* Decorative flower */}
            <div className="absolute -top-3 -right-2">
              <svg className="w-8 h-8 text-pink-accent" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3" />
                <circle cx="12" cy="6" r="2.5" />
                <circle cx="17" cy="9" r="2.5" />
                <circle cx="15" cy="15" r="2.5" />
                <circle cx="9" cy="15" r="2.5" />
                <circle cx="7" cy="9" r="2.5" />
              </svg>
            </div>
            <p className="text-foreground text-center">
              <span className="font-bold text-lg">В группах</span>
              <br />
              <span className="text-sm">до 15 детей</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
