import { useEffect, useState } from "react";
import { X, BedDouble, Bath, MapPin, Check, MessageCircle } from "lucide-react";
import type { Property } from "../data/site";
import { business } from "../data/site";
import PropertyImage from "./PropertyImage";

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (property) {
      setActiveImage(0);
      setSubmitted(false);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [property]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!property) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-charcoal/80 px-0 py-0 backdrop-blur-sm sm:items-center sm:px-4 sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-label={property.title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-ivory sm:my-auto"
        style={{ borderRadius: "var(--radius-card)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close property details"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-charcoal/80 text-ivory transition-colors hover:bg-charcoal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Gallery */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone">
          <PropertyImage
            src={property.gallery[activeImage] ?? property.image}
            alt={`${property.title} — image ${activeImage + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute left-4 top-4 flex gap-2">
            <span className="bg-charcoal/90 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-wider text-ivory">
              {property.status}
            </span>
            {property.isDemo && (
              <span className="border border-ivory/80 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-wider text-ivory">
                Demo Listing
              </span>
            )}
          </div>
          {property.gallery.length > 1 && (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {property.gallery.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`View image ${i + 1}`}
                  onClick={() => setActiveImage(i)}
                  className={`h-1.5 w-6 transition-colors ${
                    i === activeImage ? "bg-gold" : "bg-ivory/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-10 p-6 sm:p-9 lg:grid-cols-5">
          {/* Details */}
          <div className="lg:col-span-3">
            <p className="eyebrow mb-2">{property.type}</p>
            <h2 className="font-display text-3xl text-charcoal">{property.title}</h2>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-soft">
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
              {property.location}
            </p>

            <div className="mt-5 flex items-center gap-6 border-y border-stone py-4 text-sm text-ink">
              <span className="flex items-center gap-1.5">
                <BedDouble className="h-4 w-4 text-gold-dark" strokeWidth={1.5} />
                {property.bedrooms} Bedrooms
              </span>
              <span className="flex items-center gap-1.5">
                <Bath className="h-4 w-4 text-gold-dark" strokeWidth={1.5} />
                {property.bathrooms} Bathrooms
              </span>
            </div>

            <p className="font-display mt-5 text-3xl text-gold-dark">{property.price}</p>

            <p className="mt-5 text-sm leading-relaxed text-ink-soft">{property.description}</p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Key Features
              </p>
              <ul className="mt-3 space-y-2">
                {property.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" strokeWidth={1.75} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Amenities
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {property.amenities.map((a) => (
                  <span
                    key={a}
                    className="border border-stone-dark px-3 py-1.5 text-xs text-ink-soft"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gold px-5 py-3.5 text-center text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-gold-light"
                style={{ borderRadius: "var(--radius-card)" }}
              >
                Schedule an Inspection
              </a>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 border border-charcoal px-5 py-3.5 text-center text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
                style={{ borderRadius: "var(--radius-card)" }}
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                Chat on WhatsApp
              </a>
            </div>
            <a
              href={business.phoneHref}
              className="mt-3 block text-center text-sm font-medium text-ink-soft underline decoration-stone-dark underline-offset-4 hover:text-gold-dark"
            >
              Contact Kings Palm Homes — {business.phone}
            </a>
          </div>

          {/* Enquiry form */}
          <div className="lg:col-span-2">
            <div
              className="border border-stone-dark bg-white p-6"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              {submitted ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center bg-gold/15">
                    <Check className="h-6 w-6 text-gold-dark" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl text-charcoal">Enquiry received</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Thank you for your interest in {property.title}. A member of the Kings Palm
                    Homes team will reach out to confirm your inspection details shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-lg text-charcoal">Enquire About This Property</h3>
                  <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                    <Field label="Full Name" id="pf-name" required />
                    <Field label="Phone" id="pf-phone" type="tel" required />
                    <Field label="Email" id="pf-email" type="email" required />
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Preferred Date" id="pf-date" type="date" />
                      <Field label="Preferred Time" id="pf-time" type="time" />
                    </div>
                    <div>
                      <label htmlFor="pf-property" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Property
                      </label>
                      <input
                        id="pf-property"
                        readOnly
                        value={property.title}
                        className="w-full border border-stone-dark bg-ivory px-4 py-3 text-sm text-ink-soft"
                        style={{ borderRadius: "var(--radius-card)" }}
                      />
                    </div>
                    <div>
                      <label htmlFor="pf-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Message
                      </label>
                      <textarea
                        id="pf-message"
                        rows={3}
                        placeholder="Anything you'd like the team to know"
                        className="w-full border border-stone-dark bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-gold"
                        style={{ borderRadius: "var(--radius-card)" }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-charcoal px-5 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-charcoal-soft"
                      style={{ borderRadius: "var(--radius-card)" }}
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
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
