import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Luxury overlays: deep black, violet glow, gold vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/85" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(900px_340px_at_12%_0%,rgba(139,92,246,0.2),transparent),radial-gradient(900px_340px_at_88%_6%,rgba(212,175,55,0.18),transparent)]" />

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 md:px-10 pt-28 pb-16">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/90 bg-white/5 border border-[#D4AF37]/30 px-3 py-1 rounded-full backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              Anmeldung geöffnet — limitierte Plätze
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight">
              <span className="block text-white">Baue ein Content‑System</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#F5E6B3] via-[#D4AF37] to-[#EECE6E]">das Aufmerksamkeit druckt</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl">
              Strategien, Playbooks und AI‑Workflows, um in Tagen statt Monaten zu skalieren. Premium Templates inklusive.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#buy" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#D4AF37]/40 text-white hover:bg-[#D4AF37]/10 font-semibold transition">
                Jetzt starten
              </a>
              <a href="#buy" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 font-medium backdrop-blur transition">
                Preis & Inhalte ansehen
              </a>
            </div>

            {/* Persuasion strip (no hard section) */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {k:'Proof', h:'4.9/5', d:'Bewertet von 2.300+ Creators'},
                {k:'Zeitgewinn', h:'10+ Std', d:'pro Woche durch Vorlagen'},
                {k:'Umsetzung', h:'60 Min', d:'von Idee bis Veröffentlichung'},
              ].map((c)=> (
                <div key={c.k} className="rounded-xl border border-[#D4AF37]/25 bg-black/40 p-5 backdrop-blur">
                  <p className="text-2xl font-bold text-white">{c.h}</p>
                  <p className="text-white/70 text-sm">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating preview cards */}
        <div className="pointer-events-none relative container mx-auto px-6 md:px-10 pb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {['Hooks Lab','Script Forge','Idea Matrix','Repurpose OS','Title/Thumb','Analytics','Brand Kits','Templates'].map((x) => (
              <div key={x} className="aspect-[4/3] rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 text-sm">
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
