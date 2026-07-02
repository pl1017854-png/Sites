# ✦ COSMOS — Uma Jornada pelo Universo

Website imersivo de página única com animações ao scroll e efeitos especiais, construído com **HTML, CSS e JavaScript puros** — zero bibliotecas, zero frameworks.

## Como ver

Abra o `index.html` no navegador, ou sirva localmente:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Efeitos incluídos

| Efeito | Como funciona |
| --- | --- |
| 🌌 Starfield vivo | Canvas com ~300 estrelas em 3 profundidades, com parallax de mouse **e** de scroll, brilho pulsante e estrelas cadentes |
| ✨ Título com shimmer | Gradiente animado aplicado letra a letra, com entrada em cascata |
| 🖱️ Cursor customizado | Ponto com blend-mode `screen` + halo que segue com atraso (lerp) |
| 🧲 Botões magnéticos | Elementos da nav são atraídos pelo cursor |
| 📜 Reveal ao scroll | `IntersectionObserver` com atrasos escalonados, máscaras de linha (`clip-path`) e letras individuais |
| 🔢 Contadores animados | Números sobem com easing `easeOutQuart` ao entrarem na tela |
| 🪐 Cards 3D | Tilt em `perspective` seguindo o mouse + spotlight radial na posição do cursor |
| ↔️ Scroll horizontal | Seção sticky que converte progresso vertical em deslocamento horizontal da linha do tempo |
| 🌍 Parallax em camadas | Elementos com `data-parallax-depth` se movem em velocidades diferentes |
| 📊 Barra de progresso | Gradiente no topo indicando a posição do scroll |
| 🎞️ Marquee infinito | Letreiro contínuo no rodapé com máscara de fade nas bordas |
| ♿ Acessível | Respeita `prefers-reduced-motion` desativando os movimentos |

## Estrutura

```
index.html      — marcação e conteúdo
css/style.css   — estilos, keyframes e estados das animações
js/main.js      — starfield, observers, parallax, tilt e cursor
```
