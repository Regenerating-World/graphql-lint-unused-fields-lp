import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  ExternalLink,
  FileText,
  Settings,
  GitBranch,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Documentation = () => {
  const { t } = useLanguage();

  const docs = [
    {
      icon: BookOpen,
      titleKey: "docs.core",
      url: "https://github.com/regenerating-world/graphql-lint-unused-fields/tree/main/packages/core",
      description: "Complete README and API documentation for the core package",
    },
    {
      icon: FileText,
      titleKey: "docs.cli",
      url: "https://github.com/regenerating-world/graphql-lint-unused-fields/blob/main/docs/CLI.md",
      description: "Command-line interface documentation and examples",
    },
    {
      icon: Settings,
      titleKey: "docs.pipeline",
      url: "https://github.com/regenerating-world/graphql-lint-unused-fields/blob/main/docs/PIPELINE.md",
      description: "Pipeline configuration and customization guide",
    },
    {
      icon: GitBranch,
      titleKey: "docs.aliases",
      url: "https://github.com/regenerating-world/graphql-lint-unused-fields/blob/main/docs/GRAPHQL_ALIASES.md",
      description: "GraphQL aliases mapping and advanced usage patterns",
    },
  ];

  return (
    <section id="documentation" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("docs.title")}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docs.map((doc, index) => {
              const IconComponent = doc.icon;
              return (
                <Card
                  key={doc.titleKey}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground group-hover:text-primary transition-colors">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      {t(doc.titleKey)}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {doc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full group" asChild>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read Documentation
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

export default Documentation;
