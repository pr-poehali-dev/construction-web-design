import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/449474ed-28e9-4c7f-a619-cecff3425c37/files/8c4e0197-a082-45d4-bb18-c64ffb6830b5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Строительство промышленных объектов под ключ
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Более 15 лет создаем надежные производственные комплексы, склады и логистические центры по всей России
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContacts}
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 h-auto"
            >
              Получить консультацию
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto"
            >
              Наши проекты
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">200+</div>
              <div className="text-white/80 text-sm lg:text-base">Реализованных проектов</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">15</div>
              <div className="text-white/80 text-sm lg:text-base">Лет на рынке</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">1.5М+</div>
              <div className="text-white/80 text-sm lg:text-base">м² построено</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-white/80 text-sm lg:text-base">Сданных объектов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
