import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Technologies = () => {
  const technologies = [
    {
      icon: "Boxes",
      title: "Металлоконструкции",
      description: "Современные быстровозводимые каркасы из легких стальных конструкций. Сокращение сроков строительства до 60%"
    },
    {
      icon: "Layers",
      title: "Сэндвич-панели",
      description: "Энергоэффективные ограждающие конструкции с высокой теплоизоляцией и быстрым монтажом"
    },
    {
      icon: "Cpu",
      title: "BIM-проектирование",
      description: "3D-моделирование всех систем здания для исключения ошибок и оптимизации конструкций"
    },
    {
      icon: "Zap",
      title: "Умные системы",
      description: "Автоматизация инженерных систем, мониторинг и управление всеми процессами здания"
    },
    {
      icon: "Droplet",
      title: "Экостроительство",
      description: "Использование экологичных материалов и энергосберегающих технологий"
    },
    {
      icon: "Truck",
      title: "Логистика",
      description: "Собственный парк техники и налаженная цепочка поставок материалов"
    }
  ];

  return (
    <section id="technologies" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Технологии строительства
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Применяем передовые технологии и материалы для создания надежных, 
            экономичных и современных промышленных объектов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent hover:border-l-8 bg-card"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Icon name={tech.icon as any} size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {tech.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {tech.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Сертификаты и лицензии
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Все виды работ выполняются в соответствии с действующими СНиП, 
                ГОСТ и техническими регламентами
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Icon name="CheckCircle" size={20} />
                  <span>ISO 9001</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Icon name="CheckCircle" size={20} />
                  <span>ISO 14001</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Icon name="CheckCircle" size={20} />
                  <span>СРО</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">A+</div>
                <div className="text-sm text-white/80">Класс энергоэффективности</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">5★</div>
                <div className="text-sm text-white/80">Рейтинг надежности</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
