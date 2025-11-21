export default function Bonus() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Content Bank + Canva Pro</h2>
            <p className="mt-4 text-white/75">
              Get our pre-built content bank packed with hooks, scripts, and templates. Plus, enjoy Canva Pro included as a bonus so you can design premium assets without friction.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
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
