export default function Features() {
  const items = [
    { title: "Speed System", desc: "Von Idee zu veröffentlicht in unter 60 Minuten — klarer, wiederholbarer Pipeline.", tag: "Execution" },
    { title: "Content Bank", desc: "500+ Prompts, Hooks, Angles & Templates — sofort einsatzbereit.", tag: "Library" },
    { title: "AI für Reichweite", desc: "Prompt Packs & Workflows für hohe Retention und Shareability.", tag: "AI" },
    { title: "Canva Pro Bonus", desc: "Premium Assets & Brand Kits — inklusive.", tag: "Bonus" },
  ];

  return (
    <section id="details" className="relative py-24 bg-[#0A0A0B]">
      <div className="absolute inset-0 [background-image:radial-gradient(1000px_380px_at_10%_0%,rgba(139,92,246,0.16),transparent),radial-gradient(800px_320px_at_100%_10%,rgba(212,175,55,0.16),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Alles, was Tempo macht</h2>
          <p className="mt-4 text-white/70">Ein operatives System ohne Füllstoff, gebaut für High‑Output Creators & Teams.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group p-6 rounded-2xl bg-black/50 border border-[#D4AF37]/25 hover:bg-black/60 transition relative overflow-hidden backdrop-blur">
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br from-violet-400/20 to-[#D4AF37]/20 blur-2xl" />
              <div className="text-[11px] inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-black/40 px-2 py-0.5 text-white/70 mb-3">{it.tag}</div>
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>

        {/* Value props row */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[['Templates','Spare 10+ Std/Woche'],['Workflows','Wiederholbare Resultate'],['Community','Schnelles Feedback']].map(([k,v]) => (
            <div key={k} className="rounded-xl border border-[#D4AF37]/25 bg-black/50 p-5 backdrop-blur">
              <p className="text-white font-medium">{k}</p>
              <p className="text-white/70 text-sm">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
