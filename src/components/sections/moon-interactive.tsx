import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Hand, MousePointerClick } from "lucide-react";
import { SectionTitle } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type LedMode = {
  id: string;
  label: string;
  tint: string;
  glow: string;
  filter: string;
  dot: string;
};

const LED_MODES: LedMode[] = [
  {
    id: "frio",
    label: "Branco Frio",
    tint: "rgba(190, 216, 255, 0.35)",
    glow: "rgba(170, 200, 255, 0.45)",
    filter: "brightness(1.08) saturate(0.55) hue-rotate(-12deg)",
    dot: "bg-sky-200",
  },
  {
    id: "quente",
    label: "Branco Quente",
    tint: "rgba(255, 235, 200, 0.18)",
    glow: "rgba(255, 220, 170, 0.45)",
    filter: "brightness(1.03) saturate(0.9)",
    dot: "bg-moon-100",
  },
  {
    id: "ambar",
    label: "Âmbar",
    tint: "rgba(255, 170, 60, 0.28)",
    glow: "rgba(255, 170, 60, 0.5)",
    filter: "brightness(1.02) saturate(1.35) sepia(0.25)",
    dot: "bg-amber-400",
  },
];

function MistParticles({ active }: { active: boolean }) {
  const particles = Array.from({ length: active ? 14 : 6 });
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-40 w-32 -translate-x-1/2 -translate-y-1/3">
      <AnimatePresence>
        {particles.map((_, i) => (
          <motion.span
            key={`${active}-${i}`}
            className="absolute bottom-0 left-1/2 h-8 w-8 rounded-full bg-white/60 blur-md"
            initial={{ opacity: 0, y: 20, x: 0, scale: 0.4 }}
            animate={{
              opacity: [0, active ? 0.55 : 0.3, 0],
              y: -90 - Math.random() * 60,
              x: (Math.random() - 0.5) * (active ? 70 : 36),
              scale: 1 + Math.random(),
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: active ? 1.6 : 2.6,
              repeat: Infinity,
              delay: i * (active ? 0.12 : 0.35),
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export function MoonInteractive() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [modeIndex, setModeIndex] = useState(1);
  const mode = LED_MODES[modeIndex];

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-12, 12]), { stiffness: 150, damping: 18 });
  const glowX = useTransform(mx, [0, 1], ["20%", "80%"]);
  const glowY = useTransform(my, [0, 1], ["20%", "80%"]);
  const glowBg = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, ${mode.glow}, transparent 60%)`;

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function onLeave() {
    setHovered(false);
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <section id="produto" className="relative px-6 py-24 md:py-32">
      <SectionTitle
        kicker="Experimente"
        title={
          <>
            Ela reage ao seu <span className="text-moon-200">toque</span>
          </>
        }
        subtitle="Passe o mouse sobre a lua e veja a névoa ganhar vida. Clique para alternar entre os 3 tons de luz — exatamente como no controle touch do produto real."
      />

      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Lua interativa */}
        <div className="flex justify-center [perspective:1200px]">
          <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={onLeave}
            onClick={() => setModeIndex((i) => (i + 1) % LED_MODES.length)}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            whileTap={{ scale: 0.97 }}
            className="relative w-full max-w-md cursor-pointer select-none"
          >
            <MistParticles active={hovered} />

            {/* halo de luz que muda com o modo */}
            <motion.div
              className="absolute -inset-10 rounded-full blur-3xl"
              animate={{ opacity: hovered ? 0.9 : 0.5, scale: hovered ? 1.06 : 1 }}
              transition={{ duration: 0.6 }}
              style={{ background: glowBg }}
            />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/60">
              <motion.img
                src="/images/detalhe.jpg"
                alt="Luminária Lua 3D com textura realista"
                className="w-full"
                animate={{ filter: mode.filter, scale: hovered ? 1.05 : 1 }}
                transition={{ duration: 0.6 }}
                draggable={false}
              />
              {/* tint do LED */}
              <motion.div
                className="pointer-events-none absolute inset-0 mix-blend-overlay"
                animate={{ backgroundColor: mode.tint }}
                transition={{ duration: 0.6 }}
              />
              {/* brilho que segue o cursor */}
              <motion.div
                className="pointer-events-none absolute inset-0"
                style={{ background: glowBg, opacity: hovered ? 0.55 : 0 }}
              />
            </div>

            {/* dica de interação */}
            <AnimatePresence>
              {!hovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-night-900/90 px-4 py-2 text-xs text-neutral-300 backdrop-blur"
                >
                  <Hand className="h-3.5 w-3.5 animate-float-slow text-moon-300" />
                  <span className="hidden sm:inline">Passe o mouse · clique para mudar a luz</span>
                  <span className="sm:hidden">Toque na lua para mudar a luz</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Painel de modos */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.65, 0.35, 1] }}
          >
            <h3 className="font-display text-2xl font-semibold text-neutral-50 md:text-3xl">
              Controle touch com 3 tonalidades
            </h3>
            <p className="mt-4 leading-relaxed text-neutral-400">
              Um toque liga. Outro muda a cor. O terceiro cria o clima perfeito para dormir,
              relaxar ou decorar. Sem botões complicados — só você e a sua lua.
            </p>

            <div className="mt-8 space-y-3">
              {LED_MODES.map((m, i) => (
                <motion.button
                  key={m.id}
                  onClick={() => setModeIndex(i)}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-colors",
                    i === modeIndex
                      ? "border-moon-300/50 bg-moon-300/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/25"
                  )}
                >
                  <span className={cn("h-4 w-4 rounded-full shadow-lg", m.dot)} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-neutral-100">{m.label}</p>
                    <p className="text-xs text-neutral-500">
                      {m.id === "frio" && "Foco e leitura — luz limpa e clara"}
                      {m.id === "quente" && "Aconchego — o brilho clássico da lua cheia"}
                      {m.id === "ambar" && "Hora de dormir — âmbar relaxante, zero luz azul"}
                    </p>
                  </div>
                  {i === modeIndex && (
                    <motion.span
                      layoutId="led-active"
                      className="rounded-full bg-moon-300 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-night-950"
                    >
                      Ativo
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>

            <p className="mt-6 flex items-center gap-2 text-xs text-neutral-500">
              <MousePointerClick className="h-4 w-4 text-moon-300" />
              Demonstração interativa — o produto real muda de cor com um toque no sensor.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
