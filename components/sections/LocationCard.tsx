import { MapPin } from "lucide-react";

export default function LocationCard({
  name,
  role,
  established,
  blurb,
}: {
  name: string;
  role: string;
  established: number;
  blurb: string;
}) {
  return (
    <div className="border border-line p-8 hover:border-navy/25 transition-colors bg-white">
      <MapPin className="size-6 text-red" strokeWidth={1.5} />
      <h3 className="mt-5 text-xl font-bold text-navy">{name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase kicker text-gray">
        {role} &middot; Est. {established}
      </p>
      <p className="mt-4 text-sm text-gray leading-relaxed">{blurb}</p>
    </div>
  );
}
