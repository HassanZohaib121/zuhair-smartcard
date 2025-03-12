'use client'
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

export const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null)
    const cursorDotRef = useRef<HTMLDivElement>(null)
    const [isPointer, setIsPointer] = useState(false)
  
    useEffect(() => {
      const cursor = cursorRef.current
      const cursorDot = cursorDotRef.current
  
      if (!cursor || !cursorDot) return
  
      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
  
        // Main cursor follows with a delay
        cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`
  
        // Dot follows immediately
        cursorDot.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`
  
        // Check if hovering over clickable elements
        const target = e.target as HTMLElement
        const isClickable =
          target.tagName.toLowerCase() === "a" ||
          target.tagName.toLowerCase() === "button" ||
          target.closest("a") ||
          target.closest("button") ||
          target.classList.contains("cursor-pointer") ||
          target.closest(".cursor-pointer")
  
        setIsPointer(isClickable?true:false)
      }
  
      const onMouseDown = () => {
        cursor.classList.add("scale-75")
      }
  
      const onMouseUp = () => {
        cursor.classList.remove("scale-75")
      }
  
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
  
      return () => {
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mousedown", onMouseDown)
        document.removeEventListener("mouseup", onMouseUp)
      }
    }, [])
  
    return (
      <>
        <div
          ref={cursorRef}
          className={cn(
            "fixed pointer-events-none z-50 h-8 w-8 rounded-full border border-primary dark:border-white bg-background/80 opacity-0 backdrop-blur transition-all duration-300 ease-out",
            "mix-blend-difference",
            isPointer ? "scale-150" : "",
            "opacity-100 ",
          )}
        />
        <div
          ref={cursorDotRef}
          className="fixed pointer-events-none z-50 h-1 w-1 rounded-full bg-primary dark:bg-white transition-opacity duration-300 opacity-100"
        />
      </>
    )
  }