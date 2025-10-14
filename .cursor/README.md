# Hyperkit Cursor Rules & Commands

A comprehensive foundation logic and rule system inspired by Alchemy's approach, but uniquely tailored for the Hyperkit smart wallet ecosystem. This system provides automated quality assurance, UX validation, and performance optimization for smart wallet development.

## 🏗️ Architecture

### **Rule Engines** (`.cursor/rules/`)
- **onboarding-ux.mdc** - Ensures frictionless onboarding experiences
- **tx-flow.lint** - Validates zero-friction transaction flows
- **performance-optimization.mdc** - Enforces performance best practices
- **accessibility-compliance.mdc** - Ensures WCAG 2.1 AA compliance
- **smart-wallet-config.mdc** - Validates smart wallet configurations

### **Commands** (`.cursor/commands/`)
- **audit-wallets.md** - End-to-end wallet flow auditor
- **fix-docs.md** - Documentation fixer and generator
- **performance-audit.md** - Performance analysis and optimization
- **onboard-wallet-demo.md** - Interactive demo generator

### **Roles** (`.cursor/roles.yaml`)
- **pr-reviewer** - Code review and quality assurance
- **ux-specialist** - User experience and accessibility
- **performance-engineer** - Performance optimization
- **wallet-auditor** - Smart wallet and AA configurations
- **security-auditor** - Security and vulnerability assessment

## 🚀 Quick Start

### **Installation**
```bash
# No installation required - uses Node.js built-in modules
```

### **Basic Usage**
```bash
# Run all linting rules
npm run cursor:lint

# Run comprehensive audit
npm run cursor:audit

# Run specific command
npm run cursor:wallet-audit
npm run cursor:performance-audit
npm run cursor:fix-docs
npm run cursor:demo

# Get help
npm run cursor:help
```

### **CLI Usage**
```bash
# Lint changed files only
node .cursor/cli.js lint --changed-only

# Run specific rule
node .cursor/cli.js lint --rule onboarding-ux

# Run specific command
node .cursor/cli.js command audit-wallets

# Run comprehensive audit
node .cursor/cli.js audit
```

## 📋 Rules Overview

### **Onboarding UX Rule**
- **Purpose**: Ensures frictionless onboarding for new wallet users
- **Checks**: 
  - Maximum 2 user confirmations before dashboard
  - Social/passkey/email authentication options
  - Mobile responsiveness
  - Error handling and retry mechanisms
- **Files**: `components/**/*onboarding*`, `components/libraries/ConnectWallet.tsx`

### **Transaction Flow Rule**
- **Purpose**: Validates zero-friction transaction flows
- **Checks**:
  - Automatic gas sponsorship
  - Maximum 3 confirmations for token swaps
  - Transparent fee display
  - Real-time status updates
- **Files**: `components/libraries/**/*`, `lib/**/*`, `app/**/*transaction*`

### **Performance Optimization Rule**
- **Purpose**: Enforces performance best practices
- **Checks**:
  - WebGL components with CSS alternatives
  - Proper memoization (React.memo, useMemo, useCallback)
  - Lazy loading for heavy components
  - Performance monitoring integration
- **Files**: `components/libraries/**/*`, `app/**/*`, `lib/**/*`

### **Accessibility Compliance Rule**
- **Purpose**: Ensures WCAG 2.1 AA compliance
- **Checks**:
  - Alt text for images and icons
  - ARIA labels for interactive elements
  - Color contrast ratios
  - Keyboard navigation support
- **Files**: `components/**/*`, `app/**/*`

### **Smart Wallet Config Rule**
- **Purpose**: Validates smart wallet configurations
- **Checks**:
  - Paymaster configuration for gasless transactions
  - Valid AA configuration parameters
  - Network compatibility
  - Security best practices
- **Files**: `**/*config*`, `**/*wallet*`, `**/*aa*`

## 🔧 Commands Overview

### **Audit Wallets**
```bash
npm run cursor:wallet-audit
```
- Analyzes onboarding flows for friction points
- Validates transaction flow efficiency
- Checks smart wallet configuration completeness
- Provides UX improvement suggestions

### **Performance Audit**
```bash
npm run cursor:performance-audit
```
- Analyzes WebGL component performance
- Validates CSS alternative implementations
- Checks bundle size and loading performance
- Provides optimization recommendations

### **Fix Documentation**
```bash
npm run cursor:fix-docs
```
- Generates JSDoc comments for components
- Creates API documentation
- Updates usage guides and examples
- Ensures documentation consistency

### **Generate Demo**
```bash
npm run cursor:demo
```
- Creates interactive wallet onboarding demos
- Generates configuration-based examples
- Produces mobile and desktop variants
- Creates documentation and guides

## 🎯 Role-Based Workflow

### **Pull Request Workflow**
1. **Code Changes** trigger automatic rule checks
2. **Role Assignment** based on file patterns and labels
3. **Automated Reviews** by relevant specialists
4. **PR Comments** with detailed feedback and suggestions

### **Role Assignments**
- **Wallet Components** → `wallet-auditor`, `security-auditor`
- **Onboarding/Auth** → `ux-specialist`, `mobile-specialist`
- **Performance/WebGL** → `performance-engineer`
- **Documentation** → `documentation-maintainer`
- **Security Issues** → `security-auditor`, `wallet-auditor`

## 🔄 CI/CD Integration

### **GitHub Actions**
- **Automatic Triggers**: Pull requests, pushes to main branches
- **Manual Triggers**: Workflow dispatch with scope selection
- **Multi-Job Pipeline**: Linting, auditing, performance, documentation
- **PR Comments**: Automated feedback with results and suggestions

### **Workflow Features**
- **Changed Files Only**: Efficient processing of only modified files
- **Scope Selection**: Choose specific audit areas (onboarding, performance, wallet, docs)
- **Device Testing**: Mobile and desktop specific testing
- **Artifact Generation**: Demo and documentation artifacts

## 📊 Monitoring & Analytics

### **Performance Metrics**
- FPS monitoring for WebGL components
- Memory usage tracking
- Bundle size analysis
- Loading performance metrics

### **Quality Metrics**
- Rule compliance rates
- UX friction detection
- Accessibility score
- Documentation coverage

### **Reporting**
- Inline code suggestions
- Detailed audit reports
- Performance recommendations
- Security vulnerability alerts

## 🛠️ Customization

### **Adding New Rules**
1. Create rule file in `.cursor/rules/`
2. Define frontmatter with metadata
3. Add rule logic to CLI
4. Update role assignments

### **Adding New Commands**
1. Create command file in `.cursor/commands/`
2. Implement command logic in CLI
3. Add to package.json scripts
4. Update GitHub Actions workflow

### **Modifying Roles**
1. Edit `.cursor/roles.yaml`
2. Update assignment rules
3. Modify permission levels
4. Test role assignments

## 🤝 Contributing

### **Rule Development**
- Follow existing rule patterns
- Include comprehensive examples
- Test with real codebase
- Document rule purpose and scope

### **Command Development**
- Implement proper error handling
- Provide clear output and feedback
- Include usage examples
- Test with various inputs

### **Role Management**
- Define clear responsibilities
- Avoid role conflicts
- Document permission levels
- Test assignment logic

## 📚 Examples

### **Rule Example**
```mdc
---
description: Custom Rule Example
globs: ["components/**/*.{js,ts,tsx}"]
severity: warning
category: custom
---

# Custom Rule

Description of what this rule checks.

FORBIDDEN:
- ❌ Pattern to avoid

ALLOWED:
- ✅ Recommended pattern
```

### **Command Example**
```bash
# Run custom command
node .cursor/cli.js command custom-command --option=value

# Run with specific files
node .cursor/cli.js lint components/MyComponent.tsx
```

## 🔗 Integration Points

- **ESLint**: Complementary to existing linting
- **TypeScript**: Type checking integration
- **Jest**: Test integration for rule validation
- **Storybook**: Component documentation integration
- **GitHub**: PR automation and feedback
- **Slack/Teams**: Notification integration

## 📈 Future Enhancements

- **AI-Powered Suggestions**: Machine learning for better recommendations
- **Visual Regression Testing**: Automated UI testing integration
- **Performance Budgets**: Automated performance threshold enforcement
- **Security Scanning**: Enhanced security vulnerability detection
- **Multi-Repository Support**: Cross-repository rule enforcement
- **Custom Rule Builder**: GUI for creating custom rules

---

**This system provides a comprehensive foundation for maintaining high-quality, performant, and user-friendly smart wallet applications while ensuring developer productivity and code consistency.**
