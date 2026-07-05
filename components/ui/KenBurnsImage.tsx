"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function KenBurnsImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1 }}
      animate={{ scale: 1.05 }}
      transition={{
        duration: 22,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
    </motion.div>
  );
}
