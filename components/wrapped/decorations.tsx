"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function Noise() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay">
      <svg width="100%" height="100%">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  )
}

export function Barcode({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-stretch h-12 gap-[2px] opacity-60", className)}>
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "bg-current",
            Math.random() > 0.5 ? "w-[1px]" : "w-[3px]",
            Math.random() > 0.7 ? "h-full" : "h-3/4 self-center"
          )}
        />
      ))}
    </div>
  )
}

export function CornerDetail({ 
  position = "bottom-right", 
  label = "FIG. 01", 
  className 
}: { 
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  label?: string
  className?: string 
}) {
  return (
    <div 
      className={cn(
        "absolute p-4 font-mono text-[10px] tracking-widest text-muted-foreground uppercase opacity-70",
        {
          "top-0 left-0": position === "top-left",
          "top-0 right-0": position === "top-right",
          "bottom-0 left-0": position === "bottom-left",
          "bottom-0 right-0 text-right": position === "bottom-right",
        },
        className
      )}
    >
      <div className="mb-1">{label}</div>
      <div className="h-px w-16 bg-current my-1" />
      <div>{new Date().getFullYear()} / WRAPPED</div>
    </div>
  )
}

export function CrossPattern() {
  return (
    <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0v2h2v-2h-2zm18 0v2h2v-2h-2zm0 18v2h2v-2h-2zm-18 0v2h2v-2h-2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    }} />
  )
}

export function DotPattern() {
  return (
    <div className="absolute inset-0 z-0 opacity-[0.05]" style={{
      backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
      backgroundSize: "24px 24px"
    }} />
  )
}
