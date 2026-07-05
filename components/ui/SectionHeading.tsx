import clsx from "clsx";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  index?: string;
};

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  theme = "light",
  index,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <div
        className={clsx(
          "flex items-center gap-3 text-xs font-semibold kicker uppercase",
          isDark ? "text-white/60" : "text-gray",
          align === "center" && "justify-center"
        )}
      >
        {index && <span className="text-red">{index}</span>}
        <span>{kicker}</span>
        <span className="hairline flex-1 max-w-16" />
      </div>
      <h2
        className={clsx(
          "mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.1] text-balance",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-5 text-base sm:text-lg leading-relaxed",
            isDark ? "text-white/70" : "text-gray"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
