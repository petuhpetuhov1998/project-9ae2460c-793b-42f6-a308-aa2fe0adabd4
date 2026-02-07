import { useEffect, useRef, useState } from 'react';
import { Home, Shield, Utensils, TreePine, Users, Heart, Award, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: Home,
    title: 'Уютное пространство',
    description: '200 м² современного оборудованного помещения с зонами для игр, занятий и отдыха.',
    gradient: 'from-primary/20 to-sage/20',
    iconColor: 'text-primary',
  },
  {
    icon: Utensils,
    title: 'Домашняя кухня',
    description: '5-разовое сбалансированное питание из свежих фермерских продуктов.',
    gradient: 'from-amber-accent/20 to-primary/20',
    iconColor: 'text-amber-accent',
  },
  {
    icon: Shield,
    title: 'Безопасность 24/7',
    description: 'Видеонаблюдение, видеодомофон, ежедневные фотоотчёты для родителей.',
    gradient: 'from-sage/20 to-sky/20',
    iconColor: 'text-sage',
  },
  {
    icon: TreePine,
    title: 'Свежий воздух',
    description: 'Оборудованная площадка для прогулок. Ежедневные прогулки в любую погоду.',
    gradient: 'from-emerald-500/20 to-sage/20',
    iconColor: 'text-emerald-600',
  },
];

const stats = [
  { value: 150, suffix: '+', label: 'Выпускников', icon: Users },
  { value: 8, suffix: '', label: 'Лет работы', icon: Award },
  { value: 98, suffix: '%', label: 'Довольных родителей', icon: Heart },
  { value: 5, suffix: '', label: 'Воспитателей', icon: Sparkles },
];

// Animated counter hook
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      animateCount();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasStarted]);

  const animateCount = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  return { count, ref };
};

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const { count, ref } = useCountUp(stat.value);
  
  return (
    <ScrollReveal animation="fade-up" delay={index * 100}>
      <div 
        ref={ref}
        className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-sage/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-sage/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <stat.icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-extrabold bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
              {count}
            </span>
            <span className="text-2xl font-bold text-primary">{stat.suffix}</span>
          </div>
          <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
        </div>
      </div>
    </ScrollReveal>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-sand/30 to-cream" />
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-soft mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Почему выбирают нас</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Лучшие условия для{' '}
              <span className="bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
                здоровья малышей
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создали идеальное пространство, где ваш ребёнок будет развиваться, 
              учиться и находить новых друзей в безопасной атмосфере.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} animation="fade-up" delay={index * 100}>
              <div className="group relative h-full">
                {/* Card */}
                <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 h-full">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden pointer-events-none">
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
