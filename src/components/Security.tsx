import { Camera, Video, DoorOpen, Users, ShieldCheck, Bell, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const securityFeatures = [
  {
    icon: DoorOpen,
    title: 'Вход по видеодомофону',
    description: 'Доступ только после визуального подтверждения личности сотрудниками садика.',
  },
  {
    icon: Video,
    title: 'Видеонаблюдение по периметру',
    description: 'Камеры установлены по всему периметру — происходящее видно со всех углов. Все записи хранятся на сервере.',
  },
  {
    icon: Bell,
    title: 'Охрана ЧОП + тревожная кнопка',
    description: 'Садик охраняется частным охранным предприятием. Установлена тревожная кнопка для экстренных ситуаций.',
  },
  {
    icon: Users,
    title: '2 воспитателя + няня в группе',
    description: 'Весь персонал имеет высшее педагогическое образование. Забрать ребёнка могут только родители или доверенные лица.',
  },
  {
    icon: Camera,
    title: 'Ежедневные фотоотчёты',
    description: 'Родители получают фото и видео о занятиях ребёнка в закрытом чате.',
  },
  {
    icon: ShieldCheck,
    title: 'Коворкинг для родителей',
    description: 'Уютное пространство с Wi-Fi, где родители могут подождать или поработать, пока ребёнок на занятиях.',
  },
];

const Security = () => {
  return (
    <section id="security" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-background" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal animation="fade-right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-soft mb-6">
                <Shield className="w-4 h-4 text-sage" />
                <span className="text-sm font-medium text-foreground">Безопасность</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
                Система{' '}
                <span className="bg-gradient-to-r from-sage to-primary bg-clip-text text-transparent">
                  безопасности
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Безопасность ваших детей — наш главный приоритет. Мы используем современные 
                технологии и строгие правила, чтобы вы были спокойны за своего ребёнка.
              </p>
              
              {/* Info card */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-sage/30 to-primary/30 rounded-2xl blur-xl opacity-60" />
                <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-2">Спокойствие для родителей</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Вы всегда можете связаться с воспитателем и получить информацию о вашем ребёнке. 
                        Фото и видео отчёты отправляются ежедневно в закрытый родительский чат.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => (
              <ScrollReveal key={feature.title} animation="scale" delay={index * 80}>
                <div className="group relative h-full">
                  <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/50 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 h-full">
                    {/* Subtle bg on hover */}
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000" />
                    </div>
                  </div>
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
