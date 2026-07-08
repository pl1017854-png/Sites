'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scissors, UtensilsCrossed, Dumbbell, Car } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    icon: Scissors,
    name: "Barbearia Imperial",
    category: "Barbearia · Itu/SP",
    result: "+240% em agendamentos online",
    gradient: "from-[#E6B800]/30 via-night-soft to-black",
  },
  {
    icon: UtensilsCrossed,
    name: "Cantina Toscana",
    category: "Restaurante · Sorocaba/SP",
    result: "Reservas lotadas aos finais de semana",
    gradient: "from-[#FFD700]/20 via-black to-night-soft",
  },
  {
    icon: Dumbbell,
    name: "Iron House Gym",
    category: "Academia · Salto/SP",
    result: "+180 matrículas no primeiro trimestre",
    gradient: "from-night-mid via-[#E6B800]/15 to-black",
  },
  {
    icon: Car,
    name: "Prestige Motors",
    category: "Estética automotiva · Indaiatuba/SP",
    result: "Agenda fechada com 3 semanas de espera",
    gradient: "from-black via-night-soft to-[#FFD700]/20",
  },
];

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Pin Section — portfólio pinado com scroll horizontal (desktop)
      mm.add("(min-width: 768px)", () => {
        const distance = () => track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${distance()}`,
            invalidateOnRefresh: true,
          },
        });
      });

      // Mobile: reveal simples, sem pin
      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray<HTMLElement>(".portfolio-card").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: { trigger: el, start: "top 85%" },
            }
          );
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative overflow-hidden bg-night-soft/40 py-28 md:flex md:h-screen md:flex-col md:justify-center md:py-0"
    >
      <div className="px-6 md:absolute md:top-14 md:left-1/2 md:w-full md:max-w-6xl md:-translate-x-1/2 md:px-10">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold/80">
          Portfólio
        </p>
        <h2 className="font-heading text-3xl font-bold text-white sm:text-5xl">
          Trabalhos que <span className="text-gold-gradient">falam por nós</span>
        </h2>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex flex-col gap-8 px-6 md:mt-40 md:w-max md:flex-row md:gap-10 md:px-[10vw]"
      >
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className="portfolio-card w-full shrink-0 md:w-[560px]"
          >
            {/* Mockup de navegador premium */}
            <div className="glass-card overflow-hidden !rounded-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 bg-black/60 px-5 py-3">
                <span className="h-3 w-3 rounded-full bg-gold/80" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="ml-4 hidden truncate rounded-md bg-white/5 px-3 py-1 text-xs text-mist/40 sm:block">
                  {project.name.toLowerCase().replace(/\s/g, "")}.com.br
                </span>
              </div>
              <div
                className={`relative flex aspect-[16/10] flex-col items-center justify-center bg-gradient-to-br ${project.gradient} p-8`}
              >
                <project.icon className="mb-4 h-12 w-12 text-gold" aria-hidden="true" />
                <p className="font-heading text-2xl font-bold text-white">
                  {project.name}
                </p>
                <span className="mt-4 h-px w-24 bg-gold/60" />
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-mist/60">
                  {project.category}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-gold">
              {project.result}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
