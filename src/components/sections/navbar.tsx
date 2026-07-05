import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#produto", label: "O Produto" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#especificacoes", label: "Especificações" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-500",
        scrolled
          ? "border-white/10 bg-night-950/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <motion.span
            className="text-2xl"
            animate={{ rotate: [0, 12, 0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            🌙
          </motion.span>
          <span className="font-display text-xl font-semibold tracking-wide text-neutral-50">
            LUNARIS
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-neutral-400 transition-colors hover:text-moon-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#oferta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-full bg-moon-300 px-5 py-2 text-sm font-bold text-night-950 shadow-lg shadow-moon-300/20 transition-shadow hover:shadow-moon-300/40"
        >
          Comprar agora
        </motion.a>
      </nav>
    </motion.header>
  );
}
