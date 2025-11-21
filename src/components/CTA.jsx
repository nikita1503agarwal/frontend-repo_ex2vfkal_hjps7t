export default function CTA() {
  return (
    <section id="buy" className="relative py-28 bg-black">
      <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(900px_340px_at_80%_10%,rgba(212,175,55,0.2),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-black via-black/70 to-black p-8 md:p-12 text-center backdrop-blur">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Jetzt einschreiben</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-white">Starte deine High‑Output Maschine</h2>
            <p className="mt-4 text-white/75 max-w-2xl mx-auto">Lebenslanger Zugriff auf Training, Content‑Bank, Canva Pro Bonus und AI‑Workflows. Baue dein System einmal — shippe dauerhaft.</p>

            {/* Pricing pill */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-black/50 px-4 py-2 text-white/80">
              <span className="text-white font-semibold text-lg">$297</span>
              <span className="text-white/60 text-sm">einmalig</span>
            </div>

            <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-3 justify-center">
              <a href="https://buy.stripe.com/test_4gwbML0bI6clf0c4gg" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full border border-[#D4AF37]/40 text-white hover:bg-[#D4AF37]/10 font-semibold transition">
                Jetzt kaufen
              </a>
              <p className="text-white/60 text-sm">Sicherer Checkout • 14‑Tage Garantie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
