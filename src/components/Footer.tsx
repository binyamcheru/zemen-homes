import { Phone, MapPin, Calendar } from "lucide-react";
import { business, nav } from "../data/site";
import { useSchedule } from "../lib/scheduleContext";

export default function Footer() {
  const openSchedule = useSchedule();

  return (
    <footer className="bg-charcoal pt-20 text-stone">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl text-ivory">{business.logoLine1}</p>
            <p className="eyebrow eyebrow--on-dark" style={{ letterSpacing: "0.35em" }}>
              {business.logoLine2}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-dark">
              {business.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-light">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-stone-dark hover:text-ivory">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-light">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-stone-dark">
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.5} />
                <a href={business.phoneHref} className="hover:text-ivory">
                  {business.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.5} />
                <span>{business.addressLine2}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-light">
              Book a Visit
            </p>
            <p className="mt-4 text-sm text-stone-dark">
              Schedule an inspection at a time that works for you.
            </p>
            <button
              type="button"
              onClick={openSchedule}
              className="mt-4 inline-flex items-center gap-2 border border-gold px-5 py-3 text-sm font-semibold tracking-wide text-gold-light transition-colors hover:bg-gold hover:text-charcoal"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <Calendar className="h-4 w-4" strokeWidth={1.75} />
              Schedule an Inspection
            </button>
          </div>
        </div>

        <div className="hairline-full opacity-20" />

        <div className="flex flex-col items-center justify-between gap-3 py-7 text-xs text-stone-dark sm:flex-row">
          <p>© {business.year} {business.name}. All rights reserved.</p>
          <p>Site presented as a professional concept demo.</p>
        </div>
      </div>
    </footer>
  );
}
