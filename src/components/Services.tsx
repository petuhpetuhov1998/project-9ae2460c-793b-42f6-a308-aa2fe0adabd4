import { Check, Clock, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const subscriptions = [
  {
    title: 'Полдня',
    price: '18 000',
    hours: '7:30 – 13:00',
    features: [
      'Развивающие занятия',
      '3-разовое питание (завтрак, обед, полдник)',
      'Прогулки на свежем воздухе',
      'Творческие мастер-классы',
      'Фотоотчёты для родителей',
    ],
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
      'Дополнительные развивающие занятия',
      'Подготовка к школе',
      'Английский язык',
    ],
    accent: true,
  },
];

const extraClasses = [
  { name: 'Логопед', price: 'от 800 ₽' },
  { name: 'Танцы', price: 'от 600 ₽' },
  { name: 'Каллиграфия', price: 'от 700 ₽' },
  { name: 'Шахматы', price: 'от 600 ₽' },
  { name: 'Рисование', price: 'от 500 ₽' },
  { name: 'Музыка', price: 'от 600 ₽' },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Услуги и{' '}
              <span className="section-title-accent">абонементы</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите удобный формат посещения для вашего ребёнка
            </p>
          </div>
        </ScrollReveal>

        {/* Subscriptions */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {subscriptions.map((sub, index) => (
            <ScrollReveal key={sub.title} animation={index === 0 ? 'fade-right' : 'fade-left'} delay={index * 150}>
              <div 
                className={`relative rounded-3xl p-8 h-full ${
                  sub.accent 
                    ? 'bg-sage text-white shadow-elevated' 
                    : 'bg-card border-2 border-border shadow-card'
                }`}
              >
                {sub.popular && (
                  <div className="absolute -top-3 right-6 bg-warm text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Популярный
                  </div>
                )}
                
                <h3 className={`text-2xl font-extrabold mb-2 ${sub.accent ? 'text-white' : 'text-foreground'}`}>
                  {sub.title}
                </h3>
                
                <div className={`flex items-center gap-2 mb-6 text-sm ${sub.accent ? 'text-white/80' : 'text-muted-foreground'}`}>
                  <Clock className="w-4 h-4" />
                  {sub.hours}
                </div>
                
                <div className="mb-6">
                  <span className={`text-4xl font-extrabold ${sub.accent ? 'text-white' : 'text-foreground'}`}>
                    {sub.price}
                  </span>
                  <span className={`text-lg ${sub.accent ? 'text-white/80' : 'text-muted-foreground'}`}> ₽/мес</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {sub.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        sub.accent ? 'bg-white/20' : 'bg-sage/20'
                      }`}>
                        <Check className={`w-3 h-3 ${sub.accent ? 'text-white' : 'text-sage-dark'}`} />
                      </div>
                      <span className={`text-sm ${sub.accent ? 'text-white/90' : 'text-foreground'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                    sub.accent 
                      ? 'bg-white text-sage-dark hover:bg-white/90' 
                      : 'bg-sage text-white hover:bg-sage-dark'
                  }`}
                >
                  Выбрать абонемент
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Extra Classes */}
        <ScrollReveal animation="fade-up">
          <div className="bg-cream rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-extrabold mb-6 text-center text-foreground">
              Дополнительные занятия
            </h3>
            <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
              Занятия, которые не входят в стандартные абонементы, но доступны для записи
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {extraClasses.map((cls, index) => (
                <ScrollReveal key={cls.name} animation="scale" delay={index * 50}>
                  <div 
                    className="bg-white rounded-2xl p-4 text-center shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  >
                    <p className="font-bold text-foreground mb-1">{cls.name}</p>
                    <p className="text-sm text-muted-foreground">{cls.price}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
