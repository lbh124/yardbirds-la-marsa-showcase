export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  category: string;
  note?: string;
  items: MenuItem[];
};

/**
 * Structure only — names, descriptions and prices are to be replaced
 * with the confirmed menu.
 */
export const menuCategories: MenuCategory[] = [
  {
    category: "To Start",
    items: [
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
    ],
  },
  {
    category: "From The Grill",
    items: [
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
    ],
  },
  {
    category: "Mains",
    items: [
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
      { name: "Signature Dish", description: "Add verified description", price: "XX TND" },
    ],
  },
];

export function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function MenuCategoryBlock({ category }: { category: MenuCategory }) {
  const id = `cat-${slugify(category.category)}`;
  return (
    <section aria-labelledby={id} className="scroll-mt-28 py-10">
      <div className="flex items-baseline gap-6">
        <h2
          id={id}
          className="font-display text-3xl tracking-tight uppercase sm:text-4xl"
        >
          {category.category}
        </h2>
        <span className="rule-line hidden flex-1 sm:block" aria-hidden="true" />
      </div>


      <ul className="mt-8 space-y-7">
        {category.items.map((item, i) => (
          <li key={i}>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
              <h3 className="min-w-0 font-sans text-sm tracking-[0.16em] text-foreground uppercase">
                {item.name}
              </h3>
              <span className="shrink-0 font-display text-lg text-primary">
                {item.price}
              </span>
            </div>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
