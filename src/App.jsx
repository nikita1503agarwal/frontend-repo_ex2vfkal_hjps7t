import Hero from './components/Hero'
import Features from './components/Features'
import Bonus from './components/Bonus'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-30 border-b border-[#D4AF37]/20 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D4AF37]/90 shadow-[0_0_20px_rgba(212,175,55,0.6)]" />
            </div>
            <span className="font-semibold tracking-wide uppercase text-white">HyperContent Lab</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#details" className="hover:text-white transition">Inside</a>
            <a href="#buy" className="hover:text-white transition">Pricing</a>
            <a href="#buy" className="px-4 py-2 rounded-full border border-[#D4AF37]/30 text-white hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition">Jetzt kaufen</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <section aria-hidden className="relative h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <Features />
        <Bonus />
        {/* AI Section */}
        <section className="relative py-24 bg-[#0A0A0B]">
          <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(900px_300px_at_15%_0%,rgba(139,92,246,0.15),transparent),radial-gradient(800px_320px_at_85%_0%,rgba(212,175,55,0.18),transparent)]" />
          <div className="relative container mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">AI Workflows</p>
              <h2 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">Automatisiere virales Content-Engineering</h2>
              <p className="mt-5 text-white/75">Geführte Prompts und Playbooks für Ideation, Scripting, Design und Publishing. Baue Wiederholungssysteme, die konstant Resultate liefern.</p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37]"/> Hook-Generatoren & Winkel-Matrizen</li>
                <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-violet-400"/> Long-to-Short Repurposing-Flows</li>
                <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-amber-300"/> Thumbnail/Title Tests & Skripte</li>
              </ul>
              <div className="mt-8">
                <a href="#buy" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#D4AF37]/40 text-white hover:bg-[#D4AF37]/10 transition">Preise ansehen</a>
              </div>
            </div>
            <div>
              <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-[#D4AF37]/50 via-violet-400/40 to-[#D4AF37]/30 shadow-[0_0_40px_rgba(139,92,246,0.25)]">
                <div className="rounded-2xl bg-black/60 border border-white/10 p-6 backdrop-blur">
                  <div className="grid grid-cols-2 gap-3">
                    {['Hooks Lab','Script Forge','Idea Matrix','Repurpose OS','Title/Thumb','Analytics'].map((x) => (
                      <div key={x} className="aspect-video rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 text-sm">{x}</div>
                    ))}
                  </div>
                  <p className="mt-4 text-center text-sm text-white/70">Tools, die du im Programm meisterst</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>

      <footer className="relative border-t border-[#D4AF37]/20 bg-black/50 backdrop-blur">
        <div className="container mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} HyperContent Lab. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#details" className="hover:text-white">Curriculum</a>
            <a href="#buy" className="hover:text-white">Kaufen</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
