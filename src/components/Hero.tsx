import { LiquidButton } from '@/components/ui/liquid-glass-button';
import heroChild from '@/assets/hero-child.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-cream">
      {/* Decorative brush strokes - right side */}
      <div className="absolute top-20 right-0 w-[600px] h-[700px] pointer-events-none">
        <svg viewBox="0 0 600 700" className="w-full h-full" preserveAspectRatio="none">
          {/* Main peach brush stroke */}
          <path
            d="M200 50 Q450 80, 550 200 Q650 350, 580 500 Q500 650, 350 680 Q250 700, 200 600 Q150 500, 250 350 Q350 200, 200 50"
            fill="hsl(20 70% 85% / 0.6)"
          />
          {/* Secondary brush stroke */}
          <path
            d="M300 100 Q500 150, 580 300 Q620 450, 500 550 Q400 620, 320 580"
            fill="none"
            stroke="hsl(20 70% 85% / 0.4)"
            strokeWidth="60"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Small decorative elements */}
      <div className="absolute top-40 left-[45%] w-3 h-3 rounded-full bg-primary/40 animate-float" />
      <div className="absolute top-60 right-[35%] w-2 h-2 rounded-full bg-sage/60 animate-float-delayed" />
      <div className="absolute bottom-40 left-20 w-4 h-4 rounded-full bg-sky/60 animate-bounce-soft" />
      <div className="absolute bottom-36 left-28 text-amber-accent text-xl animate-wiggle">✦</div>

      {/* Yellow crown decoration near the girl */}
      <div className="absolute top-32 right-[25%] text-4xl animate-float-slow">👑</div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Left content */}
          <div className="space-y-8">
            {/* Main title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight">
              <span className="font-extrabold text-foreground italic">Ч</span>
              <span className="font-extrabold text-foreground">астный детский</span>
              <br />
              <span className="font-extrabold text-foreground">сад </span>
              <span className="relative inline-block">
                <span className="font-extrabold text-foreground italic">в Тюмени</span>
                {/* Decorative brackets */}
                <svg className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-12 text-sage" viewBox="0 0 12 48" fill="none">
                  <path d="M10 2 Q2 24, 10 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
                <svg className="absolute -right-4 top-1/2 -translate-y-1/2 w-3 h-12 text-sage" viewBox="0 0 12 48" fill="none">
                  <path d="M2 2 Q10 24, 2 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </h1>

            {/* Feature points */}
            <div className="flex flex-col sm:flex-row gap-6 text-foreground">
              <div className="flex items-start gap-3">
                <span className="text-primary text-lg mt-1">▲</span>
                <p className="text-sm leading-relaxed">
                  Все развивающие занятия<br />
                  для ребенка в одном месте
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-peach text-lg mt-1">●</span>
                <p className="text-sm leading-relaxed">
                  Эмоциональное воспитание<br />
                  в комфортной среде
                </p>
              </div>
            </div>

            {/* CTA section */}
            <div className="space-y-4">
              <p className="text-foreground">
                Запишитесь на <span className="font-bold">бесплатный</span> пробный день
              </p>
              <LiquidButton 
                size="xxl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Записаться на пробный день
              </LiquidButton>
            </div>

            {/* Bottom info cards */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <div className="border-l-2 border-muted pl-4 py-2">
                <p className="text-foreground text-sm">
                  Есть группа <span className="font-bold">выходного дня</span>
                </p>
                <p className="text-foreground text-sm">
                  Группы максимум по <span className="font-bold">12 детей</span>
                </p>
              </div>
              <div className="border-l-2 border-muted pl-4 py-2">
                <p className="text-foreground text-sm">
                  Возможность оплаты <span className="font-bold">по неделям</span>
                </p>
                <p className="text-foreground text-sm">
                  <span className="font-bold">Нет</span> вступительного взноса
                </p>
              </div>
            </div>
          </div>

          {/* Right content - Child image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroChild} 
                alt="Счастливый ребенок" 
                className="relative z-10 w-full max-w-[500px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
