"use client"

import { useState } from "react"

interface TimelineItem {
  id: string
  title: string
  description?: string
  startWeek: number
  duration: number
  tasks?: Array<{
    name: string
    startWeek: number
    duration: number
  }>
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    title: "October 2025: HyperKit Project Launch",
    description: "Complete rebranding, AI project generation system, and modular customization platform with community engagement.",
    startWeek: 1,
    duration: 4,
    tasks: [
      // Week 1 - Rebranding & Accessibility
      { name: "Finalize and Deploy New Logo Design", startWeek: 1, duration: 1 },
      { name: "Implement Universal Theme Across UI", startWeek: 1, duration: 1 },
      { name: "Specify and Publish Supported Project Types", startWeek: 1, duration: 1 },
      
      // Week 2 - Landing Page & AI UX
      { name: "Redesign and Launch New Landing Page", startWeek: 2, duration: 1 },
      { name: "Complete Onboarding Flow", startWeek: 2, duration: 1 },
      { name: "Validate A11y and Responsive Navigation", startWeek: 2, duration: 1 },
      { name: "Visual Regression Test Suite", startWeek: 2, duration: 1 },
      { name: "Complete AI Generation Flow UX/UI", startWeek: 2, duration: 1 },
      
      // Week 3 - AI Integration & Modules
      { name: "Integrate 12 AI Models for Project Creation", startWeek: 3, duration: 1 },
      { name: "Build Artifact Generation Logic", startWeek: 3, duration: 1 },
      { name: "Backend Upgrade: Logging and Error Reporting", startWeek: 3, duration: 1 },
      { name: "Launch Customizable Module Editor", startWeek: 3, duration: 1 },
      { name: "Enable Dynamic Preview and Copy-Paste", startWeek: 3, duration: 1 },
      
      // Week 4 - Final Integration & Community
      { name: "NLP Enhancement and Backend Integration", startWeek: 4, duration: 1 },
      { name: "Deliver First-Stage Dashboard", startWeek: 4, duration: 1 },
      { name: "Code Validation and Security Scanning", startWeek: 4, duration: 1 },
      { name: "Drag-and-Drop UI Library Integration", startWeek: 4, duration: 1 },
      { name: "Early Access Program Launch (100 users)", startWeek: 4, duration: 1 },
      { name: "Custom Module Preview System", startWeek: 4, duration: 1 },
      { name: "Documentation Publishing and Distribution", startWeek: 4, duration: 1 },
    ],
  },
]

const months = [
  "October 2025",  // Month 1
]

const weeksPerMonth = [4] // October 2025 - 4 weeks

// Dynamic week calculation for future expansion
const calculateTotalWeeks = () => {
  return weeksPerMonth.reduce((total, weeks) => total + weeks, 0)
}

const getWeekInfo = (weekNumber: number) => {
  let currentMonth = 0
  let weekInMonth = weekNumber
  
  for (let i = 0; i < weeksPerMonth.length; i++) {
    if (weekInMonth <= weeksPerMonth[i]) {
      currentMonth = i
      break
    }
    weekInMonth -= weeksPerMonth[i]
  }
  
  return {
    month: months[currentMonth],
    weekInMonth,
    monthIndex: currentMonth
  }
}

export default function TimelinePage() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [hoveredTask, setHoveredTask] = useState<string | null>(null)
  const [currentWeek, setCurrentWeek] = useState(1) // Current week indicator

  // Enhanced positioning function for tooltips with better edge detection and overflow prevention
  const getTooltipPosition = (barStartPercent: number, barWidthPercent: number, tooltipWidth: number = 350) => {
    const barCenter = barStartPercent + (barWidthPercent / 2)
    const tooltipHalfWidth = (tooltipWidth / 2) / 100 // Convert to percentage
    const leftEdge = barCenter - tooltipHalfWidth
    const rightEdge = barCenter + tooltipHalfWidth
    
    // Dynamic margin based on viewport and content
    const margin = 2
    const maxRight = 100 - margin
    
    // Calculate optimal position
    let left = barCenter
    let transform = 'translateX(-50%)'
    let arrowPosition = 'center'
    let arrowOffset = '50%'
    
    if (leftEdge < margin) {
      left = margin
      transform = 'translateX(0)'
      arrowPosition = 'left'
      arrowOffset = `${Math.max(0, barCenter - margin)}%`
    } else if (rightEdge > maxRight) {
      left = maxRight
      transform = 'translateX(-100%)'
      arrowPosition = 'right'
      arrowOffset = `${Math.min(100, barCenter - maxRight)}%`
    }
    
    return { 
      left: `${left}%`, 
      transform,
      arrowPosition,
      arrowOffset
    }
  }

  // Smart positioning function specifically for milestone tooltips to prevent cut-off
  const getMilestoneTooltipPosition = (barStartPercent: number, barWidthPercent: number, tooltipWidth: number = 320) => {
    const barCenter = barStartPercent + (barWidthPercent / 2)
    const tooltipHalfWidth = (tooltipWidth / 2) / 100 // Convert to percentage
    const leftEdge = barCenter - tooltipHalfWidth
    const rightEdge = barCenter + tooltipHalfWidth
    
    // More aggressive margin for milestone tooltips to prevent cut-off
    const margin = 0.5
    const maxRight = 100 - margin
    
    // Calculate optimal position with smart fallback strategies
    let left = barCenter
    let transform = 'translateX(-50%)'
    let arrowPosition = 'center'
    let arrowOffset = '50%'
    
    // Strategy 1: If tooltip would be cut off on the right, position it to the left of the bar
    if (rightEdge > maxRight) {
      // Try to position it to the left of the bar start
      const leftPosition = Math.max(margin, barStartPercent - tooltipHalfWidth)
      if (leftPosition >= margin) {
        left = leftPosition
        transform = 'translateX(0)'
        arrowPosition = 'right'
        arrowOffset = `${Math.min(100, barCenter - left)}%`
      } else {
        // Fallback: position at the very left edge
        left = margin
        transform = 'translateX(0)'
        arrowPosition = 'left'
        arrowOffset = '0%'
      }
    }
    // Strategy 2: If tooltip would be cut off on the left, position it to the right of the bar
    else if (leftEdge < margin) {
      // Try to position it to the right of the bar end
      const rightPosition = Math.min(maxRight, barStartPercent + barWidthPercent + tooltipHalfWidth)
      if (rightPosition <= maxRight) {
        left = rightPosition
        transform = 'translateX(-100%)'
        arrowPosition = 'left'
        arrowOffset = `${Math.max(0, left - barCenter)}%`
      } else {
        // Fallback: position at the very right edge
        left = maxRight
        transform = 'translateX(-100%)'
        arrowPosition = 'right'
        arrowOffset = '0%'
      }
    }
    
    return { 
      left: `${left}%`, 
      transform,
      arrowPosition,
      arrowOffset
    }
  }

  // Task completion percentages (0-100)
  const taskCompletion = {
    // October 2025 - Week 1 (Rebranding & Accessibility)
    "Finalize and Deploy New Logo Design": 100,
    "Implement Universal Theme Across UI": 75,
    "Specify and Publish Supported Project Types": 0,
    
    // October 2025 - Week 2 (Landing Page & AI UX)
    "Redesign and Launch New Landing Page": 75,
    "Complete Onboarding Flow": 0,
    "Validate A11y and Responsive Navigation": 0,
    "Visual Regression Test Suite": 0,
    "Complete AI Generation Flow UX/UI": 0,
    
    // October 2025 - Week 3 (AI Integration & Modules)
    "Integrate 12 AI Models for Project Creation": 0,
    "Build Artifact Generation Logic": 0,
    "Backend Upgrade: Logging and Error Reporting": 0,
    "Launch Customizable Module Editor": 0,
    "Enable Dynamic Preview and Copy-Paste": 0,
    
    // October 2025 - Week 4 (Final Integration & Community)
    "NLP Enhancement and Backend Integration": 0,
    "Deliver First-Stage Dashboard": 0,
    "Code Validation and Security Scanning": 0,
    "Drag-and-Drop UI Library Integration": 0,
    "Early Access Program Launch (100 users)": 0,
    "Custom Module Preview System": 0,
    "Documentation Publishing and Distribution": 0,
  }

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const totalWeeks = calculateTotalWeeks()

  // Color mapping for milestones
  const getMilestoneColor = (id: string) => {
    const colors = {
      "1": "from-cyan-500 to-cyan-700"
    }
    return colors[id as keyof typeof colors] || "from-gray-500 to-gray-700"
  }

  // Enhanced color mapping for task types with better categorization
  const getTaskColor = (taskName: string) => {
    const name = taskName.toLowerCase()
    
    // AI & Machine Learning
    if (name.includes("ai") || name.includes("generator") || name.includes("nlp") || name.includes("models")) return "bg-purple-400"
    
    // UI/UX & Frontend
    if (name.includes("dashboard") || name.includes("ui") || name.includes("landing") || name.includes("theme") || 
        name.includes("ux") || name.includes("responsive") || name.includes("visual") || name.includes("preview")) return "bg-blue-400"
    
    // Backend & Infrastructure
    if (name.includes("backend") || name.includes("logging") || name.includes("integration") || 
        name.includes("validation") || name.includes("scanning")) return "bg-green-400"
    
    // Security & Quality Assurance
    if (name.includes("audit") || name.includes("security") || name.includes("validation") || 
        name.includes("regression") || name.includes("a11y")) return "bg-red-400"
    
    // Community & Marketing
    if (name.includes("partnership") || name.includes("ecosystem") || name.includes("community") || 
        name.includes("access") || name.includes("launch")) return "bg-yellow-400"
    
    // Documentation & Support
    if (name.includes("documentation") || name.includes("tutorial") || name.includes("training") || 
        name.includes("publishing") || name.includes("distribution")) return "bg-indigo-400"
    
    // Modules & Development Tools
    if (name.includes("module") || name.includes("editor") || name.includes("preview") || 
        name.includes("customizable") || name.includes("drag-and-drop")) return "bg-pink-400"
    
    // Default
    return "bg-gray-400"
  }

  // Get completion status and color
  const getCompletionStatus = (taskName: string) => {
    const completion = taskCompletion[taskName as keyof typeof taskCompletion] || 0
    if (completion === 100) return { status: "completed", color: "bg-green-500", text: "Completed" }
    if (completion > 0) return { status: "in-progress", color: "bg-yellow-500", text: "In Progress" }
    return { status: "not-started", color: "bg-gray-500", text: "Not Started" }
  }

  // Check if task is in current week range
  const isTaskInCurrentWeek = (taskStartWeek: number, taskDuration: number) => {
    return currentWeek >= taskStartWeek && currentWeek < taskStartWeek + taskDuration
  }

  return (
    <main className="min-h-screen bg-black" role="main">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Top Section - Title and Description */}
        <header className="flex flex-col gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20 items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{fontFamily: 'Inter'}}>
            HyperKit Project Roadmap
          </h1>
          <p className="text-white text-base sm:text-lg leading-relaxed max-w-5xl" style={{fontFamily: 'Inter'}}>
            Complete rebranding, AI-powered project generation, and modular customization platform. Building the future of web3 development with community-driven innovation and seamless cross-chain integration.
          </p>
        </header>
        
        {/* Timeline Section */}
        <section className="bg-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl" aria-label="Project Timeline">
          {/* Timeline header with months */}
          <div className="border-b border-white/10 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
            <div className="flex min-h-[60px] sm:min-h-[70px] lg:min-h-[80px]">
              {/* Left sidebar for milestone names */}
              <div className="w-48 sm:w-56 md:w-72 lg:w-96 flex-shrink-0 flex items-center justify-center border-r border-white/10 bg-gray-800/30">
                <h2 className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-widest px-2 sm:px-4" style={{fontFamily: 'Inter'}}>
                  Project Phases
                </h2>
              </div>
              
              {/* Timeline grid with enhanced mobile scrolling */}
              <div className="flex-1 flex relative overflow-x-auto scrollbar-hide min-w-0">
                {/* Current week indicator */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10 animate-pulse"
                  style={{
                    left: `${((currentWeek - 1) / totalWeeks) * 100}%`,
                  }}
                />
                {months.map((month, idx) => {
                  const weeks = weeksPerMonth[idx]
                  return (
                    <div key={month} className="flex-1 border-l border-white/10 first:border-l-0 min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] bg-gradient-to-b from-gray-800/20 to-gray-900/20" style={{ flex: weeks }}>
                      <div className="px-2 sm:px-4 py-2 sm:py-3 text-center bg-gradient-to-r from-gray-700/30 to-gray-800/30">
                        <span className="text-sm sm:text-base font-bold text-white/95" style={{fontFamily: 'Inter'}}>{month}</span>
                      </div>
                      <div className="flex border-t border-white/10">
                        {Array.from({ length: weeks }).map((_, weekIdx) => {
                          const weekNumber = weeksPerMonth.slice(0, idx).reduce((a, b) => a + b, 0) + weekIdx + 1
                          const isCurrentWeek = weekNumber === currentWeek
                          return (
                            <div
                              key={weekIdx}
                              className={`flex-1 border-l border-white/10 first:border-l-0 px-1 sm:px-2 py-1 sm:py-2 text-center min-w-[30px] sm:min-w-[35px] ${
                                isCurrentWeek ? 'bg-red-500/30 shadow-lg' : 'hover:bg-white/5'
                              }`}
                            >
                              <span className={`text-xs font-medium ${isCurrentWeek ? 'text-red-300 font-bold' : 'text-white/60'}`} style={{fontFamily: 'Inter'}}>
                                W{weekNumber}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Timeline items with enhanced visualization */}
          <div className="divide-y divide-white/10" role="list" aria-label="Project milestones">
            {timelineData.map((item) => {
              const isExpanded = expandedItems.has(item.id)
              const hasSubtasks = item.tasks && item.tasks.length > 0
              const isHovered = hoveredItem === item.id

              return (
                <article key={item.id} role="listitem" aria-expanded={isExpanded}>
                  <div 
                    className="flex items-center hover:bg-white/5 transition-all duration-300 group min-h-[60px] sm:min-h-[70px]"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    role="button"
                    tabIndex={0}
                    aria-label={`${item.title} milestone, ${isExpanded ? 'expanded' : 'collapsed'}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        if (hasSubtasks) toggleItem(item.id)
                      }
                    }}
                  >
                    {/* Left sidebar - Milestone name */}
                    <div className="w-48 sm:w-56 md:w-72 lg:w-96 flex-shrink-0 px-2 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 border-r border-white/10 bg-gray-800/20">
                      <span className="text-white font-semibold group-hover:text-cyan-300 transition-colors text-xs sm:text-sm md:text-base leading-tight" style={{fontFamily: 'Inter'}}>
                        {item.title}
                      </span>
                      {hasSubtasks && (
                        <button
                          className="h-4 w-4 sm:h-5 sm:w-5 text-white/60 hover:text-cyan-300 flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white/10 rounded-full hover:bg-cyan-500/20 flex-shrink-0"
                          onClick={() => toggleItem(item.id)}
                          aria-label={isExpanded ? "Collapse tasks" : "Expand tasks"}
                        >
                          {isExpanded ? (
                            <svg className="h-3 w-3 transition-transform duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          ) : (
                            <svg className="h-3 w-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          )}
                        </button>
                      )}
                    </div>
                    
                    {/* Timeline grid area with smart tooltip container */}
                    <div className="flex-1 relative h-10 sm:h-12 overflow-visible">
                      {/* Week grid background */}
                      <div className="absolute inset-0 flex min-w-full">
                        {Array.from({ length: totalWeeks }).map((_, idx) => (
                          <div key={idx} className="flex-1 border-l border-white/5 first:border-l-0 min-w-[30px]" />
                        ))}
                      </div>
                      
                      {/* Main milestone bar */}
                      <div className="absolute inset-y-0 flex items-center px-1 min-w-full">
                        <div
                          className={`h-6 bg-gradient-to-r ${getMilestoneColor(item.id)} rounded-md relative shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 ${
                            isHovered ? 'shadow-2xl scale-110' : ''
                          }`}
                          style={{
                            marginLeft: `${((item.startWeek - 1) / totalWeeks) * 100}%`,
                            width: `${(item.duration / totalWeeks) * 100}%`,
                          }}
                          onMouseEnter={() => setHoveredItem(item.id)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          {/* Task segments within milestone bar */}
                          {item.tasks && (
                            <div className="absolute inset-0 flex">
                              {item.tasks.map((task, taskIdx) => {
                                const taskStart = ((task.startWeek - item.startWeek) / item.duration) * 100
                                const taskWidth = (task.duration / item.duration) * 100
                                return (
                                  <div
                                    key={taskIdx}
                                    className={`h-full ${getTaskColor(task.name)} opacity-80 rounded-sm mx-0.5`}
                                    style={{
                                      marginLeft: `${taskStart}%`,
                                      width: `${taskWidth}%`,
                                    }}
                                    title={task.name}
                                  />
                                )
                              })}
                            </div>
                          )}
                          
                          {/* Milestone label */}
                          <span className="absolute left-full ml-2 text-xs text-white/90 whitespace-nowrap top-1/2 -translate-y-1/2 font-semibold" style={{fontFamily: 'Inter'}}>
                            W{item.startWeek}-{item.startWeek + item.duration - 1}
                          </span>

                                 {/* Milestone hover tooltip with smart positioning to prevent cut-off */}
                                 {isHovered && (() => {
                                   const position = getMilestoneTooltipPosition(
                                     ((item.startWeek - 1) / totalWeeks) * 100,
                                     (item.duration / totalWeeks) * 100,
                                     320
                                   )
                                   return (
                                     <div className="absolute z-50 bg-gray-900/98 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-2xl max-w-sm pointer-events-none animate-in fade-in-0 zoom-in-95 duration-200"
                                          style={{
                                            left: position.left,
                                            transform: position.transform,
                                            bottom: '100%',
                                            marginBottom: '16px',
                                            minWidth: '300px',
                                            maxWidth: '400px',
                                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2)',
                                            // Ensure tooltip stays within container bounds
                                            position: 'absolute',
                                            zIndex: 9999
                                          }}>
                                       {/* Enhanced arrow pointing down to the bar */}
                                       <div 
                                         className="absolute top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent"
                                         style={{
                                           left: position.arrowPosition === 'left' ? '24px' : 
                                                 position.arrowPosition === 'right' ? 'calc(100% - 24px)' : 
                                                 '50%',
                                           transform: position.arrowPosition === 'center' ? 'translateX(-50%)' : 'none',
                                           borderTopColor: 'rgba(17, 24, 39, 0.98)'
                                         }}
                                       ></div>
                                     
                                     <h3 className="text-white font-semibold mb-3 text-sm" style={{fontFamily: 'Inter'}}>
                                       {item.title}
                                     </h3>
                                     <p className="text-white/80 text-xs mb-4 leading-relaxed" style={{fontFamily: 'Inter'}}>
                                       {item.description}
                                     </p>
                                     
                                     {/* Milestone timeline info */}
                                     <div className="mb-3 p-2 bg-white/10 rounded-md">
                                       <div className="flex justify-between items-center text-xs">
                                         <span className="text-white/70" style={{fontFamily: 'Inter'}}>Duration:</span>
                                         <span className="text-white font-medium" style={{fontFamily: 'Inter'}}>
                                           {item.duration} weeks
                                         </span>
                                       </div>
                                       <div className="flex justify-between items-center text-xs mt-1">
                                         <span className="text-white/70" style={{fontFamily: 'Inter'}}>Timeline:</span>
                                         <span className="text-white font-medium" style={{fontFamily: 'Inter'}}>
                                           W{item.startWeek}-{item.startWeek + item.duration - 1}
                                         </span>
                                       </div>
                                     </div>
                                     
                                     <div className="space-y-2">
                                       <div className="text-xs font-semibold text-white/90 mb-2" style={{fontFamily: 'Inter'}}>
                                         Key Tasks:
                                       </div>
                                       {item.tasks?.slice(0, 4).map((task, idx) => (
                                         <div key={idx} className="flex items-center gap-2">
                                           <div className={`w-2 h-2 rounded-full ${getTaskColor(task.name)}`} />
                                           <span className="text-white/70 text-xs" style={{fontFamily: 'Inter'}}>
                                             {task.name}
                                           </span>
                                         </div>
                                       ))}
                                       {item.tasks && item.tasks.length > 4 && (
                                         <span className="text-white/50 text-xs" style={{fontFamily: 'Inter'}}>
                                           +{item.tasks.length - 4} more tasks
                                         </span>
                                       )}
                                     </div>
                                   </div>
                                   )
                                 })()}
                               </div>
                             </div>
                           </div>
                  </div>

                  {/* Enhanced accordion content */}
                  {isExpanded && item.description && (
                    <div className="px-3 py-2 bg-white/5 border-t border-white/10 transition-all duration-300 ease-in-out">
                      <div className="flex">
                        <div className="w-48 sm:w-64 lg:w-80 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-xs text-white/70 leading-relaxed" style={{fontFamily: 'Inter'}}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {isExpanded && item.tasks && (
                    <div className="bg-gradient-to-r from-gray-900/40 to-gray-800/40 border-t border-white/10 transition-all duration-500 ease-in-out" role="region" aria-label="Task details">
                      <div className="px-2 sm:px-4 py-3 sm:py-4">
                        <div className="flex">
                          <div className="w-48 sm:w-56 md:w-72 lg:w-96 flex-shrink-0"></div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                              </div>
                              <h3 className="text-base sm:text-lg font-bold text-white" style={{fontFamily: 'Inter'}}>
                                Detailed Tasks & Timeline
                              </h3>
                              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" aria-hidden="true"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {item.tasks.map((task, taskIdx) => {
                        const completion = taskCompletion[task.name as keyof typeof taskCompletion] || 0
                        const completionStatus = getCompletionStatus(task.name)
                        const isInCurrentWeek = isTaskInCurrentWeek(task.startWeek, task.duration)
                        const taskId = `${item.id}-${taskIdx}`

  return (
                          <div
                            key={taskIdx}
                            className="flex items-center border-t border-white/5 hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-300 group min-h-[50px] relative"
                            onMouseEnter={() => setHoveredTask(taskId)}
                            onMouseLeave={() => setHoveredTask(null)}
                            role="listitem"
                            aria-label={`${task.name}, ${completionStatus.text} (${completion}%)`}
                          >
                            {/* Left sidebar - Enhanced task name with completion status */}
                            <div className="w-48 sm:w-56 md:w-72 lg:w-96 flex-shrink-0 px-3 sm:px-6 py-2 sm:py-3 border-r border-white/10 bg-gray-800/20">
                              <div className="flex items-center gap-2 sm:gap-3">
                                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${getTaskColor(task.name)} shadow-lg`} />
                                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${completionStatus.color} shadow-lg`} title={completionStatus.text} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="text-xs sm:text-sm font-medium text-white group-hover:text-cyan-300 transition-colors leading-tight block" style={{fontFamily: 'Inter'}}>
                                    {task.name}
                                  </span>
                                  <div className="flex items-center gap-1 sm:gap-2 mt-1 flex-wrap">
                                    <span className={`text-xs font-semibold px-1.5 sm:px-2 py-0.5 rounded-full ${completionStatus.color} text-white`}>
                                      {completionStatus.text}
                                    </span>
                                    <span className="text-xs text-white/60" style={{fontFamily: 'Inter'}}>
                                      {completion}%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Timeline grid area for task with enhanced Gantt chart */}
                            <div className="flex-1 relative h-12 overflow-hidden py-2">
                              {/* Week grid background with enhanced styling */}
                              <div className="absolute inset-0 flex bg-gray-900/30 rounded-lg min-w-full">
                                {Array.from({ length: totalWeeks }).map((_, idx) => (
                                  <div 
                                    key={idx} 
                                    className="flex-1 border-l border-white/10 first:border-l-0 min-w-[30px] hover:bg-white/5 transition-colors"
                                    style={{ flex: 1 }}
                                  />
                                ))}
                              </div>
                              
                              {/* Current week indicator for this task */}
                              {isInCurrentWeek && (
                                <div
                                  className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-20"
                                  style={{
                                    left: `${((currentWeek - 1) / totalWeeks) * 100}%`,
                                  }}
                                />
                              )}
                              
                              {/* Enhanced task bar with completion percentage */}
                              <div className="absolute inset-y-0 flex items-center justify-between px-2 w-full">
                                <div className="flex items-center w-full">
                                  <div
                                    className={`h-6 ${getTaskColor(task.name)} rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer relative overflow-visible border border-white/20 ${
                                      hoveredTask === taskId ? 'shadow-2xl scale-110 ring-2 ring-cyan-400/50' : ''
                                    }`}
                                    style={{
                                      marginLeft: `${((task.startWeek - 1) / totalWeeks) * 100}%`,
                                      width: `${(task.duration / totalWeeks) * 100}%`,
                                      minWidth: '8px', // Ensure minimum visibility
                                      maxWidth: '100%', // Prevent overflow
                                    }}
                                    onMouseEnter={() => setHoveredTask(taskId)}
                                    onMouseLeave={() => setHoveredTask(null)}
                                  >
                                    {/* Background progress track */}
                                    <div className="absolute inset-0 bg-gray-600/30 rounded-lg"></div>
                                    
                                    {/* Enhanced completion progress bar with proper horizontal filling */}
                                    <div
                                      className={`h-full ${completionStatus.color} rounded-lg transition-all duration-500 relative overflow-hidden`}
                                      style={{
                                        width: `${Math.max(completion, 2)}%`, // Minimum 2% width for visibility
                                        minWidth: completion > 0 ? '12px' : '0px', // Ensure minimum visible width
                                        maxWidth: '100%', // Prevent overflow
                                      }}
                                    >
                                      {/* Progress bar without percentage text to avoid duplication */}
                                      
                                      {/* Animated shimmer effect for in-progress tasks */}
                                      {completion > 0 && completion < 100 && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                                      )}
                                      
                                      {/* Completion checkmark for 100% tasks */}
                                      {completion === 100 && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                          </svg>
                                        </div>
                                      )}
                                    </div>

                                    {/* Task hover tooltip - anchored to the bar */}
                                    {hoveredTask === taskId && (() => {
                                      const position = getTooltipPosition(
                                        ((task.startWeek - 1) / totalWeeks) * 100,
                                        (task.duration / totalWeeks) * 100,
                                        300
                                      )
                                      return (
                                        <div 
                                          className="absolute z-50 bg-gradient-to-br from-gray-900/98 to-gray-800/98 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl max-w-md pointer-events-none animate-in fade-in-0 zoom-in-95 duration-300"
                                          style={{
                                            left: position.left,
                                            transform: position.transform,
                                            bottom: '100%',
                                            marginBottom: '20px',
                                            minWidth: '320px',
                                            maxWidth: '400px',
                                            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.3)',
                                            zIndex: 9999
                                          }}
                                        >
                                          {/* Enhanced arrow pointing down to the bar */}
                                          <div 
                                            className="absolute top-full w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent"
                                            style={{
                                              left: position.arrowPosition === 'left' ? '32px' : 
                                                    position.arrowPosition === 'right' ? 'calc(100% - 32px)' : 
                                                    '50%',
                                              transform: position.arrowPosition === 'center' ? 'translateX(-50%)' : 'none',
                                              borderTopColor: 'rgba(17, 24, 39, 0.98)'
                                            }}
                                          ></div>
                                        
                                        <div className="flex items-center gap-3 mb-4">
                                          <div className={`w-3 h-3 rounded-full ${getTaskColor(task.name)} shadow-lg`}></div>
                                          <h4 className="text-white font-bold text-base" style={{fontFamily: 'Inter'}}>
                                            {task.name}
                                          </h4>
                                          {completion === 100 && (
                                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                              </svg>
                                            </div>
                                          )}
                                        </div>
                                        <div className="space-y-4">
                                          {/* Enhanced progress section */}
                                          <div className="bg-gray-800/50 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-3">
                                              <span className="text-white/80 text-sm font-semibold" style={{fontFamily: 'Inter'}}>Progress Status</span>
                                              <span className={`text-sm font-bold px-3 py-1 rounded-full ${completionStatus.color} text-white shadow-lg`}>
                                                {completionStatus.text} ({completion}%)
                                              </span>
                                            </div>
                                            <div className="bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
                                              <div 
                                                className={`h-full ${completionStatus.color} rounded-full transition-all duration-500 relative`}
                                                style={{ width: `${completion}%` }}
                                              >
                                                {completion > 0 && completion < 100 && (
                                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                          
                                          <div className="bg-gray-800/30 rounded-lg p-4">
                                            <h5 className="text-white/90 text-sm font-semibold mb-3" style={{fontFamily: 'Inter'}}>Task Details</h5>
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                              <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                  <span className="text-white/70" style={{fontFamily: 'Inter'}}>Status:</span>
                                                  <span className={`font-semibold ${completionStatus.color.replace('bg-', 'text-')}`} style={{fontFamily: 'Inter'}}>
                                                    {completionStatus.text}
                                                  </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                  <span className="text-white/70" style={{fontFamily: 'Inter'}}>Duration:</span>
                                                  <span className="text-white font-medium" style={{fontFamily: 'Inter'}}>
                                                    {task.duration} weeks
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                  <span className="text-white/70" style={{fontFamily: 'Inter'}}>Start Week:</span>
                                                  <span className="text-white font-medium" style={{fontFamily: 'Inter'}}>
                                                    W{task.startWeek}
                                                  </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                  <span className="text-white/70" style={{fontFamily: 'Inter'}}>End Week:</span>
                                                  <span className="text-white font-medium" style={{fontFamily: 'Inter'}}>
                                                    W{task.startWeek + task.duration - 1}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          
                                          {isInCurrentWeek && (
                                            <div className="flex items-center gap-3 mt-3 p-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg border border-red-500/30">
                                              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-lg"></div>
                                              <span className="text-red-300 text-sm font-bold" style={{fontFamily: 'Inter'}}>
                                                🚀 Currently Active
                                              </span>
                                              <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent"></div>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                      )
                                    })()}
                                  </div>
                                  
                                
                                </div>
                                
                               
                              </div>
        </div>

                          </div>
                        )
                      })}
                    </div>
                  )}

                </article>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  );
}