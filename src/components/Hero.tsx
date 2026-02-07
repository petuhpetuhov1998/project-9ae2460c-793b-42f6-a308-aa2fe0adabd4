import React from "react";
import { ArrowRight, ChefHat, Shield, Maximize, Star, Phone } from "lucide-react";
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import heroChild from '@/assets/hero-child.jpg';
import logo from '@/assets/logo.png';
import { FoxIcon, BearIcon, RabbitIcon } from './AnimalIcons';

const Hero = () => {
  const advantages = [
    { 
      icon: ChefHat, 
      title: 'Домашняя кухня', 
      desc: '5-разовое питание',
      color: 'from-amber-accent to-primary',
      animalIcon: FoxIcon,
    },
    { 
      icon: Shield, 
      title: 'Безопасность', 
      desc: 'Видеонаблюдение 24/7',
      color: 'from-sage to-primary',
      animalIcon: BearIcon,
    },
    { 
      icon: Maximize, 
      title: '200 м²', 
      desc: 'Просторное помещение',
      color: 'from-primary to-sage',
      animalIcon: RabbitIcon,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cream via-white to-peach/20">
      {/* CSS Animations */}
      <style>{`
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-slide-up {
          animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }
        .animate-scale-up {
          animation: scaleUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }
        .animate-gentle-float {
          animation: gentleFloat 5s ease-in-out infinite;
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-sage/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-peach/20 to-amber-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container mx-auto relative z-10 px-4 pt-28 pb-16">
        
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left column - Text content */}
          <div className="space-y-6">
            
            {/* Logo and brand */}
            <div className="animate-slide-up flex items-center gap-5">
              <img src={logo} alt="Мистер Мишка" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
              <div>
                <p className="font-monly font-bold text-foreground text-2xl md:text-3xl">Мистер Мишка</p>
                <p className="text-base md:text-lg text-muted-foreground">Частный детский сад</p>
              </div>
            </div>

            {/* Heading */}
            <div className="animate-slide-up delay-200 space-y-4">
              <h1 className="font-monly text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
                Место, где{' '}
                <span className="bg-gradient-to-r from-primary via-sage to-primary bg-clip-text text-transparent animate-shimmer">
                  детство
                </span>
                {' '}становится волшебным
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Создаём тёплую атмосферу для развития и счастья вашего ребёнка. 
                Индивидуальный подход к каждому малышу от 1.5 до 6 лет.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="animate-slide-up delay-300 flex flex-wrap items-center gap-4">
              <LiquidButton 
                size="xxl"
                className="text-2xl md:text-3xl px-12 py-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                ЭКСКУРСИЯ
              </LiquidButton>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-4 text-foreground font-medium hover:text-primary transition-colors"
              >
                Узнать подробнее →
              </button>
            </div>

            {/* Trust indicators */}
            <div className="animate-slide-up delay-400 flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-sage border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {['👶', '👧', '👦', '🧒'][i-1]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">150+ счастливых выпускников</p>
                <p className="text-xs text-muted-foreground">за 7 лет работы</p>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative animate-scale-up delay-200 flex justify-center">
            
            {/* Main image container */}
            <div className="relative animate-gentle-float max-w-[320px] md:max-w-[380px]">
              
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-sage/20 to-amber-accent/30 rounded-[2rem] blur-2xl" />
              
              {/* Image frame */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={heroChild} 
                  alt="Счастливый ребенок в детском саду" 
                  className="w-full aspect-[4/5] object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>

              {/* Floating age badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-5 py-3 shadow-xl border border-border">
                <p className="text-sm font-bold text-foreground">1.5 — 6 лет</p>
                <p className="text-xs text-muted-foreground">возраст детей</p>
              </div>

              {/* Floating group badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-primary to-sage rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-sm font-bold text-white">8-12 детей</p>
                <p className="text-xs text-white/80">в группе</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages section */}
        <div className="mt-20 grid sm:grid-cols-3 gap-6">
          {advantages.map((adv, index) => (
            <div 
              key={adv.title}
              className={`animate-slide-up delay-${(index + 3) * 100} group relative overflow-hidden rounded-2xl bg-white border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Animal Icon */}
              <div className="absolute -top-3 -right-3 z-10">
                <adv.animalIcon className="w-14 h-14 drop-shadow-md group-hover:scale-110 transition-transform" />
              </div>
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${adv.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <adv.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="font-monly font-bold text-xl text-foreground mb-1">{adv.title}</h3>
              <p className="text-muted-foreground">{adv.desc}</p>
              
              {/* Decorative corner */}
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${adv.color} opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
