import { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock, Sparkles } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-white/50" />
      
      <div className="container mx-auto relative">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-sage/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={bearMascot} alt="Мистер Мишка" className="w-12 h-12 object-contain relative group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Мистер Мишка
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">Детский сад в Тюмени</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-sage group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span>г. Тюмень</span>
            </div>
            <a 
              href="tel:+73452000000" 
              className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              +7 (3452) 00-00-00
            </a>
            <LiquidButton 
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-4 h-4 mr-1" />
              Записаться
            </LiquidButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground rounded-xl bg-white/50 hover:bg-white/80 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 pt-4 animate-fade-in">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-white/50 shadow-elevated">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    className="px-4 py-3 rounded-xl text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground px-4">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>7:30 – 18:00 (будни)</span>
                </div>
                <a 
                  href="tel:+73452000000" 
                  className="flex items-center gap-2 font-semibold px-4"
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
