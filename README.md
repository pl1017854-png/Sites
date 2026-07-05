# 🌙 LUNARIS — Landing Page (Luminária Lua 3D com Umidificador 880ML)

Landing page de alta conversão em pt-BR construída com **React + Vite + Tailwind CSS +
Framer Motion + Spline 3D**, para venda direta (dropshipping).

**Produto:** Luminária Lua 3D com Umidificador de Ar 880ML — LED USB Recarregável e Difusor de Aromas
**Preço:** R$ 89,90 (âncora R$ 179,90 — 50% OFF) · frete grátis para todo o Brasil

## ✨ Destaques

- **Hero 3D com Spline** — cena interativa + Spotlight animado + céu estrelado
  (com fallback automático para foto real do produto se o 3D falhar)
- **Lua interativa** — tilt 3D que segue o mouse, névoa animada que intensifica no
  hover e clique que alterna os 3 tons de LED (branco frio / quente / âmbar),
  simulando o controle touch do produto real
- **Framer Motion em tudo** — parallax ao scroll, zoom no hover, fade-in ao entrar
  na tela, contadores animados, stagger, marquee, acordeão com AnimatePresence
- **Elementos de conversão** — preço âncora, prova social com compra verificada,
  ficha técnica completa, seção presente + unboxing, aromaterapia em 3 passos,
  FAQ oficial, garantia de 7 dias, CTA fixo no mobile
- **100% responsivo** — mobile-first, pronto para tráfego de anúncio

## 🚀 Como rodar

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:5173
npm run build     # build de produção em dist/
npm run preview   # serve o build localmente
```

## 🔌 Conectando seu checkout

Edite `src/lib/constants.ts` e troque `CHECKOUT_URL` pelo link do seu checkout
(Stripe, Shopify, Yampi, CartPanda, Kiwify...). Todos os botões de compra usam
essa constante.

## 📁 Estrutura

```
index.html                     → entrada do Vite (fontes + meta tags)
public/images/                 → fotos do produto
src/App.tsx                    → composição das seções
src/lib/constants.ts           → preço e link de checkout
src/components/ui/             → Spline, Spotlight, Card, Reveal, ParallaxImage, Stars
src/components/sections/       → hero, lua interativa, benefícios, specs, oferta, FAQ...
```

## 🎨 Personalizando

- **Cores:** paleta `night` e `moon` em `tailwind.config.js`
- **Preços e textos:** `src/lib/constants.ts` e os componentes em `src/components/sections/`
- **Cena 3D:** URL do Spline em `src/components/sections/hero.tsx`
