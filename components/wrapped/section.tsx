"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface WrappedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  background?: "default" | "muted" | "brand"
}

export function WrappedSection({
  children,
  className,
  background = "default",
  ...props
}: WrappedSectionProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section
      ref={ref}
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-12 md:px-6 perspective-1000",
        {
          "bg-background text-foreground": background === "default",
          "bg-muted text-muted-foreground": background === "muted",
          "bg-primary text-primary-foreground": background === "brand",
        },
        className
      )}
      {...props}
    >
      <div 
        className={cn(
          "container relative flex flex-col items-center justify-center transition-all duration-1000 ease-out transform",
          isVisible ? "opacity-100 translate-y-0 text-foreground scale-100 blur-none" : "opacity-0 translate-y-12 scale-95 blur-sm"
        )}
      >
        {children}
      </div>
    </section>
  )
}
