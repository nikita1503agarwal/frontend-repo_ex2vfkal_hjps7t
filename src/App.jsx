import Hero from './components/Hero'
import Features from './components/Features'
import Bonus from './components/Bonus'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-30 border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="container mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="font-semibold tracking-tight">HyperContent Lab</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#details" className="hover:text-white">What’s Inside</a>
            <a href="#buy" className="hover:text-white">Pricing</a>
            <a href="#buy" className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition">Buy</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Features />
        <Bonus />
        {/* AI Section */}
        <section className="relative py-24 bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(800px_320px_at_20%_0%,rgba(16,185,129,0.12),transparent),radial-gradient(700px_300px_at_80%_0%,rgba(59,130,246,0.12),transparent)]" />
          <div className="relative container mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/60">AI Workflows</p>
              <h2 className="mt-2 text-4xl md:text-6xl font-bold tracking-tight">Engineer viral content with AI</h2>
              <p className="mt-4 text-white/75">Guided prompts and blueprints for ideation, scripting, and editing. Combine timing, pattern interrupts, and retention mechanics so the algorithm works for you.</p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-emerald-400"/> Hook generators and angle matrices</li>
                <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-cyan-400"/> Long-to-short repurposing flows</li>
                <li className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-blue-400"/> Thumbnail/title split-tests and scripts</li>
              </ul>
              <div className="mt-8">
                <a href="#buy" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium backdrop-blur transition">See pricing</a>
              </div>
            </div>
            <div>
              <div className="relative p-1 rounded-2xl bg-gradient-to-r from-emerald-400/60 via-cyan-400/60 to-blue-400/60">
                <div className="rounded-2xl bg-slate-900 p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {['Hooks Lab','Script Forge','Idea Matrix','Repurpose OS','Title/Thumb','Analytics'].map((x) => (
                      <div key={x} className="aspect-video rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 text-sm">{x}</div>
                    ))}
                  </div>
                  <p className="mt-4 text-center text-sm text-white/70">Tooling you’ll master inside the program</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/70">
        <div className="container mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} HyperContent Lab. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#details" className="hover:text-white">Curriculum</a>
            <a href="#buy" className="hover:text-white">Buy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
