import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" size={32} className="text-accent" />
            <span className="text-xl lg:text-2xl font-bold text-primary">ПромСтрой</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-accent transition-colors font-medium">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-accent transition-colors font-medium">
              О компании
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-accent transition-colors font-medium">
              Проекты
            </button>
            <button onClick={() => scrollToSection('technologies')} className="text-foreground hover:text-accent transition-colors font-medium">
              Технологии
            </button>
            <Button onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90">
              Связаться
            </Button>
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-4 animate-fade-in">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium">
              О компании
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium">
              Проекты
            </button>
            <button onClick={() => scrollToSection('technologies')} className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium">
              Технологии
            </button>
            <Button onClick={() => scrollToSection('contacts')} className="w-full bg-accent hover:bg-accent/90">
              Связаться
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
