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
    title: "Month 1: Rebrand & MVP Launch",
    description: "New logo/UI. Local-only AI project generator. Onboard first 5 developers.",
    startWeek: 1,
    duration: 4,
    tasks: [
      { name: "Branding/Logo & Landing", startWeek: 1, duration: 1 },
      { name: "AI Project Generator (local)", startWeek: 1, duration: 3 },
      { name: "User Onboarding (5 devs)", startWeek: 1, duration: 4 },
    ],
  },
  {
    id: "2",
    title: "Month 2: Dashboard & Audit",
    description: "Custom dashboard, first NFT mint boilerplate, launch one on-chain component, smart contract audit, onboard 10 devs.",
    startWeek: 5,
    duration: 4,
    tasks: [
      { name: "Dashboard Customization", startWeek: 5, duration: 2 },
      { name: "NFT Mint Boilerplate", startWeek: 6, duration: 2 },
      { name: "Initial Audit", startWeek: 7, duration: 2 },
      { name: "Dev Onboarding (10 devs)", startWeek: 5, duration: 4 },
      { name: "Ecosystem Partnership", startWeek: 7, duration: 2 },
    ],
  },
  {
    id: "3",
    title: "Month 3: Cross-chain & SDK",
    description: "Bridge support (Metis/Hyperion), SDK/CLI upgrades, open governance, onboard new partner.",
    startWeek: 9,
    duration: 4,
    tasks: [
      { name: "Bridge: Metis/Hyperion/Andromeda", startWeek: 9, duration: 3 },
      { name: "SDK/CLI Improvements", startWeek: 10, duration: 2 },
      { name: "Governance Launch", startWeek: 11, duration: 2 },
      { name: "Ecosystem Partnership", startWeek: 12, duration: 2 },
    ],
  },
  {
    id: "4",
    title: "Month 4: UI Builder & Roles",
    description: "Drag-and-drop builder, code preview, role unlocks, DeFi partnerships.",
    startWeek: 13,
    duration: 4,
    tasks: [
      { name: "AI Project Builder UX", startWeek: 13, duration: 2 },
      { name: "Code Preview", startWeek: 13, duration: 2 },
      { name: "Role Unlocks", startWeek: 15, duration: 2 },
      { name: "DeFi Partnership", startWeek: 15, duration: 2 },
    ],
  },
  {
    id: "5",
    title: "Month 5: Hosted Projects & Training",
    description: "Host AI-generated projects, enhance builder features, Discord integration, dev training, AI partner.",
    startWeek: 17,
    duration: 4,
    tasks: [
      { name: "AI Project Hosting", startWeek: 17, duration: 2 },
      { name: "Component Builder: Icons/Layout", startWeek: 18, duration: 2 },
      { name: "Discord Community Roles", startWeek: 18, duration: 2 },
      { name: "Developer Training", startWeek: 19, duration: 2 },
      { name: "AI Partnership", startWeek: 20, duration: 2 },
    ],
  },
  {
    id: "6",
    title: "Month 6: Monetization & TGE",
    description: "Launch Freemium/Premium, SaaS model, TGE readiness, ecosystem plan, >50 devs engaged.",
    startWeek: 21,
    duration: 4,
    tasks: [
      { name: "Monetization Setup (Freemium/Premium)", startWeek: 21, duration: 2 },
      { name: "Component SaaS", startWeek: 22, duration: 2 },
      { name: "TGE Prep & Tokenomics", startWeek: 23, duration: 2 },
      { name: "Ecosystem Expansion Plan", startWeek: 24, duration: 2 },
      { name: "Developer Engagement Tracking", startWeek: 21, duration: 4 },
    ],
  },
]

const months = [
  "October 2025",  // Month 1
  "November 2025",  // Month 2
  "December 2025",   // Month 3
  "January 2026",  // Month 4
  "February 2026",     // Month 5
  "March 2026",     // Month 6
]
const weeksPerMonth = [4, 4, 4, 4, 4, 4] // Each sprint is 4 weeks

export default function TimelinePage() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [hoveredTask, setHoveredTask] = useState<string | null>(null)
  const [currentWeek, setCurrentWeek] = useState(1) // Current week indicator

  // Enhanced positioning function for tooltips with better edge detection
  const getTooltipPosition = (barStartPercent: number, barWidthPercent: number, tooltipWidth: number = 320) => {
    const barCenter = barStartPercent + (barWidthPercent / 2)
    const tooltipHalfWidth = (tooltipWidth / 2) / 100 // Convert to percentage
    const leftEdge = barCenter - tooltipHalfWidth
    const rightEdge = barCenter + tooltipHalfWidth
    
    // Add padding from edges (5% margin)
    const margin = 5
    
    if (leftEdge < margin) {
      return { 
        left: `${margin}%`, 
        transform: 'translateX(0)',
        arrowPosition: 'left',
        arrowOffset: `${Math.max(0, barCenter - margin)}%`
      }
    } else if (rightEdge > (100 - margin)) {
      return { 
        left: `${100 - margin}%`, 
        transform: 'translateX(-100%)',
        arrowPosition: 'right',
        arrowOffset: `${Math.min(100, barCenter - (100 - margin))}%`
      }
    } else {
      return { 
        left: `${barCenter}%`, 
        transform: 'translateX(-50%)',
        arrowPosition: 'center',
        arrowOffset: '50%'
      }
    }
  }

  // Task completion percentages (0-100)
  const taskCompletion = {
    // Month 1 - Mostly completed/in progress
    "Branding/Logo & Landing": 80,
    "AI Project Generator (local)": 0,
    "User Onboarding (5 devs)": 0,
    
    // Month 2 - In progress
    "Dashboard Customization": 0,
    "NFT Mint Boilerplate": 0,
    "Initial Audit": 0,
    "Dev Onboarding (10 devs)": 0,
    "Ecosystem Partnership": 0,
    
    // Month 3 - Started
    "Bridge: Metis/Hyperion/Andromeda": 0,
    "SDK/CLI Improvements": 0,
    "Governance Launch": 0,
    "AI Project Builder UX": 0,
    "Code Preview": 0,
    "Role Unlocks": 0,
    "DeFi Partnership": 0,
    
    // Month 4 - Not started
    "AI Project Hosting": 0,
    "Component Builder: Icons/Layout": 0,
    "Discord Community Roles": 0,
    "Developer Training": 0,
    "AI Partnership": 0,
    
    // Month 5 - Not started
    "Monetization Setup (Freemium/Premium)": 0,
    "Component SaaS": 0,
    "TGE Prep & Tokenomics": 0,
    
    // Month 6 - Not started
    "Ecosystem Expansion Plan": 0,
    "Developer Engagement Tracking": 0,
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

  const totalWeeks = weeksPerMonth.reduce((a, b) => a + b, 0)

  // Color mapping for milestones
  const getMilestoneColor = (id: string) => {
    const colors = {
      "1": "from-purple-500 to-purple-700",
      "2": "from-blue-500 to-blue-700", 
      "3": "from-green-500 to-green-700",
      "4": "from-orange-500 to-orange-700",
      "5": "from-pink-500 to-pink-700",
      "6": "from-cyan-500 to-cyan-700"
    }
    return colors[id as keyof typeof colors] || "from-gray-500 to-gray-700"
  }

  // Color mapping for task types
  const getTaskColor = (taskName: string) => {
    if (taskName.includes("AI") || taskName.includes("Generator")) return "bg-purple-400"
    if (taskName.includes("Dashboard") || taskName.includes("UI")) return "bg-blue-400"
    if (taskName.includes("Bridge") || taskName.includes("Cross-chain")) return "bg-green-400"
    if (taskName.includes("Audit") || taskName.includes("Security")) return "bg-red-400"
    if (taskName.includes("Partnership") || taskName.includes("Ecosystem")) return "bg-yellow-400"
    if (taskName.includes("Monetization") || taskName.includes("TGE")) return "bg-cyan-400"
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
    <div className="min-h-screen bg-black px-4 py-12">
      <div className="w-full max-w-full">
        {/* Top Section - Title and Description */}
        <div className="flex flex-col gap-4 mb-12 items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight px-4" style={{fontFamily: 'Inter'}}>
            Launch DeFi, Connect Chains, Ignite Hyperion
          </h2>
          <p className="text-white text-base leading-relaxed max-w-4xl px-4" style={{fontFamily: 'Inter'}}>
            Empowers developers with modular DeFi tools and seamless cross-chain bridging, sparking innovation and community-driven growth in the Hyperion ecosystem.
          </p>
        </div>
        
        {/* Timeline Section */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden scrollbar-hide">
          {/* Timeline header with months */}
          <div className="border-b border-white/10">
            <div className="flex min-h-[100px]">
              {/* Left sidebar for milestone names */}
              <div className="w-80 flex-shrink-0 flex items-center justify-center border-r border-white/10">
                <span className="text-xs font-semibold text-white/70 uppercase tracking-wider px-2" style={{fontFamily: 'Inter'}}>
                  Milestones
                </span>
              </div>
              
              {/* Timeline grid */}
              <div className="flex-1 flex relative overflow-x-auto scrollbar-hide">
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
                    <div key={month} className="flex-1 border-l border-white/10 first:border-l-0 min-w-[100px]" style={{ flex: weeks }}>
                      <div className="px-2 py-3 text-center">
                        <span className="text-xs font-semibold text-white/90" style={{fontFamily: 'Inter'}}>{month}</span>
                      </div>
                      <div className="flex border-t border-white/10">
                        {Array.from({ length: weeks }).map((_, weekIdx) => {
                          const weekNumber = weeksPerMonth.slice(0, idx).reduce((a, b) => a + b, 0) + weekIdx + 1
                          const isCurrentWeek = weekNumber === currentWeek
                          return (
                            <div
                              key={weekIdx}
                              className={`flex-1 border-l border-white/10 first:border-l-0 px-1 py-2 text-center min-w-[25px] ${
                                isCurrentWeek ? 'bg-red-500/20' : ''
                              }`}
                            >
                              <span className={`text-xs ${isCurrentWeek ? 'text-red-400 font-bold' : 'text-white/50'}`} style={{fontFamily: 'Inter'}}>
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
          <div className="divide-y divide-white/10">
            {timelineData.map((item) => {
              const isExpanded = expandedItems.has(item.id)
              const hasSubtasks = item.tasks && item.tasks.length > 0
              const isHovered = hoveredItem === item.id

              return (
                <div key={item.id}>
                        <div 
                          className="flex items-center hover:bg-white/5 transition-all duration-300 group min-h-[70px]"
                          onMouseEnter={() => setHoveredItem(item.id)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                    {/* Left sidebar - Milestone name */}
                    <div className="w-80 flex-shrink-0 px-4 py-3 flex items-center gap-2 border-r border-white/10">
                      <span className="text-white font-medium group-hover:text-cyan-300 transition-colors text-xs leading-tight" style={{fontFamily: 'Inter'}}>
                        {item.title}
                      </span>
                      {hasSubtasks && (
                        <button
                          className="h-5 w-5 text-white/50 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                          onClick={() => toggleItem(item.id)}
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
                    
                           {/* Timeline grid area */}
                           <div className="flex-1 relative h-14 overflow-visible">
                             {/* Week grid background */}
                             <div className="absolute inset-0 flex min-w-full">
                               {Array.from({ length: totalWeeks }).map((_, idx) => (
                                 <div key={idx} className="flex-1 border-l border-white/5 first:border-l-0 min-w-[25px]" />
                               ))}
                             </div>
                             
                             {/* Main milestone bar */}
                             <div className="absolute inset-y-0 flex items-center px-1 min-w-full">
                               <div
                                 className={`h-5 bg-gradient-to-r ${getMilestoneColor(item.id)} rounded-md relative shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-105 ${
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

                                 {/* Milestone hover tooltip - anchored to the bar */}
                                 {isHovered && (() => {
                                   const position = getTooltipPosition(
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
                                            minWidth: '320px',
                                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2)'
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
                    <div className="px-4 py-3 bg-white/5 border-t border-white/10 transition-all duration-300 ease-in-out">
                      <div className="flex">
                        <div className="w-80 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-xs text-white/70 leading-relaxed" style={{fontFamily: 'Inter'}}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {isExpanded && item.tasks && (
                    <div className="bg-black/20 transition-all duration-300 ease-in-out">
                      <div className="px-4 py-2">
                        <div className="flex">
                          <div className="w-80 flex-shrink-0"></div>
                          <div className="flex-1">
                            <h4 className="text-xs font-semibold text-white/90 mb-3" style={{fontFamily: 'Inter'}}>
                              Detailed Tasks & Timeline
                            </h4>
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
                            className="flex items-center border-t border-white/5 hover:bg-white/5 transition-all duration-200 group min-h-[50px] relative"
                            onMouseEnter={() => setHoveredTask(taskId)}
                            onMouseLeave={() => setHoveredTask(null)}
                          >
                            {/* Left sidebar - Task name with completion status */}
                            <div className="w-80 flex-shrink-0 px-8 py-2 border-r border-white/10">
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${getTaskColor(task.name)}`} />
                                <span className="text-xs text-white/80 group-hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>
                                  {task.name}
                                </span>
                                <div className={`w-2 h-2 rounded-full ${completionStatus.color} ml-auto`} title={completionStatus.text} />
                              </div>
                            </div>
                            
                            {/* Timeline grid area for task with Gantt chart */}
                            <div className="flex-1 relative h-10 overflow-visible">
                              {/* Week grid background */}
                              <div className="absolute inset-0 flex">
                                {Array.from({ length: totalWeeks }).map((_, idx) => (
                                  <div key={idx} className="flex-1 border-l border-white/5 first:border-l-0 min-w-[25px]" />
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
                              
                              {/* Task bar with completion percentage */}
                              <div className="absolute inset-y-0 flex items-center justify-between px-1 w-full">
                                <div className="flex items-center">
                                  <div
                                    className={`h-2 ${getTaskColor(task.name)} rounded-full shadow-sm transition-all duration-300 group-hover:shadow-md hover:shadow-lg hover:scale-105 cursor-pointer relative overflow-visible ${
                                      hoveredTask === taskId ? 'shadow-xl scale-110' : ''
                                    }`}
                                    style={{
                                      marginLeft: `${((task.startWeek - 1) / totalWeeks) * 100}%`,
                                      width: `${(task.duration / totalWeeks) * 100}%`,
                                    }}
                                    onMouseEnter={() => setHoveredTask(taskId)}
                                    onMouseLeave={() => setHoveredTask(null)}
                                  >
                                    {/* Completion progress bar inside task bar */}
                                    <div
                                      className={`h-full ${completionStatus.color} rounded-full transition-all duration-500`}
                                      style={{
                                        width: `${completion}%`,
                                      }}
                                    />

                                    {/* Task hover tooltip - anchored to the bar */}
                                    {hoveredTask === taskId && (() => {
                                      const position = getTooltipPosition(
                                        ((task.startWeek - 1) / totalWeeks) * 100,
                                        (task.duration / totalWeeks) * 100,
                                        300
                                      )
                                      return (
                                        <div 
                                          className="absolute z-50 bg-gray-900/98 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-2xl max-w-sm pointer-events-none animate-in fade-in-0 zoom-in-95 duration-200"
                                          style={{
                                            left: position.left,
                                            transform: position.transform,
                                            bottom: '100%',
                                            marginBottom: '16px',
                                            minWidth: '300px',
                                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2)'
                                          }}
                                        >
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
                                        
                                        <h4 className="text-white font-semibold mb-3 text-sm" style={{fontFamily: 'Inter'}}>
                                          {task.name}
                                        </h4>
                                        <div className="space-y-3">
                                          {/* Progress bar in tooltip */}
                                          <div className="flex items-center gap-3">
                                            <span className="text-white/70 text-xs font-medium" style={{fontFamily: 'Inter'}}>Progress:</span>
                                            <div className="flex-1 bg-gray-700 rounded-full h-2 overflow-hidden">
                                              <div 
                                                className={`h-full ${completionStatus.color} rounded-full transition-all duration-500`}
                                                style={{ width: `${completion}%` }}
                                              />
                                            </div>
                                            <span className="text-white text-xs font-bold" style={{fontFamily: 'Inter'}}>
                                              {completion}%
                                            </span>
                                          </div>
                                          
                                          <div className="grid grid-cols-2 gap-3 text-xs">
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
                                            <div className="flex justify-between items-center col-span-2">
                                              <span className="text-white/70" style={{fontFamily: 'Inter'}}>Timeline:</span>
                                              <span className="text-white font-medium" style={{fontFamily: 'Inter'}}>
                                                W{task.startWeek}-{task.startWeek + task.duration - 1}
                                              </span>
                                            </div>
                                          </div>
                                          
                                          {isInCurrentWeek && (
                                            <div className="flex items-center gap-2 mt-2 p-2 bg-red-500/20 rounded-md">
                                              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                              <span className="text-red-400 text-xs font-semibold" style={{fontFamily: 'Inter'}}>
                                                Current Week
                                              </span>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                      )
                                    })()}
                                  </div>
                                  
                                  {/* Percentage text beside the bar */}
                                  <div className="ml-3 flex items-center gap-2">
                                    <span className="text-xs font-semibold text-white" style={{fontFamily: 'Inter'}}>
                                      {completion}% In Progress
                                    </span>
                                  </div>
                                </div>
                                
                                {/* Week range and status - right aligned */}
                                <div className="flex items-center gap-3">
                                  <span className="text-xs text-white/60" style={{fontFamily: 'Inter'}}>
                                    W{task.startWeek}-{task.startWeek + task.duration - 1}
                                  </span>
                                  <span className={`text-xs font-semibold ${completionStatus.color.replace('bg-', 'text-')}`} style={{fontFamily: 'Inter'}}>
                                    {completionStatus.text}
                                  </span>
                                </div>
                              </div>
        </div>

                          </div>
                        )
                      })}
                    </div>
                  )}

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}