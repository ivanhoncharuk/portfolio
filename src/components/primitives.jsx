import { m, useReducedMotion } from "motion/react";

/** Fades + lifts its children into view once, the first time they're scrolled to. */
export function Reveal({ children, delay = 0, y = 24, className = "", as = "div" }) {
  const reduced = useReducedMotion();
  const MotionTag = m[as] ?? m.div;

  return (
    <MotionTag
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-14 sm:px-8 sm:py-16 md:py-20 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeading({ index, title, lead }) {
  return (
    <div className="mb-10 md:mb-14">
      <Reveal className="flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.2em] text-mint-400">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-mint-400/60 to-transparent" />
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-mist-100 sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>

      {lead && (
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist-500 md:text-lg">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

/** Thin pill used for tech tags. */
export function Tag({ children }) {
  return (
    <span className="rounded-full border border-mist-500/15 bg-ink-800/60 px-3 py-1 font-mono text-[11px] tracking-wide text-mist-500 transition-colors duration-300 group-hover:border-mist-500/25 group-hover:text-mist-300">
      {children}
    </span>
  );
}

/** Card with a soft gradient edge that brightens on hover. */
export function Panel({ children, className = "" }) {
  return (
    <div
      className={`card-sheen group relative overflow-hidden rounded-2xl border border-mist-500/10 bg-ink-900/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-mist-500/20 hover:bg-ink-850/80 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-iris-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {children}
    </div>
  );
}
