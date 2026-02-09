import { Clock, Star, Sparkles, Crown, Zap, Gift } from 'lucide-react';
import { RippleButton } from '@/components/ui/ripple-button';
import ScrollReveal from './ScrollReveal';
import { Tiles } from '@/components/ui/tiles';
import { 
  ChildSpeech, 
  ChildDancing, 
  ChildPencil, 
  ChildPalette, 
  ChildYoga,
  ChildGlobe,
  ChildRhythm,
  ChildBook,
  ChildGraduation
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
      '5-разовое питание (завтрак, второй завтрак, обед, полдник, ужин)',
    ],
    icon: Crown,
  },
];

// Занятия, включённые в абонемент
const includedClasses = [
  { name: 'Логоритмика', desc: 'каждый день', Icon: ChildRhythm },
  { name: 'Мир вокруг нас', desc: '2 раза в неделю', Icon: ChildGlobe },
  { name: 'Детская йога', desc: '2 раза в неделю', Icon: ChildYoga },
  { name: 'Творчество', desc: 'каждый день', Icon: ChildPalette },
];

// Дополнительные занятия (платные)
const extraClasses = [
  { name: 'Логопед', desc: 'индивидуально', Icon: ChildSpeech },
  { name: 'Танцы', desc: 'эстрадный, современный, ритмика, ОФП', Icon: ChildDancing },
  { name: 'Каллиграфия', desc: 'красивый почерк', Icon: ChildPencil },
  { name: 'Скорочтение', desc: 'развитие памяти', Icon: ChildBook },
  { name: 'Подготовка к школе', desc: 'комплексная программа', Icon: ChildGraduation },
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
          ? 'bg-primary' 
          : 'bg-primary/15'
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

        {/* Included Classes */}
        <ScrollReveal animation="fade-up">
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-sage/20 to-primary/10 rounded-3xl p-8 md:p-10 border border-white/50 shadow-elevated overflow-hidden">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-monly font-bold text-foreground">
                  Включено в абонемент
                </h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {includedClasses.map((cls, index) => (
                  <ScrollReveal key={cls.name} animation="scale" delay={index * 80}>
                    <div className="group flex flex-col items-center text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                      <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <cls.Icon size={32} className="text-primary" />
                      </div>
                      <p className="font-monly font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                        {cls.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {cls.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Extra Classes - Paid */}
        <ScrollReveal animation="fade-up">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-accent/10 via-primary/5 to-amber-accent/10 rounded-[2.5rem] blur-2xl" />
            
            <div className="relative backdrop-blur-xl bg-white/50 rounded-3xl p-8 md:p-10 border border-white/50 shadow-elevated overflow-hidden">
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-monly font-bold text-foreground mb-2">
                  Дополнительные занятия
                </h3>
                <p className="text-sm text-muted-foreground">
                  Оплачиваются отдельно от абонемента
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
                {extraClasses.map((cls, index) => (
                  <ScrollReveal key={cls.name} animation="scale" delay={index * 60}>
                    <div className="group flex flex-col items-center text-center p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-border/30 hover:shadow-card hover:border-amber-accent/30 transition-all duration-300 hover:-translate-y-1">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-border/20 shadow-soft flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-amber-accent/40 transition-all">
                        <cls.Icon size={28} className="text-amber-accent group-hover:text-primary transition-colors" />
                      </div>
                      <p className="font-monly font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                        {cls.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-1 leading-tight">
                        {cls.desc}
                      </p>
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
