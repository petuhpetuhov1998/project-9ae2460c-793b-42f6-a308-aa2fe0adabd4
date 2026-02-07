import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    id: 1,
    name: 'Анна Петрова',
    role: 'Мама Миши, 4 года',
    avatar: '👩',
    rating: 5,
    text: 'Мы безумно рады, что нашли «Мистер Мишка»! Сын каждое утро с радостью бежит в садик. Воспитатели — настоящие профессионалы, которые любят детей.',
  },
  {
    id: 2,
    name: 'Елена Смирнова',
    role: 'Мама Софии, 3 года',
    avatar: '👩‍🦰',
    rating: 5,
    text: 'Прекрасный детский сад! Домашняя атмосфера, вкусное питание, отличные развивающие занятия. София научилась читать и считать за полгода!',
  },
  {
    id: 3,
    name: 'Дмитрий Козлов',
    role: 'Папа Артёма, 5 лет',
    avatar: '👨',
    rating: 5,
    text: 'Очень довольны садиком! Видеонаблюдение и ежедневные фотоотчёты дают полное спокойствие. Артём подготовлен к школе на отлично.',
  },
  {
    id: 4,
    name: 'Мария Иванова',
    role: 'Мама Алисы, 2 года',
    avatar: '👩‍🦱',
    rating: 5,
    text: 'Когда искали садик для младшей, не сомневались — только «Мистер Мишка». Адаптация прошла мягко, Алиса обожает воспитателей!',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cream/50 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-soft mb-6">
              <Quote className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Отзывы родителей</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Что говорят{' '}
              <span className="bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
                родители
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 150 семей доверили нам своих детей
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-sage/10 to-primary/20 rounded-[2.5rem] blur-2xl opacity-60" />
            
            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-elevated">
              {/* Quote icon */}
              <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-sage/20 flex items-center justify-center">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-sage/20 flex items-center justify-center text-4xl">
                    {testimonials[currentIndex].avatar}
                  </div>
                </div>

                {/* Text content */}
                <div className="flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-accent text-amber-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-bold text-foreground">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-soft flex items-center justify-center hover:bg-white hover:shadow-card transition-all duration-300 hover:scale-110"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-gradient-to-r from-primary to-sage' 
                      : 'w-2 bg-muted hover:bg-primary/50'
                  }`}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-soft flex items-center justify-center hover:bg-white hover:shadow-card transition-all duration-300 hover:scale-110"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {[
              { value: '4.9', label: 'Рейтинг на Яндекс' },
              { value: '150+', label: 'Отзывов' },
              { value: '98%', label: 'Рекомендуют' },
            ].map((item) => (
              <div 
                key={item.label}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-soft"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-accent text-amber-accent" />
                  ))}
                </div>
                <span className="font-bold text-foreground">{item.value}</span>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
