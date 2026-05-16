import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lightbulb, PenTool, RefreshCw, Construction, HandshakeIcon, ChevronDown } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import tcpl1 from "@/assets/tcpl-1.jpg";
import tcpl2 from "@/assets/tcpl-2.jpg";
import tcpl3 from "@/assets/tcpl-3.jpg";
import uma1 from "@/assets/umalaxmi-1.jpg";
import uma2 from "@/assets/umalaxmi-2.jpg";
import uma3 from "@/assets/umalaxmi-3.jpg";
import uma4 from "@/assets/umalaxmi-4.jpg";
import corona1 from "@/assets/corona-1.jpg";
import corona2 from "@/assets/corona-2.jpg";
import corona3 from "@/assets/corona-3.jpg";
import astral1 from "@/assets/astral-1.jpg";
import astral2 from "@/assets/astral-2.jpg";
import astral3 from "@/assets/astral-3.jpg";
import everest1 from "@/assets/everest-1.jpg";
import everest2 from "@/assets/everest-2.jpg";
import everest3 from "@/assets/everest-3.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CountUp } from "@/components/site/CountUp";
import { ModelViewer } from "@/components/site/ModelViewer";
import astralPoster from "@/assets/astral-anuga-poster.jpg";
import aaagPoster from "@/assets/aaag-intersec-poster.jpg";

const EXPERIENCES = [
  {
    src: "/models/astral-anuga-2025.glb",
    poster: astralPoster,
    name: "Astral",
    show: "Anuga 2025",
    location: "Cologne, Germany",
  },
  {
    src: "/models/aaag-intersec-2025.glb",
    poster: aaagPoster,
    name: "AAAG",
    show: "Intersec 2025",
    location: "Saudi Arabia",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Silverline Events & Exhibitions — Every Square Foot Tells a Story" },
      { name: "description", content: "End-to-end exhibition booth design and fabrication for global trade shows. Mumbai-based, delivering across India, USA, and Europe." },
      { property: "og:title", content: "Silverline Events & Exhibitions" },
      { property: "og:description", content: "End-to-end booth design and fabrication for global trade shows." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { icon: Lightbulb, title: "Understanding the Brief", desc: "We start by deeply understanding your brand, goals, and exhibition requirements." },
  { icon: PenTool, title: "Designing the Booth", desc: "Custom booth concepts built around your brand identity and the show floor." },
  { icon: RefreshCw, title: "Revisions & Finalising", desc: "We refine and perfect the design until it's exactly right." },
  { icon: Construction, title: "On-Site Setup", desc: "Full logistics and build-out handled by our team at the venue." },
  { icon: HandshakeIcon, title: "Execution & Handover", desc: "We manage the entire show run and ensure a smooth handover." },
  { icon: ArrowRight, title: "Post-Show Support", desc: "Dismantling, storage, and lessons learned for the next show." },
];

const PROJECTS = [
  { images: [tcpl1, tcpl2, tcpl3], name: "TCPL Packaging Limited", show: "Pack Expo 2025", location: "Las Vegas, USA" },
  { images: [uma1, uma2, uma3, uma4], name: "Umalaxmi Organics Pvt Ltd", show: "Supply Side West 2025", location: "Las Vegas, USA" },
  { images: [corona1, corona2, corona3], name: "Corona", show: "CPHI 2025", location: "Frankfurt, Germany" },
  { images: [astral1, astral2, astral3], name: "Astral Pipes", show: "ACETECH", location: "India" },
  { images: [everest1, everest2, everest3], name: "Everest", show: "Anuga 2025", location: "Cologne, Germany" },
];

const CLIENTS = ["Astral", "My Perfumes", "Italia Group", "De Beers", "TCPL", "Indriya"];

const PROCESS = [
  { n: "01", t: "Brief", d: "We start with a deep dive into your brand, goals, and exhibition requirements." },
  { n: "02", t: "Design", d: "Custom booth concepts crafted around your brand identity and space." },
  { n: "03", t: "Revisions", d: "We refine until the design is exactly right." },
  { n: "04", t: "Finalisation", d: "Design locked, materials confirmed, production begins." },
  { n: "05", t: "Setup", d: "Full on-site setup and logistics handled by our team." },
  { n: "06", t: "Execution & Handover", d: "We manage the show and hand over seamlessly." },
];

const FAQS = [
  { q: "What is the minimum booth size you work with?", a: "We design and fabricate booths from 9 sqm to 300+ sqm — there's no project too small or too ambitious." },
  { q: "Do you handle international exhibitions?", a: "Yes — we deliver across India, the USA, and Europe with end-to-end execution and on-ground crews." },
  { q: "Do you provide 3D design concepts before fabrication?", a: "Always. Every project starts with photoreal 3D renders so you see exactly what you're getting before a single panel is cut." },
  { q: "How far in advance should I reach out before my exhibition?", a: "Ideally 8–12 weeks. Faster turnarounds are possible — talk to us early and we'll work backwards from your show date." },
  { q: "What information do you need to give me a quote?", a: "Show name, location, dates, stall size, and a brief on what you want to achieve. The more we know, the sharper the quote." },
  { q: "Do you handle logistics and on-site setup?", a: "Yes — freight, customs, build-out, supervision, and dismantling. You show up to a finished booth." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate -mt-24 flex min-h-[100svh] items-center overflow-hidden md:-mt-28">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="A premium exhibition booth at a global trade show"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
        </div>

        <div className="container-x w-full pt-32 pb-24 md:pt-40 md:pb-32">
          <p className="text-xs font-light uppercase tracking-[0.4em] text-silver animate-fade-up">
            Silverline · Est. 2025
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[0.95] text-foreground text-balance md:text-7xl lg:text-[5.5rem] animate-fade-up">
            Every Square Foot<br />
            <span className="text-silver">Tells a Story.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-foreground/80 md:text-xl animate-fade-up">
            End-to-end booth design and fabrication for global trade shows — from concept to the exhibition floor.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-coral px-7 py-4 text-base font-medium text-coral-foreground transition-all hover:gap-4"
            >
              Start a Project <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-foreground/40 px-7 py-4 text-base font-light text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-silver/60">
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="border-t border-border bg-background py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-2 md:gap-24">
          <div className="space-y-10">
            <Stat value={70} suffix="+" label="Booths Delivered" />
            <Stat value={3} label="Continents" />
            <div>
              <p className="font-display text-5xl font-bold text-silver md:text-6xl">India · USA · Europe</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-silver-muted">Markets Served</p>
            </div>
            <div>
              <p className="font-display text-5xl font-bold text-silver md:text-6xl">Since 2025</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-silver-muted">Crafting Exhibitions</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-silver">About</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-foreground md:text-5xl text-balance">
              A studio built for exhibitions that mean business.
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-foreground/80 md:text-lg">
              Silverline is a Mumbai-based exhibition company delivering end-to-end booth design, fabrication,
              and on-site execution for brands exhibiting at major trade shows across India, the USA, and Europe.
              We handle everything — from the first brief to the final handover.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex w-fit items-center gap-2 border-b border-silver/40 pb-1 text-sm font-light text-foreground transition-all hover:gap-3 hover:border-foreground"
            >
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE — Interactive 3D booth tours */}
      <section className="border-t border-border bg-[#0a0a0a] py-24 md:py-32">
        <div className="container-x">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-silver">Experience</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground md:text-5xl text-balance">
              Step inside two of our most celebrated builds.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {EXPERIENCES.map((e) => (
              <div
                key={e.name}
                className="group rounded-sm border border-silver/20 bg-[#111111] p-4 transition-colors hover:border-silver/60"
              >
                <ModelViewer
                  src={e.src}
                  poster={e.poster}
                  posterAlt={`${e.name} booth at ${e.show}`}
                  className="h-[280px] md:h-[400px] rounded-sm"
                />
                <div className="px-2 pb-2 pt-5">
                  <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
                    {e.name}
                  </h3>
                  <p className="mt-1 text-sm font-light text-silver">
                    {e.show} · {e.location}
                  </p>
                  <p className="mt-3 text-xs italic font-light text-silver/70">
                    Rotate &amp; explore — drag to spin, pinch to zoom.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border bg-surface py-24 md:py-32">
        <div className="container-x">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-silver">What We Do</p>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl text-balance">
                One studio. Every step covered.
              </h2>
            </div>
            <p className="max-w-md text-base font-light leading-relaxed text-foreground/70">
              From the first conversation to the final handover, every part of the build runs through one team.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group relative bg-surface p-8 transition-all duration-500 hover:bg-background md:p-10"
              >
                <s.icon className="h-7 w-7 text-silver transition-colors group-hover:text-foreground" strokeWidth={1.25} />
                <h3 className="mt-8 text-xl font-medium text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-silver">{s.desc}</p>
                <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-silver origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 border-b border-silver/40 pb-1 text-sm font-light text-foreground hover:gap-3 hover:border-foreground transition-all"
            >
              Explore All Solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="border-t border-border bg-background py-24 md:py-32">
        <div className="container-x mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-silver">Our Work</p>
          <div className="mt-5 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl text-balance">
              Booths built for global brands at the world's biggest trade shows.
            </h2>
          </div>
        </div>

        <div className="container-x grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {PROJECTS.map((p, i) => (
            <article
              key={i}
              className="group relative overflow-hidden bg-surface aspect-[4/3]"
            >
              {p.images.length > 1 ? (
                <Carousel opts={{ loop: true }} className="h-full w-full">
                  <CarouselContent className="h-full ml-0">
                    {p.images.map((src, idx) => (
                      <CarouselItem key={idx} className="pl-0 h-full basis-full">
                        <img
                          src={src}
                          alt={`${p.name} booth at ${p.show} — view ${idx + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-3 bg-background/80 border-border z-20" />
                  <CarouselNext className="right-3 bg-background/80 border-border z-20" />
                </Carousel>
              ) : (
                <img
                  src={p.images[0]}
                  alt={`${p.name} booth at ${p.show}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col p-6 md:p-8">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-silver">{p.location}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-foreground md:text-2xl">{p.name}</h3>
                <p className="text-sm font-light text-silver">{p.show}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="container-x mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border-b border-silver/40 pb-1 text-sm font-light text-foreground hover:gap-3 hover:border-foreground transition-all"
          >
            See All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-t border-border bg-surface py-20">
        <div className="container-x mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-silver">Trusted By</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-20 px-10">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={i}
                className="font-display text-3xl font-bold tracking-tight text-silver/70 md:text-4xl whitespace-nowrap"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent" />
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-border bg-background py-24 md:py-32">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.3em] text-silver">How We Work</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl text-balance">
            From a brief to a finished build, in six considered steps.
          </h2>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {PROCESS.map((step) => (
              <div key={step.n} className="bg-background p-8 md:p-10">
                <p className="font-display text-6xl font-bold text-silver/40 md:text-7xl">{step.n}</p>
                <h3 className="mt-4 text-xl font-medium text-foreground">{step.t}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-silver">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-[1fr_2fr] md:gap-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-silver">FAQ</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground md:text-5xl text-balance">
              Questions, answered.
            </h2>
            <p className="mt-6 text-sm font-light text-silver">
              Don't see yours? <Link to="/contact" className="text-foreground underline-offset-4 hover:underline">Get in touch.</Link>
            </p>
          </div>
          <div>
            {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}

function Stat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  return (
    <div>
      <p className="font-display text-6xl font-bold leading-none text-silver md:text-8xl">
        <CountUp to={value} suffix={suffix} />
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-silver-muted">{label}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-base font-light text-foreground md:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-silver transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <p className="overflow-hidden text-sm font-light leading-relaxed text-silver md:text-base">{a}</p>
      </div>
    </div>
  );
}

import { ContactSection } from "@/components/site/ContactSection";
