export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-border">
      <div className="reveal mx-auto max-w-7xl px-5 pt-36 pb-16 sm:px-8 lg:pt-48 lg:pb-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[0.98] tracking-tight uppercase sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}
