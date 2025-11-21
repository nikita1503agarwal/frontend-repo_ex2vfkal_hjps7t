export default function Features() {
  const items = [
    { title: "Speed System", desc: "Von Idee zu veröffentlicht in unter 60 Minuten — klarer, wiederholbarer Pipeline.", tag: "Execution", bullets:["Schnelle Hook‑Findung","Shot‑Liste & Skript in Minuten","Posting ohne Reibung"] },
    { title: "Content Bank", desc: "500+ Prompts, Hooks, Angles & Templates — sofort einsatzbereit.", tag: "Library", bullets:["Swipe‑Files für Reels/Shorts","Vorlagen für Thumbnails & Titles","Brand‑Kits & Layouts"] },
    { title: "AI für Reichweite", desc: "Prompt Packs & Workflows für hohe Retention und Shareability.", tag: "AI", bullets:["Retention‑Optimierung","Repurposing‑Pipelines","Varianten‑Testing"] },
    { title: "Canva Pro Bonus", desc: "Premium Assets & Brand Kits — inklusive.", tag: "Bonus", bullets:["Premium Fonts","Social Kits","Export‑Presets"] },
  ];

  return (
    <section className="relative py-16">
      <div className="relative container mx-auto px-6 md:px-10">
        {/* Persuasion cards row */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group p-6 rounded-2xl bg-black/50 border border-[#D4AF37]/25 hover:bg-black/60 transition relative overflow-hidden backdrop-blur">
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br from-violet-400/20 to-[#D4AF37]/20 blur-2xl" />
              <div className="text-[11px] inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-black/40 px-2 py-0.5 text-white/70 mb-3">{it.tag}</div>
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
              <ul className="mt-4 space-y-1.5 text-white/70 text-sm">
                {it.bullets.map(b => (<li key={b} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />{b}</li>))}
              </ul>
            </div>
          ))}
        </div>

        {/* Risk reversal bar */}
        <div className="mt-8 rounded-2xl border border-[#D4AF37]/25 bg-black/50 p-5 backdrop-blur flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-sm">14‑Tage Geld‑zurück • Sicherer Checkout • Sofortiger Zugang</p>
          <a href="#buy" className="px-5 py-2 rounded-full border border-[#D4AF37]/40 text-white hover:bg-[#D4AF37]/10 transition">Jetzt sichern</a>
        </div>
      </div>
    </section>
  );
}
