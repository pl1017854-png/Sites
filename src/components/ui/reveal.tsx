import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.21, 0.65, 0.35, 1] },
  }),
};

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  kicker,
  title,
  subtitle,
  className,
}: {
  kicker?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {kicker && (
        <Reveal>
          <span className="inline-block rounded-full border border-moon-300/25 bg-moon-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-moon-200">
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-50 md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
