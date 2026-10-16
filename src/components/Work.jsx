import { ArrowUpRight } from "lucide-react";
import { Github } from "./BrandIcons";
import { Panel, Reveal, Section, SectionHeading, Tag } from "./primitives";
import { projects } from "../data/content";

function ProjectCard({ project, index }) {
  const featured = project.featured;
  const accent =
    project.accent === "mint"
      ? "from-mint-500/20 via-transparent"
      : "from-iris-500/20 via-transparent";

  return (
    <Reveal delay={index * 0.07} className="h-full">
      <Panel className="h-full p-6 sm:p-8">
        <div
          aria-hidden
          className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${accent} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`}
        />

        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-iris-400/25 bg-iris-500/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-iris-400 uppercase">
                {project.kind}
              </span>
              <span className="font-mono text-[11px] text-mist-600">{project.year}</span>
            </div>

            <div className="flex items-center gap-1.5">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} source code`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-mist-500/15 text-mist-500 transition-colors hover:text-mist-100"
                >
                  <Github size={15} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open ${project.title}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-mist-500/15 text-mist-500 transition-colors hover:text-mist-100"
                >
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>

          <h3
            className={`mt-6 font-medium tracking-tight text-mist-100 transition-colors duration-300 group-hover:text-white ${
              featured ? "text-2xl md:text-[1.75rem]" : "text-xl md:text-2xl"
            }`}
          >
            {project.title}
          </h3>

          <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-mist-500 md:text-[0.95rem]">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2 pt-7">
            {project.stack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </Panel>
    </Reveal>
  );
}

export default function Work() {
  return (
    <Section id="work">
      <SectionHeading
        index="03"
        title="Selected work"
        lead="A few of the things I've designed, built and shipped. Each one started as a problem someone needed solved."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
