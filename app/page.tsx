import { Hero } from "@/components/wrapped/hero";
import { WrappedSection } from "@/components/wrapped/section";
import {
  CalendarMetric,
  CountMetric,
  MilestoneMetric,
} from "@/components/wrapped/metric-cards";
import { WRAPPED_DATA } from "@/lib/data/wrapped-2025";
import {
  Noise,
  Barcode,
  CornerDetail,
  DotPattern,
  CrossPattern,
} from "@/components/wrapped/decorations";
import { REGISTRY_LOGOS } from "@/lib/data/registry-logos";
import { Button } from "@/components/ui/button";

export default function WrappedPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans relative">
      <Noise />
      <Hero />

      {/* 1. Commits */}
      <WrappedSection>
        <DotPattern />
        <CornerDetail position="top-left" label="FIG. 01" />
        <CornerDetail position="bottom-right" label="COMMITS" />
        <Barcode className="absolute bottom-8 left-8 hidden md:flex" />
        <CountMetric
          value={WRAPPED_DATA.metrics.commits.value}
          label={WRAPPED_DATA.metrics.commits.label}
          description={WRAPPED_DATA.metrics.commits.description}
        />
      </WrappedSection>

      {/* 2. Contributors */}
      <WrappedSection background="muted">
        <CrossPattern />
        <CornerDetail position="top-right" label="FIG. 02" />
        <Barcode className="absolute top-8 left-8 hidden md:flex rotate-90 origin-top-left" />
        <CountMetric
          value={WRAPPED_DATA.metrics.contributors.value}
          label={WRAPPED_DATA.metrics.contributors.label}
          description={WRAPPED_DATA.metrics.contributors.description}
          className="text-primary"
        />
      </WrappedSection>

      {/* 3. Registries */}
      <WrappedSection className="min-h-[10vh] pb-0">
        <DotPattern />
        <CornerDetail position="bottom-left" label="FIG. 03" />
        <Barcode className="absolute bottom-8 right-8 hidden md:flex" />
        <CountMetric
          value={WRAPPED_DATA.metrics.registries.value}
          label={WRAPPED_DATA.metrics.registries.label}
          description={WRAPPED_DATA.metrics.registries.description}
          className="text-primary"
        />
      </WrappedSection>
      <WrappedSection>
        <div className="relative rounded-2xl p-2">
          <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {REGISTRY_LOGOS.slice(0, 9).map((registry) => (
              <a
                key={registry.name}
                href={registry.homepage}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col gap-3 rounded-2xl border border-border/60 bg-card/50 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted/60 text-foreground"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: registry.logo }}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold group-hover:text-primary transition-colors">
                      {registry.name}
                    </span>
                    <span className="text-xs text-muted-foreground truncate">
                      {registry.homepage.replace(/^https?:\/\//, "")}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {registry.description}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center ">
          <Button asChild>
            <a
              href="https://ui.shadcn.com/docs/directory"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              View all registries
              <span aria-hidden="true">→</span>
            </a>
          </Button>
        </div>
      </WrappedSection>

      {/* 4. Milestone Stars */}
      <WrappedSection background="brand">
        <CornerDetail
          position="top-left"
          label="FIG. 04"
          className="text-primary-foreground"
        />
        <CornerDetail
          position="bottom-right"
          label="★ 100K ★"
          className="text-primary-foreground"
        />
        <div className="text-primary-foreground relative z-10">
          <MilestoneMetric
            value={WRAPPED_DATA.metrics.stars.value}
            label={WRAPPED_DATA.metrics.stars.label}
            description={WRAPPED_DATA.metrics.stars.description}
          />
        </div>
      </WrappedSection>

      {/* 5. New Components & Blocks Split */}
      <WrappedSection>
        <CrossPattern />
        <CornerDetail position="top-right" label="FIG. 05" />
        <Barcode className="absolute top-8 left-8 hidden md:flex" />
        <div className="grid md:grid-cols-2 gap-16 w-full max-w-6xl">
          <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 md:pr-8 group cursor-default">
            <div className="text-6xl sm:text-8xl font-black group-hover:scale-110 transition-transform">
              {WRAPPED_DATA.metrics.newComponents.value}
            </div>
            <div className="text-xl sm:text-3xl font-bold mt-2 group-hover:text-primary transition-colors">
              {WRAPPED_DATA.metrics.newComponents.label}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center group cursor-default">
            <div className="text-6xl sm:text-8xl font-black group-hover:scale-110 transition-transform">
              {WRAPPED_DATA.metrics.newBlocks.value}
            </div>
            <div className="text-xl sm:text-3xl font-bold mt-2 group-hover:text-primary transition-colors">
              {WRAPPED_DATA.metrics.newBlocks.label}
            </div>
          </div>
        </div>
      </WrappedSection>

      {/* 7 & 8. Forks and PRs */}
      <WrappedSection background="muted">
        <DotPattern />
        <CornerDetail position="bottom-left" label="FIG. 06" />
        <Barcode className="absolute bottom-8 right-8 hidden md:flex" />
        <div className="flex flex-col gap-24">
          <CountMetric
            value={WRAPPED_DATA.metrics.forks.value}
            label={WRAPPED_DATA.metrics.forks.label}
            description={WRAPPED_DATA.metrics.forks.description}
          />
          <CountMetric
            value={WRAPPED_DATA.metrics.pullRequests.value}
            label={WRAPPED_DATA.metrics.pullRequests.label}
            description={WRAPPED_DATA.metrics.pullRequests.description}
          />
        </div>
      </WrappedSection>

      {/* 9. Top Contributor */}
      <WrappedSection>
        <CrossPattern />
        <CornerDetail position="top-left" label="FIG. 07" />
        <CornerDetail position="bottom-right" label="MVP 2025" />
        <Barcode className="absolute top-8 right-8 hidden md:flex" />
        <div className="flex flex-col items-center relative z-10">
          <h3 className="text-2xl font-bold uppercase tracking-widest text-muted-foreground">
            {WRAPPED_DATA.metrics.topContributor.label}
          </h3>

          <div className="relative mb-8">
            <div className="absolute inset-0 bg-primary blur-3xl opacity-20 rounded-full animate-pulse"></div>
            {/* Use a placeholder div if image fails or use the github avatar */}
            <div className="w-64 h-64 rounded-full bg-muted border-8 border-background shadow-2xl overflow-hidden relative z-10 flex items-center justify-center text-6xl font-black text-muted-foreground hover:scale-105 transition-transform">
              <a
                href={WRAPPED_DATA.metrics.topContributor.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={WRAPPED_DATA.metrics.topContributor.avatar}
                  alt={WRAPPED_DATA.metrics.topContributor.name}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black mb-2 hover:text-primary transition-colors">
            {WRAPPED_DATA.metrics.topContributor.name}
          </h2>
          <p className="text-xl sm:text-3xl text-primary font-bold mb-6">
            {WRAPPED_DATA.metrics.topContributor.handle}
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl text-center">
            {WRAPPED_DATA.metrics.topContributor.description}
          </p>
        </div>
      </WrappedSection>

      {/* 11. Active Month */}
      <WrappedSection className="pt-0">
        <CrossPattern />
        <CornerDetail position="bottom-left" label="FIG. 09" />
        <Barcode className="absolute top-8 right-8 hidden md:flex" />
        <CalendarMetric
          month={WRAPPED_DATA.metrics.mostActiveMonth.month}
          count={WRAPPED_DATA.metrics.mostActiveMonth.count}
          label={WRAPPED_DATA.metrics.mostActiveMonth.label}
          description={WRAPPED_DATA.metrics.mostActiveMonth.description}
        />
      </WrappedSection>

      {/* Footer */}
      <footer className="py-24 flex flex-col items-center justify-center bg-foreground text-background text-center relative">
        <Barcode className="absolute top-8 left-8 hidden md:flex text-background/30" />
        <Barcode className="absolute bottom-8 right-8 hidden md:flex text-background/30" />
        <p className="text-2xl font-bold mb-8">{WRAPPED_DATA.footer.text}</p>
        <a
          href={WRAPPED_DATA.footer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-background text-foreground rounded-full text-xl font-bold hover:scale-105 transition-transform"
        >
          {WRAPPED_DATA.footer.cta}
        </a>
      </footer>
    </main>
  );
}
