"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { RevealStagger, staggerItem } from "@/components/ui/Reveal";
import clsx from "clsx";

export type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureList({
  features,
  columns = 1,
}: {
  features: Feature[];
  columns?: 1 | 2;
}) {
  return (
    <RevealStagger
      className={clsx(
        "grid grid-cols-1 gap-8",
        columns === 2 && "sm:grid-cols-2"
      )}
    >
      {features.map((feature) => (
        <motion.div key={feature.title} variants={staggerItem} className="flex gap-4">
          <div className="shrink-0 size-11 flex items-center justify-center border border-line text-red [&_svg]:size-5">
            {feature.icon}
          </div>
          <div>
            <h3 className="font-bold text-navy leading-snug">{feature.title}</h3>
            <p className="mt-1.5 text-sm text-gray leading-relaxed">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </RevealStagger>
  );
}
