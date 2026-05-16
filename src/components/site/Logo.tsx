import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/silverline-logo.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="Silverline — Home">
      <img
        src={logoSrc}
        alt="Silverline"
        className="h-7 w-auto md:h-9"
        width={220}
        height={48}
      />
    </Link>
  );
}
