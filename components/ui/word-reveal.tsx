"use client"

import { useState, useEffect } from "react"

interface WordRevealProps {
  text: string
  className?: string
  wordDelay?: number
  startDelay?: number
}

export function WordReveal({ text, className = "", wordDelay = 200, startDelay = 0 }: WordRevealProps) {
  const [visibleWords, setVisibleWords] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  
  const words = text.split(" ")

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true)
    }, startDelay)

    return () => clearTimeout(startTimer)
  }, [startDelay])

  useEffect(() => {
    if (!isStarted) return

    if (visibleWords < words.length) {
      const timer = setTimeout(() => {
        setVisibleWords(visibleWords + 1)
      }, wordDelay)

      return () => clearTimeout(timer)
    }
  }, [visibleWords, words.length, wordDelay, isStarted])

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out ${
            index < visibleWords
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
          style={{
            transitionDelay: `${index * 50}ms`
          }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  )
}