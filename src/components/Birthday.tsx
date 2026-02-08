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

import birthday1 from '@/assets/birthday-1.jpg';
import birthday2 from '@/assets/birthday-2.jpg';
import birthday3 from '@/assets/birthday-3.jpg';

const traditions = [
  { 
    Icon: ChildBalloon, 
    title: 'Яркое украшение',
    description: 'Украшаем группу шарами и гирляндами, создавая атмосферу праздника'
  },
  { 
    Icon: ChildGamepad, 
    title: 'Хороводы и игры',
    description: 'Водим хороводы, играем в подвижные игры и устраиваем забавные конкурсы'
  },
  { 
    Icon: ChildCamera, 
    title: 'Фото и видео',
    description: 'Делаем много фотографий и видеосъёмку лучших моментов праздника'
  },
  { 
    Icon: ChildGift, 
    title: 'Подарок-сюрприз',
    description: 'Малыш получает небольшой подарок от коллектива нашего сада'
  },
  { 
    Icon: ChildCrown, 
    title: 'Фотозона',
    description: 'Родители могут организовать оригинальную фотозону для праздника'
  },
  { 
    Icon: ChildPartyPopper, 
    title: 'Аниматоры',
    description: 'Можно пригласить профессионального аниматора к нам в садик'
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
              Дни рождения —{' '}
              <span className="bg-gradient-to-r from-amber-accent via-primary to-amber-accent bg-clip-text text-transparent">
                настоящий фейерверк радости!
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Чтобы праздник был незабываемым и ярким, наши воспитатели превращают 
              каждый день рождения малыша в волшебное событие!
            </p>
          </div>
        </ScrollReveal>

        {/* Photo Gallery Bento Grid */}
        <ScrollReveal animation="scale" delay={100}>
          <div className="relative max-w-6xl mx-auto mb-16">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-accent/30 via-primary/20 to-amber-accent/30 rounded-[3rem] blur-3xl opacity-40" />
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Main large photo */}
              <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl border border-white/30 shadow-elevated">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent z-10" />
                <img 
                  src={birthday2} 
                  alt="Праздник дня рождения в детском саду" 
                  className="w-full h-full object-cover min-h-[300px] md:min-h-[500px] group-hover:scale-105 transition-transform duration-700"
                />
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                      <ChildCake size={32} className="text-white" />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                        <Heart className="w-4 h-4 text-pink-accent" />
                        <span className="font-semibold text-white text-sm">С любовью</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                        <Sparkles className="w-4 h-4 text-amber-accent" />
                        <span className="font-semibold text-white text-sm">Бесплатно</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
                    Незабываемый праздник
                    <span className="text-amber-accent"> для вашего малыша</span>
                  </h3>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                    Яркие шары и гирлянды, хороводы, весёлые конкурсы и много-много 
                    фотографий на память — всё это ждёт каждого именинника!
                  </p>
                </div>
                {/* Floating stars decoration */}
                <div className="absolute top-6 right-6 z-20 text-amber-accent animate-bounce-soft">
                  <Stars className="w-10 h-10" />
                </div>
              </div>

              {/* Right side photos */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/30 shadow-card">
                <div className="absolute inset-0 bg-gradient-to-t from-sage/60 to-transparent z-10" />
                <img 
                  src={birthday1} 
                  alt="Именинница в короне" 
                  className="w-full h-full object-cover min-h-[240px] md:min-h-[240px] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit border border-white/50 shadow-soft">
                    <ChildCrown size={18} className="text-amber-accent" />
                    <span className="font-semibold text-foreground text-sm">Королева дня</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/30 shadow-card">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent z-10" />
                <img 
                  src={birthday3} 
                  alt="Дети с шариками на празднике" 
                  className="w-full h-full object-cover min-h-[240px] md:min-h-[240px] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit border border-white/50 shadow-soft">
                    <ChildBalloon size={18} className="text-primary" />
                    <span className="font-semibold text-foreground text-sm">Радость вместе</span>
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
