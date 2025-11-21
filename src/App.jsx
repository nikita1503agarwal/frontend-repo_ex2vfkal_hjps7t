import Hero from './components/Hero'
import Features from './components/Features'
import Bonus from './components/Bonus'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white relative overflow-hidden">
      {/* Global luxury background: layered radial glows + vignette + subtle grid */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0A0A0B]" />
        <div className="absolute inset-0 [background-image:radial-gradient(1200px_400px_at_10%_0%,rgba(139,92,246,0.20),transparent),radial-gradient(1000px_360px_at_90%_5%,rgba(212,175,55,0.18),transparent),radial-gradient(1200px_800px_at_50%_120%,rgba(212,175,55,0.12),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
        <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage:'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize:'18px 18px'}} />
      </div>

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
            <a href="#buy" className="px-4 py-2 rounded-full border border-[#D4AF37]/30 text-white hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition">Jetzt kaufen</a>
          </nav>
        </div>
      </header>

      <main className="pt-14 space-y-0">
        {/* One‑page flow: hero → persuasion cards → inclusions → CTA without hard section breaks */}
        <Hero />
        <Features />
        <Bonus />
        <CTA />
      </main>

      <footer className="relative border-t border-[#D4AF37]/20 bg-black/50 backdrop-blur">
        <div className="container mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} HyperContent Lab. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#buy" className="hover:text-white">Kaufen</a>
            <span className="text-white/40">•</span>
            <span className="text-white/60">Sicherer Checkout</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
