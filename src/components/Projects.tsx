import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Projects = () => {
  const projects = [
    {
      title: "Логистический комплекс 'Северный'",
      location: "Московская область",
      area: "45 000 м²",
      year: "2024",
      image: "https://cdn.poehali.dev/projects/449474ed-28e9-4c7f-a619-cecff3425c37/files/06390371-108e-4553-b44f-cd02ba6808ca.jpg",
      type: "Склад"
    },
    {
      title: "Производственный цех ПАО 'Металлург'",
      location: "Екатеринбург",
      area: "28 000 м²",
      year: "2023",
      image: "https://cdn.poehali.dev/projects/449474ed-28e9-4c7f-a619-cecff3425c37/files/357ab69e-6c40-421b-8e40-ed32bd1f5a43.jpg",
      type: "Производство"
    },
    {
      title: "Индустриальный парк 'Технополис'",
      location: "Санкт-Петербург",
      area: "120 000 м²",
      year: "2023",
      image: "https://cdn.poehali.dev/projects/449474ed-28e9-4c7f-a619-cecff3425c37/files/8c4e0197-a082-45d4-bb18-c64ffb6830b5.jpg",
      type: "Промпарк"
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Реализованные проекты
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Каждый проект — это уникальное инженерное решение, адаптированное под задачи бизнеса клиента
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Maximize" size={16} />
                    <span className="text-sm">{project.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    <span className="text-sm">{project.year}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
