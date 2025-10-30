import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Building2" size={28} className="text-accent" />
              <span className="text-xl font-bold">ПромСтрой</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Строительство промышленных объектов под ключ с 2009 года
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors">
                  О нас
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors">
                  Проекты
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors">
                  Технологии
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+74951234567" className="hover:text-accent transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@promstroy.ru" className="hover:text-accent transition-colors">
                  info@promstroy.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-0.5" />
                <span>г. Москва, ул. Промышленная, д. 10</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                <Icon name="Send" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                <Icon name="Youtube" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center">
                <Icon name="Linkedin" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>© 2024 ПромСтрой. Все права защищены</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-accent transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
