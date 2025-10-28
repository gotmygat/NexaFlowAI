type Options = {
  typeMs?: number;
  deleteMs?: number;
  pauseEnd?: number;
  pauseBetween?: number;
  colors?: string[];
};

export function startTypedCycle(target: HTMLElement, opts: Options = {}) {
  const typeMs = opts.typeMs ?? 60;
  const deleteMs = opts.deleteMs ?? 40;
  const pauseEnd = opts.pauseEnd ?? 900;
  const pauseBetween = opts.pauseBetween ?? 350;
  const colors = opts.colors ?? ["#00e5ff", "#ff4fd8", "#9b5cff", "#4f7dff"];

  // Pull words from data attribute if present, else from sibling list, else fallback
  const fromData = (target.getAttribute("data-words") || "").trim();
  const words =
    (fromData ? fromData.split("|").map(s => s.trim()).filter(Boolean) : null) ??
    defaultWordsFromDOM(target) ??
    ["Maximum", "Alpha", "Arbitrage", "Edge"];

  let i = 0, sub = "", phase: "typing"|"pausing"|"deleting" = "typing";
  let raf: number | undefined;
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  // If reduced motion, render first word instantly and stop
  if (reduce) {
    target.textContent = words[0];
    setColor(target, colors[0]);
    return () => {};
  }

  function tick() {
    const word = words[i % words.length];

    if (phase === "typing") {
      if (sub.length < word.length) {
        sub = word.slice(0, sub.length + 1);
        target.textContent = sub;
        raf = window.setTimeout(tick, typeMs) as unknown as number;
      } else {
        raf = window.setTimeout(() => { phase = "pausing"; tick(); }, pauseEnd) as unknown as number;
      }
    } else if (phase === "pausing") {
      phase = "deleting";
      raf = window.setTimeout(tick, 0) as unknown as number;
    } else {
      if (sub.length > 0) {
        sub = word.slice(0, sub.length - 1);
        target.textContent = sub;
        raf = window.setTimeout(tick, deleteMs) as unknown as number;
      } else {
        i = (i + 1) % words.length;
        setColor(target, colors[i % colors.length]);
        raf = window.setTimeout(() => { phase = "typing"; tick(); }, pauseBetween) as unknown as number;
      }
    }
  }

  // Initialize color for first word
  setColor(target, colors[i % colors.length]);
  tick();

  return () => { if (raf) window.clearTimeout(raf); };
}

function setColor(el: HTMLElement, color: string) {
  el.style.transition = "color 400ms cubic-bezier(.22,.61,.36,1)";
  el.style.color = color;
}

// Heuristic to pull word list from nearby markup if the site already had them
function defaultWordsFromDOM(target: HTMLElement): string[] | null {
  const container = target.closest("h1, .headline, .hero") || document.body;
  const candidates = Array.from(container.querySelectorAll("[data-cycle], [data-words], .cycle, .rotating-words"));
  for (const el of candidates) {
    const attr = el.getAttribute("data-words");
    if (attr) return attr.split("|").map(s => s.trim()).filter(Boolean);
    const text = el.textContent?.trim();
    if (text && text.includes(",")) return text.split(",").map(s => s.trim()).filter(Boolean);
  }
  return null;
}
