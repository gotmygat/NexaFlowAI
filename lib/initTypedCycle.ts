import { startTypedCycleRaf } from "./typedCycleRaf";

export function initTypedCycle() {
  const target = document.querySelector<HTMLElement>("#typeword");
  if (!target) return;

  startTypedCycleRaf(target, {
    typeMs: 80,        // slower, more natural typing
    deleteMs: 50,      // slower delete
    pauseEnd: 2000,    // longer pause at end
    pauseBetween: 500, // longer pause between words
    colors: ["#00e5ff","#ff4fd8","#9b5cff","#4f7dff"]
  });
}
