#!/usr/bin/env node

// Timeline Progress Configuration
// This file defines the milestones and their completion criteria for the roadmap timeline

const TIMELINE_MILESTONES = {
  '2025-october-week1': {
    id: '2025-october-week1',
    title: '2025',
    subtitle: 'October, Week 1',
    phase: 'Rebranding & Planning',
    completionCriteria: {
      // File-based criteria
      files: {
        'public/logo/brand/hyperkit/': { weight: 0.3, description: 'Hyperkit branding assets' },
        'components/foundation-page.tsx': { weight: 0.2, description: 'Foundation page component' },
        'app/foundation/page.tsx': { weight: 0.1, description: 'Foundation page route' },
        'reports/DEVELOPMENT_CHANGELOG.md': { weight: 0.1, description: 'Development documentation' }
      },
      // Feature-based criteria
      features: {
        'pixelblast-background': { weight: 0.15, description: 'PixelBlast WebGL background' },
        'ascii-text-effect': { weight: 0.1, description: 'ASCIIText 3D rendering' },
        'team-section': { weight: 0.05, description: 'Team member profiles' }
      }
    },
    maxProgress: 100
  },
  
  '2025-october-week2': {
    id: '2025-october-week2',
    title: 'October',
    subtitle: 'Week 2',
    phase: 'UI/UX & Landing Page',
    completionCriteria: {
      files: {
        'components/hero-page.tsx': { weight: 0.2, description: 'Hero page component' },
        'components/timeline-page.tsx': { weight: 0.15, description: 'Timeline page component' },
        'components/cards-page.tsx': { weight: 0.15, description: 'Cards page component' },
        'components/rewards-page.tsx': { weight: 0.1, description: 'Rewards page component' },
        'app/page.tsx': { weight: 0.1, description: 'Home page route' },
        'public/UI/Design/': { weight: 0.2, description: 'UI design mockups' }
      },
      features: {
        'responsive-design': { weight: 0.05, description: 'Mobile-first responsive design' },
        'accessibility-compliance': { weight: 0.05, description: 'WCAG accessibility standards' }
      }
    },
    maxProgress: 100
  },
  
  '2025-october-week3': {
    id: '2025-october-week3',
    title: 'October',
    subtitle: 'Week 3',
    phase: 'AI & Module Development',
    completionCriteria: {
      files: {
        'components/ai-chat-page.tsx': { weight: 0.25, description: 'AI chat interface' },
        'components/web3-interactive-demo.tsx': { weight: 0.2, description: 'Interactive demo system' },
        'components/libraries/': { weight: 0.15, description: 'Component library' },
        'app/ai/page.tsx': { weight: 0.1, description: 'AI page route' }
      },
      features: {
        'ai-integration': { weight: 0.15, description: 'AI model integration' },
        'code-generator': { weight: 0.1, description: 'Artifact/local code generator' },
        'module-editor': { weight: 0.05, description: 'Customizable module editor' }
      }
    },
    maxProgress: 100
  },
  
  '2025-october-week4': {
    id: '2025-october-week4',
    title: 'October',
    subtitle: 'Week 4',
    phase: 'Customization & Release',
    completionCriteria: {
      files: {
        'components/launch-app-page.tsx': { weight: 0.2, description: 'Launch app interface' },
        'components/build-page.tsx': { weight: 0.15, description: 'Build page component' },
        'app/app/page.tsx': { weight: 0.1, description: 'App page route' },
        'app/build/page.tsx': { weight: 0.1, description: 'Build page route' },
        'scripts/': { weight: 0.15, description: 'Automation scripts' }
      },
      features: {
        'drag-drop-tools': { weight: 0.1, description: 'Drag and drop functionality' },
        'dashboard-release': { weight: 0.1, description: 'First dashboard release' },
        'backend-integration': { weight: 0.05, description: 'MVP backend integration' },
        'security-validation': { weight: 0.05, description: 'Security and node validation' }
      }
    },
    maxProgress: 100
  }
};

// Progress calculation functions
function calculateFileProgress(filePath, milestone) {
  const criteria = milestone.completionCriteria.files;
  let progress = 0;
  
  for (const [pattern, config] of Object.entries(criteria)) {
    if (filePath.includes(pattern)) {
      // Check if file exists and has content
      try {
        const fs = require('fs');
        const stats = fs.statSync(filePath);
        if (stats.size > 0) {
          progress += config.weight * 100;
        }
      } catch (error) {
        // File doesn't exist or can't be read
        continue;
      }
    }
  }
  
  return Math.min(progress, 100);
}

function calculateFeatureProgress(feature, milestone) {
  const criteria = milestone.completionCriteria.features;
  const config = criteria[feature];
  
  if (!config) return 0;
  
  // This would be enhanced with actual feature detection logic
  // For now, return a base progress based on file existence
  return config.weight * 50; // 50% base progress for features
}

function calculateMilestoneProgress(milestone, allFiles) {
  let totalProgress = 0;
  let totalWeight = 0;
  
  // Calculate file-based progress
  for (const [pattern, config] of Object.entries(milestone.completionCriteria.files)) {
    const matchingFiles = allFiles.filter(file => file.includes(pattern));
    if (matchingFiles.length > 0) {
      const fileProgress = matchingFiles.reduce((sum, file) => {
        return sum + calculateFileProgress(file, milestone);
      }, 0) / matchingFiles.length;
      
      totalProgress += fileProgress * config.weight;
      totalWeight += config.weight;
    }
  }
  
  // Calculate feature-based progress
  for (const [feature, config] of Object.entries(milestone.completionCriteria.features)) {
    const featureProgress = calculateFeatureProgress(feature, milestone);
    totalProgress += featureProgress * config.weight;
    totalWeight += config.weight;
  }
  
  return totalWeight > 0 ? Math.min(totalProgress / totalWeight, 100) : 0;
}

// Export functions and configuration
module.exports = {
  TIMELINE_MILESTONES,
  calculateFileProgress,
  calculateFeatureProgress,
  calculateMilestoneProgress
};
