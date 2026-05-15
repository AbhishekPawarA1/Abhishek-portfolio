import { useEffect } from "react";
import { playMouseClickSound, warmUpClickSound } from "@/lib/ui-click-sound";

export function useClickSound() {
  useEffect(() => {
    const unlock = () => warmUpClickSound();
    document.addEventListener("pointerdown", unlock, { once: true, capture: true });
    document.addEventListener("keydown", unlock, { once: true, capture: true });

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;

      const target = event.target;
      if (target instanceof Element && target.closest("[data-no-click-sound]")) return;

      playMouseClickSound();
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, []);
}
