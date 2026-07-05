"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Clock,
  Truck,
  Snowflake,
  UtensilsCrossed,
  Gauge,
  Users,
  Award,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { whyChoose } from "@/lib/content";

const icons = [
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Clock,
  Truck,
  Snowflake,
  UtensilsCrossed,
  Gauge,
  Users,
  Award,
];

export default function WhyChooseConcord() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <SectionHeading
            kicker="Why Choose Concord"
            title="The standards a global airline can build a schedule around."
            description="Every safeguard, process, and standard in our operation exists for one reason — to make sure the meal that reaches an aircraft is exactly right, every time."
            align="center"
          />
        </Reveal>

        <RevealStagger
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line border border-line"
          stagger={0.06}
        >
          {whyChoose.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group bg-white p-7 sm:p-8 flex flex-col gap-4 hover:bg-navy transition-colors duration-500"
              >
                <Icon
                  className="size-7 text-red transition-colors duration-500"
                  strokeWidth={1.5}
                />
                <h3 className="text-sm font-bold text-navy group-hover:text-white transition-colors duration-500 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray group-hover:text-white/70 transition-colors duration-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
