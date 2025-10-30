import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contacts" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Оставьте заявку и получите бесплатную консультацию по вашему проекту
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ваше имя *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Петров"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Телефон *
                </label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (999) 123-45-67"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@mail.ru"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Сообщение
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о вашем проекте..."
                  rows={4}
                  className="w-full resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg"
              >
                Отправить заявку
                <Icon name="Send" className="ml-2" size={20} />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 flex items-start gap-4 bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Телефон</h3>
                <a href="tel:+74951234567" className="text-muted-foreground hover:text-accent transition-colors">
                  +7 (495) 123-45-67
                </a>
                <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00</p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Email</h3>
                <a href="mailto:info@promstroy.ru" className="text-muted-foreground hover:text-accent transition-colors">
                  info@promstroy.ru
                </a>
                <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Офис</h3>
                <p className="text-muted-foreground">
                  г. Москва, ул. Промышленная, д. 10, офис 501
                </p>
                <p className="text-sm text-muted-foreground mt-1">БЦ "Индустрия"</p>
              </div>
            </Card>

            <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Icon name="Map" size={48} className="mx-auto mb-2 opacity-50" />
                <p>Карта с объектами</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
