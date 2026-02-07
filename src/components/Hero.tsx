import { Play } from 'lucide-react';
import heroImage from '@/assets/hero-montessori.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 pb-12 overflow-hidden bg-cream">
      {/* Decorative blob - top right */}
      <div className="absolute top-0 right-0 w-[400px] h-[300px] pointer-events-none">
        <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M250 0 Q400 50, 400 150 Q400 280, 300 300 L400 300 L400 0 Z"
            fill="hsl(150 30% 85% / 0.5)"
          />
        </svg>
      </div>

      {/* Decorative blob - bottom left */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[200px] pointer-events-none">
        <svg viewBox="0 0 300 200" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 100 Q50 50, 150 80 Q250 120, 200 200 L0 200 Z"
            fill="hsl(150 30% 85% / 0.4)"
          />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Main content */}
        <div className="relative">
          {/* Hero Image - large rounded container */}
          <div className="relative ml-auto w-full lg:w-[75%] mt-8">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-elevated">
              <img 
                src={heroImage} 
                alt="Ребенок играет с развивающими игрушками" 
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Floating card - enrollment */}
              <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-card animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <p className="text-foreground font-semibold text-sm mb-2">Идет набор</p>
                <p className="text-foreground text-sm">в группу <span className="font-bold">1.5–6 лет</span></p>
                <div className="flex -space-x-2 mt-3">
                  <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-white flex items-center justify-center text-xs">👶</div>
                  <div className="w-8 h-8 rounded-full bg-sage/30 border-2 border-white flex items-center justify-center text-xs">👧</div>
                  <div className="w-8 h-8 rounded-full bg-sand border-2 border-white flex items-center justify-center text-xs">👦</div>
                </div>
              </div>

              {/* Bottom info badges */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <div className="bg-white rounded-full px-5 py-3 shadow-card flex items-center gap-2">
                  <span className="text-xl">🦒</span>
                  <span className="text-foreground font-medium text-sm">2 группы</span>
                </div>
                <div className="bg-white rounded-full px-5 py-3 shadow-card flex items-center gap-2">
                  <span className="text-xl">🐼</span>
                  <span className="text-foreground font-medium text-sm">от 1.5 лет</span>
                </div>
                <div className="bg-white rounded-full px-5 py-3 shadow-card flex items-center gap-2 cursor-pointer hover:bg-muted transition-colors">
                  <span className="text-foreground font-medium text-sm">Видеообзор</span>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text overlay - positioned on left */}
          <div className="absolute top-12 left-0 z-20 max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight mb-6">
              <span className="text-foreground">Детский сад</span>
              <br />
              <span className="text-foreground">«Мистер Мишка»</span>
              <br />
              <span className="text-sage-text">с заботой о детях</span>
            </h1>

            {/* CTA Button */}
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-transparent border-2 border-foreground/30 hover:border-primary hover:bg-primary hover:text-white text-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 text-sm uppercase tracking-wider mt-4"
            >
              Записаться на экскурсию
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
