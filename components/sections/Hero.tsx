"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-navy">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 24,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <Image
          src="/images/hero-premium-tray.jpg"
          alt="Premium business-class in-flight meal tray prepared by Concord for Catering"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          quality={90}
          className="object-cover object-center"
        />
      </motion.div>

      {/*
        Minimal readability overlay only — concentrated tightly behind the
        text block (bottom-left) so the tray itself stays bright, sharp, and
        the primary visual focus everywhere else in the frame.
      */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,42,94,0.58)_0%,rgba(14,42,94,0.16)_38%,rgba(14,42,94,0)_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,42,94,0.4)_0%,rgba(14,42,94,0.08)_35%,rgba(14,42,94,0)_58%)]" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 sm:px-10 lg:px-16 pb-24 sm:pb-28 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] uppercase text-white/90"
          style={{ textShadow: "0 1px 12px rgba(14,42,94,0.5)" }}
        >
          <ShieldCheck className="size-4 text-red" />
          <span>Aviation Catering &middot; Established 2011 &middot; Egypt</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-3xl text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.03] text-white text-balance"
          style={{ textShadow: "0 2px 28px rgba(14,42,94,0.55), 0 1px 4px rgba(14,42,94,0.4)" }}
        >
          Everywhere.
          <br />
          Every Time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base sm:text-lg text-white/95 leading-relaxed"
          style={{ textShadow: "0 1px 16px rgba(14,42,94,0.5)" }}
        >
          Concord for Catering delivers premium airline catering and food
          solutions with an unwavering commitment to quality, food safety,
          and operational excellence — for airlines, hospitality partners,
          and corporate clients across Egypt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.25, ease: "easeOut" }}>
            <Link
              href="/contact#proposal"
              className="group relative inline-flex items-center gap-2 overflow-hidden px-7 py-4 text-sm font-semibold tracking-wide uppercase text-white bg-red"
            >
              <span className="relative z-10">Request a Proposal</span>
              <span className="absolute inset-0 bg-red-dark origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.25, ease: "easeOut" }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold tracking-wide uppercase border border-white/50 text-white hover:bg-white hover:text-navy transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 right-6 sm:right-10 lg:right-16 z-10 hidden sm:flex flex-col items-end text-white/60 text-xs tracking-[0.2em] uppercase"
      >
        <span>Scroll</span>
        <motion.span
          className="mt-2 h-10 w-px bg-white/40 origin-top"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
