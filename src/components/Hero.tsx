import { ChevronDown } from "lucide-react";
import { business, heroImage } from "../data/site";
import { useSchedule } from "../lib/scheduleContext";

export default function Hero() {
  const openSchedule = useSchedule();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-charcoal"
    >
      <img
        src={heroImage}
        alt="Modern luxury residence exterior at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/25" />
      <div className="absolute inset-0 bg-charcoal/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
        <p className="eyebrow eyebrow--on-dark mb-6 flex items-center gap-3">
          <span className="hairline w-10" />
          Addis Ababa, Ethiopia
        </p>

        <h1 className="font-display max-w-3xl text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
          Luxury Homes.
          <br />
          Smart Investments.
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
          {business.supportingStatement}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#properties"
            className="bg-gold px-8 py-4 text-center text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-gold-light"
            style={{ borderRadius: "var(--radius-card)" }}
          >
            Explore Properties
          </a>
          <button
            type="button"
            onClick={openSchedule}
            className="border border-ivory/50 px-8 py-4 text-center text-sm font-semibold tracking-wide text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
            style={{ borderRadius: "var(--radius-card)" }}
          >
            Schedule an Inspection
          </button>
        </div>
      </div>

      <a
        href="#trust"
        aria-label="Scroll to explore"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory/70 transition-colors hover:text-gold-light"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" strokeWidth={1.25} />
      </a>
    </section>
  );
}
