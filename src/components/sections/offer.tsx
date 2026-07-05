import { motion } from "framer-motion";
import { Check, Lock, ShieldCheck, Truck } from "lucide-react";
import { Stars } from "@/components/ui/stars";
import { CHECKOUT_URL, INSTALLMENTS, PRICE, PRICE_ANCHOR } from "@/lib/constants";

const included = [
  "Luminária Lua 3D + umidificador 880ML",
  "Base de madeira natural",
  "Cabo USB + escova de limpeza",
  "Frete grátis para todo o Brasil",
  "7 dias de garantia — dinheiro de volta",
];

export function Offer() {
  return (
    <section id="oferta" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.21, 0.65, 0.35, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-moon-300/25 bg-gradient-to-b from-night-800 to-night-950 p-8 md:p-14"
        >
          <Stars count={40} />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-moon-300/10 blur-[100px]" />

          <div className="relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-block rounded-full bg-moon-300 px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-night-950"
            >
              Oferta de lançamento · 50% OFF
            </motion.span>

            <h2 className="mt-6 font-display text-3xl font-semibold text-neutral-50 md:text-5xl">
              Leve a sua lua para casa hoje
            </h2>

            <div className="mt-8 flex items-end justify-center gap-4">
              <span className="pb-2 text-lg text-neutral-500 line-through">{PRICE_ANCHOR}</span>
              <motion.span
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
                className="font-display text-6xl font-bold text-moon-200 md:text-7xl"
              >
                {PRICE}
              </motion.span>
            </div>
            <p className="mt-2 text-sm text-neutral-400">{INSTALLMENTS} · frete grátis</p>

            <ul className="mx-auto mt-8 max-w-md space-y-2.5 text-left">
              {included.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-neutral-300"
                >
                  <Check className="h-4 w-4 shrink-0 text-moon-300" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.a
              href={CHECKOUT_URL}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="animate-pulse-glow mt-10 inline-block rounded-full bg-gradient-to-r from-moon-300 to-moon-400 px-12 py-5 text-lg font-bold text-night-950"
            >
              Comprar com frete grátis 🌙
            </motion.a>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-moon-300" /> Pagamento 100% seguro
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-moon-300" /> Garantia de 7 dias
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-moon-300" /> Envio para todo o Brasil
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
