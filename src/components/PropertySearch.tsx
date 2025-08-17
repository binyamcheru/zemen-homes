import { Search } from "lucide-react";
import {
  bedroomOptions,
  priceRanges,
  propertyTypeOptions,
  statusOptions,
} from "../data/site";

export interface Filters {
  location: string;
  type: string;
  status: string;
  bedrooms: string;
  priceIndex: number;
}

interface PropertySearchProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  resultCount: number;
}

const selectClass =
  "w-full appearance-none border border-stone-dark bg-ivory px-4 py-3 text-sm text-ink focus:border-gold";

export default function PropertySearch({ filters, onChange, resultCount }: PropertySearchProps) {
  const set = (patch: Partial<Filters>) => onChange({ ...filters, ...patch });

  return (
    <div
      className="border border-stone-dark bg-white p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-card)" }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="relative sm:col-span-2 lg:col-span-1">
          <label htmlFor="pf-location" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Location
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" strokeWidth={1.5} />
            <input
              id="pf-location"
              type="text"
              placeholder="e.g. Bole, Addis Ababa"
              value={filters.location}
              onChange={(e) => set({ location: e.target.value })}
              className="w-full border border-stone-dark bg-ivory py-3 pl-10 pr-4 text-sm text-ink placeholder:text-ink-soft/60 focus:border-gold"
              style={{ borderRadius: "var(--radius-card)" }}
            />
          </div>
        </div>

        <div>
          <label htmlFor="pf-type" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Property Type
          </label>
          <select
            id="pf-type"
            value={filters.type}
            onChange={(e) => set({ type: e.target.value })}
            className={selectClass}
            style={{ borderRadius: "var(--radius-card)" }}
          >
            <option value="Any">Any type</option>
            {propertyTypeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="pf-status" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Status
          </label>
          <select
            id="pf-status"
            value={filters.status}
            onChange={(e) => set({ status: e.target.value })}
            className={selectClass}
            style={{ borderRadius: "var(--radius-card)" }}
          >
            <option value="Any">Any status</option>
            {statusOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="pf-bedrooms" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Bedrooms
          </label>
          <select
            id="pf-bedrooms"
            value={filters.bedrooms}
            onChange={(e) => set({ bedrooms: e.target.value })}
            className={selectClass}
            style={{ borderRadius: "var(--radius-card)" }}
          >
            {bedroomOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="pf-price" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Price Range
          </label>
          <select
            id="pf-price"
            value={filters.priceIndex}
            onChange={(e) => set({ priceIndex: Number(e.target.value) })}
            className={selectClass}
            style={{ borderRadius: "var(--radius-card)" }}
          >
            {priceRanges.map((p, i) => (
              <option key={p.label} value={i}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-5 text-sm text-ink-soft">
        Showing <span className="font-semibold text-ink">{resultCount}</span>{" "}
        {resultCount === 1 ? "property" : "properties"}
      </p>
    </div>
  );
}
