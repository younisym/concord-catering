import { MapPin, Mail } from "lucide-react";

export default function BranchCard({
  name,
  code,
  airport,
  email,
  emailHref,
}: {
  name: string;
  code: string;
  airport: string;
  email: string;
  emailHref: string;
}) {
  return (
    <div className="group relative bg-white border border-line hover:border-navy/25 transition-colors p-8 overflow-hidden">
      <div className="absolute -right-4 -top-4 text-7xl font-bold text-gray-light select-none group-hover:text-gray-light/70 transition-colors">
        {code}
      </div>
      <div className="relative">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase kicker text-red">
          <MapPin className="size-4" />
          {code}
        </div>
        <h3 className="mt-4 text-xl font-bold text-navy">{name}</h3>
        <p className="mt-1 text-xs uppercase kicker text-gray">{airport}</p>

        <a
          href={emailHref}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-red transition-colors border-t border-line pt-5 w-full"
        >
          <Mail className="size-4 text-red shrink-0" />
          {email}
        </a>
      </div>
    </div>
  );
}
