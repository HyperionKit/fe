#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  changelogPath: 'reports/DEVELOPMENT_CHANGELOG.md',
  versionIncrement: 'patch', // 'major', 'minor', 'patch'
  autoDetectChanges: true,
  generateGanttTimeline: true, // Enable Gantt timeline generation
  ganttConfig: {
    projectTitle: 'Month 1: HyperKit Project Launch',
    projectDescription: 'Complete rebranding, AI project generation system, modular customization platform, and community engagement',
    weeks: ['W1', 'W2', 'W3', 'W4', 'W5'],
    tasks: [
      {
        name: 'Finalize Logo Design',
        criteria: ['public/logo/brand/hyperkit/'],
        week: 1,
        duration: 1,
        description: 'Finalize and deploy new logo design'
      },
      {
        name: 'Universal Theme',
        criteria: ['components/', 'app/globals.css'],
        week: 1,
        duration: 2,
        description: 'Implement new universal theme across UI components'
      },
      {
        name: 'Project Types Docs',
        criteria: ['reports/', 'docs/'],
        week: 2,
        duration: 1,
        description: 'Specify and publish supported project types in technical docs'
      },
      {
        name: 'Landing Page Redesign',
        criteria: ['app/page.tsx', 'components/hero-page.tsx'],
        week: 2,
        duration: 2,
        description: 'Redesign and launch new landing page with improved onboarding flow'
      },
      {
        name: 'A11y Validation',
        criteria: ['components/', 'accessibility'],
        week: 3,
        duration: 1,
        description: 'Validate accessibility (A11y) and responsive navigation across devices'
      },
      {
        name: 'Visual Regression Tests',
        criteria: ['test/', 'cypress/', 'playwright/'],
        week: 3,
        duration: 1,
        description: 'Visual regression test suite for UI changes'
      },
      {
        name: 'AI Generation Flow',
        criteria: ['components/ai-chat-page.tsx', 'app/ai/'],
        week: 4,
        duration: 1,
        description: 'Complete UI/UX rework for AI generation flow with wireframes/prototypes'
      },
      {
        name: 'AI Model Integration',
        criteria: ['lib/ai/', 'components/ai-'],
        week: 4,
        duration: 2,
        description: 'Integrate 1-2 specific AI models for project creation'
      },
      {
        name: 'Artifact Generation',
        criteria: ['components/web3-interactive-demo.tsx', 'lib/generation/'],
        week: 5,
        duration: 2,
        description: 'Build artifact generation logic and publish demo video'
      }
    ]
  },
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

// Get current date
const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// Function to get git status and changes
function getGitChanges() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    const diff = execSync('git diff --cached --name-only', { encoding: 'utf8' });
    const untracked = execSync('git ls-files --others --exclude-standard', { encoding: 'utf8' });
    
    return {
      modified: status.split('\n').filter(line => line.startsWith(' M')).map(line => line.substring(3)),
      added: status.split('\n').filter(line => line.startsWith('A ')).map(line => line.substring(3)),
      untracked: untracked.split('\n').filter(line => line.trim()),
      staged: diff.split('\n').filter(line => line.trim())
    };
  } catch (error) {
    console.error('Error getting git changes:', error.message);
    return { modified: [], added: [], untracked: [], staged: [] };
  }
}

// Function to analyze file changes and categorize them
function analyzeChanges(changes) {
  const categorizedChanges = {};
  
  // Initialize categories
  Object.values(CONFIG.categories).forEach(category => {
    categorizedChanges[category] = [];
  });
  
  // Analyze each file
  const allFiles = [...changes.modified, ...changes.added, ...changes.untracked];
  
  allFiles.forEach(filePath => {
    const category = categorizeFile(filePath);
    const change = analyzeFileChange(filePath);
    
    if (change) {
      categorizedChanges[category].push(change);
    }
  });
  
  return categorizedChanges;
}

// Function to categorize files based on path and content
function categorizeFile(filePath) {
  const path = filePath.toLowerCase();
  
  // UI/UX and styling changes
  if (path.includes('components/') && (path.includes('page') || path.includes('ui'))) {
    return CONFIG.categories.style;
  }
  
  // New features
  if (path.includes('components/') && (path.includes('demo') || path.includes('interactive'))) {
    return CONFIG.categories.feat;
  }
  
  // Documentation
  if (path.includes('reports/') || path.includes('docs/') || path.includes('.md')) {
    return CONFIG.categories.docs;
  }
  
  // Assets
  if (path.includes('public/') || path.includes('assets/') || path.includes('.svg') || path.includes('.png') || path.includes('.jpg')) {
    return CONFIG.categories.assets;
  }
  
  // Configuration
  if (path.includes('config') || path.includes('package.json') || path.includes('next.config')) {
    return CONFIG.categories.config;
  }
  
  // Performance
  if (path.includes('performance') || path.includes('optimization')) {
    return CONFIG.categories.perf;
  }
  
  // Bug fixes (lib, utils, error handling)
  if (path.includes('lib/') || path.includes('utils/') || path.includes('error')) {
    return CONFIG.categories.fix;
  }
  
  // Default to maintenance
  return CONFIG.categories.chore;
}

// Function to analyze specific file changes
function analyzeFileChange(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const isNewFile = !fs.existsSync(filePath + '.backup');
    
    // Get file content to analyze
    let content = '';
    try {
      content = fs.readFileSync(filePath, 'utf8');
    } catch (error) {
      // File might be binary or not readable
      return {
        file: filePath,
        type: isNewFile ? 'Added' : 'Modified',
        description: `Updated ${path.basename(filePath)}`
      };
    }
    
    // Analyze content for specific patterns
    const analysis = analyzeContent(content, filePath);
    
    return {
      file: filePath,
      type: isNewFile ? 'Added' : 'Modified',
      description: analysis.description,
      details: analysis.details
    };
  } catch (error) {
    return {
      file: filePath,
      type: 'Modified',
      description: `Updated ${path.basename(filePath)}`
    };
  }
}

// Function to analyze file content for specific changes
function analyzeContent(content, filePath) {
  const path = filePath.toLowerCase();
  
  // Component analysis
  if (path.includes('components/') && path.includes('.tsx')) {
    if (content.includes('useState') && content.includes('useEffect')) {
      return {
        description: `Enhanced interactive component with state management`,
        details: ['Added React hooks', 'Implemented state management', 'Enhanced interactivity']
      };
    }
    if (content.includes('className') && content.includes('bg-') && content.includes('text-')) {
      return {
        description: `Improved UI styling and layout`,
        details: ['Updated Tailwind CSS classes', 'Enhanced visual design', 'Improved responsive layout']
      };
    }
    if (content.includes('WebGL') || content.includes('three') || content.includes('shader')) {
      return {
        description: `Added WebGL effects and 3D graphics`,
        details: ['Implemented WebGL components', 'Added 3D effects', 'Enhanced visual experience']
      };
    }
  }
  
  // Performance analysis
  if (path.includes('performance') || content.includes('optimization')) {
    return {
      description: `Performance optimizations and monitoring`,
      details: ['Added performance monitoring', 'Optimized rendering', 'Enhanced user experience']
    };
  }
  
  // Documentation analysis
  if (path.includes('.md')) {
    return {
      description: `Updated documentation and guides`,
      details: ['Enhanced documentation', 'Added technical details', 'Improved user guidance']
    };
  }
  
  // Asset analysis
  if (path.includes('.svg') || path.includes('.png') || path.includes('.jpg')) {
    return {
      description: `Added or updated visual assets`,
      details: ['Added new graphics', 'Updated visual elements', 'Enhanced branding']
    };
  }
  
  // Default analysis
  return {
    description: `Updated ${path.basename(filePath)}`,
    details: ['Code improvements', 'Enhanced functionality', 'Better maintainability']
  };
}

// Function to calculate task completion based on file criteria
function calculateTaskCompletion(task, allFiles) {
  let completedFiles = 0;
  let totalCriteria = 0;
  
  task.criteria.forEach(criteria => {
    totalCriteria++;
    const matchingFiles = allFiles.filter(file => file.includes(criteria));
    if (matchingFiles.length > 0) {
      // Check if files exist and have content
      const validFiles = matchingFiles.filter(file => {
        try {
          const stats = fs.statSync(file);
          return stats.size > 0;
        } catch (error) {
          return false;
        }
      });
      if (validFiles.length > 0) {
        completedFiles++;
      }
    }
  });
  
  if (totalCriteria === 0) return 0;
  return Math.round((completedFiles / totalCriteria) * 100);
}

// Function to get task status based on completion percentage
function getTaskStatus(completion) {
  if (completion >= 100) return { status: 'Completed', color: 'green', symbol: '✓' };
  if (completion > 0) return { status: 'In Progress', color: 'yellow', symbol: '◐' };
  return { status: 'Not Started', color: 'red', symbol: '○' };
}

// Function to generate Gantt chart timeline
function generateGanttTimeline(allFiles) {
  if (!CONFIG.generateGanttTimeline) return '';
  
  console.log('\n📊 Generating Gantt Timeline...');
  
  const timeline = [];
  const maxTaskNameLength = Math.max(...CONFIG.ganttConfig.tasks.map(task => task.name.length));
  const weekHeader = CONFIG.ganttConfig.weeks.join('  ');
  
  // Header
  timeline.push('┌' + '─'.repeat(60) + '┐');
  timeline.push(`│ ${CONFIG.ganttConfig.projectTitle.padEnd(58)} │`);
  timeline.push(`│ ${CONFIG.ganttConfig.projectDescription.padEnd(58)} │`);
  timeline.push('├' + '─'.repeat(60) + '┤');
  timeline.push('│ Detailed Tasks & Timeline'.padEnd(60) + ' │');
  timeline.push('├' + '─'.repeat(60) + '┤');
  timeline.push(`│ Tasks${' '.repeat(maxTaskNameLength - 5)} │ Status        │ ${weekHeader} │`);
  timeline.push('├' + '─'.repeat(60) + '┤');
  
  // Task rows
  CONFIG.ganttConfig.tasks.forEach(task => {
    const completion = calculateTaskCompletion(task, allFiles);
    const statusInfo = getTaskStatus(completion);
    const taskName = task.name.padEnd(maxTaskNameLength);
    const statusText = `${statusInfo.status} ${completion}%`.padEnd(13);
    
    // Generate Gantt bar
    let ganttBar = '';
    for (let week = 1; week <= 5; week++) {
      if (week >= task.week && week < task.week + task.duration) {
        if (completion >= 100) {
          ganttBar += '██';
        } else if (completion > 0) {
          ganttBar += '██';
        } else {
          ganttBar += '██';
        }
      } else {
        ganttBar += '  ';
      }
    }
    
    timeline.push(`│ ${taskName} │ ${statusText} │ ${ganttBar} │`);
  });
  
  timeline.push('└' + '─'.repeat(60) + '┘');
  
  return timeline.join('\n');
}

// Function to get current version from changelog
function getCurrentVersion() {
  try {
    const changelogContent = fs.readFileSync(CONFIG.changelogPath, 'utf8');
    const versionMatch = changelogContent.match(/### Version (\d+\.\d+\.\d+)/);
    return versionMatch ? versionMatch[1] : '1.0.0';
  } catch (error) {
    return '1.0.0';
  }
}

// Function to increment version
function incrementVersion(version, type) {
  const [major, minor, patch] = version.split('.').map(Number);
  
  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
    default:
      return `${major}.${minor}.${patch + 1}`;
  }
}

// Function to generate changelog entry
function generateChangelogEntry(changes, version) {
  const entry = [`## 🚀 Recent Updates (${currentDate})`, ``, `### Version ${version}`, ``];
  
  // Add categorized changes
  Object.entries(changes).forEach(([category, items]) => {
    if (items.length > 0) {
      entry.push(`### ${category}`);
      items.forEach(item => {
        entry.push(`- **${item.type}** \`${item.file}\` - ${item.description}`);
        if (item.details && item.details.length > 0) {
          item.details.forEach(detail => {
            entry.push(`  - ${detail}`);
          });
        }
      });
      entry.push('');
    }
  });
  
  // Add technical achievements
  const totalChanges = Object.values(changes).reduce((sum, items) => sum + items.length, 0);
  if (totalChanges > 0) {
    entry.push(`### Technical Achievements`);
    entry.push(`- ✅ Processed ${totalChanges} file changes`);
    entry.push(`- ✅ Automated changelog generation`);
    entry.push(`- ✅ Intelligent change categorization`);
    entry.push(`- ✅ Enhanced documentation tracking`);
    entry.push('');
  }
  
  entry.push('---', '');
  
  return entry.join('\n');
}

// Function to commit individual files
function commitFile(filePath, message) {
  try {
    execSync(`git add "${filePath}"`, { stdio: 'inherit' });
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
    console.log(`✅ Committed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error committing ${filePath}:`, error.message);
    return false;
  }
}

// Function to generate commit message based on file analysis
function generateCommitMessage(filePath, analysis) {
  const fileName = path.basename(filePath);
  const fileType = path.extname(filePath);
  
  let type = 'chore';
  let description = analysis.description;
  
  // Determine commit type based on file and content
  if (filePath.includes('components/') && filePath.includes('.tsx')) {
    type = 'feat';
    description = `enhance ${fileName.replace('.tsx', '')} component`;
  } else if (filePath.includes('lib/') || filePath.includes('utils/')) {
    type = 'fix';
    description = `improve ${fileName}`;
  } else if (filePath.includes('.md')) {
    type = 'docs';
    description = `update ${fileName}`;
  } else if (filePath.includes('public/') || fileType === '.svg' || fileType === '.png') {
    type = 'assets';
    description = `add ${fileName}`;
  } else if (filePath.includes('config') || filePath.includes('package.json')) {
    type = 'config';
    description = `update ${fileName}`;
  }
  
  // Ensure details array exists
  const details = analysis.details || ['Code improvements', 'Enhanced functionality'];
  
  return `${type}: ${description}\n\n- ${analysis.description}\n- ${details.join('\n- ')}`;
}

// Main function
function main() {
  console.log('🔍 Scanning repository for changes...\n');
  
  // Get git changes
  const changes = getGitChanges();
  const allFiles = [...changes.modified, ...changes.added, ...changes.untracked];
  
  if (allFiles.length === 0) {
    console.log('ℹ️  No changes detected. Nothing to commit.');
    return;
  }
  
  console.log(`📊 Found ${allFiles.length} changed files:`);
  allFiles.forEach(file => console.log(`  - ${file}`));
  console.log('');
  
  // Generate Gantt timeline
  const ganttTimeline = generateGanttTimeline(allFiles);
  if (ganttTimeline) {
    console.log(ganttTimeline);
  }
  
  // Analyze changes
  const categorizedChanges = analyzeChanges(changes);
  
  // Get current version and increment it
  const currentVersion = getCurrentVersion();
  const newVersion = incrementVersion(currentVersion, CONFIG.versionIncrement);
  
  console.log(`\n📈 Version: ${currentVersion} → ${newVersion}\n`);
  
  // Generate changelog entry
  const changelogEntry = generateChangelogEntry(categorizedChanges, newVersion);
  
  // Update changelog
  try {
    const changelogContent = fs.readFileSync(CONFIG.changelogPath, 'utf8');
    const overviewEndIndex = changelogContent.indexOf('## 🚀 Major Features Added');
    
    if (overviewEndIndex === -1) {
      console.error('❌ Could not find insertion point in changelog');
      return;
    }
    
    const beforeOverview = changelogContent.substring(0, overviewEndIndex);
    const afterOverview = changelogContent.substring(overviewEndIndex);
    const updatedChangelog = beforeOverview + changelogEntry + afterOverview;
    
    fs.writeFileSync(CONFIG.changelogPath, updatedChangelog);
    console.log('✅ Updated DEVELOPMENT_CHANGELOG.md');
  } catch (error) {
    console.error('❌ Error updating changelog:', error.message);
    return;
  }
  
  // Commit files individually
  console.log('\n🚀 Committing files individually...\n');
  
  let successCount = 0;
  allFiles.forEach(filePath => {
    const analysis = analyzeFileChange(filePath);
    const message = generateCommitMessage(filePath, analysis);
    
    if (commitFile(filePath, message)) {
      successCount++;
    }
  });
  
  // Final summary
  console.log(`\n✅ Successfully committed ${successCount}/${allFiles.length} files`);
  console.log('\n📋 Summary of changes:');
  Object.entries(categorizedChanges).forEach(([category, items]) => {
    if (items.length > 0) {
      console.log(`  ${category}: ${items.length} changes`);
    }
  });
  
  console.log('\n🎉 Changelog update complete!');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main, analyzeChanges, categorizeFile, generateCommitMessage };