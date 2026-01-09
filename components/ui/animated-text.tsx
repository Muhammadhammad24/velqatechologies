"use client"

import { useState, useEffect } from "react"

interface AnimatedTextProps {
  texts: string[]
  className?: string
  interval?: number
}

export function AnimatedText({ texts, className = "", interval = 3000 }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <div className={`relative ${className}`}>
      {texts.map((text, index) => (
        <div
          key={text}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          {text}
        </div>
      ))}
      {/* Invisible text to maintain height */}
      <div className="opacity-0 pointer-events-none">
        {texts[0]}
      </div>
    </div>
  )
}