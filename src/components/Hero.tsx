import React from "react";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import heroChild from '@/assets/hero-child.jpg';
import logo from '@/assets/logo.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cream via-background to-sand/30">
      {/* Scoped animations */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.7; }
        }
        .animate-fade-slide-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      {/* Decorative background elements */}
      <div className="absolute top-32 right-32 w-24 h-24 rounded-full border-2 border-sage/20 animate-pulse-soft" />
      <div className="absolute bottom-40 left-16 w-16 h-16 rounded-full border-2 border-primary/15 animate-pulse-soft delay-200" />
      <div className="absolute top-1/2 right-16 w-8 h-8 rounded-full bg-peach/30 animate-float" />
      
      {/* Soft gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-sage/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-peach/15 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10 px-4 pt-24 pb-12">
        
        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Column - Big Title + Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            
            {/* Location badge */}
            <div className="animate-fade-slide-in inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">г. Тюмень</span>
            </div>

            {/* HUGE Title */}
            <div className="animate-fade-slide-in delay-100">
              <h1 className="font-monly leading-none">
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[9rem] font-bold bg-gradient-to-r from-primary via-sage to-primary bg-clip-text text-transparent">
                  Мистер
                </span>
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[9rem] font-bold bg-gradient-to-r from-sage via-primary to-sage bg-clip-text text-transparent -mt-2 lg:-mt-4">
                  Мишка
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="animate-fade-slide-in delay-200 space-y-1">
              <p className="text-2xl md:text-3xl font-monly font-bold text-foreground">
                Частный детский сад
              </p>
              <p className="text-lg text-muted-foreground">
                с заботой о детях и родителях
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-slide-in delay-300 pt-2">
              <LiquidButton 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Записаться на экскурсию
                <ArrowRight className="w-5 h-5 ml-2" />
              </LiquidButton>
            </div>
          </div>

          {/* Right Column - Circular Image */}
          <div className="animate-fade-slide-in delay-200 relative flex-shrink-0">
            {/* Main image container */}
            <div className="relative">
              {/* Outer gradient ring */}
              <div className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full p-1.5 bg-gradient-to-br from-primary via-amber-accent to-sage shadow-2xl">
                {/* Inner image */}
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img 
                    src={heroChild} 
                    alt="Счастливый ребенок в детском саду" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating star */}
              <div className="absolute -top-2 -right-2 animate-float">
                <div className="flex items-center justify-center w-10 h-10 bg-amber-accent rounded-full shadow-lg">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
              
              {/* Logo badge */}
              <div className="absolute -bottom-4 -left-4 animate-float delay-200">
                <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center p-2">
                  <img 
                    src={logo} 
                    alt="Логотип Мистер Мишка" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto lg:mx-0">
          
          {/* Card 1 - Hours */}
          <div className="animate-fade-slide-in delay-300">
            <div className="relative bg-gradient-to-br from-sage/25 to-sage/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-sage/20 shadow-soft">
              <div className="absolute -top-2 -right-2">
                <div className="w-8 h-8 bg-sage rounded-full flex items-center justify-center shadow-md">
                  <Clock className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-base font-monly font-bold text-foreground">с 7:30 до 18:00</p>
              <p className="text-sm text-muted-foreground">по запросу 24/7</p>
            </div>
          </div>

          {/* Card 2 - Age */}
          <div className="animate-fade-slide-in delay-400">
            <div className="relative bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-sm rounded-2xl px-5 py-4 border border-primary/15 shadow-soft text-center">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <span className="text-xl">⭐</span>
              </div>
              <p className="text-base font-monly font-bold text-foreground">Принимаем</p>
              <p className="text-sm text-muted-foreground">с 1.5 лет</p>
            </div>
          </div>

          {/* Card 3 - Group Size */}
          <div className="animate-fade-slide-in delay-400" style={{ animationDelay: '0.5s' }}>
            <div className="relative bg-gradient-to-br from-peach/30 to-peach/15 backdrop-blur-sm rounded-2xl px-5 py-4 border border-peach/25 shadow-soft">
              <div className="absolute -top-2 -right-2">
                <span className="text-xl">🌸</span>
              </div>
              <p className="text-base font-monly font-bold text-foreground">В группах</p>
              <p className="text-sm text-muted-foreground">8-12 детей</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
