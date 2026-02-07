import { Home, Shield, Utensils, TreePine } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Уютное пространство',
    description: '200 м² современного оборудованного помещения с зонами для игр, занятий и отдыха. Натуральные материалы и безопасная мебель.',
    accent: 'sage',
  },
  {
    icon: Utensils,
    title: 'Домашняя кухня',
    description: '5-разовое сбалансированное питание из свежих фермерских продуктов. Учитываем индивидуальные особенности каждого ребёнка.',
    accent: 'warm',
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Видеонаблюдение 24/7, видеодомофон, ежедневные фотоотчёты для родителей. Строгий контроль посещений.',
    accent: 'accent',
  },
  {
    icon: TreePine,
    title: 'Свежий воздух',
    description: 'Оборудованная площадка для прогулок на свежем воздухе. Ежедневные прогулки в любую погоду.',
    accent: 'brown',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-sand/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Лучшие условия для{' '}
            <span className="section-title-accent">здоровья малышей</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы создали идеальное пространство, где ваш ребёнок будет развиваться, 
            учиться и находить новых друзей в безопасной и уютной атмосфере.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`feature-icon mb-5 ${
                feature.accent === 'sage' ? 'bg-sage/30' :
                feature.accent === 'warm' ? 'bg-warm/30' :
                feature.accent === 'accent' ? 'bg-accent/30' :
                'bg-brown/30'
              }`}>
                <feature.icon className={`w-7 h-7 ${
                  feature.accent === 'sage' ? 'text-sage-dark' :
                  feature.accent === 'warm' ? 'text-warm' :
                  feature.accent === 'accent' ? 'text-accent' :
                  'text-brown'
                }`} />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
