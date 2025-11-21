export default function Bonus() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0A0A0B] to-black">
      <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(900px_320px_at_15%_10%,rgba(139,92,246,0.16),transparent),radial-gradient(700px_280px_at_85%_15%,rgba(212,175,55,0.16),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Content Bank + Canva Pro</h2>
            <p className="mt-5 text-white/75">
              Greife auf eine kuratierte Bank aus Hooks, Skripten, Thumbnails und Post‑Templates zu. Inklusive Canva Pro, um Premium‑Assets in Rekordzeit zu bauen.
            </p>
            <ul className="mt-8 space-y-3 text-white/80">
              <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37]"/> 500+ erprobte Prompts & Frameworks</li>
              <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-violet-400"/> Swipe‑Files für Carousels, Reels, Shorts & Threads</li>
              <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-amber-300"/> Brand Kits, Fonts & Layouts zum Plug‑and‑Play</li>
            </ul>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
