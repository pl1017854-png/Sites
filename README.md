# 🌙 LUNARIS — Loja Dropshipping (Umidificador Lua 3D)

Landing page de alta conversão para loja de dropshipping, em português (pt-BR),
construída com HTML, CSS e JavaScript puros — sem dependências, pronta para
hospedar em qualquer lugar (GitHub Pages, Vercel, Netlify, Hostinger...).

## ✨ Elementos de conversão incluídos

- **Barra de anúncio animada** — frete grátis, 50% OFF e garantia em loop
- **Hero com preço âncora** — de R$ 199,90 por R$ 99,90 + parcelamento
- **Contagem regressiva persistente** — cria urgência real (guarda o prazo na sessão)
- **Estoque decrescente** — "Restam X unidades" que diminui ao vivo
- **Kits com desconto progressivo** — 1 un. / Kit Casal / Kit Família (AOV maior)
- **Prova social** — 6 avaliações com "compra verificada" + contadores animados
- **Tabela comparativa** — LUNARIS vs. umidificadores comuns
- **Selo de garantia de 7 dias** — reduz objeção de risco
- **FAQ em acordeão** — responde as 6 objeções mais comuns
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
redirecionamento para o link do seu checkout:

```js
window.location.href = 'https://seucheckout.com/produto/umidificador-lua-3d';
```

Funciona com Shopify, Yampi, CartPanda, Kiwify, ou qualquer gateway.

## 📁 Estrutura

```
index.html      → página completa da loja
css/style.css   → estilos e animações
js/main.js      → countdown, popups, contadores, estoque
```

## 🎨 Personalizando

- **Cores:** edite as variáveis em `:root` no topo do `css/style.css`
- **Preços e textos:** tudo direto no `index.html`
- **Nomes do popup de vendas:** lista `buyers` no `js/main.js`
