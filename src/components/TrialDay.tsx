import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { 
  Clock, 
  Shirt, 
  Baby, 
  Phone, 
  Camera, 
  Utensils, 
  Sun, 
  Moon,
  Heart,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const TrialDay = () => {
  const scheduleItems = [
    { time: "10:30", label: "Второй завтрак", icon: Utensils },
    { time: "11:00", label: "Прогулка + перекус", icon: Sun },
    { time: "12:00", label: "Обед", icon: Utensils },
    { time: "12:30", label: "Сон", icon: Moon },
  ];

  const tips = [
    {
      icon: Utensils,
      title: "Покормите дома",
      description: "В первый день много впечатлений — малыш может отказаться кушать в садике"
    },
    {
      icon: Shirt,
      title: "Сменная одежда",
      description: "Возьмите второй комплект одежды на случай, если нужно будет переодеть ребёнка"
    },
    {
      icon: Heart,
      title: "Любимая игрушка",
      description: "Можно взять любимую игрушку, чтобы малышу было спокойнее"
    },
    {
      icon: Clock,
      title: "Гибкое время",
      description: "Оставить ребёнка можно на столько, сколько ему будет комфортно"
    },
  ];

  return (
    <section id="trial" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-cream-50/30 to-white" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-peach-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-sage-200/20 rounded-full blur-3xl" />
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-32 right-20 text-peach-300/40"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-12 h-12" />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-20 text-sage-300/40"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Baby className="w-16 h-16" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-peach-100 to-cream-100 rounded-full text-peach-600 text-sm font-medium mb-4">
              Первое знакомство
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Пробный день
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Мягкая адаптация малыша в уютной атмосфере нашего садика
            </p>
          </div>
        </ScrollReveal>

        {/* Main welcome card */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-peach-200/30 to-transparent rounded-bl-full" />
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-peach-100 to-peach-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤗</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    Как проходит утро
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Утром Вас встретит воспитатель, предложит свободный шкафчик для одежды, 
                    покажет малышу группу и ответит на все интересующие вопросы.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tips grid */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-xl font-display font-semibold text-center text-foreground mb-6">
              Рекомендации для первого дня
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/60 backdrop-blur-lg rounded-2xl p-5 border border-white/40 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center mb-3">
                    <tip.icon className="w-5 h-5 text-sage-600" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{tip.title}</h4>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Schedule timeline */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-cream-50 to-peach-50 rounded-3xl p-8 border border-cream-200/50">
              <h3 className="text-xl font-display font-semibold text-center text-foreground mb-6">
                Расписание пробного дня
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {scheduleItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-sm border border-white/50"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-peach-100 to-peach-200 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-peach-600" />
                    </div>
                    <div>
                      <span className="font-bold text-foreground">{item.time}</span>
                      <span className="text-muted-foreground ml-2">{item.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Для малышей перекус: фрукты, печенье, чай
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Support promises */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone support */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-peach-100 to-peach-200 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-peach-600" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    Всегда на связи
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Если малыш начнёт волноваться или плакать, мы сразу позвоним — 
                    вы сможете забрать ребёнка в любой момент.
                  </p>
                </div>
              </motion.div>

              {/* Photo reports */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/50 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
                    Фото и видео отчёты <span>🤗</span>
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Весь день будем отправлять фото и видео, чтобы вы понимали, 
                    как проходит день вашего малыша.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrialDay;
