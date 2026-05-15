import { useEffect } from "react";
import { playMouseClickSound, warmUpClickSound } from "@/lib/ui-click-sound";

/** Buttons, links, and marked cards only — not empty page / scroll areas. */
const CLICK_SOUND_SELECTOR = [
  "a",
  "button",
  '[role="button"]',
  '[role="link"]',
  'input[type="submit"]',
  'input[type="button"]',
  'input[type="reset"]',
  "label[for]",
  "summary",
  "[data-click-sound]",
].join(", ");

export function useClickSound() {
  useEffect(() => {
    const unlock = () => warmUpClickSound();
    document.addEventListener("click", unlock, { once: true, capture: true });

    const onClick = (event: MouseEvent) => {
      if (event.button !== 0) return;
      if (event.defaultPrevented) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("[data-no-click-sound]")) return;

      const interactive = target.closest(CLICK_SOUND_SELECTOR);
      if (!interactive) return;

      playMouseClickSound();
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
}
