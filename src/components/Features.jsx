export default function Features() {
  const items = [
    {
      title: "The Speed System",
      desc: "A step-by-step production pipeline to go from idea to published in under 60 minutes.",
    },
    {
      title: "The Content Bank",
      desc: "500+ prompts, hooks, headline angles, and templates organized for instant reuse.",
    },
    {
      title: "AI for Virality",
      desc: "Prompt packs and workflows to engineer share-worthy, high-retention posts and videos.",
    },
    {
      title: "Canva Pro Included",
      desc: "Design faster with premium assets and brand kits – a bonus bundled with your access.",
    },
  ];

  return (
    <section id="details" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(16,185,129,0.12),transparent),radial-gradient(500px_250px_at_90%_20%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Everything you need to move fast</h2>
          <p className="mt-3 text-white/70">No fluff. Just the playbooks, templates, and tools we use every day.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/7.5 transition">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400/80 mb-4" />
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
