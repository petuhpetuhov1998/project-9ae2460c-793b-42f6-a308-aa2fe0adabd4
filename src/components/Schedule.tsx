import { Sun, Coffee, Book, Apple, Moon, Utensils, TreePine, Music, Palette, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const scheduleItems = [
  { time: '7:30 – 8:30', activity: 'Приём детей, свободная игра', icon: Sun, gradient: 'from-amber-accent/30 to-primary/20' },
  { time: '8:30 – 9:00', activity: 'Утренняя зарядка', icon: Music, gradient: 'from-sage/30 to-emerald-500/20' },
  { time: '9:00 – 9:30', activity: 'Завтрак', icon: Coffee, gradient: 'from-primary/30 to-amber-accent/20' },
  { time: '9:30 – 10:30', activity: 'Развивающие занятия', icon: Book, gradient: 'from-primary/30 to-sage/20' },
  { time: '10:30 – 12:00', activity: 'Прогулка на свежем воздухе', icon: TreePine, gradient: 'from-emerald-500/30 to-sage/20' },
  { time: '12:00 – 12:30', activity: 'Обед', icon: Utensils, gradient: 'from-amber-accent/30 to-primary/20' },
  { time: '12:30 – 15:00', activity: 'Дневной сон', icon: Moon, gradient: 'from-sky/30 to-muted/20' },
  { time: '15:00 – 15:30', activity: 'Полдник', icon: Apple, gradient: 'from-primary/30 to-amber-accent/20' },
  { time: '15:30 – 16:30', activity: 'Творческие занятия, кружки', icon: Palette, gradient: 'from-pink-accent/30 to-primary/20' },
  { time: '16:30 – 17:30', activity: 'Прогулка', icon: TreePine, gradient: 'from-emerald-500/30 to-sage/20' },
  { time: '17:30 – 18:00', activity: 'Свободная игра, уход домой', icon: Sun, gradient: 'from-amber-accent/30 to-primary/20' },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sand/30 via-cream to-sand/30" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-soft mb-6">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Режим дня</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Распорядок{' '}
              <span className="bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
                дня
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Сбалансированный режим дня с чередованием активностей и отдыха
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-sage/40 to-primary/20 transform md:-translate-x-1/2 rounded-full" />
            
            {scheduleItems.map((item, index) => (
              <ScrollReveal 
                key={item.time} 
                animation={index % 2 === 0 ? 'fade-right' : 'fade-left'} 
                delay={index * 50}
              >
                <div 
                  className={`relative flex items-center gap-4 md:gap-8 mb-4 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Time - Desktop */}
                  <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <span className="text-sm font-bold bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
                      {item.time}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-white/50 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 shadow-soft group`}>
                    <item.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="group bg-white/70 backdrop-blur-xl rounded-2xl p-4 border border-white/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                      <span className="text-xs font-bold text-primary md:hidden">{item.time}</span>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.activity}
                      </p>
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

export default Schedule;
