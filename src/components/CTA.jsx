import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="buy" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-[70%] h-40 bg-gradient-to-b from-[#D4AF37]/15 to-transparent blur-3xl" />
      </div>
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-black via-black/70 to-black p-8 md:p-12 text-center backdrop-blur relative overflow-hidden"
          >
            <div className="pointer-events-none absolute -inset-[1px] rounded-3xl ring-1 ring-inset ring-white/5" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Jetzt einschreiben</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-white">Starte deine High‑Output Maschine</h2>
            <p className="mt-4 text-white/75 max-w-2xl mx-auto">Lebenslanger Zugriff auf Training, Content‑Bank, Canva Pro Bonus und AI‑Workflows. Baue dein System einmal — shippe dauerhaft.</p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-black/50 px-4 py-2 text-white/80">
              <span className="text-white font-semibold text-lg">$297</span>
              <span className="text-white/60 text-sm">einmalig</span>
            </div>

            <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-3 justify-center">
              <a href={import.meta.env.VITE_STRIPE_URL || 'https://buy.stripe.com/test_4gwbML0bI6clf0c4gg'} target="_blank" rel="noreferrer" className="group relative px-8 py-4 rounded-full border border-[#D4AF37]/40 text-white font-semibold overflow-hidden">
                <span className="relative z-10">Jetzt kaufen</span>
                <span className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition" />
                <span className="pointer-events-none absolute -inset-[1px] rounded-full opacity-0 group-hover:opacity-100 transition" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.0), rgba(212,175,55,0.35), rgba(212,175,55,0.0))' }} />
              </a>
              <p className="text-white/60 text-sm">Sicherer Checkout • 14‑Tage Garantie</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
