import { useEffect, useRef } from "react";

/**
 * Fixed decorative layer: a faint grid, two slow aurora blooms, and a spotlight
 * that trails the pointer. The spotlight is written straight to CSS variables so
 * it never triggers a React render.
 */
export default function Background() {
  const spotRef = useRef(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    const onMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        el.style.setProperty("--x", `${e.clientX}px`);
        el.style.setProperty("--y", `${e.clientY}px`);
        el.style.opacity = "1";
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(141,141,160,0.14) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(141,141,160,0.14) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 20%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 20%, transparent 78%)",
        }}
      />

      {/* aurora blooms */}
      <div className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-iris-600/18 blur-[140px] motion-safe:animate-[drift_18s_ease-in-out_infinite_alternate]" />
      <div className="absolute -top-24 right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-mint-500/12 blur-[150px] motion-safe:animate-[drift_22s_ease-in-out_infinite_alternate-reverse]" />
      <div className="absolute top-[120vh] left-1/4 h-[26rem] w-[26rem] rounded-full bg-iris-500/10 blur-[150px]" />

      {/* pointer spotlight */}
      <div
        ref={spotRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 0px), rgba(139,124,255,0.07), transparent 65%)",
        }}
      />

      <style>{`
        @keyframes drift {
          from { transform: translate3d(0,0,0) scale(1); }
          to   { transform: translate3d(60px,40px,0) scale(1.12); }
        }
      `}</style>
    </div>
  );
}
