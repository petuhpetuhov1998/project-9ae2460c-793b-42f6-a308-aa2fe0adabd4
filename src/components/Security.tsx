import { Camera, Video, DoorOpen, Users, ShieldCheck, Bell } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const securityFeatures = [
  {
    icon: Video,
    title: 'Видеонаблюдение 24/7',
    description: 'Камеры установлены во всех помещениях. Запись ведётся круглосуточно.',
  },
  {
    icon: Camera,
    title: 'Ежедневные фотоотчёты',
    description: 'Родители получают фото и видео о занятиях и активностях ребёнка в закрытом чате.',
  },
  {
    icon: DoorOpen,
    title: 'Видеодомофон',
    description: 'Вход только по звонку. Мы видим каждого посетителя перед открытием двери.',
  },
  {
    icon: Users,
    title: 'Контроль посещений',
    description: 'Забрать ребёнка могут только родители или доверенные лица по заранее согласованному списку.',
  },
  {
    icon: ShieldCheck,
    title: 'Безопасная среда',
    description: 'Закруглённые углы мебели, экологичные материалы, регулярная дезинфекция помещений.',
  },
  {
    icon: Bell,
    title: 'Экстренная связь',
    description: 'Мгновенное оповещение родителей о любых нештатных ситуациях.',
  },
];

const Security = () => {
  return (
    <section id="security" className="py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal animation="fade-right">
            <div>
              <h2 className="section-title mb-6">
                Система{' '}
                <span className="section-title-accent">безопасности</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Безопасность ваших детей — наш главный приоритет. Мы используем современные 
                технологии и строгие правила, чтобы вы были спокойны за своего ребёнка.
              </p>
              
              <div className="bg-sage/20 rounded-2xl p-6 border-l-4 border-sage">
                <p className="font-semibold text-foreground mb-2">Спокойствие для родителей</p>
                <p className="text-muted-foreground text-sm">
                  Вы всегда можете связаться с воспитателем и получить информацию о вашем ребёнке. 
                  Фото и видео отчёты отправляются ежедневно в закрытый родительский чат.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => (
              <ScrollReveal key={feature.title} animation="scale" delay={index * 100}>
                <div 
                  className="bg-card rounded-2xl p-5 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-sage-dark" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
