import { Phone, MapPin, Clock, MessageCircle, Heart, ArrowUp, Sparkles } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent" />
      
      {/* Main footer */}
      <div className="relative bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-white pt-20 pb-8">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          {/* CTA Section */}
          <div className="relative mb-16">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-sage/20 to-primary/30 rounded-3xl blur-2xl" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-4">
                    <Sparkles className="w-4 h-4 text-amber-accent" />
                    <span className="text-sm">Набор открыт</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                    Запишите ребёнка на{' '}
                    <span className="bg-gradient-to-r from-amber-accent to-primary bg-clip-text text-transparent">
                      бесплатную экскурсию
                    </span>
                  </h3>
                  <p className="text-white/70 max-w-lg">
                    Познакомьтесь с нашим садом, воспитателями и задайте все вопросы лично
                  </p>
                </div>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex-shrink-0 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-primary to-sage text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Записаться сейчас
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-sage/30 rounded-full blur-lg" />
                  <img src={logo} alt="Мистер Мишка" className="w-14 h-14 object-contain relative" />
                </div>
                <div>
                  <span className="font-monly font-bold text-xl block">Мистер Мишка</span>
                  <span className="text-sm text-white/60">Детский сад</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Частный детский сад в Тюмени с домашней атмосферой, 
                заботой о каждом ребёнке и индивидуальным подходом к развитию.
              </p>
              {/* Social links */}
              <div className="flex gap-3">
                <a 
                  href="https://t.me/mistermishka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/10"
                  aria-label="Telegram"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a 
                  href="https://vk.com/mistermishka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/10"
                  aria-label="ВКонтакте"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.847 2.456 2.268 4.607 2.853 4.607.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-6 text-lg">Навигация</h4>
              <ul className="space-y-3 text-sm">
                {['О нас', 'Услуги', 'Распорядок', 'Безопасность', 'Дни рождения', 'Вопросы'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-')}`} 
                      className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-6 text-lg">Контакты</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="tel:+79324759888" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Телефон</p>
                      <p className="font-medium text-white">+7 (932) 475-98-88</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Адрес</p>
                    <p className="font-medium text-white">г. Тюмень, ул. Медовая, 16</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Режим работы</p>
                    <p className="font-medium text-white">Пн-Пт: 7:30 – 18:30</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div>
              <h4 className="font-bold mb-6 text-lg">Как добраться</h4>
              <div className="relative rounded-2xl overflow-hidden h-40 bg-white/10 border border-white/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-white/70">Карта проезда</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {currentYear} Детский сад «Мистер Мишка». Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <p className="flex items-center gap-1 text-sm text-white/50">
                Сделано с <Heart className="w-4 h-4 text-red-400 fill-red-400" /> для малышей
              </p>
              <button 
                onClick={scrollToTop}
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/10"
                aria-label="Наверх"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
