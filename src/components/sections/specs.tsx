import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { SectionTitle } from "@/components/ui/reveal";

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.21, 0.65, 0.35, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, prefix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const stats = [
  { value: 880, suffix: "ML", label: "de capacidade" },
  { value: 12, suffix: "h", label: "de autonomia" },
  { value: 35, prefix: "<", suffix: "dB", label: "silêncio absoluto" },
  { value: 3, suffix: "", label: "tons de luz" },
];

const specs = [
  ["Capacidade", "880ML"],
  ["Autonomia", "8–12 horas contínuas"],
  ["Alimentação", "USB recarregável"],
  ["Névoa", "Ultrassônica fria · 30–50ml/h"],
  ["Diâmetro", "13–15cm"],
  ["Peso", "~300–400g"],
  ["Material", "PP/ABS + PLA translúcido"],
  ["Base", "Madeira natural"],
  ["Ruído", "Menos de 35dB"],
  ["Desligamento automático", "Sim"],
  ["Óleos essenciais", "Compatível"],
  ["Potência", "~2W"],
];

export function Specs() {
  return (
    <section id="especificacoes" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-moon-300/5 blur-[140px]" />

      <SectionTitle
        kicker="Ficha técnica"
        title="Engenharia por trás da magia"
        subtitle="Cada detalhe pensado para funcionar a noite inteira sem que você perceba que ela está lá."
      />

      {/* contadores animados */}
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05, borderColor: "rgba(255,201,94,0.4)" }}
            className="rounded-3xl border border-white/10 bg-night-900/80 p-6 text-center"
          >
            <p className="font-display text-3xl font-bold text-moon-200 md:text-4xl">
              <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-neutral-500">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* tabela de especificações */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-night-900/60"
      >
        <div className="grid sm:grid-cols-2">
          {specs.map(([k, v], i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between gap-4 border-b border-white/5 px-6 py-4 transition-colors hover:bg-white/[0.03] sm:odd:border-r"
            >
              <span className="text-sm text-neutral-500">{k}</span>
              <span className="text-right text-sm font-medium text-neutral-200">{v}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
