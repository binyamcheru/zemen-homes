import {
  Building2,
  Handshake,
  KeyRound,
  ShieldCheck,
  Compass,
  ClipboardCheck,
} from "lucide-react";
import { services } from "../data/site";
import { useReveal } from "../lib/useReveal";

const icons = [Building2, Handshake, KeyRound, ShieldCheck, Compass, ClipboardCheck];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className="reveal max-w-2xl">
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="font-display text-4xl text-charcoal sm:text-5xl">More Than Property.</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-stone-dark bg-stone-dark sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={service.title} className="bg-ivory p-8 transition-colors hover:bg-white">
                <Icon className="h-7 w-7 text-gold-dark" strokeWidth={1.25} />
                <h3 className="font-display mt-5 text-lg text-charcoal">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
