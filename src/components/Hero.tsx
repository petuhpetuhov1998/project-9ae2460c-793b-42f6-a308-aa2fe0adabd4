import { ArrowRight } from 'lucide-react';
import heroChild from '@/assets/hero-child.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-8 overflow-hidden bg-cream">
      {/* Decorative brush strokes */}
      <div className="absolute top-20 right-0 w-[600px] h-[700px] pointer-events-none">
        <svg viewBox="0 0 600 700" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M450 50 Q550 100, 580 200 Q600 350, 550 500 Q500 600, 400 650"
            fill="none"
            stroke="hsl(18 55% 80% / 0.6)"
            strokeWidth="120"
            strokeLinecap="round"
          />
          <path
            d="M380 100 Q480 150, 520 280 Q540 400, 480 520"
            fill="none"
            stroke="hsl(18 55% 85% / 0.4)"
            strokeWidth="80"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-32 right-[35%] w-6 h-6 bg-sage rounded-full opacity-60" />
      <div className="absolute top-48 left-[5%] w-4 h-4 bg-warm rounded-full opacity-40" />
      <div className="absolute bottom-40 left-[8%] w-5 h-5 bg-sage/50 rounded-full" />
      
      {/* Small decorative star */}
      <svg className="absolute bottom-36 left-[12%] w-6 h-6 text-warm/60" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" />
      </svg>

      {/* Small curve accent near title */}
      <svg className="absolute top-[45%] right-[42%] w-8 h-8 text-sage" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 24 Q16 8, 24 16" strokeLinecap="round" />
      </svg>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-200px)]">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-8">
              <span className="text-foreground">Частный детский</span>
              <br />
              <span className="text-foreground">сад </span>
              <span className="relative inline-block">
                <span className="relative z-10">в Тюмени</span>
                {/* Decorative underline bracket */}
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-sage" viewBox="0 0 200 20" preserveAspectRatio="none">
                  <path d="M5 5 Q100 20, 195 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Feature points */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-start gap-3">
                <span className="mt-1.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" className="text-warm">
                    <polygon points="6,0 12,12 0,12" fill="currentColor" />
                  </svg>
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                  Все развивающие занятия<br />для ребенка в одном месте
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-3 h-3 bg-warm rounded-full mt-1.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                  Эмоциональное воспитание<br />в комфортной среде
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mb-10">
              <p className="text-foreground mb-4">
                Запишитесь на <span className="font-bold">бесплатный пробный день</span>
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-foreground hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-soft hover:shadow-elevated text-lg"
              >
                Записаться на пробный день
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
            <img 
              src={heroChild} 
              alt="Счастливый ребенок" 
              className="relative z-10 h-[500px] lg:h-[600px] object-contain object-bottom"
            />
          </div>
        </div>

        {/* Info Cards at bottom */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mt-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-border/50">
            <p className="text-foreground text-sm mb-1">
              Группы максимум по <span className="font-bold">15 детей</span>
            </p>
            <p className="text-muted-foreground text-sm">
              Индивидуальный подход к каждому
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-border/50">
            <p className="text-foreground text-sm mb-1">
              Возможность оплаты <span className="font-bold">по неделям</span>
            </p>
            <p className="text-muted-foreground text-sm">
              <span className="font-bold">Нет</span> вступительного взноса
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
