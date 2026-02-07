import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Calculator } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: 'Какой возраст детей вы принимаете?',
    answer: 'Мы принимаем детей от 1,5 до 7 лет. Для каждого возраста разработана индивидуальная программа развития с учётом возрастных особенностей.',
  },
  {
    question: 'Сколько детей в группе?',
    answer: 'В нашем садике до 12 детей в группе. Это позволяет уделять достаточно внимания каждому ребёнку и создавать комфортную атмосферу.',
  },
  {
    question: 'Сколько воспитателей работает с детьми?',
    answer: 'С детьми постоянно находятся 2-3 педагога: основной воспитатель, помощник воспитателя и приходящие специалисты (логопед, хореограф и др.).',
  },
  {
    question: 'Как организовано питание?',
    answer: 'Мы предлагаем 5-разовое питание из свежих фермерских продуктов. Меню составляется с учётом требований СанПиН и индивидуальных особенностей детей. Возможно диетическое меню при аллергии.',
  },
  {
    question: 'Есть ли перерасчёт за пропущенные дни?',
    answer: 'Да, мы делаем перерасчёт при болезни (от 3 дней по справке) и при отпуске (по заявлению, до 14 дней в году). Подробности в разделе «Перерасчёты».',
  },
  {
    question: 'Можно ли посетить сад перед записью?',
    answer: 'Конечно! Мы приглашаем всех родителей на бесплатную экскурсию. Вы сможете познакомиться с воспитателями, увидеть помещения и задать все вопросы.',
  },
  {
    question: 'Как проходит адаптация ребёнка?',
    answer: 'Адаптация проходит постепенно: первые дни ребёнок остаётся на 2-3 часа, затем время увеличивается. Опытные воспитатели помогают детям привыкнуть к новой обстановке.',
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
                
                <div className="grid md:grid-cols-2 gap-6">
                  <ScrollReveal animation="fade-right" delay={300}>
                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-xl">🏥</span>
                      </div>
                      <h4 className="font-bold text-foreground mb-3">По болезни</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Перерасчёт от 3 пропущенных дней при наличии медицинской справки. 
                        Сумма рассчитывается по формуле: стоимость абонемента / 22 × количество пропущенных дней.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal animation="fade-left" delay={400}>
                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky/20 to-sage/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-xl">🏖️</span>
                      </div>
                      <h4 className="font-bold text-foreground mb-3">По отпуску</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        До 14 дней в году по заявлению родителей (подаётся минимум за 5 рабочих дней). 
                        Перерасчёт производится в следующем месяце.
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
