import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Elegant, clearly-identified placeholder for assets that will be replaced later
 * (mockups, internal pages, author photo, podcast art, etc.).
 */
export function AssetPlaceholder({
  label,
  ratio = "4 / 5",
  className,
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gold/50 bg-ink-soft/40 p-6 text-center",
        className,
      )}
    >
      <ImageIcon className="size-6 text-gold" aria-hidden />
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cream/70">
        {label}
      </span>
    </div>
  );
}

/** Inline text placeholder for copy that still needs the real information. */
export function TextPlaceholder({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-dashed border-gold/60 px-2 py-0.5 text-sm font-semibold uppercase tracking-wide text-gold">
      {children}
    </span>
  );
}
