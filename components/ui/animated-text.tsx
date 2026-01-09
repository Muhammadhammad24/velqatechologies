"use client"

import { useState, useEffect } from "react"

interface AnimatedTextProps {
  texts: string[]
  className?: string
  interval?: number
}

export function AnimatedText({ texts, className = "", interval = 3000 }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsAnimating(false)
      }, 500)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <div className={className}>
      <span
        style={{
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating ? "translateY(-20px)" : "translateY(0)",
          transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
          display: "inline-block",
        }}
      >
        {texts[currentIndex]}
      </span>
    </div>
  )
}