import { Check, Clock, Star, Sparkles, Crown, Zap } from 'lucide-react';
import { RippleButton } from '@/components/ui/ripple-button';
import { ShaderCanvas } from '@/components/ui/shader-canvas';
import ScrollReveal from './ScrollReveal';

const subscriptions = [
  {
    title: 'Полдня',
    price: '18 000',
    hours: '7:30 – 13:00',
    features: [
      'Развивающие занятия',
      '3-разовое питание',
      'Прогулки на свежем воздухе',
      'Творческие мастер-классы',
      'Фотоотчёты для родителей',
    ],
    icon: Zap,
    popular: false,
  },
  {
    title: 'Полный день',
    price: '28 000',
    hours: '7:30 – 18:00',
    popular: true,
    features: [
      'Все услуги абонемента «Полдня»',
      '5-разовое питание',
      'Дневной сон',
      'Дополнительные занятия',
      'Подготовка к школе',
      'Английский язык',
    ],
    icon: Crown,
  },
];

const extraClasses = [
  { name: 'Логопед', price: 'от 800 ₽', emoji: '🗣️' },
  { name: 'Танцы', price: 'от 600 ₽', emoji: '💃' },
  { name: 'Каллиграфия', price: 'от 700 ₽', emoji: '✍️' },
  { name: 'Шахматы', price: 'от 600 ₽', emoji: '♟️' },
  { name: 'Рисование', price: 'от 500 ₽', emoji: '🎨' },
  { name: 'Музыка', price: 'от 600 ₽', emoji: '🎵' },
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
    <section id="services" className="py-24 relative overflow-hidden min-h-screen">
      {/* Animated Shader Background */}
      <div className="absolute inset-0">
        <ShaderCanvas />
      </div>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/40" />
      
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

        {/* Extra Classes */}
        <ScrollReveal animation="fade-up">
          <div className="relative max-w-5xl mx-auto">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-sage/10 to-primary/10 rounded-[2.5rem] blur-2xl" />
            
            <div className="relative backdrop-blur-xl bg-white/50 rounded-3xl p-8 md:p-12 border border-white/50 shadow-elevated">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-monly font-bold text-foreground mb-3">
                  Дополнительные занятия
                </h3>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Развивайте таланты ребёнка с нашими специалистами
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {extraClasses.map((cls, index) => (
                  <ScrollReveal key={cls.name} animation="scale" delay={index * 50}>
                    <div className="group relative">
                      <div className="backdrop-blur-sm bg-white/70 rounded-2xl p-5 text-center border border-white/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 hover:bg-white/90">
                        {/* Emoji */}
                        <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                          {cls.emoji}
                        </div>
                        <p className="font-monly font-bold text-foreground mb-1">{cls.name}</p>
                        <p className="text-sm text-muted-foreground">{cls.price}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
