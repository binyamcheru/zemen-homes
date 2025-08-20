import { about } from "../data/site";
import { useReveal } from "../lib/useReveal";
import { useSchedule } from "../lib/scheduleContext";
import PropertyImage from "./PropertyImage";

export default function About() {
  const ref = useReveal<HTMLDivElement>();
  const openSchedule = useSchedule();

  return (
    <section id="about" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div ref={ref} className="reveal relative aspect-[4/5] overflow-hidden bg-stone lg:order-2">
          <PropertyImage
            src={about.image}
            alt="Interior of a Zemen Homes residential property"
            className="h-full w-full object-cover"
          />
          <div className="absolute -bottom-6 -left-6 hidden bg-gold px-7 py-5 sm:block">
            <p className="font-display text-2xl text-charcoal">Addis Ababa</p>
            <p className="eyebrow text-charcoal/70">Ethiopia</p>
          </div>
        </div>

        <div className="lg:order-1">
          <p className="eyebrow mb-4">About Zemen Homes</p>
          <h2 className="font-display text-4xl text-charcoal sm:text-5xl">{about.heading}</h2>
          <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">{about.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="border border-charcoal px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              Get in Touch
            </a>
            <button
              type="button"
              onClick={openSchedule}
              className="bg-gold px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-gold-light"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              Schedule an Inspection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
