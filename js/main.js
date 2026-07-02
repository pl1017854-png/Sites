/* ═══════════════════════════════════════════════════════════
   NAVALHA DE OURO — Interações e animações de scroll
   Vanilla JS, zero dependências
   ═══════════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initScrollProgress();
  initReveal();
  initCounters();
  initContactForm();
});

/* ── Navegação: estado scrolled, menu mobile e link ativo ── */
function initNav() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  const links = menu.querySelectorAll(".nav__link");

  // Fundo sólido no header depois de rolar um pouco
  const onScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Abre/fecha menu mobile
  const closeMenu = () => {
    menu.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    // Trava o scroll do body enquanto o menu está aberto
    document.body.style.overflow = open ? "hidden" : "";
  });

  // Fecha o menu ao clicar em qualquer link (mobile)
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  // Destaca o link da seção visível
  const sections = [...links]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) =>
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${entry.target.id}`
          )
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* ── Barra de progresso de leitura ───────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ── Reveal ao entrar na viewport ────────────────────────── */
function initReveal() {
  const items = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        // data-delay controla o escalonamento da animação via CSS
        el.style.setProperty("--reveal-delay", `${el.dataset.delay || 0}ms`);
        el.classList.add("is-visible");
        observer.unobserve(el);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* ── Contadores animados (seção de números) ──────────────── */
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");

  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1800;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic para desacelerar no final
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent =
        value.toLocaleString("pt-BR", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((el) => observer.observe(el));
}

/* ── Formulário de contato (validação + envio simulado) ──── */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Valida os campos obrigatórios manualmente (novalidate no form)
    const required = form.querySelectorAll("[required]");
    let valid = true;

    required.forEach((field) => {
      const empty = !field.value.trim();
      field.classList.toggle("is-invalid", empty);
      if (empty) valid = false;
    });

    if (!valid) {
      feedback.textContent = "Por favor, preencha os campos destacados.";
      feedback.className = "form__feedback is-error";
      return;
    }

    // Envio simulado — aqui entraria a chamada real (fetch) ao backend
    const button = form.querySelector(".form__submit");
    button.disabled = true;
    button.textContent = "Enviando…";

    setTimeout(() => {
      const nome = form.nome.value.trim().split(" ")[0];
      feedback.textContent = `Obrigado, ${nome}! Recebemos seu pedido e confirmaremos o horário em instantes. ✂`;
      feedback.className = "form__feedback is-success";
      form.reset();
      button.disabled = false;
      button.textContent = "Enviar agendamento";
    }, 900);
  });

  // Remove o destaque de erro assim que o usuário digita
  form.addEventListener("input", (event) => {
    if (event.target.matches("[required]")) {
      event.target.classList.remove("is-invalid");
    }
  });
}
