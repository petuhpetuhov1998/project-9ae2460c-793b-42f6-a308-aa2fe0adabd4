import React from "react";
import { 
  ArrowRight, 
  Play, 
  Heart, 
  Star,
  Shield,
  Users,
  Clock,
  Award,
  Sparkles,
  Baby,
  BookOpen,
  Palette,
  Music
} from "lucide-react";
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import heroChild from '@/assets/hero-child.jpg';

// Features for marquee
const FEATURES = [
  { name: "Развитие речи", icon: BookOpen },
  { name: "Творчество", icon: Palette },
  { name: "Музыка", icon: Music },
  { name: "Монтессори", icon: Sparkles },
  { name: "Безопасность", icon: Shield },
  { name: "Забота", icon: Heart },
];

// Stats item component
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-lg font-bold text-foreground">{value}</div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cream via-background to-sand/30">
      {/* Scoped animations */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-slide-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee-scroll {
          animation: marquee 30s linear infinite;
        }
        .animate-float-custom {
          animation: float 3s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background decorative elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroChild})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          filter: 'blur(40px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/95 to-cream/70" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-peach/30 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10 px-4 pt-28 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            
            {/* Badge */}
            <div className="animate-fade-slide-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-soft">
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Лучший частный сад 2024
                  </span>
                  <span className="flex gap-0.5 ml-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-accent text-amber-accent" />
                    ))}
                  </span>
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="animate-fade-slide-in delay-100 font-monly">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Детский сад
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-sage to-primary bg-clip-text text-transparent">
                  «Мистер Мишка»
                </span>
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground mt-2">
                с заботой о детях
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-slide-in delay-200 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Создаём безопасную и развивающую среду, где каждый ребёнок 
              раскрывает свой потенциал через игру, творчество и общение.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-slide-in delay-300 flex flex-wrap items-center gap-4">
              <LiquidButton 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Записаться на экскурсию
                <ArrowRight className="w-5 h-5 ml-2" />
              </LiquidButton>
              
              <button className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border border-white/40 hover:bg-white/80 transition-all duration-300">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Play className="w-4 h-4 text-primary fill-primary" />
                </span>
                <span className="text-foreground font-medium">Видеообзор</span>
              </button>
            </div>
          </div>

          {/* Right Column - Stats & Image */}
          <div className="relative space-y-6">
            
            {/* Main Image with Glassmorphism overlay */}
            <div className="animate-fade-slide-in delay-200 relative">
              {/* Card Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-sage/20 to-primary/30 rounded-3xl blur-2xl opacity-60" />
              
              <div className="relative rounded-3xl overflow-hidden bg-white/40 backdrop-blur-xl border border-white/50 shadow-elevated p-6">
                
                {/* Image */}
                <div className="relative mb-6">
                  <img 
                    src={heroChild} 
                    alt="Счастливый ребенок в детском саду" 
                    className="w-full h-64 object-contain animate-float-custom"
                  />
                </div>

                {/* Stats Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-sage flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">150+</p>
                      <p className="text-sm text-muted-foreground">Выпускников</p>
                    </div>
                  </div>
                  
                  {/* Tag Pills */}
                  <div className="flex gap-2">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 text-xs font-medium">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      Набор открыт
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Довольные родители</span>
                    <span className="text-foreground font-semibold">98%</span>
                  </div>
                  <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-gradient-to-r from-primary to-sage rounded-full" />
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <StatItem value="1.5-6" label="лет" />
                  <StatItem value="12" label="детей в группе" />
                  <StatItem value="5" label="воспитателей" />
                </div>
              </div>
            </div>

            {/* Marquee Card */}
            <div className="animate-fade-slide-in delay-400 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-card p-4 overflow-hidden">
              <p className="text-xs text-muted-foreground mb-3 text-center font-medium uppercase tracking-wider">
                Наши направления развития
              </p>
              
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee-scroll">
                  {/* Triple list for seamless loop */}
                  {[...FEATURES, ...FEATURES, ...FEATURES].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-6 py-2 mx-2 rounded-full bg-white/60 border border-white/40 flex-shrink-0"
                    >
                      <feature.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-4 top-1/4 animate-fade-slide-in delay-500">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/50 shadow-card">
                <Shield className="w-4 h-4 text-sage" />
                <span className="text-sm font-medium text-foreground">Безопасность</span>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/3 animate-fade-slide-in delay-500">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/50 shadow-card">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">2 группы</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
