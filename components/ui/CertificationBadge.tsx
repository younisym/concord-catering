import { ShieldCheck } from "lucide-react";
import clsx from "clsx";

export default function CertificationBadge({
  code,
  name,
  theme = "light",
}: {
  code: string;
  name: string;
  theme?: "light" | "dark";
}) {
  const isDark = theme === "dark";
  return (
    <div
      className={clsx(
        "flex items-center gap-3 border px-5 py-4 transition-colors",
        isDark
          ? "border-white/15 hover:border-white/30"
          : "border-line hover:border-navy/20"
      )}
    >
      <ShieldCheck
        className={clsx("size-6 shrink-0", isDark ? "text-red" : "text-red")}
        strokeWidth={1.5}
      />
      <div>
        <div
          className={clsx(
            "text-sm font-bold tracking-wide",
            isDark ? "text-white" : "text-navy"
          )}
        >
          {code}
        </div>
        <div
          className={clsx(
            "text-xs uppercase kicker",
            isDark ? "text-white/50" : "text-gray"
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
}
