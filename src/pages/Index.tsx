import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Contacts />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
