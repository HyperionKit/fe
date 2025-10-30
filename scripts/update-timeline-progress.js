#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { 
  TIMELINE_MILESTONES, 
  calculateMilestoneProgress 
} = require('./timeline-progress-config');

// Configuration
const CONFIG = {
  progressDataPath: 'scripts/timeline-progress-data.json',
  timelineComponentPath: 'components/roadmap-timeline.tsx'
};

// Load existing progress data
function loadProgressData() {
  try {
    if (fs.existsSync(CONFIG.progressDataPath)) {
      return JSON.parse(fs.readFileSync(CONFIG.progressDataPath, 'utf8'));
    }
  } catch (error) {
    console.log('Creating new progress data file...');
  }
  
  // Initialize with default progress data
  const defaultProgress = {};
  Object.keys(TIMELINE_MILESTONES).forEach(milestoneId => {
    defaultProgress[milestoneId] = {
      progress: 0,
      lastUpdated: new Date().toISOString(),
      completedTasks: [],
      totalTasks: Object.keys(TIMELINE_MILESTONES[milestoneId].completionCriteria.files).length + 
                  Object.keys(TIMELINE_MILESTONES[milestoneId].completionCriteria.features).length
    };
  });
  
  return defaultProgress;
}

// Save progress data
function saveProgressData(progressData) {
  try {
    fs.writeFileSync(CONFIG.progressDataPath, JSON.stringify(progressData, null, 2));
    console.log('✅ Updated timeline progress data');
  } catch (error) {
    console.error('❌ Error saving progress data:', error.message);
  }
}

// Get all files in the project
function getAllProjectFiles() {
  const files = [];
  
  function scanDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other irrelevant directories
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Only include relevant file types
          const ext = path.extname(item);
          if (['.tsx', '.ts', '.js', '.jsx', '.md', '.svg', '.png', '.jpg', '.json'].includes(ext)) {
            files.push(fullPath);
          }
        }
      });
    } catch (error) {
      // Directory might not exist or be accessible
    }
  }
  
  scanDirectory('.');
  return files;
}

// Update timeline component with new progress values
function updateTimelineComponent(progressData) {
  try {
    let content = fs.readFileSync(CONFIG.timelineComponentPath, 'utf8');
    
    // Update progress values in the component
    const progressMap = {
      '2025-october-week1': progressData['2025-october-week1']?.progress || 0,
      '2025-october-week2': progressData['2025-october-week2']?.progress || 0,
      '2025-october-week3': progressData['2025-october-week3']?.progress || 0,
      '2025-october-week4': progressData['2025-october-week4']?.progress || 0
    };
    
    // Update each progress bar
    Object.entries(progressMap).forEach(([milestoneId, progress]) => {
      const milestone = TIMELINE_MILESTONES[milestoneId];
      if (milestone) {
        // Find and replace the progress value
        const progressRegex = new RegExp(
          `<ProgressBar progress=\\{${progressData[milestoneId]?.progress || 0}\\} phase="${milestone.phase}" />`,
          'g'
        );
        
        const newProgressBar = `<ProgressBar progress={${Math.round(progress)}} phase="${milestone.phase}" />`;
        
        if (content.includes(`phase="${milestone.phase}"`)) {
          content = content.replace(progressRegex, newProgressBar);
        }
      }
    });
    
    fs.writeFileSync(CONFIG.timelineComponentPath, content);
    console.log('✅ Updated timeline component with new progress values');
  } catch (error) {
    console.error('❌ Error updating timeline component:', error.message);
  }
}

// Calculate and update progress for all milestones
function updateAllProgress() {
  console.log('🔍 Scanning project files and calculating progress...\n');
  
  const allFiles = getAllProjectFiles();
  const progressData = loadProgressData();
  let hasUpdates = false;
  
  console.log(`📊 Found ${allFiles.length} project files`);
  
  Object.entries(TIMELINE_MILESTONES).forEach(([milestoneId, milestone]) => {
    const previousProgress = progressData[milestoneId]?.progress || 0;
    const newProgress = calculateMilestoneProgress(milestone, allFiles);
    
    if (Math.abs(newProgress - previousProgress) > 1) { // Only update if significant change
      progressData[milestoneId] = {
        progress: Math.round(newProgress),
        lastUpdated: new Date().toISOString(),
        completedTasks: [], // This would be enhanced with actual task tracking
        totalTasks: Object.keys(milestone.completionCriteria.files).length + 
                    Object.keys(milestone.completionCriteria.features).length
      };
      
      console.log(`  📈 ${milestone.phase}: ${previousProgress}% → ${Math.round(newProgress)}%`);
      hasUpdates = true;
    } else {
      console.log(`  ℹ️  ${milestone.phase}: ${Math.round(previousProgress)}% (no significant change)`);
    }
  });
  
  if (hasUpdates) {
    saveProgressData(progressData);
    updateTimelineComponent(progressData);
    console.log('\n✅ Timeline progress updated successfully!');
  } else {
    console.log('\nℹ️  No significant progress changes detected');
  }
  
  return progressData;
}

// Display progress summary
function displayProgressSummary(progressData) {
  console.log('\n📊 Timeline Progress Summary:');
  console.log('================================');
  
  Object.entries(progressData).forEach(([milestoneId, data]) => {
    const milestone = TIMELINE_MILESTONES[milestoneId];
    const progressBar = generateProgressBar(data.progress);
    
    console.log(`\n${milestone.phase}: ${data.progress}%`);
    console.log(progressBar);
    console.log(`Last updated: ${new Date(data.lastUpdated).toLocaleDateString()}`);
  });
}

// Generate ASCII progress bar
function generateProgressBar(percentage) {
  const barLength = 20;
  const filledLength = Math.round((percentage / 100) * barLength);
  const bar = '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength);
  return `[${bar}] ${percentage}%`;
}

// Main function
function main() {
  console.log('🚀 Timeline Progress Updater');
  console.log('============================\n');
  
  const progressData = updateAllProgress();
  displayProgressSummary(progressData);
  
  console.log('\n🎉 Timeline progress update complete!');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { 
  main, 
  updateAllProgress, 
  loadProgressData, 
  saveProgressData,
  updateTimelineComponent 
};
