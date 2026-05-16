import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaStrip() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="container-x flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-silver">Let's Build</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
            Ready to exhibit with us?
          </h2>
        </div>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-3 rounded-full bg-coral px-7 py-4 text-base font-medium text-coral-foreground transition-all hover:gap-4"
        >
          Start a Project
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
