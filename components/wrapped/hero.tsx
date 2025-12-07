"use client";

import { WrappedSection } from "@/components/wrapped/section";
import { WRAPPED_DATA } from "@/lib/data/wrapped-2025";
import { RegistryLogos } from "@/components/wrapped/registry-logos";

import { RootComponents } from "../root";

import GradientText from "../GradientText";
import { TextEffect } from "../text-effect";

export function Hero() {
  return (
    <>
      <div className="absolute inset-0 w-screen h-screen z-10 top-0 left-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      <WrappedSection className="relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="abosolute top-[10%] left-0 opacity-15 w-full cale-75 animate-levitate delay-1000">
            <RootComponents />
          </div>

          {/* Grid pattern overlay */}
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 relative w-24 h-24 md:w-32 md:h-32 bg-foreground rounded-lg flex items-center justify-center shadow-2xl rotate-3 hover:rotate-6 transition-transform duration-300 group">
            {/* Placeholder for shadcn logo if no image available, but using the file we saw earlier if possible */}
            {/* I saw logo.png in public earlier. */}
            <div className="text-background font-bold text-4xl group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-16 w-16"
              >
                <rect
                  width="256"
                  height="256"
                  rx="60"
                  fill="currentColor"
                  fillOpacity="0"
                />
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
              </svg>
            </div>
          </div>

          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h1"
            className="inline-block rounded-full bg-border px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
          >
            {WRAPPED_DATA.hero.badge}
          </TextEffect>

          <div className="space-y-4">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="text-4xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl mx-auto leading-[0.9] hover:scale-[1.01] transition-transform duration-500"
            >
              shadcn/ui
            </TextEffect>

            <GradientText
              className="text-4xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl mx-auto leading-[0.9] hover:scale-[1.01] transition-transform duration-500"
              colors={["#6b2069", "#a83e8d", "#eb77bc", "#f8bec5", "#93c7df"]}
              animationSpeed={3}
              showBorder={false}
            >
              {WRAPPED_DATA.hero.title}
            </GradientText>
          </div>

          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            {WRAPPED_DATA.hero.subtitle}
          </p>

          {/* <div className="mt-12 w-full">
            <RegistryLogos />
          </div> */}
        </div>

        {/* Decorative barcode-like elements */}
        <div className="absolute bottom-8 left-8 hidden md:flex gap-1 opacity-70">
          <div className="w-1 h-32 bg-foreground"></div>
          <div className="w-2 h-32 bg-foreground"></div>
          <div className="w-4 h-32 bg-foreground"></div>
          <div className="w-1 h-32 bg-foreground"></div>
        </div>

        <div className="absolute top-8 right-8 hidden md:flex gap-1 opacity-70">
          <div className="w-4 h-32 bg-foreground"></div>
          <div className="w-2 h-32 bg-foreground"></div>
          <div className="w-1 h-32 bg-foreground"></div>
        </div>
      </WrappedSection>
    </>
  );
}
