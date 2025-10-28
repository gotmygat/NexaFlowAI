import { startTypedCycleRaf } from "./typedCycleRaf";

export function initTypedCycle() {
  const hero = document.querySelector<HTMLElement>("[class*='hero'], header, main, section") || document.body;

  // Find the H1 that contains "Unlock" and "Potential"
  const h1 = Array.from(hero.querySelectorAll("h1")).find(el =>
    /unlock/i.test(el.textContent || "") && /potential/i.test(el.textContent || "")
  ) as HTMLElement | undefined;

  if (!h1) return;

  // If not already patched, wrap the cycling word
  if (!h1.querySelector("#typeword")) {
    // Find the TypewriterText component span (contains the cycling words)
    const typewriterSpan = h1.querySelector('.inline-block.min-w-\\[280px\\]');

    if (typewriterSpan) {
      // Replace with our new markup
      const gradientSpan = typewriterSpan.parentElement;
      if (gradientSpan) {
        gradientSpan.innerHTML = `<span id="typeword" data-words="Limitless Profit|Maximum Returns|Infinite Gains|Unlimited Revenue"></span><span id="slash-cursor">/</span>`;
      }
    }
  }

  const target = h1.querySelector<HTMLElement>("#typeword");
  if (!target) return;

  startTypedCycleRaf(target, {
    typeMs: 54,        // slightly faster typing = smoother
    deleteMs: 42,      // slightly faster delete
    pauseEnd: 880,
    pauseBetween: 320,
    colors: ["#00e5ff","#ff4fd8","#9b5cff","#4f7dff"]
  });
}
