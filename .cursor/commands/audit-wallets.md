---
description: End-to-End Smart Wallet Auditor Command
argument-hint: [file1.tsx] [file2.js] [...]
category: audit
feature: wallet
---

# /wallet-auditor

Runs comprehensive audit of smart wallet flows, onboarding UX, and transaction patterns.
This command performs end-to-end analysis of wallet functionality and user experience.

## USAGE:
```bash
# Audit all changed files in current PR
/wallet-auditor

# Audit specific files
/wallet-auditor components/libraries/ConnectWallet.tsx components/libraries/OrbInput.tsx

# Audit entire wallet core
/wallet-auditor components/libraries/
```

## WHAT IT CHECKS:
- **Onboarding Flow Analysis**
  - Friction points and user confirmation steps
  - Social login integration completeness
  - Mobile responsiveness and accessibility
  - Error handling and retry mechanisms

- **Transaction Flow Validation**
  - Gas sponsorship configuration
  - User confirmation requirements
  - Error handling and fallback mechanisms
  - Performance optimization

- **Configuration Validation**
  - Smart wallet config completeness
  - AA (Account Abstraction) setup validation
  - Paymaster configuration
  - Network compatibility

- **Performance Analysis**
  - WebGL component optimization
  - CSS alternative availability
  - Memory usage and FPS monitoring
  - Mobile performance metrics

## OUTPUT:
- Detailed friction analysis report
- UX improvement suggestions
- Performance optimization recommendations
- Configuration validation results
- Inline code suggestions

## PERMISSIONS:
- Can be triggered by developers, maintainers, automated bots
- Requires access to wallet core components
- Integrates with CI/CD pipeline

## EXAMPLES:

### Basic Audit
```bash
/wallet-auditor
# Audits all wallet-related files in current branch
```

### Specific File Audit
```bash
/wallet-auditor components/libraries/ConnectWallet.tsx
# Audits only the ConnectWallet component
```

### Full Wallet Core Audit
```bash
/wallet-auditor components/libraries/ lib/wallet/ app/wallet/
# Audits entire wallet ecosystem
```

## INTEGRATION:
- GitHub Actions workflow integration
- PR comment automation
- Slack/Teams notifications
- JIRA ticket creation for critical issues
