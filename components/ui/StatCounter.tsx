"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import clsx from "clsx";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  isYear?: boolean;
  theme?: "light" | "dark";
  align?: "left" | "center";
};

function Counter({ value, isYear }: { value: number; isYear?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = isYear
          ? Math.round(latest).toString()
          : Math.round(latest).toLocaleString("en-US");
      }
    });
  }, [spring, isYear]);

  return <span ref={ref}>0</span>;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  isYear,
  theme = "light",
  align = "left",
}: StatCounterProps) {
  const isDark = theme === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={clsx("text-center", align === "left" && "sm:text-left")}
    >
      <div
        className={clsx(
          "font-bold text-4xl sm:text-5xl tabular-nums",
          isDark ? "text-white" : "text-navy"
        )}
      >
        <Counter value={value} isYear={isYear} />
        <span className="text-red">{suffix}</span>
      </div>
      <div
        className={clsx(
          "mt-2 text-xs sm:text-sm font-medium uppercase kicker",
          isDark ? "text-white/60" : "text-gray"
        )}
      >
        {label}
      </div>
    </motion.div>
  );
}
