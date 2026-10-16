import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { Reveal, Section } from "./primitives";
import { profile } from "../data/content";

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the mailto link beside this still works.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-mist-500/20 px-5 py-3.5 text-sm font-medium text-mist-300 transition-all duration-300 hover:border-mist-500/40 hover:bg-ink-800/60 hover:text-mist-100"
    >
      {copied ? <Check size={16} className="text-mint-400" /> : <Copy size={16} />}
      {copied ? "Copied to clipboard" : "Copy email address"}
    </button>
  );
}

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: Linkedin, label: "LinkedIn", value: "ivan-honcharuk-dev", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "ivanhoncharuk", href: profile.github },
];

export default function Contact() {
  return (
    <Section id="contact" className="pb-24 md:pb-32">
      <Reveal className="flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.2em] text-mint-400">05</span>
        <span className="h-px w-10 bg-gradient-to-r from-mint-400/60 to-transparent" />
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mt-5 max-w-4xl text-[clamp(2.25rem,7vw,4.75rem)] leading-[1.02] font-medium tracking-[-0.04em] text-mist-100">
          Let's build something{" "}
          <span className="font-serif text-gradient italic">worth shipping.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-mist-500 md:text-lg">
          I'm open to full-time roles, contract work and interesting collaborations.
          Tell me what you're building and I'll get back to you quickly.
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-mist-100 px-7 py-3.5 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-white hover:shadow-[0_0_44px_-8px] hover:shadow-mint-400/60"
          >
            Start a conversation
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <CopyEmail />
        </div>
      </Reveal>

      <Reveal delay={0.24}>
        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-mist-500/10 bg-mist-500/10 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="group flex h-full flex-col gap-3 bg-ink-900 p-5 transition-colors duration-300 hover:bg-ink-850"
              >
                <Icon size={17} className="text-mist-600 transition-colors group-hover:text-mint-400" />
                <div>
                  <p className="font-mono text-[11px] tracking-[0.16em] text-mist-600 uppercase">
                    {label}
                  </p>
                  <p className="mt-1.5 text-sm break-all text-mist-300 transition-colors group-hover:text-mist-100">
                    {value}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
