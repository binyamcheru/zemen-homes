import { Phone, Calendar } from "lucide-react";
import { business } from "../data/site";
import { useSchedule } from "../lib/scheduleContext";

export default function StickyMobileCTA() {
  const openSchedule = useSchedule();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-stone-dark bg-ivory sm:hidden">
      <a
        href={business.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-stone-dark py-4 text-sm font-semibold tracking-wide text-charcoal"
      >
        <Phone className="h-4 w-4" strokeWidth={1.75} />
        Call
      </a>
      <button
        type="button"
        onClick={openSchedule}
        className="flex flex-1 items-center justify-center gap-2 bg-gold py-4 text-sm font-semibold tracking-wide text-charcoal"
      >
        <Calendar className="h-4 w-4" strokeWidth={1.75} />
        Schedule Inspection
      </button>
    </div>
  );
}
