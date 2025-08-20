import { ArrowUpRight, MapPin } from "lucide-react";
import { developments } from "../data/site";
import { useReveal } from "../lib/useReveal";
import PropertyImage from "./PropertyImage";

export default function Developments() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="developments" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className="reveal max-w-2xl">
          <p className="eyebrow eyebrow--on-dark mb-4">Real Estate Development</p>
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">
            Developed for Better Living.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone sm:text-lg">
            Thoughtfully planned residential spaces designed around comfort, quality and
            long-term value.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {developments.map((project) => (
            <article
              key={project.id}
              className="group grid grid-cols-1 overflow-hidden border border-ivory/15 sm:grid-cols-2"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-soft sm:aspect-auto">
                <PropertyImage
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center bg-charcoal-soft p-7">
                <span className="eyebrow eyebrow--on-dark mb-3 w-fit border border-gold/40 px-3 py-1 text-[0.65rem]">
                  {project.status}
                </span>
                <h3 className="font-display text-2xl text-ivory">{project.name}</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-stone-dark">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {project.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone">{project.description}</p>
                {project.isDemo && (
                  <p className="mt-3 text-xs uppercase tracking-wider text-gold-light/80">
                    Demo project — for illustration only
                  </p>
                )}
                <a
                  href="#properties"
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold tracking-wide text-gold-light transition-colors hover:text-gold"
                >
                  View Development
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
