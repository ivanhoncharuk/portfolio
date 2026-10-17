import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, FileText, MapPin, Mail } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { profile, stats, marquee } from "../data/content";

/** Opens the PDF in a new tab; shows the top of the first page as a preview. */
function ResumeCard() {
  const { href, preview, pages, updated } = profile.resume;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Open ${profile.firstName}'s résumé as a PDF in a new tab`}
      className="card-sheen group relative block overflow-hidden rounded-2xl border border-mist-500/12 bg-ink-900/70 p-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-mist-500/25 hover:bg-ink-850/80"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-16 h-44 w-44 rounded-full bg-gradient-to-br from-iris-500/20 to-transparent opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
      />

      <div className="relative flex items-center justify-between gap-3">
        <span className="flex items-center gap-2.5 text-sm font-medium text-mist-100">
          <FileText size={15} className="text-mint-400" />
          Résumé
        </span>
        <span className="rounded-full border border-mist-500/15 px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] text-mist-600 uppercase">
          PDF
        </span>
      </div>

      <div className="relative mt-3.5 aspect-[5/4] overflow-hidden rounded-lg border border-mist-500/10 bg-white">
        <img
          src={preview}
          alt={`First page of ${profile.name}'s résumé`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-ink-900 via-ink-900/55 to-transparent"
        />
      </div>

      <div className="relative mt-3.5 flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] tracking-wide text-mist-600">
          {pages} page · Updated {updated}
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-mist-400 transition-colors duration-300 group-hover:text-mist-100">
          Open
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </a>
  );
}

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: 0.1 + i * 0.09, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const reduced = useReducedMotion();
  const anim = (i) => ({
    custom: i,
    variants: rise,
    initial: reduced ? false : "hidden",
    animate: "show",
  });

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center">
      <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-16 sm:px-8 md:pt-32">
        <motion.div {...anim(0)} className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-70 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-400" />
          </span>
          <span className="font-mono text-xs tracking-[0.18em] text-mist-500 uppercase">
            Available for new work
          </span>
        </motion.div>

        <motion.p
          {...anim(1)}
          className="mt-8 font-mono text-sm tracking-tight text-mint-400"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          {...anim(2)}
          className="mt-3 text-[clamp(2.75rem,10vw,7rem)] leading-[0.95] font-medium tracking-[-0.045em] text-mist-100"
        >
          Ivan Honcharuk
        </motion.h1>

        <motion.p
          {...anim(3)}
          className="mt-6 max-w-3xl text-[clamp(1.35rem,4.2vw,2.6rem)] leading-[1.2] font-light tracking-[-0.025em] text-mist-500"
        >
          {profile.tagline[0]}{" "}
          <span className="font-serif text-mist-100 italic">{profile.tagline[1]}</span>{" "}
          {profile.tagline[2]}
        </motion.p>

        <div className="mt-9 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
        <motion.div
          {...anim(4)}
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mist-500"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="text-mist-600" />
            {profile.location}
          </span>
          <span className="hidden h-4 w-px bg-mist-500/20 sm:block" />
          <span className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-iris-400" />
            {profile.role}
          </span>
        </motion.div>

        <motion.div {...anim(5)} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-mist-100 px-6 py-3.5 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_-8px] hover:shadow-iris-400/60"
          >
            View my work
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full border border-mist-500/20 px-6 py-3.5 text-sm font-medium text-mist-300 transition-all duration-300 hover:border-mist-500/40 hover:bg-ink-800/60 hover:text-mist-100"
          >
            <Mail size={16} className="text-mist-600 transition-colors group-hover:text-mint-400" />
            {profile.email}
          </a>

          <div className="ml-1 flex items-center gap-1">
            {[
              { href: profile.github, icon: Github, label: "GitHub" },
              { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-mist-500/15 text-mist-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-mist-500/30 hover:text-mist-100"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.dl
          {...anim(6)}
          className="mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-mist-500/10 pt-8 sm:grid-cols-3 sm:gap-8"
        >
          {stats.map(({ value, label }) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="block text-3xl font-medium tracking-tight text-mist-100 sm:text-4xl">
                  {value}
                </span>
                <span className="mt-1.5 block text-xs leading-snug text-mist-600">{label}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
          </div>

          <motion.div
            {...anim(5)}
            className="max-w-sm lg:col-span-4 lg:col-start-9 lg:max-w-none lg:self-center"
          >
            <ResumeCard />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-mist-600 transition-colors hover:text-mist-300 lg:block"
      >
        <ArrowDown size={18} className="motion-safe:animate-bounce" />
      </motion.a>
    </section>
  );
}

export function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="relative overflow-hidden border-y border-mist-500/10 bg-ink-900/40 py-5">
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, var(--color-ink-950) 0%, transparent 12%, transparent 88%, var(--color-ink-950) 100%)",
        }}
      />
      <div className="flex w-max motion-safe:animate-[marquee_42s_linear_infinite]">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 px-5 font-mono text-xs tracking-[0.14em] text-mist-600 uppercase"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-iris-500/50" />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-50%,0,0); }
        }
      `}</style>
    </div>
  );
}
