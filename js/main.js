/* ═══════════════════════════════════════════
   LUNARIS — Interações da loja
   Vanilla JS, zero dependências
   ═══════════════════════════════════════════ */

/* ─── Reveal on scroll ─── */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

/* ─── Contadores animados ─── */
const counters = document.querySelectorAll('[data-count]');
const counterIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || 0, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = target * eased;
      el.textContent = value.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      }) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.4 });
counters.forEach(el => counterIO.observe(el));

/* ─── Contagem regressiva (reinicia a cada visita, persiste na sessão) ─── */
const HOURS = 5, KEY = 'lunaris_deadline';
let deadline = parseInt(sessionStorage.getItem(KEY), 10);
if (!deadline || deadline < Date.now()) {
  deadline = Date.now() + HOURS * 3600 * 1000 + (42 * 60 + 18) * 1000;
  sessionStorage.setItem(KEY, deadline);
}

const tHours = document.getElementById('tHours');
const tMins = document.getElementById('tMins');
const tSecs = document.getElementById('tSecs');

function pad(n) { return String(n).padStart(2, '0'); }
function updateTimer() {
  let diff = Math.max(0, deadline - Date.now());
  if (diff === 0) {
    deadline = Date.now() + HOURS * 3600 * 1000;
    sessionStorage.setItem(KEY, deadline);
    diff = deadline - Date.now();
  }
  const s = Math.floor(diff / 1000);
  tHours.textContent = pad(Math.floor(s / 3600));
  tMins.textContent = pad(Math.floor((s % 3600) / 60));
  tSecs.textContent = pad(s % 60);
}
updateTimer();
setInterval(updateTimer, 1000);

/* ─── Estoque decrescente ─── */
const stockEls = [document.getElementById('stockCount'), document.getElementById('stockCount2')].filter(Boolean);
let stock = parseInt(sessionStorage.getItem('lunaris_stock'), 10) || 17;

function renderStock() {
  stockEls.forEach(el => { el.textContent = stock; });
}
function dropStock() {
  if (stock > 6) {
    stock--;
    sessionStorage.setItem('lunaris_stock', stock);
    renderStock();
  }
  setTimeout(dropStock, 45000 + Math.random() * 60000);
}
renderStock();
setTimeout(dropStock, 30000);

/* ─── Popup de vendas recentes ─── */
const pop = document.getElementById('salePop');
const popName = document.getElementById('salePopName');
const popItem = document.getElementById('salePopItem');

const buyers = [
  ['Juliana', 'Campinas, SP'], ['Fernanda', 'Salvador, BA'], ['Carlos', 'Fortaleza, CE'],
  ['Beatriz', 'Goiânia, GO'], ['Thiago', 'Florianópolis, SC'], ['Larissa', 'Manaus, AM'],
  ['Rodrigo', 'Brasília, DF'], ['Patrícia', 'Niterói, RJ'], ['Gustavo', 'Londrina, PR'],
  ['Amanda', 'São Luís, MA'], ['Vinícius', 'Uberlândia, MG'], ['Isabela', 'Santos, SP']
];
const items = ['Umidificador Lua 3D', 'Kit Casal (2 un.)', 'Kit Família (3 un.)'];

function showSalePop() {
  const [name, city] = buyers[Math.floor(Math.random() * buyers.length)];
  popName.textContent = `${name} de ${city}`;
  popItem.textContent = items[Math.floor(Math.random() * items.length)];
  pop.classList.add('show');
  setTimeout(() => pop.classList.remove('show'), 5000);
  setTimeout(showSalePop, 18000 + Math.random() * 22000);
}
setTimeout(showSalePop, 8000);

/* ─── Botões de compra (placeholder do checkout) ─── */
document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    // Troque pelo link do seu checkout (Shopify, Yampi, CartPanda, etc.)
    alert('🌙 Obrigado pelo interesse! Conecte aqui o link do seu checkout (Shopify, Yampi, CartPanda...).');
  });
});

/* ─── Esconde botão fixo quando a seção de oferta está visível ─── */
const stickyBuy = document.getElementById('stickyBuy');
const offerSection = document.getElementById('oferta');
if (stickyBuy && offerSection) {
  const stickyIO = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      stickyBuy.style.display = entry.isIntersecting ? 'none' : '';
    });
  }, { threshold: 0.15 });
  stickyIO.observe(offerSection);
}
