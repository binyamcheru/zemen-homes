import { MapPin, ExternalLink } from "lucide-react";
import { business } from "../data/site";

export default function MapSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.mapsQuery
  )}`;

  return (
    <section className="border-y border-stone-dark bg-stone py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Find Us</p>
            <h2 className="font-display text-3xl text-charcoal sm:text-4xl">Bole, Addis Ababa</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
              {business.fullAddress}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 border border-charcoal px-6 py-3.5 text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              View Location
              <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Kings Palm Homes location in Google Maps"
            className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-stone-dark bg-charcoal"
            style={{ borderRadius: "var(--radius-card)" }}
          >
            <svg
              className="absolute inset-0 h-full w-full opacity-25"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern id="grid" width="34" height="34" patternUnits="userSpaceOnUse">
                  <path d="M 34 0 L 0 0 0 34" fill="none" stroke="#b8944f" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="relative flex flex-col items-center text-ivory transition-transform duration-300 group-hover:-translate-y-1">
              <MapPin className="h-9 w-9 text-gold" strokeWidth={1.25} />
              <p className="font-display mt-3 text-lg">Kings Palm Homes</p>
              <p className="eyebrow eyebrow--on-dark mt-1">Bole, Addis Ababa</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
