"use client"

interface AnimatedTextProps {
  texts: string[]
  className?: string
  interval?: number
}

export function AnimatedText({ texts, className = "" }: AnimatedTextProps) {
  // Simple version - just show first text, no animation
  return (
    <div className={className}>
      {texts[0]}
    </div>
  )
}