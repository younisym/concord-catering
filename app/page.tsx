import Hero from "@/components/sections/Hero";
import ConcordWay from "@/components/sections/ConcordWay";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseConcord from "@/components/sections/WhyChooseConcord";
import Operations247 from "@/components/sections/Operations247";
import ClientsSection from "@/components/sections/ClientsSection";
import TrustSection from "@/components/sections/TrustSection";
import OperationalCoverage from "@/components/sections/OperationalCoverage";
import ProductionProcess from "@/components/sections/ProductionProcess";
import StatsStrip from "@/components/sections/StatsStrip";
import Gallery from "@/components/sections/Gallery";
import CTABanner from "@/components/sections/CTABanner";
import { homeStats } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* About Concord */}
      <ConcordWay />

      {/* Our Services */}
      <ServicesGrid />

      {/* Why Concord */}
      <WhyChooseConcord />

      {/* 24/7 Operations highlight */}
      <Operations247 />

      {/* Our Clients */}
      <ClientsSection />

      {/* Certifications */}
      <TrustSection />

      {/* Operational Coverage */}
      <OperationalCoverage />

      {/* Production Process */}
      <ProductionProcess />

      {/* Company Statistics */}
      <StatsStrip
        data={homeStats}
        kicker="Company Statistics"
        title="A track record measured in numbers."
      />

      {/* Gallery */}
      <Gallery />

      {/* Contact CTA */}
      <CTABanner />
    </>
  );
}
