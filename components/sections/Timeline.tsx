"use client";

import { motion } from "framer-motion";
import { journey } from "@/lib/content";

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-px bg-line sm:-translate-x-1/2" />
      <div className="space-y-14 sm:space-y-20">
        {journey.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={item.year}
              className="relative sm:grid sm:grid-cols-2 sm:gap-14 items-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute left-0 sm:left-1/2 top-1 size-[14px] -translate-x-[6.5px] sm:-translate-x-1/2 rounded-full bg-red ring-4 ring-white z-10"
              />

              <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`pl-14 sm:pl-0 ${
                  isEven ? "sm:col-start-1 sm:text-right sm:pr-4" : "sm:col-start-2 sm:pl-4"
                }`}
              >
                <div className="text-3xl font-bold text-navy">{item.year}</div>
                <div className="mt-1 text-sm font-semibold uppercase kicker text-red">
                  {item.title}
                </div>
                <p className="mt-3 text-gray leading-relaxed max-w-md sm:ml-0 sm:inline-block">
                  {item.description}
                </p>
              </motion.div>

              <div className={isEven ? "hidden sm:block sm:col-start-2" : "hidden sm:block sm:col-start-1 sm:row-start-1"} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
