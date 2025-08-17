import { BedDouble, Bath, MapPin } from "lucide-react";
import type { Property } from "../data/site";
import { business } from "../data/site";
import PropertyImage from "./PropertyImage";

interface PropertyCardProps {
  property: Property;
  onView: (property: Property) => void;
}

export default function PropertyCard({ property, onView }: PropertyCardProps) {
  return (
    <article
      className="group flex flex-col overflow-hidden border border-stone-dark bg-white transition-shadow hover:shadow-[0_12px_32px_-16px_rgba(20,19,15,0.35)]"
      style={{ borderRadius: "var(--radius-card)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone">
        <PropertyImage
          src={property.image}
          alt={`${property.title} in ${property.location}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="bg-charcoal/90 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-wider text-ivory">
            {property.status}
          </span>
          {property.isDemo && (
            <span className="border border-ivory/80 bg-transparent px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-wider text-ivory">
              Demo
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow mb-2">{property.type}</p>
        <h3 className="font-display text-xl text-charcoal">{property.title}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-soft">
          <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
          {property.location}
        </p>

        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-ink-soft">
          {property.description}
        </p>

        <div className="mt-5 flex items-center gap-5 border-t border-stone pt-5 text-sm text-ink">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-gold-dark" strokeWidth={1.5} />
            {property.bedrooms} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-gold-dark" strokeWidth={1.5} />
            {property.bathrooms} Baths
          </span>
        </div>

        <p className="font-display mt-5 text-2xl text-gold-dark">{property.price}</p>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <button
            type="button"
            onClick={() => onView(property)}
            className="flex-1 border border-charcoal px-4 py-3 text-center text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
            style={{ borderRadius: "var(--radius-card)" }}
          >
            View Property
          </button>
          <a
            href={business.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gold px-4 py-3 text-center text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-gold-light"
            style={{ borderRadius: "var(--radius-card)" }}
          >
            Schedule Inspection
          </a>
        </div>
      </div>
    </article>
  );
}
