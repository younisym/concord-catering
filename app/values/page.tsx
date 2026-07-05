import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ValuesGrid from "@/components/sections/ValuesGrid";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Purpose & Values",
  description:
    "Built on trust, driven by excellence — the values of Passion, Responsibility, and Respect that guide Concord for Catering in every partnership.",
};

export default function ValuesPage() {
  return (
    <>
      <PageHero
        kicker="Purpose & Values"
        title="Built on trust. Driven by excellence."
        image="/images/event-gala-buffet.jpg"
        imageAlt="Concord for Catering serving a corporate gala event"
      />

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionHeading
              kicker="Our Purpose"
              title="Trust is the foundation of every partnership."
              description="At Concord for Catering, trust is the foundation of every partnership. Through uncompromising food safety, consistent quality, and reliable service, we are committed to delivering excellence in every meal and every journey."
              align="center"
            />
          </Reveal>
        </div>

        <div className="mt-16 border-y border-line">
          <ValuesGrid />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
