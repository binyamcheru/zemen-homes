import { Calendar } from "lucide-react";
import { useReveal } from "../lib/useReveal";
import { useSchedule } from "../lib/scheduleContext";

export default function ScheduleInspection() {
  const ref = useReveal<HTMLDivElement>();
  const openSchedule = useSchedule();

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div
        ref={ref}
        className="reveal relative mx-auto max-w-3xl px-6 text-center lg:px-10"
      >
        <p className="eyebrow eyebrow--on-dark mb-4">Book a Visit</p>
        <h2 className="font-display text-4xl text-ivory sm:text-5xl">
          See It. Experience It. Make It Yours.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
          Ready to explore a property in person? Schedule an inspection at a time that works
          for you.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={openSchedule}
            className="flex items-center justify-center gap-2 bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-gold-light"
            style={{ borderRadius: "var(--radius-card)" }}
          >
            <Calendar className="h-4 w-4" strokeWidth={1.75} />
            Schedule an Inspection
          </button>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 border border-ivory/40 px-8 py-4 text-sm font-semibold tracking-wide text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
            style={{ borderRadius: "var(--radius-card)" }}
          >
            Send an Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
