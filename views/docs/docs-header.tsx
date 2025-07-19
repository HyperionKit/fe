"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function DocsHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="container flex h-16 items-center max-w-6xl mx-auto">
        {" "}
        {/* Added max-w-6xl and mx-auto */}
        <Link href="#" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Hyperkit</span>
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Get Started
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Metis Chain
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Hyperkit
          </Link>
        </nav>
      </div>
    </header>
  )
}
