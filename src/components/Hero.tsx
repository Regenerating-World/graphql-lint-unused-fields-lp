import { Button } from '@/components/ui/button';
import { ArrowRight, Github, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl">
              <img 
                src="/lovable-uploads/77f04559-2276-4c39-87ec-adc407007fbc.png" 
                alt="GraphQL Lint" 
                className="w-16 h-16"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 hover:scale-105"
              asChild
            >
              <a href="#installation">
                {t('hero.cta.start')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              asChild
            >
              <a href="#documentation">
                <BookOpen className="w-5 h-5 mr-2" />
                {t('hero.cta.docs')}
              </a>
            </Button>
          </div>

          {/* GitHub Links */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center text-white/70">
            <a 
              href="https://github.com/FrancoAguzzi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              Franco Aguzzi
            </a>
            <span className="hidden sm:block">•</span>
            <a 
              href="https://github.com/regenerating-world" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              Regenerating World
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;