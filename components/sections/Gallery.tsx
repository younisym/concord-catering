"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { gallery } from "@/lib/content";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <SectionHeading
            kicker="Gallery"
            title="A closer look at our operations."
            description="From production to plate — a glimpse into the facilities, people, and process behind every meal Concord delivers."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {gallery.map((item, i) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden text-left ${
                item.tall ? "row-span-2" : "row-span-1"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-semibold translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {item.caption}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="size-8" strokeWidth={1.5} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 sm:left-8 text-white/70 hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-9 sm:size-10" strokeWidth={1.5} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[activeIndex].src}
                alt={gallery[activeIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
              <p className="absolute -bottom-10 left-0 right-0 text-center text-white/70 text-sm">
                {gallery[activeIndex].caption}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 sm:right-8 text-white/70 hover:text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="size-9 sm:size-10" strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
