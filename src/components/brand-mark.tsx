import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "size-8 text-sm",
  md: "size-10 text-base",
  lg: "size-12 text-lg",
};

export function BrandMark({ className, size = "md" }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "font-serif-display inline-flex shrink-0 items-center justify-center rounded-xl bg-[#0a0a0a] font-semibold not-italic tracking-tight text-white shadow-[0_0_24px_oklch(0.72_0.18_40/0.25)] ring-1 ring-white/10",
        sizes[size],
        className,
      )}
      aria-hidden
    >
      A
    </span>
  );
}
