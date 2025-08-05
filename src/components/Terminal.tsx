import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal as TerminalIcon, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Terminal = () => {
  const { t } = useLanguage();
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const commands = [
    "npx graphql-lint-unused-fields /your/project",
    "npx graphql-lint-pipeline /your/project --format console,json",
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <section id="terminal" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("terminal.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("terminal.demo")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-900 border-slate-700 overflow-hidden">
            <CardHeader className="bg-slate-800 border-b border-slate-700">
              <CardTitle className="flex items-center text-slate-300">
                <TerminalIcon className="w-5 h-5 mr-2" />
                Terminal
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <p className="text-slate-400 mb-4">
                    {t("terminal.commands")}
                  </p>

                  {commands.map((command, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex items-center justify-between bg-slate-800 rounded-lg p-4 border border-slate-700">
                        <code className="text-green-400 flex-1 font-mono text-sm md:text-base">
                          $ {command}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(command)}
                          className="text-slate-400 hover:text-white"
                        >
                          <Copy className="w-4 h-4" />
                          {copiedCommand === command ? "Copied!" : "Copy"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sample Output */}
                <div className="mt-8">
                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <div className="text-slate-300 font-mono text-sm">
                      <div className="text-cyan-400 font-bold mb-4">
                        🔍 GRAPHQL LINT - ANALYSIS RESULT
                      </div>

                      <div className="mb-4">
                        <div className="text-cyan-400 font-semibold">
                          📊 GENERAL STATISTICS:
                        </div>
                        <div className="ml-4 mt-2">
                          <div>
                            {" "}
                            🎯 Queries analyzed:{" "}
                            <span className="text-green-400">42</span>
                          </div>
                          <div>
                            {" "}
                            📋 Fields found:{" "}
                            <span className="text-blue-400">156</span>
                          </div>
                          <div>
                            {" "}
                            ✅ Fields in use:{" "}
                            <span className="text-green-400">142 (91%)</span>
                          </div>
                          <div>
                            {" "}
                            ❌ Unused fields:{" "}
                            <span className="text-red-400">14 (9%)</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-red-400 font-semibold">
                          🚨 These are the unused fields in your GraphQL
                          queries:
                        </div>
                      </div>

                      <div className="ml-4">
                        <div className="text-blue-400">
                          🔹 GetUser (3 unused fields){" "}
                          <span className="text-slate-400">
                            [/path/to/file.ts]
                          </span>
                        </div>
                        <div className="ml-4 mt-1">
                          <div>
                            {" "}
                            • <span className="text-yellow-400">
                              email
                            </span>{" "}
                            <span className="text-slate-400">(line 15:10)</span>
                          </div>
                          <div className="ml-6 text-slate-400">
                            📁 File: /path/to/file.ts
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
