import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "bg-background/95 border-b border-border backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:py-6">
        <Link
          to="/"
          className="min-w-0 font-display text-2xl leading-none tracking-[0.18em] uppercase"
          onClick={() => setOpen(false)}
        >
          Yardbirds
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-[0.7rem] tracking-[0.22em] text-foreground/80 uppercase transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="inline-flex shrink-0 items-center gap-2 border border-primary/60 px-5 py-2.5 text-[0.7rem] tracking-[0.22em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Reserve
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="shrink-0 p-2 lg:hidden"
        >
          {open ? <Menu className="hidden" /> : null}
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
            {navLinks.map((l) => (
              <li key={l.to} className="border-b border-border/60 last:border-0">
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block py-4 font-display text-2xl"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-5">
              <a
                href={site.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Call to reserve
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
