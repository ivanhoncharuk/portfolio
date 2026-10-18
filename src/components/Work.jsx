import { useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { ArrowUpRight, Expand } from "lucide-react";
import { Reveal, Section, SectionHeading, Tag } from "./primitives";
import Lightbox from "./Lightbox";
import { projects } from "../data/content";

const ACCENTS = {
  iris: {
    chip: "border-iris-400/25 bg-iris-500/10 text-iris-400",
    bloom: "from-iris-500/18",
    rule: "from-iris-400/50",
    thumb: "border-iris-400/70",
  },
  mint: {
    chip: "border-mint-400/25 bg-mint-500/10 text-mint-400",
    bloom: "from-mint-500/18",
    rule: "from-mint-400/50",
    thumb: "border-mint-400/70",
  },
};

/** Browser-style frame around the active screenshot, with a thumbnail rail beneath it. */
function Gallery({ project, active, onSelect, onExpand }) {
  const reduced = useReducedMotion();
  const accent = ACCENTS[project.accent] ?? ACCENTS.iris;
  const image = project.images[active];

  return (
    <div className="group/gallery">
      <div className="card-sheen relative overflow-hidden rounded-xl border border-mist-500/12 bg-ink-900/70 shadow-2xl shadow-black/40 transition-colors duration-500 group-hover/gallery:border-mist-500/22">
        <div className="flex items-center gap-2.5 border-b border-mist-500/10 bg-ink-850/70 px-3.5 py-2.5">
          <span aria-hidden className="flex gap-1.5">
            <i className="h-2 w-2 rounded-full bg-mist-500/25" />
            <i className="h-2 w-2 rounded-full bg-mist-500/25" />
            <i className="h-2 w-2 rounded-full bg-mist-500/25" />
          </span>
          <span className="mx-auto max-w-[60%] truncate rounded-full border border-mist-500/10 bg-ink-900/80 px-3 py-0.5 font-mono text-[10px] tracking-wide text-mist-600">
            {project.domain}
          </span>
          <span aria-hidden className="w-[34px]" />
        </div>

        <button
          type="button"
          onClick={onExpand}
          aria-label={`View ${project.title} screenshots full size`}
          className="relative block w-full cursor-zoom-in overflow-hidden"
        >
          <div className="relative aspect-[1500/940] w-full">
            <AnimatePresence initial={false} mode="popLayout">
              <m.img
                key={image.src}
                src={image.src}
                alt={`${project.title} — ${image.caption}`}
                loading="lazy"
                decoding="async"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </AnimatePresence>
          </div>

          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/gallery:opacity-100" />

          <span className="pointer-events-none absolute right-3 bottom-3 flex translate-y-1 items-center gap-1.5 rounded-full border border-mist-500/20 bg-ink-900/85 px-3 py-1.5 font-mono text-[10px] tracking-wide text-mist-300 opacity-0 backdrop-blur transition-all duration-500 group-hover/gallery:translate-y-0 group-hover/gallery:opacity-100">
            <Expand size={11} />
            Expand
          </span>
        </button>
      </div>

      <div
        className="mt-3 grid gap-2"
        style={{ gridTemplateColumns: `repeat(${project.images.length}, minmax(0, 1fr))` }}
      >
        {project.images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={img.caption}
            aria-current={i === active}
            className={`relative aspect-[1500/940] overflow-hidden rounded-md border transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              i === active
                ? `${accent.thumb} opacity-100`
                : "border-mist-500/12 opacity-40 hover:opacity-75"
            }`}
          >
            <img
              src={img.src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </button>
        ))}
      </div>

      <p className="mt-3 min-h-[1.25rem] font-mono text-[11px] tracking-wide text-mist-600">
        {image.caption}
      </p>
    </div>
  );
}

function ProjectShowcase({ project, index, onExpand }) {
  const [active, setActive] = useState(0);
  const accent = ACCENTS[project.accent] ?? ACCENTS.iris;
  const flipped = index % 2 === 1;

  return (
    <article className="relative">
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-28 hidden h-72 w-72 rounded-full bg-gradient-to-br lg:block ${accent.bloom} to-transparent blur-3xl ${
          flipped ? "-left-28" : "-right-28"
        }`}
      />

      <div className="relative grid items-center gap-x-12 gap-y-9 lg:grid-cols-12">
        <div
          className={`lg:col-span-5 ${flipped ? "lg:order-2 lg:col-start-8" : "lg:order-1"}`}
        >
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.2em] text-mist-600 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`h-px w-8 bg-gradient-to-r ${accent.rule} to-transparent`}
              />
              <span
                className={`rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] uppercase ${accent.chip}`}
              >
                {project.kind}
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-mist-100 md:text-4xl">
              {project.title}
            </h3>

            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2.5 inline-flex items-center gap-1.5 font-mono text-[12px] text-mist-500 transition-colors hover:text-mist-100"
              >
                {project.domain}
                <ArrowUpRight size={13} />
              </a>
            ) : (
              <p className="mt-2.5 font-mono text-[12px] text-mist-500">{project.note}</p>
            )}

            <p className="mt-5 text-sm leading-relaxed text-mist-500 md:text-[0.95rem]">
              {project.description}
            </p>

            <ul className="mt-6 space-y-2.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed text-mist-500">
                  <span
                    aria-hidden
                    className={`mt-2 h-px w-3.5 shrink-0 bg-gradient-to-r ${accent.rule} to-transparent`}
                  />
                  {h}
                </li>
              ))}
            </ul>

            <div className="group mt-7 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-mist-500/18 bg-ink-800/60 px-5 py-2.5 text-sm text-mist-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-mist-500/35 hover:text-mist-100"
              >
                Visit the live site
                <ArrowUpRight size={15} />
              </a>
            )}
          </Reveal>
        </div>

        <div className={`lg:col-span-7 ${flipped ? "lg:order-1 lg:col-start-1" : "lg:order-2"}`}>
          <Reveal delay={0.08} y={32}>
            <Gallery
              project={project}
              active={active}
              onSelect={setActive}
              onExpand={() => onExpand(project, active)}
            />
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const [viewer, setViewer] = useState(null);

  return (
    <Section id="work">
      <SectionHeading
        index="03"
        title="Selected work"
        lead="Six products shipped and in daily use — an AI chatbot platform, a studio site, a WhatsApp sales agent, a Patagonia booking engine, a freight forwarder and a multi-channel conversation agent."
      />

      <div className="space-y-20 md:space-y-24 lg:space-y-28">
        {projects.map((p, i) => (
          <ProjectShowcase
            key={p.title}
            project={p}
            index={i}
            onExpand={(project, index) => setViewer({ project, index })}
          />
        ))}
      </div>

      <Lightbox
        state={viewer}
        onClose={() => setViewer(null)}
        onNavigate={(index) => setViewer((v) => (v ? { ...v, index } : v))}
      />
    </Section>
  );
}
