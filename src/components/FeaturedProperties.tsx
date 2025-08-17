import { useMemo, useState } from "react";
import { properties, priceRanges, type Property } from "../data/site";
import { parsePriceToNumber } from "../lib/utils";
import { useReveal } from "../lib/useReveal";
import PropertySearch, { type Filters } from "./PropertySearch";
import PropertyCard from "./PropertyCard";

const defaultFilters: Filters = {
  location: "",
  type: "Any",
  status: "Any",
  bedrooms: "Any",
  priceIndex: 0,
};

interface FeaturedPropertiesProps {
  onView: (property: Property) => void;
}

export default function FeaturedProperties({ onView }: FeaturedPropertiesProps) {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const headingRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  const filtered = useMemo(() => {
    const range = priceRanges[filters.priceIndex];
    return properties.filter((p) => {
      if (
        filters.location &&
        !p.location.toLowerCase().includes(filters.location.toLowerCase())
      )
        return false;
      if (filters.type !== "Any" && p.type !== filters.type) return false;
      if (filters.status !== "Any" && p.status !== filters.status) return false;
      if (filters.bedrooms !== "Any") {
        const min = filters.bedrooms === "5+" ? 5 : Number(filters.bedrooms);
        if (filters.bedrooms === "5+" ? p.bedrooms < min : p.bedrooms !== min) return false;
      }
      const price = parsePriceToNumber(p.price);
      if (price < range.min || price > range.max) return false;
      return true;
    });
  }, [filters]);

  return (
    <section id="properties" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={headingRef} className="reveal max-w-2xl">
          <p className="eyebrow mb-4">Property Listings</p>
          <h2 className="font-display text-4xl text-charcoal sm:text-5xl">
            Explore Our Properties
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            Find a home that fits your lifestyle, goals and investment plans.
          </p>
        </div>

        <div className="mt-10">
          <PropertySearch filters={filters} onChange={setFilters} resultCount={filtered.length} />
        </div>

        <div ref={gridRef} className="reveal mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} onView={onView} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 border border-dashed border-stone-dark px-6 py-16 text-center">
            <p className="font-display text-xl text-charcoal">No properties match those filters</p>
            <p className="mt-2 text-sm text-ink-soft">
              Try widening your search, or contact Kings Palm Homes directly for opportunities
              not yet listed.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
