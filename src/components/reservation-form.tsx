import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

/**
 * Front-end only. Wire `handleSubmit` to an email service or booking
 * backend to start receiving requests.
 */
export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const field =
    "w-full border-b border-input bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none";
  const label = "block text-[0.65rem] tracking-[0.24em] uppercase text-muted-foreground";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} placeholder="Your full name" />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="+216 ..." />
        </div>
        <div>
          <label className={label} htmlFor="guests">
            Number of guests
          </label>
          <input id="guests" name="guests" type="number" min={1} max={30} defaultValue={2} className={field} />
        </div>
        <div>
          <label className={label} htmlFor="date">
            Preferred date
          </label>
          <input id="date" name="date" type="date" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="time">
            Preferred time
          </label>
          <input id="time" name="time" type="time" className={field} />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className={field} placeholder="Anything we should know?" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center bg-primary px-8 py-4 text-[0.7rem] tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
        >
          Send request
        </button>
        <p className="text-xs text-muted-foreground">
          For same-day tables, please call{" "}
          <a href={site.phoneHref} className="text-primary hover:underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>

      <p aria-live="polite" className="text-sm text-primary">
        {submitted
          ? "Thank you — please call to confirm your table while online booking is being finalised."
          : ""}
      </p>
    </form>
  );
}
