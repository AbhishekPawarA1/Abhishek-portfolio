import { CustomCursor } from "@/components/custom-cursor";
import { useClickSound } from "@/hooks/use-click-sound";

export function SiteInteractions() {
  useClickSound();
  return <CustomCursor />;
}
