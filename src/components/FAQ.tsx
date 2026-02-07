import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: 'Какой возраст детей вы принимаете?',
    answer: 'Мы принимаем детей от 1,5 до 7 лет. Для каждого возраста разработана индивидуальная программа развития с учётом возрастных особенностей.',
  },
  {
    question: 'Сколько детей в группе?',
    answer: 'В нашем садике до 15 детей в группе. Это позволяет уделять достаточно внимания каждому ребёнку и создавать комфортную атмосферу.',
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
    <section id="faq" className="py-20">
      <div className="container mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Часто задаваемые{' '}
              <span className="section-title-accent">вопросы</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы от родителей
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card rounded-2xl px-6 border-none shadow-soft data-[state=open]:shadow-card transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
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
          <div className="mt-16 bg-cream rounded-3xl p-8 md:p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-extrabold mb-6 text-center text-foreground">
              Перерасчёты по абонементам
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ScrollReveal animation="fade-right" delay={300}>
                <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow h-full">
                  <h4 className="font-bold text-foreground mb-3">По болезни</h4>
                  <p className="text-sm text-muted-foreground">
                    Перерасчёт от 3 пропущенных дней при наличии медицинской справки. 
                    Сумма рассчитывается по формуле: стоимость абонемента / 22 × количество пропущенных дней.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-left" delay={400}>
                <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow h-full">
                  <h4 className="font-bold text-foreground mb-3">По отпуску</h4>
                  <p className="text-sm text-muted-foreground">
                    До 14 дней в году по заявлению родителей (подаётся минимум за 5 рабочих дней). 
                    Перерасчёт производится в следующем месяце.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
