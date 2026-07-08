'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "30+", label: "sites entregues" },
  { value: "98%", label: "clientes satisfeitos" },
  { value: "7 dias", label: "prazo médio de entrega" },
  { value: "24h", label: "seu site vendendo por dia" },
];

const TESTIMONIALS = [
  {
    quote:
      "Em duas semanas com o site no ar, a agenda encheu. Cliente novo chega dizendo que escolheu a barbearia pelo site. Melhor investimento que já fiz no negócio.",
    name: "Rodrigo M.",
    role: "Dono de barbearia · Itu/SP",
  },
  {
    quote:
      "Eu achava que site era coisa de empresa grande. O pessoal da ARG Vision entregou algo que parece de marca internacional — e coube no meu bolso.",
    name: "Fernanda C.",
    role: "Proprietária de estúdio de beleza · Salto/SP",
  },
  {
    quote:
      "O site ficou tão bonito que virou meu cartão de visita. Mando o link e o cliente já chega confiando no trabalho. Fechou três orçamentos na primeira semana.",
    name: "André L.",
    role: "Estética automotiva · Indaiatuba/SP",
  },
];

export function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.to(".proof-heading", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: { trigger: ".proof-heading", start: "top 80%" },
      });
      // Stagger — números de resultado
      gsap.to(".stat-item", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: { trigger: ".stats-grid", start: "top 85%" },
      });
      // Stagger — depoimentos
      gsap.to(".testimonial-card", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: { trigger: ".testimonials-grid", start: "top 85%" },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      className="relative bg-black px-6 py-28 lg:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="proof-heading translate-y-6 opacity-0">
          <p className="mb-4 text-center text-sm uppercase tracking-[0.35em] text-gold/80">
            Prova social
          </p>
          <h2 className="text-center font-heading text-3xl font-bold text-white sm:text-5xl">
            Quem contratou, <span className="text-gold-gradient">recomenda</span>
          </h2>
        </div>

        <div className="stats-grid mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="stat-item gsap-stagger-item glass-card p-6 text-center"
            >
              <p className="font-heading text-3xl font-bold text-gold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-mist/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="testimonials-grid mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="testimonial-card gsap-stagger-item glass-card flex flex-col p-8"
            >
              <div className="mb-4 flex gap-1" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-mist/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-heading text-sm font-bold text-white">{t.name}</p>
                <p className="mt-1 text-xs text-mist/50">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
