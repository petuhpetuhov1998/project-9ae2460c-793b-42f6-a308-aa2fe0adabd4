import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { 
  ChildGiraffe, 
  ChildOwl, 
  ChildPanda, 
  ChildHedgehog, 
  ChildFox, 
  ChildBear,
  ChildHome,
  ChildShield,
  ChildFood,
  ChildTree
} from '@/components/ui/child-icons';

// Bento grid features with animal icons
const bentoFeatures = [
  {
    id: 'space',
    title: 'Уютная и безопасная атмосфера',
    description: 'Просторные игровые комнаты, оборудованные специальными материалами. В садике ведётся круглосуточное видеонаблюдение.',
    AnimalIcon: ChildGiraffe,
    size: 'large', // spans 2 columns
    gradient: 'from-sage/20 to-primary/10',
  },
  {
    id: 'schedule',
    title: 'Гибкий график для вашего удобства',
    description: 'Группа работает на полный и сокращённый день, также есть продлёнка с 7:30 до 19:00. В субботу организованы студии выходного дня.',
    AnimalIcon: ChildOwl,
    size: 'medium',
    gradient: 'from-amber-accent/20 to-sage/10',
  },
  {
    id: 'teachers',
    title: 'Квалифицированные педагоги',
    description: 'Все педагоги имеют высшее педагогическое образование и опыт работы с детьми от 5 лет. Постоянное повышение квалификации.',
    AnimalIcon: ChildPanda,
    size: 'medium',
    gradient: 'from-primary/20 to-sage/10',
  },
  {
    id: 'activities',
    title: 'Активности вне садика',
    description: 'Организуем выезды в театры, на фермы, в музеи, на концерты и спортивные мероприятия, чтобы расширить кругозор детей.',
    AnimalIcon: ChildHedgehog,
    size: 'medium',
    gradient: 'from-sage/20 to-emerald-500/10',
  },
];

// Stats for the bottom info block
const statsInfo = [
  { Icon: ChildHome, value: '200 м²', label: 'площадь садика' },
  { Icon: ChildShield, value: '24/7', label: 'видеонаблюдение' },
];

const zones = [
  'Игровая зона',
  'Зона отдыха',
  'Творческая мастерская',
  'Учебный класс',
  'Спортивный уголок',
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
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  return { count, ref };
};

const About = () => {
  const { count: graduatesCount, ref: graduatesRef } = useCountUp(150);
  const { count: yearsCount, ref: yearsRef } = useCountUp(8);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Clean white background - no decorative elements */}
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-soft mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Почему выбирают нас</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-monly font-bold text-foreground mb-4">
              Лучшие условия для{' '}
              <span className="bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
                вашего малыша
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создали идеальное пространство, где ваш ребёнок будет развиваться, 
              учиться и находить новых друзей в безопасной атмосфере.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {/* Large card - spans 2 columns on lg */}
          <ScrollReveal animation="fade-up" delay={0} className="lg:col-span-1 lg:row-span-2">
            <div className="group relative h-full min-h-[320px] bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-card hover:shadow-elevated transition-all duration-500 overflow-hidden">
              {/* Animal icon in corner */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-sage/30 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ChildGiraffe size={40} className="text-amber-accent" />
              </div>
              
              <div className="relative mt-16">
                <h3 className="font-monly font-bold text-xl md:text-2xl text-foreground mb-4 max-w-[200px]">
                  {bentoFeatures[0].title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {bentoFeatures[0].description}
                </p>
              </div>

              {/* Decorative gradient */}
              <div className={`absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-br ${bentoFeatures[0].gradient} rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity`} />
            </div>
          </ScrollReveal>

          {/* Medium cards */}
          {bentoFeatures.slice(1).map((feature, index) => (
            <ScrollReveal key={feature.id} animation="fade-up" delay={(index + 1) * 100}>
              <div className="group relative h-full min-h-[200px] bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-card hover:shadow-elevated transition-all duration-500 overflow-hidden">
                {/* Animal icon in corner */}
                <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-gradient-to-br from-sage/30 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.AnimalIcon size={32} className="text-amber-accent" />
                </div>
                
                <div className="relative mt-12">
                  <h3 className="font-monly font-bold text-lg text-foreground mb-3 max-w-[180px]">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative gradient */}
                <div className={`absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity`} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom info section */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Left block - Stats and zones */}
            <div className="lg:col-span-3 bg-gradient-to-br from-sage/20 to-primary/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/50 shadow-card">
              {/* Stats badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {statsInfo.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-5 py-3 border border-white/50 shadow-soft"
                  >
                    <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center">
                      <stat.Icon size={18} className="text-sage" />
                    </div>
                    <span className="font-monly font-bold text-foreground">{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-monly font-bold text-xl text-foreground mb-4">
                Помещение разделено на тематические зоны:
              </h3>
              
              <ul className="space-y-2">
                {zones.map((zone, index) => (
                  <li key={zone} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {zone}
                  </li>
                ))}
              </ul>

              {/* Decorative tree */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <ChildTree size={80} className="text-sage" />
              </div>
            </div>

            {/* Right block - Fox card */}
            <div className="lg:col-span-2 relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-card overflow-hidden">
              {/* Fox icon */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-amber-accent/30 to-primary/20 flex items-center justify-center">
                <ChildFox size={40} className="text-amber-accent" />
              </div>

              <div className="mt-14">
                <h3 className="font-monly font-bold text-xl text-foreground mb-4">
                  Разнообразные развивающие занятия
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Дополнительные занятия уже включены в основную программу: арт-терапия, 
                  логопед, английский язык, песочная терапия, йога, уроки экологии.
                </p>
              </div>

              {/* Stats at bottom */}
              <div className="flex gap-6 mt-6 pt-6 border-t border-border/30">
                <div ref={graduatesRef}>
                  <span className="text-3xl font-monly font-bold bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
                    {graduatesCount}+
                  </span>
                  <p className="text-xs text-muted-foreground">выпускников</p>
                </div>
                <div ref={yearsRef}>
                  <span className="text-3xl font-monly font-bold bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
                    {yearsCount}
                  </span>
                  <p className="text-xs text-muted-foreground">лет работы</p>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-br from-amber-accent/20 to-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;