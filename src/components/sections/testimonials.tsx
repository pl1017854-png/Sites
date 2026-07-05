import { motion } from "framer-motion";
import { BadgeCheck, Star } from "lucide-react";
import { SectionTitle } from "@/components/ui/reveal";

const testimonials = [
  {
    name: "Mariana S.",
    city: "São Paulo",
    text: "Comprei pro meu quarto e mudou completamente o clima. Durmo muito melhor!",
  },
  {
    name: "Juliana R.",
    city: "Rio de Janeiro",
    text: "Presente perfeito pro meu namorado. Ele AMOU! A luz é linda demais.",
  },
  {
    name: "Camila F.",
    city: "Belo Horizonte",
    text: "Chegou rápido e a qualidade me surpreendeu. Uso todo dia com óleo de lavanda.",
  },
  {
    name: "Fernanda L.",
    city: "Curitiba",
    text: "Meu quarto virou um spa! Super recomendo, vale cada centavo.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative px-6 py-24 md:py-32">
      <SectionTitle
        kicker="Prova social"
        title={
          <>
            Quem comprou, <span className="text-moon-200">se apaixonou</span>
          </>
        }
        subtitle="Mais de 2.300 luas já estão iluminando quartos por todo o Brasil."
      />

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.21, 0.65, 0.35, 1] }}
            whileHover={{ y: -8, rotate: i % 2 === 0 ? 1 : -1 }}
            className="flex flex-col rounded-3xl border border-white/10 bg-night-900/80 p-6"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12 + s * 0.07, type: "spring", stiffness: 300 }}
                >
                  <Star className="h-4 w-4 fill-moon-300 text-moon-300" />
                </motion.span>
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-neutral-300">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-5 border-t border-white/5 pt-4">
              <p className="text-sm font-semibold text-neutral-100">{t.name}</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-neutral-500">
                {t.city}
                <span className="flex items-center gap-1 text-emerald-400">
                  <BadgeCheck className="h-3.5 w-3.5" /> Compra verificada
                </span>
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
