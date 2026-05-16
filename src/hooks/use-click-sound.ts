import { useEffect } from "react";
import {
  playMouseClickSound,
  preloadClickSound,
  warmUpClickSound,
} from "@/lib/ui-click-sound";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], [role="link"], input[type="submit"], input[type="button"], input[type="reset"], label[for], summary, [data-click-sound]';

export function useClickSound() {
  useEffect(() => {
    void preloadClickSound();

    const unlock = () => warmUpClickSound();

    document.addEventListener("pointerdown", unlock, { capture: true, passive: true });
    document.addEventListener("touchstart", unlock, { capture: true, passive: true });
    document.addEventListener("keydown", unlock, { once: true, capture: true });

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("[data-no-click-sound]")) return;

      const interactive = target.closest(INTERACTIVE_SELECTOR);
      if (!interactive) return;

      warmUpClickSound();
      playMouseClickSound();
    };

    document.addEventListener("pointerdown", onPointerDown, true);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, []);
}
