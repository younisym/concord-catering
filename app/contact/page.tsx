import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import BranchCard from "@/components/sections/BranchCard";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig, branches } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Concord for Catering for airline catering, event catering, or customized meal solutions across Obour, Borg El Arab, and Hurghada, Egypt. Available 24/7.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact Us"
        title="Let's build a reliable catering partnership."
        description="Whether you're looking for airline catering, event catering, or customized meal solutions, our team is ready to assist you — around the clock."
        image="/images/hero-premium-tray.jpg"
        imageAlt="Premium meal tray prepared by Concord for Catering"
      />

      <section id="proposal" className="bg-white py-24 sm:py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
            <Reveal>
              <SectionHeading
                kicker="Request a Proposal"
                title="Tell us about your catering needs."
                description="Complete the form and a member of our team will follow up with a tailored proposal for your airline, event, or corporate catering requirements."
              />

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-3">
                  <Clock className="size-5 text-red mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-navy">{siteConfig.hours.primary}</div>
                    <div className="text-gray text-sm">{siteConfig.hours.secondary}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="size-5 text-red mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-navy">Phone</div>
                    <a
                      href={siteConfig.phoneHref}
                      className="text-gray text-sm hover:text-red transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="size-5 text-red mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-navy">Email</div>
                    <a
                      href={siteConfig.emailHref}
                      className="text-gray text-sm hover:text-red transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-gray-light p-8 sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <SectionHeading
            kicker="Our Branches"
            title="A dedicated contact at every airport we serve."
            description="Reach the branch nearest to your operation directly."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {branches.map((branch) => (
              <BranchCard key={branch.code} {...branch} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="relative w-full h-[420px] bg-navy">
          <iframe
            title="Concord for Catering — Egypt Locations"
            src="https://www.google.com/maps?q=Obour+City,+Egypt&output=embed"
            className="absolute inset-0 w-full h-full grayscale contrast-125 opacity-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 pointer-events-none flex items-end justify-start p-6">
            <div className="flex items-center gap-2 bg-navy/90 text-white text-xs font-semibold uppercase kicker px-4 py-2">
              <MapPin className="size-4 text-red" />
              Obour &middot; Borg El Arab &middot; Hurghada
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
