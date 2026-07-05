import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Imagem com os três efeitos pedidos: parallax ao scroll,
 * zoom suave no hover e fade-in ao entrar na tela.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  strength = 60,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <motion.div
      ref={ref}
      className={cn("group relative overflow-hidden rounded-3xl", className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.21, 0.65, 0.35, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className={cn(
          "h-full w-full scale-[1.15] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.24]",
          imgClassName
        )}
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
    </motion.div>
  );
}
