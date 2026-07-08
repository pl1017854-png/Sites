'use client'
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Em aparelhos lentos o rAF cai abaixo de 60fps; sem isso o GSAP
// "estica" as animações e o conteúdo (que nasce com opacity 0) demora a aparecer
if (typeof window !== "undefined") {
  gsap.ticker.lagSmoothing(0);
}

const BRAND = "ARG VISION";

export function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    document.body.style.overflow = "hidden";

    const finish = () => {
      document.body.style.overflow = "";
      setDone(true);
    };
    // Failsafe: em aparelhos lentos o rAF pode atrasar a timeline —
    // nunca deixar o visitante preso na tela preta
    const failsafe = window.setTimeout(finish, 4000);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          clearTimeout(failsafe);
          finish();
        },
      });
      // Letter-by-letter reveal (GSAP stagger)
      tl.fromTo(
        ".letter",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.05, stagger: 0.05 }
      )
        .to(".preloader-line", { scaleX: 1, duration: 0.6, ease: "power2.out" }, "-=0.1")
        .to(overlay, { opacity: 0, duration: 0.7, ease: "power2.inOut", delay: 0.5 });
    }, overlay);

    return () => {
      clearTimeout(failsafe);
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      aria-hidden="true"
    >
      <p className="font-heading text-3xl tracking-[0.35em] text-gold sm:text-5xl md:text-6xl">
        {BRAND.split("").map((char, i) => (
          <span key={i} className="letter inline-block opacity-0">
            {char === " " ? " " : char}
          </span>
        ))}
      </p>
      <span className="preloader-line mt-6 h-px w-40 origin-left scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent sm:w-64" />
    </div>
  );
}
