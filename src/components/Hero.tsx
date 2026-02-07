import { MapPin } from 'lucide-react';
import heroChild from '@/assets/hero-child-balls.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-cream">
      {/* Decorative circles with animations */}
      <div className="absolute top-32 right-[15%] w-16 h-16 rounded-full border-4 border-secondary/50 animate-float-slow" />
      <div className="absolute top-48 left-[8%] w-8 h-8 rounded-full bg-secondary/60 animate-float-delayed" />
      <div className="absolute top-[60%] left-[5%] w-12 h-12 rounded-full border-4 border-primary/30 animate-float" />
      <div className="absolute bottom-[30%] right-[8%] w-10 h-10 rounded-full border-4 border-secondary/40 animate-bounce-soft" />
      <div className="absolute top-40 right-[40%] w-6 h-6 rounded-full bg-primary/40 animate-pulse-soft" />
      <div className="absolute bottom-40 left-[15%] w-4 h-4 rounded-full bg-accent/40 animate-float-slow" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-280px)]">
          {/* Text Content */}
          <div className="animate-fade-in">
            {/* Location */}
            <div className="flex items-center gap-2 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">г. Тюмень</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-primary font-heading tracking-wide opacity-0 animate-fade-in-up inline-block" style={{ animationDelay: '0.2s' }}>
                МИСТЕР МИШКА
              </span>
              <br />
              <span className="text-foreground uppercase opacity-0 animate-fade-in-up inline-block" style={{ animationDelay: '0.3s' }}>
                Частный
              </span>
              <br />
              <span className="text-foreground uppercase opacity-0 animate-fade-in-up inline-block" style={{ animationDelay: '0.4s' }}>
                Детский сад
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground mb-8 max-w-md opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              с заботой о детях<br />и родителях
            </p>

            {/* CTA Button */}
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 text-lg uppercase tracking-wide opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              Записаться на экскурсию
            </a>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative elements around image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/50 animate-float" />
            <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-secondary/60 animate-float-delayed" />
            
            {/* Circular image container */}
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] opacity-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 rounded-full border-8 border-primary bg-background overflow-hidden shadow-elevated transition-transform duration-500 hover:scale-[1.02]">
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
          {/* Card 1 - Secondary */}
          <div 
            className="relative bg-secondary/60 rounded-3xl p-6 transform rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 backdrop-blur-sm cursor-pointer opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.7s' }}
          >
            {/* Decorative star */}
            <div className="absolute -top-3 -right-2 animate-wiggle">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
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

          {/* Card 2 - Cream */}
          <div 
            className="relative bg-card rounded-3xl p-6 transform rotate-[1deg] hover:rotate-0 hover:scale-105 transition-all duration-300 backdrop-blur-sm cursor-pointer opacity-0 animate-fade-in-up shadow-soft"
            style={{ animationDelay: '0.8s' }}
          >
            {/* Decorative star */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 animate-bounce-soft">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" />
              </svg>
            </div>
            <p className="text-foreground text-center">
              <span className="font-bold text-lg">Принимаем</span>
              <br />
              <span className="text-sm">с 1.5 лет</span>
            </p>
          </div>

          {/* Card 3 - Primary light */}
          <div 
            className="relative bg-primary/20 rounded-3xl p-6 transform rotate-[2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 backdrop-blur-sm cursor-pointer opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.9s' }}
          >
            {/* Decorative flower */}
            <div className="absolute -top-3 -right-2 animate-pulse-soft">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
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
