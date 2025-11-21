import { motion } from 'framer-motion';

export default function Bonus() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-violet-500/15 blur-3xl" />
        <div className="absolute right-10 bottom-10 w-56 h-56 bg-[#D4AF37]/15 blur-3xl" />
      </div>
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-[#D4AF37]/25 bg-black/50 p-6 backdrop-blur">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Alles drin, was Resultate treibt</h2>
              <p className="mt-3 text-white/75">Klar strukturierte Module, sofort nutzbare Vorlagen und eine Bank aus Hooks & Skripten. Du bekommst nicht mehr To‑dos — du bekommst Output.</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-white/80 text-sm">
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-[#D4AF37]"/> Module 1‑6: Von Hook bis Publish</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-violet-400"/> 500+ Swipe‑Files & Templates</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-amber-300"/> AI‑Workflows & Prompt‑Packs</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-emerald-300"/> Canva Pro Bonus inklusive</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/25 bg-black/50 p-6 backdrop-blur">
              <h3 className="text-2xl font-bold">Für wen ist es gebaut?</h3>
              <p className="mt-2 text-white/75">Creator, Coaches, Agenturen und Teams, die Sichtbarkeit planbar machen wollen — ohne Burnout.</p>
              <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
                {['Solos','Teams','Brands'].map(x => (
                  <motion.div key={x} whileHover={{ y:-4 }} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80 text-center">{x}</motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-[#D4AF37]/50 via-violet-400/40 to-[#D4AF37]/30 shadow-[0_0_40px_rgba(139,92,246,0.25)]">
              <div className="rounded-2xl bg-black/60 border border-white/10 p-6 backdrop-blur">
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i*0.04 }} className="aspect-[4/3] rounded-xl bg-white/5 border border-white/10" />
                  ))}
                </div>
                <p className="mt-4 text-center text-sm text-white/70">Vorschau der Templates in der Bank</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/25 bg-black/50 p-6 backdrop-blur">
              <h3 className="text-2xl font-bold">Psychologie im Layout</h3>
              <ul className="mt-3 space-y-2 text-white/75 text-sm">
                <li>• Klarer Nutzen über dem Fold, Beweise direkt danach</li>
                <li>• Mikro‑Commitments mit CTA‑Chips</li>
                <li>• Risk‑Reversal und Garantien gut sichtbar</li>
              </ul>
              <div className="mt-4">
                <a href="#buy" className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-[#D4AF37]/40 text-white hover:bg-[#D4AF37]/10 transition">Jetzt kaufen</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
