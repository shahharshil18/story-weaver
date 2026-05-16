import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-silver">
              End-to-end exhibition booth design and fabrication for global brands across India, USA, and Europe.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.25em] text-silver-muted">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3 text-sm font-light text-foreground/85">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
              <li><Link to="/solutions" className="hover:text-foreground">Solutions</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/process" className="hover:text-foreground">Process</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.25em] text-silver-muted">
              Reach Us
            </h4>
            <address className="mt-5 space-y-3 text-sm font-light not-italic text-foreground/85">
              <p>
                233, 2nd Floor, IJMIMA Complex,<br />
                Mindspace, Malad West,<br />
                Mumbai 400064
              </p>
              <p>
                <a href="tel:+17049561954" className="hover:text-foreground">
                  +1 (704) 956-1954
                </a>
              </p>
              <p>
                <a href="mailto:hello@silverline.events" className="hover:text-foreground">
                  hello@silverline.events
                </a>
              </p>
            </address>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="rounded-full border border-border p-2 text-silver hover:text-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-border p-2 text-silver hover:text-foreground">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:hello@silverline.events" aria-label="Email" className="rounded-full border border-border p-2 text-silver hover:text-foreground">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 hairline pt-6 flex flex-col items-start justify-between gap-4 text-xs uppercase tracking-[0.2em] text-silver-muted md:flex-row md:items-center">
          <p>© 2025 Silverline Events &amp; Exhibitions Pvt. Ltd.</p>
          <p>Crafted in Mumbai · Delivered globally</p>
        </div>
      </div>
    </footer>
  );
}
