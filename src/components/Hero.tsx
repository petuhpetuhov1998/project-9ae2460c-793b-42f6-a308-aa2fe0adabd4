import React from "react";
import { ArrowRight, Sparkles, Heart, Shield, Users, Play } from "lucide-react";
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import heroChild from '@/assets/hero-child.jpg';
import logo from '@/assets/logo.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(180px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
        }
        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .animate-orbit {
          animation: orbit 20s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sage/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10 px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-12rem)]">
          
          {/* Left Column */}
          <div className="space-y-8">
            
            {/* Logo + Badge */}
            <div className="animate-fade-up flex items-center gap-4">
              <img src={logo} alt="Мистер Мишка" className="w-16 h-16 object-contain" />
              <div className="h-8 w-px bg-border" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-md border border-border">
                <Sparkles className="w-4 h-4 text-amber-accent" />
                <span className="text-sm font-medium text-muted-foreground">Лучший сад Тюмени 2024</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="animate-fade-up delay-100 space-y-4">
              <h1 className="font-monly leading-[0.9]">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                  Мистер Мишка
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg">
                Частный детский сад, где каждый день — приключение
              </p>
            </div>

            {/* Feature pills */}
            <div className="animate-fade-up delay-200 flex flex-wrap gap-3">
              {[
                { icon: Heart, text: 'Забота' },
                { icon: Shield, text: 'Безопасность' },
                { icon: Users, text: 'Малые группы' },
              ].map((item, i) => (
                <div 
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted/50 border border-border hover:bg-muted transition-colors cursor-default"
                >
                  <item.icon className="w-4 h-4 text-sage" />
                  <span className="text-sm font-medium text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-4 pt-4">
              <LiquidButton 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Записаться
                <ArrowRight className="w-5 h-5 ml-2" />
              </LiquidButton>
              
              <button className="group flex items-center gap-3 px-6 py-4 rounded-full bg-muted/50 border border-border hover:bg-muted transition-all duration-300">
                <span className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Play className="w-5 h-5 text-foreground fill-foreground" />
                </span>
                <span className="text-foreground font-medium">Смотреть видео</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="animate-fade-up delay-400 flex items-center gap-8 pt-8 border-t border-border">
              {[
                { value: '150+', label: 'Выпускников' },
                { value: '98%', label: 'Довольных родителей' },
                { value: '7', label: 'Лет опыта' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-monly font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Composition */}
          <div className="relative flex items-center justify-center animate-scale-in delay-200">

            {/* Main Image */}
            <div className="relative animate-float">
              {/* Glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/40 via-sage/30 to-amber-accent/40 rounded-full blur-3xl opacity-60" />
              
              {/* Ring decoration */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-white/10" />
              
              {/* Image container */}
              <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-sage to-amber-accent p-1 rounded-full">
                  <div className="w-full h-full rounded-full overflow-hidden bg-foreground">
                    <img 
                      src={heroChild} 
                      alt="Счастливый ребенок" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-5 py-3 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-sage rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">8-12 детей</p>
                    <p className="text-xs text-muted-foreground">в группе</p>
                  </div>
                </div>
              </div>

              {/* Age badge */}
              <div className="absolute -top-2 -left-4 bg-gradient-to-br from-sage to-primary rounded-2xl px-4 py-2 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                <p className="text-sm font-bold text-white">1.5 — 6 лет</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
