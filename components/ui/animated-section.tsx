"use client"

import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
}

export function AnimatedSection({
  children,
  className,
}: AnimatedSectionProps) {
  // Simple version - no animations
  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
}
