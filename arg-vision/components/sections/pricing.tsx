'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/whatsapp-button";

gsap.registerPlugin(ScrollTrigger);

const PLANS = [
  {
    name: "Site Premium",
    price: "R$797",
    description: "Presença digital de luxo para quem está começando.",
    features: [
      "Página única com design premium",
      "Botão de agendamento via WhatsApp",
      "Otimizado para celular e Google",
      "Entrega em até 7 dias",
    ],
    featured: false,
  },
  {
    name: "Landing Page Pro",
    price: "R$1.497",
    description: "Página cinematográfica focada em conversão máxima.",
    features: [
      "Animações e efeitos 3D interativos",
      "Estratégia de conversão completa",
      "Copywriting persuasivo incluído",
      "Integração com Google Maps e redes",
      "Suporte prioritário por 30 dias",
    ],
    featured: true,
  },
  {
    name: "Completo",
    price: "R$2.497",
    description: "O pacote definitivo: site, identidade e presença total.",
    features: [
      "Site multi-seção + landing de campanha",
      "Identidade visual (logo e paleta)",
      "Google Meu Negócio configurado",
      "Fotos e conteúdo profissional",
      "Suporte prioritário por 90 dias",
    ],
    featured: false,
  },
];

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.to(".pricing-heading", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: { trigger: ".pricing-heading", start: "top 80%" },
      });
      // Scroll Reveal Slide — cards deslizam para a posição
      gsap.utils.toArray<HTMLElement>(".pricing-card").forEach((el, i) => {
        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.12,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="relative bg-gradient-to-b from-black via-night-soft/60 to-black px-6 py-28 lg:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="pricing-heading translate-y-6 opacity-0">
          <p className="mb-4 text-center text-sm uppercase tracking-[0.35em] text-gold/80">
            Investimento
          </p>
          <h2 className="text-center font-heading text-3xl font-bold text-white sm:text-5xl">
            Escolha o seu <span className="text-gold-gradient">nível</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-mist/70">
            Pagamento único, sem surpresas. Planos de manutenção mensal
            disponíveis para manter seu site sempre impecável.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                "pricing-card flex flex-col p-8 opacity-0 transition-transform duration-300 hover:-translate-y-2",
                i % 2 === 0 ? "gsap-slide" : "gsap-slide-right",
                plan.featured ? "glass-gold lg:scale-105" : "glass-card"
              )}
            >
              {plan.featured && (
                <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  <Crown className="h-3.5 w-3.5" /> Mais escolhido
                </span>
              )}
              <h3 className="font-heading text-xl font-bold text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-mist/60">{plan.description}</p>
              <p className="mt-6 font-heading text-5xl font-bold text-gold">
                {plan.price}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-mist/50">
                pagamento único · + manutenção mensal opcional
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-mist/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                className="mt-8 w-full"
                variant={plan.featured ? "solid" : "outline"}
              >
                Começar agora
              </WhatsAppButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
