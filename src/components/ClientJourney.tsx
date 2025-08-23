import { journeySteps } from "../data/site";
import { useReveal } from "../lib/useReveal";

export default function ClientJourney() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className="reveal max-w-2xl">
          <p className="eyebrow eyebrow--on-dark mb-4">The Process</p>
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">
            Property Decisions Should Feel Simple.
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="hairline-full absolute left-0 right-0 top-6 hidden opacity-20 lg:block" />
          {journeySteps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-display text-5xl text-gold/70">{step.number}</span>
              <h3 className="font-display mt-4 text-xl text-ivory">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
