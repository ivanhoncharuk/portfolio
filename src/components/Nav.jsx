import { useEffect, useState } from "react";
import { AnimatePresence, m, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section currently owns the upper third of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.4, 0.8] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-lg focus:bg-ink-800 focus:px-4 focus:py-2 focus:text-sm focus:text-mist-100"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-mist-500/10 bg-ink-950/70 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8 md:h-20">
          <a
            href="#top"
            aria-label={`${profile.name} — back to top`}
            className="group flex items-center gap-2.5 text-sm font-medium tracking-tight text-mist-100"
          >
            <img
              src="/logo-icon.webp"
              alt=""
              width="136"
              height="112"
              className="h-7 w-auto drop-shadow-[0_0_14px_rgba(80,160,255,0.35)] transition-transform duration-500 group-hover:scale-105"
            />
            <span className="hidden sm:inline">
              Ivan Honcharuk
              <span className="ml-2 text-mist-600">/ {profile.role.split(" & ")[0]}</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                  active === id ? "text-mist-100" : "text-mist-500 hover:text-mist-300"
                }`}
              >
                {active === id && (
                  <m.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-mist-500/10 bg-ink-800/80"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{label}</span>
              </a>
            ))}

            <a
              href={`mailto:${profile.email}`}
              className="ml-3 rounded-full bg-mist-100 px-4 py-2 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-white hover:shadow-[0_0_28px_-6px] hover:shadow-iris-400/50"
            >
              Get in touch
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg border border-mist-500/15 text-mist-300 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        <m.div
          style={{ scaleX: progress }}
          className="h-px origin-left bg-gradient-to-r from-iris-500 via-iris-400 to-mint-400"
        />
      </header>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col justify-center gap-2 px-8">
              {navLinks.map(({ id, label }, i) => (
                <m.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-mist-500/10 py-5 text-3xl font-medium tracking-tight text-mist-100"
                >
                  <span className="mr-4 font-mono text-xs text-mint-400">
                    0{i + 1}
                  </span>
                  {label}
                </m.a>
              ))}
              <m.a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 rounded-full bg-mist-100 py-3.5 text-center font-medium text-ink-950"
              >
                {profile.email}
              </m.a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
