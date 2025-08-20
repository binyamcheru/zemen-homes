import { trustThemes } from "../data/site";
import { useReveal } from "../lib/useReveal";

export default function WhyUs() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-stone py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className="reveal max-w-2xl">
          <p className="eyebrow mb-4">Why Kings Palm Homes</p>
          <h2 className="font-display text-4xl text-charcoal sm:text-5xl">Built Around Trust.</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {trustThemes.map((item) => (
            <div key={item.title} className="border-l-2 border-gold pl-6">
              <h3 className="font-display text-lg text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
