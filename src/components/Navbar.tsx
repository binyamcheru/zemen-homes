import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { business, nav } from "../data/site";
import { useSchedule } from "../lib/scheduleContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const openSchedule = useSchedule();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_0_var(--color-stone-dark)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex flex-col leading-none">
          <span
            className={`font-display text-lg tracking-[0.08em] transition-colors ${
              solid ? "text-charcoal" : "text-ivory"
            }`}
          >
            {business.logoLine1}
          </span>
          <span
            className={`eyebrow ${solid ? "" : "eyebrow--on-dark"}`}
            style={{ letterSpacing: "0.35em" }}
          >
            {business.logoLine2}
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                solid ? "text-ink" : "text-ivory"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#properties"
            className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
              solid ? "text-ink" : "text-ivory"
            }`}
          >
            View Properties
          </a>
          <button
            type="button"
            onClick={openSchedule}
            className="border border-gold bg-gold px-5 py-2.5 text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-transparent hover:text-gold"
            style={{ borderRadius: "var(--radius-card)" }}
          >
            Schedule an Inspection
          </button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden ${solid ? "text-charcoal" : "text-ivory"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-dark bg-ivory px-6 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-stone py-3.5 text-base font-medium text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => { setOpen(false); openSchedule(); }}
              className="w-full bg-gold px-5 py-3.5 text-center text-sm font-semibold tracking-wide text-charcoal"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              Schedule an Inspection
            </button>
            <a
              href={business.phoneHref}
              className="w-full border border-charcoal px-5 py-3.5 text-center text-sm font-semibold tracking-wide text-charcoal"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              Call {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
