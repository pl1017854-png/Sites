import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { CHECKOUT_URL, PRICE } from "@/lib/constants";

/** Botão de compra fixo no mobile — aparece depois do hero. */
export function StickyCTA() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > 700));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.21, 0.65, 0.35, 1] }}
          className="fixed inset-x-4 bottom-4 z-50 md:hidden"
        >
          <a
            href={CHECKOUT_URL}
            className="flex items-center justify-between rounded-full border border-moon-300/40 bg-night-900/95 py-2 pl-6 pr-2 shadow-2xl shadow-black/60 backdrop-blur"
          >
            <div>
              <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                Frete grátis hoje
              </p>
              <p className="font-display text-lg font-bold text-moon-200">{PRICE}</p>
            </div>
            <span className="rounded-full bg-gradient-to-r from-moon-300 to-moon-400 px-6 py-3 text-sm font-bold text-night-950">
              Comprar 🌙
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
