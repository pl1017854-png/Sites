/* ═══════════════════════════════════════════
   COSMOS — Animações de scroll e efeitos
   Vanilla JS, zero dependências
   ═══════════════════════════════════════════ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── Preloader ─── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('is-done');
  }, prefersReducedMotion ? 0 : 900);
});

/* ─── Starfield: estrelas em parallax + estrelas cadentes ─── */
(() => {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let w, h, stars = [], shooting = [];
  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  let scrollY = 0;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    stars = [];
    const count = Math.min(320, Math.floor((w * h) / 4500));
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(),                 // profundidade 0..1
        r: Math.random() * 1.6 + 0.3,
        tw: Math.random() * Math.PI * 2,  // fase do brilho
        tws: 0.5 + Math.random() * 2,     // velocidade do brilho
      });
    }
  }

  function spawnShootingStar() {
    if (document.hidden || prefersReducedMotion) return;
    shooting.push({
      x: Math.random() * w * 0.8,
      y: Math.random() * h * 0.35,
      vx: 7 + Math.random() * 6,
      vy: 3 + Math.random() * 3,
      life: 1,
    });
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / w - 0.5) * 2;
    targetY = (e.clientY / h - 0.5) * 2;
  });
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });
  setInterval(spawnShootingStar, 2800);

  let t = 0;
  function frame() {
    t += 0.016;
    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;
    ctx.clearRect(0, 0, w, h);

    for (const s of stars) {
      const depth = 0.3 + s.z * 0.7;
      // estrelas distantes se movem menos: parallax de mouse e de scroll
      const px = s.x + mouseX * 30 * depth;
      const py = ((s.y + mouseY * 20 * depth - scrollY * 0.15 * depth) % h + h) % h;
      const twinkle = 0.55 + 0.45 * Math.sin(s.tw + t * s.tws);
      ctx.beginPath();
      ctx.arc(px, py, s.r * depth, 0, Math.PI * 2);
      const hue = 220 + s.z * 60;
      ctx.fillStyle = `hsla(${hue}, 80%, ${70 + s.z * 20}%, ${twinkle * (0.35 + depth * 0.5)})`;
      ctx.fill();
    }

    shooting = shooting.filter((m) => m.life > 0);
    for (const m of shooting) {
      m.x += m.vx; m.y += m.vy; m.life -= 0.018;
      const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 10, m.y - m.vy * 10);
      grad.addColorStop(0, `rgba(180, 220, 255, ${m.life})`);
      grad.addColorStop(1, 'rgba(180, 220, 255, 0)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(m.x - m.vx * 10, m.y - m.vy * 10);
      ctx.stroke();
    }

    requestAnimationFrame(frame);
  }

  resize();
  if (!prefersReducedMotion) frame();
  else { // versão estática para quem prefere menos movimento
    for (const s of stars) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(200, 210, 255, .5)';
      ctx.fill();
    }
  }
})();

/* ─── Cursor customizado + botões magnéticos ─── */
(() => {
  if (window.matchMedia('(hover: none)').matches) return;
  const cursor = document.getElementById('cursor');
  const glow = document.getElementById('cursorGlow');
  let cx = -100, cy = -100, gx = -100, gy = -100, tx = -100, ty = -100;

  window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });

  (function move() {
    cx += (tx - cx) * 0.35;
    cy += (ty - cy) * 0.35;
    gx += (tx - gx) * 0.08;
    gy += (ty - gy) * 0.08;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
    requestAnimationFrame(move);
  })();

  document.querySelectorAll('a, button, [data-tilt]').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
  });

  // efeito magnético: o elemento é atraído pelo cursor
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * 0.25}px, ${dy * 0.25}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform .4s cubic-bezier(.2,.9,.3,1.4)';
      el.style.transform = '';
      setTimeout(() => (el.style.transition = ''), 400);
    });
  });
})();

/* ─── Split de texto: hero (animado no load) e títulos (no scroll) ─── */
(() => {
  function splitChars(el, baseDelay = 0) {
    const text = el.textContent;
    el.textContent = '';
    el.setAttribute('aria-label', text);
    [...text].forEach((ch, i) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = ch === ' ' ? ' ' : ch;
      span.style.setProperty('--i', i);
      span.setAttribute('aria-hidden', 'true');
      if (baseDelay) span.style.animationDelay = `${baseDelay + i * 90}ms`;
      el.appendChild(span);
    });
  }
  splitChars(document.getElementById('heroTitle'), 1100);
  splitChars(document.getElementById('planetsTitle'));
})();

/* ─── Reveals com IntersectionObserver ─── */
(() => {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target;
      const delay = parseInt(el.dataset.delay || 0, 10);
      el.style.setProperty('--d', `${delay}ms`);
      el.classList.add('is-visible');
      io.unobserve(el);
      // depois do reveal, zera o atraso para não afetar transições de hover
      setTimeout(() => el.style.setProperty('--d', '0ms'), delay + 1000);
    }
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal, .split-lines, .split-chars').forEach((el) => io.observe(el));
})();

/* ─── Contadores animados ─── */
(() => {
  const easeOut = (p) => 1 - Math.pow(1 - p, 4);
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target;
      io.unobserve(el);
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || 0, 10);
      const suffix = el.dataset.suffix || '';
      const dur = 2000;
      const start = performance.now();
      (function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const val = target * easeOut(p);
        el.textContent = val.toLocaleString('pt-BR', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(start);
    }
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach((el) => io.observe(el));
})();

/* ─── Parallax de scroll + scroll horizontal + nav ─── */
(() => {
  // guarda o deslocamento aplicado para medir a posição "real" sem feedback
  const parallaxEls = [...document.querySelectorAll('[data-parallax-depth]')]
    .map((el) => ({ el, depth: parseFloat(el.dataset.parallaxDepth), offset: 0 }));
  const journey = document.querySelector('.journey');
  const track = document.getElementById('journeyTrack');
  const nav = document.getElementById('nav');
  const progress = document.getElementById('scrollProgress');
  let lastY = 0, ticking = false;

  function update() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    progress.style.width = `${(y / max) * 100}%`;

    nav.classList.toggle('is-scrolled', y > 60);
    nav.classList.toggle('is-hidden', y > lastY && y > 400);
    lastY = y;

    if (!prefersReducedMotion) {
      for (const s of parallaxEls) {
        const rect = s.el.getBoundingClientRect();
        const center = (rect.top - s.offset) + rect.height / 2 - window.innerHeight / 2;
        s.offset = center * -s.depth;
        s.el.style.transform = `translateY(${s.offset}px)`;
      }

      // scroll horizontal: converte progresso vertical da seção em translateX
      const jr = journey.getBoundingClientRect();
      const total = jr.height - window.innerHeight;
      const p = Math.min(Math.max(-jr.top / total, 0), 1);
      const distance = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(${-p * distance}px)`;
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* ─── Cards 3D com tilt seguindo o mouse ─── */
(() => {
  if (prefersReducedMotion || window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
      card.style.transform =
        `rotateY(${(px - 0.5) * 16}deg) rotateX(${(0.5 - py) * 16}deg) translateZ(6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform .6s cubic-bezier(.2,.9,.3,1.2)';
      card.style.transform = '';
      setTimeout(() => (card.style.transition = ''), 600);
    });
  });
})();
