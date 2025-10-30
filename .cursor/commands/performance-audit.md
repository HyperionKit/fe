---
description: Performance Audit and Optimization Command
argument-hint: [--scope=webgl|css|all] [--device=mobile|desktop|all]
category: performance
feature: optimization
---

# /performance-audit

Comprehensive performance analysis and optimization recommendations for WebGL components, CSS alternatives, and overall application performance.

## USAGE:
```bash
# Full performance audit
/performance-audit

# WebGL-specific audit
/performance-audit --scope=webgl

# CSS alternatives audit
/performance-audit --scope=css

# Mobile performance audit
/performance-audit --device=mobile

# Desktop performance audit
/performance-audit --device=desktop
```

## WHAT IT ANALYZES:
- **WebGL Performance**
  - FPS monitoring and optimization
  - Memory usage analysis
  - GPU utilization metrics
  - Quality adjustment effectiveness

- **CSS Alternatives**
  - Animation performance
  - Hardware acceleration usage
  - Mobile optimization
  - Accessibility compliance

- **Overall Application**
  - Bundle size analysis
  - Loading performance
  - Runtime performance
  - Memory leaks detection

## OUTPUT:
- Performance metrics report
- Optimization recommendations
- Code suggestions for improvements
- Performance regression alerts
- Device-specific recommendations

## PERMISSIONS:
- Can be triggered by developers, maintainers, performance team
- Requires access to performance monitoring tools
- Integrates with CI/CD pipeline

## EXAMPLES:

### Full Performance Audit
```bash
/performance-audit
# Analyzes all performance aspects
```

### WebGL Performance Focus
```bash
/performance-audit --scope=webgl
# Focuses on WebGL component performance
```

### Mobile Performance Check
```bash
/performance-audit --device=mobile
# Analyzes mobile-specific performance
```

## INTEGRATION:
- Performance monitoring dashboard
- CI/CD performance gates
- Performance regression alerts
- Optimization recommendation system
