const items = [
  "🚚 FRETE GRÁTIS PARA TODO O BRASIL",
  "🌙 50% OFF SOMENTE HOJE",
  "🛡️ 7 DIAS DE GARANTIA OU SEU DINHEIRO DE VOLTA",
  "⭐ +2.300 CLIENTES SATISFEITOS",
];

export function AnnouncementBar() {
  const loop = [...items, ...items];
  return (
    <div className="relative z-50 overflow-hidden border-b border-moon-300/20 bg-gradient-to-r from-night-900 via-night-800 to-night-900 py-2">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={i} className="text-[11px] font-semibold tracking-[0.18em] text-moon-200">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
