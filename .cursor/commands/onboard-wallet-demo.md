---
description: Interactive Wallet Onboarding Demo Generator
argument-hint: [--config=path/to/config.json] [--output=demo/]
category: demo
feature: onboarding
---

# /onboard-wallet-demo

Generates interactive wallet onboarding demos based on configuration settings.
Creates live, interactive demonstrations of wallet setup and authentication flows.

## USAGE:
```bash
# Generate demo with default config
/onboard-wallet-demo

# Use custom configuration
/onboard-wallet-demo --config=configs/demo-config.json

# Specify output directory
/onboard-wallet-demo --output=demos/wallet-onboarding/

# Generate multiple demo variants
/onboard-wallet-demo --variants=social,passkey,email
```

## WHAT IT GENERATES:
- **Interactive Onboarding Flows**
  - Social login demonstrations
  - Passkey authentication demos
  - Email-based setup flows
  - Multi-step wallet creation

- **Configuration-Based Demos**
  - Custom branding and theming
  - Different authentication methods
  - Various UI layouts and styles
  - Mobile and desktop variants

- **Documentation and Examples**
  - Step-by-step guides
  - Code snippets and examples
  - Best practices demonstrations
  - Troubleshooting scenarios

## OUTPUT:
- Interactive HTML/CSS/JS demos
- Configuration files
- Documentation and guides
- Code examples and snippets
- Screenshots and videos

## PERMISSIONS:
- Can be triggered by developers, maintainers, demo team
- Requires access to wallet components
- Generates public-facing demos

## EXAMPLES:

### Basic Demo Generation
```bash
/onboard-wallet-demo
# Generates standard onboarding demo
```

### Custom Configuration Demo
```bash
/onboard-wallet-demo --config=demos/custom-config.json
# Uses custom configuration for demo
```

### Multiple Variants
```bash
/onboard-wallet-demo --variants=social,passkey,email
# Generates demos for different auth methods
```

## INTEGRATION:
- Demo site deployment
- Documentation site integration
- Marketing material generation
- Developer onboarding tools
