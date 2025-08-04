import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const Installation = () => {
  const { t } = useLanguage();
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const installCommands = [
    {
      title: 'NPM Install',
      command: 'npm install graphql-lint-unused-fields'
    },
    {
      title: 'Basic Usage',
      command: 'npx graphql-lint-unused-fields /your/project'
    },
    {
      title: 'Pipeline Usage',
      command: 'npx graphql-lint-pipeline /your/project --format console,json'
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <section id="installation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('installation.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {installCommands.map((item, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Download className="w-5 h-5 mr-2 text-primary" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <code className="text-green-400 flex-1 font-mono text-sm md:text-base">
                    $ {item.command}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(item.command)}
                    className="text-slate-400 hover:text-white ml-4"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copiedCommand === item.command ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* NPM Package Link */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a 
              href="https://www.npmjs.com/package/graphql-lint-unused-fields" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              View on NPM
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Installation;