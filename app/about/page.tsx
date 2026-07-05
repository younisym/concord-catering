import type { Metadata } from "next";
import Image from "next/image";
import { Plane, Truck, ShieldCheck, Factory, Users, UtensilsCrossed, Globe, SlidersHorizontal, PartyPopper } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import FeatureList from "@/components/ui/FeatureList";
import StatsStrip from "@/components/sections/StatsStrip";
import LocationCard from "@/components/sections/LocationCard";
import CTABanner from "@/components/sections/CTABanner";
import { aviationServices, foodSolutions, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Established in 2011, Concord for Catering is one of Egypt's leading airline catering companies — modern facilities, trained professionals, and internationally certified quality.",
};

const aviationIcons = [Plane, Truck, ShieldCheck, Factory, Users].map((Icon, i) => (
  <Icon key={i} strokeWidth={1.5} />
));
const foodIcons = [UtensilsCrossed, Globe, SlidersHorizontal, PartyPopper].map((Icon, i) => (
  <Icon key={i} strokeWidth={1.5} />
));

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Concord"
        title="Delivering premium airline catering solutions to the aviation industry and beyond."
        image="/images/logistics-truck.jpg"
        imageAlt="Concord for Catering logistics team loading a refrigerated delivery vehicle"
      />

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <SectionHeading
                index="01"
                kicker="Our Story"
                title="One of Egypt's leading catering companies since 2011."
                description="Established in 2011, Concord for Catering is one of Egypt's leading catering companies, specializing in airline catering and integrated food services. With modern production facilities, highly trained professionals, and a strong commitment to quality, food safety, and on-time delivery, we provide reliable catering solutions that meet the highest international standards."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/quality-control-scale.jpg"
                  alt="Concord for Catering quality control team weighing a prepared meal tray"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading index="02" kicker="Aviation Services" title="Built for airline operations." />
              <div className="mt-10">
                <FeatureList
                  features={aviationServices.map((s, i) => ({
                    icon: aviationIcons[i],
                    title: s.title,
                    description: s.description,
                  }))}
                />
              </div>
            </div>
            <div>
              <SectionHeading index="03" kicker="Food Solutions" title="Menus designed for every passenger." />
              <div className="mt-10">
                <FeatureList
                  features={foodSolutions.map((s, i) => ({
                    icon: foodIcons[i],
                    title: s.title,
                    description: s.description,
                  }))}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="bg-navy pt-20 sm:pt-24 text-center">
          <span className="text-xs font-semibold kicker uppercase text-white/60">
            At a Glance
          </span>
        </div>
        <StatsStrip />
      </div>

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <SectionHeading
            index="04"
            kicker="Our Facilities"
            title="Strategic locations across Egypt."
            description="Well-equipped production units in Obour City, Borg El Arab, and Hurghada — designed to ensure consistency, efficiency, and operational excellence at every stage."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {siteConfig.locations.map((loc) => (
              <LocationCard key={loc.name} {...loc} />
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/production-line.jpg"
                alt="Rows of airline meal trays in Concord's production facility"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/production-bakery.jpg"
                alt="Freshly baked pastries prepared in Concord's bakery production line"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
