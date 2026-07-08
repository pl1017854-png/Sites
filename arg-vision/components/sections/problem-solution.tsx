'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Globe, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PAINS = [
  {
    icon: Instagram,
    title: "Perfil no Instagram não é presença digital",
    text: "O algoritmo decide quem vê seu conteúdo. Um site é seu — funciona 24h, aparece no Google e passa autoridade de verdade.",
  },
  {
    icon: Globe,
    title: "Quem procura no Google não te encontra",
    text: "“Barbearia perto de mim” tem milhares de buscas por mês. Sem site, essa clientela vai direto para o concorrente.",
  },
  {
    icon: TrendingUp,
    title: "Primeira impressão define o preço que você cobra",
    text: "Um site premium posiciona seu negócio como referência — e cliente que percebe valor não pede desconto.",
  },
];

export function ProblemSolution() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      // Scroll Reveal Fade — todas as peças da seção
      gsap.utils.toArray<HTMLElement>(".gsap-fade").forEach((el) => {
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
      id="historia"
      className="relative bg-black px-6 py-28 lg:py-40"
    >
      <div className="mx-auto max-w-5xl">
        <p className="gsap-fade mb-4 translate-y-6 text-center text-sm uppercase tracking-[0.35em] text-gold/80">
          A história é sempre a mesma
        </p>
        <h2 className="gsap-fade mx-auto max-w-3xl translate-y-6 text-center font-heading text-3xl font-bold leading-snug text-white sm:text-5xl">
          Seu negócio merece mais que um{" "}
          <span className="text-gold-gradient">perfil no Instagram</span>
        </h2>
        <p className="gsap-fade mx-auto mt-6 max-w-2xl translate-y-6 text-center text-lg text-mist/70">
          Você trabalha duro, entrega qualidade, tem clientes fiéis — mas quem
          te acha na internet vê o mesmo que vê de qualquer concorrente. É aí
          que um site premium muda o jogo.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PAINS.map((pain) => (
            <div
              key={pain.title}
              className="gsap-fade glass-card translate-y-6 p-8 transition-colors duration-300 hover:border-gold/40"
            >
              <pain.icon className="mb-5 h-9 w-9 text-gold" aria-hidden="true" />
              <h3 className="mb-3 font-heading text-lg font-bold text-white">
                {pain.title}
              </h3>
              <p className="text-sm leading-relaxed text-mist/70">{pain.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
