'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhatsAppButton } from "@/components/whatsapp-button";

gsap.registerPlugin(ScrollTrigger);

export function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".cta-fade").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-32 lg:py-48"
    >
      {/* Glow dourado de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="cta-fade mb-6 translate-y-6 text-sm uppercase tracking-[0.4em] text-gold/80 opacity-0">
          Chegou a sua vez
        </p>
        <h2 className="cta-fade translate-y-6 font-heading text-3xl font-bold leading-snug text-white opacity-0 sm:text-5xl lg:text-6xl">
          Daqui a um ano, você vai desejar
          <br className="hidden sm:block" />{" "}
          <span className="text-gold-gradient">ter começado hoje.</span>
        </h2>
        <p className="cta-fade mx-auto mt-8 max-w-xl translate-y-6 text-lg text-mist/70 opacity-0">
          Enquanto você pensa, seu concorrente aparece no Google. Manda uma
          mensagem agora — em minutos você sabe exatamente quanto custa e
          quando seu site fica pronto. Sem compromisso.
        </p>
        <div className="cta-fade mt-12 translate-y-6 opacity-0">
          <WhatsAppButton className="px-12 py-6 text-xl" pulse>
            Quero meu site premium
          </WhatsAppButton>
          <p className="mt-5 text-xs uppercase tracking-wider text-mist/40">
            Resposta rápida · Atendimento direto pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
