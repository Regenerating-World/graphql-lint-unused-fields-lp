import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Package, Github, User, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Links = () => {
  const { t } = useLanguage();

  const links = [
    {
      icon: Package,
      titleKey: 'links.npm',
      url: 'https://www.npmjs.com/package/graphql-lint-unused-fields',
      description: 'graphql-lint-unused-fields',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: Github,
      titleKey: 'links.github.repo',
      url: 'https://github.com/regenerating-world/graphql-lint-unused-fields',
      description: 'regenerating-world/graphql-lint-unused-fields',
      color: 'text-slate-500',
      bgColor: 'bg-slate-500/10'
    },
    {
      icon: User,
      titleKey: 'links.github.personal',
      url: 'https://github.com/FrancoAguzzi',
      description: 'Franco Aguzzi',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Building,
      titleKey: 'links.github.org',
      url: 'https://github.com/regenerating-world',
      description: 'Regenerating World',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    }
  ];

  return (
    <section id="links" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('links.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {links.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Card 
                  key={link.titleKey} 
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <div className={`w-12 h-12 ${link.bgColor} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-6 h-6 ${link.color}`} />
                      </div>
                      {t(link.titleKey)}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {link.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full group" asChild>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Link
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;