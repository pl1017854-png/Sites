# 🌙 LUNARIS — Loja Dropshipping (Luminária Lua 3D com Umidificador 880ML)

Landing page de alta conversão para loja de dropshipping, em português (pt-BR),
construída com HTML, CSS e JavaScript puros — sem dependências, pronta para
hospedar em qualquer lugar (GitHub Pages, Vercel, Netlify, Hostinger...).

**Produto:** Luminária Lua 3D com Umidificador de Ar 880ML — LED USB Recarregável e Difusor de Aromas
**Preço:** US$ 59,99 (âncora US$ 119,99 — 50% OFF) · 12x de US$ 5,83 via Stripe
**Variações:** À Bateria / USB · **Estoque:** 20 unidades

## ✨ Elementos de conversão incluídos

- **Fotos profissionais do produto** — galeria com 4 imagens + thumbnails clicáveis
- **Barra de anúncio animada** — frete grátis mundial, 50% OFF e garantia em loop
- **Hero com preço âncora** — de US$ 119,99 por US$ 59,99 + 12x de US$ 5,83
- **Seletor de variação** — À Bateria / USB (valor vai junto pro checkout)
- **Contagem regressiva persistente** — cria urgência real (guarda o prazo na sessão)
- **Estoque decrescente com barra visual** — lote de 20 unidades que diminui ao vivo
- **Especificações completas + o que vem na caixa** — direto dos dados do fornecedor
- **Prova social** — 6 avaliações com "compra verificada" + contadores animados
- **Tabela comparativa** — LUNARIS vs. umidificadores comuns
- **Seção de casos de uso** — sono, casal, saúde e presente
- **Selo de garantia de 7 dias** — reduz objeção de risco
- **FAQ em acordeão** — as 8 perguntas oficiais do produto
- **Popup de vendas recentes** — "Fulana de Campinas acabou de comprar..."
- **Botão de compra fixo no mobile** — CTA sempre visível
- **100% responsivo** — otimizado para tráfego de anúncio (mobile-first)

## 🚀 Como ver

Abra o `index.html` no navegador, ou sirva localmente:

```bash
python3 -m http.server 8000
```

## 🔌 Conectando seu checkout

Os botões de compra estão com um placeholder. Para vender de verdade, edite
`js/main.js` (seção *"Botões de compra"*) e troque o `alert(...)` por um
redirecionamento para o link do seu checkout Stripe:

```js
window.location.href = 'https://buy.stripe.com/SEU_LINK?variant=' + encodeURIComponent(selectedVariant);
```

A variável `selectedVariant` já carrega a versão escolhida (À Bateria / USB).
Funciona com Stripe, Shopify, Yampi, CartPanda, Kiwify, ou qualquer gateway.

## 📁 Estrutura

```
index.html      → página completa da loja
css/style.css   → estilos e animações
js/main.js      → galeria, variantes, countdown, popups, estoque
img/            → fotos do produto (produto-1.jpg a produto-4.jpg)
```

## 🎨 Personalizando

- **Cores:** edite as variáveis em `:root` no topo do `css/style.css`
- **Preços e textos:** tudo direto no `index.html`
- **Nomes do popup de vendas:** lista `buyers` no `js/main.js`
