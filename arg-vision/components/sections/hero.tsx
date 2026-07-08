'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { InteractiveHero } from "@/components/interactive-hero";
import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      // Entrada do conteúdo do hero
      gsap.fromTo(
        ".hero-item",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 2.2 }
      );
      // Parallax: conteúdo sobe mais devagar que o scroll
      gsap.to(el, {
        y: 180,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="inicio">
      <InteractiveHero>
        <Navbar />
        <div
          ref={contentRef}
          className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <p className="hero-item mb-6 text-sm uppercase tracking-[0.4em] text-gold/90 opacity-0">
            Agência de websites premium — Itu/SP
          </p>
          <h1 className="hero-item font-heading text-4xl font-bold leading-tight text-white opacity-0 sm:text-6xl lg:text-7xl">
            Seu negócio,
            <br />
            <span className="text-gold-gradient">em outro nível.</span>
          </h1>
          <p className="hero-item mx-auto mt-6 max-w-xl text-lg text-mist/80 opacity-0 sm:text-xl">
            Websites cinematográficos que impressionam no primeiro segundo
            e transformam visitantes em clientes.
          </p>
          <div className="hero-item pointer-events-auto mt-10 opacity-0">
            <WhatsAppButton className="text-lg" pulse>
              Quero meu site premium
            </WhatsAppButton>
          </div>
          <a
            href="#historia"
            aria-label="Rolar para a próxima seção"
            className="hero-item pointer-events-auto absolute bottom-8 flex h-11 w-11 items-center justify-center text-gold/70 opacity-0 transition-colors hover:text-gold"
          >
            <ChevronDown className="h-8 w-8 animate-bounce" />
          </a>
        </div>
      </InteractiveHero>
    </section>
  );
}
