import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Terminal from '@/components/Terminal';
import Pipeline from '@/components/Pipeline';
import Installation from '@/components/Installation';
import Examples from '@/components/Examples';
import Documentation from '@/components/Documentation';
import Links from '@/components/Links';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Features />
          <Terminal />
          <Pipeline />
          <Installation />
          <Examples />
          <Documentation />
          <Links />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
