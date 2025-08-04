import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, FileJson, Bug } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Examples = () => {
  const { t } = useLanguage();

  const consoleOutput = `GraphQL Lint Analysis Results
============================

📊 Summary:
  • Total files scanned: 124
  • GraphQL queries found: 45
  • Unused fields detected: 7
  • Overall usage: 97.9%

⚠️  Unused Fields:
  • user.lastLoginDate (UserProfile.tsx:23)
  • post.viewCount (PostList.tsx:45)
  • comment.ipAddress (CommentSection.tsx:67)

✅ Performance:
  • Scan completed in 2.3s
  • Memory usage: 145MB
  • Cache hits: 89%`;

  const jsonOutput = `{
  "summary": {
    "totalFiles": 124,
    "queriesFound": 45,
    "unusedFields": 7,
    "usagePercentage": 97.9,
    "scanDuration": "2.3s"
  },
  "unusedFields": [
    {
      "field": "user.lastLoginDate",
      "location": "UserProfile.tsx:23",
      "query": "GET_USER_PROFILE",
      "reason": "Field queried but never accessed"
    },
    {
      "field": "post.viewCount", 
      "location": "PostList.tsx:45",
      "query": "GET_POSTS",
      "reason": "Destructured but unused variable"
    }
  ],
  "performance": {
    "memoryUsage": "145MB",
    "cacheHits": 89
  }
}`;

  const eslintOutput = `src/components/UserProfile.tsx
  23:5  warning  Unused GraphQL field 'lastLoginDate'  graphql-lint/unused-field

src/components/PostList.tsx
  45:12  warning  Unused GraphQL field 'viewCount'  graphql-lint/unused-field

src/components/CommentSection.tsx
  67:8  warning  Unused GraphQL field 'ipAddress'  graphql-lint/unused-field

✖ 3 problems (0 errors, 3 warnings)`;

  const examples = [
    {
      id: 'console',
      icon: Monitor,
      titleKey: 'examples.console',
      content: consoleOutput,
      language: 'bash'
    },
    {
      id: 'json',
      icon: FileJson,
      titleKey: 'examples.json',
      content: jsonOutput,
      language: 'json'
    },
    {
      id: 'eslint',
      icon: Bug,
      titleKey: 'examples.eslint',
      content: eslintOutput,
      language: 'bash'
    }
  ];

  return (
    <section id="examples" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('examples.title')}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="console" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {examples.map((example) => {
                const IconComponent = example.icon;
                return (
                  <TabsTrigger 
                    key={example.id} 
                    value={example.id}
                    className="flex items-center space-x-2"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden sm:inline">{t(example.titleKey)}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {examples.map((example) => (
              <TabsContent key={example.id} value={example.id}>
                <Card className="bg-slate-900 border-slate-700 overflow-hidden">
                  <CardHeader className="bg-slate-800 border-b border-slate-700">
                    <CardTitle className="flex items-center text-slate-300">
                      <example.icon className="w-5 h-5 mr-2" />
                      {t(example.titleKey)}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      {example.id === 'console' && 'Formatted console with statistics'}
                      {example.id === 'json' && 'Structured JSON for processing'}
                      {example.id === 'eslint' && 'ESLint format for integration'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <pre className="text-slate-300 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                      {example.content}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Examples;