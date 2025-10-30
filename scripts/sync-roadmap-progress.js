#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// This script syncs the roadmap timeline component with the latest progress data
// It reads the progress data from the Gantt script and updates the roadmap component

const ROADMAP_COMPONENT_PATH = 'components/roadmap-timeline.tsx';

// Progress calculation logic (same as Gantt script)
const progressMap = {
  'public/logo/brand/hyperkit/': 100, // Logo files exist
  'components/': 75, // Theme files exist but not complete
  'app/globals.css': 75, // Theme files exist
  'reports/': 50, // Some docs exist
  'docs/': 50, // Some docs exist
  'app/page.tsx': 75, // Landing page exists
  'components/hero-page.tsx': 75, // Landing page exists
  'components/ai-chat-page.tsx': 25, // AI components exist but not complete
  'app/ai/': 25, // AI components exist but not complete
  'accessibility': 0, // No accessibility tests yet
  'test/': 0, // No test files yet
  'cypress/': 0, // No test files yet
  'playwright/': 0, // No test files yet
  'lib/ai/': 0, // No AI lib files yet
  'components/ai-': 25, // Some AI components exist
  'lib/generation/': 0, // No generation lib yet
  'components/web3-interactive-demo.tsx': 25 // Demo component exists
};

function calculateProgress(criteria) {
  let totalProgress = 0;
  let totalCriteria = 0;
  
  criteria.forEach(criterion => {
    totalCriteria++;
    // Check for exact matches first
    const exactMatch = progressMap[criterion];
    if (exactMatch !== undefined) {
      totalProgress += exactMatch;
    } else {
      // Check for partial matches
      const matchingKey = Object.keys(progressMap).find(key => criterion.includes(key));
      if (matchingKey) {
        totalProgress += progressMap[matchingKey];
      } else {
        // Default progress based on criterion type
        const key = criterion.toLowerCase().replace(/[^a-z]/g, '');
        if (key.includes('logo')) totalProgress += 100;
        else if (key.includes('theme')) totalProgress += 75;
        else if (key.includes('landing')) totalProgress += 75;
        else if (key.includes('ai')) totalProgress += 25;
        else if (key.includes('docs')) totalProgress += 50;
        else totalProgress += 0;
      }
    }
  });
  
  if (totalCriteria === 0) return 0;
  return Math.round(totalProgress / totalCriteria);
}

function getStatus(progress) {
  if (progress >= 100) return { status: 'Completed', color: 'green', symbol: '✓' };
  if (progress > 0) return { status: 'In Progress', color: 'yellow', symbol: '◐' };
  return { status: 'Not Started', color: 'red', symbol: '○' };
}

function updateRoadmapComponent() {
  try {
    let content = fs.readFileSync(ROADMAP_COMPONENT_PATH, 'utf8');
    
    // Calculate progress for each phase
    const phases = [
      {
        name: 'Rebranding & Planning',
        criteria: ['public/logo/brand/hyperkit/', 'components/', 'app/globals.css', 'reports/'],
        expectedProgress: 75
      },
      {
        name: 'UI/UX & Landing Page',
        criteria: ['app/page.tsx', 'components/hero-page.tsx', 'components/', 'accessibility'],
        expectedProgress: 56
      },
      {
        name: 'AI & Module Development',
        criteria: ['components/ai-chat-page.tsx', 'app/ai/', 'lib/ai/', 'components/ai-', 'components/web3-interactive-demo.tsx'],
        expectedProgress: 20
      },
      {
        name: 'Customization & Release',
        criteria: ['lib/generation/', 'test/', 'cypress/', 'playwright/'],
        expectedProgress: 0
      }
    ];
    
    console.log('📊 Syncing Roadmap Timeline Progress...\n');
    
    phases.forEach(phase => {
      const progress = calculateProgress(phase.criteria);
      const status = getStatus(progress);
      
      console.log(`${phase.name}: ${progress}% (${status.status})`);
      
      // Update the progress value in the component
      const progressRegex = new RegExp(
        `calculateProgress\\(\\[.*?\\]\\)\\} phase="${phase.name}"`,
        'g'
      );
      
      const newProgressCall = `calculateProgress([${phase.criteria.map(c => `'${c}'`).join(', ')}])} phase="${phase.name}"`;
      content = content.replace(progressRegex, newProgressCall);
    });
    
    // Write the updated content back to the file
    fs.writeFileSync(ROADMAP_COMPONENT_PATH, content);
    console.log('\n✅ Roadmap timeline component updated with latest progress!');
    
    // Display current status
    console.log('\n📈 Current Project Status:');
    console.log('========================');
    phases.forEach(phase => {
      const progress = calculateProgress(phase.criteria);
      const status = getStatus(progress);
      const bar = '█'.repeat(Math.floor(progress / 5)) + '░'.repeat(20 - Math.floor(progress / 5));
      console.log(`${phase.name}: ${progress}% [${bar}] ${status.symbol}`);
    });
    
  } catch (error) {
    console.error('❌ Error updating roadmap component:', error.message);
  }
}

// Run the sync
if (require.main === module) {
  updateRoadmapComponent();
}

module.exports = { updateRoadmapComponent, calculateProgress, getStatus };
