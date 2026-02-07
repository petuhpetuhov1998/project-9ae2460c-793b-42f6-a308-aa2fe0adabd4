import { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import bearMascot from '@/assets/bear-mascot.png';

const navLinks = [
  { href: '#about', label: 'О нас' },
  { href: '#services', label: 'Услуги' },
  { href: '#schedule', label: 'Распорядок' },
  { href: '#security', label: 'Безопасность' },
  { href: '#birthday', label: 'Дни рождения' },
  { href: '#faq', label: 'Вопросы' },
  { href: '#contact', label: 'Контакты' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={bearMascot} alt="Мистер Мишка" className="w-12 h-12 object-contain" />
            <span className="font-extrabold text-xl text-foreground">Мистер Мишка</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-sm">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>г. Тюмень</span>
            </div>
            <a 
              href="tel:+73452000000" 
              className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              +7 (3452) 00-00-00
            </a>
            <LiquidButton 
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Записаться
            </LiquidButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="nav-link text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>7:30 – 18:00 (будни)</span>
                </div>
                <a 
                  href="tel:+73452000000" 
                  className="flex items-center gap-2 font-semibold"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +7 (3452) 00-00-00
                </a>
                <LiquidButton 
                  size="default"
                  className="w-full mt-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Записаться на экскурсию
                </LiquidButton>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
