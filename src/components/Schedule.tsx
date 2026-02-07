import { Sun, Coffee, Book, Apple, Moon, Utensils, TreePine, Music, Palette } from 'lucide-react';

const scheduleItems = [
  { time: '7:30 – 8:30', activity: 'Приём детей, свободная игра', icon: Sun, color: 'warm' },
  { time: '8:30 – 9:00', activity: 'Утренняя зарядка', icon: Music, color: 'sage' },
  { time: '9:00 – 9:30', activity: 'Завтрак', icon: Coffee, color: 'accent' },
  { time: '9:30 – 10:30', activity: 'Развивающие занятия', icon: Book, color: 'primary' },
  { time: '10:30 – 12:00', activity: 'Прогулка на свежем воздухе', icon: TreePine, color: 'sage' },
  { time: '12:00 – 12:30', activity: 'Обед', icon: Utensils, color: 'warm' },
  { time: '12:30 – 15:00', activity: 'Дневной сон', icon: Moon, color: 'muted' },
  { time: '15:00 – 15:30', activity: 'Полдник', icon: Apple, color: 'accent' },
  { time: '15:30 – 16:30', activity: 'Творческие занятия, кружки', icon: Palette, color: 'warm' },
  { time: '16:30 – 17:30', activity: 'Прогулка', icon: TreePine, color: 'sage' },
  { time: '17:30 – 18:00', activity: 'Свободная игра, уход домой', icon: Sun, color: 'primary' },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-sand/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Распорядок{' '}
            <span className="section-title-accent">дня</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Сбалансированный режим дня с чередованием активностей и отдыха
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />
            
            {scheduleItems.map((item, index) => (
              <div 
                key={item.time}
                className={`relative flex items-center gap-4 md:gap-8 mb-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Time - Desktop */}
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <span className="text-sm font-bold text-sage-dark">{item.time}</span>
                </div>
                
                {/* Icon */}
                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.color === 'sage' ? 'bg-sage' :
                  item.color === 'warm' ? 'bg-warm' :
                  item.color === 'accent' ? 'bg-accent' :
                  item.color === 'primary' ? 'bg-primary' :
                  'bg-muted'
                }`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                
                {/* Content */}
                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="bg-card rounded-2xl p-4 shadow-soft">
                    <span className="text-sm font-bold text-sage-dark md:hidden">{item.time}</span>
                    <p className="font-semibold text-foreground">{item.activity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
