import { motion } from 'framer-motion';
import { useMemo } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
};

export default function Hero() {
  // randomize floating orb durations so the scene feels alive
  const orbs = useMemo(() => ([
    { className: 'bg-violet-500/25', w: 520, h: 520, x: '-10%', y: '10%', blur: 'blur-3xl', d: 12 },
    { className: 'bg-amber-300/20', w: 420, h: 420, x: '70%', y: '5%', blur: 'blur-3xl', d: 16 },
    { className: 'bg-[#D4AF37]/20', w: 560, h: 560, x: '40%', y: '60%', blur: 'blur-3xl', d: 18 },
  ]), []);

  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden">
      {/* Animated luxury background without image */}
      <div className="absolute inset-0">
        {/* deep base + vignette */}
        <div className="absolute inset-0 bg-[#0A0A0B]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
        {/* floating gradient orbs */}
        {orbs.map((o, idx) => (
          <motion.div
            key={idx}
            className={`absolute rounded-full ${o.className} ${o.blur}`}
            style={{ width: o.w, height: o.h, left: o.x, top: o.y }}
            animate={{
              x: [0, 15, -10, 0],
              y: [0, -10, 10, 0],
              scale: [1, 1.05, 0.98, 1],
            }}
            transition={{ duration: o.d, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        {/* gold highlight sweep */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(800px 220px at 15% 10%, rgba(139,92,246,0.18), transparent 60%), radial-gradient(900px 260px at 85% 0%, rgba(212,175,55,0.16), transparent 60%)',
          }}
          animate={{ opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 md:px-10 pt-28 pb-16">
          <div className="max-w-5xl">
            <motion.div
              className="inline-flex items-center gap-2 text-xs md:text-sm text-white/90 bg-white/5 border border-[#D4AF37]/30 px-3 py-1 rounded-full backdrop-blur"
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              Anmeldung geöffnet — limitierte Plätze
            </motion.div>

            <motion.h1
              className="mt-6 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
            >
              <span className="block text-white">Baue ein Content‑System</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#F5E6B3] via-[#D4AF37] to-[#EECE6E]">das Aufmerksamkeit druckt</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base md:text-lg text-white/80 max-w-2xl"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
            >
              Strategien, Playbooks und AI‑Workflows, um in Tagen statt Monaten zu skalieren. Premium Templates inklusive.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
            >
              <a href="#buy" className="group inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#D4AF37]/40 text-white relative overflow-hidden">
                <span className="relative z-10 font-semibold">Jetzt starten</span>
                <span className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition" />
                <span className="pointer-events-none absolute -inset-[1px] rounded-full opacity-0 group-hover:opacity-100 transition" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.0), rgba(212,175,55,0.35), rgba(212,175,55,0.0))' }} />
              </a>
              <a href="#buy" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 font-medium backdrop-blur transition">
                Preis & Inhalte ansehen
              </a>
            </motion.div>

            {/* Persuasion strip */}
            <motion.div className="mt-10 grid gap-4 sm:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              {[
                { k: 'Proof', h: '4.9/5', d: 'Bewertet von 2.300+ Creators' },
                { k: 'Zeitgewinn', h: '10+ Std', d: 'pro Woche durch Vorlagen' },
                { k: 'Umsetzung', h: '60 Min', d: 'von Idee bis Veröffentlichung' },
              ].map((c, i) => (
                <motion.div
                  key={c.k}
                  variants={fadeUp}
                  custom={i}
                  className="rounded-xl border border-[#D4AF37]/25 bg-black/40 p-5 backdrop-blur relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br from-violet-400/20 to-[#D4AF37]/20 blur-2xl" />
                  <p className="text-2xl font-bold text-white">{c.h}</p>
                  <p className="text-white/70 text-sm">{c.d}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating preview cards with subtle parallax */}
        <div className="pointer-events-none relative container mx-auto px-6 md:px-10 pb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {['Hooks Lab','Script Forge','Idea Matrix','Repurpose OS','Title/Thumb','Analytics','Brand Kits','Templates'].map((x, i) => (
              <motion.div
                key={x}
                className="aspect-[4/3] rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                {x}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
