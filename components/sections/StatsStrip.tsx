import StatCounter from "@/components/ui/StatCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { stats as defaultStats } from "@/lib/content";

type StatItem = {
  value: number;
  suffix: string;
  label: string;
  isYear?: boolean;
};

export default function StatsStrip({
  data = defaultStats,
  kicker,
  title,
}: {
  data?: StatItem[];
  kicker?: string;
  title?: string;
}) {
  return (
    <section className="bg-fade-navy py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {title && (
          <Reveal>
            <SectionHeading
              kicker={kicker ?? "Company Statistics"}
              title={title}
              align="center"
              theme="dark"
            />
          </Reveal>
        )}
        <div
          className={
            title
              ? "mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center text-center"
              : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10"
          }
        >
          {data.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isYear={stat.isYear}
              theme="dark"
              align={title ? "center" : "left"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
