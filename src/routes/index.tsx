import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import foodOne from "@/assets/food-1.jpg";
import atmosphere from "@/assets/atmosphere-1.jpg";
import { Section, SectionHeading } from "@/components/section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yardbirds — Restaurant in La Marsa, Tunisia" },
      {
        name: "description",
        content:
          "Yardbirds is a restaurant in La Marsa, Tunisia. Good food, good company. See the menu, find us at 13 Rue Mongi Slim, and call to reserve a table.",
      },
      { property: "og:title", content: "Yardbirds — Restaurant in La Marsa, Tunisia" },
      {
        property: "og:description",
        content:
          "Good food. Good company. Discover Yardbirds in the heart of La Marsa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Yardbirds",
          telephone: "+21699332882",
          address: {
            "@type": "PostalAddress",
            streetAddress: "13 Rue Mongi Slim",
            addressLocality: "La Marsa",
            postalCode: "2078",
            addressCountry: "TN",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Candlelit tables in a warmly lit dining room"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-background/70"
          aria-hidden="true"
        />
        <div className="reveal relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 sm:px-8 lg:pb-28">
          <p className="eyebrow">La Marsa • Tunisia</p>
          <h1 className="mt-6 max-w-4xl text-6xl leading-[0.92] tracking-tight uppercase sm:text-7xl lg:text-8xl">
            Good food.
            <br />
            Good company.
          </h1>
          <p className="mt-7 max-w-md text-base text-foreground/85 sm:text-lg">
            Discover Yardbirds in the heart of La Marsa.
          </p>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center bg-primary px-9 py-4 text-[0.7rem] tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              View menu
            </Link>
            <Link
              to="/location"
              className="inline-flex items-center justify-center gap-2 border border-foreground/35 px-9 py-4 text-[0.7rem] tracking-[0.24em] uppercase transition-colors hover:border-primary hover:text-primary"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Find us
            </Link>
          </div>
        </div>
      </section>

      <Section className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="About"
            title="More than a meal."
            intro="Yardbirds is a place to slow down over something good to eat. A room built for long conversations, shared plates and the kind of evening you don't rush."
          />
          <Link
            to="/about"
            className="mt-10 inline-block border-b border-primary pb-1 text-[0.7rem] tracking-[0.24em] text-primary uppercase"
          >
            Our story
          </Link>
        </div>
        <img
          src={atmosphere}
          alt="Guests talking over dinner by candlelight"
          width={1200}
          height={912}
          loading="lazy"
          className="aspect-4/3 w-full object-cover"
        />
      </Section>

      <Section className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
        <img
          src={foodOne}
          alt="Grilled dish plated on dark ceramic"
          width={1200}
          height={1504}
          loading="lazy"
          className="aspect-4/5 w-full object-cover lg:order-last"
        />
        <div>
          <SectionHeading
            eyebrow="The menu"
            title="Made to share."
            intro="A concise, seasonal selection served all day. Browse the full list before you visit."
          />
          <Link
            to="/menu"
            className="mt-10 inline-block border-b border-primary pb-1 text-[0.7rem] tracking-[0.24em] text-primary uppercase"
          >
            See the menu
          </Link>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="eyebrow">Find us</h2>
            <address className="mt-5 font-display text-2xl leading-snug not-italic">
              {site.address.line1}
              <br />
              {site.address.line2}
            </address>
          </div>
          <div>
            <h2 className="eyebrow">Opening hours</h2>
            <p className="mt-5 text-sm text-muted-foreground">
              Please confirm current opening hours.
            </p>
          </div>
          <div>
            <h2 className="eyebrow">Reserve</h2>
            <a
              href={site.phoneHref}
              className="mt-5 inline-flex items-center gap-2 font-display text-2xl transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
