// Time-based typing driven by requestAnimationFrame (smooth, jitter-free)
type Phase = "typing" | "pauseEnd" | "deleting" | "pauseBetween";

interface Opts {
  typeMs?: number;       // avg ms per character while typing
  deleteMs?: number;     // avg ms per character while deleting
  pauseEnd?: number;     // ms pause after a word finishes typing
  pauseBetween?: number; // ms pause after deletion before next word
  colors?: string[];     // color per word boundary
}

export function startTypedCycleRaf(target: HTMLElement, opts: Opts = {}) {
  const words = getWords(target);
  if (!words.length) return () => {};

  const typeMs = opts.typeMs ?? 60;
  const deleteMs = opts.deleteMs ?? 40;
  const pauseEnd = opts.pauseEnd ?? 900;
  const pauseBetween = opts.pauseBetween ?? 350;
  const colors = opts.colors ?? ["#00e5ff","#ff4fd8","#9b5cff","#4f7dff"];
  const reduce = matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  // reduced-motion: render first word instantly
  if (reduce) {
    target.textContent = words[0];
    applyColor(target, colors[0]);
    return () => {};
  }

  let wordIdx = 0;
  let visibleChars = 0;
  let phase: Phase = "typing";
  let acc = 0; // accumulated time
  let rafId = 0;

  // apply initial color
  applyColor(target, colors[0]);

  function loop(tsPrev: number) {
    function frame(tsNow: number) {
      const dt = tsNow - tsPrev;
      tsPrev = tsNow;
      acc += dt;

      const word = words[wordIdx];
      if (phase === "typing") {
        const step = Math.floor(acc / typeMs);
        if (step > 0) {
          acc -= step * typeMs;
          visibleChars = Math.min(word.length, visibleChars + step);
          target.textContent = word.slice(0, visibleChars);
          if (visibleChars === word.length) {
            phase = "pauseEnd"; acc = 0;
          }
        }
      } else if (phase === "pauseEnd") {
        if (acc >= pauseEnd) { phase = "deleting"; acc = 0; }
      } else if (phase === "deleting") {
        const step = Math.floor(acc / deleteMs);
        if (step > 0) {
          acc -= step * deleteMs;
          visibleChars = Math.max(0, visibleChars - step);
          target.textContent = word.slice(0, visibleChars);
          if (visibleChars === 0) { phase = "pauseBetween"; acc = 0; }
        }
      } else if (phase === "pauseBetween") {
        if (acc >= pauseBetween) {
          wordIdx = (wordIdx + 1) % words.length;
          applyColor(target, colors[wordIdx % colors.length]); // color only on boundary
          phase = "typing"; acc = 0;
        }
      }

      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);
  }

  const startTs = performance.now();
  loop(startTs);

  return () => cancelAnimationFrame(rafId);
}

function getWords(target: HTMLElement): string[] {
  const data = target.getAttribute("data-words");
  if (data) return data.split("|").map(s => s.trim()).filter(Boolean);
  // fallback: try to scrape from nearby element used by prior cycler
  const nearby = target.closest("h1, .headline, .hero") || document.body;
  const src = nearby.querySelector<HTMLElement>("[data-words], .rotating-words, [data-cycle]");
  if (src?.getAttribute("data-words")) {
    return (src.getAttribute("data-words") || "").split("|").map(s => s.trim()).filter(Boolean);
  }
  return [];
}

function applyColor(el: HTMLElement, color: string) {
  el.style.transition = "color 400ms cubic-bezier(.22,.61,.36,1)";
  el.style.color = color;
}
