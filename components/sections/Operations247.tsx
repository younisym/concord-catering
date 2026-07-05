"use client";

import { motion } from "framer-motion";

const items = [
  { value: "24", unit: "Hours" },
  { value: "7", unit: "Days" },
  { value: "365", unit: "Days" },
];

export default function Operations247() {
  return (
    <section className="bg-white py-24 sm:py-32 border-y border-line">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold kicker uppercase text-red"
        >
          Reliability, By The Numbers
        </motion.p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 lg:gap-16">
          {items.map((item, i) => (
            <motion.div
              key={`${item.value}-${item.unit}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline gap-3"
            >
              <span className="text-7xl sm:text-8xl lg:text-9xl font-bold text-navy leading-none tabular-nums">
                {item.value}
              </span>
              <span className="text-lg sm:text-xl font-semibold uppercase tracking-wide text-gray">
                {item.unit}
              </span>
              {i < items.length - 1 && (
                <span className="hidden sm:inline text-3xl text-line ml-6 lg:ml-10">/</span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 text-2xl sm:text-3xl font-bold text-navy text-balance"
        >
          Operational Excellence, Without Exception.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-4 max-w-2xl mx-auto text-gray leading-relaxed"
        >
          Aircraft don&apos;t wait. Our production, quality control, and logistics
          operate continuously — every hour, every day, every season — so
          every flight departs with exactly what it needs on board.
        </motion.p>
      </div>
    </section>
  );
}
