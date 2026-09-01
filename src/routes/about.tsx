import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import spaceOne from "@/assets/space-1.jpg";
import foodTwo from "@/assets/food-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Yardbirds, La Marsa" },
      {
        name: "description",
        content:
          "Yardbirds is a restaurant in La Marsa, Tunisia built around good food and good company — a room made for long, unhurried meals.",
      },
      { property: "og:title", content: "About — Yardbirds, La Marsa" },
      {
        property: "og:description",
        content: "A restaurant in La Marsa built around good food and good company.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="More than a meal." />

      <Section className="grid gap-14 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Yardbirds is a restaurant in La Marsa built around a simple idea:
            that a good meal is best measured by the company you keep at the
            table.
          </p>
          <p>
            The room is warm and unhurried — somewhere to meet friends after
            work, to bring family on a weekend, or to sit quietly with a plate
            of something you'll be glad you ordered.
          </p>
          <p>
            Whether you're stopping in for a quick bite or settling in for the
            evening, you're welcome here for as long as you'd like to stay.
          </p>
          <Link
            to="/contact"
            className="inline-block border-b border-primary pb-1 text-[0.7rem] tracking-[0.24em] text-primary uppercase"
          >
            Reserve a table
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          <img
            src={spaceOne}
            alt="Dining room with warm pendant lighting and wooden chairs"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-4/5 w-full object-cover"
          />
          <img
            src={foodTwo}
            alt="Plated dish finished with fresh herbs"
            width={1200}
            height={912}
            loading="lazy"
            className="aspect-4/5 w-full object-cover sm:mt-12"
          />
        </div>
      </Section>
    </>
  );
}
