import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CertificationBadge from "@/components/ui/CertificationBadge";
import { certifications } from "@/lib/content";

export default function TrustSection() {
  return (
    <section className="bg-fade-gray py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <SectionHeading
            kicker="Committed to Quality"
            title="Recognized under international food safety standards."
            description="Quality is at the heart of everything we do. Concord for Catering operates under internationally recognized food safety and quality management standards, ensuring excellence, consistency, and hygiene throughout every stage of production and delivery."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <CertificationBadge key={cert.code} code={cert.code} name={cert.name} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
