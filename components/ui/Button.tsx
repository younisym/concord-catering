import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost-light" | "ghost-dark";
  className?: string;
  showArrow?: boolean;
};

const variants: Record<string, string> = {
  primary: "bg-red text-white hover:bg-red-dark",
  secondary: "bg-navy text-white hover:bg-navy-2",
  "ghost-light": "border border-white/40 text-white hover:bg-white hover:text-navy",
  "ghost-dark": "border border-navy/20 text-navy hover:bg-navy hover:text-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-300",
        variants[variant],
        className
      )}
    >
      {children}
      {showArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
