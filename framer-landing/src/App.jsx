import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './App.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const heroImageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } }
};

export default function App() {
  const [countdown, setCountdown] = useState({ h: 23, m: 59, s: 59 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-dark text-white min-h-screen overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-gold via-yellow-300 to-gold"
        style={{ width: `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
      />

      {/* Urgency Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-red-900 via-red-600 to-red-900 text-center py-2 text-sm font-semibold"
      >
        🔥 OFERTA RELÂMPAGO: 48% OFF termina em {countdown.h.toString().padStart(2, '0')}:{countdown.m.toString().padStart(2, '0')}:{countdown.s.toString().padStart(2, '0')} — Restam apenas 20 unidades!
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-gold/20 px-6 py-3 flex items-center justify-between"
      >
        <span className="text-xl font-bold text-gold">🌙 LUNARIS</span>
        <button className="bg-gradient-to-r from-gold to-yellow-600 text-black px-6 py-2 rounded-full font-bold hover:shadow-lg hover:shadow-gold/50 transition-all">
          Comprar Agora
        </button>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <motion.div
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="inline-block bg-gold/10 border border-gold/30 text-gold px-4 py-2 rounded-full text-sm font-semibold"
            >
              ⭐ 4,9/5 — Mais de 7.500 clientes apaixonadas
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Tenha um Pedaço da Lua no Seu Quarto <span className="text-gold">🌙</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Luminária + Umidificador + Difusor de Aromas em Um Só Produto. Transforme seu ambiente em um refúgio de paz.
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-baseline gap-4 flex-wrap">
              <span className="text-gray-400 line-through">R$ 249,90</span>
              <span className="text-4xl font-bold text-gold">R$ 129,90</span>
              <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">48% OFF</span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-400">
              ou <strong>12x de R$ 12,90</strong> sem juros · Frete GRÁTIS para todo o Brasil
            </motion.p>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-gold to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-gold/40 transition-all">
                🌙 Garanta Sua Lua Agora
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div variants={heroImageVariants} className="relative">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-gold/20 to-gold/5 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-9xl">🌙</div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-3 rounded-xl border border-gold/30"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
              <p className="text-sm font-semibold">💧 880ML de reservatório · até 12h de névoa</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-black to-dark/80">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Ela resolve <span className="text-gold">5 problemas</span> de uma vez
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { icon: '💧', title: 'Umidificação 8-12h', desc: 'Reservatório de 880ML libera névoa contínua' },
              { icon: '😴', title: 'Luz Relaxante', desc: 'Âmbar que favorece produção de melatonina' },
              { icon: '🌙', title: 'Design 3D Realista', desc: 'Superfície lunar em 3D transforma seu quarto' },
              { icon: '🎁', title: 'Presente Perfeito', desc: 'O tipo de presente que ninguém esquece' },
              { icon: '🛡️', title: '7 Dias de Garantia', desc: 'Devolução do dinheiro sem perguntas' },
              { icon: '🌿', title: 'Difusor de Aromas', desc: 'Compatible com óleos essenciais' },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)' }}
                className="bg-white/5 backdrop-blur-md border border-gold/20 p-6 rounded-2xl hover:border-gold/60 transition-all"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Quem comprou, <span className="text-gold">amou</span> 💛
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: 'Mariana S.', city: 'São Paulo', text: 'Comprei pro meu quarto e mudou completamente o clima. Durmo muito melhor!' },
              { name: 'Juliana R.', city: 'Rio de Janeiro', text: 'Presente perfeito pro meu namorado. Ele AMOU! A luz é linda demais.' },
              { name: 'Camila F.', city: 'Belo Horizonte', text: 'Chegou rápido e a qualidade me surpreendeu. Uso todo dia com óleo de lavanda.' },
              { name: 'Fernanda L.', city: 'Curitiba', text: 'Meu quarto virou um spa! Super recomendo, vale cada centavo.' },
            ].map((review, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-white/5 backdrop-blur-md border border-gold/20 p-5 rounded-xl"
              >
                <div className="text-gold mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-sm text-gray-300 mb-3">"{review.text}"</p>
                <p className="font-semibold text-sm">{review.name}</p>
                <p className="text-xs text-gray-500">{review.city}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Final */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-b from-dark to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/5"
          />
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center relative z-10"
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            🔥 RESTAM APENAS 20 UNIDADES
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Garanta a sua antes<br />que o estoque acabe
          </h2>

          <motion.div
            className="flex justify-center gap-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: 'HORAS', value: countdown.h },
              { label: 'MIN', value: countdown.m },
              { label: 'SEG', value: countdown.s },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white/5 border border-gold/30 px-4 py-3 rounded-lg"
              >
                <div className="text-2xl font-bold text-gold">{String(item.value).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mb-8">
            <div className="text-gray-300 line-through mb-2">R$ 249,90</div>
            <div className="text-5xl font-bold text-gold mb-2">R$ 129,90</div>
            <div className="text-gray-400">ou <strong>12x de R$ 12,90</strong> sem juros</div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-gold to-yellow-600 text-black py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all"
          >
            Comprar Agora — Estoque Limitado
          </motion.button>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 space-y-3 text-left max-w-sm mx-auto"
          >
            {['✓ Frete GRÁTIS para todo o Brasil', '✓ 7 dias de garantia com devolução do dinheiro', '✓ Pagamento 100% seguro'].map((item, i) => (
              <motion.li key={i} variants={itemVariants} className="text-gray-300">
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black border-t border-gold/20 py-12 px-6 text-center text-gray-500"
      >
        <p>© 2026 LUNARIS. Todos os direitos reservados. Feito com 💛 no Brasil.</p>
      </motion.footer>
    </div>
  );
}
