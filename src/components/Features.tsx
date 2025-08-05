import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Search,
  GitBranch,
  FileText,
  Zap,
  Terminal,
  Settings,
  FileOutput,
  FileCode,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Search,
      titleKey: "features.traditional.title",
      descKey: "features.traditional.desc",
    },
    {
      icon: GitBranch,
      titleKey: "features.aliases.title",
      descKey: "features.aliases.desc",
    },
    {
      icon: FileText,
      titleKey: "features.crossfile.title",
      descKey: "features.crossfile.desc",
    },
    {
      icon: Zap,
      titleKey: "features.react.title",
      descKey: "features.react.desc",
    },
    {
      icon: Terminal,
      titleKey: "features.cli.title",
      descKey: "features.cli.desc",
    },
    {
      icon: Settings,
      titleKey: "features.pipeline.title",
      descKey: "features.pipeline.desc",
    },
    {
      icon: FileOutput,
      titleKey: "features.formats.title",
      descKey: "features.formats.desc",
    },
    {
      icon: FileCode,
      titleKey: "features.config.title",
      descKey: "features.config.desc",
    },
  ];

  return (
    <section id="features" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("features.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={feature.titleKey}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {t(feature.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {t(feature.descKey)}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
