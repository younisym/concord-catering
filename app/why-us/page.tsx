import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CTABanner from "@/components/sections/CTABanner";
import { differentiators } from "@/lib/content";

export const metadata: Metadata = {
  title: "What Makes Us Different",
  description:
    "Over a decade of airline catering expertise, strict quality standards, on-time delivery, and a highly trained team — what sets Concord for Catering apart.",
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        kicker="What Makes Us Different"
        title="Precision and reliability, in every meal we produce."
        image="/images/meal-tray-duo.jpg"
        imageAlt="Two plated in-flight meal trays prepared by Concord for Catering"
      />

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  kicker="Why Concord"
                  title="What sets us apart in aviation catering."
                  description="Reliability isn't an accident — it's the result of process, training, and discipline applied consistently, at scale, every single day."
                />
                <div className="mt-10 relative aspect-[4/5] w-full overflow-hidden hidden lg:block">
                  <Image
                    src="/images/logistics-truck.jpg"
                    alt="Concord for Catering logistics operations"
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <div className="divide-y divide-line">
              {differentiators.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="py-8 first:pt-0 flex gap-6 sm:gap-10">
                    <span className="text-3xl sm:text-4xl font-bold text-line shrink-0 w-12">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                      <p className="mt-2.5 text-gray leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
