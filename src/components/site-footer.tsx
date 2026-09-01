import { Link } from "@tanstack/react-router";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  const quickLinks = navLinks.filter((l) => l.to !== "/");

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3 lg:py-24">
        <div>
          <p className="font-display text-3xl tracking-[0.16em] uppercase">
            {site.name}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {site.city}, {site.country}
          </p>
          <address className="mt-6 text-sm leading-relaxed text-muted-foreground not-italic">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.line3}
          </address>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-6 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-foreground/85 transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Contact</h2>
          <a
            href={site.phoneHref}
            className="mt-6 block font-display text-2xl transition-colors hover:text-primary"
          >
            {site.phoneDisplay}
          </a>
          <h3 className="eyebrow mt-10">Opening hours</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Please confirm current opening hours.
          </p>
          <h3 className="eyebrow mt-10">Social</h3>
          <ul className="mt-3 flex gap-5 text-sm text-muted-foreground">
            {site.social.map((s) => (
              <li key={s.label}>
                {s.href ? (
                  <a
                    href={s.href}
                    className="transition-colors hover:text-primary"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {s.label}
                  </a>
                ) : (
                  <span title="Link to be added once confirmed">{s.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs tracking-[0.18em] text-muted-foreground uppercase sm:px-8">
          © {new Date().getFullYear()} {site.name} — {site.city}, {site.country}
        </p>
      </div>
    </footer>
  );
}
