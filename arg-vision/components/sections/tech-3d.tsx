'use client'
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Zap, MousePointerClick } from "lucide-react";
import { SplineScene } from "@/components/spline-scene";

gsap.registerPlugin(ScrollTrigger);

const SPLINE_SCENE_URL =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Experiências 3D interativas",
    text: "Cenas tridimensionais que respondem ao movimento do visitante.",
  },
  {
    icon: Zap,
    title: "Velocidade de carregamento",
    text: "Tecnologia de ponta sem sacrificar performance — nem no celular.",
  },
  {
    icon: MousePointerClick,
    title: "Micro-interações que vendem",
    text: "Cada animação guia o olhar do visitante até o botão de contato.",
  },
];

export function Tech3D({ sceneUrl = SPLINE_SCENE_URL }: { sceneUrl?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Spline só monta quando a seção entra em view (lazy real)
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(section);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".tech-fade").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });
      // Stagger List — lista de diferenciais
      gsap.to(".list-item", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: { trigger: ".tech-list", start: "top 80%" },
      });
    }, section);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tecnologia"
      className="relative overflow-hidden bg-black px-6 py-28 lg:py-40"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="tech-fade mb-4 translate-y-6 text-sm uppercase tracking-[0.35em] text-gold/80 opacity-0">
            O diferencial ARG Vision
          </p>
          <h2 className="tech-fade translate-y-6 font-heading text-3xl font-bold leading-snug text-white opacity-0 sm:text-5xl">
            Tecnologia de{" "}
            <span className="text-gold-gradient">outro nível</span>
          </h2>
          <p className="tech-fade mt-6 max-w-lg translate-y-6 text-lg text-mist/70 opacity-0">
            Enquanto sites comuns são páginas paradas, os nossos são
            experiências. A mesma tecnologia 3D usada por grandes marcas,
            agora ao alcance do seu negócio.
          </p>

          <ul className="tech-list mt-10 space-y-6">
            {FEATURES.map((feature) => (
              <li key={feature.title} className="list-item gsap-stagger-item flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
                  <feature.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-mist/60">{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="tech-fade glass-card relative h-[420px] translate-y-6 overflow-hidden opacity-0 lg:h-[560px]">
          {inView ? (
            <SplineScene scene={sceneUrl} className="h-full w-full" />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="loader"></span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
