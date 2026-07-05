import { motion } from "framer-motion";
import { Check, Gift } from "lucide-react";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { Reveal } from "@/components/ui/reveal";

const boxItems = [
  "Luminária Lua 3D com umidificador",
  "Base de madeira natural",
  "Cabo USB",
  "Manual de instruções",
  "Escova de limpeza",
];

export function GiftBox() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-moon-300/25 bg-moon-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-moon-200">
              <Gift className="h-3.5 w-3.5" />
              O presente perfeito
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-50 md:text-5xl">
              Entregar a lua para alguém <span className="text-moon-200">nunca foi tão fácil</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 leading-relaxed text-neutral-400">
              Aniversário, namoro, Dia das Mães ou amigo secreto: poucas coisas emocionam tanto
              quanto abrir uma caixa e encontrar a lua dentro dela. É o tipo de presente que vira
              história.
            </p>
          </Reveal>

          <div className="mt-8 rounded-3xl border border-white/10 bg-night-900/70 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
              O que vem na caixa
            </p>
            <ul className="mt-4 space-y-3">
              {boxItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-neutral-300"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 300 }}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-moon-300/15"
                  >
                    <Check className="h-3.5 w-3.5 text-moon-300" />
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <ParallaxImage
          src="/images/unboxing.jpg"
          alt="Mãos segurando a luminária lua acesa no escuro"
          className="aspect-[4/5]"
          strength={70}
        />
      </div>
    </section>
  );
}
