import { Phone, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';
import bearMascot from '@/assets/bear-mascot.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={bearMascot} alt="Мистер Мишка" className="w-12 h-12 object-contain" />
              <span className="font-extrabold text-xl">Мистер Мишка</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Частный детский сад в Тюмени с домашней атмосферой, 
              заботой о каждом ребёнке и индивидуальным подходом к развитию.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Услуги и абонементы</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Распорядок дня</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Безопасность</a></li>
              <li><a href="#birthday" className="hover:text-white transition-colors">Дни рождения</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Частые вопросы</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+73452000000" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  +7 (3452) 00-00-00
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                г. Тюмень, ул. Примерная, 123
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Clock className="w-4 h-4" />
                Пн-Пт: 7:30 – 18:00
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              <a 
                href="https://t.me/mistermishka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://vk.com/mistermishka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="ВКонтакте"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.847 2.456 2.268 4.607 2.853 4.607.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {currentYear} Детский сад «Мистер Мишка». Все права защищены.</p>
          <p className="flex items-center gap-1">
            Сделано с <Heart className="w-4 h-4 text-warm" /> для наших малышей
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
