import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <motion.span
          animate={{ rotate: [0, 12, 0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="text-3xl"
        >
          🌙
        </motion.span>
        <p className="font-display text-lg font-semibold text-neutral-100">LUNARIS</p>
        <p className="max-w-md text-xs leading-relaxed text-neutral-500">
          Luminária Lua 3D com Umidificador de Ar 880ML — LED USB Recarregável e Difusor de
          Aromas. Frete grátis para todo o Brasil · 7 dias de garantia.
        </p>
        <p className="mt-4 text-[11px] text-neutral-600">
          © {new Date().getFullYear()} LUNARIS. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
