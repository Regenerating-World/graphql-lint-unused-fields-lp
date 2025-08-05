import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "es" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.terminal": "Terminal",
    "nav.pipeline": "Pipeline",
    "nav.documentation": "Documentation",
    "nav.github": "GitHub",

    // Hero Section
    "hero.title": "GraphQL Lint Unused Fields - Tiny GraphQL Tool",
    "hero.subtitle":
      "🚀 Tiny GraphQL tool to detect unused fields in GraphQL queries. Lightweight CLI tool for GraphQL linting and optimization",
    "hero.cta.start": "Get Started",
    "hero.cta.docs": "View Documentation",

    // Features Section
    "features.title": "✨ Key Features - Tiny GraphQL Tool",
    "features.traditional.title": "GraphQL Lint Analysis",
    "features.traditional.desc":
      "Tiny GraphQL tool for detecting gql and graphql queries",
    "features.aliases.title": "GraphQL Aliases Support",
    "features.aliases.desc": "Complete alias mapping for GraphQL linting",
    "features.crossfile.title": "Cross-file GraphQL Analysis",
    "features.crossfile.desc":
      "Tiny GraphQL tool tracking between TypeScript/JavaScript files",
    "features.react.title": "React GraphQL Lint Support",
    "features.react.desc": "JSX, hooks, destructuring analysis for GraphQL",
    "features.cli.title": "Tiny GraphQL CLI Tool",
    "features.cli.desc": "Lightweight CLI for CI/CD integration",
    "features.pipeline.title": "GraphQL Lint Pipeline",
    "features.pipeline.desc":
      "Tiny GraphQL pipeline with customizable steps (scan, extract, analyze, validate, report)",
    "features.formats.title": "GraphQL Lint Output Formats",
    "features.formats.desc":
      "Console, JSON, ESLint formats for GraphQL linting",
    "features.config.title": "Tiny GraphQL Configuration",
    "features.config.desc": "JSON/YAML configuration for GraphQL lint tool",

    // Terminal Section
    "terminal.title": "💻 Tiny GraphQL CLI Usage",
    "terminal.demo": "Tiny GraphQL CLI demonstration in action",
    "terminal.commands": "Main GraphQL lint commands:",

    // Pipeline Section
    "pipeline.title": "🔄 Tiny GraphQL Pipeline",
    "pipeline.desc": "Tiny GraphQL pipeline system with 5 customizable steps:",
    "pipeline.step1": "Scan: GraphQL file scanning",
    "pipeline.step2": "Extract: GraphQL query extraction",
    "pipeline.step3": "Analyze: GraphQL field usage analysis",
    "pipeline.step4": "Validate: GraphQL query validation",
    "pipeline.step5": "Report: GraphQL lint report generation",

    // Installation Section
    "installation.title": "📦 Quick Installation",

    // Examples Section
    "examples.title": "📊 Tiny GraphQL Output Examples",
    "examples.console": "Tiny GraphQL formatted console with statistics",
    "examples.json": "Tiny GraphQL structured JSON for processing",
    "examples.eslint": "Tiny GraphQL ESLint format for integration",

    // Documentation Section
    "docs.title": "📚 Tiny GraphQL Complete Documentation",
    "docs.core": "Tiny GraphQL Core Package README",
    "docs.cli": "Tiny GraphQL CLI Documentation",
    "docs.pipeline": "Tiny GraphQL Pipeline Configuration",
    "docs.aliases": "Tiny GraphQL Aliases Mapping",

    // Links Section
    "links.title": "🔗 Important Links",
    "links.npm": "NPM Package",
    "links.github.repo": "GitHub Repository",
    "links.github.personal": "Personal GitHub",
    "links.github.org": "Organization GitHub",

    // Footer
    "footer.license": "MIT License",
    "footer.contact": "Contact Information",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.features": "Características",
    "nav.terminal": "Terminal",
    "nav.pipeline": "Pipeline",
    "nav.documentation": "Documentación",
    "nav.github": "GitHub",

    // Hero Section
    "hero.title": "GraphQL Lint Unused Fields - Tiny GraphQL Tool",
    "hero.subtitle":
      "🚀 Tiny GraphQL tool para detectar campos no utilizados en consultas GraphQL. Herramienta CLI ligera para linting y optimización GraphQL",
    "hero.cta.start": "Comenzar",
    "hero.cta.docs": "Ver Documentación",

    // Features Section
    "features.title": "✨ Características Principales - Tiny GraphQL Tool",
    "features.traditional.title": "Análisis GraphQL Lint",
    "features.traditional.desc":
      "Tiny GraphQL tool para detectar consultas gql y graphql",
    "features.aliases.title": "Soporte de Aliases GraphQL",
    "features.aliases.desc": "Mapeo completo de aliases para linting GraphQL",
    "features.crossfile.title": "Análisis Cross-file GraphQL",
    "features.crossfile.desc":
      "Tiny GraphQL tool rastreando entre archivos TypeScript/JavaScript",
    "features.react.title": "Soporte React GraphQL Lint",
    "features.react.desc": "Análisis de JSX, hooks, destructuring para GraphQL",
    "features.cli.title": "Tiny GraphQL CLI Tool",
    "features.cli.desc": "CLI ligero para integración CI/CD",
    "features.pipeline.title": "Pipeline GraphQL Lint",
    "features.pipeline.desc":
      "Tiny GraphQL pipeline con pasos personalizables (scan, extract, analyze, validate, report)",
    "features.formats.title": "Formatos de Salida GraphQL Lint",
    "features.formats.desc":
      "Formatos Console, JSON, ESLint para linting GraphQL",
    "features.config.title": "Configuración Tiny GraphQL",
    "features.config.desc":
      "Configuración JSON/YAML para herramienta GraphQL lint",

    // Terminal Section
    "terminal.title": "💻 Tiny GraphQL CLI Usage",
    "terminal.demo": "Tiny GraphQL CLI demostración en acción",
    "terminal.commands": "Comandos principales de GraphQL lint:",

    // Pipeline Section
    "pipeline.title": "🔄 Tiny GraphQL Pipeline",
    "pipeline.desc":
      "Sistema Tiny GraphQL pipeline con 5 pasos personalizables:",
    "pipeline.step1": "Scan: Escaneo de archivos GraphQL",
    "pipeline.step2": "Extract: Extracción de consultas GraphQL",
    "pipeline.step3": "Analyze: Análisis de uso de campos GraphQL",
    "pipeline.step4": "Validate: Validación de consultas GraphQL",
    "pipeline.step5": "Report: Generación de reportes GraphQL lint",

    // Installation Section
    "installation.title": "📦 Instalación Rápida",

    // Examples Section
    "examples.title": "📊 Tiny GraphQL Ejemplos de Salida",
    "examples.console": "Tiny GraphQL consola formateada con estadísticas",
    "examples.json": "Tiny GraphQL JSON estructurado para procesamiento",
    "examples.eslint": "Tiny GraphQL formato ESLint para integración",

    // Documentation Section
    "docs.title": "📚 Tiny GraphQL Documentación Completa",
    "docs.core": "Tiny GraphQL README del Paquete Core",
    "docs.cli": "Tiny GraphQL Documentación CLI",
    "docs.pipeline": "Tiny GraphQL Configuración de Pipeline",
    "docs.aliases": "Tiny GraphQL Mapeo de Aliases",

    // Links Section
    "links.title": "🔗 Enlaces Importantes",
    "links.npm": "Paquete NPM",
    "links.github.repo": "Repositorio GitHub",
    "links.github.personal": "GitHub Personal",
    "links.github.org": "GitHub Organización",

    // Footer
    "footer.license": "Licencia MIT",
    "footer.contact": "Información de Contacto",
  },
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.features": "Funcionalidades",
    "nav.terminal": "Terminal",
    "nav.pipeline": "Pipeline",
    "nav.documentation": "Documentação",
    "nav.github": "GitHub",

    // Hero Section
    "hero.title": "GraphQL Lint Unused Fields - Tiny GraphQL Tool",
    "hero.subtitle":
      "🚀 Tiny GraphQL tool para detectar campos não utilizados em consultas GraphQL. Ferramenta CLI leve para linting e otimização GraphQL",
    "hero.cta.start": "Começar Agora",
    "hero.cta.docs": "Ver Documentação",

    // Features Section
    "features.title": "✨ Funcionalidades Principais - Tiny GraphQL Tool",
    "features.traditional.title": "Análise GraphQL Lint",
    "features.traditional.desc":
      "Tiny GraphQL tool para detectar queries gql e graphql",
    "features.aliases.title": "Suporte a Aliases GraphQL",
    "features.aliases.desc":
      "Mapeamento completo de aliases para linting GraphQL",
    "features.crossfile.title": "Análise Cross-file GraphQL",
    "features.crossfile.desc":
      "Tiny GraphQL tool rastreando entre arquivos TypeScript/JavaScript",
    "features.react.title": "Suporte React GraphQL Lint",
    "features.react.desc": "JSX, hooks, destructuring para GraphQL",
    "features.cli.title": "Tiny GraphQL CLI Tool",
    "features.cli.desc": "CLI leve para integração CI/CD",
    "features.pipeline.title": "Pipeline GraphQL Lint",
    "features.pipeline.desc":
      "Tiny GraphQL pipeline com passos customizáveis (scan, extract, analyze, validate, report)",
    "features.formats.title": "Formatos de Saída GraphQL Lint",
    "features.formats.desc": "Console, JSON, ESLint para linting GraphQL",
    "features.config.title": "Configuração Tiny GraphQL",
    "features.config.desc":
      "Configuração JSON/YAML para ferramenta GraphQL lint",

    // Terminal Section
    "terminal.title": "💻 Tiny GraphQL CLI Usage",
    "terminal.demo": "Demonstração visual do Tiny GraphQL CLI em ação",
    "terminal.commands": "Comandos principais de GraphQL lint:",

    // Pipeline Section
    "pipeline.title": "🔄 Tiny GraphQL Pipeline",
    "pipeline.desc": "Sistema Tiny GraphQL pipeline com 5 passos:",
    "pipeline.step1": "Scan: Escaneamento de arquivos GraphQL",
    "pipeline.step2": "Extract: Extração de queries GraphQL",
    "pipeline.step3": "Analyze: Análise de uso de campos GraphQL",
    "pipeline.step4": "Validate: Validação de queries GraphQL",
    "pipeline.step5": "Report: Geração de relatórios GraphQL lint",

    // Installation Section
    "installation.title": "📦 Instalação Rápida",

    // Examples Section
    "examples.title": "📊 Tiny GraphQL Exemplos de Saída",
    "examples.console": "Tiny GraphQL console formatado com estatísticas",
    "examples.json": "Tiny GraphQL JSON estruturado para processamento",
    "examples.eslint": "Tiny GraphQL formato ESLint para integração",

    // Documentation Section
    "docs.title": "📚 Tiny GraphQL Documentação Completa",
    "docs.core": "Tiny GraphQL Core Package README",
    "docs.cli": "Tiny GraphQL Documentação CLI",
    "docs.pipeline": "Tiny GraphQL Configuração Pipeline",
    "docs.aliases": "Tiny GraphQL Mapeamento de Aliases",

    // Links Section
    "links.title": "🔗 Links Importantes",
    "links.npm": "Pacote NPM",
    "links.github.repo": "Repositório GitHub",
    "links.github.personal": "GitHub Pessoal",
    "links.github.org": "GitHub Organização",

    // Footer
    "footer.license": "Licença MIT",
    "footer.contact": "Informações de contato",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
