"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({ children, className }: MagneticButtonProps) {
  // Simple version - no magnetic effect
  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
}
