import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Calculator } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { ChildHospital, ChildBeach } from '@/components/ui/child-icons';

const faqs = [
  {
    question: 'Какой возраст детей вы принимаете?',
    answer: 'Мы принимаем детей от 1,5 лет. Достаточно, чтобы ребёнок умел ходить — всему остальному мы научим сами!',
  },
  {
    question: 'Какие есть варианты посещения?',
    answer: 'Группа полного дня (с 7:30 до 18:30) и группа кратковременного пребывания (с 7:30 до 12:30). Выбирайте удобный формат для вашей семьи.',
  },
  {
    question: 'Сколько детей в группе?',
    answer: 'До 12 детей в группе. Это позволяет уделять достаточно внимания каждому ребёнку и развивать его индивидуальные способности.',
  },
  {
    question: 'Как организовано питание?',
    answer: 'Пятиразовое сбалансированное вкусное питание, приготовленное на собственной кухне садика с большой любовью! Для детей с пищевой аллергией готовим индивидуальное меню.',
  },
  {
    question: 'Какие занятия включены в абонемент?',
    answer: 'Логоритмика каждый день, кружок «Мир вокруг нас» 2 раза в неделю, детская йога 2 раза в неделю, творческий кружок каждый день. Также есть дополнительные платные занятия: логопед, танцы, каллиграфия, скорочтение, подготовка к школе.',
  },
  {
    question: 'Есть ли перерасчёт за пропущенные дни?',
    answer: 'Да! Полдня — 300 ₽/день, полный день — 500 ₽/день. Перерасчёт идёт в счёт следующего месяца при болезни (нужна справка) или отпуске (заявление за 2 недели). Подробности ниже.',
  },
  {
    question: 'Как вы информируете родителей о ребёнке?',
    answer: 'Мы каждый день отправляем фото и видео отчёт в закрытый чат для родителей. Вы всегда в курсе, как провёл день ваш малыш!',
  },
  {
    question: 'Как проходит адаптация ребёнка?',
    answer: 'Мы обеспечиваем поддержку на этапе адаптации. Первые дни ребёнок остаётся на 2-3 часа, затем время увеличивается. Наши добрые воспитатели помогут малышу освоиться и найти новых друзей.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-soft mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Часто задаваемые{' '}
              <span className="bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
                вопросы
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы от родителей
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 60}>
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-white/70 backdrop-blur-xl rounded-2xl px-6 border border-white/50 shadow-soft data-[state=open]:shadow-elevated transition-all duration-300 data-[state=open]:bg-white/90"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 [&[data-state=open]]:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>

        {/* Recalculation Section */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-sage/10 to-primary/20 rounded-[2rem] blur-2xl opacity-60" />
              
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/50 shadow-elevated">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-sage/20 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground">
                    Перерасчёты по абонементам
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {/* Half day subscription */}
                  <ScrollReveal animation="fade-up" delay={300}>
                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform text-foreground">
                          <ChildHospital size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">Абонемент «Полдня»</h4>
                          <p className="text-primary font-bold">300 ₽ / день</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Перерасчёт осуществляется в счёт оплаты за следующий месяц за пропущенные дни по болезни 
                        (при предоставлении справки с указанием периода и характера заболевания) или в случае отпуска 
                        (заявление за 2 недели до отпуска).
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Full day subscription */}
                  <ScrollReveal animation="fade-up" delay={400}>
                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sage/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform text-foreground">
                          <ChildBeach size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">Абонемент «Полный день»</h4>
                          <p className="text-primary font-bold">500 ₽ / день</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Перерасчёт осуществляется в счёт оплаты за следующий месяц за пропущенные дни по болезни 
                        (при предоставлении справки с указанием периода и характера заболевания) или в случае отпуска 
                        (заявление за 2 недели до отпуска).
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
