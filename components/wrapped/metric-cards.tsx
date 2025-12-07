"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
// Intentionally avoiding external deps for count up if not available
import { WrappedSection } from "./section";
import CountUp from "../CountUp";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const update = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const percentage = Math.min(progress / duration, 1);
      // Ease out quart
      const ease = 1 - Math.pow(1 - percentage, 4);

      setCount(Math.floor(end * ease));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

export function CountMetric({
  value,
  label,
  description,
  className,
}: {
  value: number;
  label: string;
  description: string;
  className?: string;
}) {
  const count = useCountUp(value);

  return (
    <div className={cn("text-center group cursor-default", className)}>
      <div className="text-8xl sm:text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
        <CountUp
          from={0}
          to={count}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text tabular-nums"
        />
      </div>
      <h2 className="text-4xl sm:text-6xl font-extrabold uppercase mt-10 mb-2 group-hover:text-primary transition-colors">
        {label}
      </h2>
      <p className="text-xl sm:text-3xl text-muted-foreground group-hover:text-foreground transition-colors">
        {description}
      </p>
    </div>
  );
}

export function LeaderboardMetric({
  items,
  title,
  description,
}: {
  items: readonly { name: string; commits: number }[];
  title: string;
  description: string;
}) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-5xl font-black text-center mb-12 tracking-tight">
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between p-6 bg-secondary/50 rounded-lg border border-border group hover:scale-[1.02] transition-transform duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                {index + 1}
              </span>
              <span className="text-2xl font-bold">{item.name}</span>
            </div>
            <div className="text-xl font-mono text-muted-foreground">
              {item.commits} commits
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-8 text-xl text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export function MilestoneMetric({
  value,
  label,
  description,
}: {
  value: number;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center relative">
      {/* Confetti or simple particle effects via css could go here */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-9xl animate-bounce delay-1000 duration-1000">
        ✨
      </div>
      <div className="text-8xl sm:text-[10rem] md:text-[14rem] text-white font-black leading-none tracking-tighter animate-pulse">
        <CountUp
          from={0}
          to={value}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
      </div>
      <h2 className="text-2xl sm:text-4xl font-black mt-10 mb-4 uppercase tracking-widest">
        {label}
      </h2>
      <p className="text-lg sm:text-2xl text-muted-foreground">{description}</p>
    </div>
  );
}

export function CalendarMetric({
  month,
  count,
  label,
  description,
}: {
  month: string;
  count: number;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center group cursor-pointer">
      <div className="inline-flex flex-col items-center justify-center p-12 bg-card border-4 border-primary rounded-3xl shadow-[8px_8px_0px_0px_var(--color-primary)] mb-8 transform -rotate-2 group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-[16px_16px_0px_0px_var(--color-primary)] transition-all duration-300">
        <span className="text-4xl font-bold uppercase tracking-widest mb-2 border-b-4 border-border w-full pb-2">
          {month}
        </span>
        <span className="text-7xl sm:text-9xl font-black">{count}</span>
        <span className="text-xl font-medium text-muted-foreground mt-2">
          Commits
        </span>
      </div>
      <h2 className="text-4xl font-bold mb-2 group-hover:text-primary transition-colors">
        {label}
      </h2>
      <p className="text-xl text-muted-foreground">{description}</p>
    </div>
  );
}
