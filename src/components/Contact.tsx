import { useState, lazy, Suspense } from 'react';
import { Send, Phone, MapPin, Clock, MessageCircle, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import ScrollReveal from './ScrollReveal';
import { ChildLightbulb } from '@/components/ui/child-icons';

// Lazy load the map component
const Map = lazy(() => import('./Map'));

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    childAge: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    setFormData({ name: '', phone: '', childAge: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-sand/30 to-cream" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-soft mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Свяжитесь с нами</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Запишитесь на{' '}
              <span className="bg-gradient-to-r from-primary to-sage bg-clip-text text-transparent">
                экскурсию
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами для записи на бесплатную экскурсию
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal animation="fade-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-sage/10 to-primary/20 rounded-[2rem] blur-2xl opacity-60" />
              
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-elevated">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/50 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-white outline-none transition-all placeholder:text-muted-foreground/60"
                      placeholder="Как к вам обращаться?"
                      required
                      maxLength={100}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/50 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-white outline-none transition-all placeholder:text-muted-foreground/60"
                      placeholder="+7 (___) ___-__-__"
                      required
                      maxLength={20}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-semibold text-foreground mb-2">
                      Возраст ребёнка
                    </label>
                    <input
                      type="text"
                      id="childAge"
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/50 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-white outline-none transition-all placeholder:text-muted-foreground/60"
                      placeholder="Например: 3 года"
                      maxLength={50}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Сообщение (необязательно)
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/50 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:bg-white outline-none transition-all resize-none placeholder:text-muted-foreground/60"
                      rows={3}
                      placeholder="Ваши вопросы или пожелания"
                      maxLength={500}
                    />
                  </div>
                  
                  <LiquidButton
                    type="submit"
                    disabled={isSubmitting}
                    size="xl"
                    className="w-full"
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                    <Send className="w-5 h-5 ml-2" />
                  </LiquidButton>
                </form>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal animation="fade-left" delay={150}>
            <div className="space-y-6">
              {/* Info Card */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-sage/30 to-primary/30 rounded-2xl blur-xl opacity-60" />
                <div className="relative bg-gradient-to-br from-sage to-primary rounded-2xl p-6 text-white shadow-elevated">
                  <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
                  <div className="space-y-5">
                    <a href="tel:+7345200000" className="flex items-center gap-4 hover:opacity-80 transition-opacity group">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Телефон</p>
                        <p className="font-semibold text-lg">+7 (3452) XXX-XX-XX</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Адрес</p>
                        <p className="font-semibold">г. Тюмень, ул. Медовая, 16</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Режим работы</p>
                        <p className="font-semibold">Пн-Пт: 7:30 – 18:30</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-card">
                <h3 className="font-bold text-foreground mb-4">Мы в социальных сетях</h3>
                <div className="flex gap-3">
                  <a 
                    href="https://t.me/mistermishka" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#0088cc] to-[#00a8e8] text-white px-4 py-3.5 rounded-xl font-medium hover:opacity-90 hover:scale-105 transition-all shadow-soft"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Telegram
                  </a>
                  <a 
                    href="https://vk.com/mistermishka" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#4a76a8] to-[#5d8bc6] text-white px-4 py-3.5 rounded-xl font-medium hover:opacity-90 hover:scale-105 transition-all shadow-soft"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.847 2.456 2.268 4.607 2.853 4.607.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                    </svg>
                    ВКонтакте
                  </a>
                </div>
              </div>

              {/* Quick Note */}
              <div className="bg-gradient-to-r from-amber-accent/10 to-primary/10 border border-amber-accent/30 rounded-2xl p-5 backdrop-blur-sm">
                <div className="flex items-start gap-3 text-sm text-foreground">
                  <ChildLightbulb size={20} className="flex-shrink-0 mt-0.5 text-amber-accent" />
                  <p>
                    <span className="font-bold">Совет:</span> Запишитесь на экскурсию, чтобы лично 
                    познакомиться с нашим садом, воспитателями и задать все интересующие вопросы!
                  </p>
                </div>
              </div>

              {/* Map */}
              <Suspense fallback={
                <div className="w-full h-[300px] md:h-[400px] rounded-2xl bg-muted/50 animate-pulse flex items-center justify-center">
                  <span className="text-muted-foreground">Загрузка карты...</span>
                </div>
              }>
                <Map />
              </Suspense>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
