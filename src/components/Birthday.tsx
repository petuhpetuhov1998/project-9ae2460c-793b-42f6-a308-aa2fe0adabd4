import { Gift, Camera, Music, Cake, PartyPopper, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const birthdayFeatures = [
  { icon: PartyPopper, text: 'Яркое тематическое оформление' },
  { icon: Cake, text: 'Торт и праздничный стол' },
  { icon: Music, text: 'Весёлые игры и конкурсы' },
  { icon: Camera, text: 'Профессиональная фотосессия' },
  { icon: Gift, text: 'Подарки для именинника' },
  { icon: Star, text: 'Приглашение аниматоров' },
];

const Birthday = () => {
  return (
    <section id="birthday" className="py-20 bg-warm/10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <ScrollReveal animation="fade-right">
            <div className="relative">
              <div className="bg-sage rounded-3xl p-8 md:p-12">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6 animate-bounce-soft">
                    <Cake className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mb-4">
                    Праздник для вашего малыша
                  </h3>
                  <p className="text-white/80 mb-8">
                    Организуем незабываемый день рождения с друзьями в нашем детском саду
                  </p>
                  <div className="inline-block bg-white/20 rounded-full px-6 py-3">
                    <span className="text-white font-bold">от 5 000 ₽</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-warm rounded-full opacity-60 animate-float" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent/50 rounded-full animate-float-delayed" />
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal animation="fade-left" delay={150}>
            <div>
              <h2 className="section-title mb-6">
                Дни рождения{' '}
                <span className="section-title-accent">в садике</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Подарите ребёнку праздник, который он запомнит надолго! Мы берём на себя 
                всю организацию — от оформления до развлекательной программы.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {birthdayFeatures.map((feature, index) => (
                  <ScrollReveal key={feature.text} animation="fade-up" delay={index * 80}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-warm/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                        <feature.icon className="w-5 h-5 text-warm" />
                      </div>
                      <span className="text-foreground font-medium text-sm">{feature.text}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <a href="#contact" className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform">
                Заказать праздник
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Birthday;
