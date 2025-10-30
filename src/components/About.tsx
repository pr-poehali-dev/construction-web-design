import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const About = () => {
  const advantages = [
    {
      icon: "Shield",
      title: "Надежность",
      description: "Гарантия на все виды работ. Страхование объектов строительства"
    },
    {
      icon: "Clock",
      title: "Соблюдение сроков",
      description: "Четкое планирование и контроль всех этапов строительства"
    },
    {
      icon: "Award",
      title: "Качество",
      description: "Используем только сертифицированные материалы и технологии"
    },
    {
      icon: "Users",
      title: "Профессионализм",
      description: "Команда из 200+ специалистов с опытом работы от 10 лет"
    },
    {
      icon: "FileCheck",
      title: "Документация",
      description: "Полное юридическое сопровождение и получение разрешений"
    },
    {
      icon: "TrendingDown",
      title: "Оптимизация затрат",
      description: "Прямые контракты с поставщиками. Экономия до 20% бюджета"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            О компании ПромСтрой
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Мы специализируемся на строительстве промышленных зданий и сооружений под ключ. 
            За 15 лет работы реализовали более 200 проектов производственных комплексов, 
            складов, логистических центров и промышленных парков по всей России.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Icon name={advantage.icon as any} size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
