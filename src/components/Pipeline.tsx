import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Scan, Download, BarChart3, CheckCircle, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Pipeline = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Scan,
      titleKey: 'pipeline.step1',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Download,
      titleKey: 'pipeline.step2',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: BarChart3,
      titleKey: 'pipeline.step3',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: CheckCircle,
      titleKey: 'pipeline.step4',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: FileText,
      titleKey: 'pipeline.step5',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section id="pipeline" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('pipeline.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pipeline.desc')}
          </p>
        </div>

        {/* Pipeline Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.titleKey} className="flex flex-col items-center">
                  <Card className="w-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                    <CardHeader className="text-center pb-4">
                      <div className={`mx-auto w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-8 h-8 ${step.color}`} />
                      </div>
                      <CardTitle className="text-sm font-semibold text-foreground">
                        {t(step.titleKey)}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                  
                  {/* Arrow between steps (hidden on mobile, last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute transform translate-x-24 lg:translate-x-32">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Configuration Example */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-slate-900 border-slate-700 overflow-hidden">
            <CardHeader className="bg-slate-800 border-b border-slate-700">
              <CardTitle className="text-slate-300">Configuration Example</CardTitle>
              <CardDescription className="text-slate-400">
                JSON/YAML configuration for custom pipeline
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <pre className="text-slate-300 font-mono text-sm overflow-x-auto">
{`{
  "pipeline": {
    "steps": ["scan", "extract", "analyze", "validate", "report"],
    "scan": {
      "include": ["src/**/*.{ts,tsx,js,jsx}"],
      "exclude": ["node_modules", "dist"]
    },
    "extract": {
      "patterns": ["gql", "graphql", "useQuery", "useMutation"]
    },
    "analyze": {
      "crossFile": true,
      "aliases": true,
      "destructuring": true
    },
    "output": {
      "format": ["console", "json", "eslint"],
      "file": "graphql-lint-report.json"
    }
  }
}`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pipeline;