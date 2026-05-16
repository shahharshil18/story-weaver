import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaStrip } from "@/components/site/CtaStrip";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import tcplShare from "@/assets/tcpl-1.jpg";
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

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Silverline Events & Exhibitions" },
      { name: "description", content: "Selected booth design and fabrication projects for global brands at major trade shows across India, USA, and Europe." },
      { property: "og:title", content: "Projects — Silverline" },
      { property: "og:description", content: "Selected booth design and fabrication work for global brands." },
      { property: "og:image", content: tcplShare },
      { name: "twitter:image", content: tcplShare },
    ],
  }),
  component: Projects,
});

type Project = {
  images: string[];
  name: string;
  show: string;
  location: string;
  year: string;
  size: string;
};

const PROJECTS: Project[] = [
  { images: [tcpl1, tcpl2, tcpl3], name: "TCPL Packaging Limited", show: "Pack Expo 2025", location: "Las Vegas, USA", year: "2025", size: "15' x 15'" },
  { images: [uma1, uma2, uma3, uma4], name: "Umalaxmi Organics Pvt Ltd", show: "Supply Side West 2025", location: "Las Vegas, USA", year: "2025", size: "20' x 10'" },
  { images: [corona1, corona2, corona3], name: "Corona", show: "CPHI 2025 (28–30 Oct 2025)", location: "Frankfurt, Germany", year: "2025", size: "9' x 5.5'" },
  { images: [astral1, astral2, astral3], name: "Astral Pipes", show: "ACETECH", location: "India", year: "2025", size: "—" },
  { images: [everest1, everest2, everest3], name: "Everest", show: "Anuga 2025", location: "Cologne, Germany", year: "2025", size: "—" },
];

function Projects() {
  return (
    <>
      <section className="relative -mt-24 flex min-h-[60svh] items-end overflow-hidden border-b border-border bg-background md:-mt-28">
        <div className="container-x w-full pt-40 pb-16 md:pb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-silver">Selected Work</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.95] text-foreground text-balance md:text-7xl lg:text-8xl">
            The booths.<br /><span className="text-silver">The brands. The shows.</span>
          </h1>
        </div>
      </section>

      <section className="bg-background py-12 md:py-20">
        <div className="container-x space-y-20 md:space-y-32">
          {PROJECTS.map((p, i) => (
            <article key={p.name} className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden bg-surface group">
                {p.images.length > 1 ? (
                  <Carousel opts={{ loop: true }} className="h-full w-full">
                    <CarouselContent className="h-full ml-0">
                      {p.images.map((src, idx) => (
                        <CarouselItem key={idx} className="pl-0 h-full">
                          <div className="relative aspect-[4/3] w-full overflow-hidden">
                            <img src={src} alt={`${p.name} booth at ${p.show} — view ${idx + 1}`} loading="lazy" className="h-full w-full object-cover" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-3 bg-background/80 border-border" />
                    <CarouselNext className="right-3 bg-background/80 border-border" />
                  </Carousel>
                ) : (
                  <img src={p.images[0]} alt={`${p.name} booth at ${p.show}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                )}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-silver">{p.location} · {p.year}</p>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground md:text-5xl">{p.name}</h2>
                <p className="mt-2 text-lg font-light text-silver">{p.show}</p>
                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 text-sm font-light">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-silver-muted">Stand Size</dt>
                    <dd className="mt-1 text-foreground">{p.size}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.2em] text-silver-muted">Year</dt>
                    <dd className="mt-1 text-foreground">{p.year}</dd>
                  </div>
                </dl>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 border-b border-silver/40 pb-1 text-sm font-light text-foreground hover:gap-3 hover:border-foreground transition-all">
                  Discuss a similar project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
