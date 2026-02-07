import { Clock, Users, MapPin, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-kindergarten.jpg';
import bearMascot from '@/assets/bear-mascot.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <img src={bearMascot} alt="" className="w-16 h-16 animate-float" />
              <span className="bg-sage/30 text-sage-dark px-4 py-2 rounded-full text-sm font-semibold">
                Частный детский сад
              </span>
            </div>
            
            <h1 className="section-title mb-6">
              Детский сад{' '}
              <span className="section-title-accent">«Мистер Мишка»</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Уютное пространство 200 м² с домашней кухней и безопасной средой для развития 
              вашего ребёнка. Мы создаём атмосферу, в которой дети чувствуют себя как дома.
            </p>

            {/* Info badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="floating-badge">
                <Clock className="w-5 h-5 text-primary" />
                <span>7:30 – 18:00</span>
              </div>
              <div className="floating-badge">
                <Users className="w-5 h-5 text-warm" />
                <span>до 15 детей</span>
              </div>
              <div className="floating-badge">
                <MapPin className="w-5 h-5 text-accent" />
                <span>г. Тюмень</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Записаться на экскурсию
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="btn-outline-sage">
                Узнать об услугах
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage} 
                alt="Уютный интерьер детского сада Мистер Мишка" 
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-5 max-w-[220px]">
              <p className="text-sm font-bold text-foreground mb-1">
                Идёт набор в группу
              </p>
              <p className="text-xs text-muted-foreground">
                Дети от 1,5 до 7 лет
              </p>
              <div className="flex -space-x-2 mt-3">
                <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center text-white text-xs font-bold">М</div>
                <div className="w-8 h-8 rounded-full bg-warm flex items-center justify-center text-white text-xs font-bold">А</div>
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">К</div>
                <div className="w-8 h-8 rounded-full bg-brown flex items-center justify-center text-white text-xs font-bold">+5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
