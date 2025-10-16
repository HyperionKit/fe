# Changelog Update Script

An intelligent, automated script that scans the entire repository for changes and updates the `DEVELOPMENT_CHANGELOG.md` file accordingly.

## 🚀 Features

### **Intelligent Change Detection**
- **Git Integration**: Automatically detects modified, added, and untracked files
- **Content Analysis**: Analyzes file content to understand the nature of changes
- **Smart Categorization**: Automatically categorizes changes based on file paths and content

### **Automatic Categorization**
- **🚀 New Features** (`feat`): Interactive components, demo systems, new functionality
- **🐛 Bug Fixes** (`fix`): Library files, utilities, error handling
- **📚 Documentation** (`docs`): Markdown files, reports, guides
- **🎨 UI/UX Improvements** (`style`): Component pages, UI enhancements
- **♻️ Code Refactoring** (`refactor`): Code structure improvements
- **⚡ Performance** (`perf`): Performance monitoring, optimization files
- **🧪 Testing** (`test`): Test files and testing infrastructure
- **🔧 Maintenance** (`chore`): General maintenance and updates
- **📦 Assets** (`assets`): Images, SVGs, fonts, and other static files
- **⚙️ Configuration** (`config`): Config files, package.json, build settings

### **Smart Content Analysis**
- **React Components**: Detects hooks usage, state management, styling
- **WebGL/3D**: Identifies Three.js, shader, and WebGL implementations
- **Performance**: Recognizes optimization and monitoring code
- **Documentation**: Analyzes markdown content and structure
- **Assets**: Handles binary files and visual assets

### **Version Management**
- **Automatic Versioning**: Increments version numbers (major/minor/patch)
- **Version Detection**: Reads current version from changelog
- **Configurable**: Easy to adjust version increment type

### **Individual File Commits**
- **Smart Commit Messages**: Generates appropriate commit messages based on file type and content
- **Conventional Commits**: Follows conventional commit format
- **Detailed Descriptions**: Includes specific details about changes
- **Error Handling**: Gracefully handles commit failures

## 📖 Usage

### **Basic Usage**
```bash
# Run the script / update & commit
npm run update-changelog
# or
npm run changelog
# or
node scripts/update-changelog.js
```

### **What It Does**
1. **Scans Repository**: Detects all modified, added, and untracked files
2. **Analyzes Changes**: Examines file content to understand changes
3. **Categorizes Files**: Groups changes by type and purpose
4. **Updates Changelog**: Adds new entry to `DEVELOPMENT_CHANGELOG.md`
5. **Commits Files**: Commits each file individually with descriptive messages
6. **Reports Results**: Shows summary of changes and commits

### **Example Output**
```
🔍 Scanning repository for changes...

📊 Found 4 changed files:
  - components/products-overview-page.tsx
  - lib/performance.ts
  - reports/DEVELOPMENT_CHANGELOG.md
  - public/logo/brand/wallets/metamask-icon-fox.svg

📈 Version: 2.1.0 → 2.1.1

✅ Updated DEVELOPMENT_CHANGELOG.md

🚀 Committing files individually...

[rebrand/landing-page 0479e22] feat: enhance products-overview-page component
✅ Committed: components/products-overview-page.tsx

[rebrand/landing-page 29aeb19] fix: improve performance.ts
✅ Committed: lib/performance.ts

[rebrand/landing-page 03f42f8] docs: update DEVELOPMENT_CHANGELOG.md
✅ Committed: reports/DEVELOPMENT_CHANGELOG.md

[rebrand/landing-page c6332db] assets: add metamask-icon-fox.svg
✅ Committed: public/logo/brand/wallets/metamask-icon-fox.svg

✅ Successfully committed 4/4 files

📋 Summary of changes:
  🚀 New Features: 1 changes
  🐛 Bug Fixes: 1 changes
  📚 Documentation: 1 changes
  📦 Assets: 1 changes

🎉 Changelog update complete!
```

## ⚙️ Configuration

### **Script Configuration**
```javascript
const CONFIG = {
  changelogPath: 'reports/DEVELOPMENT_CHANGELOG.md',
  versionIncrement: 'patch', // 'major', 'minor', 'patch'
  autoDetectChanges: true,
  categories: {
    'feat': '🚀 New Features',
    'fix': '🐛 Bug Fixes',
    'docs': '📚 Documentation',
    'style': '🎨 UI/UX Improvements',
    'refactor': '♻️ Code Refactoring',
    'perf': '⚡ Performance',
    'test': '🧪 Testing',
    'chore': '🔧 Maintenance',
    'assets': '📦 Assets',
    'config': '⚙️ Configuration'
  }
};
```

### **Customization Options**
- **Changelog Path**: Change the target changelog file
- **Version Increment**: Set default version bump type
- **Categories**: Modify or add new change categories
- **File Patterns**: Adjust file detection patterns

## 🔧 Technical Details

### **File Analysis Logic**
```javascript
// Component analysis
if (path.includes('components/') && path.includes('.tsx')) {
  if (content.includes('useState') && content.includes('useEffect')) {
    return {
      description: `Enhanced interactive component with state management`,
      details: ['Added React hooks', 'Implemented state management', 'Enhanced interactivity']
    };
  }
  // ... more analysis patterns
}
```

### **Commit Message Generation**
```javascript
// Smart commit message based on file type and content
function generateCommitMessage(filePath, analysis) {
  // Determines commit type (feat, fix, docs, etc.)
  // Generates appropriate description
  // Includes detailed change information
}
```

### **Git Integration**
- Uses `git status --porcelain` for change detection
- Handles modified, added, and untracked files
- Individual file commits with error handling
- Proper git add and commit commands

## 🎯 Benefits

### **For Developers**
- **Automated Workflow**: No manual changelog updates needed
- **Consistent Formatting**: Maintains changelog structure and style
- **Intelligent Analysis**: Understands code changes automatically
- **Time Saving**: Reduces manual documentation work

### **For Teams**
- **Standardized Process**: Consistent changelog format across team
- **Comprehensive Tracking**: Captures all types of changes
- **Version Management**: Automatic version incrementing
- **Audit Trail**: Detailed commit history for each change

### **For Projects**
- **Professional Documentation**: Well-organized changelog entries
- **Change Visibility**: Clear overview of what changed and when
- **Release Management**: Easy to track versions and releases
- **Maintenance**: Keeps documentation up-to-date automatically

## 🚀 Future Enhancements

### **Planned Features**
- **Custom Rules**: User-defined file categorization rules
- **Template System**: Customizable changelog entry templates
- **Integration**: GitHub Actions and CI/CD integration
- **Analytics**: Change statistics and trends
- **Filtering**: Exclude specific files or patterns
- **Backup**: Automatic changelog backups

### **Advanced Analysis**
- **Code Complexity**: Analyze code complexity changes
- **Dependency Changes**: Track package.json changes
- **Test Coverage**: Monitor test file changes
- **Performance Metrics**: Track performance-related changes

## 📝 Examples

### **Component Changes**
```markdown
### 🚀 New Features
- **Modified** `components/products-overview-page.tsx` - Enhanced interactive component with state management
  - Added React hooks
  - Implemented state management
  - Enhanced interactivity
```

### **Asset Changes**
```markdown
### 📦 Assets
- **Added** `public/logo/brand/wallets/metamask-icon-fox.svg` - Added or updated visual assets
  - Added new graphics
  - Updated visual elements
  - Enhanced branding
```

### **Documentation Changes**
```markdown
### 📚 Documentation
- **Modified** `reports/DEVELOPMENT_CHANGELOG.md` - Updated documentation and guides
  - Enhanced documentation
  - Added technical details
  - Improved user guidance
```

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Status**: Production Ready
