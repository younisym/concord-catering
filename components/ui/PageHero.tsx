import KenBurnsImage from "./KenBurnsImage";

export default function PageHero({
  kicker,
  title,
  description,
  image,
  imageAlt,
}: {
  kicker: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative h-[52vh] min-h-[420px] w-full overflow-hidden bg-navy">
      <KenBurnsImage src={image} alt={imageAlt} priority />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/35 to-navy/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/45 via-navy/5 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end px-6 sm:px-10 lg:px-16 pb-14 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 text-xs font-semibold kicker uppercase text-white/70">
          <span className="text-red">{"///"}</span>
          <span>{kicker}</span>
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-3xl leading-[1.05] text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-white/75 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
