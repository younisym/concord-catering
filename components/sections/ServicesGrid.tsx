"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesGrid() {
  return (
    <section className="bg-gray-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <SectionHeading
            index="02"
            kicker="Our Services"
            title="Comprehensive catering, built for the aviation industry."
          />
          <Link
            href="/services"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-red transition-colors uppercase tracking-wide"
          >
            View All Services
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <RevealStagger className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div key={service.slug} variants={staggerItem}>
              <Link
                href={`/services/${service.slug}`}
                className="group block bg-white h-full border border-line hover:border-navy/20 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy leading-snug">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray leading-relaxed line-clamp-3">
                    {service.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-red">
                    Learn More
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </RevealStagger>

        <div className="mt-10 sm:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy uppercase tracking-wide"
          >
            View All Services
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
