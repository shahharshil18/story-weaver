import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CtaStrip } from "@/components/site/CtaStrip";
import { SOLUTIONS } from "./solutions";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const DETAILS: Record<string, { involves: string[]; why: string }> = {
  "brief-and-consultation": {
    involves: [
      "Discovery call to understand brand, product, and goals",
      "Audience and competitor mapping for the show",
      "Floor plan analysis — orientation, traffic, sightlines",
      "Budget framework and timeline alignment",
    ],
    why: "Every great booth starts with a sharp brief. We invest the time upfront so the design phase builds on solid ground — not assumptions.",
  },
  "booth-design": {
    involves: [
      "Conceptual sketches and mood direction",
      "Photoreal 3D renders and walkthroughs",
      "Material samples, lighting plans, and finish boards",
      "Brand integration across every surface",
    ],
    why: "Design is where your brand becomes architecture. We treat every booth as a single, coherent statement — not a collection of panels.",
  },
  "revisions-and-finalisation": {
    involves: [
      "Iterative design refinement based on your feedback",
      "Engineering drawings and structural validation",
      "Final material, finish, and lighting specifications",
      "Production-ready files signed off in writing",
    ],
    why: "Catching changes on screen is cheap. Catching them on the show floor is not. We iterate until you're certain.",
  },
  "on-site-setup": {
    involves: [
      "Freight, customs clearance, and venue logistics",
      "Pre-build mock-ups where required",
      "On-site supervision and quality control",
      "Coordination with venue and other contractors",
    ],
    why: "Setup is where projects are won or lost. Our supervisors are on the ground, accountable to you, with one job: a flawless build.",
  },
  "execution-and-handover": {
    involves: [
      "Dedicated on-site team through the show",
      "Daily maintenance, restocking, and brand support",
      "Real-time issue resolution",
      "Clean dismantle, transport, and storage post-show",
    ],
    why: "Once the show opens, your team should focus on visitors — not the booth. We handle everything else.",
  },
};

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const sol = SOLUTIONS.find((s) => s.slug === params.slug);
    if (!sol) throw notFound();
    return { sol, details: DETAILS[params.slug] };
  },
  head: ({ loaderData }) => {
    const sol = loaderData?.sol;
    if (!sol) return { meta: [{ title: "Solution — Silverline" }] };
    return {
      meta: [
        { title: `${sol.name} — Silverline Solutions` },
        { name: "description", content: sol.desc },
        { property: "og:title", content: `${sol.name} — Silverline` },
        { property: "og:description", content: sol.desc },
        { property: "og:image", content: sol.img },
        { name: "twitter:image", content: sol.img },
      ],
    };
  },
  component: SolutionPage,
});

function SolutionPage() {
  const { sol, details } = Route.useLoaderData();
  const related = [p1, p2, p3];

  return (
    <>
      <section className="relative -mt-24 flex min-h-[60svh] items-end overflow-hidden border-b border-border md:-mt-28">
        <img src={sol.img} alt={sol.name} className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="container-x relative w-full pt-40 pb-16 md:pb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-silver">Solution {sol.number}</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.95] text-foreground text-balance md:text-7xl lg:text-8xl">
            {sol.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light text-foreground/80 md:text-xl">{sol.desc}</p>
        </div>
      </section>

      {/* WHAT IT INVOLVES */}
      <section className="border-b border-border bg-background py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-[1fr_2fr] md:gap-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-silver">What It Involves</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground md:text-5xl text-balance">
              The work, in detail.
            </h2>
          </div>
          <ul className="space-y-6">
            {details.involves.map((item: string) => (
              <li key={item} className="flex items-start gap-4 border-b border-border pb-6">
                <Check className="mt-1 h-5 w-5 shrink-0 text-silver" strokeWidth={1.5} />
                <span className="text-base font-light text-foreground md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY */}
      <section className="border-b border-border bg-surface py-24 md:py-32">
        <div className="container-x max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-silver">Why It Matters</p>
          <p className="mt-6 font-display text-3xl font-light leading-[1.2] text-foreground md:text-4xl lg:text-5xl text-balance">
            "{details.why}"
          </p>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-b border-border bg-background py-24 md:py-32">
        <div className="container-x">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-silver">Related Work</p>
              <h2 className="mt-5 font-display text-4xl font-bold text-foreground md:text-5xl">Recent projects</h2>
            </div>
            <Link to="/projects" className="hidden items-center gap-2 border-b border-silver/40 pb-1 text-sm font-light text-foreground hover:gap-3 hover:border-foreground transition-all md:inline-flex">
              All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((img, i) => (
              <div key={i} className="aspect-[4/5] overflow-hidden bg-surface group">
                <img src={img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-x text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-silver">Ready to Start?</p>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-foreground md:text-7xl text-balance">
            Let's Talk.
          </h2>
          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-coral px-8 py-4 text-base font-medium text-coral-foreground transition-all hover:gap-4"
          >
            Start a Project <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
