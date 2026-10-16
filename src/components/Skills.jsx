import { Panel, Reveal, Section, SectionHeading } from "./primitives";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="04"
        title="Toolkit"
        lead="The technologies I reach for — chosen to fit the problem, not the résumé."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.08}>
            <Panel className="h-full p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium tracking-tight text-mist-100">{group.title}</h3>
                <span className="font-mono text-[11px] text-mist-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-mist-600">{group.blurb}</p>

              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-mist-300 transition-colors duration-300"
                  >
                    <span
                      aria-hidden
                      className="h-1 w-1 rounded-full bg-mint-400/60 transition-colors duration-300 group-hover:bg-mint-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
