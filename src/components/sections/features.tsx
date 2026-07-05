import { motion } from "framer-motion";
import { Droplets, Fingerprint, Lamp, Leaf } from "lucide-react";
import { SectionTitle } from "@/components/ui/reveal";

const features = [
  {
    icon: Droplets,
    title: "Umidificador Ultrassônico",
    text: "Névoa fria e silenciosa (<35dB) que umidifica o ambiente por até 12 horas sem interrupção.",
    accent: "from-sky-400/20",
  },
  {
    icon: Leaf,
    title: "Difusor de Aromas",
    text: "2-3 gotas do seu óleo essencial favorito e o quarto vira um spa. Lavanda para dormir, eucalipto para respirar.",
    accent: "from-emerald-400/20",
  },
  {
    icon: Lamp,
    title: "Luminária 3 Tons",
    text: "Branco frio, branco quente e âmbar. Da leitura ao sono profundo, uma luz para cada momento.",
    accent: "from-moon-300/25",
  },
  {
    icon: Fingerprint,
    title: "Controle Touch",
    text: "Liga, desliga e troca a cor com um toque suave. Desligamento automático quando a água acaba.",
    accent: "from-purple-400/20",
  },
];

export function Features() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <SectionTitle
        kicker="4 em 1"
        title={
          <>
            Um produto. <span className="text-moon-200">Quatro superpoderes.</span>
          </>
        }
        subtitle="Por que comprar um umidificador, um abajur e um difusor separados, se a lua faz tudo isso?"
      />

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text, accent }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.21, 0.65, 0.35, 1] }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-night-900/80 p-7"
          >
            <div
              className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accent} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
            />
            <motion.div
              whileHover={{ rotate: -8, scale: 1.15 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
            >
              <Icon className="h-6 w-6 text-moon-200" />
            </motion.div>
            <h3 className="mt-6 text-lg font-semibold text-neutral-50">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
