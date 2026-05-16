import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaStrip } from "@/components/site/CtaStrip";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — How Silverline Works" },
      { name: "description", content: "Brief, design, revisions, finalisation, setup, execution. Six considered steps from idea to exhibition floor." },
      { property: "og:title", content: "Our Process — Silverline" },
      { property: "og:description", content: "Six steps from brief to handover. " },
    ],
  }),
  component: Process,
});

const STEPS = [
  { n: "01", t: "Brief", d: "We start with a deep dive into your brand, goals, exhibition, and audience. The sharper the brief, the sharper the booth." },
  { n: "02", t: "Design", d: "Custom 3D concepts crafted around your identity and the show floor. Renders, walkthroughs, material samples — you see it before we build it." },
  { n: "03", t: "Revisions", d: "Refinement is part of the process. We iterate until the design is exactly right and signed off with confidence." },
  { n: "04", t: "Finalisation", d: "Design locked, materials confirmed, structural drawings issued. Production begins in our network of vetted fabrication partners." },
  { n: "05", t: "Setup", d: "Freight, customs, build-out, supervision. Our team handles every operational detail at the venue so you don't have to." },
  { n: "06", t: "Execution & Handover", d: "We're on-site through the show. Maintenance, support, and a clean dismantle at the end. You walk in. You walk out. We do the rest." },
];

function Process() {
  return (
    <>
      <section className="relative -mt-24 flex min-h-[60svh] items-end overflow-hidden border-b border-border bg-background md:-mt-28">
        <div className="container-x w-full pt-40 pb-16 md:pb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-silver">How We Work</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.95] text-foreground text-balance md:text-7xl lg:text-8xl">
            Six steps.<br /><span className="text-silver">One signature.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light text-silver">
            Every project follows the same disciplined arc — adapted to your brand, scale, and timeline.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          {STEPS.map((s, i) => (
            <div key={s.n} className={`grid grid-cols-[auto_1fr] gap-8 border-b border-border py-10 md:gap-16 md:py-16 ${i === 0 ? "border-t" : ""}`}>
              <p className="font-display text-5xl font-bold text-silver/40 md:text-7xl">{s.n}</p>
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">{s.t}</h2>
                <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-silver md:text-lg">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaStrip />

      <div className="hidden">
        <Link to="/contact">contact</Link>
      </div>
    </>
  );
}
