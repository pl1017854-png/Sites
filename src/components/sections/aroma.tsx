import { motion } from "framer-motion";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  { n: "01", title: "Encha com água", text: "Abra a lua e adicione até 880ml de água." },
  { n: "02", title: "Pingue o aroma", text: "2-3 gotas de óleo essencial hidrossolúvel — lavanda, eucalipto, camomila..." },
  { n: "03", title: "Toque e relaxe", text: "Um toque no sensor e a névoa aromática começa a subir do topo da lua." },
];

export function Aroma() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-emerald-400/5 blur-[130px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <ParallaxImage
          src="/images/aromaterapia.jpg"
          alt="Luminária lua liberando névoa aromática no quarto"
          className="aspect-[4/5]"
          strength={70}
        />

        <div>
          <Reveal>
            <span className="inline-block rounded-full border border-moon-300/25 bg-moon-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-moon-200">
              Aromaterapia
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-50 md:text-5xl">
              Seu ritual de calma em 3 passos
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 leading-relaxed text-neutral-400">
              Ansiedade e estresse não combinam com o seu quarto. Transforme qualquer noite em uma
              sessão de spa com o difusor integrado.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ x: 8 }}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-moon-300/30"
              >
                <span className="font-display text-2xl font-bold text-moon-300/60">{s.n}</span>
                <div>
                  <h3 className="font-semibold text-neutral-100">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-400">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
