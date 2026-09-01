import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ReservationForm } from "@/components/reservation-form";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Yardbirds, La Marsa" },
      {
        name: "description",
        content:
          "Reserve your table at Yardbirds in La Marsa, Tunisia. Call +216 99 332 882 or send a reservation request.",
      },
      { property: "og:title", content: "Reserve a Table — Yardbirds, La Marsa" },
      {
        property: "og:description",
        content: "Call +216 99 332 882 or send a reservation request to Yardbirds, La Marsa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reserve your table."
        intro="Call us directly, or send a request and we'll get back to you."
      />

      <Section className="grid gap-16 lg:grid-cols-[minmax(0,0.8fr)_1.2fr] lg:gap-24">
        <div>
          <h2 className="eyebrow">By phone</h2>
          <a
            href={site.phoneHref}
            className="mt-5 block font-display text-3xl transition-colors hover:text-primary"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={site.phoneHref}
            className="mt-8 inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-[0.7rem] tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Call to reserve
          </a>

          <h2 className="eyebrow mt-14">Address</h2>
          <address className="mt-4 text-sm leading-relaxed text-muted-foreground not-italic">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.line3}
          </address>

          <h2 className="eyebrow mt-14">Opening hours</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Please confirm current opening hours.
          </p>
        </div>

        <div>
          <h2 className="eyebrow">Reservation request</h2>
          <div className="mt-8">
            <ReservationForm />
          </div>
        </div>
      </Section>
    </>
  );
}
