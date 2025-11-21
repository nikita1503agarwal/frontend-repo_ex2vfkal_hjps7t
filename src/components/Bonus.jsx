export default function Bonus() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 [background-image:radial-gradient(700px_300px_at_15%_10%,rgba(16,185,129,0.12),transparent),radial-gradient(600px_260px_at_85%_15%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Content Bank + Canva Pro</h2>
            <p className="mt-5 text-white/75">
              Plug into a pre-built bank of hooks, scripts, thumbnails, and post templates. Pair it with Canva Pro to design premium assets at record speed.
            </p>
            <ul className="mt-8 space-y-3 text-white/80">
              <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-emerald-400"/> 500+ battle-tested prompts and frameworks</li>
              <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-cyan-400"/> Swipe files for carousels, reels, shorts, and threads</li>
              <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-blue-400"/> Brand kits, fonts, and layouts to plug-and-play</li>
            </ul>
          </div>
          <div>
            <div className="relative p-1 rounded-2xl bg-gradient-to-r from-emerald-400/60 via-cyan-400/60 to-blue-400/60">
              <div className="rounded-2xl bg-slate-900 p-6">
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="aspect-[4/3] rounded-xl bg-white/5 border border-white/10" />
                  ))}
                </div>
                <p className="mt-4 text-center text-sm text-white/70">Preview of templates inside the bank</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
