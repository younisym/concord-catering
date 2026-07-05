import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function ConcordWay() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/production-line.jpg"
                alt="Rows of freshly prepared airline meal trays moving through Concord's production line"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-navy/10" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              index="01"
              kicker="The Concord Way"
              title="Operational excellence, produced at scale."
              description="Concord for Catering is committed to delivering premium airline catering and food service solutions that combine exceptional quality, food safety, and operational excellence. With a passion for culinary innovation and reliable service, we create consistent, dependable dining experiences for airlines, hospitality partners, corporate clients, and special events across Egypt."
            />
            <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
              <div>
                <div className="text-3xl font-bold text-navy">25,000</div>
                <div className="mt-1 text-xs uppercase kicker text-gray">
                  Meals / Day Capacity
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy">3</div>
                <div className="mt-1 text-xs uppercase kicker text-gray">
                  Production Facilities
                </div>
              </div>
            </div>
            <div className="mt-9">
              <Button href="/about" variant="ghost-dark">
                Discover More
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
