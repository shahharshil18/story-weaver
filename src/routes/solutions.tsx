import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaStrip } from "@/components/site/CtaStrip";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Silverline Events & Exhibitions" },
      { name: "description", content: "From brief to build — every step of an exhibition project under one roof. Design, fabrication, on-site setup, and execution." },
      { property: "og:title", content: "Our Solutions — Silverline" },
      { property: "og:description", content: "From brief to build — everything under one roof." },
      { property: "og:image", content: p1 },
      { name: "twitter:image", content: p1 },
    ],
  }),
  component: Solutions,
});

export const SOLUTIONS = [
  { slug: "brief-and-consultation", img: p1, name: "Brief & Consultation", desc: "We start by listening — understanding your brand, business goals, and the audience you're after at the show. The brief shapes everything that follows.", number: "01" },
  { slug: "booth-design", img: p2, name: "Booth Design", desc: "Custom 3D concepts crafted around your identity and the realities of the floor. Photoreal renders, material palettes, and walkthroughs before fabrication starts.", number: "02" },
  { slug: "revisions-and-finalisation", img: p3, name: "Revisions & Finalisation", desc: "Design is iterative. We refine until the booth is exactly right — then lock specs, materials, and drawings for production.", number: "03" },
  { slug: "on-site-setup", img: p4, name: "On-Site Setup", desc: "Freight, customs, build-out, supervision. Our team handles every operational detail so you arrive to a finished booth.", number: "04" },
  { slug: "execution-and-handover", img: p5, name: "Execution & Handover", desc: "We're on-site through the show — maintenance, brand support, and a clean dismantle at the end.", number: "05" },
];

function Solutions() {
  return (
    <>
      <section className="relative -mt-24 flex min-h-[60svh] items-end overflow-hidden border-b border-border bg-background md:-mt-28">
        <div className="container-x w-full pt-40 pb-16 md:pb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-silver">Our Solutions</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.95] text-foreground text-balance md:text-7xl lg:text-8xl">
            From brief to build —<br /><span className="text-silver">everything under one roof.</span>
          </h1>
        </div>
      </section>

      <section className="bg-background">
        {SOLUTIONS.map((s, i) => (
          <div key={s.slug} className={`grid items-stretch border-b border-border md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-surface md:aspect-auto group">
              <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-10 md:p-16 lg:p-24">
              <p className="font-display text-5xl font-bold text-silver/40 md:text-6xl">{s.number}</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-foreground md:text-5xl lg:text-6xl">{s.name}</h2>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-silver md:text-lg">{s.desc}</p>
              <Link
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="mt-8 inline-flex w-fit items-center gap-2 border-b border-silver/40 pb-1 text-sm font-light text-foreground hover:gap-3 hover:border-foreground transition-all"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <CtaStrip />
    </>
  );
}
