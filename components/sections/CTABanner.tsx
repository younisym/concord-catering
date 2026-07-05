import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTABanner({
  title = "Looking for a Reliable Catering Partner?",
  description = "Our team is ready to deliver exceptional catering solutions tailored to your business needs.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute -right-24 -top-24 size-72 rounded-full bg-red/10 blur-3xl" />
      <div className="absolute -left-24 -bottom-24 size-72 rounded-full bg-white/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-20 sm:py-24">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold kicker uppercase text-white/60">
                <span className="text-red">{"///"}</span>
                <span>Partner With Concord</span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white text-balance leading-tight">
                {title}
              </h2>
              <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Button href="/contact#proposal" variant="primary">
                Request a Proposal
              </Button>
              <Button href="/contact" variant="ghost-light" showArrow={false}>
                Contact Us
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
