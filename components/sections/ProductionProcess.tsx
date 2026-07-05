"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wheat, ChefHat, Gauge, Snowflake, Truck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealStagger, staggerItem } from "@/components/ui/Reveal";

const steps = [
  {
    icon: Wheat,
    title: "Sourcing & Inspection",
    description: "Ingredients are selected and inspected against strict quality benchmarks before entering production.",
  },
  {
    icon: ChefHat,
    title: "Preparation & Cooking",
    description: "Meals are prepared in HACCP-compliant kitchens under continuous hygiene supervision.",
  },
  {
    icon: Gauge,
    title: "Portioning & Quality Control",
    description: "Every tray is portioned and precision-weighed to guarantee consistency across thousands of meals.",
  },
  {
    icon: Snowflake,
    title: "Packaging & Cold Chain",
    description: "Meals are sealed and held under controlled temperatures to preserve freshness and safety.",
  },
  {
    icon: Truck,
    title: "Dispatch & Delivery",
    description: "Temperature-controlled vehicles deliver meals to the aircraft on schedule, every time.",
  },
];

export default function ProductionProcess() {
  return (
    <section className="bg-gray-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-14 lg:gap-20 items-start">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                kicker="Production Process"
                title="From ingredient to aircraft, a controlled process."
                description="Every meal follows the same disciplined sequence — no shortcuts, no exceptions — so quality never depends on which day, or which facility, it was produced in."
              />
              <div className="mt-8 relative aspect-[4/5] w-full overflow-hidden hidden lg:block">
                <Image
                  src="/images/quality-control-scale.jpg"
                  alt="Concord for Catering quality control team precision-weighing a meal tray"
                  fill
                  sizes="35vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <RevealStagger className="relative" stagger={0.08}>
            <div className="absolute left-6 top-2 bottom-2 w-px bg-line hidden sm:block" />
            <div className="space-y-10">
              {steps.map((step, i) => (
                <motion.div key={step.title} variants={staggerItem} className="relative flex gap-6 sm:pl-0">
                  <div className="relative z-10 shrink-0 size-12 rounded-full bg-white border border-line flex items-center justify-center">
                    <step.icon className="size-5 text-red" strokeWidth={1.5} />
                  </div>
                  <div className="pt-2">
                    <div className="text-xs font-semibold uppercase kicker text-gray mb-1.5">
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                    <p className="mt-1.5 text-gray leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
