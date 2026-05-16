import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaStrip } from "@/components/site/CtaStrip";
import about from "@/assets/about.jpg";
import { CountUp } from "@/components/site/CountUp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Silverline Events & Exhibitions" },
      { name: "description", content: "Mumbai-based, globally minded. Silverline delivers precision-crafted exhibition experiences for brands across India, USA, and Europe." },
      { property: "og:title", content: "About Silverline" },
      { property: "og:description", content: "Mumbai-based exhibition company delivering booth design and fabrication globally. " },
      { property: "og:image", content: about },
      { name: "twitter:image", content: about },
    ],
  }),
  component: About,
});

const TEAM = [
  { name: "Hasti Vasa", role: "Founding Partner & Managing Director", bio: "Two decades shaping how brands show up at the world's biggest exhibitions. Hasti leads design and client strategy across the studio." },
  { name: "Wilfred Fernandes", role: "Founding Partner & CEO", bio: "Operations, fabrication, and global delivery. Wilfred runs the build and ensures every project lands — on time, on brief, on the floor." },
];

function About() {
  return (
    <>
      <section className="relative -mt-24 flex min-h-[60svh] items-end overflow-hidden border-b border-border bg-background md:-mt-28">
        <img src={about} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="container-x relative w-full pt-40 pb-16 md:pb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-silver">About Silverline</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.95] text-foreground text-balance md:text-7xl lg:text-8xl">
            Precision-crafted<br /><span className="text-silver">exhibition experiences.</span>
          </h1>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="border-b border-border bg-background py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-silver">Our Story</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground md:text-5xl text-balance">
              Founded in 2025 with a clear ambition.
            </h2>
            <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-foreground/80 md:text-lg">
              <p>
                Silverline began with a simple observation: too many exhibition booths look the part but fail the brief.
                Beautiful renders, sloppy execution. Or rugged builds without a story.
              </p>
              <p>
                We built Silverline to solve both ends — designing booths that read like a brand and building them with the
                discipline of a fabrication studio. One team. One accountability. One signature on the final handover.
              </p>
              <p>
                From Mumbai, we now deliver across India, the USA, and Europe — with on-ground crews and partner networks
                in every market we work in.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-surface">
            <img src={about} alt="Silverline studio" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-surface py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-3">
          {[
            { v: 70, s: "+", l: "Booths Delivered" },
            { v: 3, s: "", l: "Continents" },
            { v: 100, s: "%", l: "End-to-End Delivery" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-7xl font-bold leading-none text-silver md:text-8xl">
                <CountUp to={s.v} suffix={s.s} />
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-silver-muted">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="border-b border-border bg-background py-24 md:py-32">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.3em] text-silver">The Founders</p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.05] text-foreground md:text-5xl text-balance">
            Two partners. One studio.
          </h2>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {TEAM.map((m) => (
              <div key={m.name} className="bg-background p-10 md:p-12">
                <div className="aspect-[4/5] w-full max-w-sm bg-surface" />
                <h3 className="mt-8 font-display text-2xl font-bold text-foreground md:text-3xl">{m.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-silver">{m.role}</p>
                <p className="mt-5 max-w-md text-base font-light leading-relaxed text-silver">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="border-b border-border bg-surface py-20">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.3em] text-silver">Credentials &amp; Memberships</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {["Recognised at IDAC", "Elite Member of AESDAC", "Member of IEIA"].map((c) => (
              <span
                key={c}
                className="rounded-full border border-silver/40 px-6 py-3 text-xs font-light uppercase tracking-[0.2em] text-silver"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />

      <div className="hidden">
        <Link to="/contact">contact</Link>
      </div>
    </>
  );
}
