import React from "react";
import { MapPin, Clock, Users, Baby, Star, ArrowRight } from "lucide-react";
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import heroChild from '@/assets/hero-child.jpg';
import bearMascot from '@/assets/bear-mascot.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-cream to-peach/20">
      {/* Scoped animations */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full border-4 border-sage/20 animate-pulse-soft" />
      <div className="absolute top-40 right-40 w-16 h-16 rounded-full border-2 border-primary/20 animate-pulse-soft delay-200" />
      <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full border-3 border-peach/30 animate-pulse-soft delay-300" />
      <div className="absolute top-1/3 left-10 w-8 h-8 rounded-full bg-sage/20 animate-float" />
      <div className="absolute bottom-1/3 right-10 w-12 h-12 rounded-full bg-primary/10 animate-float delay-200" />
      
      {/* Soft gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-sky-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-peach/20 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10 px-4 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            
            {/* Location badge */}
            <div className="animate-fade-slide-in">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-base">г. Тюмень</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="animate-fade-slide-in delay-100 space-y-2">
              <h1 className="font-monly">
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  Мистер Мишка
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-2">
                  ЧАСТНЫЙ
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  ДЕТСКИЙ САД
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="animate-fade-slide-in delay-200 text-xl md:text-2xl text-muted-foreground max-w-md leading-relaxed">
              с заботой о детях<br />
              и родителях
            </p>

            {/* CTA Button */}
            <div className="animate-fade-slide-in delay-300">
              <LiquidButton 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="shadow-lg hover:shadow-xl transition-shadow"
              >
                Записаться на экскурсию
                <ArrowRight className="w-5 h-5 ml-2" />
              </LiquidButton>
            </div>
          </div>

          {/* Right Column - Circular Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-slide-in delay-200">
            {/* Rotating ring decoration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[380px] h-[380px] md:w-[450px] md:h-[450px] rounded-full border-2 border-dashed border-sage/30 animate-spin-slow" />
            </div>
            
            {/* Main image container */}
            <div className="relative">
              {/* Outer ring */}
              <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full p-2 bg-gradient-to-br from-primary via-amber-accent to-primary shadow-2xl">
                {/* Inner image */}
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img 
                    src={heroChild} 
                    alt="Счастливый ребенок в детском саду" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating star decoration */}
              <div className="absolute -top-4 -right-4 animate-float">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-accent rounded-full shadow-lg">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
              
              {/* Bear mascot */}
              <div className="absolute -bottom-6 -left-6 animate-float delay-300">
                <img 
                  src={bearMascot} 
                  alt="Мишка маскот" 
                  className="w-20 h-20 object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          {/* Card 1 - Hours */}
          <div className="animate-fade-slide-in delay-400">
            <div className="relative bg-gradient-to-br from-sage/30 to-sage/10 backdrop-blur-sm rounded-3xl p-6 border border-sage/20 shadow-soft hover:shadow-card transition-shadow duration-300">
              {/* Floating icon */}
              <div className="absolute -top-3 -right-3">
                <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center shadow-md">
                  <Clock className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <p className="text-lg font-monly font-bold text-foreground">
                с 7:30 до 18:00
              </p>
              <p className="text-muted-foreground mt-1">
                по запросу 24/7
              </p>
            </div>
          </div>

          {/* Card 2 - Age */}
          <div className="animate-fade-slide-in delay-500">
            <div className="relative bg-gradient-to-br from-sky-200/50 to-sky-100/30 backdrop-blur-sm rounded-3xl p-6 border border-sky-200/30 shadow-soft hover:shadow-card transition-shadow duration-300">
              {/* Floating icon */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1">
                  <span className="text-2xl">⭐</span>
                </div>
              </div>
              
              <p className="text-lg font-monly font-bold text-foreground text-center">
                Принимаем
              </p>
              <p className="text-muted-foreground mt-1 text-center">
                с 1.5 лет
              </p>
            </div>
          </div>

          {/* Card 3 - Group Size */}
          <div className="animate-fade-slide-in delay-500" style={{ animationDelay: '0.6s' }}>
            <div className="relative bg-gradient-to-br from-peach/40 to-peach/20 backdrop-blur-sm rounded-3xl p-6 border border-peach/30 shadow-soft hover:shadow-card transition-shadow duration-300">
              {/* Floating decoration */}
              <div className="absolute -top-3 -right-3">
                <span className="text-2xl">🌸</span>
              </div>
              
              <p className="text-lg font-monly font-bold text-foreground">
                В группах
              </p>
              <p className="text-muted-foreground mt-1">
                8-12 детей
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
