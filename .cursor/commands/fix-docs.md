---
description: Documentation Fixer and Generator
argument-hint: [component-name] [--type=api|guide|example]
category: documentation
feature: docs
---

# /fix-docs

Automatically fixes, generates, and updates documentation for components, APIs, and guides.
Ensures consistent documentation quality across the entire codebase.

## USAGE:
```bash
# Fix all documentation issues
/fix-docs

# Fix specific component documentation
/fix-docs ConnectWallet --type=api

# Generate example documentation
/fix-docs OrbInput --type=example

# Update guide documentation
/fix-docs onboarding --type=guide
```

## WHAT IT FIXES:
- **Component Documentation**
  - Missing JSDoc comments
  - Incomplete prop descriptions
  - Missing usage examples
  - Outdated API references

- **API Documentation**
  - Method signatures and parameters
  - Return value descriptions
  - Error handling documentation
  - Type definitions

- **Guide Documentation**
  - Step-by-step tutorials
  - Code examples and snippets
  - Best practices and patterns
  - Troubleshooting guides

## OUTPUT:
- Updated JSDoc comments
- Generated API documentation
- Example code snippets
- Usage guides and tutorials
- Markdown documentation files

## PERMISSIONS:
- Can be triggered by developers, maintainers, documentation team
- Requires write access to documentation files
- Integrates with documentation generation pipeline

## EXAMPLES:

### Fix Component Docs
```bash
/fix-docs PixelBlastCSS
# Generates complete JSDoc for PixelBlastCSS component
```

### Generate API Docs
```bash
/fix-docs usePerformance --type=api
# Generates API documentation for usePerformance hook
```

### Create Usage Guide
```bash
/fix-docs onboarding --type=guide
# Creates comprehensive onboarding guide
```

## INTEGRATION:
- Automatic documentation generation
- CI/CD pipeline integration
- Documentation site updates
- Version control integration
