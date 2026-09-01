import { createFileRoute } from "@tanstack/react-router";
import { Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location — Yardbirds, 13 Rue Mongi Slim, La Marsa" },
      {
        name: "description",
        content:
          "Find Yardbirds at 13 Rue Mongi Slim, Marsa 2078, Tunisia. Get directions or call +216 99 332 882.",
      },
      { property: "og:title", content: "Location — Yardbirds, La Marsa" },
      {
        property: "og:description",
        content: "13 Rue Mongi Slim, Marsa 2078, Tunisia. Get directions to Yardbirds.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <>
      <PageHero eyebrow="Location" title="Come find us." />

      <Section className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_1.4fr] lg:gap-20">
        <div>
          <h2 className="eyebrow">Address</h2>
          <address className="mt-5 font-display text-3xl leading-snug not-italic">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.line3}
          </address>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-[0.7rem] tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
              Get directions
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-foreground/35 px-8 py-4 text-[0.7rem] tracking-[0.24em] uppercase transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>

          <h2 className="eyebrow mt-14">Opening hours</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Please confirm current opening hours.
          </p>
        </div>

        <div className="border border-border">
          <iframe
            title="Map showing 13 Rue Mongi Slim, Marsa 2078, Tunisia"
            src={site.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full grayscale-[35%] lg:h-[520px]"
          />
        </div>
      </Section>
    </>
  );
}
