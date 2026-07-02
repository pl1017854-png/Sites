# ✂ Navalha de Ouro — Barbearia Premium

Landing page moderna e totalmente responsiva para uma barbearia, construída com **HTML, CSS e JavaScript puros** — zero bibliotecas, zero frameworks.

## Como ver

Abra o `index.html` no navegador, ou sirva localmente:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Destaques

- 🎨 **Paleta preto e dourado** com fontes do Google Fonts (Playfair Display + Poppins)
- 📱 **Responsivo** — layouts dedicados para desktop, tablet e celular (menu hamburger em tela cheia no mobile)
- 📜 **Animações ao scroll** — reveal escalonado com `IntersectionObserver`
- 🔢 **Contadores animados** na seção de números, com easing suave
- 🧭 **Scrollspy** — o link da seção visível fica destacado no menu
- 📊 **Barra de progresso** de leitura no topo da página
- 📝 **Formulário de contato** com validação e envio simulado (pronto para plugar num backend)
- ♿ Respeita `prefers-reduced-motion`

## Seções

Header fixo com navegação • Hero com CTA • Sobre • Serviços com preços • Números • Galeria • Depoimentos • Banner de CTA • Contato com formulário • Footer

## Estrutura

```
index.html      — marcação e conteúdo
css/style.css   — estilos, paleta, responsividade e animações
js/main.js      — menu, scrollspy, reveal, contadores e formulário
```

> As peças da galeria e o retrato da seção "Sobre" são arte em CSS/SVG — basta trocar pelos elementos `<img>` com suas fotos reais.
