import { clients } from "@/lib/content";

// Unused in the current storytelling flow (see components/sections/ClientsSection.tsx
// for the static "Trusted by Leading Airlines" grid) — kept as an alternate
// marquee-style presentation if a scrolling client strip is ever needed elsewhere.
export default function ClientLogoStrip() {
  const doubled = [...clients, ...clients];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee">
        {doubled.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex items-center justify-center px-10 py-2 shrink-0"
          >
            <span className="whitespace-nowrap text-xl sm:text-2xl font-bold text-navy/25 hover:text-navy/70 transition-colors tracking-tight">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
