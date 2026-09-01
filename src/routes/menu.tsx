import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { MenuCategoryBlock, menuCategories, slugify } from "@/components/menu-list";
import { site } from "@/lib/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Yardbirds, La Marsa" },
      {
        name: "description",
        content:
          "Browse the Yardbirds menu in La Marsa, Tunisia — starters, grills, mains, sides and desserts.",
      },
      { property: "og:title", content: "Menu — Yardbirds, La Marsa" },
      {
        property: "og:description",
        content: "Starters, grills, mains, sides and desserts at Yardbirds, La Marsa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="La Marsa • Tunisia"
        title="The menu."
        intro="A short, focused list served throughout the day."
      />

      <Section>
        <nav aria-label="Menu categories" className="flex flex-wrap gap-x-6 gap-y-3">
          {menuCategories.map((c) => (
            <a
              key={c.category}
              href={`#cat-${slugify(c.category)}`}
              className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              {c.category}
            </a>
          ))}
        </nav>

        <div className="mt-8 divide-y divide-border">
          {menuCategories.map((c) => (
            <MenuCategoryBlock key={c.category} category={c} />
          ))}
        </div>

        <p className="mt-16 max-w-xl text-sm text-muted-foreground">
          For allergens, daily specials and availability, please call{" "}
          <a href={site.phoneHref} className="text-primary hover:underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
