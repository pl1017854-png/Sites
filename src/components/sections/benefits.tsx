import { motion } from "framer-motion";
import { BedDouble, Droplets, Wind } from "lucide-react";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { Reveal } from "@/components/ui/reveal";

const benefits = [
  {
    icon: BedDouble,
    title: "Durma profundamente",
    text: "A luz âmbar sem tom azul avisa seu cérebro que é hora de descansar, enquanto a névoa mantém o ar na umidade ideal.",
  },
  {
    icon: Wind,
    title: "Adeus, ar seco do ar-condicionado",
    text: "Nariz entupido, garganta arranhando e pele ressecada ao acordar? A névoa ultrassônica resolve isso durante a noite toda.",
  },
  {
    icon: Droplets,
    title: "880ML = a noite inteira",
    text: "De 8 a 12 horas de autonomia contínua. Você dorme e acorda com a lua ainda cuidando do seu ar.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative px-6 py-24 md:py-32">
      {/* brilho ambiente */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-moon-300/5 blur-[140px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <ParallaxImage
          src="/images/quarto.jpg"
          alt="Luminária lua acesa no criado-mudo de um quarto aconchegante"
          className="aspect-[4/5] md:order-1"
          strength={70}
        />

        <div className="md:order-2">
          <Reveal>
            <span className="inline-block rounded-full border border-moon-300/25 bg-moon-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-moon-200">
              Sono & Bem-estar
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-neutral-50 md:text-5xl">
              As suas melhores noites de sono começam aqui
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {benefits.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.21, 0.65, 0.35, 1] }}
                whileHover={{ x: 8 }}
                className="flex gap-5"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-moon-300/30 bg-moon-300/10"
                >
                  <Icon className="h-5 w-5 text-moon-200" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-100">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
