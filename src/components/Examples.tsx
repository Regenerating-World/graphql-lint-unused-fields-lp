import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, FileJson, Bug } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Examples = () => {
  const { t } = useLanguage();

  const consoleOutput = `🔍 GRAPHQL LINT - ANALYSIS RESULT

📊 GENERAL STATISTICS:
   🎯 Queries analyzed: 42
   📋 Fields found: 156
   ✅ Fields in use: 142 (91%)
   ❌ Unused fields: 14 (9%)

🚨 These are the unused fields in your GraphQL queries:

🔹 GetUser (3 unused fields) [/path/to/file.ts]
   • email (line 15:10)
     📁 File: /path/to/file.ts
     Path: user → email
   • phone (line 16:12)
     📁 File: /path/to/file.ts
     Path: user → phone
   • avatar (line 17:8)
     📁 File: /path/to/file.ts
     Path: user → profile → avatar

🔹 GetUserProfile (2 unused fields) [/path/to/components/UserProfile.tsx]
   • lastLogin (line 25:5)
     📁 File: /path/to/components/UserProfile.tsx
     Path: user → profile → lastLogin
   • preferences (line 28:12)
     📁 File: /path/to/components/UserProfile.tsx
     Path: user → profile → preferences

💡 RECOMMENDATIONS:
   1. Remove unused fields to reduce payload size
   2. Consider using GraphQL fragments for common fields
   3. Review field usage patterns in your components`;

  const jsonOutput = `{
  "unusedFields": [
    {
      "field": {
        "name": "email",
        "path": ["user", "email"],
        "line": 15,
        "column": 10,
        "alias": null,
        "actualName": "email"
      },
      "query": {
        "name": "GetUser",
        "location": {
          "file": "/path/to/file.ts",
          "line": 10,
          "column": 5
        }
      },
      "estimatedSavings": {
        "sizeReduction": "25 bytes",
        "percentage": 8.5
      }
    },
    {
      "field": {
        "name": "phone",
        "path": ["user", "phone"],
        "line": 16,
        "column": 12,
        "alias": null,
        "actualName": "phone"
      },
      "query": {
        "name": "GetUser",
        "location": {
          "file": "/path/to/file.ts",
          "line": 10,
          "column": 5
        }
      },
      "estimatedSavings": {
        "sizeReduction": "20 bytes",
        "percentage": 6.2
      }
    }
  ],
  "totalQueriesAnalyzed": 42,
  "totalFieldsAnalyzed": 156,
  "usedFieldsCount": 142,
  "unusedFieldsCount": 14,
  "usageRate": 91.0,
  "estimatedTotalSavings": {
    "sizeReduction": "150 bytes",
    "percentage": 12.0
  },
  "analysisMetadata": {
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "1.6.14",
    "projectPath": "/path/to/project"
  }
}`;

  const eslintOutput = `[
  {
    "filePath": "/path/to/file.ts",
    "messages": [
      {
        "ruleId": "graphql-lint-unused-fields",
        "severity": 2,
        "message": "Field 'email' was requested but not used",
        "line": 15,
        "column": 10,
        "nodeType": "GraphQLField",
        "endLine": 15,
        "endColumn": 15,
        "fix": {
          "range": [150, 155],
          "text": ""
        }
      },
      {
        "ruleId": "graphql-lint-unused-fields",
        "severity": 2,
        "message": "Field 'phone' was requested but not used",
        "line": 16,
        "column": 12,
        "nodeType": "GraphQLField",
        "endLine": 16,
        "endColumn": 16,
        "fix": {
          "range": [160, 165],
          "text": ""
        }
      }
    ],
    "errorCount": 2,
    "warningCount": 0,
    "fixableErrorCount": 2,
    "fixableWarningCount": 0,
    "source": "query GetUser {\\n  user {\\n    id\\n    name\\n    email\\n    phone\\n  }\\n}"
  },
  {
    "filePath": "/path/to/components/UserProfile.tsx",
    "messages": [
      {
        "ruleId": "graphql-lint-unused-fields",
        "severity": 2,
        "message": "Field 'lastLogin' was requested but not used",
        "line": 25,
        "column": 5,
        "nodeType": "GraphQLField",
        "endLine": 25,
        "endColumn": 13,
        "fix": {
          "range": [250, 258],
          "text": ""
        }
      }
    ],
    "errorCount": 1,
    "warningCount": 0,
    "fixableErrorCount": 1,
    "fixableWarningCount": 0,
    "source": "query GetUserProfile {\\n  user {\\n    profile {\\n      name\\n      avatar\\n      lastLogin\\n    }\\n  }\\n}"
  }
]`;

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