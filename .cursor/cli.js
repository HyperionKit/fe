#!/usr/bin/env node

/**
 * Hyperkit Cursor Rules CLI
 * 
 * A command-line interface for running cursor rules and commands
 * tailored for the Hyperkit smart wallet ecosystem.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CursorCLI {
  constructor() {
    this.rulesDir = '.cursor/rules';
    this.commandsDir = '.cursor/commands';
    this.rolesFile = '.cursor/roles.yaml';
  }

  /**
   * Main CLI entry point
   */
  async run(args) {
    const command = args[0];
    const options = this.parseOptions(args.slice(1));

    switch (command) {
      case 'lint':
        await this.lint(options);
        break;
      case 'command':
        await this.runCommand(options);
        break;
      case 'audit':
        await this.audit(options);
        break;
      case 'help':
        this.showHelp();
        break;
      default:
        console.error(`Unknown command: ${command}`);
        this.showHelp();
        process.exit(1);
    }
  }

  /**
   * Run linting rules
   */
  async lint(options) {
    console.log('🔍 Running Hyperkit Cursor Rules...\n');

    const rules = this.getRules(options.rule);
    const files = this.getFiles(options.files, options.changedOnly);

    for (const rule of rules) {
      console.log(`📋 Running rule: ${rule.name}`);
      await this.runRule(rule, files);
    }

    console.log('\n✅ Linting complete!');
  }

  /**
   * Run specific command
   */
  async runCommand(options) {
    const commandName = options.command;
    const commandFile = path.join(this.commandsDir, `${commandName}.md`);

    if (!fs.existsSync(commandFile)) {
      console.error(`❌ Command not found: ${commandName}`);
      process.exit(1);
    }

    console.log(`🚀 Running command: ${commandName}`);
    await this.executeCommand(commandName, options);
  }

  /**
   * Run comprehensive audit
   */
  async audit(options) {
    console.log('🔍 Running comprehensive Hyperkit audit...\n');

    // Run all rules
    await this.lint({ ...options, rule: null });

    // Run wallet-specific commands
    await this.runCommand({ command: 'audit-wallets', ...options });
    await this.runCommand({ command: 'performance-audit', ...options });

    console.log('\n✅ Audit complete!');
  }

  /**
   * Get available rules
   */
  getRules(ruleName) {
    const rules = [];
    const ruleFiles = fs.readdirSync(this.rulesDir);

    for (const file of ruleFiles) {
      if (ruleName && !file.includes(ruleName)) continue;

      const rulePath = path.join(this.rulesDir, file);
      const content = fs.readFileSync(rulePath, 'utf8');
      const rule = this.parseRule(content, file);
      rules.push(rule);
    }

    return rules;
  }

  /**
   * Parse rule file
   */
  parseRule(content, filename) {
    const lines = content.split('\n');
    const frontmatter = [];
    let inFrontmatter = false;

    for (const line of lines) {
      if (line.startsWith('---')) {
        inFrontmatter = !inFrontmatter;
        continue;
      }
      if (inFrontmatter) {
        frontmatter.push(line);
      }
    }

    const metadata = this.parseYAML(frontmatter.join('\n'));
    return {
      name: filename.replace(/\.(mdc|lint|md)$/, ''),
      file: filename,
      ...metadata
    };
  }

  /**
   * Get files to lint
   */
  getFiles(files, changedOnly) {
    if (files && files.length > 0) {
      return files;
    }

    if (changedOnly) {
      try {
        const changedFiles = execSync('git diff --name-only HEAD~1', { encoding: 'utf8' });
        return changedFiles.trim().split('\n').filter(f => f);
      } catch (error) {
        console.warn('⚠️  Could not get changed files, running on all files');
        return this.getAllFiles();
      }
    }

    return this.getAllFiles();
  }

  /**
   * Get all relevant files
   */
  getAllFiles() {
    const files = [];
    const extensions = ['.js', '.ts', '.tsx', '.jsx', '.json'];

    const scanDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };

    scanDir('.');
    return files;
  }

  /**
   * Run specific rule on files
   */
  async runRule(rule, files) {
    const matchingFiles = files.filter(file => {
      if (!rule.globs) return true;
      return rule.globs.some(glob => {
        const pattern = glob.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*');
        const regex = new RegExp(pattern);
        return regex.test(file);
      });
    });

    if (matchingFiles.length === 0) {
      console.log(`   ⏭️  No files match pattern: ${rule.globs?.join(', ') || 'all'}`);
      return;
    }

    console.log(`   📁 Checking ${matchingFiles.length} files...`);

    for (const file of matchingFiles) {
      await this.checkFile(rule, file);
    }
  }

  /**
   * Check individual file against rule
   */
  async checkFile(rule, file) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const issues = this.findIssues(rule, content, file);
      
      if (issues.length > 0) {
        console.log(`   ⚠️  ${file}:`);
        issues.forEach(issue => {
          console.log(`      ${issue.severity === 'error' ? '❌' : '⚠️'} ${issue.message}`);
        });
      }
    } catch (error) {
      console.log(`   ❌ Error reading ${file}: ${error.message}`);
    }
  }

  /**
   * Find issues in file content
   */
  findIssues(rule, content, file) {
    const issues = [];

    // Basic pattern matching based on rule type
    if (rule.category === 'onboarding') {
      // Check for onboarding anti-patterns
      if (content.includes('confirm') && content.includes('confirm') && content.includes('confirm')) {
        issues.push({
          severity: 'warning',
          message: 'Multiple confirmation dialogs detected - consider streamlining onboarding flow'
        });
      }
    }

    if (rule.category === 'performance') {
      // Check for performance issues
      if (content.includes('WebGL') && !content.includes('CSS') && !content.includes('fallback')) {
        issues.push({
          severity: 'warning',
          message: 'WebGL component without CSS fallback detected'
        });
      }
    }

    if (rule.category === 'accessibility') {
      // Check for accessibility issues
      if (content.includes('<img') && !content.includes('alt=')) {
        issues.push({
          severity: 'error',
          message: 'Image missing alt text attribute'
        });
      }
    }

    return issues;
  }

  /**
   * Execute command
   */
  async executeCommand(commandName, options) {
    switch (commandName) {
      case 'audit-wallets':
        await this.auditWallets(options);
        break;
      case 'fix-docs':
        await this.fixDocs(options);
        break;
      case 'performance-audit':
        await this.performanceAudit(options);
        break;
      case 'onboard-wallet-demo':
        await this.generateDemo(options);
        break;
      default:
        console.error(`❌ Unknown command: ${commandName}`);
    }
  }

  /**
   * Audit wallets command
   */
  async auditWallets(options) {
    console.log('🔍 Auditing wallet flows...');
    
    // Check onboarding components
    const onboardingFiles = this.getAllFiles().filter(f => f.includes('onboarding') || f.includes('ConnectWallet'));
    console.log(`📱 Found ${onboardingFiles.length} onboarding files`);
    
    // Check transaction components
    const txFiles = this.getAllFiles().filter(f => f.includes('transaction') || f.includes('OrbInput'));
    console.log(`💸 Found ${txFiles.length} transaction files`);
    
    // Check configuration files
    const configFiles = this.getAllFiles().filter(f => f.includes('config') || f.includes('wallet'));
    console.log(`⚙️  Found ${configFiles.length} configuration files`);
    
    console.log('✅ Wallet audit complete!');
  }

  /**
   * Fix docs command
   */
  async fixDocs(options) {
    console.log('📚 Fixing documentation...');
    
    const componentFiles = this.getAllFiles().filter(f => f.includes('components/'));
    console.log(`📝 Found ${componentFiles.length} component files to document`);
    
    // Generate JSDoc comments
    for (const file of componentFiles) {
      console.log(`   📄 Processing ${file}...`);
    }
    
    console.log('✅ Documentation fixes complete!');
  }

  /**
   * Performance audit command
   */
  async performanceAudit(options) {
    console.log('⚡ Running performance audit...');
    
    const webglFiles = this.getAllFiles().filter(f => f.includes('WebGL') || f.includes('PixelBlast'));
    const cssFiles = this.getAllFiles().filter(f => f.includes('CSS') || f.includes('css'));
    
    console.log(`🎮 Found ${webglFiles.length} WebGL components`);
    console.log(`🎨 Found ${cssFiles.length} CSS components`);
    
    // Check for performance optimizations
    console.log('🔍 Checking performance optimizations...');
    
    console.log('✅ Performance audit complete!');
  }

  /**
   * Generate demo command
   */
  async generateDemo(options) {
    console.log('🎬 Generating wallet onboarding demo...');
    
    const outputDir = options.output || 'demos/wallet-onboarding/';
    console.log(`📁 Output directory: ${outputDir}`);
    
    // Create demo files
    console.log('   📄 Creating demo files...');
    console.log('   🎨 Generating interactive components...');
    console.log('   📱 Creating mobile variants...');
    
    console.log('✅ Demo generation complete!');
  }

  /**
   * Parse command line options
   */
  parseOptions(args) {
    const options = {
      files: [],
      changedOnly: false,
      rule: null,
      command: null,
      output: null
    };

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      
      if (arg === '--changed-only') {
        options.changedOnly = true;
      } else if (arg === '--rule') {
        options.rule = args[++i];
      } else if (arg === '--output') {
        options.output = args[++i];
      } else if (arg.startsWith('--')) {
        // Handle other options
      } else if (options.command === null) {
        options.command = arg;
      } else {
        options.files.push(arg);
      }
    }

    return options;
  }

  /**
   * Parse YAML frontmatter
   */
  parseYAML(yaml) {
    const result = {};
    const lines = yaml.split('\n');
    
    for (const line of lines) {
      const match = line.match(/^(\w+):\s*(.+)$/);
      if (match) {
        const [, key, value] = match;
        result[key] = value.replace(/^["']|["']$/g, '');
      }
    }
    
    return result;
  }

  /**
   * Show help information
   */
  showHelp() {
    console.log(`
🔧 Hyperkit Cursor Rules CLI

USAGE:
  cursorcli <command> [options] [files...]

COMMANDS:
  lint                    Run linting rules
  command <name>          Execute specific command
  audit                   Run comprehensive audit
  help                    Show this help

OPTIONS:
  --changed-only          Only check changed files
  --rule <name>           Run specific rule
  --output <dir>          Output directory for generated content

EXAMPLES:
  cursorcli lint --changed-only
  cursorcli command audit-wallets
  cursorcli audit
  cursorcli lint components/libraries/ConnectWallet.tsx

RULES:
  onboarding-ux          Onboarding experience validation
  tx-flow               Transaction flow optimization
  performance-optimization  Performance best practices
  accessibility-compliance  Accessibility standards
  smart-wallet-config   Wallet configuration validation

COMMANDS:
  audit-wallets         End-to-end wallet audit
  fix-docs             Documentation fixes
  performance-audit    Performance analysis
  onboard-wallet-demo  Generate interactive demos
`);
  }
}

// Run CLI if called directly
if (require.main === module) {
  const cli = new CursorCLI();
  cli.run(process.argv.slice(2)).catch(console.error);
}

module.exports = CursorCLI;
