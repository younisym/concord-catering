import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { siteConfig, certifications } from "@/lib/content";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why-us", label: "Why Us" },
  { href: "/values", label: "Values" },
  { href: "/journey", label: "Our Journey" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Image
              src="/logo/concord-logo.png"
              alt="Concord for Catering"
              width={1482}
              height={857}
              className="w-[150px] h-auto"
            />
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              Premium airline catering, corporate catering, and large-scale
              food production, built on precision, trust, and international
              standards since {siteConfig.founded}.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase kicker text-white/50">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase kicker text-white/50">
              Our Locations
            </h4>
            <ul className="mt-5 space-y-3">
              {siteConfig.locations.map((loc) => (
                <li key={loc.name} className="flex items-start gap-2.5 text-sm text-white/75">
                  <MapPin className="size-4 mt-0.5 text-red shrink-0" />
                  {loc.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase kicker text-white/50">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <Phone className="size-4 mt-0.5 text-red shrink-0" />
                {siteConfig.phones[0]}
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="size-4 mt-0.5 text-red shrink-0" />
                {siteConfig.email}
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="size-4 mt-0.5 text-red shrink-0" />
                {siteConfig.hours.days}, {siteConfig.hours.time}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} Concord for Catering. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {certifications.map((c) => (
              <span
                key={c.code}
                className="text-xs font-semibold tracking-wide text-white/50"
              >
                {c.code}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
