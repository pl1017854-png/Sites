import { motion } from "framer-motion";
import { Droplets, Moon, Sparkles, Star, Truck } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Stars } from "@/components/ui/stars";
import { INSTALLMENTS, PRICE, PRICE_ANCHOR } from "@/lib/constants";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.65, 0.35, 1] } },
};

const pills = [
  { icon: Droplets, label: "Umidificador 880ML" },
  { icon: Moon, label: "Luminária 3 tons" },
  { icon: Sparkles, label: "Difusor de aromas" },
];

export function Hero() {
  return (
    <section className="relative px-4 pb-10 pt-6 md:px-6">
      <Card className="relative mx-auto min-h-[640px] w-full max-w-7xl overflow-hidden bg-black/[0.96] md:min-h-[600px]">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#ffd9a0" />
        <Stars count={70} />

        {/* brilho quente atrás da lua */}
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-moon-300/10 blur-[120px]" />

        <div className="flex h-full min-h-[640px] flex-col md:min-h-[600px] md:flex-row">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-1 flex-col justify-center p-8 md:p-12"
          >
            <motion.div variants={item} className="mb-5 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <Star className="h-4 w-4 fill-moon-300 text-moon-300" />
                  </motion.span>
                ))}
              </div>
              <span className="text-xs text-neutral-400">4.9 · +2.300 avaliações</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text font-display text-4xl font-semibold leading-[1.08] text-transparent md:text-6xl"
            >
              Tenha a Lua
              <br />
              no Seu Quarto{" "}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 14, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                🌙
              </motion.span>
            </motion.h1>

            <motion.p variants={item} className="mt-5 max-w-lg text-base leading-relaxed text-neutral-300 md:text-lg">
              Luminária com textura lunar 3D realista + umidificador ultrassônico + difusor de
              aromas. <span className="text-moon-200">Três produtos em um</span>, transformando
              qualquer ambiente em um refúgio de calma.
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              {pills.map(({ icon: Icon, label }) => (
                <motion.span
                  key={label}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-neutral-300"
                >
                  <Icon className="h-3.5 w-3.5 text-moon-300" />
                  {label}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-end gap-3">
              <span className="text-sm text-neutral-500 line-through">{PRICE_ANCHOR}</span>
              <span className="whitespace-nowrap font-display text-4xl font-bold text-moon-200">{PRICE}</span>
              <span className="pb-1 text-xs text-neutral-400">{INSTALLMENTS}</span>
            </motion.div>

            <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-4">
              <motion.a
                href="#oferta"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="animate-pulse-glow rounded-full bg-gradient-to-r from-moon-300 to-moon-400 px-8 py-4 text-base font-bold text-night-950"
              >
                Quero minha Lua ✨
              </motion.a>
              <span className="flex items-center gap-1.5 text-xs text-neutral-400">
                <Truck className="h-4 w-4 text-moon-300" />
                Frete grátis · Brasil inteiro
              </span>
            </motion.div>
          </motion.div>

          <div className="relative min-h-[320px] flex-1">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </div>
        </div>
      </Card>

      {/* indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-6 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-moon-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}
