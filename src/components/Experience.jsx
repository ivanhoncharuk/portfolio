import { Reveal, Section, SectionHeading, Tag } from "./primitives";
import { experience, education } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="02"
        title="Experience"
        lead="Five years shipping production software — and steadily pulling AI into the stack."
      />

      <ol className="relative">
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-iris-500/50 via-mist-500/15 to-transparent"
        />

        {experience.map((job, i) => (
          <li key={job.company} className="relative pl-10 sm:pl-14">
            <span className="absolute top-2 left-0 grid h-[15px] w-[15px] place-items-center rounded-full border border-iris-400/50 bg-ink-950">
              <span className="h-[5px] w-[5px] rounded-full bg-iris-400" />
            </span>

            <Reveal delay={i * 0.08}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-medium tracking-tight text-mist-100 md:text-2xl">
                  {job.role}
                </h3>
                <span className="text-mist-600">·</span>
                <span className="text-lg text-iris-400 md:text-xl">{job.company}</span>
              </div>

              <p className="mt-2 font-mono text-xs tracking-wide text-mist-600">
                {job.period} &nbsp;·&nbsp; {job.location}
              </p>

              <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-mist-300">
                {job.summary}
              </p>

              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-mist-500">
                    <span
                      aria-hidden
                      className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-mint-400/70"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="group mt-7 flex flex-wrap gap-2 pb-14">
                {job.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Reveal>
          </li>
        ))}

        <li className="relative pl-10 sm:pl-14">
          <span className="absolute top-2 left-0 grid h-[15px] w-[15px] place-items-center rounded-full border border-mist-500/30 bg-ink-950">
            <span className="h-[5px] w-[5px] rounded-full bg-mist-500/60" />
          </span>

          <Reveal>
            <h3 className="text-xl font-medium tracking-tight text-mist-100 md:text-2xl">
              Education
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {education.map((e) => (
                <div
                  key={e.school}
                  className="rounded-2xl border border-mist-500/10 bg-ink-900/60 p-5 transition-colors duration-500 hover:border-mist-500/20"
                >
                  <p className="font-mono text-[11px] tracking-wide text-mint-400">{e.period}</p>
                  <h4 className="mt-2.5 leading-snug font-medium text-mist-100">{e.degree}</h4>
                  <p className="mt-1.5 text-sm text-mist-500">{e.school}</p>
                  <p className="mt-3 text-xs leading-relaxed text-mist-600">{e.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </li>
      </ol>
    </Section>
  );
}
