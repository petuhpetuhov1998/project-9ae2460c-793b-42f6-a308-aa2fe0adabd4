import { Clock, Star, Sparkles, Crown, Zap } from 'lucide-react';
import { RippleButton } from '@/components/ui/ripple-button';
import ScrollReveal from './ScrollReveal';
import { Tiles } from '@/components/ui/tiles';
import { 
  ChildSpeech, 
  ChildDancing, 
  ChildPencil, 
  ChildChess, 
  ChildPalette, 
  ChildMusic 
} from '@/components/ui/child-icons';

const subscriptions = [
  {
    title: 'Полдня',
    price: '20 000',
    hours: '7:30 – 12:30',
    features: [
      'Детская йога — 2 раза в неделю',
      'Творческий кружок — каждый день',
      'Кружок «Мир вокруг нас» — 2 раза в неделю',
      'Логоритмика — каждый день',
      'Фото/видео отчёт каждый день',
      'Прогулка на свежем воздухе',
      'Питание: завтрак, второй завтрак, обед',
    ],
    icon: Zap,
    popular: false,
  },
  {
    title: 'Полный день',
    price: '30 000',
    hours: '7:30 – 18:30',
    popular: true,
    features: [
      'Детская йога — 2 раза в неделю',
      'Творческий кружок — каждый день',
      'Кружок «Мир вокруг нас» — 2 раза в неделю',
      'Логоритмика — каждый день',
      'Фото/видео отчёт каждый день',
      'Прогулка на свежем воздухе',
      'Дневной сон',
      'Питание: завтрак, второй завтрак, обед, полдник, ужин',
    ],
    icon: Crown,
  },
];

const extraClasses = [
  { name: 'Логопед', price: 'от 800 ₽', Icon: ChildSpeech },
  { name: 'Танцы', price: 'от 600 ₽', Icon: ChildDancing },
  { name: 'Каллиграфия', price: 'от 700 ₽', Icon: ChildPencil },
  { name: 'Шахматы', price: 'от 600 ₽', Icon: ChildChess },
  { name: 'Рисование', price: 'от 500 ₽', Icon: ChildPalette },
  { name: 'Музыка', price: 'от 600 ₽', Icon: ChildMusic },
];

const CheckIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PricingCard = ({ 
  title, 
  price, 
  hours, 
  features, 
  icon: Icon, 
  popular 
}: typeof subscriptions[0]) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`
      relative backdrop-blur-xl bg-gradient-to-br rounded-3xl shadow-xl flex-1 max-w-md px-8 py-10 flex flex-col transition-all duration-500
      from-white/60 to-white/30 border border-white/40
      ${popular ? 'scale-105 ring-2 ring-primary/30 shadow-2xl z-10' : 'hover:scale-[1.02]'}
    `}>
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-primary to-sage text-white px-5 py-2 rounded-full text-sm font-monly font-bold shadow-lg">
            <Star className="w-4 h-4 fill-white" />
            Популярный
          </div>
        </div>
      )}

      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
        popular 
          ? 'bg-gradient-to-br from-primary to-sage' 
          : 'bg-gradient-to-br from-sage/30 to-primary/20'
      }`}>
        <Icon className={`w-8 h-8 ${popular ? 'text-white' : 'text-primary'}`} />
      </div>

      {/* Title & Hours */}
      <div className="mb-6">
        <h3 className="text-2xl font-monly font-bold text-foreground mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{hours}</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-8">
        <span className={`text-5xl font-monly font-bold ${
          popular 
            ? 'bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent' 
            : 'text-foreground'
        }`}>
          {price}
        </span>
        <span className="text-lg text-muted-foreground">₽/мес</span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-6" />

      {/* Features */}
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
              popular ? 'bg-primary' : 'bg-sage/40'
            }`}>
              <CheckIcon className={`w-3 h-3 ${popular ? 'text-white' : 'text-primary'}`} />
            </div>
            <span className="text-foreground/80 text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <RippleButton
        onClick={scrollToContact}
        rippleColor={popular ? 'rgba(255,255,255,0.4)' : 'rgba(129,163,128,0.3)'}
        className={`
          w-full py-4 rounded-2xl font-monly font-bold text-base transition-all duration-300
          ${popular 
            ? 'bg-gradient-to-r from-primary to-sage text-white hover:shadow-lg hover:shadow-primary/30' 
            : 'bg-white/60 border border-primary/20 text-foreground hover:bg-white/80 hover:border-primary/40'
          }
        `}
      >
        Выбрать абонемент
      </RippleButton>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Tiles Background */}
      <div className="absolute inset-0 z-0">
        <Tiles
          rows={50}
          cols={20}
          tileSize="lg"
          className="w-full h-full opacity-60"
          tileClassName="bg-transparent"
        />
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-background z-[1]" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-sage/5 rounded-full blur-3xl z-[1]" />
      
      <div className="container mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-soft mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Гибкие условия</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-monly font-bold text-foreground mb-4">
              Выберите{' '}
              <span className="bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
                идеальный план
              </span>
              {' '}для вашего ребёнка
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Гибкие абонементы для любого графика. Начните с пробного дня бесплатно.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch max-w-4xl mx-auto mb-20 px-4">
          {subscriptions.map((sub, index) => (
            <ScrollReveal 
              key={sub.title} 
              animation={index === 0 ? 'fade-right' : 'fade-left'} 
              delay={index * 150}
              className="w-full md:w-auto"
            >
              <PricingCard {...sub} />
            </ScrollReveal>
          ))}
        </div>

        {/* Extra Classes - Wave Style */}
        <ScrollReveal animation="fade-up">
          <div className="relative max-w-6xl mx-auto">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-sage/10 to-primary/10 rounded-[2.5rem] blur-2xl" />
            
            <div className="relative backdrop-blur-xl bg-white/50 rounded-3xl p-8 md:p-12 border border-white/50 shadow-elevated overflow-hidden">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-monly font-bold text-foreground mb-3">
                  Дополнительные занятия
                </h3>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Развивайте таланты ребёнка с нашими специалистами
                </p>
              </div>
              
              {/* Wave container */}
              <div className="relative">
                {/* Icons in wave pattern */}
                <div className="flex flex-wrap md:flex-nowrap justify-center items-start gap-6 md:gap-4 relative">
                  {/* Curved dashed line - positioned behind icons */}
                  <svg 
                    className="absolute left-[8%] right-[8%] top-10 md:top-12 w-[84%] h-12 pointer-events-none hidden md:block z-0"
                    viewBox="0 0 1000 50"
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M0,25 Q83,45 166,25 T333,25 T500,25 T666,25 T833,25 T1000,25" 
                      fill="none" 
                      stroke="hsl(var(--foreground) / 0.2)" 
                      strokeWidth="2" 
                      strokeDasharray="8 6"
                    />
                  </svg>
                  
                  {extraClasses.map((cls, index) => {
                    // Create wave effect with different vertical positions
                    const waveOffsets = [0, 20, -5, 15, -10, 5];
                    const offset = waveOffsets[index % waveOffsets.length];
                    
                    return (
                      <ScrollReveal 
                        key={cls.name} 
                        animation="scale" 
                        delay={index * 80}
                        className="flex-1 min-w-[140px] md:min-w-0 relative z-10"
                      >
                        <div 
                          className="group flex flex-col items-center"
                          style={{ paddingTop: `${Math.max(0, offset)}px` }}
                        >
                          {/* Circle with icon */}
                          <div className="relative">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-border/30 shadow-soft flex items-center justify-center group-hover:shadow-card group-hover:border-primary/30 transition-all duration-300 group-hover:scale-110">
                              <cls.Icon 
                                size={36} 
                                className="text-amber-accent group-hover:text-primary transition-colors duration-300" 
                              />
                            </div>
                            {/* Subtle glow on hover */}
                            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          
                          {/* Label */}
                          <div className="mt-4 text-center">
                            <p className="font-monly font-bold text-foreground text-sm md:text-base group-hover:text-primary transition-colors">
                              {cls.name}
                            </p>
                            <p className="text-xs md:text-sm text-muted-foreground mt-1">
                              {cls.price}
                            </p>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
