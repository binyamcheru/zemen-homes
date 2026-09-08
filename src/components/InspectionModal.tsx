import { useEffect, useRef, useState } from "react";
import { X, Check, Calendar, Clock, Home } from "lucide-react";
import { business, interestOptions } from "../data/site";

interface InspectionModalProps {
  open: boolean;
  onClose: () => void;
}

const timeSlots = [
  "9:00 AM – 10:00 AM",
  "10:00 AM – 11:00 AM",
  "11:00 AM – 12:00 PM",
  "1:00 PM – 2:00 PM",
  "2:00 PM – 3:00 PM",
  "3:00 PM – 4:00 PM",
  "4:00 PM – 5:00 PM",
];

export default function InspectionModal({ open, onClose }: InspectionModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Reset on close
  useEffect(() => {
    if (!open) {
      setTimeout(() => { setSubmitted(false); setSelectedSlot(""); }, 300);
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Click-outside to close
  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end justify-center transition-all duration-300 sm:items-center sm:p-6 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      onClick={handleBackdrop}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Schedule an Inspection"
        className={`relative w-full max-w-xl overflow-hidden bg-ivory shadow-2xl transition-all duration-300 sm:max-h-[90vh] ${
          open ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
        }`}
        style={{ borderRadius: "var(--radius-card)" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-dark bg-charcoal p-6 sm:p-7">
          <div>
            <p className="eyebrow eyebrow--on-dark mb-1">Book a Visit</p>
            <h2 className="font-display text-2xl text-ivory sm:text-3xl">Schedule an Inspection</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-9 w-9 shrink-0 items-center justify-center text-stone transition-colors hover:text-gold-light"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 sm:p-7" style={{ maxHeight: "calc(90vh - 90px)" }}>
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="mb-5 flex h-14 w-14 items-center justify-center bg-gold/15">
                <Check className="h-7 w-7 text-gold-dark" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-2xl text-charcoal">Request Received!</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
                Thank you — a member of the Zemen Homes team will confirm your inspection within
                24 hours.
              </p>
              <button
                onClick={onClose}
                className="mt-8 bg-charcoal px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-charcoal-soft"
                style={{ borderRadius: "var(--radius-card)" }}
              >
                Done
              </button>
            </div>
          ) : (
            <form id="inspection-form" onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full Name" id="insp-name" required />
                <Field label="Phone Number" id="insp-phone" type="tel" required />
              </div>

              {/* Email */}
              <Field label="Email Address" id="insp-email" type="email" />

              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="insp-date"
                  className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft"
                >
                  <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
                  Preferred Date <span className="text-gold-dark">*</span>
                </label>
                <input
                  id="insp-date"
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-stone-dark bg-white px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
                  style={{ borderRadius: "var(--radius-card)" }}
                />
              </div>

              {/* Time Slots */}
              <div>
                <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                  Preferred Time <span className="text-gold-dark">*</span>
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`border px-2 py-2 text-xs font-medium tracking-wide transition-colors ${
                        selectedSlot === slot
                          ? "border-gold bg-gold/10 text-charcoal"
                          : "border-stone-dark bg-white text-ink-soft hover:border-gold hover:text-ink"
                      }`}
                      style={{ borderRadius: "var(--radius-card)" }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property interest */}
              <div>
                <label
                  htmlFor="insp-interest"
                  className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft"
                >
                  <Home className="h-3.5 w-3.5" strokeWidth={1.75} />
                  I'm Interested In
                </label>
                <select
                  id="insp-interest"
                  className="w-full appearance-none border border-stone-dark bg-white px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
                  style={{ borderRadius: "var(--radius-card)" }}
                >
                  {interestOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="insp-message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft"
                >
                  Additional Notes
                </label>
                <textarea
                  id="insp-message"
                  rows={3}
                  placeholder="Any specific property or requirements you'd like to mention…"
                  className="w-full border border-stone-dark bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-gold focus:outline-none"
                  style={{ borderRadius: "var(--radius-card)" }}
                />
              </div>

              {/* Info strip */}
              <p className="text-xs text-ink-soft">
                Our team will contact you at <span className="font-semibold text-charcoal">{business.phone}</span> to confirm the time.
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-charcoal py-4 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-charcoal-soft"
                style={{ borderRadius: "var(--radius-card)" }}
              >
                Request Inspection
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft"
      >
        {label}
        {required && <span className="text-gold-dark"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full border border-stone-dark bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-gold focus:outline-none"
        style={{ borderRadius: "var(--radius-card)" }}
      />
    </div>
  );
}
