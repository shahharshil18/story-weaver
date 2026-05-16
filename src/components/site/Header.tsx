import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/projects", label: "Projects" },
  { to: "/solutions", label: "Solutions" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-background/40 backdrop-blur-sm"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <Logo />

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[13px] font-extralight tracking-[0.12em] uppercase text-foreground/80 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-medium text-coral-foreground transition-all hover:bg-coral/90 hover:gap-3 md:inline-flex"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
            {/* Country presence — directly below CTA */}
            <div className="hidden items-center gap-2 text-[0.62rem] font-extralight uppercase tracking-[0.3em] text-silver md:flex">
              <span>India</span>
              <span className="text-silver/40">·</span>
              <span>Europe</span>
              <span className="text-silver/40">·</span>
              <span>USA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-background pt-24 lg:hidden">
          <div className="container-x flex flex-col gap-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border pb-4 text-2xl font-extralight tracking-wide text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 text-base font-medium text-coral-foreground"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-2 flex items-center gap-3 text-[0.7rem] font-extralight uppercase tracking-[0.3em] text-silver">
              <span>India</span>
              <span className="text-silver/40">·</span>
              <span>Europe</span>
              <span className="text-silver/40">·</span>
              <span>USA</span>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-20 md:h-24" />
    </>
  );
}
