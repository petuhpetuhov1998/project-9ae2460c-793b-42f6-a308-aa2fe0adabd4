import { Heart, Sparkles, Stars } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { 
  ChildPartyPopper, 
  ChildCake, 
  ChildGamepad, 
  ChildCamera, 
  ChildGift, 
  ChildBalloon,
  ChildConfetti,
  ChildStar,
  ChildCrown
} from '@/components/ui/child-icons';

const traditions = [
  { 
    Icon: ChildCrown, 
    title: 'Корона именинника',
    description: 'Каждый именинник — король или королева дня'
  },
  { 
    Icon: ChildCake, 
    title: 'Праздничный торт',
    description: 'Задуваем свечи все вместе'
  },
  { 
    Icon: ChildBalloon, 
    title: 'Шарики и декор',
    description: 'Украшаем группу к празднику'
  },
  { 
    Icon: ChildGamepad, 
    title: 'Весёлые игры',
    description: 'Конкурсы и танцы с друзьями'
  },
  { 
    Icon: ChildGift, 
    title: 'Подарки от друзей',
    description: 'Поделки и открытки от группы'
  },
  { 
    Icon: ChildCamera, 
    title: 'Памятные фото',
    description: 'Сохраним этот день навсегда'
  },
];

const Birthday = () => {
  return (
    <section id="birthday" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-accent/10 via-cream to-primary/5" />
      
      {/* Large decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-accent/20 via-transparent to-transparent rounded-full blur-3xl" />
      
      {/* Floating decorations */}
      <div className="absolute top-20 left-[10%] text-primary/40 animate-float">
        <ChildBalloon size={64} />
      </div>
      <div className="absolute top-40 right-[12%] text-amber-accent/50 animate-float-delayed">
        <ChildConfetti size={48} />
      </div>
      <div className="absolute bottom-32 left-[15%] text-sage/50 animate-bounce-soft">
        <ChildStar size={40} />
      </div>
      <div className="absolute bottom-40 right-[18%] text-primary/30 animate-float">
        <ChildPartyPopper size={56} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-soft mb-6">
              <ChildPartyPopper className="w-4 h-4 text-amber-accent" />
              <span className="text-sm font-medium text-foreground">Наша традиция</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
              День рождения —{' '}
              <span className="bg-gradient-to-r from-amber-accent via-primary to-amber-accent bg-clip-text text-transparent">
                особенный день
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              В «Мистер Мишка» каждый именинник чувствует себя настоящей звездой. 
              Мы празднуем день рождения каждого ребёнка — это наш любимый ритуал!
            </p>
          </div>
        </ScrollReveal>

        {/* Main visual block */}
        <ScrollReveal animation="scale" delay={100}>
          <div className="relative max-w-5xl mx-auto mb-16">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-accent/30 via-primary/20 to-amber-accent/30 rounded-[3rem] blur-3xl opacity-60" />
            
            <div className="relative bg-gradient-to-br from-primary via-primary/90 to-sage rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-white/20 shadow-elevated overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-amber-accent/20 rounded-full blur-2xl" />
              
              <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-accent/50 rounded-full blur-2xl animate-pulse" />
                    <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <ChildCake size={80} className="text-white" />
                    </div>
                    {/* Floating stars */}
                    <div className="absolute -top-2 -right-2 text-amber-accent animate-bounce-soft">
                      <Stars className="w-8 h-8" />
                    </div>
                    <div className="absolute -bottom-1 -left-3 text-white/80 animate-float">
                      <Sparkles className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                {/* Text */}
                <div className="text-center lg:text-left text-white">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
                    Каждый ребёнок заслуживает 
                    <br className="hidden md:block" />
                    <span className="text-amber-accent">волшебный праздник</span>
                  </h3>
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl">
                    Мы создаём атмосферу радости и веселья: корона, торт со свечами, 
                    поздравления от друзей и воспитателей, танцы и игры — всё это ждёт 
                    каждого именинника в нашем садике.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/30">
                      <Heart className="w-5 h-5 text-pink-accent" />
                      <span className="font-semibold">С любовью</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/30">
                      <Sparkles className="w-5 h-5 text-amber-accent" />
                      <span className="font-semibold">Бесплатно</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Traditions grid */}
        <div className="max-w-5xl mx-auto">
          <ScrollReveal animation="fade-up">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
              Как мы празднуем
            </h3>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {traditions.map((tradition, index) => (
              <ScrollReveal key={tradition.title} animation="scale" delay={index * 80}>
                <div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 text-center overflow-hidden h-full">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-accent/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-accent/30 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <tradition.Icon size={36} className="text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    {/* Text */}
                    <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {tradition.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tradition.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-xl rounded-full px-8 py-4 border border-white/50 shadow-soft">
              <ChildStar size={24} className="text-amber-accent" />
              <span className="text-lg font-medium text-foreground">
                Потому что каждый ребёнок — звезда!
              </span>
              <ChildStar size={24} className="text-amber-accent" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Birthday;
