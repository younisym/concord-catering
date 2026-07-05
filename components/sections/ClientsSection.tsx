"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { clients } from "@/lib/content";

export default function ClientsSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <SectionHeading
            kicker="Our Clients"
            title="Trusted by Leading Airlines"
            description="Proudly serving leading airlines and hospitality partners across Egypt, delivering consistent, certified catering solutions built for aviation schedules."
            align="center"
          />
        </Reveal>

        <RevealStagger
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-line border border-line"
          stagger={0.08}
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={staggerItem}
              className="group relative bg-white flex items-center justify-center h-32 sm:h-36 px-6"
            >
              {client.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 sm:max-h-14 w-auto max-w-[85%] object-contain grayscale opacity-70 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100"
                />
              ) : (
                <span className="text-lg sm:text-xl font-bold tracking-tight text-navy/50 group-hover:text-navy transition-colors duration-500 text-center leading-tight">
                  {client.name}
                </span>
              )}
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
