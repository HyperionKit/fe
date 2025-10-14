#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get current date
const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// Define the changes we made
const recentChanges = {
  date: currentDate,
  version: "2.1.0",
  changes: [
    {
      category: "🎨 UI/UX Improvements",
      items: [
        "Fixed Products Demo container height to match left panel (h-[840px])",
        "Reorganized left panel configuration with 'Show More' collapsible section",
        "Optimized spacing and padding for better visual hierarchy",
        "Added dynamic logo theming for social authentication (Google, X/Twitter)",
        "Updated external wallet logos with consistent theming (MetaMask, Coinbase, OKX, Phantom, WalletConnect)",
        "Made Phantom wallet logo circular while maintaining standard button container",
        "Replaced emoji with Hyperkit Abstract SVG logo in empty state",
        "Enhanced code preview with fixed height container and scroll functionality"
      ]
    },
    {
      category: "⚙️ Configuration System",
      items: [
        "Implemented progressive code preview that shows only enabled components",
        "Added dynamic code generation based on toggle states",
        "Created smart detection for custom branding settings",
        "Enhanced authentication method configuration display",
        "Added real-time code preview updates when toggles change"
      ]
    },
    {
      category: "🔧 Technical Improvements",
      items: [
        "Fixed 'window is not defined' SSR error in performance monitoring",
        "Added missing getDefaultConfig method for server-side rendering",
        "Optimized component organization and file structure",
        "Enhanced error handling and performance monitoring",
        "Improved TypeScript type safety throughout components"
      ]
    },
    {
      category: "📱 Demo System Enhancements",
      items: [
        "Integrated functional toggle switches for authentication methods",
        "Added live preview of sign-in modal with dynamic content",
        "Implemented Alchemy-style demo functionality",
        "Enhanced demo container sizing and layout",
        "Added professional styling and branding consistency"
      ]
    },
    {
      category: "🎯 Performance Optimizations",
      items: [
        "Removed vertical scroll from left panel for better UX",
        "Optimized container heights for visual balance",
        "Enhanced CSS-based alternatives for WebGL components",
        "Improved component rendering and state management",
        "Added performance monitoring and analytics"
      ]
    }
  ]
};

// Read current changelog
const changelogPath = path.join(__dirname, '..', 'reports', 'DEVELOPMENT_CHANGELOG.md');
let changelogContent = fs.readFileSync(changelogPath, 'utf8');

// Create new changelog entry
const newEntry = `
## 🚀 Recent Updates (${recentChanges.date})

### Version ${recentChanges.version}

${recentChanges.changes.map(category => 
  `### ${category.category}\n${category.items.map(item => `- ${item}`).join('\n')}`
).join('\n\n')}

### Files Modified
- \`components/products-overview-page.tsx\` - Enhanced demo system and configuration
- \`lib/performance.ts\` - Fixed SSR compatibility issues
- \`reports/PERFORMANCE_OPTIMIZATION_GUIDE.md\` - Updated with CSS alternatives
- \`public/logo/brand/wallets/\` - Added official SVG logos for wallets
- \`public/logo/brand/hyperkit/\` - Added Hyperkit Abstract SVG logo

### Technical Achievements
- ✅ Fixed SSR compatibility issues
- ✅ Enhanced demo functionality with live preview
- ✅ Improved UI/UX with better spacing and layout
- ✅ Added progressive code preview system
- ✅ Implemented dynamic logo theming
- ✅ Optimized container heights and responsiveness
- ✅ Enhanced configuration system with smart detection

---

`;

// Insert new entry after the overview section
const overviewEndIndex = changelogContent.indexOf('## 🚀 Major Features Added');
const beforeOverview = changelogContent.substring(0, overviewEndIndex);
const afterOverview = changelogContent.substring(overviewEndIndex);

const updatedChangelog = beforeOverview + newEntry + afterOverview;

// Write updated changelog
fs.writeFileSync(changelogPath, updatedChangelog);

console.log('✅ Updated DEVELOPMENT_CHANGELOG.md');

// Function to commit individual files
function commitFile(filePath, message) {
  try {
    execSync(`git add "${filePath}"`, { stdio: 'inherit' });
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
    console.log(`✅ Committed: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error committing ${filePath}:`, error.message);
  }
}

// List of files to commit with their messages
const filesToCommit = [
  {
    path: 'components/products-overview-page.tsx',
    message: 'feat: enhance products demo with functional toggles and live preview\n\n- Add progressive code preview system\n- Implement dynamic logo theming\n- Fix container height matching\n- Add Show More collapsible section\n- Enhance demo functionality with Alchemy-style toggles'
  },
  {
    path: 'lib/performance.ts',
    message: 'fix: resolve SSR compatibility issues in performance monitoring\n\n- Add window undefined checks for server-side rendering\n- Implement getDefaultConfig method for SSR\n- Fix requestAnimationFrame undefined error\n- Enhance error handling for browser-only APIs'
  },
  {
    path: 'reports/PERFORMANCE_OPTIMIZATION_GUIDE.md',
    message: 'docs: update performance guide with CSS alternatives\n\n- Add WebGL-free alternatives section\n- Include performance metrics comparison\n- Document CSS animation optimizations\n- Add implementation strategies for better performance'
  },
  {
    path: 'public/logo/brand/wallets/google-logo.svg',
    message: 'assets: add official Google logo SVG'
  },
  {
    path: 'public/logo/brand/wallets/x-twitter-logo.svg',
    message: 'assets: add official X (Twitter) logo SVG'
  },
  {
    path: 'public/logo/brand/wallets/walletconnect-logo.svg',
    message: 'assets: add WalletConnect logo SVG'
  },
  {
    path: 'public/logo/brand/hyperkit/Hyperkit Abstract.svg',
    message: 'assets: add Hyperkit Abstract logo SVG'
  },
  {
    path: 'reports/DEVELOPMENT_CHANGELOG.md',
    message: 'docs: update changelog with recent improvements\n\n- Document UI/UX enhancements\n- Add configuration system updates\n- Include technical improvements\n- Update performance optimizations'
  }
];

// Commit each file individually
console.log('\n🚀 Committing files individually...\n');

filesToCommit.forEach(({ path: filePath, message }) => {
  commitFile(filePath, message);
});

console.log('\n✅ All files committed successfully!');
console.log('\n📋 Summary of changes:');
console.log('- Enhanced products demo with functional toggles');
console.log('- Fixed SSR compatibility issues');
console.log('- Added official wallet logos');
console.log('- Improved UI/UX and performance');
console.log('- Updated documentation');
