# GraphQL Lint Unused Fields - Tiny GraphQL Tool

🚀 **Tiny GraphQL tool to detect unused fields in GraphQL queries**. Lightweight CLI tool supporting React, TypeScript, aliases, cross-file analysis and CI/CD integration. Perfect for GraphQL linting and optimization.

## 🎯 What is GraphQL Lint Unused Fields?

**GraphQL Lint Unused Fields** is a **Tiny GraphQL tool** designed to help developers identify and remove unused fields from their GraphQL queries. This lightweight CLI tool provides comprehensive GraphQL linting capabilities with support for:

- **GraphQL Lint Analysis**: Detection of `gql` and `graphql` queries
- **Tiny GraphQL CLI Tool**: Lightweight command-line interface
- **GraphQL Aliases Support**: Complete alias mapping for GraphQL linting
- **Cross-file GraphQL Analysis**: Tiny GraphQL tool tracking between TypeScript/JavaScript files
- **React GraphQL Lint Support**: JSX, hooks, destructuring analysis for GraphQL
- **Tiny GraphQL Pipeline**: Configurable pipeline with customizable steps

## ✨ Key Features - Tiny GraphQL Tool

### 🔍 GraphQL Lint Analysis
Tiny GraphQL tool for detecting `gql` and `graphql` queries with precision.

### 🏷️ GraphQL Aliases Support
Complete alias mapping for GraphQL linting and optimization.

### 📁 Cross-file GraphQL Analysis
Tiny GraphQL tool tracking between TypeScript/JavaScript files for comprehensive analysis.

### ⚛️ React GraphQL Lint Support
JSX, hooks, destructuring analysis for GraphQL development.

### 💻 Tiny GraphQL CLI Tool
Lightweight CLI for CI/CD integration and development workflows.

### 🔄 GraphQL Lint Pipeline
Tiny GraphQL pipeline with customizable steps (scan, extract, analyze, validate, report).

### 📊 GraphQL Lint Output Formats
Console, JSON, ESLint formats for GraphQL linting integration.

### ⚙️ Tiny GraphQL Configuration
JSON/YAML configuration for GraphQL lint tool customization.

## 🚀 Quick Installation

```bash
# Install the Tiny GraphQL tool
npm install graphql-lint-unused-fields

# Or use yarn
yarn add graphql-lint-unused-fields
```

## 💻 Tiny GraphQL CLI Usage

### Basic Usage
```bash
# Run GraphQL lint analysis
npx graphql-lint-unused-fields

# Analyze specific directory
npx graphql-lint-unused-fields ./src

# Use with configuration file
npx graphql-lint-unused-fields --config .graphql-lint.json
```

### Main GraphQL lint commands:
- `--scan`: Scan files for GraphQL queries
- `--extract`: Extract GraphQL queries from files
- `--analyze`: Analyze field usage in GraphQL queries
- `--validate`: Validate GraphQL query structure
- `--report`: Generate GraphQL lint reports

## 🔄 Tiny GraphQL Pipeline

Tiny GraphQL pipeline system with 5 customizable steps:

1. **Scan**: GraphQL file scanning
2. **Extract**: GraphQL query extraction
3. **Analyze**: GraphQL field usage analysis
4. **Validate**: GraphQL query validation
5. **Report**: GraphQL lint report generation

## 📊 Tiny GraphQL Output Examples

### Tiny GraphQL formatted console with statistics
```
Found 15 GraphQL queries
Unused fields detected: 8
Optimization potential: 23%
```

### Tiny GraphQL structured JSON for processing
```json
{
  "queries": 15,
  "unusedFields": 8,
  "optimization": "23%"
}
```

### Tiny GraphQL ESLint format for integration
```
warning: Unused field 'description' in query 'getUser'
warning: Unused field 'createdAt' in query 'getPosts'
```

## 📚 Tiny GraphQL Complete Documentation

- **Tiny GraphQL Core Package README**: [Core Documentation](https://github.com/FrancoAguzzi/graphql-lint-unused-fields)
- **Tiny GraphQL CLI Documentation**: [CLI Guide](https://github.com/FrancoAguzzi/graphql-lint-unused-fields#cli-usage)
- **Tiny GraphQL Pipeline Configuration**: [Pipeline Setup](https://github.com/FrancoAguzzi/graphql-lint-unused-fields#pipeline)
- **Tiny GraphQL Aliases Mapping**: [Aliases Guide](https://github.com/FrancoAguzzi/graphql-lint-unused-fields#aliases)

## 🔗 Important Links

- **NPM Package**: [graphql-lint-unused-fields](https://www.npmjs.com/package/graphql-lint-unused-fields)
- **GitHub Repository**: [GraphQL Lint Unused Fields](https://github.com/FrancoAguzzi/graphql-lint-unused-fields)
- **Personal GitHub**: [Franco Aguzzi](https://github.com/FrancoAguzzi)
- **Organization GitHub**: [Regenerating World](https://github.com/regenerating-world)

## 🤝 Contributing

We welcome contributions to make this **Tiny GraphQL tool** even better! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

If you need help with this **Tiny GraphQL tool**, please:

1. Check the [documentation](https://github.com/FrancoAguzzi/graphql-lint-unused-fields)
2. Search [existing issues](https://github.com/FrancoAguzzi/graphql-lint-unused-fields/issues)
3. Create a [new issue](https://github.com/FrancoAguzzi/graphql-lint-unused-fields/issues/new)

---

**GraphQL Lint Unused Fields** - The ultimate **Tiny GraphQL tool** for detecting unused fields in GraphQL queries. Optimize your GraphQL queries with our lightweight CLI tool designed for modern development workflows.
