import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.terminal': 'Terminal',
    'nav.pipeline': 'Pipeline',
    'nav.documentation': 'Documentation',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title': 'GraphQL Lint Unused Fields',
    'hero.subtitle': '🚀 Terminal and Pipeline tool to detect unused fields in GraphQL queries',
    'hero.cta.start': 'Get Started',
    'hero.cta.docs': 'View Documentation',
    
    // Features Section
    'features.title': '✨ Key Features',
    'features.traditional.title': 'Traditional GraphQL Analysis',
    'features.traditional.desc': 'Detection of gql and graphql queries',
    'features.aliases.title': 'Complete Alias Mapping',
    'features.aliases.desc': 'Full support for GraphQL aliases',
    'features.crossfile.title': 'Cross-file Analysis',
    'features.crossfile.desc': 'Tracking between TypeScript/JavaScript files',
    'features.react.title': 'Complete React Support',
    'features.react.desc': 'JSX, hooks, destructuring analysis',
    'features.cli.title': 'CLI for CI/CD',
    'features.cli.desc': 'Integration with development pipelines',
    'features.pipeline.title': 'Configurable Pipeline',
    'features.pipeline.desc': 'Customizable steps (scan, extract, analyze, validate, report)',
    'features.formats.title': 'Multiple Output Formats',
    'features.formats.desc': 'Console, JSON, ESLint formats',
    'features.config.title': 'File Configuration',
    'features.config.desc': 'JSON/YAML configuration support',
    
    // Terminal Section
    'terminal.title': '💻 Terminal Usage',
    'terminal.demo': 'CLI demonstration in action',
    'terminal.commands': 'Main commands:',
    
    // Pipeline Section
    'pipeline.title': '🔄 Configurable Pipeline',
    'pipeline.desc': 'Pipeline system with 5 customizable steps:',
    'pipeline.step1': 'Scan: File scanning',
    'pipeline.step2': 'Extract: GraphQL query extraction',
    'pipeline.step3': 'Analyze: Field usage analysis',
    'pipeline.step4': 'Validate: Query validation',
    'pipeline.step5': 'Report: Report generation',
    
    // Installation Section
    'installation.title': '📦 Quick Installation',
    
    // Examples Section
    'examples.title': '📊 Output Examples',
    'examples.console': 'Formatted console with statistics',
    'examples.json': 'Structured JSON for processing',
    'examples.eslint': 'ESLint format for integration',
    
    // Documentation Section
    'docs.title': '📚 Complete Documentation',
    'docs.core': 'Core Package README',
    'docs.cli': 'CLI Documentation',
    'docs.pipeline': 'Pipeline Configuration',
    'docs.aliases': 'GraphQL Aliases Mapping',
    
    // Links Section
    'links.title': '🔗 Important Links',
    'links.npm': 'NPM Package',
    'links.github.repo': 'GitHub Repository',
    'links.github.personal': 'Personal GitHub',
    'links.github.org': 'Organization GitHub',
    
    // Footer
    'footer.license': 'MIT License',
    'footer.contact': 'Contact Information',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.features': 'Características',
    'nav.terminal': 'Terminal',
    'nav.pipeline': 'Pipeline',
    'nav.documentation': 'Documentación',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title': 'GraphQL Lint Unused Fields',
    'hero.subtitle': '🚀 Herramienta de Terminal y Pipeline para detectar campos no utilizados en consultas GraphQL',
    'hero.cta.start': 'Comenzar',
    'hero.cta.docs': 'Ver Documentación',
    
    // Features Section
    'features.title': '✨ Características Principales',
    'features.traditional.title': 'Análisis GraphQL Tradicional',
    'features.traditional.desc': 'Detección de consultas gql y graphql',
    'features.aliases.title': 'Mapeo Completo de Aliases',
    'features.aliases.desc': 'Soporte completo para aliases GraphQL',
    'features.crossfile.title': 'Análisis Cross-file',
    'features.crossfile.desc': 'Rastreo entre archivos TypeScript/JavaScript',
    'features.react.title': 'Soporte Completo React',
    'features.react.desc': 'Análisis de JSX, hooks, destructuring',
    'features.cli.title': 'CLI para CI/CD',
    'features.cli.desc': 'Integración con pipelines de desarrollo',
    'features.pipeline.title': 'Pipeline Configurable',
    'features.pipeline.desc': 'Pasos personalizables (scan, extract, analyze, validate, report)',
    'features.formats.title': 'Múltiples Formatos de Salida',
    'features.formats.desc': 'Formatos Console, JSON, ESLint',
    'features.config.title': 'Configuración por Archivo',
    'features.config.desc': 'Soporte de configuración JSON/YAML',
    
    // Terminal Section
    'terminal.title': '💻 Uso por Terminal',
    'terminal.demo': 'Demostración de CLI en acción',
    'terminal.commands': 'Comandos principales:',
    
    // Pipeline Section
    'pipeline.title': '🔄 Pipeline Configurable',
    'pipeline.desc': 'Sistema de pipeline con 5 pasos personalizables:',
    'pipeline.step1': 'Scan: Escaneo de archivos',
    'pipeline.step2': 'Extract: Extracción de consultas GraphQL',
    'pipeline.step3': 'Analyze: Análisis de uso de campos',
    'pipeline.step4': 'Validate: Validación de consultas',
    'pipeline.step5': 'Report: Generación de reportes',
    
    // Installation Section
    'installation.title': '📦 Instalación Rápida',
    
    // Examples Section
    'examples.title': '📊 Ejemplos de Salida',
    'examples.console': 'Consola formateada con estadísticas',
    'examples.json': 'JSON estructurado para procesamiento',
    'examples.eslint': 'Formato ESLint para integración',
    
    // Documentation Section
    'docs.title': '📚 Documentación Completa',
    'docs.core': 'README del Paquete Core',
    'docs.cli': 'Documentación CLI',
    'docs.pipeline': 'Configuración de Pipeline',
    'docs.aliases': 'Mapeo de Aliases GraphQL',
    
    // Links Section
    'links.title': '🔗 Enlaces Importantes',
    'links.npm': 'Paquete NPM',
    'links.github.repo': 'Repositorio GitHub',
    'links.github.personal': 'GitHub Personal',
    'links.github.org': 'GitHub Organización',
    
    // Footer
    'footer.license': 'Licencia MIT',
    'footer.contact': 'Información de Contacto',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.features': 'Funcionalidades',
    'nav.terminal': 'Terminal',
    'nav.pipeline': 'Pipeline',
    'nav.documentation': 'Documentação',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title': 'GraphQL Lint Unused Fields',
    'hero.subtitle': '🚀 Ferramenta de Terminal e Pipeline para detectar campos não utilizados em consultas GraphQL',
    'hero.cta.start': 'Começar Agora',
    'hero.cta.docs': 'Ver Documentação',
    
    // Features Section
    'features.title': '✨ Funcionalidades Principais',
    'features.traditional.title': 'Análise Tradicional GraphQL',
    'features.traditional.desc': 'Detecção de queries gql e graphql',
    'features.aliases.title': 'Mapeamento Completo de Aliases',
    'features.aliases.desc': 'Suporte completo a aliases GraphQL',
    'features.crossfile.title': 'Análise Cross-file',
    'features.crossfile.desc': 'Rastreamento entre arquivos TypeScript/JavaScript',
    'features.react.title': 'Suporte Completo React',
    'features.react.desc': 'JSX, hooks, destructuring',
    'features.cli.title': 'CLI para CI/CD',
    'features.cli.desc': 'Integração com pipelines de desenvolvimento',
    'features.pipeline.title': 'Pipeline Configurável',
    'features.pipeline.desc': 'Passos customizáveis (scan, extract, analyze, validate, report)',
    'features.formats.title': 'Múltiplos Formatos de Saída',
    'features.formats.desc': 'Console, JSON, ESLint',
    'features.config.title': 'Configuração via Arquivo',
    'features.config.desc': 'JSON/YAML',
    
    // Terminal Section
    'terminal.title': '💻 Uso via Terminal',
    'terminal.demo': 'Demonstração visual do CLI em ação',
    'terminal.commands': 'Comandos principais:',
    
    // Pipeline Section
    'pipeline.title': '🔄 Pipeline Configurável',
    'pipeline.desc': 'Sistema de pipeline com 5 passos:',
    'pipeline.step1': 'Scan: Escaneamento de arquivos',
    'pipeline.step2': 'Extract: Extração de queries GraphQL',
    'pipeline.step3': 'Analyze: Análise de uso de campos',
    'pipeline.step4': 'Validate: Validação de queries',
    'pipeline.step5': 'Report: Geração de relatórios',
    
    // Installation Section
    'installation.title': '📦 Instalação Rápida',
    
    // Examples Section
    'examples.title': '📊 Exemplos de Saída',
    'examples.console': 'Console formatado com estatísticas',
    'examples.json': 'JSON estruturado para processamento',
    'examples.eslint': 'Formato ESLint para integração',
    
    // Documentation Section
    'docs.title': '📚 Documentação Completa',
    'docs.core': 'Core Package README',
    'docs.cli': 'Documentação CLI',
    'docs.pipeline': 'Configuração Pipeline',
    'docs.aliases': 'Mapeamento de Aliases GraphQL',
    
    // Links Section
    'links.title': '🔗 Links Importantes',
    'links.npm': 'Pacote NPM',
    'links.github.repo': 'Repositório GitHub',
    'links.github.personal': 'GitHub Pessoal',
    'links.github.org': 'GitHub Organização',
    
    // Footer
    'footer.license': 'Licença MIT',
    'footer.contact': 'Informações de contato',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};