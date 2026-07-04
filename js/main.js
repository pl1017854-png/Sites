/* ═══════════════════════════════════════════
   Lua Encantada™ — interações da landing page
   Vanilla JS, zero dependências
   ═══════════════════════════════════════════ */

(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ─── Céu estrelado ─── */
  const canvas = document.getElementById("starfield");
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext("2d");
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.min(220, Math.floor((canvas.width * canvas.height) / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.3 + 0.2,
        tw: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.015 + 0.004,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        s.tw += s.speed;
        const alpha = 0.35 + Math.abs(Math.sin(s.tw)) * 0.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233, 237, 247, ${alpha})`;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    };
    draw();
  }

  /* ─── Reveal ao scroll ─── */
  const revealEls = document.querySelectorAll(".reveal");
  revealEls.forEach((el) => {
    const delay = el.dataset.delay;
    if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);
  });
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));

  /* ─── Demo interativa: toque na lua troca o tom de luz ─── */
  const MODES = {
    cool: {
      core: "#f3f8ff",
      mid: "#ccdcf5",
      edge: "#6d84a8",
      glow: "rgba(170, 205, 255, 0.5)",
    },
    warm: {
      core: "#fff3dd",
      mid: "#ffd9a0",
      edge: "#b98a45",
      glow: "rgba(255, 200, 120, 0.55)",
    },
    amber: {
      core: "#ffd873",
      mid: "#ffb23e",
      edge: "#9c5c14",
      glow: "rgba(255, 160, 50, 0.6)",
    },
  };
  const ORDER = ["cool", "warm", "amber"];
  let currentMode = "warm";

  const root = document.documentElement;
  const moon = document.getElementById("moon");
  const modeDots = document.querySelectorAll(".mode-dot");

  const applyMode = (name) => {
    const m = MODES[name];
    if (!m) return;
    currentMode = name;
    root.style.setProperty("--moon-core", m.core);
    root.style.setProperty("--moon-mid", m.mid);
    root.style.setProperty("--moon-edge", m.edge);
    root.style.setProperty("--moon-glow", m.glow);
    modeDots.forEach((d) => d.classList.toggle("is-active", d.dataset.mode === name));
  };

  if (moon) {
    moon.addEventListener("click", () => {
      const next = ORDER[(ORDER.indexOf(currentMode) + 1) % ORDER.length];
      applyMode(next);
    });
  }
  modeDots.forEach((d) => d.addEventListener("click", () => applyMode(d.dataset.mode)));

  /* ─── Névoa: partículas geradas ─── */
  const mist = document.getElementById("mist");
  if (mist && !reduceMotion) {
    for (let i = 0; i < 9; i++) {
      const p = document.createElement("i");
      p.style.animationDelay = `${(i * 0.38).toFixed(2)}s`;
      p.style.setProperty("--drift", `${(Math.random() * 44 - 22).toFixed(0)}px`);
      mist.appendChild(p);
    }
  }

  /* ─── Contagem regressiva (evergreen de 15 min, persiste por visita) ─── */
  const TIMER_KEY = "lua-offer-deadline";
  const DURATION = 15 * 60 * 1000;

  let deadline = Number(sessionStorage.getItem(TIMER_KEY));
  if (!deadline || deadline < Date.now()) {
    deadline = Date.now() + DURATION;
    sessionStorage.setItem(TIMER_KEY, String(deadline));
  }

  const timerTargets = [
    document.getElementById("announceTimer"),
    document.getElementById("offerTimer"),
    document.getElementById("stickyTimer"),
  ].filter(Boolean);

  const tick = () => {
    let ms = deadline - Date.now();
    if (ms <= 0) {
      // reinicia para manter a urgência sempre ativa
      deadline = Date.now() + DURATION;
      sessionStorage.setItem(TIMER_KEY, String(deadline));
      ms = DURATION;
    }
    const min = String(Math.floor(ms / 60000)).padStart(2, "0");
    const sec = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const label = `${min}:${sec}`;
    timerTargets.forEach((el) => (el.textContent = label));
  };
  tick();
  setInterval(tick, 1000);

  /* ─── Estoque decrescente (persiste na sessão) ─── */
  const STOCK_KEY = "lua-stock";
  let stock = Number(sessionStorage.getItem(STOCK_KEY)) || 17;
  const stockEls = [document.getElementById("stockCount"), ...document.querySelectorAll(".stock-mirror")].filter(Boolean);
  const renderStock = () => stockEls.forEach((el) => (el.textContent = stock));
  renderStock();

  setInterval(() => {
    if (stock > 6 && Math.random() < 0.35) {
      stock -= 1;
      sessionStorage.setItem(STOCK_KEY, String(stock));
      renderStock();
    }
  }, 45000);

  /* ─── Barra fixa de compra: aparece após o hero ─── */
  const stickybar = document.getElementById("stickybar");
  const hero = document.getElementById("hero");
  const offer = document.getElementById("oferta");
  if (stickybar && hero) {
    const update = () => {
      const pastHero = window.scrollY > hero.offsetHeight * 0.7;
      let overOffer = false;
      if (offer) {
        const r = offer.getBoundingClientRect();
        overOffer = r.top < window.innerHeight && r.bottom > 0;
      }
      stickybar.classList.toggle("is-visible", pastHero && !overOffer);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ─── Checkout: troque os links abaixo pela URL do seu checkout ─── */
  const CHECKOUT_URLS = {
    kit1: "#oferta", // ex.: "https://seucheckout.com/lua-encantada-1un"
    kit2: "#oferta", // ex.: "https://seucheckout.com/lua-encantada-kit2"
  };
  document.querySelectorAll("[data-checkout]").forEach((a) => {
    const url = CHECKOUT_URLS[a.dataset.checkout];
    if (url && url !== "#oferta") a.href = url;
    else
      a.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Configure a URL do seu checkout em js/main.js (CHECKOUT_URLS). 🌙");
      });
  });
})();
