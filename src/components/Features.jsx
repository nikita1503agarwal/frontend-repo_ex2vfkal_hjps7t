export default function Features() {
  const items = [
    {
      title: "The Speed System",
      desc: "A step-by-step production pipeline to go from idea to published in under 60 minutes.",
      tag: "Execution"
    },
    {
      title: "The Content Bank",
      desc: "500+ prompts, hooks, headline angles, and templates organized for instant reuse.",
      tag: "Library"
    },
    {
      title: "AI for Virality",
      desc: "Prompt packs and workflows to engineer share-worthy, high-retention posts and videos.",
      tag: "AI"
    },
    {
      title: "Canva Pro Included",
      desc: "Design faster with premium assets and brand kits – a bonus bundled with your access.",
      tag: "Bonus"
    },
  ];

  return (
    <section id="details" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(900px_350px_at_10%_0%,rgba(16,185,129,0.12),transparent),radial-gradient(700px_300px_at_100%_10%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Everything you need to move fast</h2>
          <p className="mt-4 text-white/70">A no-fluff operating system for high-output creators and teams.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/7.5 transition relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 blur-2xl" />
              <div className="text-[11px] inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-white/70 mb-3">{it.tag}</div>
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>

        {/* Value props row */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[['Templates','Save 10+ hrs/week'],['Workflows','Repeatable results'],['Community','Get feedback fast']].map(([k,v]) => (
            <div key={k} className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
              <p className="text-white font-medium">{k}</p>
              <p className="text-white/70 text-sm">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
