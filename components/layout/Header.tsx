"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why-us", label: "Why Us" },
  { href: "/values", label: "Values" },
  { href: "/journey", label: "Journey" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-[background-color,backdrop-filter,box-shadow] duration-500 ease-out",
        solid
          ? "bg-navy/78 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.08)] border-b border-white/[0.06]"
          : "bg-gradient-to-b from-navy/50 via-navy/10 to-transparent"
      )}
    >
      <div
        className={clsx(
          "mx-auto grid max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 sm:px-10 xl:px-16 transition-[padding] duration-500 ease-out",
          solid ? "py-4" : "py-6 sm:py-7"
        )}
      >
        {/*
          Logo — generous breathing room, true aspect ratio preserved
          (1482:857), no backing chip. Width is fixed per breakpoint (not
          animated) so it never shifts on scroll — only the bar's padding
          and background transition.
        */}
        <Link href="/" className="flex items-center shrink-0 py-1">
          <Image
            src="/logo/concord-logo.png"
            alt="Concord for Catering"
            width={1482}
            height={857}
            priority
            className="h-auto w-[132px] sm:w-[150px] lg:w-[180px]"
          />
        </Link>

        {/* Centered nav — dedicated grid track so it can never collide with the logo or CTAs */}
        <nav className="hidden xl:flex items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "relative py-2 text-[13px] font-semibold tracking-[0.04em] uppercase text-white/80 hover:text-white transition-colors duration-300 group whitespace-nowrap",
                pathname === link.href && "text-white"
              )}
            >
              {link.label}
              <span
                className={clsx(
                  "absolute -bottom-0.5 left-0 h-[1.5px] bg-red transition-all duration-300 ease-out",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden xl:flex items-center gap-3 justify-self-end">
          <Link
            href="/contact"
            className="px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.04em] text-white border border-white/30 hover:border-white hover:bg-white hover:text-navy transition-all duration-300 whitespace-nowrap"
          >
            Contact Us
          </Link>
          <Link
            href="/contact#proposal"
            className="group relative overflow-hidden px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.04em] text-white bg-red whitespace-nowrap"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Request a Proposal
            </span>
            <span className="absolute inset-0 bg-red-dark origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden text-white p-2 justify-self-end"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-navy border-t border-white/10 px-6 sm:px-10 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/90 text-base font-medium tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="px-5 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-white border border-white/30"
            >
              Contact Us
            </Link>
            <Link
              href="/contact#proposal"
              onClick={() => setOpen(false)}
              className="px-5 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-white bg-red"
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
