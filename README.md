# 🌙 Lua Encantada™ — Landing Page de Dropshipping

Landing page de alta conversão para o **Umidificador Luminária Lua 3D** (Moon Lamp Humidifier), construída com **HTML, CSS e JavaScript puros** — zero frameworks, carregamento instantâneo.

## Como ver

Abra o `index.html` no navegador, ou sirva localmente:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Por que essa página converte mais que a dos concorrentes

| Recurso | O que faz |
| --- | --- |
| 🌙 **Demo interativa da lua** | O visitante toca na lua e troca o tom de luz (frio / quente / âmbar) — experimenta o produto antes de comprar |
| 💨 Névoa animada | Partículas de névoa saindo do topo da lua, simulando o umidificador |
| ⏳ Contagem regressiva evergreen | Timer de 15 min persistido na sessão (barra de anúncio, oferta e barra fixa) |
| 📉 Estoque decrescente | Contador de unidades que diminui ao longo da visita |
| 📌 Barra fixa de compra | CTA sempre visível no mobile após o hero (some sobre a seção de oferta) |
| ⭐ Prova social | Depoimentos com "compra verificada" + estatísticas de satisfação |
| ✅ Garantia "Noite Perfeita" | Selo de 7 dias com devolução do dinheiro para reduzir objeção |
| 🛒 Kit Casal | Segunda oferta com ticket médio maior (2 unidades com desconto extra) |
| ❓ FAQ em `<details>` | Responde as principais objeções (duração da água, ruído, energia, frete) |
| ✨ Céu estrelado em canvas | Clima noturno premium, respeita `prefers-reduced-motion` |

## Configuração antes de publicar

1. **Checkout** — em `js/main.js`, preencha `CHECKOUT_URLS` com as URLs reais do seu checkout (Shopify, Yampi, Cartpanda, etc.):
   ```js
   const CHECKOUT_URLS = {
     kit1: "https://seucheckout.com/lua-encantada-1un",
     kit2: "https://seucheckout.com/lua-encantada-kit2",
   };
   ```
2. **Fotos reais** — a lua do hero é desenhada em CSS. Se quiser usar fotos do fornecedor, substitua o bloco `.moon-scene` no `index.html` por uma `<img>`.
3. **Preços** — ajuste em `index.html` (seção `#oferta`) e na barra fixa (`.stickybar`).
4. **Pixel / Analytics** — adicione o pixel do Facebook/TikTok e o GA4 no `<head>` do `index.html`.

## Estrutura

```
index.html      — marcação e copy de vendas (pt-BR)
css/style.css   — tema noturno (azul-noite + âmbar + madeira), responsivo
js/main.js      — starfield, demo da lua, névoa, timers, estoque, sticky bar
```
