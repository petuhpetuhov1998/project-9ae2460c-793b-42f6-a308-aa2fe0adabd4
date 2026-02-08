import { Sun, Coffee, Book, Apple, Moon, Utensils, TreePine, Music, Palette, Clock, Sunrise, Sunset } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useState } from 'react';

const scheduleData = {
  morning: {
    title: 'Утро',
    icon: Sunrise,
    color: 'from-amber-accent/40 to-primary/30',
    items: [
      { time: '7:30', activity: 'Приём детей', detail: 'Свободная игра', icon: Sun },
      { time: '8:30', activity: 'Зарядка', detail: 'Весёлая разминка', icon: Music },
      { time: '9:00', activity: 'Завтрак', detail: 'Полезное питание', icon: Coffee },
      { time: '9:30', activity: 'Занятия', detail: 'Развивающие игры', icon: Book },
    ]
  },
  day: {
    title: 'День',
    icon: Sun,
    color: 'from-sage/40 to-emerald-500/30',
    items: [
      { time: '10:30', activity: 'Прогулка', detail: 'Свежий воздух', icon: TreePine },
      { time: '12:00', activity: 'Обед', detail: 'Домашняя кухня', icon: Utensils },
      { time: '12:30', activity: 'Дневной сон', detail: 'Тихий час', icon: Moon },
      { time: '15:00', activity: 'Полдник', detail: 'Лёгкий перекус', icon: Apple },
    ]
  },
  evening: {
    title: 'Вечер',
    icon: Sunset,
    color: 'from-pink-accent/40 to-primary/30',
    items: [
      { time: '15:30', activity: 'Творчество', detail: 'Кружки и занятия', icon: Palette },
      { time: '16:30', activity: 'Прогулка', detail: 'Игры на площадке', icon: TreePine },
      { time: '17:30', activity: 'Ужин', detail: 'Вечернее питание', icon: Coffee },
      { time: '18:00 – 18:30', activity: 'Уход домой', detail: 'До завтра!', icon: Sun },
    ]
  }
};

type Period = 'morning' | 'day' | 'evening';

const Schedule = () => {
  const [activePeriod, setActivePeriod] = useState<Period>('morning');

  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sand/30 via-cream to-sand/30" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
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
              Сбалансированный режим с чередованием активностей и отдыха
            </p>
          </div>
        </ScrollReveal>

        {/* Period Tabs */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex justify-center gap-3 mb-10">
            {(Object.keys(scheduleData) as Period[]).map((period) => {
              const data = scheduleData[period];
              const Icon = data.icon;
              const isActive = activePeriod === period;
              
              return (
                <button
                  key={period}
                  onClick={() => setActivePeriod(period)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r ' + data.color + ' text-foreground shadow-card scale-105' 
                      : 'bg-white/50 backdrop-blur-sm text-muted-foreground hover:bg-white/70 hover:scale-102'
                    }
                    border border-white/40
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : ''}`} />
                  <span className="hidden sm:inline">{data.title}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Schedule Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scheduleData[activePeriod].items.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <ScrollReveal 
                  key={item.time} 
                  animation="scale" 
                  delay={index * 100}
                >
                  <div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${scheduleData[activePeriod].color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Time badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 mb-4">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-bold text-primary">{item.time}</span>
                      </div>
                      
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${scheduleData[activePeriod].color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-foreground" />
                      </div>
                      
                      {/* Text */}
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {item.activity}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Timeline visual - compact view */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-6 border border-white/40 shadow-soft">
              <div className="flex items-center gap-4 overflow-x-auto pb-2">
                {/* Full day timeline */}
                {Object.values(scheduleData).flatMap(period => period.items).map((item, index, arr) => (
                  <div key={item.time} className="flex items-center flex-shrink-0">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-sage/20 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground mt-1">{item.time}</span>
                    </div>
                    {index < arr.length - 1 && (
                      <div className="w-8 h-0.5 bg-gradient-to-r from-primary/30 to-sage/30 mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Schedule;
