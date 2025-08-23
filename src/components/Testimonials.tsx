import { Quote } from "lucide-react";
import { testimonials } from "../data/site";
import { useReveal } from "../lib/useReveal";

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-stone py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className="reveal max-w-2xl">
          <p className="eyebrow mb-4">Sample Client Feedback</p>
          <h2 className="font-display text-4xl text-charcoal sm:text-5xl">
            What Clients Say.
          </h2>
          <p className="mt-4 text-sm text-ink-soft">
            The themes below reflect common feedback shared with Kings Palm Homes and are
            presented anonymously as illustrative sample feedback.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-stone-dark bg-ivory p-7"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <Quote className="h-6 w-6 text-gold" strokeWidth={1.25} />
              <p className="mt-4 text-base leading-relaxed text-ink">{t.theme}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
