"use client";

import { motion } from "framer-motion";
import { PlaneTakeoff } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { airports } from "@/lib/content";

export default function OperationalCoverage() {
  return (
    <section className="bg-fade-navy-deep py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <SectionHeading
            kicker="Operational Coverage"
            title="A national network, built for aviation schedules."
            description="From the Nile Delta to the Red Sea coast, Concord's production and delivery network reaches every major airport across Egypt."
            align="center"
            theme="dark"
          />
        </Reveal>

        <div className="mt-20 relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-white/15" />

          <RevealStagger
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4"
            stagger={0.07}
          >
            {airports.map((airport) => (
              <motion.div
                key={airport.code}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex size-4 items-center justify-center rounded-full bg-red ring-4 ring-navy mb-6">
                  <span className="absolute inline-flex size-4 rounded-full bg-red opacity-60 group-hover:animate-ping" />
                </span>
                <div className="border border-white/15 group-hover:border-red/50 bg-white/[0.03] group-hover:bg-white/[0.06] transition-colors duration-500 px-4 py-6 w-full">
                  <PlaneTakeoff className="mx-auto size-5 text-red mb-3" strokeWidth={1.5} />
                  <div className="text-2xl font-bold text-white tracking-tight">
                    {airport.code}
                  </div>
                  <div className="mt-1.5 text-xs text-white/60 leading-snug">
                    {airport.city}
                  </div>
                </div>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
