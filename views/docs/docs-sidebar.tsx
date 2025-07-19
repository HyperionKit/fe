"use client"

import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { ChevronRight, LifeBuoy, Play } from "lucide-react"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function DocsSidebar() {
  return (
    <div className="h-full py-6 pr-6 lg:py-8 overflow-y-auto">
      <div className="space-y-4">
        <div className="grid gap-1">
          <Link
            href="#"
            className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 hover:bg-accent hover:text-accent-foreground justify-start"
          >
            <GitHubLogoIcon className="mr-2 h-4 w-4" />
            GitHub
          </Link>
          <Link
            href="#"
            className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 hover:bg-accent hover:text-accent-foreground justify-start"
          >
            <Play className="mr-2 h-4 w-4" />
            Playground
          </Link>
          <Link
            href="#"
            className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 hover:bg-accent hover:text-accent-foreground justify-start"
          >
            <LifeBuoy className="mr-2 h-4 w-4" />
            Support
          </Link>
        </div>

        <div className="grid gap-2">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground [&[data-state=open]>svg]:rotate-90">
              Introduction
              <ChevronRight className="h-4 w-4 shrink-0 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="grid gap-1 pl-4">
              <Link
                href="#"
                className={`inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 justify-start bg-accent text-accent-foreground`}
              >
                Getting Started
              </Link>
              <Link
                href="#"
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 hover:bg-accent hover:text-accent-foreground justify-start"
              >
                Telemetry
              </Link>
              <Link
                href="#"
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 hover:bg-accent hover:text-accent-foreground justify-start"
              >
                Troubleshooting
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground [&[data-state=open]>svg]:rotate-90">
              Installation
              <ChevronRight className="h-4 w-4 shrink-0 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="grid gap-1 pl-4">
              <Link
                href="#"
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 hover:bg-accent hover:text-accent-foreground justify-start"
              >
                Next.js Installation
              </Link>
              <Link
                href="#"
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 hover:bg-accent hover:text-accent-foreground justify-start"
              >
                Vite Installation
              </Link>
              <Link
                href="#"
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 hover:bg-accent hover:text-accent-foreground justify-start"
              >
                Remix Installation
              </Link>
              <Link
                href="#"
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 hover:bg-accent hover:text-accent-foreground justify-start"
              >
                Astro Installation
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground [&[data-state=open]>svg]:rotate-90">
              Config
              <ChevronRight className="h-4 w-4 shrink-0 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="grid gap-1 pl-4">
              <Link
                href="#"
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 hover:bg-accent hover:text-accent-foreground justify-start"
              >
                {"<OnchainKitProvider />"}
              </Link>
              <Link
                href="#"
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 hover:bg-accent hover:text-accent-foreground justify-start"
              >
                Supplemental Providers
              </Link>
            </CollapsibleContent>
          </Collapsible>

          <Link
            href="#"
            className="inline-flex items-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Guides
          </Link>
        </div>
      </div>
    </div>
  )
}
