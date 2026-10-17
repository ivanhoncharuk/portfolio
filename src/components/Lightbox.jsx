import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * Full-screen viewer for a project's gallery.
 * `state` is either null or `{ project, index }`.
 */
export default function Lightbox({ state, onClose, onNavigate }) {
  const reduced = useReducedMotion();
  const closeRef = useRef(null);
  const project = state?.project;
  const index = state?.index ?? 0;
  const images = project?.images;
  const count = images?.length ?? 0;
  const image = images?.[index];

  const go = useCallback(
    (step) => onNavigate((index + step + count) % count),
    [index, count, onNavigate],
  );

  // Keyboard controls + scroll lock while the viewer is open.
  useEffect(() => {
    if (!project) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };

    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [project, go, onClose]);

  // Warm the neighbouring frames so stepping through feels instant.
  useEffect(() => {
    if (!images) return;
    for (const step of [1, -1]) {
      const img = new Image();
      img.src = images[(index + step + images.length) % images.length].src;
    }
  }, [images, index]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <m.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} screenshots`}
          className="fixed inset-0 z-[100] flex flex-col bg-ink-950/95 backdrop-blur-xl"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <header className="flex shrink-0 items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-mist-100">{project.title}</p>
              <p className="truncate font-mono text-[11px] text-mist-600">{project.domain}</p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span className="font-mono text-[11px] tracking-widest text-mist-600 tabular-nums">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-10 w-10 place-items-center rounded-full border border-mist-500/15 text-mist-400 transition-colors hover:border-mist-500/30 hover:text-mist-100"
              >
                <X size={17} />
              </button>
            </div>
          </header>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            {count > 1 && (
              <NavButton side="left" onClick={() => go(-1)}>
                <ChevronLeft size={20} />
              </NavButton>
            )}

            <m.img
              key={image.src}
              src={image.src}
              alt={`${project.title} — ${image.caption}`}
              initial={reduced ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-full max-w-full rounded-xl border border-mist-500/12 object-contain shadow-2xl shadow-black/60"
            />

            {count > 1 && (
              <NavButton side="right" onClick={() => go(1)}>
                <ChevronRight size={20} />
              </NavButton>
            )}
          </div>

          <footer className="shrink-0 px-5 py-4 sm:px-8" onClick={(e) => e.stopPropagation()}>
            <p className="mx-auto mb-4 max-w-2xl text-center text-sm text-mist-500">
              {image.caption}
            </p>

            <div className="flex justify-center gap-2 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => onNavigate(i)}
                  aria-label={img.caption}
                  aria-current={i === index}
                  className={`h-12 w-20 shrink-0 overflow-hidden rounded-md border transition-all duration-300 ${
                    i === index
                      ? "border-iris-400/70 opacity-100"
                      : "border-mist-500/15 opacity-45 hover:opacity-80"
                  }`}
                >
                  <img src={img.src} alt="" className="h-full w-full object-cover object-top" />
                </button>
              ))}
            </div>
          </footer>
        </m.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function NavButton({ side, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous screenshot" : "Next screenshot"}
      className={`absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-mist-500/15 bg-ink-900/80 text-mist-400 backdrop-blur transition-colors hover:border-mist-500/30 hover:text-mist-100 ${
        side === "left" ? "left-1 sm:left-4" : "right-1 sm:right-4"
      }`}
    >
      {children}
    </button>
  );
}
