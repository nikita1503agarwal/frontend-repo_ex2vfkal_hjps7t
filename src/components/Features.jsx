import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function Features() {
  const items = [
    { title: 'Speed System', desc: 'Von Idee zu veröffentlicht in unter 60 Minuten — klarer, wiederholbarer Pipeline.', tag: 'Execution', bullets:['Schnelle Hook‑Findung','Shot‑Liste & Skript in Minuten','Posting ohne Reibung'] },
    { title: 'Content Bank', desc: '500+ Prompts, Hooks, Angles & Templates — sofort einsatzbereit.', tag: 'Library', bullets:['Swipe‑Files für Reels/Shorts','Vorlagen für Thumbnails & Titles','Brand‑Kits & Layouts'] },
    { title: 'AI für Reichweite', desc: 'Prompt Packs & Workflows für hohe Retention und Shareability.', tag: 'AI', bullets:['Retention‑Optimierung','Repurposing‑Pipelines','Varianten‑Testing'] },
    { title: 'Canva Pro Bonus', desc: 'Premium Assets & Brand Kits — inklusive.', tag: 'Bonus', bullets:['Premium Fonts','Social Kits','Export‑Presets'] },
  ];

  return (
    <section className="relative py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-gradient-to-b from-white/5 to-transparent blur-3xl" />
      </div>
      <div className="relative container mx-auto px-6 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6"
        >
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              variants={item}
              className="group p-6 rounded-2xl bg-black/50 border border-[#D4AF37]/25 relative overflow-hidden backdrop-blur will-change-transform transition"
              whileHover={{ y: -6 }}
            >
              <div className="absolute -top-14 -right-10 w-36 h-36 rounded-full bg-gradient-to-br from-violet-400/25 to-[#D4AF37]/20 blur-2xl" />
              <div className="text-[11px] inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-black/40 px-2 py-0.5 text-white/70 mb-3">{it.tag}</div>
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
              <ul className="mt-4 space-y-1.5 text-white/70 text-sm">
                {it.bullets.map(b => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />{b}
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 ring-1 ring-transparent group-hover:ring-[#D4AF37]/30 rounded-2xl transition" />
              <div className="pointer-events-none absolute inset-x-0 -bottom-16 h-32 bg-gradient-to-t from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 rounded-2xl border border-[#D4AF37]/25 bg-black/50 p-5 backdrop-blur flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/80 text-sm">14‑Tage Geld‑zurück • Sicherer Checkout • Sofortiger Zugang</p>
          <a href="#buy" className="group relative px-5 py-2 rounded-full border border-[#D4AF37]/40 text-white overflow-hidden">
            <span className="relative z-10">Jetzt sichern</span>
            <span className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
