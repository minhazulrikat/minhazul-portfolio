"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-6 top-1/2 z-[100] hidden h-30 w-[5px] -translate-y-1/2 overflow-hidden bg-white/15 md:block rounded"
    >
      <motion.div
        className="absolute left-0 top-0 h-full w-full origin-top bg-[var(--primary)]"
        style={{
          scaleY: scrollYProgress,
        }}
      />
    </div>
  );
}