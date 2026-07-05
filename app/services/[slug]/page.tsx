import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealStagger, StaggerChild } from "@/components/ui/Reveal";
import CTABanner from "@/components/sections/CTABanner";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.short,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        kicker="Service"
        title={service.name}
        description={service.tagline}
        image={service.image}
        imageAlt={service.name}
      />

      <div className="bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase kicker text-gray hover:text-navy transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            All Services
          </Link>
        </div>
      </div>

      {/* Overview */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionHeading index="01" kicker="Overview" title={service.short} description={service.overview} />
          </Reveal>
        </div>
      </section>

      {/* Detailed description */}
      <section className="bg-gray-light py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.gallery[0]}
                  alt={service.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex items-center gap-3 text-xs font-semibold kicker uppercase text-gray">
                <span className="text-red">02</span>
                <span>Detailed Description</span>
                <span className="hairline flex-1 max-w-16" />
              </div>
              <div className="mt-5 space-y-5">
                {service.description.map((paragraph, i) => (
                  <p key={i} className="text-gray leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionHeading index="03" kicker="Benefits" title="Why airlines and clients choose this service." align="center" />
          </Reveal>
          <RevealStagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 max-w-4xl mx-auto" stagger={0.06}>
            {service.benefits.map((benefit) => (
              <StaggerChild key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-red mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-navy leading-relaxed">{benefit}</span>
              </StaggerChild>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Operational workflow */}
      <section className="bg-fade-navy-deep py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionHeading
              index="04"
              kicker="Operational Workflow"
              title="How this service runs, step by step."
              align="center"
              theme="dark"
            />
          </Reveal>
          <RevealStagger className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" stagger={0.07}>
            {service.workflow.map((step, i) => (
              <StaggerChild key={step.title} className="relative border border-white/15 p-6">
                <span className="text-3xl font-bold text-white/20">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-sm font-bold text-white leading-snug">{step.title}</h3>
                <p className="mt-2 text-xs text-white/60 leading-relaxed">{step.description}</p>
              </StaggerChild>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Industries served + Food safety */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <SectionHeading index="05" kicker="Industries Served" title="Who we serve." />
              <ul className="mt-8 space-y-4">
                {service.industries.map((industry) => (
                  <li key={industry} className="flex items-center gap-3 border-b border-line pb-4">
                    <span className="size-1.5 rounded-full bg-red shrink-0" />
                    <span className="text-navy font-medium">{industry}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading index="06" kicker="Food Safety Standards" title="Certified, every step of the way." />
              <ul className="mt-8 space-y-4">
                {service.foodSafety.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ShieldCheck className="size-5 text-red mt-0.5 shrink-0" strokeWidth={1.5} />
                    <span className="text-gray leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-light py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionHeading kicker="Gallery" title="This service, in practice." align="center" />
          </Reveal>
          <RevealStagger className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.08}>
            {service.gallery.map((img) => (
              <StaggerChild key={img} className="relative aspect-[4/5] overflow-hidden group block">
                <Image
                  src={img}
                  alt={service.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </StaggerChild>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white py-20 sm:py-24 border-t border-line">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <SectionHeading kicker="Explore More" title="Other services." />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block border border-line hover:border-navy/25 transition-colors p-6"
              >
                <h3 className="font-bold text-navy group-hover:text-red transition-colors">{s.name}</h3>
                <p className="mt-2 text-sm text-gray leading-relaxed line-clamp-2">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready to discuss ${service.name.toLowerCase()}?`}
        description="Tell us about your requirements and our team will follow up with a tailored proposal."
      />
    </>
  );
}
