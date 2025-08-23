import { useState } from "react";
import { Check, MapPin, Phone, Calendar } from "lucide-react";
import { business, interestOptions } from "../data/site";
import { useReveal } from "../lib/useReveal";
import { useSchedule } from "../lib/scheduleContext";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const ref = useReveal<HTMLDivElement>();
  const openSchedule = useSchedule();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-ivory py-24 lg:py-32">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl text-charcoal sm:text-5xl">
            Let's Find Your Next Home.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <div
              className="border border-stone-dark bg-white p-7 sm:p-9"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center bg-gold/15">
                    <Check className="h-6 w-6 text-gold-dark" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal">Enquiry sent</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
                    Thank you for reaching out to Kings Palm Homes. A member of the team will
                    respond shortly.
                  </p>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                  <Field label="Full Name" id="c-name" required />
                  <Field label="Phone Number" id="c-phone" type="tel" required />
                  <div className="sm:col-span-2">
                    <Field label="Email" id="c-email" type="email" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-interest" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      I'm Interested In
                    </label>
                    <select
                      id="c-interest"
                      className="w-full appearance-none border border-stone-dark bg-ivory px-4 py-3 text-sm text-ink focus:border-gold"
                      style={{ borderRadius: "var(--radius-card)" }}
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      rows={4}
                      placeholder="Tell us a little about what you're looking for"
                      className="w-full border border-stone-dark bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-gold"
                      style={{ borderRadius: "var(--radius-card)" }}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-charcoal px-6 py-4 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-charcoal-soft sm:w-auto"
                      style={{ borderRadius: "var(--radius-card)" }}
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div
              className="h-full border border-stone-dark bg-charcoal p-7 text-ivory sm:p-9"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <p className="font-display text-xl">{business.name}</p>
              <div className="mt-6 space-y-5 text-sm">
                <div className="flex gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.5} />
                  <p className="text-stone">
                    {business.addressLine1}
                    <br />
                    {business.addressLine2}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.5} />
                  <a href={business.phoneHref} className="text-stone hover:text-gold-light">
                    {business.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Calendar className="h-4 w-4 shrink-0 text-gold-light" strokeWidth={1.5} />
                  <button
                    type="button"
                    onClick={openSchedule}
                    className="text-stone hover:text-gold-light text-left"
                  >
                    Schedule an Inspection
                  </button>
                </div>
              </div>
              <div className="hairline-full mt-8 opacity-20" />
              <button
                type="button"
                onClick={openSchedule}
                className="mt-8 block w-full bg-gold px-5 py-3.5 text-center text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-gold-light"
                style={{ borderRadius: "var(--radius-card)" }}
              >
                Schedule an Inspection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
        {label}
        {required && <span className="text-gold-dark"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full border border-stone-dark bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-gold"
        style={{ borderRadius: "var(--radius-card)" }}
      />
    </div>
  );
}
