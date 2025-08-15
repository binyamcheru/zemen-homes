import { trustStrip } from "../data/site";

export default function TrustStrip() {
  return (
    <section id="trust" className="border-b border-stone-dark bg-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-y-4 px-6 py-7 lg:px-10">
        {trustStrip.map((item, i) => (
          <span key={item} className="flex items-center">
            <span className="eyebrow px-5 text-ink-soft sm:px-8">{item}</span>
            {i < trustStrip.length - 1 && (
              <span className="hidden h-3 w-px bg-stone-dark sm:block" />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
