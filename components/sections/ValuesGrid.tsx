"use client";

import { motion } from "framer-motion";
import { values } from "@/lib/content";
import { RevealStagger, staggerItem } from "@/components/ui/Reveal";

export default function ValuesGrid() {
  return (
    <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
      {values.map((value, i) => (
        <motion.div
          key={value.title}
          variants={staggerItem}
          className="bg-white p-10 sm:p-12 flex flex-col"
        >
          <span className="text-5xl font-bold text-line">
            0{i + 1}
          </span>
          <h3 className="mt-6 text-2xl font-bold text-navy">{value.title}</h3>
          <p className="mt-4 text-gray leading-relaxed">{value.description}</p>
          <span className="mt-8 h-1 w-10 bg-red" />
        </motion.div>
      ))}
    </RevealStagger>
  );
}
