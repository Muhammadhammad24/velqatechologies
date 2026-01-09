"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: string
  className?: string
  duration?: number
}

export function AnimatedCounter({ value, className, duration = 2000 }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  // Parse the numeric part and suffix
  const numericMatch = value.match(/^([\d.]+)(.*)$/)
  const targetNumber = numericMatch ? Number.parseFloat(numericMatch[1]) : 0
  const suffix = numericMatch ? numericMatch[2] : value

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const isDecimal = value.includes(".")

          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Easing function for smooth deceleration
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const current = targetNumber * easeOutQuart

            if (isDecimal) {
              setDisplayValue(current.toFixed(1))
            } else {
              setDisplayValue(Math.floor(current).toString())
            }

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setDisplayValue(numericMatch ? numericMatch[1] : value)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, duration, targetNumber, hasAnimated, numericMatch])

  // Special handling for non-numeric values like "24/7"
  if (!numericMatch || value === "24/7") {
    return (
      <span ref={ref} className={cn(className)}>
        {value}
      </span>
    )
  }

  return (
    <span ref={ref} className={cn(className)}>
      {displayValue}
      {suffix}
    </span>
  )
}
