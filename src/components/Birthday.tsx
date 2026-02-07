import { Gift, Camera, Music, Cake, PartyPopper, Star, Sparkles } from 'lucide-react';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import ScrollReveal from './ScrollReveal';

const birthdayFeatures = [
  { icon: PartyPopper, text: 'Яркое тематическое оформление', emoji: '🎉' },
  { icon: Cake, text: 'Торт и праздничный стол', emoji: '🎂' },
  { icon: Music, text: 'Весёлые игры и конкурсы', emoji: '🎮' },
  { icon: Camera, text: 'Профессиональная фотосессия', emoji: '📸' },
  { icon: Gift, text: 'Подарки для именинника', emoji: '🎁' },
  { icon: Star, text: 'Приглашение аниматоров', emoji: '🦸' },
];

const Birthday = () => {
  return (
    <section id="birthday" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-amber-accent/5 to-cream" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-amber-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Floating decorations */}
      <div className="absolute top-32 right-[15%] text-4xl animate-float">🎈</div>
      <div className="absolute bottom-40 left-[10%] text-3xl animate-float-delayed">🎊</div>
      <div className="absolute top-1/2 right-[8%] text-2xl animate-bounce-soft">⭐</div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <ScrollReveal animation="fade-right">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-accent/30 via-primary/20 to-amber-accent/30 rounded-[2.5rem] blur-2xl opacity-60" />
              
              <div className="relative bg-gradient-to-br from-primary via-sage to-primary rounded-3xl p-8 md:p-12 border border-white/20 shadow-elevated overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative text-center text-white">
                  <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 animate-bounce-soft">
                    <span className="text-5xl">🎂</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                    Праздник для вашего малыша
                  </h3>
                  <p className="text-white/80 mb-8 max-w-md mx-auto">
                    Организуем незабываемый день рождения с друзьями в нашем детском саду
                  </p>
                  <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                    <Sparkles className="w-5 h-5 text-amber-accent" />
                    <span className="font-bold text-lg">от 5 000 ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal animation="fade-left" delay={150}>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-soft mb-6">
                <PartyPopper className="w-4 h-4 text-amber-accent" />
                <span className="text-sm font-medium text-foreground">Праздники</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
                Дни рождения{' '}
                <span className="bg-gradient-to-r from-amber-accent to-primary bg-clip-text text-transparent">
                  в садике
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Подарите ребёнку праздник, который он запомнит надолго! Мы берём на себя 
                всю организацию — от оформления до развлекательной программы.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {birthdayFeatures.map((feature, index) => (
                  <ScrollReveal key={feature.text} animation="fade-up" delay={index * 60}>
                    <div className="group flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/50 hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 shadow-soft">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-lg">{feature.emoji}</span>
                      </div>
                      <span className="text-foreground font-medium text-sm">{feature.text}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <LiquidButton 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Gift className="w-5 h-5 mr-2" />
                Заказать праздник
              </LiquidButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Birthday;
