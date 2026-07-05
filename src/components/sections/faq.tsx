import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionTitle } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Quanto tempo dura a bateria?",
    a: "De 8 a 12 horas dependendo da intensidade da névoa.",
  },
  {
    q: "Posso usar óleos essenciais?",
    a: "Sim, 2-3 gotas de óleos essenciais hidrossolúveis.",
  },
  {
    q: "É barulhento?",
    a: "Não, menos de 35dB — perfeito para dormir.",
  },
  {
    q: "O que vem na caixa?",
    a: "Luminária, base de madeira, cabo USB, manual e escova de limpeza.",
  },
  {
    q: "Entregam em todo o Brasil?",
    a: "Sim, frete grátis para todo o território nacional.",
  },
  {
    q: "Tem garantia?",
    a: "Sim, 7 dias de garantia com devolução do dinheiro.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-24 md:py-32">
      <SectionTitle
        kicker="Dúvidas"
        title="Perguntas frequentes"
        subtitle="Tudo o que você precisa saber antes de trazer a lua para casa."
      />

      <div className="mx-auto mt-14 max-w-3xl space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={cn(
                "overflow-hidden rounded-2xl border transition-colors",
                isOpen ? "border-moon-300/40 bg-moon-300/[0.06]" : "border-white/10 bg-night-900/70"
              )}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-neutral-100">{f.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <Plus className={cn("h-5 w-5", isOpen ? "text-moon-300" : "text-neutral-500")} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.21, 0.65, 0.35, 1] }}
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-neutral-400">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
