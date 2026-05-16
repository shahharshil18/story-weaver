import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Silverline Events & Exhibitions" },
      { name: "description", content: "Tell us about your exhibition. We'll respond within one business day with next steps and a rough timeline." },
      { property: "og:title", content: "Contact Silverline" },
      { property: "og:description", content: "Start a project with Silverline Events & Exhibitions." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative -mt-24 flex min-h-[60svh] items-end overflow-hidden border-b border-border bg-surface md:-mt-28">
        <div className="container-x w-full pt-40 pb-16 md:pb-24">
          <p className="text-xs uppercase tracking-[0.4em] text-silver">Get In Touch</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.95] text-foreground text-balance md:text-7xl lg:text-8xl">
            Start with a brief.<br /><span className="text-silver">End on the floor.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light text-silver">
            Whatever the show, wherever it is — let's talk timelines, ambitions, and budgets.
          </p>
          <Link to="/projects" className="mt-8 inline-flex items-center gap-2 border-b border-silver/40 pb-1 text-sm font-light text-foreground hover:gap-3 hover:border-foreground transition-all">
            See past work first <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
