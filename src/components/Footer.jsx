import { ArrowUp } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-mist-500/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-5 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="text-sm text-mist-500">
            © {year} {profile.name}
          </p>
          <p className="mt-1.5 font-mono text-[11px] tracking-wide text-mist-600">
            Designed &amp; built with React, Vite and Tailwind CSS.
          </p>
        </div>

        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-sm text-mist-500 transition-colors hover:text-mist-100"
        >
          Back to top
          <span className="grid h-9 w-9 place-items-center rounded-full border border-mist-500/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-mist-500/30">
            <ArrowUp size={15} />
          </span>
        </a>
      </div>
    </footer>
  );
}
