import { Check, Clock, Star, Sparkles, Crown, Zap } from 'lucide-react';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
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
    gradient: 'from-slate-100 to-slate-50',
    accent: false,
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
    gradient: 'from-primary via-sage to-primary',
    accent: true,
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

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-background" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-sage/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-soft mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Гибкие условия</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Услуги и{' '}
              <span className="bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
                абонементы
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите удобный формат посещения для вашего ребёнка
            </p>
          </div>
        </ScrollReveal>

        {/* Subscriptions */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {subscriptions.map((sub, index) => (
            <ScrollReveal key={sub.title} animation={index === 0 ? 'fade-right' : 'fade-left'} delay={index * 150}>
              <div className="group relative h-full">
                {/* Glow effect for popular */}
                {sub.popular && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-sage to-primary rounded-[2rem] blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                )}
                
                <div 
                  className={`relative rounded-3xl p-8 h-full backdrop-blur-xl border transition-all duration-500 hover:-translate-y-2 ${
                    sub.accent 
                      ? 'bg-gradient-to-br from-primary to-sage text-white border-white/20 shadow-elevated' 
                      : 'bg-white/70 border-white/50 shadow-card hover:shadow-elevated'
                  }`}
                >
                  {/* Popular badge */}
                  {sub.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1.5 bg-amber-accent text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                        <Star className="w-4 h-4 fill-white" />
                        Популярный
                      </div>
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    sub.accent ? 'bg-white/20' : 'bg-gradient-to-br from-primary/20 to-sage/20'
                  }`}>
                    <sub.icon className={`w-7 h-7 ${sub.accent ? 'text-white' : 'text-primary'}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-extrabold mb-2 ${sub.accent ? 'text-white' : 'text-foreground'}`}>
                    {sub.title}
                  </h3>
                  
                  <div className={`flex items-center gap-2 mb-6 text-sm ${sub.accent ? 'text-white/80' : 'text-muted-foreground'}`}>
                    <Clock className="w-4 h-4" />
                    {sub.hours}
                  </div>
                  
                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-5xl font-extrabold ${sub.accent ? 'text-white' : 'bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent'}`}>
                        {sub.price}
                      </span>
                      <span className={`text-lg ${sub.accent ? 'text-white/80' : 'text-muted-foreground'}`}> ₽/мес</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {sub.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          sub.accent ? 'bg-white/20' : 'bg-primary/20'
                        }`}>
                          <Check className={`w-3 h-3 ${sub.accent ? 'text-white' : 'text-primary'}`} />
                        </div>
                        <span className={`text-sm ${sub.accent ? 'text-white/90' : 'text-foreground'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  {sub.accent ? (
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full py-3.5 px-6 rounded-full font-semibold bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Выбрать абонемент
                    </button>
                  ) : (
                    <LiquidButton 
                      size="lg" 
                      className="w-full"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Выбрать абонемент
                    </LiquidButton>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Extra Classes */}
        <ScrollReveal animation="fade-up">
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-sage/10 to-primary/10 rounded-[2.5rem] blur-2xl" />
            
            <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-elevated">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
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
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 hover:bg-white">
                        {/* Emoji */}
                        <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                          {cls.emoji}
                        </div>
                        <p className="font-bold text-foreground mb-1">{cls.name}</p>
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
