
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import News from '@/components/News';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <News />
      <Contact />
    </div>
  );
};

export default Index;
