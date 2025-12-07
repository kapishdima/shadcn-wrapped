"use client";

import { REGISTRY_LOGOS } from "@/lib/data/registry-logos";
import { cn } from "@/lib/utils";

type RegistryLogosProps = {
  className?: string;
};

export function RegistryLogos({ className }: RegistryLogosProps) {
  return (
    <div className={cn("w-full space-y-6", className)}>
      <div className="flex flex-col gap-2 text-left">
        <h3 className="text-xl font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Registry Logos
        </h3>
        <p className="text-muted-foreground">
          Logos pulled from the shadcn/ui directory to celebrate the ecosystem.
        </p>
      </div>

      <div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {REGISTRY_LOGOS.map((registry) => (
          <article
            key={registry.name}
            className="flex items-start gap-4 rounded-xl border border-border/70 bg-card/50 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/70 hover:shadow-md transition-shadow"
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-lg bg-muted/60 text-foreground"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: registry.logo }}
            />

            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold truncate">
                  {registry.name}
                </span>
                <a
                  href={registry.homepage}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors truncate"
                  target="_blank"
                  rel="noreferrer"
                >
                  {registry.homepage.replace(/^https?:\/\//, "")}
                </a>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {registry.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
