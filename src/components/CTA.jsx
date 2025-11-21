export default function CTA() {
  return (
    <section id="buy" className="relative py-28 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(800px_320px_at_80%_10%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-900 p-8 md:p-12 text-center">
            <p className="text-sm uppercase tracking-widest text-white/60">Enroll today</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-white">Start creating at hyperspeed</h2>
            <p className="mt-4 text-white/75 max-w-2xl mx-auto">Lifetime access to the training, full content bank, Canva Pro bonus, and AI workflows for virality. Build your system once — ship forever.</p>

            {/* Pricing pill */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80">
              <span className="text-white font-semibold text-lg">$297</span>
              <span className="text-white/60 text-sm">one-time</span>
            </div>

            <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-3 justify-center">
              <a href="https://buy.stripe.com/test_4gwbML0bI6clf0c4gg" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(16,185,129,.25)] transition">
                Buy Now
              </a>
              <p className="text-white/60 text-sm">Secure checkout • 14-day guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
