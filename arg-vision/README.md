# ARG Vision — Landing Page Premium

Landing page cinematográfica da **ARG Vision**, agência de websites premium de Itu/SP.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · GSAP (ScrollTrigger) · Three.js · Spline

## Rodando

```bash
npm install
npm run dev    # desenvolvimento em http://localhost:3000
npm run build  # build de produção
npm start      # servir o build
```

## Estrutura

| Seção | Componente | Animação |
|---|---|---|
| Preloader "ARG VISION" | `components/preloader.tsx` | Letter-by-letter (stagger) + failsafe 4s |
| Hero interativo (ballpit 3D) | `components/interactive-hero.tsx` | Esferas físicas gold/black seguem o cursor + parallax |
| Problema → Solução | `components/sections/problem-solution.tsx` | Scroll reveal fade |
| Serviços/Preços (glassmorphism) | `components/sections/pricing.tsx` | Scroll reveal slide + hover gold |
| Tecnologia (Spline 3D) | `components/sections/tech-3d.tsx` | Lazy load em view + stagger list |
| Portfólio | `components/sections/portfolio.tsx` | Seção pinada com scroll horizontal (desktop) |
| Prova social | `components/sections/social-proof.tsx` | Stagger (números + depoimentos) |
| CTA final | `components/sections/final-cta.tsx` | Fade + botão com pulso dourado |

## Personalização

- **Cena Spline:** troque a URL em `components/sections/tech-3d.tsx` (`SPLINE_SCENE_URL`) ou passe via prop `sceneUrl` para `<Tech3D />`.
- **WhatsApp / e-mail:** edite `lib/constants.ts`.
- **Paleta:** gold `#E6B800` / black `#000` definidos em `tailwind.config.ts` e nas esferas em `components/interactive-hero.tsx` (`argVisionColors`).
- **Fontes:** Cinzel Decorative (títulos) + Lora (texto), via `next/font` em `app/layout.tsx`.
