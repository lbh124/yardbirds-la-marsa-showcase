import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";
import foodOne from "@/assets/food-1.jpg";
import foodTwo from "@/assets/food-2.jpg";
import atmosphere from "@/assets/atmosphere-1.jpg";
import spaceOne from "@/assets/space-1.jpg";
import spaceTwo from "@/assets/space-2.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Yardbirds, La Marsa" },
      {
        name: "description",
        content:
          "A look inside Yardbirds in La Marsa, Tunisia — the food, the atmosphere and the space.",
      },
      { property: "og:title", content: "Gallery — Yardbirds, La Marsa" },
      {
        property: "og:description",
        content: "The food, the atmosphere and the space at Yardbirds, La Marsa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const categories = ["All", "Food", "Atmosphere", "The Space"] as const;
type Category = (typeof categories)[number];

const images: { src: string; alt: string; category: Exclude<Category, "All">; tall?: boolean }[] = [
  { src: foodOne, alt: "Grilled dish plated on dark ceramic", category: "Food", tall: true },
  { src: atmosphere, alt: "Guests talking over dinner by candlelight", category: "Atmosphere" },
  { src: spaceOne, alt: "Dining room with warm pendant lighting", category: "The Space", tall: true },
  { src: foodTwo, alt: "Plated dish finished with fresh herbs", category: "Food" },
  { src: spaceTwo, alt: "Bar counter with glassware under amber light", category: "The Space" },
  { src: heroImg, alt: "Candlelit tables in the dining room", category: "Atmosphere" },
];

function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const shown = active === "All" ? images : images.filter((i) => i.category === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside."
        intro="Photography to be replaced with images of Yardbirds once supplied."
      />

      <Section>
        <div className="flex flex-wrap gap-3" role="group" aria-label="Filter gallery">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={cn(
                "border px-5 py-2.5 text-[0.65rem] tracking-[0.24em] uppercase transition-colors",
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((img, i) => (
            <li key={`${img.src}-${i}`} className="group overflow-hidden">
              <figure>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1200}
                  height={img.tall ? 1504 : 912}
                  className={cn(
                    "w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]",
                    img.tall ? "aspect-4/5" : "aspect-4/3",
                  )}
                />
                <figcaption className="mt-3 text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
                  {img.category}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
