export default function Bonus() {
  return (
    <section className="relative py-16">
      <div className="relative container mx-auto px-6 md:px-10">
        {/* Inclusion + outcome copy in one flow */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
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
                  <div key={x} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80 text-center">{x}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-[#D4AF37]/50 via-violet-400/40 to-[#D4AF37]/30 shadow-[0_0_40px_rgba(139,92,246,0.25)]">
              <div className="rounded-2xl bg-black/60 border border-white/10 p-6 backdrop-blur">
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="aspect-[4/3] rounded-xl bg-white/5 border border-white/10" />
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
          </div>
        </div>
      </div>
    </section>
  );
}
