import { Reveal, Section, SectionHeading } from "./primitives";
import { profile } from "../data/content";

const traits = [
  { k: "Focus", v: "Full stack delivery & applied AI" },
  { k: "Based in", v: profile.location },
  { k: "Working in", v: "English · Ukrainian" },
  { k: "Open to", v: "Full-time · Contract · Remote" },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" title="About" />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          {profile.about.map((para, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="mb-6 text-base leading-[1.75] text-mist-300 md:text-[1.0625rem]">
                {para}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <p className="mt-10 border-l-2 border-iris-500/50 pl-5 font-serif text-xl leading-snug text-mist-100 italic md:text-2xl">
              “Clean code, application efficiency, security — and never being
              finished learning.”
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <dl className="divide-y divide-mist-500/10 overflow-hidden rounded-2xl border border-mist-500/10 bg-ink-900/60">
              {traits.map(({ k, v }) => (
                <div key={k} className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <dt className="font-mono text-[11px] tracking-[0.16em] text-mist-600 uppercase">
                    {k}
                  </dt>
                  <dd className="text-right text-sm text-mist-300">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-5 overflow-hidden rounded-2xl border border-mist-500/10 bg-gradient-to-br from-iris-600/15 via-ink-900 to-mint-500/10 p-6">
              <p className="font-mono text-[11px] tracking-[0.16em] text-mist-600 uppercase">
                Currently exploring
              </p>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-mist-100">
                Retrieval-augmented generation, agentic workflows, and how far a small
                team can get when the tedious work runs itself.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
