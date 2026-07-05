import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Timeline from "@/components/sections/Timeline";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Journey",
  description:
    "From our founding in 2011 to three strategic production facilities across Egypt — the growth story of Concord for Catering.",
};

export default function JourneyPage() {
  return (
    <>
      <PageHero
        kicker="Our Journey"
        title="Fifteen years of growth, built one facility at a time."
        image="/images/production-line.jpg"
        imageAlt="Concord for Catering's production facility"
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionHeading
              kicker="Timeline"
              title="From a single vision to three national facilities."
              align="center"
            />
          </Reveal>

          <div className="mt-20">
            <Timeline />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
