import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealStagger, StaggerChild } from "@/components/ui/Reveal";
import CTABanner from "@/components/sections/CTABanner";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Airline Catering, Meal Solutions, Special Events Catering, and International Cuisine — comprehensive catering services built for the aviation industry.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Our Services"
        title="Comprehensive catering solutions, built for the aviation industry."
        description="From inflight meal production to large-scale corporate and event catering, every service is delivered with the same discipline: food safety, consistency, and on-time performance."
        image="/images/meal-tray-branded.jpg"
        imageAlt="Branded in-flight meal trays prepared by Concord for Catering"
      />

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionHeading
              kicker="What We Do"
              title="Four disciplines. One standard of quality."
              align="center"
            />
          </Reveal>

          <RevealStagger className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6" stagger={0.08}>
            {services.map((service, i) => (
              <StaggerChild key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid grid-rows-[auto_1fr] h-full border border-line hover:border-navy/25 transition-colors bg-white"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors" />
                    <span className="absolute top-4 left-4 text-xs font-semibold uppercase kicker text-white bg-navy/80 px-3 py-1.5">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="p-7 sm:p-8 flex flex-col">
                    <h3 className="text-xl font-bold text-navy leading-snug">
                      {service.name}
                    </h3>
                    <p className="mt-2.5 text-sm text-gray leading-relaxed">
                      {service.short}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-red">
                      Explore Service
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerChild>
            ))}
          </RevealStagger>
        </div>
      </section>

      <CTABanner
        title="Looking for a Reliable Catering Partner?"
        description="Our team is ready to deliver exceptional catering solutions tailored to your business needs."
      />
    </>
  );
}
